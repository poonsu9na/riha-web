import type { Project } from "./types";

// TODO: 실제 프로젝트로 바꾸기. 배열 순서 = 보여줄 순서
export const projects: Project[] = [
  {
    id: "featured",
    title: "[대표 프로젝트]",
    summary: "[어떤 문제를 어떻게 풀었는지 한 줄]",
    year: "[연도]",
    period: "[기간]",
    role: "[역할]",
    stack: ["[기술 스택]"],
    featured: true,
    problem: "[어떤 문제가 있었는지]",
    solution: "[무엇을 어떻게 만들었는지]",
    result: "[결과. 가능하면 숫자로]",
    coverColor: "#dcd8ce",
    links: [
      { label: "사이트", href: "" },
      { label: "GitHub", href: "" },
    ],
  },
  {
    id: "riha-web",
    title: "riha-web",
    summary: "지금 보고 있는 이 사이트. 책에서 주운 문장과 일상 사진, 만든 것들을 한곳에 모았습니다.",
    year: "2026",
    role: "기획·디자인·개발",
    stack: ["Next.js", "TypeScript"],
    featured: true,
    coverColor: "#2f5d50",
    links: [{ label: "GitHub", href: "https://github.com/poonsu9na/riha-web" }],
  },
  {
    id: "project-3",
    title: "[프로젝트 이름]",
    summary: "[무엇을 왜 만들었는지 한 줄]",
    year: "[연도]",
    role: "[역할]",
    stack: ["[기술 스택]"],
    coverColor: "#dcd8ce",
    links: [],
  },
  {
    id: "project-4",
    title: "[프로젝트 이름]",
    summary: "[무엇을 왜 만들었는지 한 줄]",
    year: "[연도]",
    role: "[역할]",
    stack: ["[기술 스택]"],
    coverColor: "#dcd8ce",
    links: [],
  },
];

export const profile = {
  // TODO: 실제 정보로 바꾸기
  skills: [
    { label: "주력", value: "TypeScript · React · Next.js" },
    { label: "다룰 줄 앎", value: "[기술 1] · [기술 2] · [기술 3]" },
    { label: "경력", value: "[회사] · [기간]" },
  ],
  resumeHref: "",
};
