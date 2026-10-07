# Meta Platforms (META) — 조사 노트

- 기준일(as_of): 2026-10-07
- 회사 id: `meta` / group: `hyperscaler` / ticker NASDAQ: META / hq_country: US
- color: `#5f5fdd` (미리 배정된 색, 변경 안 함). check-draft 에서 "회사색이 너무 비슷함" 경고 없음.
- 주 출처(Tier 1)
  - SEC 공시: 10-Q 2025 3분기(Hyperion 합작), 10-K 2025, 10-Q 2026 2분기(El Paso 합작, 리스·약정)
  - 실적콜 녹취: 2025 2분기(Prometheus·Hyperion), 2026 1·2분기(설비투자 가이던스, BlackRock 합작)
  - Meta 공식 사이트: datacenters.atmeta.com 의 사이트 목록·정보시트(2026-09 갱신)·블로그, about.fb.com 뉴스룸
  - 전력회사: Entergy 보도자료(2025-08-20, 2026-03-27), Williams 2분기 실적 보도자료(2026-08-03), Capital Power 보도자료(2026-07-08)
  - 상대 회사 공시: CleanSpark 8-K 첨부(2026-09-17)

## 1. 요약

### 회사 지표 (metrics)
| 지표 | 값 | 기준 | 출처 |
|---|---|---|---|
| 2025 설비투자(금융리스 원금 포함) | $72.22bn | 2025 | 10-K |
| 2026 설비투자 가이던스 | $130–145bn (1분기 $125–145bn, 연초 $115–135bn 에서 상향·축소) | 2026-07 | 2분기 실적콜 |
| 2026 2분기 설비투자 | $31.08bn | 2026-Q2 | 10-Q |
| 미개시 리스 약정 | $278.99bn (2026~2036 개시) | 2026-06 | 10-Q |
| 해지 불가 계약 약정 | $349.31bn (대부분 외부 클라우드 용량·서버) | 2026-06 | 10-Q |

- 참고: 2026-07 데이터센터 리스 약 $68bn 추가 계약(2027~28 개시, 18~20년 — 상대 미공개, 10-Q 후속 사건). 1분기 실적콜에서 Broadcom 공동개발 자체 칩 "1GW 이상" 배치를 언급함.

### 사이트로 넣은 것 (4곳, 모두 자체 또는 합작 소유)
| id | 이름 | 구조 | 상태(2026-10-07) | 확보 MW | 주요 일정 | detail |
|---|---|---|---|---|---|---|
| meta-prometheus | Prometheus (오하이오 뉴올버니) | Meta 100% | 시운전(추정) | 1,000 (목표) | 2017 착공·2020 첫 가동 → 2025-07 Prometheus 발표 → 2026 Q2 Socrates 1단계 200MW 가동 → 2026 가동 목표, Socrates 2단계 2026 Q4 | lite |
| meta-hyperion | Hyperion (루이지애나 리치랜드 패리시) | Blue Owl 80% / Meta 20% 합작, Meta 임차 | 1단계 건설 중(0.3), 2단계 계획 | 2,000 → 5,000 (2026-07~, 목표) | 2024-12 착공 → 2025-08 Entergy 가스복합 3기 승인 → 2025-10 합작 → 2026-07 5GW 확대 → 2028 말~2029 말 발전소 → 2029 리스 개시 → 2030 2GW | full |
| meta-el-paso | 엘패소 (텍사스) | BlackRock 80% / Meta 20% 합작(종결 미확인), Meta 임차 | 1단계 건설 중(0.3), 2단계 계획 | 440 (추정) → 1,000 (2026-03~, 목표) | 2025-10 발표 → 2026-03 1GW·$10bn+ → 2026-07 BlackRock 합작 → 2027 McCloud 가스 → 2028 가동 시작 | lite |
| meta-sturgeon | 스터전 (캐나다 앨버타) | Meta 100% | 건설 초기(0.05) | 1,000 (목표) | 2026-07 발표·착공 → 2028 하반기 첫 부하(Capital Power 250MW) | lite |

- **Prometheus 를 lite 로 둔 이유**: Meta 는 "1GW 이상"과 "2026년 가동"만 공개했다. 건물별 MW, AEP 계통분, 2020~2023년 기존 건물 포함 여부가 모두 미공개다. 데이터센터 목록 사이트(Tier 3)는 2026년 신축 건물들을 '가동 중'으로 표시하지만 근거로 쓰지 않았다.
- **Hyperion 을 full 로 둔 이유**: 단계별로 근거가 있다. 1단계 약 2GW 는 LPSC U-37425 와 Entergy 가스복합 3기(2,262MW)가 뒷받침한다. 2단계 +3GW 는 LPSC U-37882('Project Evest')와 가스복합 7기(5,200MW 이상)가 뒷받침한다.
- **2024 이전 일반 데이터센터의 AI 전환**: 뉴올버니(Prometheus)만 넣었다. Meta 정보시트에 "AI 클러스터 Prometheus 를 위한 1GW 이상"이라고 명시돼 있기 때문이다.

### 코로케이션·임차 (company.colocations — 지도·순위 미포함)
| 위치 | 호스트 | 규모 | 상태 | 출처 |
|---|---|---|---|---|
| Sandersville, GA | CleanSpark (맞춤형 임차, 임차인 Meta 자회사 Anviran LLC, Meta 보증) | IT 175MW, 20년 기본 약 $6.6bn | 1단계 임대 개시 2027 Q4 목표 | [CleanSpark 8-K ex99.1](https://www.sec.gov/Archives/edgar/data/827876/000119312526393758/clsk-ex99_1.htm) |
| Jamnagar, 인도 | Reliance Industries (맞춤형 임차) | 168MW + 확장 옵션 | 계획 | [Meta 뉴스룸 2026-06-09](https://about.fb.com/news/2026/06/meta-partners-with-reliance-on-ai-enabled-data-center-in-india/) |

## 2. 외부 조달 용량 (네오클라우드·클라우드·임차 — sites 에 넣지 않음)

| 상대 | 규모 | 금액 | 기간 | 출처 | 확인 수준 | 지도 site id |
|---|---|---|---|---|---|---|
| CoreWeave (1차) | 미공개 | 최대 약 $14.2bn | ~2031-12, 2032 까지 증액 옵션 | [CoreWeave 8-K 2025-09](https://www.sec.gov/Archives/edgar/data/1769628/000176962825000050/crwv-20250925.htm) | CoreWeave 공시(Tier 1). Meta 는 상대를 밝히지 않음 | 없음(공급 사이트 미공개). coreweave.json 의 사이트에는 Meta 표기 없음 |
| CoreWeave (증액) | 미공개, 여러 장소, Vera Rubin 일부 | 약 $21bn (누적 약 $35bn) | ~2032-12 | [CoreWeave IR 2026-04-09](https://investors.coreweave.com/news/news-details/2026/CoreWeave-and-Meta-Announce-21-Billion-Expanded-AI-Infrastructure-Agreement/default.aspx) | CoreWeave 공식 | 없음 |
| Nebius (1차) | 미공개 | 약 $3bn | 5년 | [Nebius 6-K 2025-11](https://www.sec.gov/Archives/edgar/data/1513845/000110465925109806/tm2530882d1_ex99-1.htm) | Nebius 공시 | 없음(nebius.json 사이트와 연결 근거 없음) |
| Nebius (2차) | 미공개, Vera Rubin | 전용 $12bn + 조건부 최대 $15bn | 5년, 2027 초 개시 | [Nebius 보도자료 2026-03](https://nebius.com/newsroom/nebius-signs-new-ai-infrastructure-agreement-with-meta) | Nebius 공식. Meta 10-Q 의 "조건부 클라우드 구매 최대 $14.72bn" 과 구조가 일치함(추정) | 없음 |
| Google Cloud | 미공개(서버·스토리지·네트워크) | $10bn+ | 6년 | [Datacentre Review 2025-08](https://datacentrereview.com/2025/08/meta-signs-six-year-10-billion-cloud-deal-with-google/) | 언론 단독 | 해당 없음 |
| Google TPU 임차 | 미공개 | "수십억 달러" | 다년 | [SiliconANGLE 2026-02-26](https://siliconangle.com/2026/02/26/google-meta-reportedly-strike-new-multibillion-dollar-ai-chip-deal/) | 언론 단독(The Information) | 해당 없음 |
| Oracle OCI | 미공개 | 약 $20bn (협상 단계 보도) | 다년 | [Bloomberg 2025-09-19](https://www.bloomberg.com/news/articles/2025-09-19/oracle-in-talks-with-meta-on-20-billion-ai-cloud-computing-deal), [Oracle FY26 2분기](https://www.oracle.com/news/announcement/q2fy26-earnings-release-2025-12-10/) | Oracle 은 "Meta 신규 약정"만 확인. 금액은 언론 | 해당 없음 |
| Crusoe (Childress TX + Warrenton MO) | 약 1.6GW | 미공개 | 미공개 | [Bloomberg 2026-06-18](https://news.bloombergtax.com/artificial-intelligence/meta-strikes-new-ai-computing-deals-with-data-center-firm-crusoe) | 언론 단독, 양사 미확인 | `childress-lancium`, `warrenton` (crusoe.json) — 지시대로 넣지 않음 |
| Firmus (동남아) | 미공개(확정분 + 확장 옵션) | 미공개 | 미공개 | [DCD 2026-09](https://datacenterdynamics.com/en/news/meta-signs-on-to-use-ai-capacity-at-firmus-southeast-asia-data-centers) | Firmus 발표 | 지도에 없음 |
| Applied Digital Delta Forge 2 | IT 210MW | 약 $5.2bn | 15년 | [APLD IR](https://ir.applieddigital.com/news-events/press-releases) | 임차인 비공개("IG 하이퍼스케일러"). Meta 는 The Tech Capital 의 추정 | `delta-forge-2` (applieddigital 초안, 미병합) |
| Hut 8 Beacon Point | IT 704MW (352MW×2) | $19.6bn | 15년 | [DCD](https://datacenterdynamics.com/en/news/hut-8-signs-352mw-data-center-lease-in-texas-with-investment-grade-tenant/) | 임차인 비공개. Meta 는 추측 | `beacon-point` (hut8.json) |
| Microsoft Azure | 2025~26 대형 GPU 계약 확인 안 됨 | — | — | — | — | — |

- Meta 공시상 해지 불가 약정은 다음과 같이 늘었다. 상대 이름은 공시에 나오지 않는다.

  | 시점 | 약정 |
  |---|---|
  | 2025-09 | $81.19bn |
  | 2025-12 | $131.05bn |
  | 2026-03 | $237.67bn |
  | 2026-06 | $349.31bn |

  - 2025-10 에 외부 클라우드 약 $40bn, 2026-04 에 다년 인프라 약 $24bn 이 추가됐다.
  - 아래는 금액·시점이 맞아떨어진다는 것뿐인 추정이다. 2025-10 분에는 Oracle·Nebius 1차가, 2026-04 분에는 CoreWeave 증액이 들어 있는 것으로 보인다.
- 방향이 반대인 건도 있다. Anthropic 이 Meta 에게서 약 $10bn 규모를 빌리는 협상이 보도됐다(2026-07, 미확인). 표에서는 뺐다.

## 3. 상충 정보 (양쪽 출처)
1. **Hyperion 1단계 확보 전력**
   - Entergy 승인 발표: 발전 2,262MW (Tier 1). 데이터센터 부하 MW 는 없음.
   - DCD: "2GW 데이터센터" (Tier 2).
   - 판단: 낮은 2,000MW 를 채택했다.
2. **Hyperion 투자액·면적**
   - 투자액 변화: 2024-12 $10bn → 2025-10 합작 개발비 약 $27bn → 2026-07 $50bn+ (모두 Tier 1). 시점별 값이라 상충은 아니다.
   - 면적: 2,250에이커(2024-12 주정부 발표 보도) vs TNW "4,000에이커"(2026). 판단: 낮은 2,250 을 채택했다.
3. **Hyperion 가동 시점**
   - 10-Q: 리스는 "2029년 개시".
   - TechCrunch: Zuckerberg 게시물 기준 "2030년까지 2GW".
   - Entergy: 리치랜드 발전소 2기는 2028 말 가동.
   - 판단: 시운전 2029(목표), 가동 2030(목표)으로 표기했다.
4. **El Paso 규모·투자**
   - 2025-10: "1GW 까지 확장 가능", $1.5bn+.
   - 2026-03: "1GW 로 성장", $10bn+.
   - 2026-07 합작: 개발비 약 $14bn.
   - Texas PUC 서류 보도(Argus): 처음 220MW 요청 → 2027년 440MW 이상 → 2029년 1GW 가능.
   - 판단: 확보 전력은 2025-10 부터 440MW(추정), 2026-03 부터 1GW(목표)로 단계화했다.
5. **El Paso 합작 발표일**
   - Meta 뉴스룸: 2026-07-28 (페이지에 7/27 표기도 있음).
   - DCD: 7/29.
   - 2분기 실적콜(7/29): "Yesterday".
   - 판단: 2026-07-28 을 채택했다.
6. **Prometheus 가동 여부**
   - Meta: "2026년 가동" 목표만 밝혔다.
   - Williams: Socrates 1단계 200MW 를 고객에게 공급 중(2026 2분기까지).
   - 목록 사이트(Tier 3): 2026년 건물이 가동 중.
   - 판단: 시운전(estimate)으로 처리했다.
7. **Hyperion 소유 지분 해석**: Meta 10-Q 는 Meta 가 "주 수익자가 아님"이라 연결하지 않는다고 밝혔다. 그래도 Meta 가 건설·운영 관리를 맡고 단독 임차인이므로 primary 는 meta 로 뒀다(브리프 5-1 의 '단독 운영·임차' 예외 취지).

## 4. 미확인
- Prometheus
  - AEP Ohio 계통 용량
  - 기존 1~7동(2020~2025)과 Prometheus 의 경계
  - 공식 주소(보도: Beech Rd 동쪽·SR-161 남쪽, Licking County 쪽)
  - 신속 배치 구조물(텐트) 규모
  - Socrates 고객이 Meta 계열 Sidecat LLC 라는 점은 OPSB 서류 보도(Tier 2)로만 확인했다.
- Hyperion
  - 2단계 착공 시점과 LPSC U-37882 결정(2026-12-16 심의 예정)
  - 완공 2032(추정)
  - 냉각 방식
  - 건물 수: 보도상 최대 11동, 약 1,000만 sq ft
- El Paso
  - 합작 종결 공시(3분기 10-Q 에서 확인 필요)
  - McCloud 발전소 PUC 승인 여부
  - 부지 필지와 면적
- Sturgeon
  - 부지 위치
  - Greenlight Electricity Centre(1단계 932MW, 보도)와의 계약 규모
  - 실제 착공 여부: Meta 목록은 '2026 break ground', 언론은 "breaking ground"
- 제외한 후보 (MW 미공개 또는 AI 용도 미명시)
  - **Lebanon, IN**: 2026-02 발표, $10bn+, 약 400만 sq ft. GW급으로 보이나 MW 와 AI 문구가 없다.
  - **Temple, TX**: 2026-07-22 가동. Meta 는 "첫 AI 최적화 데이터센터 가동"이라고 밝혔다.
  - **Beaver Dam, WI**: 2025-11 발표, $1bn, 'AI 워크로드 최적화'.
  - **Montgomery, AL**: 2024-05 발표, 2025-09 증설로 $1.5bn+.
  - **Bowling Green, OH**: 2025-04.
  - **Tulsa, OK**: 2026-04, "next AI data center".
  - **Rosemount, MN / Cheyenne, WY / Aiken, SC**: 2024, 각 $800M, 'AI 최적화'.
  - **Jeffersonville, IN / Kansas City / Kuna / Eagle Mountain 증설**: AI 문구가 없다.
  - **해외 Odense·Talavera**: 조사하지 못했다.
- 자체 AI 데이터센터 수: 목록 사이트 기사(redact.dev)는 "32곳"이라고 했지만 Meta 공식 수치가 아니다.

## 5. 좌표 근거
| 사이트 | 좌표 | 신뢰도·방법 | 근거 |
|---|---|---|---|
| meta-prometheus | 40.081, -82.809 | medium / city_centroid | 뉴올버니 시 중심. 캠퍼스는 시 동쪽 Licking County 쪽 비즈니스파크(보도). 공식 주소를 확인하지 못했다. 위성사진 추적은 하지 않았다. |
| meta-hyperion | 32.477, -91.632 | medium / city_centroid | Holly Ridge(옛 Franklin Farm 메가사이트) 좌표, Wikipedia 'Hyperion Data Center'. 필지 경계는 미확인이다. |
| meta-el-paso | 31.848, -106.43 | medium / city_centroid | 엘패소 시 경계의 대략적 중심. 도심(31.762, -106.485)은 검증 지도의 국경 해상도 때문에 '미국 영토 밖' 오류가 나서 북동쪽으로 옮겼다. 보도상 부지는 시 북동부 Stan Roberts Sr. Ave 인근이다. |
| meta-sturgeon | 53.802, -113.65 | low / county_centroid | Sturgeon County 행정 중심(Morinville), Wikipedia. 부지는 미공개다. |

- 3km 중복 검사: 4곳 모두 기존 사이트와 3km 이상 떨어져 있다. 가장 가까운 것은 Prometheus ↔ cipher `ulysses`(약 23km)다. check-draft 의 3km 경고 2건(abilene, childress)은 기존 crusoe 데이터에서 나온 것이고 이번 초안과 관계없다.

## 6. 출처 목록
- SEC
  - [10-Q 2025 3분기](https://www.sec.gov/Archives/edgar/data/1326801/000162828025047240/meta-20250930.htm)
  - [10-K 2025](https://www.sec.gov/Archives/edgar/data/1326801/000162828026003942/meta-20251231.htm)
  - [10-Q 2026 2분기](https://www.sec.gov/Archives/edgar/data/1326801/000162828026050705/meta-20260630.htm)
  - [CleanSpark 8-K ex99.1](https://www.sec.gov/Archives/edgar/data/827876/000119312526393758/clsk-ex99_1.htm)
- 실적콜
  - [2025 2분기](https://s21.q4cdn.com/399680738/files/doc_financials/2025/q2/META-Q2-2025-Earnings-Call-Transcript.pdf)
  - [2026 2분기](https://s21.q4cdn.com/399680738/files/doc_financials/2026/q2/META-Q2-2026-Earnings-Call-Transcript.pdf)
- Meta 공식
  - [사이트 목록](https://datacenters.atmeta.com/all-locations/)
  - [뉴올버니 정보시트](https://datacenters.atmeta.com/asset/new-albany-data-center-info-sheet/), [리치랜드 정보시트](https://datacenters.atmeta.com/asset/richland-parish-data-center-info-sheet/), [엘패소 정보시트](https://datacenters.atmeta.com/asset/el-paso-data-center-info-sheet/), [스터전 정보시트](https://datacenters.atmeta.com/asset/meta-sturgeon-data-centre-info-sheet/)
  - [Hyperion 5GW 블로그](https://datacenters.atmeta.com/2026/07/deepening-our-investment-in-richland-parish-louisiana/), [Blue Owl 합작](https://about.fb.com/news/2025/10/meta-blue-owl-capital-develop-hyperion-data-center/)
  - [Hello El Paso](https://datacenters.atmeta.com/2025/10/hello-el-paso/), [El Paso 1GW](https://datacenters.atmeta.com/2026/03/big-things-are-happening-el-paso/), [BlackRock 합작](https://about.fb.com/news/2026/07/meta-announces-new-venture-with-blackrock-to-develop-data-center-in-el-paso/)
  - [Hello Sturgeon County](https://datacenters.atmeta.com/2026/07/hello-sturgeon-county/), [Reliance 임차](https://about.fb.com/news/2026/06/meta-partners-with-reliance-on-ai-enabled-data-center-in-india/)
- 전력회사
  - [Entergy 2025-08-20](https://www.entergy.com/news/entergy-louisiana-receives-lpsc-approval-for-major-infrastructure-investments-to-support-metas-data-center-and-improve-reliability)
  - [Entergy 2026-03-27](https://www.entergy.com/news/entergy-louisiana-announces-a-new-agreement-with-meta-that-will-deliver-an-additional-2b-in-customer-savings)
  - [Williams 2026 2분기](https://www.williams.com/2026/08/03/williams-delivers-strong-second-quarter-2026-results-announces-strategic-acquisition-of-momentum-midstream-connecting-haynesville-to-gulf-coast-lng-and-power-demand/)
  - [Capital Power 2026-07-08](https://www.capitalpower.com/?p=8078)
- 언론(Tier 2)
  - [DCD — Entergy 2GW](https://www.datacenterdynamics.com/en/news/entergy-obtains-approval-to-construct-three-gas-facilities-to-serve-metas-2gw-data-center-in-louisiana)
  - [DCD — Louisiana 400만 sq ft](https://datacenterdynamics.com/en/news/meta-announces-4-million-sq-ft-louisiana-data-center-campus)
  - [DCD — OPSB Socrates](https://www.datacenterdynamics.com/en/news/ohio-regulators-approve-construction-of-200mw-gas-power-plant-to-serve-meta-data-center-in-new-albany-ohio/)
  - [TechCrunch 2025-07-14](https://techcrunch.com/2025/07/14/mark-zuckerberg-says-meta-is-building-a-5gw-ai-data-center)
  - [KNOE 2024-12-05](https://www.knoe.com/2024/12/05/meta-build-10-billion-ai-data-center-richland-parish/)
  - [Argus — El Paso 가스](https://www.argusmedia.com/en/news-and-insights/latest-market-news/2810465-meta-funds-el-paso-nat-gas-plant-as-interim-power-fix)
  - [Hoodline — Stan Roberts Ave](https://hoodline.com/2026/01/meta-s-mega-data-hub-muscles-onto-stan-roberts-avenue/)
  - [UCS — LPSC 일정](https://www.ucs.org/about/news/louisiana-regulators-fast-track-7-gas-plant-proposal-meta-data-center)
  - [w.media — 원전 계약](https://w.media/meta-unveils-new-nuclear-power-partnerships-for-data-centers-and-ai-infrastructure/)
  - [technews — Sturgeon 가스](https://technews.tw/2026/07/09/meta-canada-1gw-gas-powered/)
- 참고(추정 근거로만 사용)
  - [Wikipedia — Hyperion Data Center](https://en.wikipedia.org/wiki/Hyperion_Data_Center)
  - [Wikipedia — Sturgeon County](https://en.wikipedia.org/wiki/Sturgeon_County)
