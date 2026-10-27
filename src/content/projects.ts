import type { Project } from "./types";

// 포트폴리오 이미지는 NCP(riha 버킷 works/<id>/)에 있다. scripts/upload-work-images.mjs 로 올린다
const WORKS_BASE = "https://kr.object.ncloudstorage.com/riha/works";

// TODO: 실제 프로젝트로 바꾸기. 배열 순서 = 보여줄 순서
export const projects: Project[] = [
  {
    id: "tmoney",
    title: "티머니 둥근바람 폰트 소개 사이트",
    summary:
      "티머니 전용서체 ‘티머니 둥근바람’이 만들어진 배경부터 브랜딩까지를 소개하는 반응형 홍보 사이트. 디자인은 리메인, 개발은 웹아이가 맡았습니다.",
    year: "[연도]",
    role: "개발",
    stack: ["반응형 웹", "웹폰트", "스크롤 인터랙션"],
    featured: true,
    coverColor: "#ef7d00",
    coverSrc: `${WORKS_BASE}/tmoney/tmoney-7.jpg`,
    links: [{ label: "자세히 보기", href: "/works/tmoney" }],
    caseStudy: {
      hero: {
        src: `${WORKS_BASE}/tmoney/tmoney-7.jpg`,
        width: 1600,
        height: 1751,
        alt: "모바일 화면 여섯 개가 주황색 배경 위에 놓인 티머니 둥근바람 사이트",
      },
      credits: [
        { label: "클라이언트", value: "윤디자인그룹 · 티머니" },
        { label: "디자인", value: "리메인 — Creative Director kim junu, UX/UI Designer Lee ji" },
        { label: "개발", value: "웹아이 — [맡은 범위: 퍼블리싱·프론트엔드 등]" },
        { label: "대응 기기", value: "Desktop · Tablet · Mobile" },
      ],
      sections: [
        {
          title: "끝까지 지루하지 않게",
          body: [
            "티머니 전용서체가 만들어진 배경에서 브랜딩으로 이어지는 이야기를 한 흐름으로 담은 사이트입니다. 처음 들어온 사람이 마지막까지 이탈하지 않도록, 기획 단계에서 정한 인터랙션을 스크롤 흐름에 맞춰 구현했습니다.",
            "[구현 방식 한두 줄: 어떤 기법·라이브러리로 인터랙션을 만들었는지]",
          ],
          images: [
            {
              src: `${WORKS_BASE}/tmoney/tmoney-3.jpg`,
              width: 1600,
              height: 4965,
              alt: "티머니 둥근바람 사이트 데스크톱 전체 화면",
              caption: "Desktop 전체 화면 · 최소 너비 1200px",
            },
          ],
        },
        {
          title: "헤더 대신 일러스트 버튼",
          body: [
            "일반적인 상단 메뉴 대신, 컨셉에 맞춘 아기자기한 일러스트 버튼으로 원하는 정보에 바로 갈 수 있게 한 디자인입니다. 버튼마다의 움직임과 화면 전환을 디자인 의도대로 살리는 데 집중했습니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/tmoney/tmoney-4.jpg`,
              width: 1600,
              height: 4581,
              alt: "티머니 둥근바람 사이트 데스크톱 상세 화면들",
              caption: "Desktop 상세 화면",
            },
          ],
        },
        {
          title: "직접 써 보는 서체",
          body: [
            "티머니 둥근바람 Regular와 ExtraBold 두 굵기를 웹폰트로 적용했습니다. 방문자가 문장을 직접 써 보고 굵기와 크기를 바꿔 가며 서체를 확인할 수 있는 영역도 만들었습니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/tmoney/tmoney-6.jpg`,
              width: 1600,
              height: 2583,
              alt: "태블릿 화면의 서체 미리보기와 색상 안내",
              caption: "Tablet 화면 · 서체 미리보기",
            },
          ],
        },
        {
          title: "어떤 기기에서도 같은 경험",
          body: [
            "칼럼 너비를 고정값 대신 백분율로 잡고 기기별 브레이크포인트를 둔 반응형 그리드로 설계했습니다. 데스크톱(최소 1200px), 태블릿, 모바일에서 같은 모듈과 흐름을 유지해 어느 화면에서도 같은 사용자 경험을 전달합니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/tmoney/tmoney-5.jpg`,
              width: 1600,
              height: 2034,
              alt: "데스크톱·태블릿·모바일 화면 설계",
              caption: "기기별 화면 설계",
            },
          ],
        },
      ],
      source: {
        label: "리메인의 프로젝트 소개 보기",
        href: "https://remainlayer.com/work/%ED%8B%B0%EB%A8%B8%EB%8B%88%EB%91%A5%EA%B7%BC%EB%B0%94%EB%9E%8C%ED%8F%B0%ED%8A%B8%EB%A5%BC%EC%86%8C%EA%B0%9C%ED%95%A9%EB%8B%88%EB%8B%A4-%ED%8B%B0%EB%A8%B8%EB%8B%88.html",
      },
    },
  },
  {
    id: "dailypick",
    title: "데일리픽 맞춤형 영양제 서비스",
    summary:
      "약사가 직접 설계한 영양제를 추천해 주는 맞춤형 영양제 커머스. 디자인은 리메인, 개발은 웹아이가 고도몰 샵바이로 구축했습니다.",
    year: "[연도]",
    role: "개발",
    stack: ["고도몰 샵바이", "커머스", "큐레이션"],
    featured: true,
    coverColor: "#0b5aa8",
    coverSrc: `${WORKS_BASE}/dailypick/dailypick-1.jpg`,
    links: [{ label: "자세히 보기", href: "/works/dailypick" }],
    caseStudy: {
      hero: {
        src: `${WORKS_BASE}/dailypick/dailypick-1.jpg`,
        width: 1600,
        height: 930,
        alt: "영양제를 손에 든 사진 위에 데일리픽 앱 화면이 놓인 대표 이미지",
      },
      credits: [
        { label: "클라이언트", value: "데일리픽" },
        { label: "디자인", value: "리메인 — Creative Director Kim junu, UX Jung, UI Lee ji" },
        { label: "개발", value: "웹아이 — 고도몰 샵바이 기반 구축 [맡은 범위]" },
        { label: "결과물", value: "App · UX/UI 가이드" },
      ],
      sections: [
        {
          title: "약사가 추천하는 영양제를 커머스로",
          body: [
            "데일리픽은 IT 기술을 결합해 질병 예방과 건강한 삶의 균형을 돕는 맞춤형 영양제 서비스입니다. 신뢰할 수 있는 약사가 직접 추천해 준다는 점이 가장 큰 강점이라, 서비스 출시에 앞서 이 강점이 화면 곳곳에서 느껴지도록 브랜드와 경험이 함께 설계됐습니다.",
            "웹아이는 이 설계를 고도몰 샵바이 위에 구현했습니다. 상품·주문·결제·회원 같은 커머스의 기본은 샵바이를 바탕으로 하고, 그 위에 데일리픽만의 큐레이션과 관리 경험을 얹었습니다. [샵바이를 고른 이유·연동 방식 한두 줄]",
          ],
        },
        {
          title: "홈: 나에게 맞춘 콘텐츠",
          body: [
            "홈은 사용자마다 맞춰진 콘텐츠를 세로 스크롤로 이어서 볼 수 있게 구성했습니다. 전문가가 관리해 준다는 콘셉트에 맞춰, 지금 먹고 있는 영양제를 관리하는 팝업이 홈에서 바로 보입니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/dailypick/dailypick-3.jpg`,
              width: 1600,
              height: 1908,
              alt: "데일리픽 홈 화면과 추천 콘텐츠 목록",
              caption: "Home",
            },
          ],
        },
        {
          title: "브랜드 소개: 사진과 데이터로 신뢰를",
          body: [
            "일관된 사진 가이드로 브랜드 이미지를 만들고, 건강 효과처럼 사용자가 확실한 근거를 원하는 부분은 직관적인 인포그래픽으로 보여 줍니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/dailypick/dailypick-5.jpg`,
              width: 1600,
              height: 1631,
              alt: "브랜드 소개 화면과 수치를 보여 주는 인포그래픽",
              caption: "Brand Introduce",
            },
          ],
        },
        {
          title: "큐레이션과 목록: 원하는 영양제를 빠르게",
          body: [
            "약사가 설계한 영양제를 사용자 개개인에게 추천하는 큐레이션 화면입니다. 목록에서는 조사로 파악한 영양제 니즈를 상단 버튼으로 두고, 버튼을 누르면 아래 목록이 바로 바뀌도록 했습니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/dailypick/dailypick-8.jpg`,
              width: 1600,
              height: 2073,
              alt: "약사 추천 영양제 큐레이션 화면",
              caption: "Curation",
            },
            {
              src: `${WORKS_BASE}/dailypick/dailypick-9.jpg`,
              width: 1600,
              height: 1269,
              alt: "니즈별 버튼과 영양제 목록 화면",
              caption: "List",
            },
          ],
        },
        {
          title: "주문·결제: 단일 상품과 프로그램을 나눠서",
          body: [
            "단일 상품을 살 때와 프로그램을 살 때 주문서가 나뉩니다. 영양제를 하나씩 살 때는 언제 먹을지까지 정할 수 있어, 큐레이션과 함께 나만의 영양제 구성을 만들 수 있습니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/dailypick/dailypick-10.jpg`,
              width: 1600,
              height: 2028,
              alt: "주문서와 결제 화면",
              caption: "Pay",
            },
          ],
        },
        {
          title: "마이페이지: 관리받는 경험",
          body: [
            "정기 배송 중인 영양제와 큐레이션을 마이페이지에서 한눈에 확인하고 관리합니다. 매일 정해진 시간의 복용 알람과, 꾸준히 먹을수록 받는 뱃지·쿠폰 보상도 함께 설계됐습니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/dailypick/dailypick-12.jpg`,
              width: 1006,
              height: 3350,
              alt: "마이페이지 전체 화면: 복용 현황, 알람, 뱃지",
              caption: "Mypage",
              maxWidth: 420,
            },
          ],
        },
        {
          title: "UI 컴포넌트",
          body: [
            "브랜드의 형태 규칙을 지키는 재사용 컴포넌트로 화면을 만들어, 화면이 늘어나도 데일리픽다운 일관성이 유지되도록 했습니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/dailypick/dailypick-16.jpg`,
              width: 1600,
              height: 1819,
              alt: "버튼, 탭, 상품 카드 등 데일리픽 UI 컴포넌트 모음",
              caption: "UI Component",
            },
          ],
        },
      ],
      source: {
        label: "리메인의 프로젝트 소개 보기",
        href: "https://remainlayer.com/work/%EC%95%BD%EC%82%AC%EA%B0%80%EC%A7%81%EC%A0%91%EC%B6%94%EC%B2%9C%ED%95%B4%EC%A3%BC%EB%8A%94%EC%98%81%EC%96%91%EC%A0%9C%EC%84%9C%EB%B9%84%EC%8A%A4%ED%94%8C%EB%9E%AB%ED%8F%BC-%EB%8D%B0%EC%9D%BC%EB%A6%AC%ED%94%BD.html",
      },
    },
  },
  {
    id: "holeman",
    title: "LG U+ 홀맨 구독형 이벤트 웹앱",
    summary:
      "2008년 그 홀맨이 돌아왔다는 콘셉트로 매달 새로운 이벤트를 여는 구독형 서비스. 디자인은 리메인, 개발은 웹아이가 PHP와 MySQL로 구축했습니다.",
    year: "[연도]",
    role: "개발",
    stack: ["PHP", "MySQL", "이벤트 웹앱"],
    featured: true,
    coverColor: "#111111",
    coverSrc: `${WORKS_BASE}/holeman/holeman-hero.jpg`,
    links: [{ label: "자세히 보기", href: "/works/holeman" }],
    caseStudy: {
      hero: {
        src: `${WORKS_BASE}/holeman/holeman-hero.jpg`,
        width: 1600,
        height: 640,
        alt: "초록색 코드 화면 위에 해킹된 홀맨이 떠 있는 대표 이미지",
      },
      credits: [
        { label: "클라이언트", value: "LG U+" },
        { label: "디자인", value: "리메인 — UI 콘셉트·아이덴티티 디자인" },
        { label: "개발", value: "웹아이 — PHP · MySQL [맡은 범위]" },
        { label: "결과물", value: "이벤트 웹앱 · 월별 이벤트 운영 사이트" },
      ],
      sections: [
        {
          title: "홀맨의 귀환, 매달 열리는 이벤트",
          body: [
            "추억의 캐릭터 홀맨이 돌아왔다는 콘셉트의 구독형 서비스입니다. 7월 ‘홀섬웨어’, 8월 ‘말하는 홀맨’, 10월 ‘행운의 홀춘쿠키’처럼 달마다 새 이벤트가 열리는 구조라, 사용자가 이벤트를 막힘없이 즐길 수 있는 웹앱과 이벤트를 계속 운영할 수 있는 바탕이 함께 필요했습니다.",
            "웹아이는 PHP와 MySQL로 이벤트 참여와 당첨 진행을 처리하는 웹앱과, 매달 이벤트를 운영하기 위한 사이트 전반을 구축했습니다. [응모·당첨 처리 방식, 운영 도구 등 한두 줄]",
          ],
          images: [
            {
              src: `${WORKS_BASE}/holeman/holeman-overview.jpg`,
              width: 1600,
              height: 667,
              alt: "어두운 방에서 휴대폰으로 홀맨 이벤트에 참여하는 모습",
            },
          ],
        },
        {
          title: "7월 · 홀섬웨어: 방탈출 같은 흐름",
          body: [
            "홀맨 폰이 악성 코드에 감염됐다는 설정으로, 해킹을 풀고 홀맨을 되찾는 게임형 이벤트입니다. 방탈출 게임처럼 단계가 이어지는 흐름이라, 사용자가 순서대로 막힘없이 넘어가도록 화면 전환과 진행 상태를 이어 붙이는 데 집중했습니다.",
            "홀맨 폰 안의 잠금화면·음악·메시지·달력·설정 같은 앱 화면을 웹으로 구현해, 해킹된 버전과 정상 버전을 오가며 이야기가 진행됩니다.",
          ],
          layout: "row",
          images: [
            {
              src: `${WORKS_BASE}/holeman/holeman-holesomware-hacked.jpg`,
              width: 1600,
              height: 1599,
              alt: "해킹된 홀맨 폰 화면: 경고 아이콘이 뜬 앱들",
              caption: "holesomware ver.",
            },
            {
              src: `${WORKS_BASE}/holeman/holeman-holesomware-normal.jpg`,
              width: 1600,
              height: 1599,
              alt: "정상으로 돌아온 홀맨 폰 홈 화면",
              caption: "normal ver.",
            },
          ],
        },
        {
          title: "홀맨 폰 안의 앱들",
          body: ["잠금화면부터 홀맨이 보내는 메시지 팝업까지, 그 시절 폰을 쓰는 듯한 화면을 하나씩 웹으로 옮겼습니다."],
          layout: "row",
          images: [
            {
              src: `${WORKS_BASE}/holeman/holeman-lockscreen.jpg`,
              width: 664,
              height: 1380,
              alt: "홀맨이 가운데 있는 잠금화면",
              caption: "잠금화면",
              maxWidth: 320,
            },
            {
              src: `${WORKS_BASE}/holeman/holeman-popup.jpg`,
              width: 489,
              height: 345,
              alt: "홀맨이 보낸 장난스러운 메시지 팝업",
              caption: "메시지 팝업",
              maxWidth: 420,
            },
          ],
        },
        {
          title: "8월 · 말하는 홀맨, 10월 · 행운의 홀춘쿠키",
          body: [
            "해킹 이벤트 뒤에도 정기적으로 이벤트를 열 수 있도록 운영 페이지를 갖췄습니다. 8월에는 상황별로 움직이는 홀맨 애니메이션과 함께 이벤트 당첨을 진행하는 앱을, 10월에는 포춘쿠키를 깨는 애니메이션과 당첨 진행 앱을 만들었습니다.",
          ],
          layout: "row",
          images: [
            {
              src: `${WORKS_BASE}/holeman/holeman-talking.jpg`,
              width: 480,
              height: 1000,
              alt: "말하는 홀맨 이벤트 화면",
              caption: "말하는 홀맨",
              maxWidth: 320,
            },
            {
              src: `${WORKS_BASE}/holeman/holeman-cookie.jpg`,
              width: 640,
              height: 1328,
              alt: "쿠키 다섯 개 중 하나를 고르는 홀춘쿠키 이벤트 화면",
              caption: "행운의 홀춘쿠키",
              maxWidth: 320,
            },
          ],
        },
        {
          title: "달마다 이어지는 운영",
          body: ["이벤트가 바뀌어도 같은 틀 위에서 새 이벤트를 열 수 있게 해, 매달 새로운 즐길 거리를 이어 갈 수 있도록 했습니다."],
          images: [
            {
              src: `${WORKS_BASE}/holeman/holeman-events.jpg`,
              width: 1600,
              height: 553,
              alt: "월별 이벤트 화면들이 나란히 놓인 모습",
            },
            {
              src: `${WORKS_BASE}/holeman/holeman-closing.jpg`,
              width: 1600,
              height: 778,
              alt: "어둠 속에서 홀맨 폰 화면을 들고 있는 손",
            },
          ],
        },
      ],
      source: {
        label: "리메인의 프로젝트 소개 보기",
        href: "https://remainlayer.com/work/2008%EB%85%84%EB%94%94%EC%9E%90%EC%9D%B8%EC%8A%A4%ED%83%80%EC%9D%BC%EB%A1%9C%EA%B5%AC%ED%98%84%ED%95%9CLG%ED%99%80%EB%A7%A8%EB%B8%8C%EB%9E%9C%EB%93%9C%EC%82%AC%EC%9D%B4%ED%8A%B8.html",
      },
    },
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

export function getProject(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
