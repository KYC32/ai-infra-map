# 검토표 — CoreWeave (NASDAQ: CRWV)

- 그룹: neocloud · 본사: US · 회사색: `#6fb3d9` · 기준일: 2026-10-07
- 요약: 뉴저지 리빙스턴 본사의 AI 전용 GPU 클라우드 기업(네오클라우드). 2026년 6월 말 활성 전력 1.5GW·계약 전력 약 3.7GW·수주잔고 약 1,040억 달러이며, 데이터센터는 대부분 채굴사·개발사 캠퍼스에 임차 입주하고 뉴저지 Kenilworth(지분 35% JV)에서 첫 자체 개발을 진행 중이다.
- 근거 24건: Tier1 18 · Tier2 5 · Tier3 1 · 단독 출처 4 · 상충 5

## 사이트 (기준일 시점)

| 사이트 | 위치 | 상태 | 확보 → 최종 | 통전 | AI 가동 | 건설 | 건물 | 상세 | 좌표 | 참여사 |
|---|---|---|---|---|---|---|---|---|---|---|
| Kenilworth NEST 11 | New Jersey (Kenilworth, Union County), US | 건설중 | 40MW → 40MW | 0MW | 0MW | 40MW | 1 | full | high (official_address) | coreweave(developer), coreweave(operator), coreweave(owner), coreweave(tenant) |
| CoreWeave Lancaster | Pennsylvania (Lancaster), US | 건설중 | 100MW → 100MW | 0MW | 0MW | 100MW | 1 | lite | high (official_address) | coreweave(tenant), coreweave(financier), chirisa-technology-parks(developer), machine-investment-group(developer), blue-owl(financier) |

## 건물·단계 일정

**Kenilworth NEST 11**

| 건물 | MW | 단계 이력 (basis) |
|---|---|---|
| NEST 11 (2000 Galloping Hill Rd) | 40 gross | 계획 2024-10 → 건설중 2025-09 → 가동 2027-Q1 (target) |

**CoreWeave Lancaster**

| 건물 | MW | 단계 이력 (basis) |
|---|---|---|
| Phase 1 — 216 Greenfield Rd | 100 gross | 계획 2025-07 → 건설중 2025-Q4 (estimate) → 가동 2027-Q3 (target) |

## 추정 항목

- Kenilworth NEST 11: 진행률 0.6 추정: 2025-09 착공 → 2027년 초 가동 목표(약 17개월) 중 기준일까지 약 13개월 경과. 선형이면 0.75지만 시운전·장비 설치 기간을 감안해 보수적으로 0.6.
- Kenilworth NEST 11: 확보 전력 40MW는 추정: 회사가 밝힌 계획 부하 40MW + 캠퍼스 기존 50MW 변전소, CoreWeave가 새 변전소 비용 부담. 실제 계통 연결 계약 용량·시점은 미공시.
- CoreWeave Lancaster: 착공 시점 2025-Q4는 추정: 공식 착공 발표 없음. 2025-09 보도에서 'Greenfield Rd 전환 중', Epoch AI 위성 분석(2026-07)에서 냉각설비 설치 진행 — Tier 3.
- CoreWeave Lancaster: 진행률 0.5 추정: 2025-Q4 착공 추정 → 2027년 여름 가동(약 21개월) 중 약 12개월 경과, 2026-07 냉각설비 설치 단계(Epoch AI).
- CoreWeave Lancaster: 확보 전력 100MW는 추정: CoreWeave가 밝힌 초기 용량 100MW와 PPL 계통 보강 투자(약 2억 달러)를 근거로 함. 실제 연계 계약 용량 미공시. '100MW'가 IT 기준인지 총전력 기준인지 불명 → 낮은 해석(gross 100MW) 채택. Epoch AI는 IT 92MW로 추정.

## 미해결 질문

- Lancaster 를 sites 에 넣을지 최종 판단 필요: CoreWeave 는 임차인+투자자이고 개발은 Chirisa Technology Parks·Machine Investment Group(자금 Blue Owl). 엄밀한 '자체 개발·소유'는 아님. 개발사들이 데이터에 없어 primary=coreweave 로 둠
- 아직 companies.json 에 없는 회사 id 참조: chirisa-technology-parks, machine-investment-group, blue-owl (Lancaster parties) — 병합 전 회사 항목 추가 또는 parties 에서 제거 필요
- Kenilworth JV 의 65% 파트너('관계사' 데이터센터 개발·운영사) 이름 미공시. Onyx Equities·Machine Investment Group(NEST 캠퍼스 매도 측)일 가능성 있으나 미확인
- Kenilworth 용량 상충: 회사 공식 페이지 40MW 부하 vs NJEDA 인용 보도 250MW. 규칙상 낮은 값(40MW) 채택. 250MW 가 캠퍼스 다단계 전체(별도 필지 토지임차 포함) 잠재치인지 확인 필요
- Kenilworth $322M 인수 주체: 언론은 CoreWeave 가 매입했다고 보도, 10-Q 는 JV(지분 35%)가 캠퍼스를 인수·개발하고 CoreWeave 는 15년 임차 — 등기상 소유자 확인 필요
- 10-Q 의 '두 개의 별도 JV(각각 데이터센터 개발 프로젝트 보유), 최대 17억 달러 지분 투자 약정' 대상 사이트 미공시 — Lancaster(CoreWeave 'has invested') 포함 여부 확인 필요. 확인 시 자체 사이트 추가 가능
- Lancaster 실제 착공일·계통 연계 용량·'100MW' 의 기준(IT/총전력) 미공시. 2단계 Harrisburg Pike(최대 300MW 확장분) 일정 없음 → 건물로 넣지 않음
- Kenilworth 는 액체냉각 여부 불명('closed-loop' 냉각만 공개) → 건물 kind 생략
- 인도네시아 360MW(IT, 3개 시설, 2028 가동): CoreWeave 가 '컴퓨트 환경을 소유·운영'한다고만 발표, 개발사·위치 미공개 → 사이트 미포함
- 계약 전력 수치: 2Q 보도자료 ~3.7GW(6/30) vs 9월 투자자 자료 ~4.2GW(8/11 기준). metrics 에는 6/30 공시치 3.7GW 채택
