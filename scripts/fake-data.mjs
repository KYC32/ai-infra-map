// =============================================================
// 성능 시험용 가짜 데이터 (실제 데이터 아님!) — data-fake/ 폴더에 생성 (git 제외)
// 사용법: node scripts/fake-data.mjs && DATA_DIR=data-fake node scripts/build-data.mjs
// 되돌리기: node scripts/build-data.mjs
// =============================================================
import { writeFileSync, mkdirSync, rmSync } from 'node:fs'

const OUT = new URL('../data-fake/', import.meta.url)
rmSync(OUT, { recursive: true, force: true })
mkdirSync(new URL('companies/', OUT), { recursive: true })

// 결정적 의사난수 (실행할 때마다 같은 결과)
let seed = 7
const rnd = () => ((seed = (seed * 9301 + 49297) % 233280) / 233280)
const pick = (a) => a[Math.floor(rnd() * a.length)]

const SPOTS = [
  ['US', 32.4, -99.7], ['US', 31.0, -102.0], ['US', 33.5, -101.9], ['US', 35.2, -101.8], ['US', 32.8, -96.8],
  ['US', 40.1, -83.0], ['US', 33.7, -84.4], ['US', 39.0, -77.5], ['US', 43.0, -88.0], ['US', 46.9, -98.7],
  ['US', 41.2, -96.0], ['US', 36.1, -115.1], ['US', 33.4, -112.0], ['US', 35.1, -90.0], ['US', 32.5, -92.1],
  ['CA', 53.9, -122.7], ['CA', 51.0, -114.0], ['CA', 45.5, -73.6], ['FI', 60.5, 25.2], ['NO', 60.4, 5.3],
  ['ES', 38.9, -7.0], ['FR', 48.9, 2.3], ['DE', 50.1, 8.7], ['IE', 53.3, -6.3], ['GB', 51.5, -0.6],
  ['KR', 35.5, 129.3], ['KR', 36.5, 127.3], ['KR', 37.9, 127.7], ['JP', 35.7, 139.7], ['JP', 34.7, 135.5],
  ['AU', -33.9, 151.0], ['AU', -34.0, 139.3], ['IN', 19.0, 72.9], ['SG', 1.35, 103.8], ['AE', 24.4, 54.4],
]
const groups = ['miner', 'neocloud', 'hyperscaler', 'korea']
const colors = ['#f2a65a', '#b18cf2', '#5ac8e0', '#e07ab8', '#8fbf5a', '#d9b24c']
const companies = colors.map((color, i) => ({
  id: `fake-${i + 1}`, name: `Fake Co ${i + 1}`, group: groups[i % 4], color, hq_country: 'US',
  summary_ko: '성능 시험용 가짜 회사', summary_en: 'Fake company for performance testing', metrics: [], sources: ['https://example.com'],
}))
const statuses = ['operating', 'under_construction', 'planned', 'commissioning']
const src = 'https://example.com'
const files = Object.fromEntries(companies.map((c) => [c.id, { company_id: c.id, as_of: '2026-10-06', sites: [] }]))
for (let i = 0; i < 50; i++) {
  const [cc, lat, lng] = pick(SPOTS)
  const c = companies[i % companies.length]
  const mw = Math.round((50 + rnd() * 1500) / 10) * 10
  const year = 2024 + Math.floor(rnd() * 4)
  const st = pick(statuses)
  const phases = [{ status: 'planned', from: `${year}-01`, basis: 'reported', source: src }]
  if (st !== 'planned') phases.push({ status: 'under_construction', from: `${year}-06`, basis: 'reported', source: src })
  if (st === 'operating') phases.push({ status: 'operating', from: `${Math.min(2026, year + 1)}-06`, basis: 'reported', source: src })
  files[c.id].sites.push({
    id: `fake-site-${i + 1}`, name: `Fake Site ${i + 1}`, country: cc, region: 'Fake',
    coord: { lat: lat + (rnd() - 0.5) * 2, lng: lng + (rnd() - 0.5) * 2, confidence: 'low', method: 'region_centroid' },
    primary: c.id, parties: [{ company: c.id, role: 'owner', source: src }], detail: 'lite',
    announced: `${year}-01`, acres: 300, grid_operator: 'Fake', cooling: 'air', summary_ko: '가짜', summary_en: 'fake',
    power: [{ from: `${year}-01`, secured_mw: mw, energized_mw: 0, basis: 'reported', source: src }],
    substation: {},
    buildings: [{ id: 'b1', name: 'Phase 1', mw_basis: 'gross', gross_mw: Math.round(mw * 0.4), phases, progress: st === 'under_construction' ? 0.5 : undefined, sources: [src] }],
    deliveries: [], timeline: [], estimates: [], sources: [src], confidence: 'low',
  })
}
writeFileSync(new URL('companies.json', OUT), JSON.stringify({ companies, programs: [] }, null, 2))
for (const [id, f] of Object.entries(files)) writeFileSync(new URL(`companies/${id}.json`, OUT), JSON.stringify(f, null, 2))
console.log('✅ data-fake/ — 가짜 회사 6곳, 사이트 50곳 (성능 시험용)')
