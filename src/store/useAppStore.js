// 앱 전역 상태 (zustand)
// "스토어가 진실의 원천, 3D 씬과 HTML UI 는 그 투영" 구조입니다.
import { create } from 'zustand'
import { STATUS } from '../data/status.js'

// URL 해시(#site=childress)로 딥링크된 사이트가 있으면 처음부터 그 사이트를 엽니다.
function siteFromHash() {
  const m = window.location.hash.match(/site=([a-z0-9-]+)/)
  return m ? m[1] : null
}

export const useAppStore = create((set, get) => ({
  // ----- 데이터 -----
  data: null,            // 화면용 데이터 (loadSites → viewInfra 가 채움)
  loadError: null,

  // ----- 화면 상태 -----
  view: siteFromHash() ? 'site' : 'globe', // 'globe' | 'site'
  selectedSiteId: siteFromHash(),          // 선택된 사이트 id
  hoverId: null,                           // 마우스 올린 사이트/건물 id
  transitioning: false,                    // 카메라 전환(페이드) 중인지
  // 카메라 전환 요청: UI/핀이 요청하면 CameraRig 가 애니메이션 후 실제로 view 를 바꿉니다
  pending: null,                           // null | { type: 'site', id } | { type: 'globe' }
  lang: (navigator.language || 'ko').startsWith('ko') ? 'ko' : 'en',
  // 상태 필터: 비어 있으면 전체 표시, 값이 있으면 그 상태만 강조
  activeStatuses: new Set(),
  // 회사·그룹 필터 (비어 있으면 전체)
  activeCompanies: new Set(),
  activeGroups: new Set(),
  // 핀 색 기준: 'status'(가동·건설·계획 상태색) | 'company'(회사색)
  colorMode: 'status',
  // 순위표 기준 지표: secured(확보) | ai(AI 가동) | building(건설·시운전)
  rankMetric: 'secured',
  // 왼쪽 패널 탭: 'rank'(회사 순위) | 'sites'(사이트 목록)
  leftTab: 'rank',

  // ----- 액션 -----
  setData: (data) => set({ data }),
  setLoadError: (err) => set({ loadError: err }),
  setHover: (id) => set({ hoverId: id }),
  setTransitioning: (v) => set({ transitioning: v }),
  toggleLang: () => set({ lang: get().lang === 'ko' ? 'en' : 'ko' }),

  // 전환 "요청" (애니메이션 포함) — UI 와 핀은 이것을 호출합니다
  requestSite: (id) => { if (!get().pending) set({ pending: { type: 'site', id } }) },
  requestGlobe: () => { if (!get().pending) set({ pending: { type: 'globe' } }) },
  // 지구본에서 특정 지역(북미·유럽·아시아)으로 카메라 이동
  requestRegion: (lat, lng) => { if (!get().pending && get().view === 'globe') set({ pending: { type: 'region', lat, lng } }) },
  clearPending: () => set({ pending: null }),

  // 사이트 선택 → 캠퍼스 뷰로 (CameraRig 가 애니메이션 도중에 호출) (URL 해시도 갱신해 공유 가능하게)
  selectSite: (id) => {
    window.history.replaceState(null, '', id ? `#site=${id}` : ' ')
    set({ selectedSiteId: id, view: id ? 'site' : 'globe', hoverId: null })
  },
  goGlobe: () => {
    window.history.replaceState(null, '', ' ')
    set({ view: 'globe', selectedSiteId: null, hoverId: null })
  },

  // 범례 클릭: 해당 상태만 강조 (다시 클릭하면 해제)
  toggleStatus: (status) => {
    const next = new Set(get().activeStatuses)
    next.has(status) ? next.delete(status) : next.add(status)
    set({ activeStatuses: next })
  },
  clearStatuses: () => set({ activeStatuses: new Set() }),

  // 회사 필터: 같은 회사를 다시 누르면 해제
  toggleCompany: (id) => {
    const next = new Set(get().activeCompanies)
    next.has(id) ? next.delete(id) : next.add(id)
    set({ activeCompanies: next })
  },
  toggleGroup: (g) => {
    const next = new Set(get().activeGroups)
    next.has(g) ? next.delete(g) : next.add(g)
    set({ activeGroups: next })
  },
  clearCompanyFilters: () => set({ activeCompanies: new Set(), activeGroups: new Set() }),
  setColorMode: (mode) => set({ colorMode: mode }),
  setRankMetric: (metric) => set({ rankMetric: metric }),
  setLeftTab: (tab) => set({ leftTab: tab }),
}))

// 선택된 사이트 객체를 편하게 꺼내는 셀렉터
export const selectSelectedSite = (s) =>
  s.data?.sites.find((x) => x.id === s.selectedSiteId) ?? null

// 상태 필터에 걸리는지 (필터가 없으면 항상 true)
export function isStatusActive(activeStatuses, status) {
  return activeStatuses.size === 0 || activeStatuses.has(status)
}

// 사이트가 회사·그룹 필터를 통과하는지
export function isCompanyActive(state, site) {
  const { activeCompanies, activeGroups, data } = state
  if (activeCompanies.size && !activeCompanies.has(site.primary)) return false
  if (activeGroups.size) {
    const group = data?.companies.find((c) => c.id === site.primary)?.group
    if (!activeGroups.has(group)) return false
  }
  return true
}

// 상태·회사·그룹 필터를 모두 통과하는지
export function isSiteActive(state, site) {
  return isStatusActive(state.activeStatuses, site.status) && isCompanyActive(state, site)
}

export { STATUS }
