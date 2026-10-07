# OpenAI (비상장) — 리서치 노트

- 기준일(as_of): 2026-10-07
- 초안: `research/drafts/openai.json` (사이트 1곳, 근거 14건: Tier 1 10 / Tier 2 4 / Tier 3 0)
- 회사 id `openai`, **group 을 `partner` → `hyperscaler` 로 변경**(자체 개발 캠퍼스를 갖게 되므로), ticker 없음(비상장), 회사색 `#e9e9a5`(미리 배정, 그대로). check-draft 에서 회사색 경고 없음
- 사이트로 넣은 것은 **OpenAI 가 직접 설계·개발하는 캠퍼스(Project Camellia) 하나뿐**이다. OpenAI 가 쓰는 나머지 용량은 다른 회사가 짓고 소유한 시설이라 그 회사 파일의 parties(tenant·end_user)로 이미 들어 있거나(아래 표 A), 클라우드 계약이라 사이트가 아니다(표 B)
- openai.com 은 직접 받기가 막혀(403) 읽기 프록시(r.jina.ai)로 원문을 확인했다

## 1. 요약

- OpenAI 는 ChatGPT·Codex 를 운영하는 AI 회사다. 컴퓨팅은 2023년 0.2GW → 2024년 0.6GW → 2025년 약 1.9GW 로 늘었고, 연환산 매출(ARR)은 20억 → 60억 → 200억 달러 이상이 됐다 ([OpenAI](https://openai.com/index/a-business-that-scales-with-the-value-of-intelligence/))
- Stargate: 2025-01 백악관에서 4년간 5,000억 달러·10GW 미국 AI 인프라 투자를 약속했다(SoftBank·Oracle·MGX 와 함께) ([OpenAI](https://openai.com/index/announcing-the-stargate-project/)). 2025-07 Oracle 과 4.5GW 추가 계약 ([OpenAI](https://openai.com/index/stargate-advances-with-partnership-with-oracle/)), 2025-09 신규 부지 5곳 발표 ([OpenAI](https://openai.com/index/five-new-stargate-sites/))
- **Project Camellia**(2026-07-22 발표)는 OpenAI 가 "직접 설계·개발하는" 첫 캠퍼스다. 그전까지는 모든 부지가 개발사(Crusoe·Vantage·Related·STACK·SB Energy)가 짓고 Oracle·SB Energy 등이 소유·운영하는 구조였다

## 2. 사이트 목록

| 사이트 | primary | 상태(기준일) | 확정 MW | 발표 MW | 주요 일정 | 참여사 |
|---|---|---|---|---|---|---|
| Project Camellia (`camellia-effingham`, lite) | openai | 계획(인허가 단계, 착공 전) | 3,200 (Georgia Power 계약, PSC 실무진 통과 2026-08-27) | 3,200 | 2026-07-15 계약 PSC 제출, 2026-07-22 발표·DRI 제출, 2026-08-27 PSC 통과, 착공 2027 초(보도), 전력 2028~2032 단계 공급 | openai(developer·end_user) |

### 사이트 메모 — Project Camellia

- OpenAI 공식 페이지 ([OpenAI](https://openai.com/index/building-ai-infrastructure-with-the-effingham-county-community/))
  - "OpenAI is designing and developing" — OpenAI 가 직접 설계·개발
  - Savannah Gateway Industrial Hub 안. 원래 산업용(창고)으로 용도지정된 곳
  - Georgia Power 3.2GW, 2028~2032 단계 공급. 전력 인프라 비용은 OpenAI 가 전액 부담
  - 폐쇄 루프 냉각수, 지역 지원 8,000만 달러, 조지아 학생용 Codex 크레딧 최대 7,100만 달러, 독립 기관의 연례 공개 감사
- 보도(The Current 2026-07-22, Tier 2) ([기사](https://thecurrentga.org/2026/07/22/20-billion-openai-data-center-to-open-in-effingham-county/))
  - 투자 200억 달러, 4개 동, 개장 2028, Georgia Power 25년 계약
  - 신고상 개발 법인 'Octans GA LLC', 부지 소유는 Effingham County 산업개발청(IDA), 재산세 15년 50% 감면
  - Bloomberg 인용: 완공 시 300억 달러 이상
- 면적: 1,400에이커(The Current 2026-07-25) ([기사](https://thecurrentga.org/2026/07/25/as-effingham-county-data-center-plan-advances-next-step-is-state-evaluation-process/))
- PSC
  - 2026-07-15 Georgia Power 가 계약 제출 ([The Current 8/4](https://thecurrentga.org/2026/08/04/state-regulator-reviews-openai-georgia-power-contract/))
  - 2026-08-27 PSC 실무진이 이의를 제기하지 않아 통과(공개 표결 없음), Docket 71526. OpenAI 는 최대 1GW 수요 조정을 허용 ([CBS Atlanta](https://www.cbsnews.com/atlanta/news/georgia-power-gets-clearance-to-serve-openais-massive-ai-data-center-in-effingham-county/), [The Current 8/27](https://thecurrentga.org/2026/08/27/psc-boosts-safeguards-in-georgia-powers-massive-contract-with-openai/))
- 카운티: 착공 전 지역영향평가(DRI)와 각종 허가·검사를 거쳐야 한다 ([Effingham County](https://www.effinghamcounty.org/m/newsflash/Home/Detail/466))
- 전력 기록: `[{2026-07, 3200, target}, {2026-08, 3200, reported}]`. reported 3,200 은 목표를 복사한 것이 아니라 **PSC 가 통과시킨 공급 계약 규모**다. 단계별 MW 를 모르므로 통전(energized) 목표 단계는 넣지 않았다
- 건물: 4개 동·약 440만 sq ft 는 초기 구상(Tier 3)이고 동별 MW·일정이 없어 lite(buildings 비움)로 뒀다 → 화면상 상태는 '계획'

## 3. 외부 조달 용량 (sites 아님)

### A. 다른 회사 파일에 사이트로 이미 있는 곳 (OpenAI = tenant / end_user)

| 사이트 | 파일 | OpenAI 역할 | 규모 | 비고 |
|---|---|---|---|---|
| Abilene (Stargate 1호) | crusoe | end_user (Oracle tenant) | 약 1.2GW | Crusoe 개발 |
| Shackelford County (Frontier) | oracle | end_user | IT 1.4GW | Vantage 개발, Oracle 운영 |
| Saline Township (The Barn) | oracle | end_user | 1,383MW (DTE 계약) | Related 개발, Oracle 운영 |
| Port Washington (Lighthouse) | oracle | end_user | 약 1.3GW | Vantage 개발, Oracle 운영 |
| Doña Ana County (Jupiter) | oracle | end_user | 약 1GW | STACK 개발, Oracle 운영 |
| Milam County | softbank (이번 초안) | tenant | IT 753MW (발표 1.2GW) | SB Energy 개발·소유·운영, 2026-01 리스 |
| PORTS-Pike | softbank (이번 초안) | tenant | IT 약 8.0GW | SB Energy, 2026-08-17 20년 리스 17건 ([OpenAI](https://openai.com/index/openai-joins-ports-pike-project)) |
| Lordstown | softbank (이번 초안) | end_user | 미공개 | SoftBank 소유 |

### B. 클라우드·컴퓨팅 구매 계약 (특정 시설 임차가 아님)

| 상대 | 내용 | 발표 | 출처 |
|---|---|---|---|
| Microsoft Azure | Azure 서비스 2,500억 달러 추가 구매 계약 | 2025-10-28 | [OpenAI](https://openai.com/index/next-chapter-of-microsoft-openai-partnership/) |
| Oracle (OCI) | Stargate 용량 4.5GW 추가 개발 계약(Abilene 포함 5GW 초과) | 2025-07 | [OpenAI](https://openai.com/index/stargate-advances-with-partnership-with-oracle/) |
| AWS | 7년 380억 달러, NVIDIA GB200·GB300 수십만 개, 2026년 말까지 전량 배치 목표 | 2025-11-03 | [Amazon](https://www.aboutamazon.com/news/aws/aws-open-ai-workloads-compute-infrastructure) |
| CoreWeave | 3차례 계약 합계 최대 약 224억 달러(2025-03 119억 + 05 40억 + 09 65억) | 2025-09-25 | [CoreWeave](https://www.coreweave.com/news/coreweave-expands-agreement-with-openai-by-up-to-6-5b) |
| Cerebras | 저지연 추론 용량 약 750MW, 2028년까지 단계 배치, 100억 달러 이상(보도) | 2026-01-14 | [OpenAI](https://openai.com/index/cerebras-partnership/), [Bloomberg](https://www.bloomberg.com/news/articles/2026-01-14/openai-forges-10-billion-deal-with-cerebras-for-ai-computing) |
| Stargate UAE (G42·Khazna, Oracle 등) | 아부다비 1GW 클러스터, 첫 200MW 2026 가동 목표 | 2025-05-22 | [OpenAI](https://openai.com/index/introducing-stargate-uae/) |
| Stargate Norway (Nscale·Aker 50:50) | 나르비크, 초기 230MW(추가 290MW 구상), OpenAI 는 '초기 구매자(offtaker)' | 2025-07-31 | [OpenAI](https://openai.com/index/introducing-stargate-norway/) |

- 해외 Stargate(UAE·노르웨이)는 OpenAI 가 시설 일부를 직접 빌리는 것인지, 운영사에서 컴퓨팅을 사는 것인지 공식 문서로 구분되지 않아 company.colocations 대신 이 표에만 적었다(open_questions)
- NVIDIA(10GW)·AMD(6GW)·Broadcom(10GW) 칩·시스템 계약은 시설이 아니라서 다루지 않음

## 4. 상충 정보 (양쪽 출처, 채택값)

1. **Camellia 면적**: 1,400에이커(The Current, Tier 2) vs 1,441에이커(Area 3 740 + Area 4 701, Tier 3 블로그) → **낮은 값 1,400**. 2,600에이커는 산업단지 전체
2. **Camellia 투자비**: 200억 달러(OpenAI·카운티) vs 300억 달러 이상(Bloomberg 인용, 완공 기준) → 데이터에는 쓰지 않음, 요약에 둘 다 표기
3. **Camellia 계약 기간**: 25년(The Current 7/22) vs '15년, 4년 납부 후 조기 해지 가능'(The Current 8/4, 위원 발언) → 데이터에 쓰지 않음
4. **Camellia 가동**: 보도 '2028 개장' vs 공식 '2028~2032 단계 공급' → 둘 다 같은 범위. 건물 일정을 넣지 않아 채택 문제 없음

## 5. 미확인 (open_questions 와 같음)

- Camellia 의 Stargate 여부(공식 페이지에 'Stargate' 표현 없음)
- PSC Docket 71526 원문: 단계별 MW, 1GW 수요 조정 조건
- 착공 시점(보도 '2027 초', Tier 3 만), Octans GA LLC 와 OpenAI 의 관계, 부지 소유 구조(IDA 명의 감면 구조인지)
- 정확한 필지 좌표(DRI 문서)

## 6. 좌표 근거

| 사이트 | 좌표 | confidence / method | 근거 |
|---|---|---|---|
| Project Camellia | 32.26, -81.29 | low / region_centroid | 보도: 'Rincon 외곽 Savannah Gateway Industrial Hub, Effingham Parkway(SR 30~Blue Jay Rd) 양쪽'. 도로 정보로 잡은 대략 위치이며 위성사진은 쓰지 않음 |

3km 중복 검사: 조지아의 기존 사이트는 corescientific Dalton(34.714, -84.952) 하나로 300km 이상 떨어져 있다. check-draft 의 3km 경고 2건은 기존 crusoe·iren 사이트끼리의 것.

## 7. 제외한 것

- **Abilene 인근 600MW 추가 확장**(2025-09 발표 → 2026-03 철회 보도): oracle 노트와 같이 넣지 않음
- **Oracle·Crusoe·SB Energy 가 소유한 Stargate 부지**: 각 회사 파일(위 표 A)
- **OpenAI 사무실·연구소**: 데이터센터 아님
