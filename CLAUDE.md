@AGENTS.md

# riha-web

riha.kr 개인 사이트. 읽기(읽은 책 · 밑줄 문장), 사진, 개발 포트폴리오 세 가지를 담는다.

## 스택

- Next.js 16 (App Router, `cacheComponents` 켜짐) · React 19 · TypeScript
- 스타일은 CSS Modules + `src/app/globals.css` 의 CSS 변수. Tailwind 없음.
- 글꼴: 나눔명조(제목, `--font-serif`) + Noto Sans KR(본문, `--font-sans`), `next/font/google`

## 구조

- `src/app/` — 라우트. `/`, `/reading`(읽은 책), `/reading/quotes`(밑줄 문장), `/photos`, `/works`
- `src/components/` — 공용 컴포넌트(SiteHeader, SiteFooter, PageIntro, SectionHeader, BookCover, PhotoTile, Stars). 섹션 전용은 `components/<섹션>/` 아래.
- `src/content/` — 콘텐츠 데이터와 타입. 지금은 TS 파일에 직접 적는다. 배열 순서가 곧 노출 순서(최근 것이 앞).
- 사진 파일은 저장소(`public/`)에 넣지 않는다. `npm run upload-photos` 로 NCP Object Storage 에 800px·1600px 두 크기를 올리고 `photos.ts` 에는 id·크기·제목만 적는다. Vercel 무료 플랜 한도 때문에 이미지 최적화는 꺼 두었다(`images.unoptimized`).

## 디자인 원칙

- 시안 A2 "서재" 톤: 미색 배경(`--bg`), 먹색 글자(`--ink`), 베리 페리 포인트(`--accent`, PANTONE 17-3938 `#6667AB`), 가는 선으로 구분.
- **날짜는 화면에 표시하지 않는다.** 업데이트 공백이 보이는 게 싫어서 정한 원칙. 정렬은 데이터 배열 순서로만.
- 콘텐츠가 비어 있는 자리는 `[책 제목]` 같은 대괄호 자리표시로 둔다.
- 모바일(375px)에서 가로 스크롤이 생기지 않게.

## 명령

```bash
npm run dev    # http://localhost:3000
npm run lint
npm run build
```
