# 검토표 — Nebius Group N.V. (NASDAQ: NBIS)

- 그룹: neocloud · 본사: NL · 회사색: `#b5dc6e` · 기준일: 2026-10-07
- 요약: 암스테르담 본사의 풀스택 AI 클라우드(네오클라우드) 기업(옛 Yandex N.V.). 핀란드 맨쨀래 자체 데이터센터(75MW)와 Microsoft 전용 뉴저지 바인랜드 build-to-suit 캠퍼스(최대 300MW)를 운영하고, 미주리 인디펜던스·펜실베이니아 하이리지(각 최대 1.2GW)·앨라배마 버밍엄·핀란드 라펜란타 등 자체 AI 팩토리를 건설 중이며 2026년 말 계약 전력 5GW를 목표로 한다.
- 근거 36건: Tier1 32 · Tier2 3 · Tier3 1 · 단독 출처 6 · 상충 1

## 사이트 (기준일 시점)

| 사이트 | 위치 | 상태 | 확보 → 최종 | 통전 | AI 가동 | 건설 | 건물 | 상세 | 좌표 | 참여사 |
|---|---|---|---|---|---|---|---|---|---|---|
| Mäntsälä | Uusimaa (Mäntsälä, ~60km north of Helsinki), FI | 가동 | 145MW → 145MW | 75MW | 75MW | 0MW | 3 | full | high (official_address) | nebius(owner), nebius(developer), nebius(operator) |
| Vineland (DataOne build-to-suit) | New Jersey (Cumberland County, Vineland), US | 가동 | 55MW → 55MW | 55MW | 55MW | 0MW | 1 | full | medium (city_centroid) | nebius(tenant), nebius(operator), dataone(developer), dataone(owner), microsoft(end_user) |
| Independence AI Factory (EastGate) | Missouri (Jackson County, Independence — Kansas City metro), US | 건설중 | 800MW → 800MW | 0MW | 0MW | 200MW | 2 | full | medium (official_address) | nebius(developer), nebius(owner), nebius(operator) |
| Highridge Business Park AI Factory | Pennsylvania (Schuylkill County, Butler Township), US | 계획 | 1.20GW → 1.20GW | 0MW | 0MW | 0MW | 4 | full | medium (official_address) | nebius(developer), nebius(owner), nebius(operator) |
| Birmingham BHM01 (Oxmoor) | Alabama (Jefferson County, Birmingham — Oxmoor), US | 건설중 | 300MW → 300MW | 0MW | 0MW | 300MW | 1 | lite | high (official_address) | nebius(developer), nebius(owner), nebius(operator) |
| Lappeenranta AI Factory (Pajarila) | South Karelia (Lappeenranta, Pajarila), FI | 건설중 | 310MW → 310MW | 0MW | 0MW | 70MW | 2 | lite | high (official_address) | nebius(operator), nebius(owner), polarnode(developer) |

## 건물·단계 일정

**Mäntsälä**

| 건물 | MW | 단계 이력 (basis) |
|---|---|---|
| DC1 original building (~25MW) | 25 gross | 가동 2015 |
| DC1 expansion (building extension + 2 new buildings, +50MW) | 50 gross | 계획 2024-10 → 건설중 2025-Q1 (estimate) → 가동 2026-Q1 |
| DC2 second Mäntsälä data center (70MW) | 70 gross | 계획 2026-08 → 가동 2027 (target) |

**Vineland (DataOne build-to-suit)**

| 건물 | MW | 단계 이력 (basis) |
|---|---|---|
| Phase 1 (Microsoft dedicated GPU clusters) | 50 IT | 계획 2025-03 → 건설중 2025-03 → 시운전 2025-11 → 가동 2026-08 |

**Independence AI Factory (EastGate)**

| 건물 | MW | 단계 이력 (basis) |
|---|---|---|
| Building 1 (200MW, 488,000 sq ft) | 200 gross | 계획 2026-03 → 건설중 2026-05 → 가동 2027 (target) |
| Later phases (IPL-supplied, ~600MW) | 600 gross | 계획 2026-03 |

**Highridge Business Park AI Factory**

| 건물 | MW | 단계 이력 (basis) |
|---|---|---|
| Phase 1 (260MW) | 260 gross | 계획 2026-05 → 가동 2027-10 (target) |
| Phase 2 (+400MW, to 660MW) | 400 gross | 계획 2026-05 → 가동 2029-01 (target) |
| Phase 3 (+340MW, to 1,000MW+) | 340 gross | 계획 2026-05 → 가동 2029-11 (target) |
| Full build-out remainder (~200MW, to 1.2GW) | 200 gross | 계획 2026-05 |

**Birmingham BHM01 (Oxmoor)**

| 건물 | MW | 단계 이력 (basis) |
|---|---|---|
| BHM01 campus (~300MW, phased to 2028) | 300 gross | 계획 2026-02 → 건설중 2026-Q2 → 시운전 2026-Q4 (target) → 가동 2027 (target) |

**Lappeenranta AI Factory (Pajarila)**

| 건물 | MW | 단계 이력 (basis) |
|---|---|---|
| Phase 1 (initial 70MW) | 70 gross | 계획 2026-03 → 건설중 2026-03 → 가동 2027 (target) |
| Later phases (to 310MW) | 240 gross | 계획 2026-03 |

## 추정 항목

- Mäntsälä: 2024-10 이전 용량 25MW 는 3배 증설 발표(25→75MW) 기준값을 2015 가동 시점까지 거꾸로 적용한 추정. 실제 Yandex 시절 단계별 용량은 미확인
- Mäntsälä: 75MW 계통 확보 시점을 증설 발표월(2024-10)로 둔 것은 추정. 증설 착공 시점(2025 Q1)은 Caverion 의 2025년 기술설비 수주 발표로 근사
- Mäntsälä: 회사 MW(25/75/70)가 IT 기준인지 계통 기준인지 미공개 → 낮은 쪽 해석으로 grid(계통) 기준 gross 로 표기. PUE 1.1 이라 차이는 작음. 2호 데이터센터는 회사가 '세 번째 사이트'로 셈하지만 지도에서는 같은 맨쨀래 핀의 건물로 묶음(정확한 필지 미공개)
- Vineland (DataOne build-to-suit): 실제 가동 확인분만 반영: 회사는 최대 300MW 단계 개발을 발표했지만, 위성 분석(Epoch, 2026-07)으로 확인되는 가동은 IT 약 50MW. 잔여 증설(약 250MW IT)은 연료전지 인허가·공사중지명령이 풀리고 가동이 확인되면 추가. 확보 전력 55MW = 50MW × PUE 1.1 (추정)
- Vineland (DataOne build-to-suit): PUE 1.1 지정: 300MW IT 설계와 328MW 연료전지(+계통 약 5MW)를 회사·파트너가 함께 제시해 1.1 수준이 암묵 전제. 맨쨀래 PUE(최저 1.1)도 참고. 실제 바인랜드 PUE 미공개(Epoch 는 공랭 칠러 기준 1.4 추정)
- Vineland (DataOne build-to-suit): 1단계 50MW IT 는 Epoch AI 위성·칠러 분석(2026-07 기준, Tier 3) 값. 회사는 트랜치별 MW 를 밝히지 않음. 2025-11 통전 55MW(=50×1.1)도 추정. NJDEP 가 확인한 무허가 가스발전기 62대×1.98MW≈123MW 는 임시 전원 규모를 시사
- Independence AI Factory (EastGate): 진행률 0.15: 2026-05 착공 → 2027년(실적 콜 요약상 2027-10) 가동 목표, 약 17개월 공정 중 5개월 경과로 근사
- Independence AI Factory (EastGate): 2027-10 통전 200MW: 시 FAQ 의 Blue Valley 발전소 1단계 200MW(언론은 250MW·2027-10)를 적용한 추정. 낮은 값 200 채택
- Independence AI Factory (EastGate): 확보 전력은 IPL 계약분 800MW 만 반영. 회사는 '최대 1.2GW = IPL 800MW + 현장 발전 400MW' 라 하나 현장 발전은 '검토 중' → 400MW·4번째 동은 미포함. 후속 3개 동을 600MW 한 건물로 묶음
- Highridge Business Park AI Factory: 단계별 MW 는 회사의 '전력 인도' 일정(260/660/1,000+MW)을 차분해 건물로 나눈 것. 4단계 200MW 는 1.2GW 와 1,000MW 의 차이로, 일정 미공개. 2026-10 현재 공사 착수 여부 미확인 → 1단계를 '계획'으로 둠
- Birmingham BHM01 (Oxmoor): 300MW 는 현지·업계 보도(DCD 등) 값이며 회사는 MW 미공개 → 확보 전력·건물 MW 모두 추정. 참고: 회사의 '자체 시설 5곳 합계 3GW' 에서 다른 4곳(75+310+1,200+1,200MW)을 빼면 약 215MW 로 더 낮을 수 있음
- Birmingham BHM01 (Oxmoor): 진행률 0.35: 2026 Q2 착공, 약 30개월 단계 공사 중 1단계 2026 Q4 시운전 목표 기준으로 근사(1단계 기준 약 절반, 전체 기준 낮음)
- Lappeenranta AI Factory (Pajarila): 1단계 70MW 는 Caverion 초기 변전소 용량을 1단계 규모로 본 추정. 2027 Q2 통전 70MW 도 '2027 봄 완공' 문구로 근사
- Lappeenranta AI Factory (Pajarila): 진행률 0.3: 2026 봄 착공 → 2027 1단계 완공 목표, 약 20개월 중 6개월 경과로 근사

## 미해결 질문

- 바인랜드 MW 실체: 회사는 'up to 300MW' 와 Microsoft 9개 트랜치 '전부 인도(2026-08)'를 말하지만 트랜치별 MW 는 미공개. Epoch AI 위성 분석은 2026-07 기준 IT 약 50MW 만 가동으로 봄. 확보 전력(330MW)·PUE 1.1·1단계 50MW 모두 추정. Microsoft 전용 용량이 50MW 인지 그 이상인지 3Q26 실적(11월)에서 확인 필요.
- 바인랜드 전력 인허가: 계통(ACE)은 약 5MW(Tier 3), 임시 가스발전기 62대 무허가 운전으로 NJDEP $1.07M 과징금·45일 시한(2026-09), 시 공사중지명령 2건(2026-08, Tier 2·3). Bloom 328MW 연료전지 2026년 가동 목표 달성 여부와 Microsoft 서비스 영향 미확인.
- 라펜란타 소유 구조 상충: Nebius 1Q26 서한은 '자체 소유(owned) 신규 부지', 라펜란타시·Datacenter Forum 은 Polarnode 가 개발·사업 주체이고 Nebius 는 운영자. 지분·임차 구조 미공개 → parties 에 nebius owner+operator, polarnode developer 동시 표기.
- 인디펜던스 용량 상충: 회사는 최대 1.2GW(IPL 800MW + 현장 발전 400MW '검토 중'), 시 FAQ·2026-01 보도는 최소 800MW(200+600MW) → 확보 전력 800MW 만 반영. 현장 발전 400MW 확정 시 4번째 동·전력 추가.
- 버밍엄 MW 미공개: 언론 300MW(Tier 2) vs '자체 5곳 3GW' 차감 약 215MW. 300MW 를 추정으로 넣음. 구역 소송 결과에 따라 일정 변동 가능.
- 펜실베이니아 하이리지 1단계 착공 여부 미확인('1단계 개발 중'만 공개) → 계획 상태로 둠.
- 맨쨀래 2호(70MW): Nebius 공식 보도자료 원문 URL 미확보(w.media 재게재 기준, Tier 2). 정확한 부지·전력 연결 일정 미공개 → 맨쨀래 핀의 건물로 묶음.
- Meta 계약 사이트 미공개: 1차 $3bn(2025-11, 인도 완료), 2차 최대 $27bn(2026-03, $12bn 은 2027년 초 개시·Vera Rubin) — 어느 캠퍼스에서 공급하는지 미확인이라 parties 에 넣지 않음.
- Q2 서한의 '영국·에스토니아·핀란드 추가 사이트' 중 영국 신규 사이트의 위치·구조 미확인(현재까지는 Vantage 뉴포트 등 파트너형으로 보임).

## 기존 데이터와 차이

