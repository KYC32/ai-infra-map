# 리서치 브리프 — AI Infra Map 회사 조사

목표: 한 회사의 AI 데이터센터 사이트를 데이터 모델 v2 로 정리한 **초안 JSON** 을 만든다.
출력: `research/drafts/<회사id>.json` (형식: `research/schema.json` 의 Draft) + `research/drafts/<회사id>.notes.md`
기준일(as_of): 조사한 날짜 (YYYY-MM-DD). 참고 예시: `data/companies/iren.json`, `data/companies.json`

## 반드시 지킬 규칙
1. **출처 등급**
   - Tier 1 (수치·상태의 근거로 사용): SEC 공시(10-K/10-Q/8-K/6-K/20-F), DART, 회사 보도자료, 실적 발표 자료·녹취, 회사 공식 사이트, 인허가·전력회사(ERCOT 등) 문서
   - Tier 2: 주요 언론(Reuters, Bloomberg, DCD 등) — 단독 출처면 claim 의 verification 을 `single_source` 로
   - Tier 3: 채용공고, X, 블로그 — **estimates[] 에만** 사용
2. **모든 수치에 source URL**. 문장은 복사하지 말고 사실만 옮긴다. claim 의 quote 는 25단어 이내.
3. **상태 이력(phases)**: 건물(또는 단계)마다 상태가 바뀐 시점을 적는다.
   - status: planned / under_construction / commissioning / operating / decommissioning / retired
   - basis: reported(발표된 사실) / target(회사 목표 — 기준일 이후 단계는 반드시 target 또는 estimate) / estimate(우리 추정 — estimates[] 에 설명 필수)
   - 날짜 형식: 2026 / 2026-Q4 / 2026-H2 / 2026-08 / 2026-08-13
   - 기준일에 건설중인 건물은 progress(0~1)가 필요. 공개 수치가 없으면 발표 문구("late-stage" 등)를 근사하고 estimates[] 에 근거를 적는다.
4. **전력**: `power` 이력에 secured_mw(계통 연결 확보)와 energized_mw(통전). 건물 MW 는 `mw_basis`(it / gross / grid)를 반드시 표시. IT 만 공개되면 it_mw 만 적는다(화면에서 ×1.3 환산·추정 표시).
   - 같은 시점에 건물 gross 합계가 secured_mw 의 105% 를 넘으면 안 된다.
5. **공동 프로젝트·입주사**: 시설은 한 번만 적고 `parties`(developer / owner / operator / tenant / end_user / financier)로 표시. `primary` 는 핀 색·순위가 귀속될 회사(보통 developer 또는 owner).
   - 예: 채굴사 캠퍼스에 CoreWeave 가 입주 → primary=채굴사, parties 에 coreweave(tenant). (아직 companies.json 에 없는 회사 id 를 쓰면 open_questions 에 적는다)
5-1. **primary 예외**: 지도 범위 밖의 도매 개발사(Vantage·Related·STACK 등)가 짓고 한 회사가 단독 운영·임차하는 캠퍼스는 그 운영사를 primary 로 (예: Oracle 운영 Stargate 부지). 지도 범위 안 회사(crusoe 등)가 개발한 곳은 그 회사가 primary.
5-2. **코로케이션·외부 조달**: 다른 회사 시설의 일부를 빌려 쓰는 곳은 sites 가 아니라 `company.colocations[]`(name, country, host, mw|null, status, basis, source)에 적는다 → 지도·순위 합계 미포함, 순위표에 병기. 하이퍼스케일러의 네오클라우드 계약은 해당 사이트 parties 의 end_user 로만(중복 사이트 금지).
5-3. **실제 가동 확인이 안 되는 대형 발표**는 사용자 결정에 따라 확인된 가동분만 반영하고, 나머지는 estimates[] 에 "확인되면 추가" 로 적는다 (예: Nebius 바인랜드).
6. **좌표**: coord.confidence — high(공식 주소·인허가 필지, 소수 3자리) / medium(도시 중심) / low(카운티·지역 중심). method 를 정확히 적는다. **위성사진으로 비공개 시설 위치를 추적하지 않는다.**
7. **detail**: 건물·단계 단위 데이터가 충분하면 full, 아니면 lite (buildings 를 비워도 됨 — 화면이 MW·일정으로 자동 생성).
8. 회사 항목: id(소문자-하이픈), group(miner/neocloud/hyperscaler/korea), ticker, color(파스텔 #rrggbb — 기존 회사색·상태색 #2ea88a #3fbf96 #e8825a #9aa6bd #b9bfcc 과 다르게), hq_country, summary_ko/en(1~2문장), metrics(선택, 출처 포함).
8-1. **참여만 하는 회사**(AI 랩·칩 회사·개발사·금융사 등 자기 사이트가 없는 회사)는 parties 에 쓰고, 회사 항목이 없으면 open_questions 에 적는다 — 병합 때 group "partner" 로 추가한다.
8-2. **IT 만 공개된 건물**은 화면에서 PUE 1.3 으로 총 전력을 환산한다. 그러면 계통 전력을 넘는 경우(예: 500MW 계통에 IT 438MW)에는 건물에 `pue`(1~2)를 지정하고 estimates[] 에 근거를 적는다. 검증은 "그 달 실제로 전력을 쓰는 건물(가동·시운전·폐쇄중) 합계 ≤ 확보 전력×1.05" 도 검사한다.
9. 모르는 값은 지어내지 말고 생략하거나 open_questions 에 적는다. 상충하면 낮은 값을 채택하고 notes.md 에 양쪽을 적는다.
9-1. **사용자 개인정보를 외부로 보내지 않는다.** SEC EDGAR 등은 User-Agent 에 연락처를 요구하지만, 사용자 이메일을 넣지 말고 `AI-Infra-Map research (github.com/KYC32/ai-infra-map)` 를 쓴다. 403 이 나면 그 문서를 인용한 보도자료·회사 IR 사본으로 대신하고 notes 에 적는다.
10. 작업이 끝나면 `node scripts/check-draft.mjs <회사id>` 를 실행해 오류가 없게 고친다.
