# Cipher Digital (CIFR, 구 Cipher Mining) — 조사 노트

- 기준일(as_of): 2026-10-07
- 회사 id: `cipher` / group: `miner` / 색: `#e59ac4` (따뜻한 파스텔 핑크. IREN `#7f9cf5`, 상태색과 다름)
- 사명 변경: 2026-02-20 **Cipher Mining → Cipher Digital** (Q4 2025 실적 보도자료). 데이터의 `name` 은 현재 사명, id 는 `cipher` 유지.
- 1차 출처 거의 전부가 SEC EDGAR(CIK 1819989)의 8-K 첨부(보도자료·투자자 자료·채권 설명자료), 10-K(FY2025), 10-Q(2026 Q2).

## 1. 조사 요약

| 사이트 | 상태(기준일) | 확보 MW | 입주사 | 주요 일정 |
|---|---|---|---|---|
| Barber Lake (콜로라도시티, Mitchell Co.) | 건설중(입주사 부분 점유) | 300 (통전) | Fluidstack (Google 보증) → 이후 '선도 AI 랩' | 1단계 168MW IT/244 gross, 2단계 39MW IT/56 gross. 데이터홀별 인도 2026 Q4~2027 Q1 (2026-09 개정) |
| Black Pearl (윙크, Winkler Co.) | 일부 가동(첫 데이터홀 2026-08 인도) | 300 (통전) | AWS (Amazon Data Services) | 216MW IT / 300 gross. DH1 2026-08 인도, DH2 2026-10·DH3 2026-11·NH2 2026-12·DH4 2027-02 목표 |
| Stingray (앤드루스) | 건설중(토목·지중전기) | 100 (ERCOT 승인, 미통전) | AWS | 70MW IT / 100 gross. 네트워크홀 2027-04, 데이터홀 2027-05 임대료 개시 목표. 통전 목표 2026 Q4 |
| Reveille (코툴라) — lite | 계획 | 70 (ERCOT 승인) | 미정(협상 중) | 2027 Q3 통전 목표 |
| Ulysses (오하이오) — lite | 계획 | 200 (PJM 연계 승인) | 미정(협상 중) | 2027 Q4 통전 목표 |
| Colchis (서부 텍사스) — lite | 계획 | 0 (Batch Zero 조건부, 2028 목표 1,000) | 미정 | 2028 통전 목표, Cipher 지분 76% |

핵심 흐름
- 2024-09: Barber Lake 부지 인수(250에이커, 변전소 통전, 300MW 승인).
- 2025-09-25: Fluidstack 10년 임대(168MW IT), Google $1.4bn 보증 + 약 5.4% 워런트.
- 2025-11-03: AWS 15년 임대(Black Pearl 300MW gross, 약 $5.5bn), Colchis 1GW JV 발표.
- 2025-11-20: Fluidstack 2단계 39MW IT 추가 → Barber Lake 300MW 전부 임차, Google 보증 $1.73bn.
- 2026-02: 사명 변경, Black Pearl 채굴 중단·$2.0bn 채권, Barber Lake $1.73bn 채권 완료.
- 2026-03: AWS 두 번째 임대(Stingray 70MW IT), 2026-06 $810m 채권.
- 2026-08-04: Black Pearl 첫 데이터홀 2개월 조기 인도·임대료 개시. Apollo(900MW) 옵션 확보.
- 2026-09-25: Barber Lake 임대 20년으로 연장(선도 AI 랩 후속 10년, +$5.2bn), 데이터홀별 인도 2026 Q4~2027 Q1 로 조정, 초과 공사비 분담 구조 도입.

## 2. 상충 정보 (양쪽 출처 — 규칙대로 낮은/보수적 값 채택)

1. **Barber Lake 인도 일정**
   - 10-K(2026-02-24)·2026-08-04 실적: 1단계 2026-09-30 인도, 2026-10 임대료 개시 / 2단계 2027-01-31. — https://www.sec.gov/Archives/edgar/data/1819989/000181998926000009/cifr-20251231.htm , https://www.sec.gov/Archives/edgar/data/1819989/000181998926000038/q226_earningsxprxdraftxvf.htm
   - 2026-09-25 개정 보도자료: 데이터홀별 2026 Q4~2027 Q1 인도, 첫 임대료 2026 Q4. — https://www.sec.gov/Archives/edgar/data/1819989/000181998926000043/barberlakeleaseamendmentpr.htm
   - 채택: 최신·늦은 쪽(1단계 2026-Q4, 2단계 2027-Q1 target). 사실상 약 1분기 지연.
2. **Barber Lake 면적**: 10-K "250에이커(자사 소유, 시설 부지)" vs 2025-09 보도자료·2025-11 자료 "주변 587에이커". → 낮은 값 250 채택(587 은 주변 토지 포함 수치로 보임).
3. **Barber Lake 통전**: 2024-09 인수 보도자료 "fully energized substation" vs 2025-11 자료 "Energized: Barber Lake (56 MW)". 56MW 는 당시 미계약 잔여분(300−244)을 '즉시 사용 가능'으로 표시한 것으로 해석 → 변전소 기준 300MW 통전으로 기재. 단, 부하(실제 사용) 기준 통전량은 미공개.
4. **Stingray 통전 시점**: 10-K "2026 상반기" vs 2025 Q4 자료·2026 Q1 자료 "2026 Q4 목표". → 늦은 쪽(2026-Q4 target) 채택. 기준일 현재 통전 확인 자료 없음.
5. **Black Pearl AWS 계약 시점**: 10-Q "2025-10 체결" vs 10-K "2025-11" (발표 2025-11-03). → phases 의 planned 는 발표월 2025-11.
6. **Black Pearl 첫 인도일**: 10-Q "2026-07-31" vs 보도자료 "8월 초 인도". → 2026-08 사용.
7. **Reveille 면적**: 10-Q "최대 52에이커 임차" vs 2025-11 자료 "55에이커". → 52.
8. **Colchis 지분**: 2025-11 보도자료 "약 95%(향후 임대 가정 시)" vs 10-Q "현재 76%". → 현재 실제 지분 76%.

## 3. 미확인 항목

- Barber Lake 후속 10년 임차인 '선도 AI 랩'의 정체. 2026-09-14 콜로라도시티 상수도 기부 보도자료에 Anthropic 이 Cipher·Fluidstack 과 공동 출연했지만, Anthropic 이 Barber Lake 최종 사용자라는 공식 문구는 없음 → parties 에 넣지 않음.
- Barber Lake 개정 후 홀 단위 MW·일정, 2단계 착공 시점(2026-Q1 은 추정).
- Black Pearl 2026-08 인도분이 DH1 만인지 NH1 포함인지(NH1 은 estimate 로 함께 인도 처리).
- Black Pearl·Stingray 홀별 gross MW 와 냉각 방식(공랭/액체) — 데이터홀=액체, 네트워크홀=공랭은 우리 가정.
- GPU/칩 종류: Fluidstack(Google 보증)·AWS 모두 미공개.
- Ulysses 정확한 카운티, Colchis 카운티·JV 상대방.
- Colchis ERCOT Batch Zero 최종 지정(2026-12 감사 후 예정, Tier 2 출처: KBW 서밋 요약 기사). 텍사스 환경품질위원회(TCEQ)의 데이터센터 허가 일시 중단 언급도 Tier 2 단독.
- 진행률(progress) 값은 모두 공시 문구 기반 근사치(estimates[] 에 근거 기록).

## 4. 제외한 사이트와 이유

- **Odessa** (207MW, Luminant 고정가 PPA, 비트코인 채굴 중): "HPC 임대 협의 중" 언급뿐, 전환 계획·일정 없음 → 제외. PPA 는 2027-07 만료.
- **Apollo** (샌안토니오 25마일 이내, 최대 900MW, 288에이커): 2026-07 옵션 계약, Batch Zero 연구 부하로 제출만 됨 → 확보 전력 없음, 제외.
- **McLennan·Mikeska·Milsing** (각 500MW, 2028~2029 목표): ERCOT 배치 대기·옵션/권리 단계 → 제외.
- **Barber Lake 인접 +500MW**(MOU, 2030+), **Stingray 인접 +200MW**(2030+): 확장 가능성만 있어 power 에 넣지 않음.
- **Alborz·Bear·Chief**(각 40MW, WindHQ JV 49%): 2026-02 Canaan 에 매각 완료.
- 임대 계약이 생기면 위 사이트를 추가할 것.

## 5. 좌표 근거 (위성사진으로 위치 추적하지 않음)

| 사이트 | 좌표 | 신뢰도 / 방법 | 근거 |
|---|---|---|---|
| Barber Lake | 32.388, -100.865 | medium / city_centroid | 보도자료 "Barber Lake site in Colorado City, Texas" → 콜로라도시티 시가지 중심 |
| Black Pearl | 31.751, -103.160 | medium / city_centroid | 10-K·채권자료 "near Wink, Texas" → 윙크 시가지 중심 |
| Stingray | 32.319, -102.546 | medium / city_centroid | 2026-06 채권자료 "located in Andrews, TX" → 앤드루스 시가지 중심 |
| Reveille | 28.437, -99.235 | medium / city_centroid | 10-K "located in Cotulla, Texas" → 코툴라 시가지 중심 |
| Ulysses | 40.29, -82.79 | low / region_centroid | 10-K "200 MW data center site in Ohio"뿐 → 오하이오주 대략 중심. (트래커의 Morgan County 주장은 Tier 3 이고 좌표도 불일치해 미사용) |
| Colchis | 31.8, -101.3 | low / region_centroid | 보도자료 "West Texas"뿐, AEP 직접연결 → 서부 텍사스 임의 대표점. 실제 위치와 수십~수백 km 차이 가능 |

## 6. 데이터 작성 메모

- Barber Lake 는 임대가 critical IT 기준이라 `mw_basis: "it"` 로 하고 공개된 gross(244/56)도 함께 기재. 합계 300 = 확보 300.
- Black Pearl 1단계 홀(DH1~3, NH1)은 기존 채굴 건물(13.7만 sq ft) 개조라 `replaces: "bp-miners"` 로 표시 → 전력 합계 검사에서 중복 집계 방지. 채굴동은 2025-06 가동, 2026-02 retired.
- Black Pearl 홀별은 IT MW 만 공개(합 216) → gross 는 화면에서 ×1.3 추정.
- Colchis 는 AEP DCA 가 체결됐지만 ERCOT 최종 승인 전이라 현재 secured 0, 2028 목표 1,000 으로 표기(순위 부풀림 방지).
- check-draft 결과: 오류 0, 경고는 미등록 회사(fluidstack·google·aws)와 지구본 타일 재생성 안내뿐.
