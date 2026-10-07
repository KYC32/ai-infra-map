# AI Infra Map — AI 인프라 지도

**누가 몇 GW를 확보했고, 무엇이 언제 가동되는가.**
채굴→AI 전환 상장사, 네오클라우드, 하이퍼스케일러 메가 프로젝트, 한국 AI 데이터센터의 현황을
전략게임풍 3D 지구본과 캠퍼스로 보여주는 비공식 지도입니다.

> 본 프로젝트는 여기 등장하는 어떤 회사와도 무관한 개인의 비공식 프로젝트입니다. 모든 수치는 공개 자료에서 수집했고 항목마다 출처를 표기했습니다. 투자 조언이 아닙니다.

현재 상태: **M1 완료** — 데이터 모델 v2(회사·참여사·시점 이력)와 시간 함수. 화면은 아직 IREN 데이터만 표시. 진행 계획은 아래 "로드맵" 참고.

## 로드맵

| 단계 | 내용 |
|---|---|
| M0 | iren-3d 복사·이름 변경, 번들 크기 검사 |
| M0.5 | 번들 다이어트 (캠퍼스·녹화 코드 분할) |
| M1 | 데이터 모델 v2 (회사·참여사·phases 시간 모델) + 시간 함수 |
| M2 | 다회사 지구본 (인스턴싱 핀, 회사색, 순위표, 회사 필터) |
| M3 | 타임라인 슬라이더 2024→2028 |
| M4 | 1차 15개 회사 리서치·병합 |
| M5 | 모바일·영상·마감 |

## 화면 구성

| 화면 | 내용 |
|---|---|
| 지구본 | 육지 = 미리 계산한 h3 육각 타일, 핀 높이 = √계통전력, 링 펄스 속도 = 상태 |
| 캠퍼스 | 데이터홀 1블록 = 75MW gross(Horizon 1동). 상태별 외형, 크레인·트럭·전력 흐름 애니메이션 |
| 오버레이 | KPI, 상태 범례(클릭 = 필터), 사이트 목록, 상세 패널(타임라인·추정·출처), 한/영 토글 |

딥링크: `/#site=childress` 처럼 사이트 id 를 붙이면 그 캠퍼스로 바로 열립니다.

## 개발

```bash
npm install
npm run dev        # http://localhost:5173
npm test           # 캠퍼스 배치 로직 단위 테스트
npm run build      # validate → 빌드 (dist/)
```

## 데이터 갱신 방법 (데이터 모델 v2)

```
data/companies.json              회사·프로그램 목록
data/companies/<회사id>.json      { company_id, as_of, sites: [...] }   ← 회사 1개 = 파일 1개
public/data/infra.json           npm run data 가 합친 결과 (자동 생성, git 제외)
```

1. 회사 파일을 수정합니다. 모든 수치에는 `source`(URL)를 남깁니다.
   - 건물 상태는 **바뀐 시점 목록** `phases` 로 적습니다. 현재 상태는 날짜를 넣어 계산합니다.
     ```json
     "phases": [
       { "status": "under_construction", "from": "2025-12", "basis": "reported", "source": "https://…" },
       { "status": "operating", "from": "2026-Q4", "basis": "target", "source": "https://…" }
     ]
     ```
     - `basis`: `reported`(발표된 사실) · `target`(회사 목표, 기간의 끝으로 해석) · `estimate`(우리 추정 — `estimates[]` 에 설명 필수)
     - 날짜 형식: `2026` · `2026-Q4` · `2026-H2` · `2026-08` · `2026-08-13`
   - 계통 전력은 `power` 이력(`secured_mw` 확보, `energized_mw` 통전)으로 적습니다.
   - 기존 건물 전력을 재사용하는 전환은 `replaces`. 전환 건물이 시운전·가동에 들어가면 기존 건물 용량을 넘겨받습니다.
   - 공동 프로젝트는 사이트를 한 번만 적고 `parties`(개발·소유·운영·입주)로 참여사를 표시합니다.
2. `npm run validate` 로 검사합니다 (스키마, 참조, 날짜 순서, 2024~2028 매달 전력 합계, 좌표 영토, 회사색).
3. 사이트 좌표를 바꿨다면 `npm run geo` 로 지구본 타일을 다시 만듭니다 (validate 가 알려 줍니다).
4. `git push` 하면 자동 배포됩니다.

## 영상 만들기 (X·쇼츠용)

같은 스토리보드로 16:9(1920×1080)와 9:16(1080×1920) 영상을 자동으로 만듭니다.
헤드리스 Chrome(임시 프로필)이 화면을 한 프레임씩 그려 PNG 로 저장하고, 끝나면 ffmpeg 가 mp4 로 합칩니다.

```bash
npm run build
node scripts/record-server.mjs all              # 16:9 + 9:16 → video/iren-x-ko.mp4, video/iren-shorts-ko.mp4
node scripts/record-server.mjs x --lang=en      # 영어 자막 16:9
node scripts/record-server.mjs shorts --only=3,13,25   # 그 시점만 미리보기 PNG (video/preview-*.png)
```

- 장면 순서·카메라 동선·자막은 `src/record/storyboard.js` 의 시간표만 고치면 됩니다.
- 영상 위 라벨·자막은 `src/record/overlay.js` 가 2D 캔버스에 직접 그립니다 (HTML 라벨은 캡처되지 않음).
- 렌더 루프를 멈추고 프레임마다 시각을 지정하므로, 컴퓨터 속도와 상관없이 정확히 30fps 로 찍힙니다.
- 필요 조건: Google Chrome, ffmpeg (`brew install ffmpeg`). 결과물 `video/` 폴더는 git 에 올리지 않습니다.

## 배포 (Vercel)

1. https://vercel.com 에 GitHub 계정으로 로그인 → **Add New → Project** → `KYC32/ai-infra-map` Import
2. 프레임워크는 Vite 로 자동 감지됩니다 (Build `npm run build`, Output `dist`). 그대로 **Deploy**
3. 이후 `main` 브랜치에 push 할 때마다 자동 배포, PR 마다 프리뷰 URL 이 생깁니다.

## 기술 스택

Vite 8 · React 19 · @react-three/fiber 9 · @react-three/drei 10 · three 0.186 · zustand 5 · zod 4 · lucide-react

육지 타일과 경계선은 `npm run geo`(h3-js + Natural Earth 110m + us-atlas)로 미리 계산해 `public/data/land-hex.json`, `borders.json` 에 저장합니다.
사이트 주변 반경 6도는 더 작은 육각형(h3 해상도 4)으로 그립니다. 사이트를 추가했다면 `npm run geo` 를 다시 실행하세요.

캐나다·호주 주 경계(BC주·남호주 강조 포함)는 Natural Earth 50m 원본에서 가져옵니다.
처음 한 번 `npm run geo:fetch` 로 원본(2.3MB)을 `scripts/.cache/` 에 받아 두면 됩니다. 이 폴더는 git 에 올리지 않습니다.
캐시가 없으면 `npm run geo` 는 그 부분만 건너뛰고 나머지를 정상 생성합니다.
브라우저 번들에는 h3/지도 라이브러리가 들어가지 않습니다.

## 폴더

```
public/data/sites.json      사이트 현황 (유일한 진실)
public/data/land-hex.json   지구본 육지 타일 (npm run geo 로 생성)
public/data/borders.json    국경·해안선·미국 주 경계 (npm run geo 로 생성)
src/data/                   스키마(zod), 로더·KPI 계산, 상태 색상표
src/scene/                  3D: GlobeView, SiteView, CameraRig, layoutCampus, buildings/
src/ui/                     HTML 오버레이 패널들
src/i18n/                   한/영 문자열
scripts/                    validate-sites, build-land-hex, build-borders
docs/research-brief.md      참고 사례·코드·데이터 출처 리서치
```

## 지도 데이터 출처

- Natural Earth (퍼블릭 도메인): 국경·해안선 110m(world-atlas 경유), 주·도 경계 50m — https://www.naturalearthdata.com
- us-atlas: 미국 주 경계 (U.S. Census Bureau 자료 기반)
- h3-js: 육각 격자 (Uber H3)

## 참고한 사례

- Dilum Sanjaya 의 WareTrack 데모 (x.com/DilumSanjaya/status/2106426962738880879) — 전체 콘셉트
- austin410203/warehouse, cahitberkay/waretrack — 카메라·조명·"스토어가 진실, 3D 는 투영" 구조 (코드는 복사하지 않음)
- dgreenheck/simcity-threejs-clone — 상태별 건물 단계 표현
- vasturiano/three-globe — 지구본 좌표계·레이어 아이디어
