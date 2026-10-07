// =============================================================
// 일회용: iren-3d 의 sites.json(v1) → 데이터 모델 v2 로 변환
// 사용법: node scripts/migrate-iren.mjs   → data/companies.json, data/companies/iren.json 생성
// -------------------------------------------------------------
// v1 은 건물마다 "현재 상태 + 날짜 몇 개" 를 저장했고, v2 는 "상태가 바뀐 시점 목록(phases)" 을 저장합니다.
// 변환 규칙 (기준일 AS_OF 에 v1 과 똑같은 상태가 나오도록):
//   energized(통전) → commissioning 단계 시작,  delivered(인도) → operating 단계 시작
//   현재 상태가 시작된 날짜를 모르면 → 기준일에 "보고된" 것으로 기록
//   건설중 + 진행률이 있으면 → 진행률과 목표일로 착공 시점을 역산 (basis: estimate, 설명 추가)
//   target(목표) → 다음 단계, basis: target  /  end(폐쇄) → retired, basis: target
// 결과는 사람이 확인한 뒤 커밋합니다.
// =============================================================
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { toMonth, monthKey } from '../src/data/timeline.js'

const read = (p) => JSON.parse(readFileSync(new URL(p, import.meta.url), 'utf8'))
const v1 = read('../../iren-3d/public/data/sites.json') // 원본: 옆 폴더 iren-3d 의 v1 데이터
const AS_OF = v1.as_of
const asOfM = toMonth(AS_OF.slice(0, 7))
const ADMIN1 = { 'Texas': 'US-TX', 'Texas (Fisher County)': 'US-TX', 'Oklahoma (Pittsburg County)': 'US-OK', 'British Columbia': 'CA-BC', 'South Australia': 'AU-SA', 'Extremadura': 'ES-EX' }
const METHOD = { high: 'official_address', medium: 'city_centroid', low: 'county_centroid' }

// 사이트 발표 시점: 타임라인·통전일 중 가장 이른 날짜
function announcedOf(site) {
  const dates = site.timeline.map((t) => t.date)
  if (site.substation.dates?.energized) dates.push(site.substation.dates.energized)
  const valid = dates.filter((d) => /^\d{4}/.test(d)).map((d) => d.slice(0, 7))
  return valid.sort((a, b) => toMonth(a) - toMonth(b))[0] ?? AS_OF.slice(0, 7)
}

function phasesOf(b, site, announced, notes) {
  const src = b.sources[0]
  const d = b.dates ?? {}
  const P = (status, from, basis = 'reported') => ({ status, from, basis, source: src })
  const ph = []
  switch (b.status) {
    case 'operating':
      if (d.energized && d.delivered) ph.push(P('commissioning', d.energized), P('operating', d.delivered))
      else ph.push(P('operating', d.energized ?? announced))
      break
    case 'commissioning':
      ph.push(P('planned', announced), P('commissioning', AS_OF.slice(0, 7)))
      if (d.target) ph.push(P('operating', d.target, 'target'))
      break
    case 'under_construction': {
      let start = AS_OF.slice(0, 7)
      let basis = 'reported'
      if (b.progress != null && d.target && b.progress < 1) {
        // 진행률로 착공 시점 역산: 남은 기간 / (1 - 진행률) = 전체 공기
        const remaining = toMonth(d.target, 'end') - asOfM
        const total = remaining / (1 - b.progress)
        start = monthKey(Math.round(asOfM - b.progress * total))
        basis = 'estimate'
        notes.push({
          note: `${b.name_ko ?? b.name}: 착공 시점은 기준일 진행률(${Math.round(b.progress * 100)}%)과 목표일로 역산한 추정`,
          note_en: `${b.name}: construction start estimated from reported progress and target date`,
          source: src,
        })
      }
      if (toMonth(start) > toMonth(announced)) ph.push(P('planned', announced))
      ph.push({ ...P('under_construction', start), basis })
      if (d.target) ph.push(P('operating', d.target, 'target'))
      break
    }
    case 'planned':
      ph.push(P('planned', AS_OF.slice(0, 7)))
      if (d.target) ph.push(P('operating', d.target, 'target'))
      break
    case 'decommissioning':
      ph.push(P('operating', announced), P('decommissioning', AS_OF.slice(0, 7)))
      if (d.end) ph.push(P('retired', d.end, 'target'))
      break
  }
  return ph
}

const sites = v1.sites.map((s) => {
  const announced = announcedOf(s)
  const notes = []
  const src = s.sources[0]
  const sub = s.substation
  // 계통 전력 이력: 발표 때 확보 → 통전(실제 또는 목표)
  const power = []
  if (sub.status === 'energized') {
    const e = sub.dates?.energized ?? announced
    if (toMonth(announced) < toMonth(e)) power.push({ from: announced, secured_mw: s.grid_mw, energized_mw: 0, basis: 'reported', source: src })
    power.push({ from: e, secured_mw: s.grid_mw, energized_mw: s.grid_mw, basis: 'reported', source: src })
  } else {
    power.push({ from: announced, secured_mw: s.grid_mw, energized_mw: 0, basis: 'reported', source: src })
    if (sub.dates?.target) power.push({ from: sub.dates.target, secured_mw: s.grid_mw, energized_mw: s.grid_mw, basis: 'target', source: src })
  }
  const buildings = s.buildings.map((b) => {
    const { status, dates, ...rest } = b
    return { ...rest, mw_basis: 'gross', phases: phasesOf(b, s, announced, notes) }
  })
  return {
    id: s.id,
    name: s.name,
    ...(s.name_ko ? { name_ko: s.name_ko } : {}),
    country: s.country,
    ...(ADMIN1[s.region] ? { admin1: ADMIN1[s.region] } : {}),
    region: s.region,
    coord: { lat: s.lat, lng: s.lng, confidence: s.coord_confidence, method: METHOD[s.coord_confidence] },
    primary: 'iren',
    parties: [{ company: 'iren', role: 'owner', source: src }],
    detail: s.buildings.length ? 'full' : 'lite',
    announced,
    acres: s.acres,
    grid_operator: s.grid_operator,
    cooling: s.cooling,
    summary_ko: s.summary_ko,
    summary_en: s.summary_en,
    power,
    substation: sub.voltage ? { voltage: sub.voltage } : {},
    buildings,
    deliveries: s.deliveries,
    timeline: s.timeline,
    estimates: [...s.estimates, ...notes],
    sources: s.sources,
    confidence: s.confidence,
  }
})

const c = v1.company
const csrc = c.sources[0]
const companies = {
  companies: [
    {
      id: 'iren',
      name: 'IREN',
      name_ko: '아이렌',
      group: 'miner',
      ticker: { symbol: 'IREN', exchange: 'NASDAQ' },
      color: '#7f9cf5',
      hq_country: 'AU',
      summary_ko: '호주 시드니 본사. 비트코인 채굴에서 AI 클라우드로 전환 중이며 Microsoft·NVIDIA 등과 GPU 클라우드 계약을 맺었다.',
      summary_en: 'Sydney-based. Transitioning from bitcoin mining to AI cloud with GPU contracts from Microsoft, NVIDIA and others.',
      metrics: [
        { key: 'contracted_arr_usd_bn', value: c.contracted_arr_usd_bn, unit: 'USD bn', label_ko: '계약 ARR', label_en: 'Contracted ARR', as_of: '2026-08', source: csrc },
        { key: 'operating_arr_usd_bn', value: c.operating_arr_usd_bn, unit: 'USD bn', label_ko: '운영 ARR', label_en: 'Operating ARR', as_of: '2026-08', source: csrc },
        { key: 'backlog_usd_bn', value: c.backlog_usd_bn, unit: 'USD bn', label_ko: '수주잔고', label_en: 'Backlog', as_of: '2026-10', source: csrc },
        { key: 'gpus_total', value: c.gpus_total, unit: 'GPU', label_ko: '총 GPU(설치+주문)', label_en: 'GPUs (installed + ordered)', as_of: '2026-03', source: c.sources[3] ?? csrc },
      ],
      sources: c.sources,
    },
  ],
  programs: [],
}

mkdirSync(new URL('../data/companies/', import.meta.url), { recursive: true })
writeFileSync(new URL('../data/companies.json', import.meta.url), JSON.stringify(companies, null, 2) + '\n')
writeFileSync(new URL('../data/companies/iren.json', import.meta.url), JSON.stringify({ company_id: 'iren', as_of: AS_OF, sites }, null, 2) + '\n')
console.log(`✅ data/companies.json, data/companies/iren.json — 사이트 ${sites.length}곳 변환 (기준일 ${AS_OF})`)
