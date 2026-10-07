# Crusoe (비상장) — 리서치 노트

- 기준일(as_of): 2026-10-07
- 초안: `research/drafts/crusoe.json` (사이트 5곳, 근거 29건: Tier 1 25 / Tier 2 4)
- 회사 id `crusoe`, group `neocloud`, 비상장이라 ticker 없음
- 회사색: `#b9e07a` (파스텔 라임/연두. 기존 회사색인 노랑 #d8cc6a·초록 #9ad1b0·청록 #7cc6c6 과 색조가 다르고, 상태색 청록 #2ea88a·#3fbf96 과도 다름)
- 비상장사라 SEC 공시가 없음 → Tier 1 은 Crusoe 보도자료, Oracle 실적 발표 녹취·팩트시트, 텍사스 TDLR 인허가 기록, Newmark 보도자료

## 1. 요약

- Crusoe 는 덴버 기반 AI 인프라 기업(옛 Crusoe Energy)이다. 전력 확보부터 데이터센터 건설·운영, Crusoe Cloud 까지 직접 한다. 2026-09-17 시리즈 F 로 $3.9bn 을 조달했고 투자 후 기업가치는 $30.9bn 이다. 공개한 수치는 총 계약 용량 6GW 이상(gross), 가동 중 1GW, 개발 파이프라인 40GW 초과(2026-06)다.
- **Abilene 1캠퍼스(Stargate 1호)**: Lancium 클린 캠퍼스(약 1,100에이커)에 8개 동, 1.2GW 다.
  - 소유는 Crusoe·Blue Owl·Primary Digital 합작법인($3.4bn → $15bn)이다. 설계·건설·운영은 Crusoe 가 하고, Oracle 이 임차해 OCI 로 OpenAI 에 제공한다. 건설 대출은 JPMorgan 주도($2.3bn + $7.1bn).
  - 1단계 2개 동(206MW)은 2024-06 착공, 2025-09 가동을 시작했다. 2단계 6개 동은 2025-03 착공했다.
  - Oracle 실적 발표 기준 인도 진행: **2026-06-10 42% → 2026-09-10 6/8개 동·618MW(75%)**. 나머지 2개 동은 Oracle 회계 2분기(2026-09~11), Crusoe 기준 2026년 말까지 완공 목표다.
  - 계통은 ERCOT 1.2GW 연결이고, GE Vernova 가스터빈은 백업용이다.
  - companies.json 의 programs 가 비어 있어 `program: "stargate"` 를 넣지 않았다(넣으면 check-draft 오류). open_questions 에 추가 필요 사항을 적었다.
- **Abilene 2캠퍼스(Microsoft)**: 2026-03-27 발표한 900MW 캠퍼스로, 336MW IT 2개 동과 900MW 현장 발전소로 이뤄진다. 2026-06 착공했고 첫 동은 2027년 중반 통전이 목표다. Abilene 전체 예상 용량은 2.1GW. Oracle·OpenAI 가 접은 Abilene 추가 확장(약 600MW, 2026-03 Bloomberg) 대신 들어온 것으로 보도됐다.
- **Armstrong County TX(Google, 'Goodnight')**: 2025-06 착공했고 2026-09-28 Google 용이라고 공식 발표했다. 인접한 Goodnight 1·2 풍력(합계 531MW)에 직접 연결된다. 회사는 MW 를 공개하지 않았다. 보도에 따르면 세금감면 계약상 1단계는 4개 동·최대 530MW 다.
- **Childress TX(Lancium)**: 2026-07-15 발표한 1.0GW 캠퍼스로, 부지는 Lancium 소유 270에이커다. 이름을 밝히지 않은 하이퍼스케일러용이며 2026 Q3 착공 목표다.
- **Warrenton MO**: 2026-01-20 시가 사이트 계획을 승인했다(340에이커, 80.5만 sq ft 2개 동). 2027년 말 첫 가동, 2029년 완공 목표다. MW 는 미공개(600MW 로 추정).
- Bloomberg(2026-06-19)는 Meta 가 Childress·Warrenton 에서 약 1.6GW 를 계약했다고 보도했다. 양사가 확인하지 않아 parties 에는 넣지 않았다.

## 2. 사이트 목록

| 사이트 | 상태(기준일) | 확보 MW | 주요 일정 | 고객 |
|---|---|---|---|---|
| Abilene 1캠퍼스 (`abilene-stargate`) | 가동(6/8개 동) + 건설 2개 동 | 1,200 (ERCOT 계통) | 2025-09 1동 가동, 2026-08 6개 동·618MW 인도, 2026-Q4 7·8동 목표 | Oracle(임차) → OpenAI |
| Abilene 2캠퍼스 (`abilene-microsoft`) | 건설 중 | 900 (현장 발전소, 목표) | 2026-06 착공, 2027-06 첫 동 통전 목표 | Microsoft |
| Armstrong County (`armstrong-goodnight`) | 건설 중(lite) | 530 (추정) | 2025-06 착공, 가동일 미공개 | Google |
| Childress (`childress-lancium`) | 계획/착공 예정(lite) | 1,000 (목표) | 2026-Q3 착공 목표 | 미공개 하이퍼스케일러(보도: Meta) |
| Warrenton MO (`warrenton`) | 인허가 완료(lite) | 600 (추정) | 2027 말 첫 가동, 2029 완공(보도) | 미공개(보도: Meta) |

**제외한 사이트**
- **Wyoming / Cheyenne (Project Jade, Tallgrass 협력)**
  - 2025-07 발표 당시 계획은 1.8GW 로 시작해 최대 10GW 까지 키우는 것이었다. 위치는 샤이엔 남쪽 US-85 인근 Switchgrass 산업단지(약 600에이커)다.
  - 2026-01-05~06 Laramie County 가 만장일치로 승인했다. Tallgrass 의 2.7GW 가스발전을 함께 짓고, 첫 동은 2027 Q2 목표였다.
  - 2026 봄 Crusoe 가 철수했다. 2026-06-09 Bloomberg 는 Google 과의 앵커 고객 협상이 비용 문제로 멈췄다고 보도했다.
  - 2026-07-08 카운티가 Crusoe 철수를 발표했다. 프로젝트는 Google 자회사(Jupiter Star Holdings)가 소유·운영하는 'Project Tembo' 로 바뀌었다(700에이커, 4개 동, 2028 H2 일부 가동). Tallgrass 는 인접 발전소를 계속 개발한다.
  - Crusoe 사이트가 아니므로 이 파일에서 뺐다. Google 파일에서 다뤄야 한다.
  - 출처: [AP/KSAT 2025-07-28](https://www.ksat.com/business/2025/07/28/cheyenne-to-host-massive-ai-data-center-using-more-electricity-than-all-wyoming-homes-combined/), [Oil City 2026-01-06](https://oilcity.news/wyoming/2026/01/06/crusoe-tallgrass-get-green-light-for-wyoming-ai-energy-campus-2/), [Bloomberg Tax](https://news.bloombergtax.com/artificial-intelligence/crusoe-touts-5-gigawatts-of-data-centers-pauses-wyoming-site), [Cowboy State Daily 2026-06-11](https://cowboystatedaily.com/2026/06/11/partner-pulling-out-doesnt-slow-huge-2-7gw-cheyenne-project-jade-data-center/), [County 17 2026-09-11](https://county17.com/2026/09/11/google-stepping-in-for-crusoe-pitches-700-acre-data-center-campus-to-laramie-county-on-wednesday/).
- **Callaway County MO**: 200에이커, $4.5bn 규모로 착공 시기를 2026 가을~2028 여름으로 제시한 초기 제안이다. MW 와 고객이 없어 뺐다. ([ABC17 2026-07-14](https://abc17news.com/news/top-stories/2026/07/14/ai-infrastructure-company-unveils-plans-for-callaway-county-data-center/))
- Crusoe Cloud 용 소형·코로케이션 거점(아이슬란드·노르웨이 등)과 모듈형 Crusoe Spark 배치는 대형 AI 캠퍼스가 아니라 이번 범위에서 뺐다.

## 3. 상충 정보 (양쪽 출처, 채택값)

1. **Abilene 2025-09 가동 동 수**
   - Oracle 팩트시트(2025-09-23)는 "1개 동 가동"이라고 했다: [Oracle fact sheet](https://arrington.house.gov/uploadedfiles/final_oracle_oai_data_center_fact_sheet_092225b.pdf)
   - Crusoe(2025-09-30)는 "첫 2개 동 통전"이라고 했다: [Crusoe](https://www.crusoe.ai/resources/newsroom/crusoe-announces-flagship-abilene-data-center-is-live)
   - **채택: 낮은 값.** 1동은 2025-09 가동, 2동은 2025-09 시운전 후 2025-12 가동(TDLR 의 251 Lancium Way 공사 완료 예정일 2025-12-24, Epoch 추정과도 일치)으로 넣었다.
2. **Abilene 2026-06 진행 상황**
   - Crusoe(2026-06-09)는 "2개 동 가동, 6개 동 건설 중"이라고 했다.
   - Oracle(2026-06-10)은 "전체 용량의 42% 인도"(약 3.4개 동 분량)라고 했다.
   - Epoch(Tier 3, 위성 분석)는 2026-05 기준 3·4동이 가동 중이라고 추정했다.
   - **채택: 낮은 쪽.** 3·4동은 2026-06 '시운전'(estimate)으로 두고, 정식 가동은 Oracle 이 6개 동 인도를 밝힌 2026-08(회계 1분기 말)로 넣었다.
3. **2단계 완공 목표**
   - 2025-03·2025-05 Crusoe 자료와 2025-09 Oracle 자료는 "2026년 중반"이었다.
   - 2026-03 Crusoe 자료는 "2026년 말"로 바뀌었다.
   - Oracle(2026-06)은 "90일 내 35% 추가, 나머지는 그다음 분기"라고 했다.
   - **채택: 최신 목표.** 7·8동은 2026-Q4 target 이다. 결과적으로 약 반년 지연이다.
4. **1단계 용량 표현**
   - "206MW"(2024-10 합작 자료), "200+ megawatts"(2025-03·05), "two 100 MW buildings"(2026-03), "200MW+ of IT"(DCD 보도)가 섞여 있다.
   - Oracle 618MW/6개 동 ≈ 103MW 와 일치하므로 **동당 IT 103MW** 로 통일했다(추정).
5. **Abilene 부지 면적**: Oracle 1,100에이커 vs Lancium 측 '1,000+ 에이커'(검색 요약). 실질적 상충은 아니라 Oracle 값 **1,100** 을 채택했다.
6. **Childress 규모**: Crusoe 보도자료(2026-07-15)는 **1.0GW**, 그 이전 DCD 기사 제목은 "1.4GW"다. 원문을 열람하지 못했다. **채택: 낮은 값 1.0GW.**
7. **Warrenton MW**
   - Bloomberg 의 Meta 1.6GW 에서 Childress 1.0GW 를 빼면 약 0.6GW 다.
   - 데이터센터 목록 사이트(Tier 3)는 1동 200MW, 2동 450MW(합계 약 650MW)로 적었다.
   - **채택: 낮은 값 600MW (estimate).**
8. **Abilene 2025-09 이전 계통 용량**: Epoch 는 200MW 변전소라고 했다(Tier 3). 회사는 2025-03 부터 1.2GW 계통 연결이라고 했다. 2024-10~2025-02 구간은 1단계 부하 268MW 를 추정치로 넣었다. 이 구간을 비우면 검사기가 확보 전력 0 으로 계산해 오류가 난다.

## 4. 미확인 항목

- Abilene 7·8동 실제 인도 시점: Oracle 회계 2분기(2026-12 발표)에서 확인 필요.
- Abilene 3~6동의 동별 인도 순서와 동별 MW: Oracle 은 비율과 동 수만 공개했다.
- Abilene 소유 구조
  - TDLR 상 351 Lancium Way(1동 추정) 소유자는 Lancium Abilene LLC 다.
  - 251 Lancium Way 소유자는 Abilene DC 1, LLC(덴버)다.
  - 합작법인 지분율과 Lancium 이 건물을 소유하는지 여부는 미공개다. 그래서 lancium 은 developer(토지·계통·전력 운용)로만 표기했다.
- Microsoft 캠퍼스: 면적, 정확한 위치, 현장 발전소 연료·인허가, 2동 일정이 모두 미공개다.
- Armstrong County: 총 MW, 동 수, 가동일이 회사 미공개다. 1단계 530MW·2단계 3개 동 500MW·933MW 가스발전소 인허가는 Tier 2 보도뿐이다. Armstrong County 세금감면 계약, TCEQ, TDLR 원문 확인이 필요하다. 1·2동이 이미 가동 중일 가능성도 있다(착공 16개월 경과).
- Childress·Warrenton 의 Meta 임차는 미확인(Bloomberg 단독)이다. Childress 의 계통 운영자(ERCOT/SPP)와 실제 착공 여부, Warrenton 의 착공 여부와 Ameren 전력 계약 규모도 미확인이다.
- Series F 보도자료에 "OpenAI 가 Abilene 에서 Astra 를 학습"이라는 문구가 있고, Oracle 2026-09 녹취에도 GPT-6 Astra 언급이 있다. 사이트 데이터와 직접 관련이 없어 넣지 않았다.
- 새 회사 항목 필요: oracle, openai, lancium, primary-digital-infrastructure, jpmorgan, microsoft. Stargate 프로그램용으로 softbank 도 필요하다. (blue-owl·google 은 이미 있음)

## 5. 좌표 근거

| 사이트 | 좌표 | 신뢰도/방법 | 근거 |
|---|---|---|---|
| Abilene 1캠퍼스 | 32.449, -99.733 | medium / city_centroid | TDLR 인허가 주소는 251·351 Lancium Way, Abilene TX 79601(Taylor County)이다. OSM 에 이 도로가 없어 지오코딩하지 못했고 애빌린 시 중심 좌표를 썼다. |
| Abilene 2캠퍼스 | 32.449, -99.733 | medium / city_centroid | 회사는 "1캠퍼스 인접"만 밝혔다. 1캠퍼스와 같은 좌표라 3km 중복 경고가 뜨는데, 의도한 것이다. |
| Armstrong County | 35.112, -101.363 | medium / city_centroid | 보도된 주소 '10001 Lima Road, Claude' 를 찾아보니 OSM 에 Lima Road 구간이 여러 개라 특정할 수 없었다. 클로드 시 중심 좌표를 썼다. |
| Childress | 34.426, -100.204 | medium / city_centroid | 시명만 공개됐다. IREN Childress(같은 시 중심)와 3km 경고가 뜨지만 서로 다른 프로젝트다. |
| Warrenton MO | 38.811, -91.141 | medium / city_centroid | 인허가 주소는 22151 NW Service Road, Warrenton 이다. OSM 지오코딩에 실패해 워런턴 시 중심 좌표를 썼다. |

위성사진으로 위치를 추적하지 않았다. 공식 주소는 공개 지오코더(OSM Nominatim)로만 시도했다.

## 6. 주요 출처

- Crusoe 보도자료: [2024-10 합작](https://www.crusoe.ai/resources/newsroom/crusoe-blue-owl-capital-primary-digital-joint-venture), [2025-03 1.2GW 확장](https://www.crusoe.ai/resources/newsroom/crusoe-expands-ai-data-center-campus-in-abilene-to-1-2-gigawatts), [2025-05 $15bn 합작](https://www.crusoe.ai/resources/newsroom/crusoe-blue-owl-capital-and-primary-digital-infrastructure-enter-joint-venture), [2025-09 가동](https://www.crusoe.ai/resources/newsroom/crusoe-announces-flagship-abilene-data-center-is-live), [2026-03 Microsoft 900MW](https://www.crusoe.ai/resources/newsroom/crusoe-announces-new-900-mw-ai-factory-campus-in-abilene-texas-to-support-microsoft-ai-infrastructure), [2026-06 4.9GW](https://www.crusoe.ai/resources/newsroom/crusoes-contracted-ai-infrastructure-capacity-approaches-5-gigawatts-across-data-centers-and-cloud), [2026-07 Childress](https://www.crusoe.ai/resources/newsroom/crusoe-and-lancium-announce-1-gigawatt-ai-data-center-campus-in-childress-texas), [2026-09 시리즈 F](https://www.crusoe.ai/resources/newsroom/crusoe-announces-series-f-funding), [2026-09 Armstrong County](https://www.crusoe.ai/resources/newsroom/crusoe-developing-data-center-campus-in-armstrong-county-texas)
- Oracle: [팩트시트 2025-09-23](https://arrington.house.gov/uploadedfiles/final_oracle_oai_data_center_fact_sheet_092225b.pdf), [FY26 Q4 녹취 2026-06-10](https://www.fool.com/earnings/call-transcripts/2026/06/10/oracle-orcl-q4-2026-earnings-call-transcript/), [FY27 Q1 녹취 2026-09-10](https://www.fool.com/earnings/call-transcripts/2026/09/11/oracle-orcl-q1-2027-earnings-call-transcript/)
- 인허가: [TDLR 351 Lancium Way](https://www.tdlr.texas.gov/TABS/Search/Project/TABS2025000156), [TDLR 251 Lancium Way](https://www.tdlr.texas.gov/TABS/Search/Project/TABS2025007742)
- 언론(Tier 2): [Bloomberg 2026-03-06](https://www.bloomberg.com/news/articles/2026-03-06/oracle-and-openai-end-plans-to-expand-flagship-data-center), [The Next Web(Bloomberg 인용) 2026-06-19](https://thenextweb.com/news/meta-signs-new-ai-computing-deals-with-data-centre-firm-crusoe), [The Energy Mag 2026-07-31](https://theenergymag.com/news/2026-07-31/crusoe-texas-ai-data-center-goodnight), [The Energy Mag 2026-09-29](https://theenergymag.com/news/2026-09-29/crusoe-google-texas-ai-armstrong), [Warren County Record](https://www.warrencountyrecord.com/stories/aldermen-approve-data-center-site-plan,181278)
- Tier 3(추정 참고만): [Epoch AI Abilene](https://epoch.ai/data/ai-data-centers/directory/openai-stargate-abilene), [Cleanview Warrenton](https://www.cleanview.co/data-centers/missouri/4341/crusoe-warrenton---building-2)
