// =============================================================
// 승인된 리서치 초안 병합: node scripts/merge-draft.mjs <회사id>
// - research/drafts/<id>.json 의 file → data/companies/<id>.json (reviewed_at 기록, claims 는 빼고)
// - company 항목 → data/companies.json (있으면 교체, 없으면 추가)
// - 참조하는 회사(입주사 등)가 companies.json 에 없으면 병합을 멈추고 목록을 알려 줌
// 병합 후에는 npm run validate && npm test 로 확인하세요.
// =============================================================
import { readFileSync, writeFileSync } from 'node:fs'

const id = process.argv[2]
if (!id) { console.error('사용법: node scripts/merge-draft.mjs <회사id>'); process.exit(1) }
const draft = JSON.parse(readFileSync(new URL(`../research/drafts/${id}.json`, import.meta.url), 'utf8'))
const cfPath = new URL('../data/companies.json', import.meta.url)
const cf = JSON.parse(readFileSync(cfPath, 'utf8'))

const known = new Set([...cf.companies.map((c) => c.id), draft.company.id])
const missing = new Set()
for (const s of draft.file.sites) for (const p of s.parties) if (!known.has(p.company)) missing.add(p.company)
if (missing.size) {
  console.error(`❌ companies.json 에 없는 회사: ${[...missing].join(', ')} — 회사 항목을 먼저 추가하세요.`)
  process.exit(1)
}

const today = new Date().toISOString().slice(0, 10)
const others = cf.companies.filter((c) => c.id !== draft.company.id)
cf.companies = [...others, draft.company]
writeFileSync(cfPath, JSON.stringify(cf, null, 2) + '\n')
writeFileSync(new URL(`../data/companies/${id}.json`, import.meta.url), JSON.stringify({ ...draft.file, reviewed_at: today }, null, 2) + '\n')
console.log(`✅ 병합: data/companies/${id}.json (사이트 ${draft.file.sites.length}곳), companies.json 갱신 — 이제 npm run validate && npm test`)
