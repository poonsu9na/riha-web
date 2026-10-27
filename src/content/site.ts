export const site = {
  name: "RIHA",
  url: "https://riha.kr",
  domain: "riha.kr",
  description: "읽고, 찍고, 만드는 사람의 기록",
  intro: "웹아이에서 웹 개발을 맡고 있습니다. 디자인 파트너 리메인과 함께 브랜드 사이트, 이벤트 웹앱, 쇼핑몰을 만들고, 오픈한 뒤에도 오래 고쳐 가며 키웁니다.",
  email: "yh@webi.kr",
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
