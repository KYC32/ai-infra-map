# Microsoft (MSFT) — 조사 노트

- 기준일(as_of): 2026-10-07
- 회사 id: `microsoft` / group: `hyperscaler` / ticker NASDAQ: MSFT / hq_country: US
- color: `#8ee3eb` (기존 값 유지). 가장 가까운 TeraWulf `#7cc6c6` 와 RGB 거리 약 50 → "비슷한 색" 경고 없음.
- 주 출처(Tier 1): Microsoft FY2026 10-K(2026-07-29), Microsoft 보도자료(2024-05-08 $3.3bn, 2026-06-23 1단계 완공), Microsoft 공식 블로그(2025-09-18 Fairwater 공개 2건, 2025-11-12 AI 슈퍼팩토리), WEC Energy Group 8-K 투자자료(2026-09-04), 위스콘신 PSC 보도자료(2026-04-24 VLC 요금제).
- 보조(Tier 2): Fox6(2025-09-18, 400/900MW), Data Center Frontier(2025-10-09, 주 인허가 자료 인용), w.media·Spectrum News(2026-01 15개 동 승인), WISN(2023-03 부지 경계), WPR(2024~2026), AJC·채권 보도(Atlanta 소유 구조).

## 1. 조사 요약

### 사이트로 넣은 것 (자체 시설 1곳)
| id | 이름 | 상태(2026-10-07) | 확보 MW | 주요 일정 | detail |
|---|---|---|---|---|---|
| fairwater-mount-pleasant | Fairwater Mount Pleasant (위스콘신 Racine County) | 1단계 가동 / 2단계 건설중(0.3) / 북쪽 15개 동 계획 | 900 (추정; 1단계 400 + 2단계 500) | 2024-05 발표·공사 → 2026-04 장비 가동·시운전 → 2026-06-23 완전 가동 / 2단계 2028 완공 목표 / 2026-01-26 북쪽 15개 동 승인 | full |

건물(단계) 구성:
| 건물 id | 내용 | MW(기준) | 단계 이력 |
|---|---|---|---|
| fw-phase-1 | 1단계 Fairwater: 315에이커, 3개 동 120만 ft², GB200 NVL72 수십만 개, 2층 구조 | 400 (grid, Microsoft "최대 전력") | 건설중 2024-05 → 시운전 2026-04 → 가동 2026-06-23 |
| fw-phase-2 | 2단계 두 번째 데이터센터($4bn, "비슷한 규모"), 1단계 바로 옆 | 500 (grid, 900−400 추정) | 계획 2025-09-18 → 건설중 2025-Q4(추정) → 가동 2028(목표) |
| fw-north-durand | 북쪽 확장: 11번 도로(Durand Ave) 남쪽 9개 동 | 미공개(비움) | 계획 2026-01-26 |
| fw-north-international | 북쪽 확장: International Drive 변 6개 동 + 사무동 | 미공개(비움) | 계획 2026-01-26 |

- 전력: We Energies(MISO, 송전 ATC). PSC 가 2026-04-24 대형고객(VLC) 요금제를 수정 승인(기준 100MW 이상, 비용 100% 부담, 최소 15년) — 서면 명령 2026-05-21(WEC). WEC 는 Microsoft 수요를 **2030년까지 2.6GW** 로 전망(I-94 회랑 전체, 2,200에이커 이상 매입). 지역 공급용으로 Oak Creek 가스터빈 1,100MW(2027/2028)·Paris RICE 128MW(2027) 건설 중(WEC, Microsoft 전용 아님).
- Microsoft 자체 약속: 전력·전기설비 비용 선납, 화석 전력 1:1 무탄소 매칭, Portage County 250MW 태양광(National Grid Renewables) 건설 중.
- 투자: 1·2단계 $7.3bn(3.3 + 4.0), 추가 $13bn → 위스콘신 총 $20bn 이상(WEC). Microsoft 는 2024~2028 위스콘신 현지 건설 지출을 $4.7bn 으로 추정(2026-06 보도자료).

### 회사 지표 (metrics)
| 지표 | 값 | 기준 | 출처 |
|---|---|---|---|
| FY2026 설비투자(현금, 유형자산 취득) | $115.9bn (FY25 $64.6bn) | 2026-06 | 10-K 현금흐름표 |
| 개시 전 임대 약정(주로 데이터센터) | $329.1bn (FY27~FY33 개시, 1~20년) | 2026-06-30 | 10-K Note 13 |
| 금융리스 부채 합계 | $66.6bn | 2026-06-30 | 10-K Note 13 |
| Azure 및 기타 클라우드 성장률 | 41% | FY2026 | 10-K MD&A |
| 위스콘신 Microsoft 수요 전망 | 2.6GW (2030년까지) | 2026-09 | WEC 8-K |
| 위스콘신 발표 투자 | $20bn 이상 | 2026-09 | WEC 8-K |
- 참고(미포함, Tier 2): 2026-06 분기 capex $41bn(금융리스 $5.6bn 포함, 실적 발표 보도). 2026-07-29 회사가 향후 임대를 금융리스→운영리스로 바꾸며 "보고 기준" capex 전망을 낮췄다는 보도 — 10-K 원문에서 직접 확인하지 못해 지표에서 제외.

## 2. 외부 조달 용량 (sites 에 넣지 않음)
Microsoft 가 직접 짓지 않고 남이 지은·소유한 시설에서 쓰는 용량. 지도에 이미 있으면 그 사이트 id 를 적음.

| 상대 | 사이트 | 규모 | 금액·기간 | 지도 사이트 id | 출처 |
|---|---|---|---|---|---|
| QTS Data Centers (Blackstone) | **Fairwater Atlanta** — 조지아 Fayetteville, 1435 Hwy 54 W(QTS 615에이커 캠퍼스) | MW 미공개. 제3자 추정 FW1(DC-9·10) 약 340MW IT, FW2(DC-1·2) 300MW+ (Tier 3) | 비공개. QTS Fayetteville I DC1-2 LLC 가 "Microsoft 임차" 캠퍼스 확장용 $5.4bn 조달(2026-06) | 없음 → company.colocations 에 병기 | [Microsoft 2025-11-12](https://news.microsoft.com/source/features/ai/from-wisconsin-to-atlanta-microsoft-connects-datacenters-to-build-its-first-ai-superfactory/), [AJC](https://www.ajc.com/business/2025/11/microsofts-newest-ai-superfactory-opens-at-sprawling-fayetteville-campus/), [채권 보도](https://anthropocenefii.org/bond-spotlight/qts-fayetteville-microsoft-tied-data-centre-green-bond), [Measured AI(Tier 3)](https://measuredai.substack.com/p/microsoft-fairwater-atlanta-data-center) |
| Nebius (DataOne 개발·소유) | 뉴저지 Vineland | 1단계 IT 약 50MW(추정), 최대 300MW | 최대 $17.4bn(옵션 포함 $19.4bn), 5년, 9개 트랜치 | `nebius-vineland` | [Nebius 20-F](https://www.sec.gov/Archives/edgar/data/1513845/000110465926052948/nbis-20251231x20f.htm) |
| IREN | 텍사스 Childress, Horizon 1~4 | 200MW IT(액체냉각), GB300 | 약 $9.7bn, 평균 5년(2025-11-02 계약), 선급 20% | `childress` | [IREN 10-Q](https://www.sec.gov/Archives/edgar/data/1878848/000187884826000015/iren-20251231.htm) |
| Crusoe | 텍사스 Abilene 2캠퍼스 | 900MW(336MW IT ×2동 + 현장 발전) | 비공개, 2026-06 착공, 2027 중반 첫 동 | `abilene-microsoft` | [Crusoe 2026-03](https://www.crusoe.ai/resources/newsroom/crusoe-announces-new-900-mw-ai-factory-campus-in-abilene-texas-to-support-microsoft-ai-infrastructure) |
| Nscale (Ionic Digital 부지 임차) | 텍사스(Ionic Digital 부지) | 240MW, GB300 약 104,000개, 2026-Q3 시작. 2단계 700MW 옵션(2027 말~) | Nscale 계약 전체 약 20만 GPU(4개국) | 없음 | [Nscale 2025-10-15](https://nscale.com/press-releases/nscale-microsoft-2025) |
| Aker-Nscale JV | 노르웨이 Narvik | GB300 약 52,000개 | 다년 계약(언론 약 $6.2bn, Tier 2) | 없음 | [Nscale 2025-10-15](https://nscale.com/press-releases/nscale-microsoft-2025) |
| Nscale | 영국 Loughton | GB300 23,000개 이상("영국 최대 슈퍼컴퓨터") | — | 없음 | [Nscale 2025-10-15](https://nscale.com/press-releases/nscale-microsoft-2025), [Microsoft 블로그 2025-09-18](https://blogs.microsoft.com/blog/2025/09/18/inside-the-worlds-most-powerful-ai-datacenter/) |
| Nscale (Start Campus) | 포르투갈 Sines | GB300 약 12,600개, 2026-Q1 시작 | — | 없음 | [Nscale 2025-10-15](https://nscale.com/press-releases/nscale-microsoft-2025) |
| Lambda | 미국 Lambda 액체냉각 데이터센터(위치 미공개) | GB300 NVL72 포함 GPU 수만 개 | "수십억 달러", 다년 | 없음 | [Lambda 2025-11-03](https://lambda.ai/blog/lambda-announces-multibillion-dollar-agreement-with-microsoft-to-deploy-ai-infrastructure-powered-by-tens-of-thousands-of-nvidia-gpus) |
| CoreWeave | 여러 곳(채굴사·개발사 캠퍼스 임차) | — | Microsoft = CoreWeave 2025 매출의 약 67% | CoreWeave 사이트 다수 | [CoreWeave 10-K](https://www.sec.gov/Archives/edgar/data/1769628/000176962826000104/crwv-20251231.htm) |
- Tier 2 보도 종합: Microsoft 의 네오클라우드 약정은 2025년 말 기준 $60bn 이상으로 보도됨(Nscale·Nebius·IREN·Lambda·CoreWeave 합산, 회사 미확인).
- 10-K 기준 개시 전 임대 약정 $329.1bn 은 위 외부 조달·코로케이션을 포괄하는 회사 전체 숫자다.

## 3. 상충 정보 (양쪽 출처)
1. **1단계 MW**: Microsoft(기자회견) "최대 400MW"(Fox6, DCF 가 주 인허가 자료로 같은 값) vs 제3자 450MW(Glenn Klockwood 정리·Yale Clean Energy Forum, Tier 3) → **400MW(낮은 값) 채택**.
2. **"전체" 900MW 의 범위**: Fox6 는 "몇 년 내 900MW"(1·2단계로 해석), 일부 2차 요약은 "북쪽 두 단계 합계 900MW"로 서술 → 1·2단계 합계로 해석(DCF 의 "full build-out ~900MW" 와 일치). 북쪽 15개 동 MW 는 미공개.
3. **Microsoft 의 위스콘신 투자 숫자**: 2026-06 보도자료 "$4.7bn(2024~2028 현지 건설 지출)" vs 2025-09 "$7bn 이상"·WEC "$7.3bn(1·2단계)" → 앞쪽은 "현지 업체 지출" 기준으로 범위가 달라 상충 아님으로 판단. 지표에는 WEC "$20bn 이상" 사용.
4. **Fairwater Atlanta 소유**: Microsoft 는 "우리 Atlanta AI 데이터센터"로 소개(소유 여부 언급 없음) vs AJC·채권 보도는 QTS 소유·Microsoft 임차 → 임차로 판단해 sites 제외.
5. **1단계 가동 시점**: Nadella X 게시(2026-04 "going live", Tier 3)·WEC "2026-04 운영 개시" vs Microsoft "2026-06-23 완전 가동" → 2026-04 시운전, 2026-06-23 가동으로 나눠 표기.

## 4. 미확인 (open_questions 와 같음)
- 1단계 계통 연결 MW 의 Tier 1 원문(PSC/DNR 서류). DCF 가 인용한 "state filings" 위치를 찾지 못함.
- 2단계 GPU 세대·IT MW·정확한 착공 시점(2025-01 초기 공사 중지 → 재개 시점).
- 북쪽 확장 15개 동의 MW·착공·완공 일정.
- Microsoft 가 "건설 중"이라 한 다른 미국 Fairwater 들의 위치·소유 구조.
- Kenosha 240에이커(2025 초 매입, Mount Pleasant 남서쪽 약 8마일): 개발계획 미제출(2026-08 WPR) → 제외. Caledonia 244에이커 계획은 2025-10 지역 반대로 철회 → 제외.
- 확보 전력 900MW 의 근거가 되는 We Energies 공급 계약 MW·시점.

## 5. 좌표 근거
- `fairwater-mount-pleasant`: (42.676, -87.903), confidence high, method permit_parcel.
  - WISN(2023-03-27)이 인용한 마을 TID 5 자료의 1단계 부지 경계: **Braun Road 남쪽, County Highway KR 북쪽, Canadian Pacific 철도 동쪽, 90th Street 서쪽**.
  - OpenStreetMap 도로·철도 좌표: Braun Rd 위도 ≈ 42.683, County Line Rd(KR) ≈ 42.669, CP C&M 지선 경도 ≈ -87.911, 90th St 경도 ≈ -87.895 → 사각형 중심.
  - 위성사진은 쓰지 않음. 경계 사각형(약 500에이커)이 315에이커보다 커서 중심이 수백 m 어긋날 수 있음.
  - 북쪽 확장(Durand Ave 위도 ≈ 42.697, International Dr 경도 ≈ -87.934)은 약 3~4km 북쪽이지만, Microsoft 가 같은 캠퍼스의 "북쪽 확장"으로 설명하므로 같은 사이트에 건물로 묶음.
- 3km 안 다른 회사 사이트: 없음(가장 가까운 기존 사이트도 수백 km 밖).

## 6. 새로 필요한 회사 id
- sites 의 parties 는 microsoft 만 쓰므로 **새 회사 id 필요 없음**.
- 외부 조달 시설을 나중에 지도에 올리려면 `qts`(Fairwater Atlanta), `nscale`, `lambda` 조사가 따로 필요.
