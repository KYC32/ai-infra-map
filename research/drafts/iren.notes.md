# IREN 초안 노트 — BC 3개 사이트 채굴 이력 보정

- 작업일: 2026-10-07 (파일 as_of 는 원본 그대로 2026-10-06, 기준월 2026-10)
- 범위: **prince-george / mackenzie / canal-flats 만** 수정. childress, sweetwater-1/2, kiowa, bundey, badajoz 는 원본과 같음(생성 스크립트에서 깊은 비교로 확인). 회사 항목(company)도 data/companies.json 그대로.
- 문제: 원래 데이터에 BC 사이트의 비트코인 채굴 이력이 없어서, 타임라인을 2024년으로 돌리면 Canal Flats 가 "AI 가동 30MW"로 보이고 Prince George·Mackenzie 는 비어 있었음.
- 검사: `node scripts/check-draft.mjs iren` → ✅ 초안 OK (오류 0, 경고 0)

## 모델링 원칙
- 각 사이트에 `kind: "miner_hall"`, `mw_basis: "gross"` 채굴동을 추가(gross = 사이트 계통 전력 전체. 2024-06 해시레이트로 보면 세 곳 모두 전력을 거의 다 채굴에 쓰고 있었음: CF 0.9 EH/s, MK 2.7 EH/s, PG 1.6 EH/s — FY24 20-F).
- 채굴동과 AI 홀은 같은 전력을 **시기만 달리** 쓰므로 AI 홀에 `replaces` 를 쓰지 않고, AI 홀의 첫 단계를 채굴동 `retired` 달 이후에 두었음. 검사기는 planned 상태 건물도 전력 합계에 넣기 때문에, 실제로는 채굴과 개조가 겹친 기간이 있어도 AI 홀은 채굴 종료 달부터 나타남.
- 예외: Prince George 의 2024~2025 소규모 H100/H200 파일럿은 채굴과 **동시에** 돌았으므로 별도 건물(`pg-hopper-pilot`, 2MW 추정)을 만들고 `replaces: "pg-miners"` 로 채굴동 전력 일부를 넘겨받게 했음.

## 사이트·건물별 전/후

### Prince George (50MW)
| 건물 | 전 | 후 |
|---|---|---|
| pg-miners (신규) | 없음 | operating 2022-09 (reported) → decommissioning 2025-07 (reported) → retired 2025-12 (reported) |
| pg-hopper-pilot (신규, 2MW, replaces pg-miners) | 없음 | operating 2024-02 (reported) → retired 2025-12 (estimate: pg-air 50MW 에 합산) |
| pg-air (50MW) | commissioning 2025-12 (reported) → operating 2026-08 (reported) | commissioning 2025-12 (reported) → operating 2026-08 (**estimate**) |
| pg-liquid-2027 | 변경 없음 | 변경 없음 |

- timeline 보강(2022-09 채굴 시작, 2024-02 Poolside, 2024-07 H100 816개, 2025-07-03 Blackwell 주문·채굴기 이전, 2026-05-11 GPU 전량 인도). 2025-12 항목 출처를 Q2 보도자료 → 10-Q(2025-12)로 교체. 2026-08-27 항목에서 FY26 보도자료가 뒷받침하지 않는 "전량 커미셔닝 완료" 문구를 빼고 "2027 액체냉각 계획"만 남김.

### Mackenzie (80MW)
| 건물 | 전 | 후 |
|---|---|---|
| mk-miners (신규) | 없음 | operating 2022-04 (reported) → decommissioning 2025-Q4 (reported) → retired 2026-05 (estimate) |
| mk-air (80MW) | planned 2022 (reported) → commissioning 2026-10 (reported, 출처 unite.ai) → operating 2026-H2 (target) | under_construction 2026-05 (estimate) → commissioning 2026-10 (**estimate**) → operating 2026-Q4 (target) |
| mk-liquid-2027 | 변경 없음 | 변경 없음 |

- "planned 2022" 는 근거 없는 값(2022 는 채굴 시작 시점)이라 삭제. 시운전 2026-10 은 Tier 2(unite.ai) 단독 근거였고 그 기사에도 날짜가 없어 estimate 로 낮춤. operating 은 10-K 의 "2026-12-31 까지 단계 인도"에 맞춰 2026-Q4 target(끝 달 12월 — 기존 2026-H2 와 같은 달).

### Canal Flats (30MW)
| 건물 | 전 | 후 |
|---|---|---|
| cf-miners (신규) | 없음 | operating 2019 (reported) → retired 2026-10 (estimate) |
| cf-air (30MW) | "Air-cooled halls" operating 2019 (reported) | 이름 "Air-cooled AI retrofit / 공랭 AI 개조 홀", planned 2026-10 (estimate) → operating 2027 (target) |
| cf-liquid-2027 | 변경 없음 | 변경 없음 |

- 1차 출처 확인 결과 Canal Flats 의 AI 전환 시점은 **2019 가 아님**. 2019 부터 가동한 것은 채굴이며(FY25 10-K), 2025-12 기준에도 1.6 EH/s 로 채굴 중, S21 Pro 채굴기는 2026-09 까지 가동 후 매각 예정(10-Q 2025-12). AI 는 2026-05 녹취에서 "30MW 공랭 전체를 AI 용으로 개조할 계획"(2027 확장 계획의 일부)으로 처음 구체화됨 → 기준일 현재 AI 홀은 계획 단계.

## 2024-06 시점 BC 3곳 (timeline.js siteMetricsAt 기준)
| 사이트 | 전: AI / 채굴 | 후: AI / 채굴 |
|---|---|---|
| Prince George | 0 / 0 (planned 로 표시) | 2 / 48 |
| Mackenzie | 0 / 0 (planned 로 표시) | 0 / 80 |
| Canal Flats | 30 / 0 | 0 / 30 |
| **합계** | **30 / 0** | **2 / 158** |

다른 시점 참고: 2025-12 MK 는 채굴 축소 중(decommissioning, 채굴 80 으로 집계), 2026-06 MK 는 건설 80, 2026-10 CF 는 planned(채굴 종료, AI 개조 대기). 2026-10 이후 PG·MK 값은 원본과 같음.

## 근거 (모두 Tier 1, claims 23건)
- FY24 20-F (2024-08-28): PG H100 816개, 2024-02 Poolside 계약, 2024-06 사이트별 해시레이트.
- FY25 10-K (2025-08-28): CF 2019 가동·2020-01 PodTech 인수, MK 2022-04 가동, PG 2022-09 가동, 2025-06 사이트별 해시레이트.
- 2025-07-03 보도자료(8-K): PG 에 Blackwell 설치, 밀려난 채굴기는 다른 사이트로 이전. GPU당 1.93kW·PUE 1.1 가정(파일럿 MW 추정에 사용).
- 10-Q 2025-09 (2025-11-06): PG 해시레이트 2.1 EH/s, GPU 전량 배치 후 해시레이트 전부 대체 예정.
- 10-Q 2025-12 (2026-02-05): PG 해시레이트 전량 대체, MK 5.2→4.4 EH/s(GPU 개조), CF S21 Pro 2026-09 까지 가동 후 매각 예정.
- Q2 FY26 보도자료 (2026-02-05): BC 전역 ASIC→GPU 전환 진행 중(채굴기 손상차손 $31.8m).
- 2026-03-04 보도자료(8-K): 추가 GPU 를 2026 H2 에 Mackenzie·Childress 공랭 데이터센터에 배치, CF 는 "향후" 수용 가능.
- Q3 FY26 녹취 (8-K, 2026-05-11): PG GPU 전량 인도·가동/시운전, MK 80MW GPU 설치 준비 완료(2026 H2 설치 시작), CF 30MW 공랭 AI 개조 계획.
- FY26 10-K (2026-08-27): MK GPU 장비 2026-12-31 까지 단계 인도($2.4bn 금융), 회사 전체 설치 채굴 용량 2026-06-30 기준 ~380MW.
- FY26 보도자료 (2026-08-27): 2027 년 MK·CF·PG 신규 액체냉각 배치("power headroom" 활용).

## 상충 정보
1. **PG 전량 가동 시점**: 원본은 2026-08 operating(reported, iren.com)·"2026-08-27 전량 커미셔닝 완료(FY26 보도자료)" 로 적었지만 FY26 보도자료 SEC 사본에는 해당 문구가 없음. Tier 1 로 확인되는 것은 2026-05-11 "가동 또는 시운전 중"까지 → operating 2026-08 은 유지하되 estimate 로 낮춤.
2. **CF 2027 계획 두 가지**: 2026-05 녹취 "30MW 공랭 전체 AI 개조" vs 2026-08 보도자료 "전력 여유분을 활용한 신규 액체냉각 배치". 원본의 cf-liquid-2027(30MW, replaces cf-air)를 그대로 두어서 2027-12 에는 공랭 홀이 액체냉각 홀로 완전히 대체된 것처럼 보임. 실제 MW 분할은 미공개.
3. **회사 전체 채굴 380MW(2026-06-30)**: CF 30MW 가 이 시점 아직 채굴 중이므로, 원본 Childress 채굴동 380MW 는 최대 ~30MW 과대일 가능성(범위 밖이라 수정 안 함).
4. **PG 부지 면적**: iren.com 12에이커 vs FY25 10-K 21에이커(임차 토지 매입) — acres 미변경.
5. **MK 2026-08 금융 날짜**: 원본 timeline 은 2026-08-28(unite.ai), 10-K 상 계약일은 2026-08-25 — 원본 항목 유지.

## 미확인·추정 항목
- PG `pg-hopper-pilot` 2MW: 816 × 1.93kW × 1.1 ≈ 1.7MW 로 계산(2025-06 엔 1.9k개 ≈ 4MW). GPU 수·MW 를 2024 기준값 하나로 고정. 2025-12 retired 는 중복 계산을 피하려는 모델링 처리.
- MK 채굴 종료 월(2026-05 추정, 실제는 2026-01~05 사이), MK under_construction 2026-05·commissioning 2026-10 (모두 추정).
- CF 채굴 종료 2026-10 (10-Q 의 계획을 적용한 추정, 실제 철수·매각 미확인). CF AI 개조 planned 를 2026-10 에 둔 것은 전력 합계 규칙 때문(실제 발표는 2026-05).
- 채굴동이 사이트 전력 100%(50/80/30MW)를 썼다고 가정 — 사무동·변압 손실 등은 무시.
- 2022 이전 CF 증설 이력(인수 당시 용량)은 반영하지 않음(타임라인 검사 범위 2024~2028 밖이고 출처상 30MW 로만 확인).
