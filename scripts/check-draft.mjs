// =============================================================
// 리서치 초안 검사: node scripts/check-draft.mjs <회사id>
// research/drafts/<회사id>.json 을 기존 데이터에 "합쳤다고 가정" 하고 모든 검증 규칙을 돌립니다.
// (실제 data/ 폴더는 건드리지 않음)
// =============================================================
import { readFileSync, readdirSync, existsSync } from 'node:fs'
import { Draft } from './research-schema.mjs'
import { validateAll } from './lib/validate-core.mjs'

const id = process.argv[2]
if (!id) { console.error('사용법: node scripts/check-draft.mjs <회사id>'); process.exit(1) }
const draftPath = new URL(`../research/drafts/${id}.json`, import.meta.url)
if (!existsSync(draftPath)) { console.error(`초안 없음: research/drafts/${id}.json`); process.exit(1) }
const draft = JSON.parse(readFileSync(draftPath, 'utf8'))

// 1) 초안 형식 (company + file + claims)
const parsed = Draft.safeParse(draft)
if (!parsed.success) {
  console.error('❌ 초안 형식 오류:')
  parsed.error.issues.slice(0, 40).forEach((i) => console.error(`  - ${i.path.join('.')}: ${i.message}`))
  process.exit(1)
}

// 2) 기존 데이터 + 초안으로 전체 검증
const DATA = new URL('../data/', import.meta.url)
const companiesFile = JSON.parse(readFileSync(new URL('companies.json', DATA), 'utf8'))
const files = Object.fromEntries(
  readdirSync(new URL('companies/', DATA)).filter((f) => f.endsWith('.json'))
    .map((f) => [f.replace(/\.json$/, ''), JSON.parse(readFileSync(new URL(`companies/${f}`, DATA), 'utf8'))]),
)
const others = companiesFile.companies.filter((c) => c.id !== draft.company.id)
// 초안이 참조하지만 아직 없는 회사(입주사 등)는 임시 항목으로 채워 참조 오류를 경고로 바꿈
const known = new Set([...others.map((c) => c.id), draft.company.id])
const missing = new Set()
for (const s of draft.file.sites) for (const p of s.parties) if (!known.has(p.company)) missing.add(p.company)
const placeholders = [...missing].map((cid, i) => ({
  id: cid, name: cid, group: 'neocloud', color: `#${(0x404040 + i * 0x101010).toString(16)}`, hq_country: 'US',
  summary_ko: '(임시)', summary_en: '(placeholder)', metrics: [], sources: ['https://example.com'],
}))
const result = validateAll({
  companiesFile: { ...companiesFile, companies: [...others, draft.company, ...placeholders] },
  files: { ...files, [id]: draft.file },
})
missing.forEach((cid) => result.warns.push(`아직 companies.json 에 없는 회사 '${cid}' 를 참조 — 병합 전에 회사 항목을 추가해야 함`))
// claims 의 출처 등급 요약
const tiers = draft.claims.reduce((m, c) => ({ ...m, [c.source_tier]: (m[c.source_tier] ?? 0) + 1 }), {})
result.warns.forEach((w) => console.warn('⚠️  ' + w))
if (result.errors.length) {
  console.error('❌ 검증 오류:')
  result.errors.forEach((e) => console.error('  - ' + e))
  process.exit(1)
}
console.log(`✅ 초안 OK — ${draft.company.name}: 사이트 ${draft.file.sites.length}곳, 근거 ${draft.claims.length}건 (Tier1 ${tiers[1] ?? 0} / Tier2 ${tiers[2] ?? 0} / Tier3 ${tiers[3] ?? 0}), 미해결 질문 ${draft.open_questions.length}건`)
