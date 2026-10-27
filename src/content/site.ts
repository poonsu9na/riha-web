export const site = {
  name: "RIHA",
  url: "https://riha.kr",
  domain: "riha.kr",
  description: "읽고, 찍고, 만드는 사람의 기록",
  // TODO: 실제 소개 문구와 연락처로 바꾸기
  intro: "[직무] 개발자 [이름]입니다. [어떤 걸 만드는 사람인지 한두 줄.]",
  email: "",
  links: [
    { label: "Threads", href: "https://www.threads.com/@l.riha_" },
    { label: "Instagram", href: "" },
  ],
} as const;

export const navItems = [
  { label: "읽기", href: "/reading" },
  { label: "사진", href: "/photos" },
  { label: "포트폴리오", href: "/works" },
  { label: "소개", href: "/#about" },
] as const;
