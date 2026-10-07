# 검토표 — TeraWulf (NASDAQ: WULF)

- 그룹: miner · 본사: US · 회사색: `#c7d36f` · 기준일: 2026-10-07
- 요약: 메릴랜드 이스턴 본사. 뉴욕 Lake Mariner 비트코인 채굴장을 AI/HPC 임대 캠퍼스로 전환해 Core42·Fluidstack(Google 보증)에 438MW(IT)를 임대 중이며, 켄터키 Justified 캠퍼스에서 Anthropic과 401MW(IT) 20년 임대 계약을 맺었다.
- 근거 42건: Tier1 42 · Tier2 0 · Tier3 0 · 단독 출처 2 · 상충 5

## 사이트 (기준일 시점)

| 사이트 | 위치 | 상태 | 확보 → 최종 | 통전 | AI 가동 | 건설 | 건물 | 상세 | 좌표 | 참여사 |
|---|---|---|---|---|---|---|---|---|---|---|
| Lake Mariner Data Campus | New York (Niagara County, Barker), US | 가동 | 500MW → 500MW | 278MW | 133MW | 222MW | 8 | full | medium (city_centroid) | terawulf(developer), terawulf(operator), core42(tenant), fluidstack(tenant), google(financier) |
| Abernathy HPC Campus | Texas (Hale County, Abernathy), US | 건설중 | 240MW → 240MW | 0MW | 0MW | 240MW | 1 | full | medium (city_centroid) | fluidstack(developer), fluidstack(owner), fluidstack(tenant), google(financier), terawulf(developer) |
| Justified Data Campus (Hawesville) | Kentucky (Hancock County, Hawesville), US | 계획 | 482MW → 482MW | 0MW | 0MW | 0MW | 1 | lite | medium (city_centroid) | terawulf(developer), terawulf(owner), anthropic(tenant) |
| Muskie Data Campus | Kentucky (EastPark Industrial Park, near Grayson), US | 계획 | 1.00GW → 1.00GW | 0MW | 0MW | 0MW | 2 | lite | medium (city_centroid) | terawulf(developer), terawulf(owner) |

## 건물·단계 일정

**Lake Mariner Data Campus**

| 건물 | MW | 단계 이력 (basis) |
|---|---|---|
| Bitcoin mining halls (3 buildings, remaining) | 145 gross | 가동 2022-03 → retired 2027-Q1 (estimate) |
| Bitcoin mining halls (2 buildings, repurposed) | 100 gross | 가동 2024 (estimate) → retired 2026-Q1 |
| WULF Den | 2 IT | 건설중 2024 → 가동 2025-07 |
| CB-1 | 16 IT | 건설중 2024 → 가동 2025-08 |
| CB-2 (CB-2A/2B) | 42 IT | 계획 2024-12 → 건설중 2025 → 시운전 2026-02 → 가동 2026-03 |
| CB-3 | 42 IT | 계획 2025-08 → 건설중 2025-Q4 (estimate) → 시운전 2026-05 → 가동 2026-07 |
| CB-4 | 168 IT | 계획 2025-08 → 건설중 2025-Q4 (estimate) → 시운전 2026-08 → 가동 2026-Q4 (target) |
| CB-5 | 168 IT | 계획 2025-08 → 건설중 2026-Q1 (estimate) → 가동 2027-Q1 (target) |

**Abernathy HPC Campus**

| 건물 | MW | 단계 이력 (basis) |
|---|---|---|
| Phase 1 | 240 gross | 계획 2025-10 → 건설중 2026-02 → 가동 2026-Q4 (target) |

**Justified Data Campus (Hawesville)**

| 건물 | MW | 단계 이력 (basis) |
|---|---|---|
| Anthropic lease (401MW IT) | 480 gross | 계획 2026-07 → 시운전 2027-H2 (target) → 가동 2028-H1 (target) |

**Muskie Data Campus**

| 건물 | MW | 단계 이력 (basis) |
|---|---|---|
| Phase 1 power block (500MW) | 500 gross | 계획 2026-05 → 가동 2028-H2 (target) |
| Phase 2 power block (500MW) | 500 gross | 계획 2026-10 → 가동 2029 (target) |

## 추정 항목

- Lake Mariner Data Campus: energized_mw(2025-12·2026-03·2026-07)는 채굴 MW(보고치) + HPC IT MW×1.3 으로 환산한 추정치 (245+18×1.3≈268, 145+60×1.3≈223, 145+102×1.3≈278)
- Lake Mariner Data Campus: 잔여 채굴동 145MW 의 퇴역 시점 2027-Q1 은 추정: 근시일 gross 약 500MW 안에 HPC 438MW(IT)를 수용하려면 CB-5 통전 시 채굴 전력 재배분이 필요하다고 봄. 회사는 '경제성이 있고 HPC 와 충돌하지 않는 한' 채굴 지속 방침
- Lake Mariner Data Campus: 전환된 채굴동 2개(약 100MW)는 245MW(2025말)−145MW(2026-03)로 계산. 가동 시작 2024 는 추정(2024말 195MW, 2025 상반기 +50MW)
- Lake Mariner Data Campus: 채굴동은 2개 묶음으로 단순화: 잔여 3개동(145MW)을 2022-03 부터 가동으로 표시했지만 실제 램프업은 10MW(2022-03)→60MW(2022 Q3)→160MW(2023말)→195MW(2024말)→245MW(2025) — 실제 통전 추이는 power[] 이력에 반영
- Lake Mariner Data Campus: CB-4 는 전환된 채굴동 전력을, CB-5 는 잔여 채굴동 전력을 넘겨받는 것으로 표시(replaces) — 실제 전력 배분 방식은 미공개
- Lake Mariner Data Campus: CB-3·CB-4 착공 2025-Q4, CB-5 착공 2026-Q1 은 추정(10-K: Fluidstack 공사 2025년 착수, 2026-02 자료에서 CB-5 통전 대기). CB-5 진행률 0.7 은 첫 데이터홀 2027-01 초 통전 목표에서 역산한 근사치
- Lake Mariner Data Campus: WULF Den·CB-1 가동월(2025-07·08)은 10-K 의 'Core42 임대 2건 2025-07·08 개시'와 2025말 18MW(=2+16) 를 짝지은 해석
- Abernathy HPC Campus: secured_mw 240 은 설계 gross 240MW 와 345kV 연계(투자자 자료)를 근거로 한 추정. 실제 계통 승인 MW 는 미공개
- Abernathy HPC Campus: 진행률 0.7: 'construction progressing, Q4 2026 인도 목표'(2026-05) 문구로 근사. 매각 후 TeraWulf 공시가 끊겨 최신 공정 미확인
- Justified Data Campus (Hawesville): 건물 gross 480MW 는 캠퍼스 gross 전력(약 480MW)을 그대로 적용 — 단계별 MW 미공개. 착공 여부(2026 착공 예정) 미확인이라 under_construction 단계 생략

## 미해결 질문

- 새 회사 id 필요: core42(Lake Mariner 입주사, G42 계열 — 계약 주체 Core42 Holding US LLC), anthropic(Justified 입주사, Anthropic PBC). companies.json 병합 전에 회사 항목 추가 필요.
- Abernathy: 8-K 는 2026-07-06 을 'Closing Date'로 표기하지만 대금은 2027-04-30 까지 3회 분할. 지분 이전이 서명 시점에 완료됐는지(=TeraWulf 지분 0) 최종 확인 필요. 이 초안은 매각 완료로 보고 primary=fluidstack 으로 둠 — 사이트를 terawulf 파일에 둘지, fluidstack 파일로 옮길지 결정 필요. 매수 그룹 내 Fluidstack 지분율('certain other purchasers')은 미공개라 share 생략.
- Abernathy: 매각 후 공정·인도(2026 Q4 목표) 업데이트 출처가 없음. 정확한 필지(투자자 자료 120에이커 vs 트래커 29.3에이커·637,000 sq ft, Tier 3)와 계통 승인 MW 미확인.
- Lake Mariner: CB-4 첫 데이터홀이 2026-09 말 실제 통전됐는지 기준일 현재 공식 확인 없음(목표만 공개). CB-4·CB-5 의 gross MW·데이터홀 수·PUE 미공개.
- Lake Mariner: 잔여 채굴 145MW 의 퇴역 시점·방식 미공개(2027-Q1 은 추정). 추가 250MW 계통 승인 시점 미정. 회사 웹사이트는 캠퍼스를 '600 MW'(IT 기준 추정, 계약 438 + 미계약 162)로 표기.
- Lake Mariner: Core42 계약 규모 72.5MW(2024-12, 10-K FY2024) vs 60MW critical IT(이후 공시) — 정의 차이(gross vs IT) 추정, 낮은 값 60 채택. 4건 임대가 어느 건물(WULF Den·CB-1·CB-2A·CB-2B)에 대응하는지 공식 매핑 없음.
- Justified: 착공 여부(424B5: 2026 착공 예정)와 단계별 MW 미공개. Anthropic 의무를 뒷받침할 '투자등급 신용' 제공자 미공개(보증사가 있으면 financier 추가). 매도인(6.8% 지분 보유) 이름 미공개.
- Muskie: 면적 285에이커(5월 8-K·인수 발표) vs 약 308에이커(Q2 실적·10-Q, 인접 옵션 포함 추정) → 낮은 값 285 채택. 회사 웹사이트는 '800 MW'(IT 추정)로 표기. 입주사 없음.
- 제외한 사이트: Lake Hawkeye(뉴욕 Lansing, 옛 Cayuga 석탄발전소 183에이커 임차, gross 400MW/IT 320MW, 2029 운영 예상, 인허가 중 — 전력 확보·입주사 없음), Chesapeake(메릴랜드 Charles County Morgantown 발전소 210MW, FERC 승인 2026-07-29, 인수 종결 미확인, 2030 운영 예상). 계약·인수 종결 시 추가 검토.
