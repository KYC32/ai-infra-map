# CoreWeave (CRWV) — 조사 노트

- 기준일(as_of): 2026-10-07
- 회사 id: `coreweave` / group: `neocloud` / ticker NASDAQ: CRWV / color `#6fb3d9` (기존 값 유지)
- 주 출처: SEC EDGAR (CIK 0001769628) — 2Q26 실적 보도자료(8-K EX-99.1, 2026-08-11), 10-Q(2026-06-30, 2026-08-12 제출), 10-K(FY2025, 2026-03-02), 전환사채 투자자 자료(8-K EX-99.2, 2026-09-17), CoreWeave 공식 Kenilworth 페이지, 2025-07-15 Lancaster 보도자료, Blue Owl/CTP 보도자료(2025-08-25), NJEDA 세액공제 승인 목록

## 1. 조사 요약

### 회사 지표 (metrics)
| 지표 | 값 | 기준 시점 | 출처 |
|---|---|---|---|
| 수주잔고(Revenue backlog) | 약 $104bn (투자자 자료 $104.2B) | 2026-06-30 | 2Q26 보도자료 |
| 활성 전력 | 1.5GW (2분기에만 약 500MW 증가) | 2026-06-30 | 2Q26 보도자료 |
| 계약 전력 | 약 3.7GW | 2026-06-30 | 2Q26 보도자료 |
| 가동 데이터센터 | 51곳 | 2026-08-11 | 2026-09 투자자 자료 |
| 2Q26 매출 | $2,575M (전년비 +112%) | 2026-06-30 | 2Q26 보도자료 |
- 참고(metrics 미포함): FY2025 말 43곳·활성 850MW+·계약 3.1GW (10-K). 3분기 초 신규 고객 약정 $25bn+ 추가(잔고에 미포함). 컨퍼런스콜(Tier 2 요약 기준) 2026년 말 활성 전력 1.85GW+ 목표, 2030년 8GW+ 목표, 2026 capex $35–39bn, 매출 $12.4–13.2bn 가이던스.
- 10-K Item 2: **"현재 모든 데이터센터를 임차"**, 운영 국가 = 미국·영국·스페인·스웨덴·노르웨이 (+캐나다 언급, 총 6개국). 10-Q(2026-06-30)에서도 같은 문장 유지 → **완전 자체 소유 가동 데이터센터는 0곳**.

### 자체 개발 사이트 판단 기준
CoreWeave 가 개발 주체(developer)이거나 지분(owner)을 가진 곳만 sites 에 넣음. 결과 2곳:

#### ① Kenilworth NEST 11 (뉴저지) — detail: full, **CoreWeave 첫 자체 개발**
- 주소: 2000 Galloping Hill Road, Kenilworth, NJ (옛 머크 본사 NEST 캠퍼스 11동, 1982년 준공 연구동 전환)
- 회사 공식 페이지: CoreWeave 역할 = **"Developer and operator"**, 계획 부하 **40MW**, 투자 $1.8bn, 새 변전소·전기 인프라 약 $150M CoreWeave 부담, 폐쇄형(closed-loop) 냉각, LEED 목표, 100% 청정에너지.
- 10-Q: 2025-06 JV 설립(개발사 85% / CoreWeave 15%) → 2026-06-30 CoreWeave 지분 **35%**. CoreWeave 가 건설관리·자산관리 제공, JV 와 **15년 임대차**(완공 시 개시, 임대료 = 공사비 비율). 2025-11 별도 필지 토지임차(향후 개발용) 체결. JV 파트너는 "관계사(related party)".
- 일정: 2024-10 11동 전체 임차 발표 → 2025-08 건물+인접 27에이커 $322M 인수 보도 → **2025-09 중순 착공**(NJEDA 인용) → 2025-11-12 NJEDA $250M 세액공제 승인(Next NJ–AI 1호) → **2027년 초 가동 목표**.
- 상태(2026-10-07): **건설중**, 진행률 0.6 (추정).
- 확보 MW: **40MW** (회사 공식, 추정 basis로 power 기록).

#### ② CoreWeave Lancaster (펜실베이니아) — detail: lite, ⚠️ 엄밀히는 "자체 소유" 아님
- 위치: 옛 LSC 인쇄공장 2곳 — 216 Greenfield Rd(1단계), 1375 Harrisburg Pike(2단계), 합계 144에이커. 좌표는 1단계 주소(미 인구조사국 지오코더) 사용.
- 구조: CoreWeave 보도자료 = **"CoreWeave will be the tenant of the site, co-developed by Chirisa Technology Parks and Machine Investment Group."** Blue Owl 보도자료 = Blue Owl·CTP·MIG JV 가 $4bn 조달, **"CoreWeave has invested in the campus and will lease the site"**. Greenfield 부지는 2025-09 LPE 01 Propco LLC(Blue Owl 시카고 사무소 주소)로 이전.
- 규모: 초기 **100MW**, 최대 300MW 확장 가능. CoreWeave 는 장비에 최대 $6bn. PPL 계통 보강 약 $200M.
- 일정: 2025-02 MIG 공장 매입($130M) → 2025-07-15 발표 → 2025-08-25 JV 종결 → Greenfield Rd **2027년 여름 가동 예정**(WITF), Harrisburg Pike 일정 없음. 주민 용도지역 이의제기 2건은 법원이 개발사 손을 들어 심리 무산(LancasterOnline, 날짜 미확인).
- 상태(2026-10-07): **건설중**(추정, Epoch AI 2026-07 위성 분석상 냉각설비 설치 중), 진행률 0.5 (추정).
- 넣은 이유: 단독 임차(build-to-suit)이고 개발사(CTP·MIG·Blue Owl)는 데이터·제외 목록 어디에도 없어 빠뜨리면 지도에서 사라짐. primary=coreweave 로 두되 parties 에 개발사·금융사를 표시. **검토자가 제외 결정 가능** (open_questions 1번).

### 사이트로 넣지 않은 것
- **인도네시아 360MW(IT)**: 2026-08-04 발표, 3개 시설, 2028 가동. CoreWeave 는 "컴퓨트 환경 소유·운영"만 밝혔고 개발사·위치 미공개 → 미포함.
- **10-Q 의 추가 JV 2건**(최대 $1.7bn 지분 약정, 2026년 중 멤버 편입 예정): 사이트명 미공시 → 미포함. Lancaster 가 그중 하나일 가능성.
- Kenilworth 별도 필지(2025-11 토지임차): 개발 계획·용량 미공개 → 건물로 넣지 않음.

## 2. 입주 사이트 목록 (sites 에 넣지 않음 — 해당 회사 데이터에서 다룸)

| 개발·소유사 | 캠퍼스 | CoreWeave 몫 | 비고·출처 |
|---|---|---|---|
| Galaxy | Helios (Dickens County, TX) | IT 526MW (gross 800MW), 15년 | 1단계 133MW 가동(2026-06), 2단계 260MW 2027-Q2~, 3단계 133MW 2028. CoreWeave 10-Q 의 "단일 사이트 393MW 미인도, 16년 최대 $14.7bn" 임대와 수치 일치(526−133=393) — data/companies/galaxy.json |
| Core Scientific | Denton TX 외 6개 사이트 | IT 약 590MW (Denton 약 260MW) | 2025-02 Denton 70MW 추가로 총 590MW. CoreWeave 의 Core Scientific 인수는 2025-10 주주 부결로 무산 — https://investors.corescientific.com/news-events/press-releases/detail/110/ |
| Applied Digital | Polaris Forge 1 (Ellendale, ND) | 400MW (임대 3건, 약 $11bn) | 100MW 2025-Q4 가동, 150MW 2026, 150MW 2027 중반 — https://capacityglobal.com/news/applied-digital-coreweave-data-centre-lease/ |
| Chirisa·PowerHouse·Blue Owl JV | CTP Richmond 캠퍼스 (VA) | 초기 120MW (2025–2026 인도) | $5bn build-to-suit JV — https://www.datacenterdynamics.com/en/news/blue-owl-chirisa-and-powerhouse-announce-5bn-data-center-jv-for-coreweave/ (Chirisa 는 제외 목록에 없음 → 향후 Chirisa 조사 시 Lancaster 와 함께 재검토) |
| IREN, Cipher, TeraWulf, Hut 8, Crusoe, Nebius, Stargate 계열 | — | 이번 조사에서 CoreWeave 입주 확인 안 됨 | IREN=Microsoft, Cipher=AWS·Fluidstack, Hut 8 Beacon Point=비공개 임차인 등. 해당 회사 데이터에서 확인 |

### 일반 코로케이션 (요약만)
- 10-K: 미국·영국·스페인·스웨덴·노르웨이(+캐나다)에서 임차 공간으로 데이터센터 운영. 2026-08 기준 가동 51곳 중 위 대형 캠퍼스를 뺀 다수가 일반 코로케이션(영국 Crawley·런던 Docklands, 노르웨이·스웨덴·스페인 등 해외 포함).
- 10-Q: 미개시 임대 약정 총 $35.5bn(2026–2029 개시, 7–16년), 공사비 연동 임대 사이트들에 미인도 355MW 별도.
- 개별 사이트로 넣지 않음.

## 3. 상충 정보 (양쪽 출처)

| 항목 | A | B | 채택 |
|---|---|---|---|
| Kenilworth 용량 | 계획 부하 **40MW** — https://www.coreweave.com/ai-data-center-development/kenilworth-new-jersey | **250MW** 프로젝트(NJEDA 승인 인용) — https://re-nj.com/coreweave-begins-1-8-billion-data-center-project-in-kenilworth-landing-first-award-under-new-eda-tax-credit-program/ | **40MW** (Tier 1·낮은 값). 250MW 는 캠퍼스 다단계 잠재치일 가능성 |
| Kenilworth 소유 | "CoreWeave 가 $322M 에 매입" — https://www.datacenterdynamics.com/en/news/coreweave-acquires-nest-data-center-for-322m-at-life-sciences-campus-in-new-jersey/ | JV(CoreWeave 35%)가 캠퍼스 인수·개발, CoreWeave 는 15년 임차 — 10-Q https://www.sec.gov/Archives/edgar/data/1769628/000176962826000366/crwv-20260630.htm | 10-Q 기준: owner share 0.35 + tenant |
| Kenilworth 착공·인수 시점 | 착공 2025-09, 인수 2025-08 (re-nj, DCD) | 착공 2024-09, 인수 2024-07 (Commercial Property Executive 2025-12-04) | 2025 (NJEDA 인용·인수 보도일과 일치. CPE 는 연도 오기로 판단) |
| 계약 전력 | 약 3.7GW (2026-06-30, 보도자료) | 약 4.2GW (2026-08-11, 투자자 자료) | 3.7GW (공시 분기말 수치·낮은 값). 시점 차이로 실제 모순은 아님 |
| Lancaster '100MW' 기준 | 회사: "initial 100 MW data center" (기준 미표시) | Epoch AI: IT 92MW 추정(Tier 3) | gross 100MW (낮은 해석) |
| Lancaster 역할 | "CoreWeave will be the tenant" (CoreWeave PR) | "CoreWeave has invested in the campus" (Blue Owl PR) | tenant + financier 둘 다 기록 |

## 4. 미확인 항목
- Kenilworth JV 파트너 이름(관계사), 등기상 소유자, 250MW vs 40MW 차이의 정체, 실제 통전 시점·변전소 전압.
- Kenilworth 냉각(액체냉각 여부), GPU 모델.
- Lancaster 실제 착공일, 계통 연계 용량, CoreWeave 지분 규모(10-Q 의 JV 2건 중 하나인지), 2단계 Harrisburg Pike 일정·용량(Tier 3 에 "300MW+" 언급).
- 인도네시아 3개 시설 위치·개발사.
- 진행률 0.6(Kenilworth)·0.5(Lancaster)는 모두 일정 기반 추정.

## 5. 좌표 근거
- **Kenilworth**: 40.679, -74.272 — 공식 주소 2000 Galloping Hill Rd(회사 페이지)를 미 인구조사국 지오코더로 변환(high, official_address).
- **Lancaster**: 40.049, -76.256 — 1단계 주소 216 Greenfield Rd(WITF 보도) 지오코딩(high, official_address). 2단계 1375 Harrisburg Pike(40.058, -76.333)는 약 6.6km 서쪽이며 같은 사이트로 묶음.
- 위성사진으로 위치를 추적하지 않음.
