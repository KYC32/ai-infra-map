# TeraWulf (WULF) — 조사 노트

- 기준일(as_of): 2026-10-07
- 회사 id: `terawulf` / group: `miner` (Lake Mariner 채굴장 → AI/HPC 임대 전환) / color `#c7d36f` (파스텔 라임, 기존 회사색·상태색과 다름)
- 본사: Easton, Maryland (US)
- 주 출처: SEC EDGAR (CIK 0001083301) — 10-K FY2022·FY2023·FY2024·FY2025, 10-Q Q1·Q2 2026, 8-K(2025-08-14 Fluidstack, 2025-08-18 CB-5, 2025-10-28 Abernathy JV, 2026-02-02 Hawesville 인수, 2026-05-26 Muskie 인수, 2026-07-06 Anthropic 임대·Abernathy 매각, 2026-10-05 Muskie 1GW), 실적 보도자료(Q4'25·Q1'26·Q2'26), Q2'26 투자자 자료, 424B5(2026-04-14), 회사 IR 보도자료(2026-08-24 KY PSC), Q2'26 실적 콜 녹취(fool.com)

## 1. 조사 요약

### Lake Mariner (Barker, Niagara County, NY) — detail: full, primary terawulf
- 옛 Somerset 석탄발전소 인접 부지 157에이커 임차(CEO 관계사 Somerset Operating Co., 35년). NYISO Zone A, NYPA 90MW 저가 전력.
- 전력: 근시일 gross 약 500MW, NYISO 추가 승인 시 750MW (2022년부터 일관되게 "up to 500 MW"). 추가 250MW 는 "계통 승인 조건부로 추진 중"(Q2'26) → secured 는 500 유지.
- 채굴 이력(통전 = power[]): 10MW(2022-03, 터빈 데크) → 60MW(2022 Q3, Building 1) → 160MW(2023말) → 195MW(2024말) → 245MW(2025말) → 145MW(2026-03, 채굴동 2개 전환·중단).
- HPC 건물 (critical IT):

  | 건물 | IT MW | 입주사 | 상태 (2026-10-07) | 일정 |
  |---|---|---|---|---|
  | WULF Den | 2 | Core42 | 가동 | 2025-07 개시(해석) |
  | CB-1 | 16 | Core42 | 가동 | 2025-08 개시(해석) |
  | CB-2 (2A/2B) | 42 | Core42 | 가동 | 2A 2026-02, 2B 2026-03 |
  | CB-3 | 42 | Fluidstack | 가동 | 2026-05 부분 인도 → 2026-07 초 완료 (Google 신용보강 $600m 발효) |
  | CB-4 | 168 | Fluidstack | **시운전** | 2026-08 첫 데이터홀 커미셔닝, 9월 말 통전 목표, 2026 하반기 단계 인도 |
  | CB-5 | 168 | Fluidstack | **건설중** (진행률 0.7 추정) | 첫 데이터홀 2027-01 초 통전 목표, 2027 초 단계 인도 |
  | 합계 | 438 | | 가동 102 + 건설 336 | |
- Core42(G42) 4건 임대 = 60MW IT, 10년+5년×2. Fluidstack 3건 임대 = 378MW IT(공시 "380"), 10년+5년×2, Google 보증 총 약 $3.2bn·Google 프로포마 지분 약 14%(2025-08).
- 회사 웹사이트: 캠퍼스 "600 MW"(계약 438 + 미계약 162 → IT 기준으로 해석).

### Abernathy HPC Campus (Abernathy, Hale County, TX) — detail: full, **primary fluidstack**
- 2025-10-28 합작 발표: 168MW IT / 240MW gross, Fluidstack USA III 25년 임차(약 $9.5bn), Google $1.3bn 보증. SPP(Xcel SPS), 345kV, 120에이커 25년 부지 임차. 합작사 FS CS I LLC, 2025-12 $1.3bn 선순위 담보채 발행.
- 2026-05: 공사 진행 중, 2026 Q4 인도 목표.
- **2026-07-06: TeraWulf가 지분 50.1% 전부를 Fluidstack 주도 투자자 그룹에 약 $530m 에 매각** ($250m 14일 내, $150m 2026-12-31까지, 약 $130m 2027-04-30까지). 8-K 는 2026-07-06 을 "Closing Date"로 표기, 이후 "Fluidstack이 프로젝트를 계속 주도". 회사 웹사이트 사이트 목록에서도 Abernathy 가 빠짐.
- 그래서 기준일 기준 TeraWulf 는 더 이상 developer/owner 가 아니라고 보고 primary=fluidstack, terawulf 는 developer(2025-10 공동 개발 발표 근거)로만 남김. **병합 시 이 사이트를 fluidstack 쪽으로 옮길지 결정 필요.**

### Justified Data Campus (Hawesville, Hancock County, KY) — detail: lite
- 옛 Century Aluminum 호스빌 제련소 부지, 250+ 에이커, 통전된 변전소, 고압 송전선. 2026-02-02 인수(총 약 $301.9m, 매도인은 개발법인 지분 6.8% 보유 → terawulf owner share 0.932).
- 전력: gross 약 480MW(MISO, Big Rivers·Kenergy), 2026-08-21 KY PSC 가 482MW RESA 승인.
- 2026-07: Anthropic PBC 와 401MW IT 20년 임대(약 $19bn, 연장 시 최대 약 $33bn). 첫 인도 2027 하반기, 전량 2028 초. "투자등급 신용"으로 지원 예정(제공자 미공개).
- 개발비 약 $40~45억(MW당 $10~12m). 착공 여부 미확인 → under_construction 단계 없이 planned → 2027-H2 commissioning(target) → 2028-H1 operating(target).

### Muskie Data Campus (EastPark Industrial Park, 동부 KY) — detail: lite
- 2026-05-22 Industrial Equity Partners 로부터 인수, 약 285에이커. Kentucky Power(AEP)가 765kV 망에 연결되는 345kV 변전소 건설 중(PJM).
- 계약 전력: 500MW(2026-05) → **1GW(2026-10-01 계약 개정, 10-05 공시)**. 1단계 500MW 2028 램프업(Q2 자료: 2028 Q4 첫 서비스), 2단계 500MW 2030 → 2029 로 앞당김(KY PSC 승인 조건). 최대 2GW 검토. 입주사 없음.
- 건물 대신 전력 블록 2개(mw_basis grid)로 표시.

### 제외한 사이트
- **Lake Hawkeye** (Lansing, Tompkins County, NY — 옛 Cayuga 석탄발전소, 183에이커 80년 임차, CEO 관계사): gross 400MW / IT 320MW, 1단계 150MW → 2단계 300MW, 인허가(site plan review) 중, 운영 2029 예상. 확보 전력·입주사 없어 제외.
- **Chesapeake Data Campus** (Morgantown 발전소, Charles County, MD): 210MW 기존 발전설비, 최대 1GW, FERC 승인 2026-07-29, 인수 종결 미확인(2026 하반기 예상), 데이터센터 운영 2030 예상. 미종결이라 제외.
- Nautilus(펜실베이니아, Talen 합작 채굴장)는 2024-10 지분 매각 — AI/HPC 아님.

## 2. 상충 정보 (양쪽 출처)

| 항목 | A | B | 채택 |
|---|---|---|---|
| Core42 계약 규모 | 72.5MW (10-K FY2024, 2024-12-23 계약) — https://www.sec.gov/Archives/edgar/data/1083301/000108330125000018/wulf-20241231.htm | 60 critical IT MW (Q4'25 보도자료·10-K FY2025) — https://www.sec.gov/Archives/edgar/data/1083301/000108330126000026/a_wulfearningsrelease2026-.htm | **60** (낮은 값, 정의 차이 gross vs IT 추정) |
| CB-4·CB-5 IT MW | CB-3+CB-4 "200MW 이상"(2025-08-14), CB-5 160MW(2025-08-18), CB-4/5 각 162MW(초기 설계) — https://www.sec.gov/Archives/edgar/data/1083301/000110465925079463/tm2523651d3_ex99-1.htm | 각 168MW (Q4'25 보도자료: 설계 최적화로 162→168) | **168** (회사가 명시적으로 상향 — 낮은 값 규칙의 예외. 최신 공시 기준) |
| CB-3 IT MW | 약 40MW (2025-08 발표 맥락) | 42MW (Q4'25·Q2'26 자료) | 42 (최신 건물별 표) |
| Fluidstack 합계 | 약 360MW (2025-08-18) | 378MW (10-K) / "380" (Q4'25 보도자료 반올림) | 건물별 42+168+168=378 |
| Abernathy TeraWulf 지분 | 51% (2025-10-28 보도자료) — https://www.sec.gov/Archives/edgar/data/1083301/000110465925102858/tm2529509d1_ex99-1.htm | 50.1% (8-K: 초기 50.1%, 최대 51%까지 조정 가능 / 10-K·10-Q·매각 8-K) — https://www.sec.gov/Archives/edgar/data/1083301/000108330126000031/wulf-20251231.htm | **50.1%** (낮은 값·실제 매각 지분) — 다만 매각으로 현재 0 |
| Abernathy 인도 목표 | 2026 하반기 (2025-10 발표, 10-K) | 2026 Q4 (Q1'26 보도자료) | 2026-Q4 (더 구체적) |
| Abernathy 부지 | 120에이커 25년 임차 (투자자 자료, Tier 1) | 29.3에이커 필지·637,000 sq ft (cleanview 트래커, Tier 3) | 120 (Tier 1). 29.3 은 건물 필지일 가능성 — 미사용 |
| Muskie 면적 | 약 285에이커 (2026-05 8-K, 회사 웹) — https://www.sec.gov/Archives/edgar/data/1083301/000108330126000109/wulf-20260522.htm | 약 308에이커 (Q2'26 보도자료·10-Q) — https://www.sec.gov/Archives/edgar/data/1083301/000108330126000166/wulf-20260630.htm | **285** (낮은 값) |
| Muskie 계약 전력 | "up to 1 GW of contracted electric service" (Q2'26 보도자료, 2026-08) | 500MW → 1GW 로 확대 (2026-10-05 8-K) | 2026-05~09: 500, 2026-10~: 1,000 (8-K 가 명시적으로 '500MW 에서 확대'라 함. Q2 문구는 인프라 설계 용량으로 해석) |
| Muskie 2단계 일정 | 2030 하반기 (2026-05) | 2029 (2026-10, PSC 승인 조건) | 2029 target |
| Muskie 1단계 일정 | 2028 하반기 램프업 (2026-05) | 2028 Q4 첫 서비스 (Q2'26) | 2028-H2 target |
| CB-4 통전 시점 | Q3 2026 (Q4'25 보도자료) | 9월 말 첫 데이터홀 (Q2 콜), "2026 하반기 단계 인도" | 2026-08 commissioning(reported), 2026-Q4 operating(target) |
| CB-5 일정 | 통전 Q4 2026 (Q4'25 보도자료), "2026년 인도·임대 개시"(Q1'26) | 2027 초 단계 인도 (Q2'26), 투자자 자료 "Q1'27" | 2027-Q1 target (최신, 사실상 지연) |
| Justified gross | 480MW (Q1·Q2 자료) | 482MW (KY PSC 승인 RESA) | power: 480 → 482 이력, 건물 gross 480 |

## 3. 미확인 항목
- CB-4 첫 데이터홀이 2026-09 말 실제 통전됐는지(기준일 현재 공식 발표 없음). CB-4/CB-5 gross MW·데이터홀 수·PUE.
- 잔여 채굴 145MW 의 퇴역 시점 — 2027-Q1 은 **추정** (500MW gross 한도 안에 HPC 438MW IT 를 넣으려면 채굴 전력 재배분 필요하다고 판단). 회사는 "경제성 있고 HPC 와 충돌하지 않는 한 채굴 지속"이라고만 함. 2026 Q2 해시레이트 5.6 EH/s.
- 추가 250MW(→750MW) 계통 승인 시점.
- WULF Den·CB-1 정확한 가동월 (10-K "Core42 임대 2건 2025-07·08 개시"를 2+16=18MW 와 짝지은 해석), CB-3·CB-4·CB-5 착공월.
- Abernathy: 지분 이전 완료 시점(서명=종결인지), 매수 그룹 내 Fluidstack 지분율, 매각 후 공정 현황, 계통 승인 MW. 최종 사용자("global hyperscale AI platform developing frontier-scale foundation models")는 미공개 — 트래커(Tier 3)는 Anthropic 으로 표기하나 공식 확인 없음 → end_user 미기재.
- Justified: 착공 여부, 단계별 MW, Anthropic 신용 지원 제공자, 매도인 이름(Century Aluminum 관계사로 추정되나 공시엔 없음).
- Lake Mariner Google 보증 중 실제 발효액: CB-3 인도로 $600m 발효(나머지는 CB-4·CB-5 인도 조건으로 추정).
- 새 회사 id: `core42`, `anthropic` (companies.json 에 없음).

## 4. 좌표 근거
- **Lake Mariner**: 43.329, -78.554 — Barker, NY 마을 중심(medium, city_centroid). 공시 근거: 10-K "located in Barker, New York", "157 acres in Niagara County". 실제 시설은 온타리오호 연안 옛 Somerset 발전소 인접(마을 북서쪽 수 km)이지만 공식 주소를 공시에서 찾지 못해 마을 중심 사용. 위성사진 추적 안 함.
- **Abernathy**: 33.832, -101.843 — Abernathy, TX 시 중심(medium). 근거: 투자자 자료 "120 acres in Abernathy, TX (SPP)". 카운티(Hale)는 시 소재지 기준.
- **Justified**: 37.900, -86.755 — Hawesville, KY 시 중심(medium). 근거: 2026-02-02 8-K "former industrial site in Hawesville, Kentucky", PSC 보도자료 "former Century Aluminum Hawesville". 제련소 자체는 시 중심에서 서쪽으로 떨어져 있을 수 있음.
- **Muskie**: 38.332, -82.948 — Grayson, KY 시 중심(medium). 근거: 10-Q "approximately 308 acres of land located in Grayson, Kentucky". 다만 인수 발표는 "1,000에이커 EastPark Industrial Park" 내라고 하며, EastPark 는 Grayson 동쪽(Boyd/Greenup 카운티 쪽)이라 실제 위치와 수~십여 km 차이 가능 → 정확도 낮음에 가까움.

## 5. 데이터 해석 메모
- `energized_mw` = 실제 사용 중인 전력(채굴 MW 보고치 + HPC IT×1.3 환산). 2025-12 이후 값은 estimate.
- `secured_mw` 500 = 회사가 2022년부터 밝힌 "근시일 500MW" 용량. 엄밀한 계통 승인 수치는 공시에 없음.
- CB-4 `replaces` 전환 채굴동(100MW), CB-5 `replaces` 잔여 채굴동(145MW): 건물 gross 합계가 확보 전력 105% 를 넘지 않게 하는 동시에 "채굴 전력을 HPC 가 넘겨받는다"는 구조를 표현. 실제 전력 배분 방식은 미공개.
- Justified 건물 gross 480 = 캠퍼스 gross 전력(IT×1.3=521 은 482×1.05 를 넘으므로 회사 gross 값 사용).
- Muskie 는 입주사 없는 전력 블록(mw_basis grid) 2개로 표시.
- 검사 결과: `node scripts/check-draft.mjs terawulf` → ✅ (경고 3건: 지구본 타일 재생성 필요, core42·anthropic 미등록 — 모두 병합 단계 작업)
