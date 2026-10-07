// =============================================================
// 데이터 검증 (npm run validate — 빌드 전에 자동 실행)
// 실제 검사 내용은 scripts/lib/validate-core.mjs 에 있습니다.
// 오류가 하나라도 있으면 빌드를 멈추고, 경고는 표시만 합니다.
// =============================================================
import { readFileSync, readdirSync } from 'node:fs'
import { validateAll } from './lib/validate-core.mjs'
import { totalsAt, toMonth } from '../src/data/timeline.js'

const DATA = new URL('../data/', import.meta.url)
const companiesFile = JSON.parse(readFileSync(new URL('companies.json', DATA), 'utf8'))
const files = Object.fromEntries(
  readdirSync(new URL('companies/', DATA))
    .filter((f) => f.endsWith('.json'))
    .map((f) => [f.replace(/\.json$/, ''), JSON.parse(readFileSync(new URL(`companies/${f}`, DATA), 'utf8'))]),
)

const { errors, warns, infra } = validateAll({ companiesFile, files })
warns.forEach((w) => console.warn('⚠️  ' + w))
if (errors.length) {
  console.error('❌ 데이터 오류:')
  errors.forEach((e) => console.error('  - ' + e))
  process.exit(1)
}
// 기준일 시점 합계: 확정 확보(계약·승인·통전) / 발표 규모(회사 목표 포함)
const t = totalsAt(infra, toMonth(infra.as_of.slice(0, 7)))
console.log(`✅ 데이터 OK — 회사 ${infra.companies.length}곳, 사이트 ${infra.sites.length}곳, 기준일(${infra.as_of}) 확정 확보 ${Math.round(t.firm).toLocaleString()}MW / 발표 규모 ${Math.round(t.secured).toLocaleString()}MW`)
