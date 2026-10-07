# Galaxy Digital (GLXY) — 조사 노트

- 기준일(as_of): 2026-10-07
- 회사 id: `galaxy` / group: `miner` (Helios 채굴장 → AI/HPC 전환) / color `#c3a6e8` (라벤더 파스텔, IREN·상태색과 다름)
- 주 출처: SEC EDGAR (CIK 0001859392) 8-K 실적 보도자료·투자자 개요(EX-99.1/99.2), 10-K(FY2025), 10-Q(2026 Q2), S-1(2025-05), 채권 발행 8-K(2026-07), ERCOT 승인 8-K(2026-01-15), 보도자료(PR Newswire 2026-07-06, Batch Zero 2026-09-08)

## 1. 조사 요약

### Helios (Dickens County, TX) — detail: full
- 2022-12 Argo Blockchain에서 채굴장 인수 → 2025년 1분기 말 자가 채굴 중단 → AI/HPC 전환.
- **CoreWeave 임대 (15년 + 5년 연장 옵션 2회)**, 합계 IT 526MW / gross 800MW
  | 단계 | IT MW | gross MW | 계약 | 상태 (2026-10-07) | 일정 |
  |---|---|---|---|---|---|
  | Phase I | 133 | ~200 | 2025-03-28 임대 | **가동** | 2026-02 커미셔닝, 2026-04 첫 데이터홀 인도, 2026-06 말 133MW 전량 가동 |
  | Phase II | 260 | ~400 | 2025-04 옵션 → 2025-08-08 임대 | **건설중** (진행률 0.3 추정) | 2026-04 HITT 착공, 2026-08 토공 완료·기초 공사 중, 2027-Q2 첫 인도 목표, 2027 중 전량 |
  | Phase III | 133 | ~200 | 2025-Q3 옵션 → 2026-01 임대 | 계획 | 2028 시작 목표 |
  | Helios II 블록 | – | 830 (grid) | 미계약 | 계획 | ERCOT Base Load, 2028 통전 예정 |
- Phase II = **건물 2동·데이터홀 8개**, 400MW(유틸리티)/260MW(IT). $3.507bn 9.875% 선순위 담보채(2031 만기, 2026-07-28)로 자금 조달.
- Phase I은 Deutsche Bank $1.4bn 프로젝트 파이낸싱(2025-08-15)으로 $1.7bn 공사비 조달.
- **전력 이력**
  - 2025년 이전: 자체 345kV 변전소에 주변압기 6대, 800MW 승인 전력 확보 (10-K). S-1(2025-05)에서도 800MW 승인 명시.
  - 2026-01-15: ERCOT LLIS 완료, 830MW 추가 승인 → **1.63GW** (AEP Texas 서비스 계약, WETT 송전 연계).
  - 2026-06: Phase I 200MW gross 인도 완료 (energized 200으로 기록).
  - 목표: 2027 말 600MW, 2028 말 800MW 인도 (CoreWeave 3단계 합계).
  - 2026-09-08 ERCOT Batch Zero: Helios I(800MW)·Helios II(830MW) = Base Load, Helios III(1,000MW) = Studied Load. Helios IV(1GW)는 추가 신청 진행 중 → 잠재 3.6GW.
- 변전소: 자체 345kV, 변압기 용량 최대 900MW. 인근 WETT 소유 Cottonwood·Pitchfork 345kV 변전소(CREZ).

### Merlin (McGregor, TX) — detail: lite
- McGregor 산업단지 500에이커 개발 계약, 초기 약 74MW 전력 계약, 송전 증강 시 최대 500MW.
- 2026-06 시의회 승인(KLTV 보도: $4억+ 투자, 30+ 고용, 폐쇄형 냉각, 자체 변전소). 착공은 수개월 후.
- 가동 시점 2028은 크립토 매체(cryptobriefing, Tier 3)에만 있어 phases에 넣지 않고 estimates에만 기록.

### 제외한 사이트
- **Caspian (~700MW)**, **Selene (~900MW)**: 2026 Q2 실적에서 "텍사스 내 2개 사이트 인수" 공시, Batch Zero Studied Load. 그러나 **위치(카운티)가 공시·보도에 없음** → 좌표를 만들 수 없어 사이트에서 제외, open_questions에 기록.
- Helios III/IV: Helios 캠퍼스 내 추가 부하 신청(각 1GW). 확보 전력이 아니므로 건물로 넣지 않음.

## 2. 상충 정보 (양쪽 출처)

| 항목 | A | B | 채택 |
|---|---|---|---|
| Phase I 임대 계약일 | 2025-03-28 (Q1'25 보도자료, S-1 "In March 2025") — https://www.sec.gov/Archives/edgar/data/1859392/000185939225000007/glxy-20250331xpressrelease.htm | "entered into in April 2025" (10-K, 10-Q) — https://www.sec.gov/Archives/edgar/data/1859392/000185939226000016/glxy-20251231.htm | 2025-03 (최초 발표). 서명/발효 시점 차이로 추정 |
| Helios 캠퍼스 면적 | 1,500+ 에이커 "연속 부지" (Q3'25~Q1'26 자료) — https://www.sec.gov/Archives/edgar/data/1859392/000185939226000047/exhibit992-q12026overvie.htm | 2,200+ 에이커 "직접 통제 부지" (Q2'26 자료) — https://www.sec.gov/Archives/edgar/data/1859392/000185939226000084/exhibit992-q22026overvie.htm | **1,500** (규칙 9: 낮은 값). 정의 변경일 가능성 높음 |
| Phase II 부지 면적 | "approximately 260-acre property" (8-K 2026-07-22/28) — https://www.sec.gov/Archives/edgar/data/1859392/000185939226000079/glxy-20260728.htm | "196-acre property" (채권 투자설명 자료 면책 조항) — https://www.sec.gov/Archives/edgar/data/1859392/000185939226000068/launch8-kexhibit99172226.htm | 데이터에 미사용(캠퍼스 면적만 기록) |
| Phase II 첫 인도 | "first half of 2027" (Q1'26 보도자료, 2026-07-06 보도자료) | "second quarter of 2027" (Q2'26 보도자료, 10-Q, 채권 자료 "Q2'27 Initial Targeted Rent Commencement") | 2027-Q2 (더 구체적·보수적, 모순 아님) |
| Phase III 시점 | "Phase III starting in 2028" (Q3'25·Q4'25 자료) | 10-Q: Phase II+III 600MW가 "2027-Q2부터" 인도 시작 | 2028 (10-Q 문구는 2·3단계 합산 시작 시점으로 해석) |
| CoreWeave 임대 예상 연평균 매출 | "$1B+" / "more than $1 billion" (2026-07-06 보도자료, Q1'26) | "$1.2B+" (Q2'26 투자자 개요) | **$1bn** (낮은 값) |
| "Helios II" 명칭 | ERCOT/Batch Zero 보도자료: Helios II = 미계약 830MW 블록 | 채권 발행 법인명 "Galaxy Helios II LLC" = CoreWeave **Phase II** 프로젝트 | 데이터에선 "Phase II(CoreWeave)"와 "Helios II 블록(830MW)"으로 구분 |

## 3. 미확인 항목
- Helios 정확한 위치(공식 주소·필지). Argo 시절 보도는 "Dickens County, 320에이커"까지만.
- 냉각 방식(액체/공랭), GPU 모델·수량 — Galaxy는 건물 임대(파워드 쉘에 가까운 구조)만 공시, CoreWeave 장비 정보 없음. → cooling "undisclosed", 건물 kind 생략.
- Phase I 착공 월 (2025-Q2로 추정), Phase III 착공 시점.
- Phase II 진행률 공식 수치 없음 (0.3 추정 근거: 2026-04 착공 → 2026-08 기초 공사 → 2027-Q2 첫 인도).
- 830MW(Helios II 블록) 입주사 — "잠재 임차인과 협의 중".
- Merlin 가동 목표·전력회사, Caspian·Selene 위치.
- CoreWeave 회사 항목이 companies.json에 없음 (병합 전 추가 필요).

## 4. 좌표 근거
- **Helios**: 33.617, -100.779 — Dickens County, TX 카운티 중심(low, county_centroid). 공시 근거: 10-K "data center project in Dickens County, Texas", Q2'25 투자자 개요 "Location: Dickens County, TX". 위성사진으로 실제 시설 위치를 추적하지 않음.
- **Merlin**: 31.443, -97.409 — McGregor, TX 시 중심(medium, city_centroid). 공시 근거: Q2'26 자료 "McGregor Industrial Park". 언론상 "SpaceX 시설 북동쪽"이나 필지 미확인이므로 시 중심 사용.

## 5. 데이터 해석 메모
- `energized_mw`는 "데이터홀에 실제 인도된 gross 전력"으로 해석 (변전소 통전 용량이 아님). 채굴 중단(2025-03) 이후 첫 인도 전까지 0.
- Phase II의 `commissioning 2027-Q2(target)`은 첫 데이터홀 인도·임대료 개시 목표를 "부분 인도 시작"으로 표현한 것.
- 건물 MW는 회사가 IT 기준으로 발표하므로 `mw_basis: "it"`, 회사가 함께 밝힌 근사 gross 값(200/400/200)을 `gross_mw`로 기록. 830MW 블록은 승인 계통 용량이므로 `mw_basis: "grid"`.
- 검사 결과: `node scripts/check-draft.mjs galaxy` → ✅ (경고 2건: coreweave 미등록, 지구본 타일 재생성 필요 — 둘 다 병합 단계 작업)
