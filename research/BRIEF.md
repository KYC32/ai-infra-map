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
6. **좌표**: coord.confidence — high(공식 주소·인허가 필지, 소수 3자리) / medium(도시 중심) / low(카운티·지역 중심). method 를 정확히 적는다. **위성사진으로 비공개 시설 위치를 추적하지 않는다.**
7. **detail**: 건물·단계 단위 데이터가 충분하면 full, 아니면 lite (buildings 를 비워도 됨 — 화면이 MW·일정으로 자동 생성).
8. 회사 항목: id(소문자-하이픈), group(miner/neocloud/hyperscaler/korea), ticker, color(파스텔 #rrggbb — 기존 회사색·상태색 #2ea88a #3fbf96 #e8825a #9aa6bd #b9bfcc 과 다르게), hq_country, summary_ko/en(1~2문장), metrics(선택, 출처 포함).
9. 모르는 값은 지어내지 말고 생략하거나 open_questions 에 적는다. 상충하면 낮은 값을 채택하고 notes.md 에 양쪽을 적는다.
10. 작업이 끝나면 `node scripts/check-draft.mjs <회사id>` 를 실행해 오류가 없게 고친다.
