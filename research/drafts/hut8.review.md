# 검토표 — Hut 8 Corp. (NASDAQ: HUT)

- 그룹: miner · 본사: US · 회사색: `#d8cc6a` · 기준일: 2026-10-07
- 요약: 마이애미 본사의 에너지 인프라 플랫폼(채굴은 자회사 American Bitcoin이 담당). 전력 선확보 모델로 루이지애나 River Bend(Fluidstack·Anthropic, Google 보증 245MW IT)와 텍사스 Beacon Point(익명 AA- 이상 테넌트 704MW IT) 두 AI 캠퍼스를 개발 중이며, 계약 IT 용량 949MW·기본 계약가치 약 $26.6bn.
- 근거 34건: Tier1 33 · Tier2 1 · Tier3 0 · 단독 출처 4 · 상충 2

## 사이트 (기준일 시점)

| 사이트 | 위치 | 상태 | 확보 → 최종 | 통전 | AI 가동 | 건설 | 건물 | 상세 | 좌표 | 참여사 |
|---|---|---|---|---|---|---|---|---|---|---|
| River Bend | Louisiana (West Feliciana Parish, St. Francisville), US | 건설중 | 330MW → 330MW | 0MW | 0MW | 330MW | 1 | full | medium (city_centroid) | hut8(developer), hut8(owner), fluidstack(tenant), anthropic(end_user), google(financier) |
| Beacon Point | Texas (Nueces County, Corpus Christi area), US | 건설중 | 1.00GW → 1.00GW | 0MW | 0MW | 1.00GW | 2 | full | low (county_centroid) | hut8(developer), hut8(owner) |

## 건물·단계 일정

**River Bend**

| 건물 | MW | 단계 이력 (basis) |
|---|---|---|
| Phase I data center (245MW IT) | 330 gross | 계획 2025-12 → 건설중 2025-12 → 가동 2027-Q2 (target) |

**Beacon Point**

| 건물 | MW | 단계 이력 (basis) |
|---|---|---|
| Phase 1 (6 data halls, 352MW IT) | 500 gross | 계획 2026-05 → 건설중 2026-06 → 가동 2027-Q3 (target) |
| Phase 2 (352MW IT) | 500 gross | 계획 2026-07 → 건설중 2026-07 → 가동 2028-Q2 (target) |

## 추정 항목

- River Bend: 진행률 0.5: 2025-12 착공, 2026 Q2 수직 공사 시작·변전소 공사·장납기 장비 입고, 첫 홀 2027 Q2 목표(약 16개월 공정 중 10개월 경과)로 근사 (추정)
- River Bend: 통전 2027 Q1·330MW 일괄: 2025-12 자료는 '2026-07-01 330MW 사용 가능'이라 했으나 2026-06 말 기준 변전소가 공사 중이어서, 첫 홀 커미셔닝(2027 Q2) 직전으로 추정. 실제로는 홀별 단계 통전일 가능성
- River Bend: 데이터홀 수·홀별 MW 미공개 → 245MW IT 를 한 건물로 표기하고 가동 시점은 첫 홀(2027 Q2)로 둠. 회사는 나머지 홀을 2027년 중(약 60일 간격, Tier 2) 순차 가동한다고 밝힘. 냉각 방식은 미공개라 datahall_liquid 는 우리 가정
- Beacon Point: 1단계 착공월 2026-06: 2분기 중 '건설 착수(Commenced the buildout)' 문구와 2026-06-09 채권 발행 완료로 근사. 진행률 0.2 는 2026-06 착공 → 2027 Q3 첫 홀 목표(약 15개월 중 4개월) 기준 (추정)
- Beacon Point: 2단계 진행률 0.05: 부지 정지·장납기 장비 조달 단계(2026-07)만 공개, 2028 Q2 첫 홀 목표 (추정)
- Beacon Point: 2027 Q1 통전 500MW: 회사는 '첫 통전 2027 Q1'만 밝힘. 통전량은 1단계 유틸리티 용량(약 500MW)으로 가정 (추정)
- Beacon Point: 단계별 gross 500MW 는 '약 500MW 유틸리티 용량' 공시값. 냉각은 홈페이지의 폐쇄형 수냉 루프 설명과 NVIDIA DSX 설계를 근거로 datahall_liquid 로 가정

## 미해결 질문

- companies.json 에 아직 없는 회사 id: anthropic(River Bend 최종 사용자 → end_user). fluidstack·google 은 이미 등록됨. 병합 전 anthropic 회사 항목(group 후보: neocloud 또는 별도) 추가 필요.
- Beacon Point 테넌트 정체 미공개 — 'AA- 이상 고신용 기술회사'만 공개. 회사 id 를 정할 수 없어 parties 에 tenant 를 넣지 않음. 공개되면 tenant 추가.
- River Bend 실제 통전 시점 미공개: 2025-12 자료는 '2026-07-01 330MW 사용 가능', 2026-08 실적 시점엔 캠퍼스 변전소 공사 중. 데이터에는 2027-Q1 통전을 추정으로 넣음 → 2026 Q3 실적(11월 예정)에서 확인 필요.
- River Bend 데이터홀 수·홀별 MW·냉각 방식 미공개(245MW IT 를 한 건물로 표기). 'Anthropic 이 River Bend 최종 사용자'는 Anthropic·Fluidstack 파트너십 하에 '최소 245MW 인도' 문구에 근거한 해석이며, 임대 계약상 사용자 명시 문구는 아님.
- Beacon Point 첫 통전량(2027 Q1)이 1단계 500MW 전부인지 일부인지 미공개(500MW 는 추정). ERCOT Batch Zero 조건부 Base Load 지정은 Tier 2 단독 출처 — 회사 1차 자료 확인 필요, 주지사 감사·안정성 평가 결과도 미정.
- Beacon Point 면적 상충: 521에이커(2026-06 채권 보도자료) vs 524에이커(10-K 보유 토지) vs 525에이커(회사 홈페이지) → 최저값 521 채택.
- River Bend 확장(Entergy 추가 최대 1,000MW, Fluidstack ROFO 1,000MW IT)과 Anthropic 공동 실사 옵션 1,050MW 는 전력 미확보라 power 에 넣지 않음. 확정 시 추가.
- 제외: 개발 단계 Batavia, IL(50MW, 7.2에이커, 용도 TBD), 10-K 'Site 03' Texas 180MW(용도 TBD, 2026-06 기준 개발 단계 집계에서 빠짐), American Bitcoin 채굴 사이트(Vega 205MW·Salt Creek·Medicine Hat·Drumheller·Alpha — AI 전환 계획 없음), Hut 8 Canada 소형 클라우드 데이터센터 5곳, Highrise AI(제3자 코로케이션 GPU), King Mountain JV(채굴).
