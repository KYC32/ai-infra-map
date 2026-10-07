# Oracle (NYSE: ORCL) — 리서치 노트

- 기준일(as_of): 2026-10-07
- 초안: `research/drafts/oracle.json` (사이트 4곳, 근거 33건: Tier 1 28 / Tier 2 5 / Tier 3 0 — Tier 3 는 estimates[] 에만 사용)
- 회사 id `oracle`, group `hyperscaler`, ticker ORCL/NYSE, 회사색 `#e25a63` 그대로 유지(지시사항). 기존 핀 회사색과 RGB 거리 28 이상이라 경고 없음
- 이번 배치 규칙에 따라 **Vantage·Related·STACK 이 짓고 Oracle 이 임차·운영하는 Stargate 부지는 primary = oracle**, 개발사는 parties(developer/owner). 모든 사이트에 `program: "stargate"`
- **Abilene(Stargate 1호)은 crusoe 파일에 이미 있어 넣지 않음**(Oracle 은 거기서 tenant)

## 1. 요약

- Oracle 은 OCI 로 OpenAI 등에 AI 클라우드 용량을 공급한다. 자체 부지를 짓기보다 도매 개발사가 짓는 캠퍼스를 15~19년 장기 임차해 직접 운영(GPU·네트워크 설치, 고객 인도)하는 구조다.
- 공시 수치(FY27 1분기, 2026-08-31 종료):
  - RPO $664bn(1년 +$209bn). 12개월 안에 약 13% 를 매출로 인식할 예정 ([10-Q](https://www.sec.gov/Archives/edgar/data/1341439/000119312526389274/orcl-20260831.htm))
  - IaaS 매출 $7.4bn(+121%), 전체 매출 $19.3bn. 분기에 850MW 용량을 인도했고 GPU 30만 개 이상을 납품 ([8-K Ex.99.1](https://www.sec.gov/Archives/edgar/data/1341439/000119312526387905/orcl-ex99_1.htm))
  - 아직 개시되지 않은 추가 리스 약정은 $288bn 으로, 대부분 데이터센터다(FY27 2분기~FY29 개시, 15~19년). 분기 설비투자는 $28.5bn ([10-Q](https://www.sec.gov/Archives/edgar/data/1341439/000119312526389274/orcl-20260831.htm))
  - 파트너를 통해 향후 3년간 가동할 전력·데이터센터 용량 10GW 초과를 확보했다고 밝혔다(2026-03 콜) ([Q3 FY26 콜](https://www.fool.com/earnings/call-transcripts/2026/03/10/oracle-orcl-q3-2026-earnings-call-transcript/))
- Oracle 공식 데이터센터 페이지와 2026-01 블로그는 OpenAI 와 함께하는 캠퍼스로 **Abilene, Shackelford County, Doña Ana County, Port Washington, Saline Township** 5곳을 든다 ([oracle.com/data-centers](https://www.oracle.com/data-centers/), [2026-01-26 블로그](https://www.oracle.com/news/announcement/blog/oracle-ai-infrastructure-in-2026-and-our-commitment-to-local-communities-2026-01-26/)). Abilene 을 뺀 4곳을 이 초안에 넣었다.
- Q4 FY26 콜(2026-06-10)에서 Oracle 은 5대 부지별 계약 시점과 고객 인도 시점을 공개했다 ([녹취](https://www.fool.com/earnings/call-transcripts/2026/06/10/oracle-orcl-q4-2026-earnings-call-transcript/)).
  - Shackelford: 2025-08 계약, 인도 2027 상반기 시작, 115MW 전력 이미 가동
  - Doña Ana: 2025-09 계약, 인도 2027 상반기 시작
  - Saline: 2025-10 계약, 인도 2027 하반기 시작, 네트워크 코어는 2026년 말
  - Port Washington: 2025-09 계약, 인도 2027 하반기 시작
- Q1 FY27 콜(2026-09-10): "Shackleford·New Mexico·Wisconsin·Michigan 모두 1분기에는 인도분 없음". 이 부지들은 "대략 1GW 씩"이며 단계적으로 가동된다고 했다. NM·WI 는 FY27 매출 가이던스에 영향이 없다고 밝혔다 ([녹취](https://www.fool.com/earnings/call-transcripts/2026/09/11/oracle-orcl-q1-2027-earnings-call-transcript/)).

## 2. 사이트 목록

| 사이트 | primary | 상태(기준일) | 확보 MW | 주요 일정 | 개발·소유 |
|---|---|---|---|---|---|
| Shackelford County (`shackelford-frontier`, full) | oracle | 건설 중 (2026-06 115MW 통전) | 1,820 (추정, IT 1.4GW×1.3, 계통 비연결 가스 마이크로그리드) | 2025-08 발표·계약, 2025-12 착공식, 1동 2026 하반기 인도(Vantage) → 고객 인도 2027 상반기(Oracle), 10개 동 순차 ~2028 | Vantage (developer/owner) |
| Saline Township (`saline-the-barn`, full) | oracle | 건설 중 | 1,383 (DTE 계약, MPSC 2025-12 승인) | 2025-10 발표, 2026-06-01 착공식, 네트워크 코어 2026 말, 고객 인도 2027 하반기, 전체 개장 2029(보도) | Related Digital (developer/owner), Blackstone (financier) |
| Port Washington (`port-washington-lighthouse`, lite) | oracle | 건설 중 | 1,300 (target, We Energies 1단계 수요) | 2025-10-22 발표, 2025-12 착공, 고객 인도 2027 하반기(Oracle), 완공 2028(Vantage). ATC 송전 재신청 중 | Vantage (developer/owner) |
| Doña Ana County (`dona-ana-jupiter`, lite) | oracle | 건설 중(건물) / 전력 인허가 지연 | 1,000 (target, 'around a GW'. 연료전지 최대 2.45GW 설치) | 2025-09 발표, 2026-04 Bloom 연료전지로 설계 변경, 고객 인도 2027 상반기(Oracle 2026-06) vs 2028 목표(불가항력 통지 보도), 파이프라인 2027-02-01 | STACK (Blue Owl 계열)·BorderPlex (developer), Blue Owl (owner) |

### 사이트별 메모

**Shackelford (Frontier)**
- Vantage 공식 페이지 기준 1,200에이커, 10개 동, IT 1.4GW, 370만 sq ft. 첫 동은 2026 하반기 인도 예정 ([Vantage](https://vantage-dc.com/data-center-locations/north-america/shackelford-county-tx))
- Oracle 페이지: 현장 마이크로그리드(초저배출 왕복엔진), one-time fill 폐쇄 루프 냉각 ([Oracle](https://www.oracle.com/data-centers/shackelford-county/))
- 2025-09-23 Oracle 팩트시트: 개발 파트너는 Vantage·VoltaGrid. 이미 착공했고 Jenbacher 엔진 BTM 마이크로그리드를 쓴다 ([팩트시트](https://arrington.house.gov/uploadedfiles/final_oracle_oai_data_center_fact_sheet_092225b.pdf))
- 2025-10-15 Oracle–VoltaGrid 2.3GW 계약. 텍사스 전체 대상이며 부지별 배분은 미공개 ([POWER](https://www.powermag.com/oracle-taps-voltagrid-for-2-3-gw-modular-gas-fleet-to-power-ai-data-centers-across-texas/))
- 건물은 1동 / 2~5동 / 6~10동 3묶음으로 넣었다. 동별 140MW 는 균등 배분 추정이다.

**Saline Township (The Barn)**
- Related 보도자료: 1GW 초과, 3개 동(각 55만 sq ft), 250에이커, DTE 가 전력 100% 공급하고 배터리는 프로젝트가 부담. Related 는 "Oracle 전용"으로 개발한다 ([Related](https://www.related.com/press-releases/2025-10-30/openai-oracle-and-related-digital-announce-stargate-data-center-site))
- MPSC 2025-12-18 조건부 승인 ([MPSC](https://www.michigan.gov/mpsc/commission/news-releases/2025/12/18/mpsc-approves-dte-electric-energy-contracts-for-data-center), [WILX](https://www.wilx.com/2025/12/18/state-commission-approves-dte-contracts-saline-twp-data-center))
  - 1,383MW, 고객은 Oracle 자회사 Green Chile Ventures LLC
  - 계약 19년, 최소 청구 수요 80%, 해지 시 최대 10년치 지급
  - 비상시 데이터센터를 먼저 단전하는 조건
  - 약 1.4GW 저장장치 비용을 프로젝트가 부담
- 2026-06-01 착공식. 자금은 Related·Blackstone 지분 + PIMCO 주도 고정금리 장기 부채이고 시공사는 Walbridge ([Oracle 보도자료](https://www.oracle.com/news/announcement/related-digital-oracle-openai-walbridge-and-governor-whitmer-celebrate-construction-of-stargate-campus-in-saline-township-2026-06-01/))
- 2026-09-28 누적 100만 노조 작업시간, 현장 인력 2,000명 이상. 'Compute 1' 작업이 언급됨 ([Oracle](https://www.oracle.com/news/announcement/blog/one-million-union-craft-hours-building-michigans-future-2026-09-28/))
- 진행 중인 쟁점: 주 법무장관 항소(2026-08), Saline River 폐수 방류 허가(EGLE 공청회), 타운십 세금감면 소송

**Port Washington (Lighthouse)**
- Vantage 페이지 기준 672에이커, 4개 동, IT 902MW, 250만 sq ft, 2028 완공. 전력은 We Energies 가 공급한다 ([Vantage](https://vantage-dc.com/data-center-locations/north-america/port-washington-wisconsin))
- 2025-10-22 발표 때 Stargate '중서부 부지'임을 밝혔다 ([Vantage PR](https://vantage-dc.com/news/openai-oracle-and-vantage-data-centers-announce-stargate-data-center-site-in-wisconsin/))
- 2025-12 착공, 1단계 $8bn ([DCK](https://www.datacenterknowledge.com/data-center-construction/vantage-breaks-ground-on-15b-stargate-campus-in-wisconsin))
- 2026-04-24 PSC 가 VLC 요금제를 승인했다 ([Insight](https://insightonbusiness.com/we-energies-rate-request-for-data-centers-ok-d/)). 2026-06 Oracle 은 PSC 의 신용·담보 요건 강화를 두고 카운티 법원에 심사를 청구했다 ([Hoodline](https://hoodline.com/2026/06/oracle-takes-state-regulators-to-court-over-port-washington-data-center-deal/))
- ATC Ozaukee County 송전·변전 사업
  - 2026-08-06 PSC 가 '완결성' 결정을 취소했다(사실상 절차 재시작) ([WPR](https://www.wpr.org/news/psc-denies-transmission-project-port-washington-data-center))
  - 2026-09 재신청. 비용 $2.48~2.72bn 이며, 이 중 약 $1.1bn 의 계통 안정 설비는 Oracle 이 부담한다 ([WPR](https://www.wpr.org/news/atc-reapplies-transmission-project-port-washington-data-center), [Oracle 블로그](https://www.oracle.com/news/announcement/blog/a-responsible-path-forward-for-project-lighthouse-2026-09-16/))

**Doña Ana (Project Jupiter)**
- 2026-04-27 Oracle·BorderPlex·Bloom 보도자료: 가스터빈·디젤 대신 Bloom 연료전지 최대 2.45GW 를 설치하고 단일 마이크로그리드로 통합한다. "공사는 일정대로 진행" ([Oracle](https://www.oracle.com/news/announcement/oracle-borderplex-and-bloom-energy-to-power-project-jupiter-with-fuel-cell-technology-2026-04-27/))
- 계통 연결은 사무동·초기 시운전용 소형 변전소뿐이다. Oracle 은 "2GW 이상 자원 중 전부가 필요하지는 않다"고 했다 ([Oracle 블로그](https://www.oracle.com/news/announcement/blog/weve-overhauled-project-jupiters-power-plan-2026-07-01/))
- 2026-09-14 Oracle 성명 ([Oracle](https://www.oracle.com/news/announcement/project-jupiter-statement-on-construction-permitting-2026-09-14/))
  - 데이터센터 캠퍼스와 마이크로그리드는 서로 다른 회사가 운영하는 별도 시설이다
  - 마이크로그리드 대기 인허가 절차는 주 대법원이 중지했다
  - 건물은 카운티 허가로 건설 중이다
  - 마이크로그리드 운영사는 Yucca Growth Infrastructure
- 2026-09-24 Oracle 이 개발사(Blue Owl 계열 STACK)에 불가항력 통지를 보냈다. 2028 가동 목표를 놓치면 지급을 유예하기 위한 것이고 철수는 아니다 ([TechCrunch](https://techcrunch.com/2026/09/24/oracle-sends-force-majeure-notice-on-its-new-mexico-stargate-data-center/))
  - Energy Transfer 파이프라인은 주 토지청 거부(보도상 2026-03·07) 끝에 경로를 바꿨고, 가동 예정이 2027-02-01 로 늦춰졌다
  - NMED 대기 허가 결정 기한은 11-23
- 2026-09-30 홍수가 캠퍼스까지 들어왔으나 핵심 설비는 피해가 없고 "계획 일정 유지" ([STACK](https://www.stackinfra.com/about/news-press/news/project-jupiter-statement-on-southern-new-mexico-floods/))

## 3. 상충 정보 (양쪽 출처, 채택값)

1. **Shackelford 첫 가동 시점**
   - Vantage: 첫 동 "2026 하반기 인도" ([Vantage](https://vantage-dc.com/data-center-locations/north-america/shackelford-county-tx), [팩트시트](https://arrington.house.gov/uploadedfiles/final_oracle_oai_data_center_fact_sheet_092225b.pdf))
   - Oracle(2026-06): 고객 인도 "2027 상반기 시작" ([Q4 FY26](https://www.fool.com/earnings/call-transcripts/2026/06/10/oracle-orcl-q4-2026-earnings-call-transcript/))
   - Epoch(Tier 3): 1동 가동 2027-08 추정
   - **채택:** 개발사 인도(시운전 2026-12 target) → Oracle 고객 인도(가동 2027-H1 target)로 단계를 나눔. 두 발표가 서로 다른 단계를 말하는 것으로 해석했다.
2. **Shackelford 면적**: 팩트시트(2025-09) 700에이커 vs Vantage·Oracle 페이지 1,200에이커 → **1,200 채택**. 700 은 1단계 개발 면적일 가능성(미확인). 낮은 값 규칙의 예외로, 최신 공식 페이지 두 곳이 일치해서 1,200 을 택했다.
3. **Saline 첫 가동 시점**: Michigan Public(2026-06-01) "첫 부분 2027년 초 가동" ([Michigan Public](https://michiganpublic.org/economy/2026-06-01/company-leaders-optimistic-responsible-development-of-saline-data-center-will-set-example)) vs Oracle "고객 인도 2027 하반기 시작" → **늦은 쪽(Oracle) 채택**.
4. **Saline 사업비**: Oracle·주지사 $16bn(2026-06) vs Spectrum News "$43bn 이상"(2026-08, 장비 포함으로 추정) ([Spectrum](https://spectrumlocalnews.com/mi/michigan/news/2026/08/02/related-digital-saline-township-data-center-construction-progress)). 데이터에는 쓰지 않음.
5. **Saline 면적**: 데이터센터 250에이커 vs 전체 부지 575에이커(재조닝)·1,000에이커 이상(Oracle) → 실제 사용 면적 **250 채택**.
6. **Doña Ana 가동 시점**: Oracle(2026-06) "고객 인도 2027 상반기 시작" vs TechCrunch(2026-09) "2028 가동 목표" vs Epoch "4개 동 중 1개 2027, 초기 가동 2028" → lite 전력 이력에서 **통전 2028(target)** 으로 둠(늦은 쪽).
7. **Doña Ana 면적**: Oracle 현재 페이지 818에이커(데이터센터+마이크로그리드) vs 팩트시트·다수 보도 1,400에이커 → **낮은 값 818 채택**.
8. **Doña Ana 규모**
   - Oracle CEO "대략 1GW"
   - Bloom 연료전지 설치 최대 2.45GW (TechCrunch 등은 "2.45GW 캠퍼스"로 표현)
   - 2025 초기 보도 4.5GW(마이크로그리드 2개)
   - Epoch IT 1,750MW 추정
   - **채택: 낮은 값 1,000MW(target).**
9. **Doña Ana 개발사 표기**: 팩트시트 "STACK Infrastructure, Orion Digital Infrastructure" vs 2026 Oracle 보도자료 "BorderPlex Digital Assets" vs TechCrunch "developer Blue Owl" → STACK·BorderPlex 를 developer, Blue Owl(STACK 모회사)을 owner 로 표기.
10. **Port Washington 전력**: Vantage IT 902MW vs We Energies 1단계 1.3GW(장기 3.5GW) vs Oracle "약 1GW" → 계통 기준 **1,300MW(target)**. IT×1.3 ≈ 1,173MW 와 대체로 맞는다.

## 4. 미확인 (open_questions 와 같음)

- 각 사이트 동별 MW·IT MW 는 전부 미공개라 균등 배분으로 추정했다.
- Shackelford 마이크로그리드 실제 용량과 TCEQ 인허가 원문, 정확한 부지 필지
- Doña Ana 건물 소유 법인, Orion Digital Infrastructure 의 역할, Blue Owl 지분 구조, 공사 진척률(보도 "9월 카운티 업데이트 약 26%" 는 출처 미확인)
- Port Washington ATC 재신청 결정 시점과 그에 따른 2027 하반기 인도 지연 여부
- Saline 2·3동 착공 시점
- GPU 기종: Oracle 은 FY27 2분기 첫 Vera 시스템 인도를 언급했으나 부지는 특정하지 않음 → gpu 필드 생략

## 5. 좌표 근거

| 사이트 | 좌표 | confidence / method | 근거 |
|---|---|---|---|
| Shackelford | 32.58, -99.55 | low / region_centroid | 지역지 보도: "Albany 남서쪽", "TX-351·FM 604 부근", "카운티 서부(Hamby 쪽) 공사 차량 증가" ([Albany News](https://www.thealbanynews.net/news?page=5)). 도로 정보로 잡은 대략 위치이며 위성사진은 쓰지 않음. crusoe Abilene(32.449, -99.733)과 약 22km 떨어져 있어 중복 아님. |
| Saline Township | 42.166, -83.855 | medium / city_centroid | 세일린 타운십 중심. 보도상 Michigan Ave(US-12) 북쪽 농지이며 정확한 필지는 공개 자료로 확인하지 못함 |
| Port Washington | 43.387, -87.89 | medium / city_centroid | 포트워싱턴 시 중심(호안에서 약간 내륙). 보도상 캠퍼스는 시 북쪽 농지(Cloverleaf 부지) |
| Doña Ana | 31.856, -106.639 | medium / city_centroid | Santa Teresa 중심. 보도상 Santa Teresa 남쪽 약 3.6마일 |

3km 중복 검사: 기존 data/companies/*.json 의 TX·NM·MI·WI·OH 사이트와 모두 3km 이상 떨어져 있다(check-draft 의 3km 경고 2건은 기존 crusoe·iren 사이트끼리의 것).

## 6. SoftBank 주도 Stargate 부지 (sites 에 넣지 않음 — 별도 초안 여부는 open_questions)

| 부지 | 주도 | 규모 | 일정·상태 | 출처 |
|---|---|---|---|---|
| Lordstown, OH | SoftBank (옛 Foxconn EV 공장을 $375m 에 인수, Foxconn 과 합작 운영) | Milam 과 합쳐 18개월 안에 1.5GW 로 확대 가능(2025-09 발표). Lordstown 단독은 0.3GW 미만 추정(Epoch) | 2025-09 "착공, 내년 가동". 2026 기준 주로 데이터센터 장비(모듈) 제조 거점, 대형 데이터센터 공사는 확인되지 않음 | [The Register](https://www.theregister.com/2025/09/24/openai_oracle_softbank_datacenters/), [Epoch](https://epoch.ai/blog/openai-stargate-where-the-us-sites-stand) |
| Milam County, TX | SB Energy (SoftBank 계열) | 1.2GW. OpenAI 가 1.2GW 리스를 체결했고 SB Energy 가 건설·운영 | 2025-10 착공 보도, 2026 부터 순차 가동 목표. 2026-01-09 OpenAI·SoftBank 가 SB Energy 에 각 $500m 투자 | [SB Energy](https://sbenergy.com/openai-and-softbank-group-partner-with-sb-energy/), [OpenAI](https://openai.com/index/stargate-sb-energy-partnership/) |
| PORTS-Pike (Piketon, OH) | SB Energy + 미 에너지부(DOE) | 데이터센터 10GW + 신규 발전 최대 10GW(가스 9.2GW). OpenAI 가 약 8GW-IT 확보 계약(2026-08-17) | 2026-03-20 DOE 발표, 2028 1차 완공 목표, 2032 까지 6년 공사 | [13abc/AP](https://www.13abc.com/2026/03/20/trump-officials-announce-10-gigawatt-data-center-gas-plants-former-ohio-uranium-site/), [OpenAI](https://openai.com/index/openai-joins-ports-pike-project) |

참고로 넣지 않은 다른 OpenAI 부지:
- **Project Camellia** (조지아 Effingham County, 3.2GW): OpenAI 가 직접 설계·개발하고 Georgia Power 가 2028~2032 에 단계 공급한다. Oracle·SoftBank 부지가 아니다 ([DCD](https://www.datacenterdynamics.com/en/news/openai-reveals-32gw-data-center-project-in-effingham-county-georgia/)).
- **Abilene 인근 600MW 추가 확장**: 2025-09 팩트시트에서 '잠재 확장'으로 발표됐고, 2026-03 Bloomberg 보도로 철회됐다(Crusoe 의 Microsoft 캠퍼스로 대체). Oracle 의 공식 철회 발표는 확인하지 못함.

## 7. 제외한 것

- **OCI 일반 리전·코로케이션 임차**: Oracle 은 전 세계에서 147개 데이터센터를 운영 중이고 64개를 추가 예정이다(2026-01 Oracle 블로그). 대부분 일반 클라우드 리전이거나 코로케이션 임차라 지시대로 넣지 않았다. company.colocations 도 비웠다. Abilene 은 crusoe 사이트의 tenant 로 이미 반영돼 있다.
- **해외 Stargate**(UAE 등, Oracle 참여)는 이번 범위(미국 Oracle 운영 기가와트 캠퍼스) 밖이라 넣지 않았다.
- **VoltaGrid·Bloom Energy·PIMCO·Walbridge·Kiewit** 등 장비·시공·부채 참여사는 parties 역할 enum 에 맞는 값이 없어(supplier 없음) 노트에만 적었다.
