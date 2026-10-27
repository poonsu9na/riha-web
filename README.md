# RIHA · riha.kr

읽고, 찍고, 만드는 사람의 기록.

- **읽기** — 읽은 책 목록과 책에서 옮겨 적은 밑줄 문장
- **사진** — 설명도 날짜도 없이 찍은 걸 그냥 올려 두는 곳
- **포트폴리오** — 만든 것들

Next.js(App Router) + TypeScript + CSS Modules.

## 개발

```bash
npm install
npm run dev      # http://localhost:3000
npm run lint
npm run build
```

## 콘텐츠 수정

`src/content/` 의 파일을 고치면 된다.

| 파일 | 내용 |
|---|---|
| `books.ts` | 읽은 책 · 읽는 중 · 읽고 싶은 책 |
| `quotes.ts` | 밑줄 문장 (`bookId` 로 책과 연결) |
| `photos.ts` | 사진 (NCP 에 올린 사진의 id·크기·제목) |
| `projects.ts` | 포트폴리오 프로젝트와 프로필 |
| `site.ts` | 사이트 이름, 소개, 링크, 메뉴 |

배열 순서가 화면에 나오는 순서다. 최근 것을 앞에 둔다.

## 포트폴리오 상세 페이지 추가

`projects.ts` 의 프로젝트에 `caseStudy` 를 넣으면 `/works/<id>` 상세 페이지가 생긴다.

1. 이미지를 NCP 에 올린다 (가로 1600px JPEG, `works/<id>/` 아래).

   ```bash
   npm run upload-work-images -- <id> ~/Desktop/이미지폴더
   ```

2. 출력된 `{ src, width, height, alt }` 줄을 `caseStudy` 의 `hero`·`sections[].images` 에 넣고 설명을 고친다.
   긴 전체 화면 캡처도 잘라내지 않고 원본 비율 그대로 펼쳐서 보인다.
   폰 화면 하나짜리 캡처는 `maxWidth`(예: 320)로 크기를 제한하고,
   여러 장을 나란히 놓으려면 섹션에 `layout: "row"` 를 준다.
3. 목록에서 들어갈 수 있게 `links` 에 `{ label: "자세히 보기", href: "/works/<id>" }` 를 넣는다.

## 사진 추가

사진 파일은 저장소에 넣지 않고 NCP Object Storage(`riha` 버킷 `photos/`)에 올린다.
Vercel 무료 플랜의 이미지 변환 한도와 전송량을 아끼려고 크기별로 미리 만들어 두고
`next/image` 최적화 없이(`images.unoptimized`) 그대로 쓴다.

1. `.env.local` 에 `NCP_ACCESS_KEY`, `NCP_SECRET_KEY`, `NCP_BUCKET=riha` 를 넣는다 (커밋되지 않음)
2. 사진을 올린다. 파일명이 id 가 되고, 800px(목록용)·1600px(크게 보기용) 두 장이 올라간다.
   NCP 에 같은 id 가 이미 있거나 올릴 파일끼리 id 가 겹치면 아무것도 올리지 않고 멈춘다.
   일부러 바꿔 올릴 때만 `--overwrite` 를 붙인다.

   ```bash
   npm run upload-photos -- ~/Desktop/새사진폴더
   ```

3. 끝에 출력되는 `ncp("id", 가로, 세로, "[제목]", "[설명]"),` 줄을 `photos.ts` 맨 앞에 붙이고 제목·설명을 고친 뒤 커밋·푸시한다.
