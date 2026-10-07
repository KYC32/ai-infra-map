# Hut 8 Corp. (HUT) — 조사 노트

- 기준일(as_of): 2026-10-07
- 회사 id: `hut8` / group: `miner` / 티커: NASDAQ HUT (TSX 동시 상장) / 본사: 마이애미(US)
- 색: `#d8cc6a` (파스텔 올리브옐로. 기존 회사색 #7f9cf5 #c3a6e8 #e59ac4 #6fb3d9 #9ad1b0 #f0b86e #e8a0a0, 상태색과 다름)
- 1차 출처: SEC EDGAR(CIK 1964789)의 8-K 첨부(보도자료·투자자 자료), 10-K(FY2025, 2026-02-25), 10-Q(2026 Q2, 2026-08-04), PR Newswire 원문 보도자료(Beacon Point 1단계는 8-K 첨부가 아니라 PR Newswire로 냄), 회사 홈페이지 사이트 페이지, Entergy 보도자료.
- 채굴은 과반 지분 자회사 American Bitcoin(ABTC)이 담당하며 AI 전환 계획이 없어 채굴 사이트는 모두 제외함.

## 1. 조사 요약

| 사이트 | 상태(기준일) | 확보 MW | 입주사 | 주요 일정 |
|---|---|---|---|---|
| River Bend (루이지애나 West Feliciana Parish, St. Francisville) | 건설중(수직 공사·변전소 공사 중) | 330 (Entergy Louisiana, 미통전) | Fluidstack(임차) / Anthropic(최종 사용자) / Google(임대료 보증) | 245MW IT / 330MW 유틸리티(PUE 1.35). 첫 데이터홀 2027 Q2, 나머지 홀은 2027년 중 순차 |
| Beacon Point (텍사스 Nueces County, 코퍼스크리스티 인근) | 건설중(1단계·변전소 공사, 2단계 부지 정지) | 1,000 (AEP Texas 계통연결 계약, 미통전) | 비공개 AA- 이상 기술회사(1·2단계 같은 회사) | 1단계 352MW IT(데이터홀 6개, 약 500MW) 첫 통전 2027 Q1·첫 홀 2027 Q3 / 2단계 352MW IT(약 500MW) 첫 홀 2028 Q2 |

핵심 흐름
- 2025-02: West Feliciana Parish 토지 592에이커 매입($18.1m), 2025-12 35에이커 추가 → 627에이커(그 밖에 2,361에이커 옵션).
- 2025-11~12: Nueces County 토지 524에이커 매입($17.5m). 10-K에는 'Site 02, Texas, 1,000MW'로만 나옴.
- 2025-12-17: Fluidstack과 River Bend 245MW IT 15년 NNN 임대($7.0bn, 갱신 시 최대 $17.7bn), Google 보증. Anthropic·Fluidstack 파트너십(최소 245MW, 최대 2,295MW). Entergy 330MW 확보. Fluidstack ROFO 최대 1,000MW IT.
- 2026-Q1: Beacon Point AEP 전력 계약·ERCOT 연계 절차·CIAC 납부·변전소 착공. 온타리오 가스발전 310MW를 TransAlta에 매각.
- 2026-04-30: River Bend 투자등급 채권 $3.25bn(6.192%, 2042) 발행.
- 2026-05-06: Beacon Point 1단계 352MW IT 15년 임대($9.8bn). 224MW에서 NVIDIA DSX 설계로 바꿔 352MW로 키움. AEP Texas와 1,000MW 계통연결 계약 체결.
- 2026-06-09: Beacon Point 1단계 채권 $4.25bn(6.129%, Baa2) 발행.
- 2026-07-20: Beacon Point 2단계 352MW IT 15년 임대($9.8bn), 같은 테넌트 → 캠퍼스 704MW IT 전량 계약.
- 2026-08-04: 2분기 실적. River Bend는 수직 공사 착수·장납기 장비 첫 입고, Beacon Point는 1단계·변전소 공사 중. 건설중 용량 1,330MW.
- 2026-09(초): ERCOT Batch Zero에서 Beacon Point 조건부 Base Load 지정(Tier 2 보도).
- 2026-09-28: $1.07bn 담보부 리볼빙 신용한도(모회사) 체결.

## 2. 상충 정보 (규칙대로 낮은/보수적 값 채택)

1. **River Bend 통전 시점**
   - 2025-12-17 투자자 자료(8-K Ex.99.2) 8쪽: "330 MW available July 1, 2026" — https://www.sec.gov/Archives/edgar/data/1964789/000110465925122052/hut-20251217xex99d2.htm
   - 2026-08-04 2분기 실적: 분기 중 "continued construction of the campus substation"(6월 말까지 변전소 미완공). 언론 정리(MarketBeat 콜 요약, Tier 2)는 변전소 철골 공사가 7월 중순 시작했다고 전함. — https://www.sec.gov/Archives/edgar/data/1964789/000110465926090041/tm2621890d1_ex99-1.htm
   - 채택: 기준일 현재 energized 0, 통전은 2027-Q1 추정(첫 홀 2027 Q2 커미셔닝 직전). 회사가 통전일을 새로 밝히면 고칠 것.
2. **Beacon Point 면적**: 521에이커(2026-06 채권 보도자료) / 524에이커(10-K 보유 토지) / 525에이커(회사 홈페이지·DCD) → 최저값 521.
3. **River Bend 면적**: 592에이커(2025-02 매입, Entergy 보도자료) vs 627에이커(10-K: 2025-12 35에이커 추가 후 보유분). 매입 이력으로 설명되는 차이라 기준일 현재 보유분 627 채택(상충이 아니라 시점 차이).
4. **River Bend 발표 시점**: 2025-11-04 3분기 실적은 '신규 사이트 4곳(1.5GW+)'만 밝히고 이름은 안 밝힘. 2026-02 4분기 실적이 "그 4곳에 River Bend 330MW 포함"이라고 소급 설명. 사이트 이름이 처음 공개된 건 2025-12-17. 데이터는 announced 2025-11(4곳 발표 시점), 계획 단계는 2025-12(계약·전력 확보와 같은 달)로 둠.
5. **개발 단계 용량 합계**: 3분기 2025 1,530MW vs 10-K 표(330+1,000+180+50=1,560MW). 분류 시점 차이로 보이며 사이트 데이터에는 영향 없음.
6. **River Bend 프로젝트 파이낸싱 조건**: 발표(2025-12) 'LTC 최대 85%, SOFR+225bp 대출' → 언론(Tier 2) '90%, SOFR+240bp로 변경' → 실제는 2026-04 투자등급 채권 $3.25bn(LTC 약 95%, 6.192% 고정). 최종 1차 자료(채권)를 기준으로 timeline에 기재.

## 3. 미확인 항목

- **Beacon Point 테넌트 정체**: "AA- 이상 고신용 기술회사"뿐. 이 등급을 충족하는 후보는 소수지만 추측해서 넣지 않음 → parties에 tenant 없음.
- **Anthropic의 River Bend 최종 사용자 여부**: 10-K·4분기 실적은 "Anthropic·Fluidstack과 전략적 파트너십, 그 아래 최소 245MW 인도"라고 씀. River Bend 245MW가 그 '최소 245MW'와 같다는 점에서 end_user로 넣었지만, 임대 계약에 Anthropic이 사용자로 명시된 문구는 없음.
- River Bend 데이터홀 수·홀별 MW·냉각 방식(Vertiv 공동 설계라는 것만 공개). 2027년 중 홀별 가동 일정(약 60일 간격은 Tier 2 콜 요약).
- Beacon Point 2027 Q1 첫 통전량(500MW는 추정), 변전소 전압.
- ERCOT Batch Zero 조건부 Base Load 지정의 회사 1차 자료(w.media 등 Tier 2만 확인). 주지사 감사·분기 안정성 평가 결과.
- River Bend 확장(Entergy 최대 +1,000MW, Fluidstack ROFO 1,000MW IT)의 전력 계약 시점. CEO는 2026-02 콜에서 "전력은 있다, 시기의 문제"라고 함(Tier 2 인용).
- GPU/칩: River Bend 미공개(Fluidstack/Anthropic). Beacon Point는 'NVIDIA DSX 참조 설계'만 공개되고 GPU 모델·수량은 미공개.
- 진행률은 전부 공시 문구로 근사(estimates[]에 근거 기록).

## 4. 제외한 사이트와 이유

- **Batavia, Illinois (10-K 'Site 04', 50MW, 7.2에이커 보유)**: 2026-06 기준 '개발 단계' 50MW로 남아 있지만 용도 TBD, 입주사·건설 없음 → 제외.
- **10-K 'Site 03', Texas 180MW**: 용도 TBD. 2026-06 개발 단계 집계(550MW = Beacon Point 2단계 500 + 50)에서 빠져 진행 여부 불명 → 제외.
- **American Bitcoin 채굴 사이트**: Vega(애머릴로 205MW, 수냉 ASIC), Salt Creek(오를라), Medicine Hat·Drumheller(앨버타), Alpha(나이아가라폴스), King Mountain JV(채굴) — AI 전환 계획 공시 없음.
- **Hut 8 Canada 데이터센터 5곳(BC·온타리오)**: 전통 클라우드·코로케이션 소형 시설, AI 캠퍼스 아님.
- **Highrise AI**: 시카고 인근 제3자 코로케이션에 GPU를 둔 클라우드 사업 → Hut 8 사이트 아님.
- **Anthropic 공동 실사 옵션 1,050MW**(파이프라인 전반): 사이트 특정 안 됨, 전력 미확보.

## 5. 좌표 근거 (위성사진으로 위치 추적하지 않음)

| 사이트 | 좌표 | 신뢰도 / 방법 | 근거 |
|---|---|---|---|
| River Bend | 30.780, -91.377 | medium / city_centroid | 10-Q "River Bend site in St. Francisville, Louisiana", 회사 홈페이지 주소 "St. Francisville, LA" → 세인트프랜시스빌 시가지 중심. 실제 부지는 시가지 밖(같은 패리시 내)일 수 있음 |
| Beacon Point | 27.73, -97.58 | low / county_centroid | 채권 보도자료·10-Q "Nueces County, Texas"(홈페이지는 코퍼스크리스티 지역이라고만 함) → 뉴에이시스 카운티 대략 중심. 실제 위치와 수십 km 차이 가능 |

## 6. 데이터 작성 메모

- 두 캠퍼스 모두 임대가 critical IT 기준이라 `mw_basis: "it"`. 공시된 유틸리티 용량(River Bend 330, Beacon Point 단계별 약 500)을 gross_mw로 기재. 합계: River Bend 330 = 확보 330, Beacon Point 500+500 = 확보 1,000.
- River Bend 245MW는 홀 구분 자료가 없어 한 건물로 표기하고, 가동 시점은 첫 홀(2027-Q2 target)로 둠 → 화면에서는 2027 Q2에 245MW 전체가 가동으로 보이므로 실제보다 빠르게 보일 수 있음(나머지 홀은 2027년 중).
- Beacon Point 1단계 착공월(2026-06)은 '2분기 중 착공' 문구와 채권 발행일(6/9)로 근사. 2단계는 2026-07 임대 직후 '건설중 용량'으로 분류되고 부지 정지가 진행 중이라 under_construction 2026-07(진행률 0.05).
- 전력 이력의 2027-Q1 단계는 두 사이트 모두 `estimate`(estimates[]에 설명).
- 새 회사 id: `anthropic`(River Bend end_user) — 병합 때 companies.json에 추가 필요. fluidstack·google은 이미 있음.
- check-draft 결과: 오류 0. 경고는 미등록 회사(anthropic)와 지구본 타일 재생성 안내뿐.
