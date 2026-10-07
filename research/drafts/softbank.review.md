# 검토표 — SoftBank Group (TSE: 9984)

- 그룹: hyperscaler · 본사: JP · 회사색: `#8970c2` · 기준일: 2026-10-07
- 요약: 도쿄 본사의 투자 지주회사로 OpenAI 의 최대 외부 투자자 중 하나다. 지배 자회사 SB Energy 를 통해 텍사스 Milam County(OpenAI 임차, IT 753MW)·오하이오 PORTS-Pike(OpenAI 임차, IT 8.0GW)·오스틴 Cosmos(소프트뱅크 계열 임차, IT 50MW) 데이터센터 캠퍼스를 개발·소유하고, 오하이오 Lordstown 옛 GM 공장을 Stargate 장비 제조·데이터센터 거점으로 바꾸고 있다. 2026-09 기준 가동 중인 데이터센터 용량은 없다.
- 근거 30건: Tier1 26 · Tier2 2 · Tier3 2 · 단독 출처 4 · 상충 1

## 사이트 (기준일 시점)

| 사이트 | 위치 | 상태 | 확보 → 최종 | 통전 | AI 가동 | 건설 | 건물 | 상세 | 좌표 | 참여사 |
|---|---|---|---|---|---|---|---|---|---|---|
| Milam County Data Center (SB Energy, Stargate) | Texas (northern Milam County, between Buckholts and Rosebud, adjacent to SB Energy's Orion Solar Belt), US | 건설중 | 1.20GW → 1.20GW | 0MW | 0MW | 979MW | 2 | full | low (region_centroid) | softbank(owner), sb-energy(developer), sb-energy(owner), sb-energy(operator), openai(tenant) |
| PORTS-Pike Technology Campus (SB Energy) | Ohio (Pike County, former Portsmouth Gaseous Diffusion Plant near Piketon), US | 계획 | 10.00GW → 10.00GW | 0MW | 0MW | 0MW | 3 | full | medium (official_address) | softbank(owner), sb-energy(developer), sb-energy(owner), sb-energy(operator), openai(tenant), nvidia(financier) |
| Cosmos Technology Campus (SB Energy, Austin) | Texas (Travis County, Austin), US | 건설중 | 65MW → 65MW | 0MW | 0MW | 65MW | 1 | lite | low (county_centroid) | softbank(owner), softbank(tenant), sb-energy(developer), sb-energy(owner) |

## 건물·단계 일정

**Milam County Data Center (SB Energy, Stargate)**

| 건물 | MW | 단계 이력 (basis) |
|---|---|---|
| Building 1 | 308 IT | 계획 2026-01 → 건설중 2026-04 → 가동 2027 (target) |
| Building 2 | 445 IT | 계획 2026-01 → 건설중 2026-04 → 가동 2028 (target) |

**PORTS-Pike Technology Campus (SB Energy)**

| 건물 | MW | 단계 이력 (basis) |
|---|---|---|
| Initial phase (Building 1 first phase, ~800MW) | 800 IT | 계획 2026-08 → 건설중 2027-Q1 (estimate) → 가동 2028 (target) |
| Buildings 1–9 (remainder of the NVIDIA-guaranteed 4.25GW) | 3448 IT | 계획 2026-08 → 건설중 2027-H2 (estimate) → 가동 2031 (target) |
| Buildings 10–17 | 3776 IT | 계획 2026-08 → 건설중 2029 (estimate) → 가동 2032 (target) |

**Cosmos Technology Campus (SB Energy, Austin)**

| 건물 | MW | 단계 이력 (basis) |
|---|---|---|
| Cosmos facility (renovation, phased) | 50 IT | 건설중 2026-03 → 시운전 2026-Q4 (target) → 가동 2027-05 (target) |

## 추정 항목

- Milam County Data Center (SB Energy, Stargate): 확정 확보 660MW = S-1 의 계통 연계 4단계 합계(초기 캠퍼스 부하). 1,200MW 는 OpenAI·SB Energy 의 발표 규모(target)로 확정값에 넣지 않음. 리스 IT 753MW×1.3 ≈ 979MW 는 초기 연계 660MW 를 넘으므로 나머지는 인접 자사 발전(1.3GW 이상 개발)과 추가 연계로 충당하는 것으로 해석
- Milam County Data Center (SB Energy, Stargate): 1동 진척률 0.45 는 추정: 2026-03 위성사진에 1동 철골·지붕 확인(Epoch), 2026-04 NTP, 첫 인도 2027 목표를 직선 보간
- Milam County Data Center (SB Energy, Stargate): 2동 진척률 0.3 은 추정: 1동과 같은 2026-04 NTP, 인도 목표는 1년 늦은 2028
- Milam County Data Center (SB Energy, Stargate): 좌표는 추정: 보도상 'Rosebud 외곽, Orion Solar Belt 인접'(Orion 은 Buckholts 소재). 공식 주소·필지 미확인이라 두 마을 사이 Milam 북부로 둠. 위성사진은 쓰지 않음
- PORTS-Pike Technology Campus (SB Energy): 확정 확보 0MW: 9.2GW 전력 공급 계약은 최종 규제 승인 전이고 가스발전도 미착수라 reported 단계를 두지 않음. 10,000MW 는 발표 규모(target, S-1 의 '총부하 약 10GW')
- PORTS-Pike Technology Campus (SB Energy): 건물 pue 1.25 지정: S-1 이 IT 8.0GW 를 총부하 약 10GW 로 밝혀 환산 배수 1.25 를 씀(기본 1.3 이면 10.4GW 로 발표 총부하 초과)
- PORTS-Pike Technology Campus (SB Energy): 건물 묶음은 S-1 표(1~9동 IT 4,248MW 최종 인도 2031 / 10~17동 IT 3,776MW 2032)를 따르되 1~9동에서 'OpenAI 첫 800MW(2028)'를 초기 단계로 분리. 800MW 가 IT 기준인지는 미확인
- PORTS-Pike Technology Campus (SB Energy): 착공 시점은 추정: 2026-09 기준 '미착수'. 2028 첫 인도를 위해 초기 단계 2027-Q1, 1~9동 나머지 2027 하반기, 10~17동 2029 착공으로 가정
- Cosmos Technology Campus (SB Energy, Austin): 확보 전력 65MW(estimate) = IT 50MW × PUE 1.3. S-1 표에서 계약 부하·계통 연계가 확보(✓)로 표시돼 근거 있는 추정으로 둠. 실제 MW 는 미공개
- Cosmos Technology Campus (SB Energy, Austin): 진척률 0.75 는 추정: 기존 건물 개조, 2026-03 NTP 후 2026 4분기 첫 가동 목표를 직선 보간
- Cosmos Technology Campus (SB Energy, Austin): 좌표는 Travis County 중심(정확한 주소 미공개). S-1 은 'Austin, Texas' 의 시설로만 표기

## 미해결 질문

- companies.json 에 없는 회사 id(병합 때 group "partner" 로 추가 필요): sb-energy(SoftBank 지배 자회사, Milam·PORTS-Pike·Cosmos 개발·소유·운영. 2026-09 Nasdaq 'SBE' 상장 신청 — 상장 후 독립 회사 항목으로 둘지, 지금처럼 softbank primary 아래 parties 로만 둘지 결정 필요), nvidia(PORTS-Pike 15억 달러 투자·잔존가치 보증 → financier).
- PORTS-Pike 와 Cosmos 는 공식 자료(OpenAI·SB Energy S-1·DOE)에서 'Stargate' 로 부르지 않아 program 을 비워 둠. 지시서상 PORTS-Pike 는 Stargate 부지로 분류돼 있으니, Stargate 로 묶을지(브랜드 확인 자료가 있으면) 결정 필요.
- Cosmos(오스틴, IT 50MW)는 SoftBank 계열사가 임차하는 SoftBank 그룹 자체 시설(Stargate 아님)이라 범위 밖일 수 있음 — 남길지 결정 필요. 정확한 주소·기존 건물 정체도 미공개.
- Milam 첫 가동 시점 상충: Epoch 가 인용한 TDLR 신고 '1동 2026-10 인도' vs SB Energy S-1/A(2026-09-21) '1동 첫 인도 2027·최종 2028'. 늦은 쪽(S-1) 채택. ERCOT 가 2026-08 대형 부하 통전 승인을 일시 중단해 Phase 1-A(200MW, 2026-08 목표) 통전 여부가 불확실 — 상장 후 첫 분기 보고서에서 확인.
- Milam 확정 전력 660MW 는 S-1 의 '초기 캠퍼스 부하' 연계 4단계 합계. 리스 IT 753MW(≈ 총 979MW)를 다 받으려면 추가 연계나 자체 발전 직결이 필요한데 그 규모·시점은 미공개.
- Lordstown: 데이터센터 MW·가동 시점 공식 미공개. 300MW(target)는 '두 부지 합계 1.5GW' 에서 Milam 1.2GW 를 뺀 파생값이고, 시설 주 용도는 장비 제조(Foxconn 50:50 합작). Epoch 는 IT 214MW·2027-03 가동을 추정하고 '로즈타운의 향후 데이터센터 금지' 를 언급 — 원문(마을 조례) 확인 필요. 데이터센터가 아니라 공장으로 보고 제외할지도 결정 필요.
- PORTS-Pike: 정확한 건물 위치(DOE 부지 189에이커 + 사유지 수천 에이커)·전체 면적 미공개 → acres null. 9.2GW 가스발전을 짓는 'SB Energy 가 아닌 SoftBank 계열사' 의 법인명 미확인. 첫 800MW 가 IT 기준인지 미확인.
- SB Energy 파이프라인 Borden County(IT 737MW)·Scurry County(IT 900MW)는 계통 연계는 확보했으나 임차인 미정이라 넣지 않음(BRIEF 5-3). 임차 계약이 나오면 추가.
- SoftBank Corp.(일본 통신 자회사)의 일본 AI 데이터센터(사카이·도마코마이 등)와 해외 Stargate(UAE 등) 지분 참여는 이번 범위(미국 SoftBank 주도 Stargate 부지) 밖이라 넣지 않음 — 별도 조사 여부 결정 필요.
- SB Energy IPO 가격 결정·상장 여부(2026-09 하순 목표 보도)는 기준일까지 확인하지 못함.
