# 검토표 — Galaxy Digital (NASDAQ: GLXY)

- 그룹: miner · 본사: US · 회사색: `#c3a6e8` · 기준일: 2026-10-07
- 요약: 뉴욕 본사의 디지털자산·데이터센터 기업. 텍사스 Helios 비트코인 채굴장을 AI/HPC 데이터센터로 전환해 CoreWeave에 526MW(IT)를 15년 임대했으며, 텍사스 전역에서 5.7GW 규모의 전력 파이프라인을 추진 중이다.
- 근거 27건: Tier1 26 · Tier2 1 · Tier3 0 · 단독 출처 2 · 상충 3

## 사이트 (기준일 시점)

| 사이트 | 위치 | 상태 | 확보 → 최종 | 통전 | AI 가동 | 건설 | 건물 | 상세 | 좌표 | 참여사 |
|---|---|---|---|---|---|---|---|---|---|---|
| Helios | Texas (Dickens County), US | 가동 | 1.63GW → 1.63GW | 200MW | 200MW | 400MW | 4 | full | low (county_centroid) | galaxy(owner), galaxy(developer), coreweave(tenant) |
| Merlin (McGregor) | Texas (McGregor), US | 계획 | 74MW → 74MW | 0MW | 0MW | 0MW | 0 | lite | medium (city_centroid) | galaxy(developer) |

## 건물·단계 일정

**Helios**

| 건물 | MW | 단계 이력 (basis) |
|---|---|---|
| Phase I (CoreWeave) | 200 gross | 계획 2025-03 → 건설중 2025-Q2 (estimate) → 시운전 2026-02 → 가동 2026-06 |
| Phase II (CoreWeave, 2 buildings / 8 data halls) | 400 gross | 계획 2025-04 → 건설중 2026-04 → 시운전 2027-Q2 (target) → 가동 2027 (target) |
| Phase III (CoreWeave) | 200 gross | 계획 2025-Q3 → 가동 2028 (target) |
| Helios II block (830MW, uncontracted) | 830 gross | 계획 2026-01-15 |

## 추정 항목

- Helios: 1단계 착공 시점(2025-Q2)은 추정: 자가 채굴이 2025년 1분기 말 중단됐고, 2025-08-05 발표 시점에 내부 철거 완료·설비 공사 진행 중이었음
- Helios: 2단계 진행률 0.3은 추정: 2026-04 착공, 2026-08 기준 토공 완료·기초 공사 중, 첫 인도 목표 2027-Q2 → 기준일(2026-10) 약 30%
- Helios: power 의 energized_mw 는 '데이터홀에 인도된 gross 전력' 기준으로 해석함. 2025-03~2026-05 는 채굴 중단 후 AI 부하 인도 전이라 0 으로 둠 (변전소 자체는 2025년 이전 800MW 변압기 설치 완료)
- Helios: 2단계 'commissioning 2027-Q2'는 회사가 밝힌 첫 데이터홀 인도·임대료 개시 목표(Q2'27)를 부분 인도 시작으로 표현한 것이며, 전량 가동은 '2027년 중(throughout 2027)' 문구에 따라 2027 말로 둠
- Merlin (McGregor): 가동 시점 2028년은 크립토 매체 보도(단독, Tier 3)로 공식 확인되지 않음 — phases 에 반영하지 않음

## 미해결 질문

- CoreWeave(id 'coreweave')는 아직 data/companies.json 에 없음 — 병합 전에 회사 항목(group neocloud, NASDAQ: CRWV) 추가 필요
- Helios 정확한 좌표: 공식 주소·인허가 필지 미확인. 현재 Dickens County 중심(low). 카운티 감정평가·TCEQ·ERCOT 연계 문서로 필지 확인 필요(위성사진 추적 금지)
- Caspian(~700MW)·Selene(~900MW) 사이트의 위치(카운티)가 공시에 없음 → 사이트로 넣지 않음. 위치 공개 시 lite 사이트로 추가
- Helios III·IV(각 1GW 부하 신청, Helios III는 Batch Zero Studied Load) — 확보 전력 아님. 승인 시 Helios power 이력에 추가
- Helios 냉각 방식(액체/공랭)·GPU 모델 미공개 → cooling 'undisclosed', 건물 kind 생략(화면 기본값 공랭)
- Helios 캠퍼스 면적: 1,500+에이커(연속 부지, ~2026-Q1) vs 2,200+에이커(직접 통제 부지, 2026-Q2) — 정의가 다름. 규칙에 따라 낮은 값 채택
- 1단계 실제 착공 월 미공개 (2025-Q2 추정)
- 3단계(133MW IT) 착공 시점·건물 구성 미공개; 10-Q는 2·3단계 600MW가 2027-Q2부터 인도 시작한다고 기재, 실적자료는 3단계 2028 시작 — 3단계 운영 목표를 2028로 둠
- 830MW(Helios II 블록) 입주사 미정 — 계약 시 건물 분할·tenant 추가 필요
- Merlin 가동 목표 시점·전력회사(TDSP) 공식 미확인
