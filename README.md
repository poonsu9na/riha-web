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
| `photos.ts` | 사진 (`src` 에 `public/` 경로나 원격 URL) |
| `projects.ts` | 포트폴리오 프로젝트와 프로필 |
| `site.ts` | 사이트 이름, 소개, 링크, 메뉴 |

배열 순서가 화면에 나오는 순서다. 최근 것을 앞에 둔다.
