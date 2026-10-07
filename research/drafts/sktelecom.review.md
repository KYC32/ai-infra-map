# 검토표 — SK Telecom (KRX: 017670)

- 그룹: korea · 본사: KR · 회사색: `#dd5fc4` · 기준일: 2026-10-07
- 요약: 한국 1위 이동통신사로, 자회사 SK브로드밴드(2027년 1분기 'SK호라이즌'으로 분할 예정)를 통해 데이터센터 8곳(합계 약 137MW)을 운영하고 AWS와 울산 미포국가산단에 103MW AI 데이터센터를 짓고 있다. 2026-07 AI DC 개발 전문회사 'SK하이퍼'를 세워 2029년 5GW·2035년 15GW를 목표로 제시했으나, 울산·구로 외 GW급 사업은 부지·일정 미확정.
- 근거 25건: Tier1 9 · Tier2 16 · Tier3 0 · 단독 출처 2 · 상충 4

## 사이트 (기준일 시점)

| 사이트 | 위치 | 상태 | 확보 → 최종 | 통전 | AI 가동 | 건설 | 건물 | 상세 | 좌표 | 참여사 |
|---|---|---|---|---|---|---|---|---|---|---|
| SK AI Data Center Ulsan (with AWS) | Ulsan (Nam-gu, Hwangseong-dong — Mipo National Industrial Complex), KR | 건설중 | 103MW → 103MW | 0MW | 0MW | 41MW | 2 | lite | medium (official_address) | sktelecom(developer), sktelecom(owner), sktelecom(operator), aws(tenant) |
| Guro AI Data Center (Seoul) | Seoul (Guro-gu), KR | 계획 | 75MW → 75MW | 0MW | 0MW | 0MW | 1 | lite | medium (city_centroid) | sktelecom(developer), sktelecom(owner) |

## 건물·단계 일정

**SK AI Data Center Ulsan (with AWS)**

| 건물 | MW | 단계 이력 (basis) |
|---|---|---|
| Phase 1 — Building A (41MW) | 41 gross | 계획 2025-06 → 건설중 2025-09 → 시운전 2027-Q2 (target) → 가동 2027-11 (target) |
| Phase 2 (+62MW, to 103MW) | 62 gross | 계획 2025-06 → 가동 2029-02 (target) |

**Guro AI Data Center (Seoul)**

| 건물 | MW | 단계 이력 (basis) |
|---|---|---|
| Guro AI DC (75MW) | 75 gross | 계획 2025-10 → 가동 2030 (target) |

## 추정 항목

- SK AI Data Center Ulsan (with AWS): 확보 전력 103MW 는 회사 계획 용량을 2025-06 부터 그대로 적용한 추정. 전력 공급 구조(SK멀티유틸리티 발전소·SK가스 LNG)는 회사 발표지만 계약 MW·한전 수전 규모는 미공개
- SK AI Data Center Ulsan (with AWS): 41MW/103MW 가 IT 인지 수전(계통) 기준인지 미공개 → 낮은 쪽 해석으로 grid(계통) 기준 표기. 일부 보도는 '103MW 중 AI 장비 100MW' 라고 해 IT 에 가까울 수 있음
- SK AI Data Center Ulsan (with AWS): 진행률 0.55: 2025-09-01 착공 → A동 준공 목표 2027-05-31(약 21개월) 중 약 13개월 경과로 근사. 공정률 공개 수치 없음. 2단계(62MW) 착공 시점도 미공개라 '계획'으로 둠
- SK AI Data Center Ulsan (with AWS): 부지 면적 상충: SK브로드밴드 매입 19,834㎡(약 4.9에이커) vs 보도 3만6천㎡ vs '2만평 이상' → 낮은 값(매입 필지) 채택
- Guro AI Data Center (Seoul): 75MW 는 언론·증권사 보도(분할 공시 인용) 값이고 SKT 보도자료에는 MW 가 없음. IT/수전 기준 미공개 → grid 표기. 확보 전력 75MW 를 설계 착수 발표 시점(2025-10)부터 적용한 것은 추정(SKT 는 '전력 확보 가능한 입지'라고만 밝힘)
- Guro AI Data Center (Seoul): 좌표는 구로구 중심(정확한 부지 미공개). SKT 는 '건설 중'이라 표현하나 착공 보도가 없어 '계획' 상태로 둠

## 미해결 질문

- Stargate Korea(서남권) — SKT–OpenAI MOU(2025-10-01) 이후 부지 미확정: 해남 솔라시도 유력(2025-11 보도) → 장성 첨단3지구(광주 첨단연구개발특구) 유력(2026-03 전자신문) → '해남·장성 경합, 조만간 결정'(2026-04~08 지역 보도)으로 엇갈림. 2026-09-07 IBTimes 는 'MOU 이후 실질 진전 없음'. 반면 2025-10 일부 보도는 'AWS·OpenAI 와 서남권 AI DC 구축 착수'로 표현(상충). MW·일정·SPC 구조 모두 미공개 → 사이트 미포함. 부지 확정·착공 공시 시 lite(planned)로 추가 필요. 참여사 openai(companies.json 에 partner 로 존재).
- 울산 900MW 추가 확장(1GW 클러스터): 2025-08 울산시 MOU, 2026-09-11 최태원 회장 '거의 다 왔다' 발언만 있음. 부지(기존 필지 내/인접 여부)·전력(SK멀티유틸리티·KET 발전소 vs 한전)·고객(AWS·Anthropic·NVIDIA 2GW AI 팩토리 중 무엇) 미확정 → 미포함.
- 울산 41/103MW 의 기준(IT vs 수전) 미공개. 일부 보도 '103MW 중 AI 장비 100MW' — IT 라면 총 전력은 약 130MW 이상일 수 있음.
- 울산 소유 구조 변화: SK브로드밴드 → SK호라이즌(2027 Q1 분할 목표, SKT 51%·KKR 29%·IMM 컨소시엄 20%). 분할 완료 후 owner 를 SK호라이즌으로 바꿀지, KKR·IMM 을 financier 로 넣을지(새 회사 id 'kkr', 'imm-investment' 필요) 결정 필요.
- 울산 참여사 중 parties 역할에 맞지 않아 넣지 않은 SK 계열사: SK에코플랜트(시공), SK가스(LNG 연료), SK멀티유틸리티(발전), SK이노베이션(전력 솔루션, 일부 보도), SK하이닉스(HBM), SK AX, SK케미칼(부지 매도). 필요하면 새 회사 id 'sk-ecoplant', 'sk-gas', 'sk-innovation' 등을 partner 로 추가.
- AWS 15년 독점 사용 계약(IB토마토 보도, Tier2 단독) 및 AWS 투자액(40억달러 vs 51억달러 표기) 확인 필요. Anthropic 이 울산의 '핵심 연산 파트너'라는 보도(블로터)도 있어 end_user 추가 여부 검토.
- 구로 AI DC: 정확한 부지(구로동 옛 SK렌터카 부지에서 코람코 컨소시엄이 추진 중인 별도 데이터센터가 있어 혼동 주의), 착공 여부, 75MW 의 기준(IT/수전), 전력계통영향평가 통과 여부 미확인.
- 가산 AI DC(SK브로드밴드 가산 IDC 일부, H100·H200·B200 '해인' 클러스터)는 MW 미공개라 사이트로 넣지 않음. 기존 8개 DC(합계 약 137MW, 판교 30MW 포함) 중 AI 용도 비중 미공개.
- SKT–NVIDIA '최대 2GW AI 팩토리'(2026-07) 와 SKT–Anthropic GW급 AI DC MOU 의 부지가 울산 확장분인지 별도 부지(충청·서남권)인지 미공개.
