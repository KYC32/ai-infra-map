// =============================================================
// 리서치 초안 검토표: node scripts/review.mjs <회사id>
// 사람이 승인할 수 있도록 초안을 Markdown 표로 정리합니다 → research/drafts/<id>.review.md
// (기존 데이터가 있으면 무엇이 바뀌는지도 표시)
// =============================================================
import { readFileSync, writeFileSync, existsSync } from 'node:fs'
import { toMonth, siteStatusAt, siteMetricsAt, monthKey } from '../src/data/timeline.js'

const id = process.argv[2]
if (!id) { console.error('사용법: node scripts/review.mjs <회사id>'); process.exit(1) }
const draft = JSON.parse(readFileSync(new URL(`../research/drafts/${id}.json`, import.meta.url), 'utf8'))
const curPath = new URL(`../data/companies/${id}.json`, import.meta.url)
const cur = existsSync(curPath) ? JSON.parse(readFileSync(curPath, 'utf8')) : null

const asOf = toMonth(draft.file.as_of.slice(0, 7))
const KO = { operating: '가동', commissioning: '시운전', under_construction: '건설중', planned: '계획', decommissioning: '폐쇄중' }
const fmt = (mw) => (mw >= 1000 ? `${(mw / 1000).toFixed(2)}GW` : `${Math.round(mw)}MW`)
const lines = []
const L = (s = '') => lines.push(s)

const c = draft.company
L(`# 검토표 — ${c.name} (${c.ticker ? `${c.ticker.exchange}: ${c.ticker.symbol}` : '비상장'})`)
L()
L(`- 그룹: ${c.group} · 본사: ${c.hq_country} · 회사색: \`${c.color}\` · 기준일: ${draft.file.as_of}`)
L(`- 요약: ${c.summary_ko}`)
const tiers = draft.claims.reduce((m, x) => ({ ...m, [x.source_tier]: (m[x.source_tier] ?? 0) + 1 }), {})
const conflicts = draft.claims.filter((x) => x.verification === 'conflict').length
const single = draft.claims.filter((x) => x.verification === 'single_source').length
L(`- 근거 ${draft.claims.length}건: Tier1 ${tiers[1] ?? 0} · Tier2 ${tiers[2] ?? 0} · Tier3 ${tiers[3] ?? 0} · 단독 출처 ${single} · 상충 ${conflicts}`)
L()
L('## 사이트 (기준일 시점)')
L()
L('| 사이트 | 위치 | 상태 | 확보 → 최종 | 통전 | AI 가동 | 건설 | 건물 | 상세 | 좌표 | 참여사 |')
L('|---|---|---|---|---|---|---|---|---|---|---|')
for (const s of draft.file.sites) {
  const site = { ...s, as_of: draft.file.as_of }
  const mt = siteMetricsAt(site, asOf)
  const st = siteStatusAt(site, asOf)
  const parties = s.parties.map((p) => `${p.company}(${p.role})`).join(', ')
  L(`| ${s.name} | ${s.region}, ${s.country} | ${KO[st] ?? (st ?? '발표 전')} | ${fmt(mt.secured)} → ${fmt(s.power.at(-1).secured_mw)} | ${fmt(mt.energized)} | ${fmt(mt.ai)} | ${fmt(mt.building)} | ${s.buildings.length} | ${s.detail} | ${s.coord.confidence} (${s.coord.method}) | ${parties} |`)
}
L()
L('## 건물·단계 일정')
L()
for (const s of draft.file.sites) {
  if (!s.buildings.length) continue
  L(`**${s.name}**`)
  L()
  L('| 건물 | MW | 단계 이력 (basis) |')
  L('|---|---|---|')
  for (const b of s.buildings) {
    const mw = b.gross_mw != null ? `${b.gross_mw} gross` : b.it_mw != null ? `${b.it_mw} IT` : '–'
    const ph = b.phases.map((p) => `${KO[p.status] ?? p.status} ${p.from}${p.basis !== 'reported' ? ` (${p.basis})` : ''}`).join(' → ')
    L(`| ${b.name} | ${mw} | ${ph} |`)
  }
  L()
}
const est = draft.file.sites.flatMap((s) => s.estimates.map((e) => `${s.name}: ${e.note}`))
if (est.length) { L('## 추정 항목'); L(); est.forEach((e) => L(`- ${e}`)); L() }
if (draft.open_questions.length) { L('## 미해결 질문'); L(); draft.open_questions.forEach((q) => L(`- ${q}`)); L() }
if (cur) {
  L('## 기존 데이터와 차이')
  L()
  const before = new Set(cur.sites.map((s) => s.id)), after = new Set(draft.file.sites.map((s) => s.id))
  for (const x of after) if (!before.has(x)) L(`- 추가: ${x}`)
  for (const x of before) if (!after.has(x)) L(`- 삭제: ${x}`)
  for (const s of draft.file.sites) {
    const o = cur.sites.find((y) => y.id === s.id)
    if (!o) continue
    const a = siteMetricsAt({ ...o, as_of: cur.as_of }, asOf), b = siteMetricsAt({ ...s, as_of: draft.file.as_of }, asOf)
    if (a.secured !== b.secured || a.ai !== b.ai || a.building !== b.building) L(`- ${s.id}: 확보 ${fmt(a.secured)}→${fmt(b.secured)}, AI ${fmt(a.ai)}→${fmt(b.ai)}, 건설 ${fmt(a.building)}→${fmt(b.building)}`)
  }
  L()
}
const out = new URL(`../research/drafts/${id}.review.md`, import.meta.url)
writeFileSync(out, lines.join('\n'))
console.log(lines.join('\n'))
