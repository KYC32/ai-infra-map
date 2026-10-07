# 검토표 — Oracle (NYSE: ORCL)

- 그룹: hyperscaler · 본사: US · 회사색: `#e25a63` · 기준일: 2026-10-07
- 요약: 텍사스 오스틴 본사의 데이터베이스·클라우드 기업. OCI 로 OpenAI 등에 AI 인프라를 공급하며, Vantage·Related Digital·STACK 같은 개발사가 짓는 Stargate 캠퍼스(Shackelford·Saline Township·Port Washington·Doña Ana)를 장기 임차해 직접 운영한다. 2026-08 말 RPO 6,640억 달러, 분기 IaaS 매출 74억 달러.
- 근거 33건: Tier1 28 · Tier2 5 · Tier3 0 · 단독 출처 7 · 상충 7

## 사이트 (기준일 시점)

| 사이트 | 위치 | 상태 | 확보 → 최종 | 통전 | AI 가동 | 건설 | 건물 | 상세 | 좌표 | 참여사 |
|---|---|---|---|---|---|---|---|---|---|---|
| Shackelford County Campus (Vantage "Frontier", Stargate) | Texas (Shackelford County, near TX-351 southwest of Albany), US | 건설중 | 1.82GW → 1.82GW | 115MW | 0MW | 910MW | 3 | full | low (region_centroid) | oracle(tenant), oracle(operator), vantage-data-centers(developer), vantage-data-centers(owner), openai(end_user) |
| Saline Township Campus (Related Digital "The Barn", Stargate Michigan) | Michigan (Washtenaw County, Saline Township — north of Michigan Ave), US | 건설중 | 1.38GW → 1.38GW | 0MW | 0MW | 922MW | 3 | full | medium (city_centroid) | oracle(tenant), oracle(operator), related-digital(developer), related-digital(owner), blackstone(financier), openai(end_user) |
| Port Washington Campus (Vantage "Lighthouse", Stargate Wisconsin) | Wisconsin (Ozaukee County, Port Washington — north of the city, ~30 min from Milwaukee), US | 계획 | 1.30GW → 1.30GW | 0MW | 0MW | 0MW | 0 | lite | medium (city_centroid) | oracle(tenant), oracle(operator), vantage-data-centers(developer), vantage-data-centers(owner), openai(end_user) |
| Doña Ana County Campus (Project Jupiter, Stargate New Mexico) | New Mexico (Doña Ana County, Santa Teresa — near El Paso / US–Mexico border), US | 계획 | 1.00GW → 1.00GW | 0MW | 0MW | 0MW | 0 | lite | medium (city_centroid) | oracle(tenant), oracle(operator), stack-infrastructure(developer), borderplex-digital-assets(developer), blue-owl(owner), openai(end_user) |

## 건물·단계 일정

**Shackelford County Campus (Vantage "Frontier", Stargate)**

| 건물 | MW | 단계 이력 (basis) |
|---|---|---|
| Building 1 (first delivery) | 140 IT | 계획 2025-08 → 건설중 2025-09 → 시운전 2026-12 (target) → 가동 2027-H1 (target) |
| Buildings 2–5 (phase 1 remainder, 4 buildings) | 560 IT | 계획 2025-08 → 건설중 2026-01 (estimate) → 가동 2027-H2 (estimate) |
| Buildings 6–10 (phase 2, 5 buildings) | 700 IT | 계획 2025-08 → 건설중 2027-H1 (estimate) → 가동 2028-H2 (estimate) |

**Saline Township Campus (Related Digital "The Barn", Stargate Michigan)**

| 건물 | MW | 단계 이력 (basis) |
|---|---|---|
| Compute 1 | 461 gross | 계획 2025-10 → 건설중 2026-02 (estimate) → 시운전 2027-Q2 (estimate) → 가동 2027-H2 (target) |
| Compute 2 | 461 gross | 계획 2025-10 → 건설중 2026-H2 (estimate) → 가동 2028-H1 (estimate) |
| Compute 3 | 461 gross | 계획 2025-10 → 건설중 2027-Q1 (estimate) → 가동 2029 (estimate) |

## 추정 항목

- Shackelford County Campus (Vantage "Frontier", Stargate): secured_mw 1,820MW 는 Vantage 의 IT 1.4GW × PUE 1.3 으로 환산한 추정치. 현장 마이크로그리드의 실제 확보 규모는 미공개(Cleanview 가 인용한 TCEQ 대기 인허가는 최대 약 2.58GW, Oracle–VoltaGrid 계약은 텍사스 전체 2.3GW). 2026-06 energized 115MW 는 Oracle 발표값.
- Shackelford County Campus (Vantage "Frontier", Stargate): 동별 IT MW(140MW)는 1.4GW/10개 동 균등 배분 추정. 2~10동 착공·가동 시점은 Epoch AI 위성 분석(Tier 3: 2026-01 1~5동 철골, 2026-09 1~5동 외장 완료, 2027-08~2028-11 순차 가동)을 근사. 진행률(1동 0.8, 2~5동 0.5)도 같은 분석과 'Vantage 2026 하반기 첫 동 인도' 목표로 근사.
- Shackelford County Campus (Vantage "Frontier", Stargate): 좌표는 지역 보도('Albany 남서쪽, TX-351·FM 604 부근, Hamby 쪽 서부')를 근거로 한 대략 위치(low). 공식 주소·필지 미확인.
- Saline Township Campus (Related Digital "The Barn", Stargate Michigan): 동별 MW 461MW 는 DTE 계약 1,383MW(계통 기준)를 3개 동에 균등 배분한 추정. IT MW 미공개.
- Saline Township Campus (Related Digital "The Barn", Stargate Michigan): Compute 1 착공 2026-02 는 'Q1 2026 본격 착공 예정'(Oracle 2025-12 블로그)과 2026-05 무렵 누적 20만 시간 보도를 근거로 한 추정. 시운전 2027-Q2 는 'H2 2027 고객 인도'에서 역산. 진행률 0.5 는 착공 8개월·100만 시간·'Compute 1' 작업 언급으로 근사.
- Saline Township Campus (Related Digital "The Barn", Stargate Michigan): Compute 2·3 착공·가동 시점은 미공개라 추정(2동 2026 하반기 착공·2028 상반기 가동, 3동 2027-Q1 착공·2029 가동). DBusiness 는 캠퍼스 완공(개장)을 2029 로 보도.
- Port Washington Campus (Vantage "Lighthouse", Stargate Wisconsin): secured_mw 1,300MW 는 We Energies 계획상 1단계 수요(CUB 인용, WPR)로 basis target. ATC 송전 사업 미승인이라 실제 '확보'는 아님. Vantage IT 902MW × 1.3 ≈ 1,173MW 와도 대체로 맞음. 2028 전량 통전은 Vantage 완공 목표를 그대로 옮긴 것.
- Doña Ana County Campus (Project Jupiter, Stargate New Mexico): secured_mw 1,000MW 는 Oracle CEO 의 '이 부지들은 대략 1GW 씩'(2026-09) 발언을 따른 낮은 값(target). 연료전지 설치 용량은 최대 2.45GW 지만 Oracle 은 중복 여유분이라 '전부 필요하지 않다'고 밝힘. Epoch AI(Tier 3)는 2028 말 IT 1,750MW 를 추정 → 확인되면 상향.
- Doña Ana County Campus (Project Jupiter, Stargate New Mexico): 좌표는 Santa Teresa 도시 중심. 보도상 캠퍼스는 Santa Teresa 남쪽 약 3.6마일로 핀과 수 km 차이.

## 미해결 질문

- companies.json 에 없는 회사 id(병합 때 group "partner" 로 추가 필요): vantage-data-centers(Shackelford·Port Washington 개발·소유, DigitalBridge·Silver Lake 계열), related-digital(Saline Township 개발·소유, Related Companies 계열), stack-infrastructure(Doña Ana 개발, Blue Owl 계열), borderplex-digital-assets(Doña Ana 개발·부지), blackstone(Saline 지분 투자). 이번 초안에서는 voltagrid·bloom-energy·pimco·walbridge 등 장비·시공·부채 참여사는 parties 에 넣지 않았다(역할 enum 에 supplier 없음).
- SoftBank 주도 Stargate 부지(Lordstown OH, Milam County TX — SB Energy 1.2GW, PORTS-Pike OH — OpenAI 약 8GW-IT)를 softbank 사이트로 별도 초안을 만들지 여부. 현재 softbank 는 group partner 라 사이트를 가질 수 없음 → 만든다면 group 변경 또는 sb-energy 회사 신설 필요. 요약은 notes.md.
- Shackelford 일정 해석: Vantage '첫 동 2026 하반기 인도'(Oracle 에 건물 인도)와 Oracle '고객 인도 2027 상반기 시작'(OpenAI 에 용량 인도)을 단계별로 나눠 1동 시운전 2026-12·가동 2027-H1 로 넣음. 실제 1동 인도 시점은 Oracle FY27 2분기(2026-12 발표)에서 확인 필요.
- Shackelford 현장 마이크로그리드 규모(secured_mw) 미공개 — 1,820MW 는 IT×1.3 추정. TCEQ 대기 인허가 원문(최대 ~2.58GW, Cleanview 인용)과 정확한 부지 위치(TX-351·FM 604 부근)를 TCEQ·TDLR 원문으로 확인 필요.
- Doña Ana 가동 시점 상충: Oracle(2026-06) '고객 인도 2027 상반기 시작' vs 불가항력 통지 보도(2026-09) '2028 가동 목표'. 대기 인허가(주 대법원 중지)·파이프라인(2027-02-01) 상황상 2027 상반기 인도는 불확실. Oracle FY27 2분기 발표에서 재확인.
- Doña Ana MW: '약 1GW'(Oracle CEO) vs 연료전지 설치 최대 2.45GW vs Epoch 추정 IT 1,750MW(2028 말). 1,000MW(target)로 넣었으나 공식 IT·계통 MW 공개 시 수정 필요. 면적도 818에이커(Oracle 현재 페이지) vs 1,400에이커(2025-09 팩트시트·다수 보도) 상충.
- Doña Ana 당사자 구조: 데이터센터 건물 소유·운영사('별도 회사'), 마이크로그리드 운영사 Yucca Growth Infrastructure, 2025-09 팩트시트의 'Orion Digital Infrastructure' 의 관계가 불명확. blue-owl 은 STACK 모회사로 owner 표기(TechCrunch: 불가항력 통지 수신자 'Blue Owl'), 지분 구조 확인 필요.
- Port Washington: ATC 송전 사업 재신청(2026-09) 이후 PSC 결정 시점·준공 일정 미확정 → Oracle '2027 하반기 인도' 와 Vantage '2028 완공' 이 지연될 가능성. 2026-06 Oracle 의 PSC 상대 소송(VLC 신용·담보 요건) 결과도 확인 필요.
- Saline Township: 동별 MW·IT MW 미공개(DTE 계약 1,383MW 를 3등분). 'early 2027 첫 가동'(Michigan Public) vs Oracle 'H2 2027 고객 인도' 상충 → 늦은 쪽 채택. 주 법무장관의 MPSC 승인 항소(진행 중) 결과에 따라 전력 조건 변동 가능.
- Abilene 인근 추가 600MW 확장(2025-09 발표)은 2026-03 Bloomberg 보도로 철회된 것으로 알려져 사이트로 넣지 않음(crusoe 초안 노트와 동일). Oracle 의 공식 철회 발표는 미확인.
- OpenAI 자체 개발 Project Camellia(조지아 Effingham County, 3.2GW)는 Oracle·SoftBank 부지가 아니어서 제외 — openai 사이트 초안 필요 여부(현재 openai 는 partner).
