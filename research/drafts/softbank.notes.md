# SoftBank Group (TSE: 9984) — 리서치 노트

- 기준일(as_of): 2026-10-07
- 초안: `research/drafts/softbank.json` (사이트 4곳, 근거 30건: Tier 1 26 / Tier 2 2 / Tier 3 2 — Tier 3 는 estimates[] 와 상충 표시용으로만 사용)
- 회사 id `softbank`, **group 을 `partner` → `hyperscaler` 로 변경**(사이트를 갖게 되므로), ticker 9984/TSE, 회사색 `#8970c2`(미리 배정, 그대로). check-draft 에서 회사색 경고 없음
- primary 판단: SoftBank 가 지배하는 자회사 SB Energy 가 개발·소유하는 부지는 모두 **primary = softbank**. SB Energy 는 parties 에 `sb-energy`(developer/owner/operator)로 따로 적고, softbank 는 owner(지배주주)로 적었다
- 출발점: `research/drafts/oracle.notes.md` 6절(SoftBank 주도 Stargate 부지 요약). 수치는 모두 원문으로 다시 확인했다. 특히 **SB Energy 의 S-1(2026-09-01)·S-1/A(2026-09-21)** 가 새로 공개돼 건물별 IT MW·착공·인도 일정을 Tier 1 로 확인할 수 있었다

## 1. 요약

- SoftBank Group 은 일본 투자 지주회사다. OpenAI 에 누적 346억 달러를 투자했고(FY2025 말 공정가치 796억 달러), 2026-04·07·10 에 100억 달러씩 추가 투자한다. 완료되면 누적 646억 달러다 ([FY2025 IR 자료](https://group.softbank/media/Project/sbg/sbg/pdf/ir/presentations/2025/investor-presentation_q4fy2025_01_en.pdf))
- FY26 1분기(2026-04~06)에 미국 발전·데이터센터 자산 취득에 60억 달러(9,689억 엔)를 썼다 ([Q1 FY26 IR 자료](https://group.softbank/media/Project/sbg/sbg/pdf/ir/presentations/2026/investor-presentation_q1fy2026_01_en.pdf)). 별도로 FY2025 Q&A 에서 미국 데이터센터 장비 확보용 선급금 6,787억 엔을 SBG 가 브리지로 댔고 이후 프로젝트 파이낸스로 옮길 예정이라고 했다 ([Q&A](https://group.softbank/media/Project/sbg/sbg/pdf/ir/presentations/2025/investor-presentation_q4fy2025_02_en.pdf))
- **SB Energy**(레드우드시티, 2019년 설립)는 SoftBank 가 지배하는 데이터센터·발전 회사다. 2026-09-01 Nasdaq 'SBE' 상장을 위해 S-1 을 공개 제출했다 ([SoftBank 보도자료](https://group.softbank/en/news/press/20260902)). 상장 후에도 SoftBank 가 의결권 과반을 갖는다(controlled company) ([S-1](https://www.sec.gov/Archives/edgar/data/2133037/000162828026059639/sbenergy-sx1.htm))
- S-1/A(2026-09-21) 핵심 ([S-1/A](https://www.sec.gov/Archives/edgar/data/2133037/000162828026062846/sbenergy-sx1a2.htm))
  - 데이터센터 임대 계약 8.8GW-IT: 건설 중 0.8GW-IT(Cosmos 50 + Milam 308 + 445), 계약만 된 것 8.0GW-IT(PORTS-Pike)
  - 수주잔고 약 4,390억 달러(데이터센터 약 4,300억 + 발전 약 100억)
  - "No data center capacity is currently in operation" — **가동 중인 데이터센터 없음**
  - 운영 중인 발전 자산: 태양광·저장장치 약 2.2GW(ERCOT·CAISO)
  - 파이프라인(임차인 미정, 계약 포트폴리오 밖): Borden County IT 737MW, Scurry County IT 900MW (둘 다 ERCOT, 계통 연계 확보)

## 2. 사이트 목록

| 사이트 | primary | 상태(기준일) | 확정 MW | 발표 MW | 주요 일정 | 참여사 |
|---|---|---|---|---|---|---|
| Milam County (`milam-county-sb-energy`, full, stargate) | softbank | 건설 중 | 660 (S-1 계통 연계 4단계 합계) | 1,200 | 2025-09 Stargate 발표, 2026-01 리스 2건(IT 308+445), 2026-04 NTP, 1동 첫 인도 2027·최종 2028, 2동 2028 | sb-energy(개발·소유·운영), openai(tenant) |
| PORTS-Pike (`ports-pike-technology-campus`, full) | softbank | 계획(공사 미착수) | 0 (9.2GW 공급 계약 최종 승인 전) | 10,000 (총부하, IT 8.0GW) | 2026-03-20 DOE 착공 행사, 2026-08-17 OpenAI 20년 리스 17건, 첫 800MW 2028, 765kV 송전 2029, 전체 2032 | sb-energy, openai(tenant), nvidia(financier) |
| Lordstown (`lordstown-stargate`, lite, stargate) | softbank | 건설 중(데이터센터 규모 미공개) | 0 | 300 (파생값) | 2025-08 공장 인수, 2025-09 '착공·내년 가동' 발표, 가동 2027-03(Epoch 추정) | openai(end_user) |
| Cosmos, Austin (`cosmos-technology-campus`, lite) | softbank | 건설 중(기존 건물 개조) | 65 (추정, IT 50×1.3) | 65 | 2025-11 리스, 2026-03 NTP, 첫 가동 2026 4분기, 전체 2027-05 | sb-energy, softbank(tenant) |

### 사이트별 메모

**Milam County (Stargate, SB Energy)**
- OpenAI 2025-09-23 발표: Lordstown·Milam 두 곳이 18개월 안에 1.5GW 까지 커질 수 있다. Milam 은 SB Energy 가 '전력 인프라를 갖춘 빠른 건설 부지'를 제공 ([OpenAI](https://openai.com/index/five-new-stargate-sites/))
- 2026-01-09 SB Energy 보도자료 ([SB Energy](https://sbenergy.com/openai-and-softbank-group-partner-with-sb-energy/))
  - OpenAI 가 SB Energy 를 1.2GW 부지의 건설·운영사로 선정
  - OpenAI·SoftBank 가 SB Energy 에 각 5억 달러 투자
  - 새 발전 설비를 지어 텍사스 요금 납부자를 보호하고, 물 사용을 최소화하는 설계
- S-1/A 세부 ([S-1/A](https://www.sec.gov/Archives/edgar/data/2133037/000162828026062846/sbenergy-sx1a2.htm))
  - 2026-01-09 Milam County DC, LLC(SB Energy)–Orion DC I, LLC(OpenAI 계열) 트리플넷 리스 2건. 1동 IT 약 308MW, 2동 IT 약 445MW, 동당 약 65만 sq ft, 15년 + 10년×2 연장
  - 첫 데이터홀이 목표 인도일보다 365일 이상 늦으면 OpenAI 가 건물을 매수할 수 있다(buy-out option)
  - 수직 공사 NTP 2026-04. 1동 첫 인도 2027·최종 2028, 2동 첫·최종 2028
  - 계통 연계 4단계: 1-A 200MW(Orion 1, 34.5kV, 2026-08 목표) → 1-B 230MW(Orion 2, 345kV, 2026-12) → 1-C 230MW(Orion 3, 345kV, 2027-02) → 1-D 200MW 전환(Orion 1, 2027-03). 초기 캠퍼스 부하 합계 약 660MW
  - Milam 에서 1.3GW 이상 추가 발전을 개발했고, 현장 전력 공급 계약으로 테넌트에 전기를 직접 공급할 예정
  - 카운티 개발 허가와 육군 공병대 승인을 받았다. 추가로 필요한 주요 허가는 없다
  - 위험: 2026-08-03 텍사스 주지사 지시로 ERCOT 가 대형 데이터센터 부하의 통전 승인을 일시 중단했다
- 부지: 2025-06 보도로는 Orion Solar Belt 인접 595에이커, 150만 sq ft, 30억 달러(카운티 재투자구역 승인) ([The Real Deal/ABJ](https://therealdeal.com/texas/austin/2025/06/10/softbank-groups-sb-energy-plans-3-billion-texas-data-center/)). 이후 리스상 연면적은 약 130만 sq ft(65만×2)
- 전력 기록: `[{2026-01, 1200, target}, {2026-08, 660, reported}, {2027-03, 1200 / 통전 660, target}]`. 목표 1.2GW 를 reported 단계에 복사하지 않았다

**PORTS-Pike (Piketon, Ohio)**
- 2026-03-20 DOE 포츠머스 부지 착공 행사 ([DOE](https://www.energy.gov/em/articles/partnership-ensures-affordable-energy-powers-ai-future-portsmouth-site), [AEP](https://www.aep.com/news/stories/view/10823/))
  - 데이터센터 10GW, 신규 가스발전 9.2GW, 초기 단계 189에이커(DOE 부지)
  - AEP Ohio 765kV 송전 42억 달러를 SB Energy 가 부담. "power to begin flowing to the site in 2029"
  - 송전선 인허가는 Ohio Power Siting Board 담당
- 2026-08-17 OpenAI 발표: 약 8GW-IT 확보, SB Energy 가 짓고·소유·운영, 20년 리스, NVIDIA 전용. 첫 800MW 는 2028년에 기존 AEP 설비로 공급 ([OpenAI](https://openai.com/index/openai-joins-ports-pike-project), [WOSU](https://www.wosu.org/2026-08-17/openai-joins-data-center-venture-at-former-nuclear-enrichment-site-in-pike-county))
- NVIDIA: SB Energy 에 15억 달러 투자. 1~9동(IT 4.25GW)에 잔존가치 보증(한도 1,050억 달러) ([NVIDIA](https://investor.nvidia.com/news/press-release-details/2026/NVIDIA-Guarantees-SB-Energys-PORTS-Pike-Technology-Campus-in-Ohio-to-Exclusively-Host-NVIDIA-AI-Compute/default.aspx), [S-1](https://www.sec.gov/Archives/edgar/data/2133037/000162828026059639/sbenergy-sx1.htm))
- S-1/A ([S-1/A](https://www.sec.gov/Archives/edgar/data/2133037/000162828026062846/sbenergy-sx1a2.htm))
  - 리스 17건, IT 약 8.0GW, 총부하 약 10GW. 공사 "Not started", 첫 인도 2028·최종 2032
  - 1~9동 IT 4,248MW(최종 인도 2031), 10~17동 IT 3,776MW(2032)
  - 9.2GW 전력 공급 계약은 최종 규제 승인 대기. 인접 가스발전은 SB Energy 가 아닌 SoftBank 계열사가 개발하며 아직 자금·계약·인허가 전
  - 건물은 사유지 수천 에이커에 걸쳐 있다
- 전력 기록: 확정 단계 없음. target 10,000MW(2026-03) → 2028 통전 800(target) → 2032 통전 10,000(target)
- program: OpenAI·DOE·S-1 어느 곳도 'Stargate' 라고 부르지 않아 비워 둠(open_questions)

**Lordstown (Ohio)**
- 2025-08 SoftBank(Crescent Dune LLC)이 Foxconn 에서 옛 GM 공장·설비를 3.75억 달러에 인수. 부지·설비는 SoftBank 100%, 데이터센터 장비 생산 법인은 Foxconn 과 50:50 ([WFMJ](https://www.wfmj.com/story/53011784/update-softbank-foxconn-to-manufacture-ai-data-center-equipment-in-lordstown-in-new-partnership), [Business Journal Daily](https://businessjournaldaily.com/lordstown-data-center-to-be-operational-next-year/))
- 2025-09-23 OpenAI: "SoftBank has broken ground on an advanced data center design which is on track to be operational next year" ([OpenAI](https://openai.com/index/five-new-stargate-sites/))
- 2025-11-20 보도(The Information 인용): 최대 30억 달러로 모듈형 데이터센터 생산기지로 전환하고 시연용 데이터센터를 둔다. 2026 초 생산 시작 ([Investing.com](https://www.investing.com/news/stock-market-news/softbank-to-invest-3-billion-in-ohio-facility-for-openai-data-centers-93CH-4370965))
- Epoch(Tier 3) ([사이트 페이지](https://epoch.ai/data/ai-data-centers/directory/openai-stargate-lordstown), [종합](https://epoch.ai/publications/openai-stargate-where-the-us-sites-stand))
  - 2026-07-30 위성: 공사 중, 지붕 대부분 완료, 가동 건물 없음
  - 추정 2027-Q1 IT 214MW, 기존 Foxconn 변전소로 연결
  - 수질 허가 문서상 주 용도는 '제조·조립'. '로즈타운의 향후 데이터센터 금지'를 언급
- SoftBank IR 자료(FY2025·Q1 FY26)에는 Lordstown 언급이 없다. MW·가동 시점을 공식 확인할 수 없어 confidence low, lite 로 넣었다

**Cosmos Technology Campus (Austin)**
- S-1 에서만 확인된다. Travis County 의 기존 시설을 개조하고, SoftBank 계열사가 첨단 AI 컴퓨팅 연구·개발용으로 임차한다. IT 약 50MW ([S-1/A](https://www.sec.gov/Archives/edgar/data/2133037/000162828026062846/sbenergy-sx1a2.htm))
- 리스 2025-11-07, 15년 + 10년 1회 연장, 총 임대료 약 25억 달러, SoftBank Group Capital 보증 약 29억 달러
- NTP 2026-03, 2026-05 9.99억 달러 8.875% 선순위 담보채 발행, 첫 가동 2026 4분기, 임대료 개시 늦어도 2026-12-11, 전체 인도 2027-05
- 전력: Austin Energy 가 변전·송전 보강 공사 중
- Stargate 로 발표된 적이 없어 program 없음. 범위 포함 여부는 open_questions

## 3. 상충 정보 (양쪽 출처, 채택값)

1. **Milam 첫 인도 시점**
   - Epoch(2026-04, Tier 3): TDLR 신고상 1동 2026-10 인도
   - SB Energy 보도자료(2026-01): "initial facilities ... expected to enter service starting in 2026"(회사 전체 캠퍼스 표현)
   - S-1/A(2026-09-21): 1동 첫 인도 2027, 최종 2028
   - **채택:** 가장 최신 Tier 1 인 S-1/A(늦은 쪽). 1동 가동 '2027'(target)
2. **Milam 규모**: OpenAI·SB Energy "1.2GW" vs S-1 리스 IT 753MW(≈ 총 979MW) vs 계통 연계 660MW → 확정 660(reported), 발표 1,200(target). 건물은 리스 IT 값
3. **Milam 면적**: 595에이커(2025-06 보도, Tier 2 단일 출처). 공식 수치 없음
4. **PORTS-Pike 규모**: DOE "10GW 데이터센터" vs OpenAI "약 8GW-IT" vs S-1 "IT 8.0GW = 총부하 약 10GW" → 서로 일치(IT/총부하 차이). 건물 pue 1.25 로 맞춤
5. **PORTS-Pike 첫 전력**: OpenAI "첫 800MW 2028(기존 AEP 설비)" vs AEP "765kV 로 2029 전력 공급 시작" → 둘 다 맞음(초기분은 기존 설비, 본격 송전은 2029)
6. **Lordstown 가동**: OpenAI(2025-09) "내년(2026) 가동" vs Epoch "2027-03 예상" → 공식 갱신이 없어 estimate 2027-03(늦은 쪽)
7. **Lordstown 성격**: OpenAI "데이터센터 착공" vs 이후 보도·허가 "장비 제조 공장 + 시연 데이터센터" → 사이트로 넣되 MW 없이 lite, confidence low

## 4. 미확인 (open_questions 와 같음)

- `sb-energy`·`nvidia` 회사 항목 추가 필요(partner). SB Energy 상장 후 독립 회사로 둘지
- PORTS-Pike·Cosmos 의 Stargate 여부
- Milam Phase 1-A(200MW) 실제 통전 여부, ERCOT 통전 승인 중단의 영향
- Lordstown 데이터센터 MW·가동 시점, 마을의 데이터센터 금지 조례 원문
- PORTS-Pike 부지 면적·건물 위치, 가스발전 법인명, 800MW 의 기준(IT/총)
- SB Energy IPO 가격 결정·상장 완료 여부(기준일까지 확인 못 함)

## 5. 좌표 근거

| 사이트 | 좌표 | confidence / method | 근거 |
|---|---|---|---|
| Milam County | 30.94, -97.06 | low / region_centroid | 보도: 'Rosebud 외곽, Orion Solar Belt(Buckholts) 인접'. 두 마을 사이 Milam 북부. 정확한 필지는 확인 못 함, 위성사진 미사용 |
| PORTS-Pike | 39.008, -83.0 | medium / official_address | DOE 포츠머스 기체확산공장 부지(위키 좌표). 건물은 DOE 부지와 인근 사유지에 걸쳐 있음 |
| Lordstown | 41.147, -80.877 | medium / official_address | 옛 GM Lordstown Assembly 공장(위키 좌표). 데이터센터 동의 위치는 공장 단지 안 어디인지 미공개 |
| Cosmos | 30.33, -97.78 | low / county_centroid | Travis County 중심. S-1 은 'Austin, Texas' 의 시설로만 표기 |

3km 중복 검사: 기존 data/companies/*.json 사이트와 모두 3km 이상(가장 가까운 것은 Cosmos ↔ corescientific austin 약 12km). check-draft 의 3km 경고 2건은 기존 crusoe·iren 사이트끼리의 것. Oracle 운영 Stargate 4곳·crusoe Abilene 은 넣지 않았다.

## 6. 제외한 것

- **Oracle 운영 Stargate 4곳·Abilene**: 각각 oracle·crusoe 파일에 있음
- **SB Energy 파이프라인** Borden County·Scurry County: 임차인 없음(BRIEF 5-3)
- **SB Energy 발전 자산**(Orion Solar Belt 등 태양광·저장장치 약 2.2GW 가동): 데이터센터가 아님
- **SoftBank Corp.(일본) AI 데이터센터**(사카이 옛 샤프 공장, 도마코마이 등)와 **해외 Stargate**(UAE·일본 등) 지분 참여: 이번 범위(미국 SoftBank 주도 Stargate 부지) 밖
- **Foxconn**: Lordstown 장비 생산 합작사(50:50)지만 데이터센터 당사자가 아니라 parties 에 넣지 않음
- **미 에너지부(DOE)**: PORTS-Pike 토지 소유·임대자지만 회사가 아니라 노트에만 적음
- **Stargate 지분 투자 자체**(SoftBank 가 Stargate LLC 의 자금 책임): 사이트가 아님
