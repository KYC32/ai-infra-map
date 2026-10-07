// =============================================================
// 왼쪽 패널: [회사 순위 | 사이트] 탭
// 순위표: 확보 / AI 가동 / 건설 MW 기준 회사 순위 + 가동·건설·계획 비율 막대
// 행을 누르면 그 회사만 강조(필터), 다시 누르면 해제
// =============================================================
import { useMemo } from 'react'
import { useAppStore } from '../store/useAppStore.js'
import { useT, pickName } from '../i18n/useT.js'
import { companyRanking } from '../data/timeline.js'
import { styleOf } from '../data/statusStyle.js'
import { fmtMw } from '../scene/geo.js'
import SiteList from './SiteList.jsx'

const GROUPS = ['miner', 'neocloud', 'hyperscaler', 'korea']
const METRICS = ['secured', 'ai', 'building']

export default function LeftPanel() {
  const t = useT()
  const leftTab = useAppStore((s) => s.leftTab)
  const setLeftTab = useAppStore((s) => s.setLeftTab)
  const sheetOpen = useAppStore((s) => s.sheetOpen)
  return (
    <div className={`left-panel panel${sheetOpen ? ' sheet-open' : ''}`}>
      <div className="tabs">
        <button className={leftTab === 'rank' ? 'on' : ''} onClick={() => setLeftTab('rank')}>{t.rank.tab}</button>
        <button className={leftTab === 'sites' ? 'on' : ''} onClick={() => setLeftTab('sites')}>{t.rank.sitesTab}</button>
      </div>
      <GroupChips />
      {leftTab === 'rank' ? <Leaderboard /> : <SiteList />}
    </div>
  )
}

// 회사 그룹 필터 칩 (데이터에 있는 그룹만 표시)
function GroupChips() {
  const t = useT()
  const companies = useAppStore((s) => s.data.companies)
  const activeGroups = useAppStore((s) => s.activeGroups)
  const activeCompanies = useAppStore((s) => s.activeCompanies)
  const toggleGroup = useAppStore((s) => s.toggleGroup)
  const clear = useAppStore((s) => s.clearCompanyFilters)
  const present = GROUPS.filter((g) => companies.some((c) => c.group === g))
  return (
    <div className="chips">
      {present.map((g) => (
        <button key={g} className={`chip${activeGroups.has(g) ? ' on' : ''}`} onClick={() => toggleGroup(g)}>
          {t.groups[g]}
        </button>
      ))}
      {(activeGroups.size > 0 || activeCompanies.size > 0) && (
        <button className="chip reset" onClick={clear}>{t.rank.reset}</button>
      )}
    </div>
  )
}

function Leaderboard() {
  const t = useT()
  const lang = useAppStore((s) => s.lang)
  const data = useAppStore((s) => s.data)
  const metric = useAppStore((s) => s.rankMetric)
  const setMetric = useAppStore((s) => s.setRankMetric)
  const activeGroups = useAppStore((s) => s.activeGroups)
  const activeCompanies = useAppStore((s) => s.activeCompanies)
  const toggleCompany = useAppStore((s) => s.toggleCompany)

  const rows = useMemo(
    () => companyRanking(data.raw, data.month, { metric, groups: activeGroups.size ? activeGroups : null }),
    [data, metric, activeGroups],
  )
  const byId = Object.fromEntries(data.companies.map((c) => [c.id, c]))
  const max = Math.max(1, ...rows.map((r) => r.secured))

  return (
    <div className="leaderboard">
      <div className="seg">
        {METRICS.map((m) => (
          <button key={m} className={metric === m ? 'on' : ''} onClick={() => setMetric(m)}>{t.rank.metric[m]}</button>
        ))}
      </div>
      <ol className="rank-list">
        {rows.map((r) => {
          const c = byId[r.companyId]
          const off = activeCompanies.size > 0 && !activeCompanies.has(r.companyId)
          return (
            <li key={r.companyId}>
              <button className={`rank-row${off ? ' off' : ''}${activeCompanies.has(r.companyId) ? ' on' : ''}`} onClick={() => toggleCompany(r.companyId)}>
                <span className="rank-no">{r.rank}</span>
                <span className="dot" style={{ background: c.color }} />
                <span className="rank-name">
                  {pickName(c, lang)}
                  {c.ticker && <span className="ticker">{c.ticker.symbol}</span>}
                </span>
                <span className="rank-val">{r.hasEstimate ? '~' : ''}{fmtMw(r[metric])}</span>
                {/* 가동(AI) · 건설 · 계획 비율 막대 — 길이는 1위 확보 전력 대비 */}
                <span className="rank-bar">
                  <i style={{ width: `${(r.ai / max) * 100}%`, background: styleOf('operating').color }} />
                  <i style={{ width: `${(r.building / max) * 100}%`, background: styleOf('under_construction').color }} />
                  <i style={{ width: `${(r.planned / max) * 100}%`, background: styleOf('planned').color }} />
                </span>
              </button>
            </li>
          )
        })}
      </ol>
      <div className="rank-note">{t.rank.note}</div>
    </div>
  )
}
