# 검토표 — NAVER (KRX: 035420)

- 그룹: korea · 본사: KR · 회사색: `#6cdd5f` · 기준일: 2026-10-07
- 요약: 한국 최대 인터넷 플랫폼 기업. 자체 데이터센터 '각 춘천'(2013, 약 40MW)과 '각 세종'(2023, 현재 수전 47MW·설계 최대 270MW)을 운영하며, 2026-07 엔비디아(10억달러 지분 투자)·브룩필드(최대 90억달러, 최종 계약 전)와 함께 각 세종에 200MW AI 팩토리(2027 상반기 55MW → 2028년 200MW)를 짓겠다고 발표했다. 수도권에서는 LG CNS·다우기술 데이터센터를 장기 임차한다.
- 근거 19건: Tier1 10 · Tier2 9 · Tier3 0 · 단독 출처 3 · 상충 2

## 사이트 (기준일 시점)

| 사이트 | 위치 | 상태 | 확보 → 최종 | 통전 | AI 가동 | 건설 | 건물 | 상세 | 좌표 | 참여사 |
|---|---|---|---|---|---|---|---|---|---|---|
| GAK Sejong | Sejong (Jiphyeon-dong, 4-2 living zone urban high-tech industrial complex), KR | 가동 | 247MW → 247MW | 47MW | 47MW | 55MW | 4 | lite | high (official_address) | naver(developer), naver(owner), naver(operator) |
| GAK Chuncheon | Gangwon (Chuncheon, Dong-myeon — Gubongsan), KR | 가동 | 40MW → 40MW | 40MW | 40MW | 0MW | 1 | lite | high (official_address) | naver(developer), naver(owner), naver(operator) |

## 건물·단계 일정

**GAK Sejong**

| 건물 | MW | 단계 이력 (basis) |
|---|---|---|
| Phase 1 — North server hall (opened Nov 2023) | 47 gross | 건설중 2021-04 → 가동 2023-11 |
| AI factory step 1 (phase-2 expansion, 55MW) | 55 gross | 계획 2025-10 → 건설중 2026-02 (estimate) → 가동 2027-H1 (target) |
| AI factory step 2 (+45MW, to 100MW) | 45 gross | 계획 2026-07 → 가동 2027-Q4 (target) |
| AI factory step 3 (+100MW, to 200MW) | 100 gross | 계획 2026-07 → 가동 2028 (target) |

**GAK Chuncheon**

| 건물 | MW | 단계 이력 (basis) |
|---|---|---|
| GAK Chuncheon (~40MW) | 40 gross | 가동 2013-06 |

## 추정 항목

- GAK Sejong: 1단계 47MW 는 2025-10~11 보도의 '현재 수전 용량'을 2023-11 개소 시점부터 적용한 추정(회사 발표 '전체의 1/6' 기준이면 약 45MW)
- GAK Sejong: 확보 전력 단계(130MW→247MW)는 회사 목표를 발표 시점부터 적용한 것. 247MW = 기존 47MW + AI 팩토리 200MW(설계 최대 270MW 이내). 한전 수전 승인 규모는 미공개
- GAK Sejong: AI 팩토리 MW(55/100/200)가 IT 인지 수전 기준인지 미공개 → 낮은 쪽 해석으로 grid 표기. AI 팩토리 1단계 55MW 를 2025-10 발표한 '2단계 증설'(2027 완공)과 같은 공사로 본 것은 추정. 2단계 착공(2026-02)은 '착공 예정' 보도만 있어 estimate
- GAK Sejong: 진행률 0.4: 2026-02 착공(추정) → 2027 상반기 가동 목표, 약 16개월 중 8개월 경과로 근사. 공정률 공개 없음
- GAK Chuncheon: 40MW 는 회사의 '각 세종 수전 270MW = 각 춘천의 6.75배' 에서 역산한 값(언론도 '각 춘천 수전 40MW' 로 표기). 2013 개소 당시부터 전량 확보·통전으로 둔 것은 추정(단계 증설 여부 미공개)

## 미해결 질문

- 브룩필드 최대 90억달러 조달은 12주 독점 우선협상(2026-07-27~약 10월 하순) 단계로 최종 계약 전. 최종 계약 시 브룩필드 SPV 가 GPU·데이터센터 설비를 소유하고 네이버 AI 팩토리 운영 자회사가 사용료를 내는 구조 → parties 에 'brookfield'(financier, 어쩌면 owner) 추가 필요(companies.json 에 없음, 새 partner id). 엔비디아는 네이버 지분 투자·GPU 공급으로 사이트 parties 에는 넣지 않음('nvidia' id 도 companies.json 에 없음).
- AI 팩토리 위치 상충: 6월 보도자료는 '2028년 200MW까지 해외로 인프라 규모를 확장'으로 해외 거점 포함처럼 읽히나, 7월 3사 공동 보도자료는 200MW 를 각 세종에 짓는다고 명시 → 각 세종에 200MW 전부 배정. 일부를 수도권 임차 DC(다우기술 죽전 40MW 2027-06~, LG CNS 삼송)에서 운영할 가능성 있음.
- 각 세종 수전 확대 상충: 2025-10 계획은 2029년까지 130MW 이상(더벨 '3차까지 북관 최대 135MW'), 2026-07 계획은 2028년 AI 팩토리 200MW(기존 47MW 포함 시 약 247MW). 한전 수전·전력계통영향평가 승인 규모, AI 팩토리 MW 의 기준(IT/수전) 미공개.
- 각 세종 2단계 실제 착공 여부·시점 미확인(2025-12 '2026-02 착공 예정' 보도만 있음). 3단계는 2027 착공 전망. AI 팩토리 1단계 55MW 가 2단계 증설과 같은 공사인지 확인 필요.
- 국가 AI 컴퓨팅센터(전남 해남 솔라시도, 40MW, 2026-08-03 착공, 삼성SDS 30%·네이버 26% 컨소시엄 KOACC)는 삼성SDS 주도라 네이버 사이트로 넣지 않음. 삼성SDS 초안을 만들 때 primary 'samsung-sds'(새 회사 id), parties 에 naver(owner, share 0.26)로 넣는 것을 권장.
- 모로코 누아쇠르 AI 데이터센터(최대 500MW, 1단계 40MW GB200 '2025년 내' 목표): 실제 착공·가동 여부 미확인. 넥서스 코어 시스템즈가 인프라 주체라 colocations 로만 표기. 사우디(한미글로벌 MOU, 2026-04)·중동 데이터센터는 '구체 논의 중' 단계라 미포함.
- 임차 DC 3곳의 네이버 임차 MW 는 미공개(공시는 계약금액 하한만). LG CNS 죽전의 시설 MW 미확인.
- 국민성장펀드가 각 세종에 4,000억원을 지원한다는 보도(금강일보)가 있음 — 대상(AI 팩토리 증설 여부)·조건 미확인.
