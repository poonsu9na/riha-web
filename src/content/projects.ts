import type { Project } from "./types";

// 포트폴리오 이미지는 NCP(riha 버킷 works/<id>/)에 있다. scripts/upload-work-images.mjs 로 올린다
const WORKS_BASE = "https://kr.object.ncloudstorage.com/riha/works";

// 배열 순서 = 보여줄 순서 (포트폴리오 목록·홈 공통)
export const projects: Project[] = [
  {
    id: "caremedi",
    title: "케어메디 의료진 웹 구축",
    summary:
      "개인용 헬스케어 서비스를 의료진 영역으로 넓힌 케어메디의 의료진 전용 웹. 헬스케어 디바이스로 모은 생체 데이터를 대시보드로 보여 주는 화면을 기획·PMO W2R GROUP과 함께 웹아이가 개발했습니다.",
    year: "2025",
    role: "개발",
    stack: ["Chart.js", "Canvas", "의료진 대시보드", "[기술 스택]"],
    featured: true,
    coverColor: "#4caf6a",
    coverSrc: `${WORKS_BASE}/caremedi/caremedi-compare.jpg`,
    links: [{ label: "자세히 보기", href: "/works/caremedi" }],
    caseStudy: {
      hero: {
        src: `${WORKS_BASE}/caremedi/caremedi-summary.jpg`,
        width: 1600,
        height: 1462,
        alt: "환자 한 명의 혈당·볼러스·기저 그래프와 혈당·인슐린 개요를 모은 의료진 웹 요약 화면",
      },
      credits: [
        { label: "클라이언트", value: "케어메디" },
        { label: "PMO·기획", value: "W2R GROUP" },
        { label: "개발", value: "웹아이 — Chart.js 기반 데이터 시각화, [사용 기술·맡은 범위]" },
        { label: "범위", value: "Web · Admin" },
      ],
      sections: [
        {
          title: "개인용 서비스에서 의료진의 도구로",
          body: [
            "케어메디는 개인용 헬스케어 서비스를 운영해 왔습니다. 의료진 웹은 이 서비스를 전문가 영역으로 넓혀, 자사 헬스케어 디바이스가 모은 생체 데이터를 의료진 대시보드에서 바로 보고 환자 관리와 진단에 쓸 수 있도록 만든 플랫폼입니다.",
            "웹아이는 디바이스 데이터를 의료진 화면에 동기화해 보여 주는 대시보드와, 환자별로 데이터를 살펴보는 화면들을 개발했습니다. [데이터 연동 방식·구조 한두 줄]",
          ],
        },
        {
          title: "담당 환자만, 권한만큼만",
          body: [
            "의료진과 담당 환자를 1:1 또는 1:N으로 매칭하고, 승인된 의료진만 지정된 환자의 정보를 볼 수 있게 했습니다. 직군이나 권한 레벨에 따라 열람 범위도 달라져, 민감한 개인 의료 데이터가 필요 이상으로 노출되지 않습니다.",
          ],
          items: [
            "의료진–환자 1:1 · 1:N 매칭",
            "승인된 의료진만 지정 환자 정보 접근",
            "직군·권한 레벨별 데이터 열람 범위 제한",
          ],
        },
        {
          title: "데이터를 판단 근거로",
          body: [
            "디바이스에서 들어온 로우 데이터를 바탕으로 환자의 건강 상태를 정량적인 지표로 정리했습니다. 기간을 나눠 두 구간을 나란히 비교하거나 한 달을 달력으로 훑어볼 수 있어, 의료진이 이상 징후와 변화 추이를 빠르게 짚을 수 있습니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/caremedi/caremedi-compare.jpg`,
              width: 1600,
              height: 1393,
              alt: "두 기간의 혈당 개요, 인슐린 개요, 혈당·볼러스·기저 그래프를 좌우로 나란히 놓은 비교 화면",
              caption: "비교",
            },
            {
              src: `${WORKS_BASE}/caremedi/caremedi-monthly.jpg`,
              width: 1600,
              height: 1093,
              alt: "날짜별 요약 수치를 달력 칸에 채운 월간요약 화면",
              caption: "월간요약",
            },
          ],
        },
        {
          title: "Chart.js 위에 의료용 차트를 더하다",
          body: [
            "시계열 그래프는 앞으로 쌓일 대용량 데이터와 기능 확장을 고려해 Chart.js를 기반으로 구성했습니다. 표준 라이브러리로는 그릴 수 없는 의료 특화 뷰는 캔버스 드로잉을 직접 커스터마이징해, 의료진이 읽기 편한 화면으로 만들었습니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/caremedi/caremedi-settings.jpg`,
              width: 1600,
              height: 972,
              alt: "시간대별 설정값을 계단형 그래프와 목록으로 보여 주는 설정 화면",
              caption: "설정",
            },
          ],
        },
        {
          title: "기록과 사용 내역",
          body: [
            "그래프 외에도 이벤트 기록과 패치 사용 내역을 기간별 목록과 표로 정리해, 의료진이 필요한 원자료를 바로 찾아볼 수 있게 했습니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/caremedi/caremedi-records.jpg`,
              width: 1600,
              height: 782,
              alt: "카테고리 탭과 일시별 이벤트 목록이 있는 기록 화면",
              caption: "기록",
            },
            {
              src: `${WORKS_BASE}/caremedi/caremedi-patch.jpg`,
              width: 1600,
              height: 903,
              alt: "패치 사용 수와 사용 시간, 패치별 상세 리스트를 표로 보여 주는 패치 사용 내역 화면",
              caption: "패치 사용 내역",
            },
          ],
        },
      ],
      source: {
        label: "W2R GROUP의 프로젝트 소개 보기",
        href: "https://w2rgroup.kr/caremedi",
      },
    },
  },
  {
    id: "ussec",
    title: "미국대두협회 웹사이트 통합 리뉴얼",
    summary:
      "여러 개의 개별 사이트로 나뉘어 있던 미국대두협회(USSEC)의 페이지를 하나의 공식 홈페이지와 통합 관리자로 합친 프로젝트. 기획·PMO는 W2R GROUP, 개발은 웹아이가 맡았습니다.",
    year: "2025",
    role: "개발",
    stack: ["[기술 스택]", "통합 관리자", "CMS"],
    featured: true,
    coverColor: "#1f6b3a",
    coverSrc: `${WORKS_BASE}/ussec/ussec-main.jpg`,
    links: [{ label: "자세히 보기", href: "/works/ussec" }],
    caseStudy: {
      hero: {
        src: `${WORKS_BASE}/ussec/ussec-main.jpg`,
        width: 1600,
        height: 918,
        alt: "미국대두협회 메인, 협회 소개, 소이오일 마스터 프로그램, 인증서 및 보고 페이지",
      },
      credits: [
        { label: "클라이언트", value: "미국대두협회 (U.S. Soybean Export Council)" },
        { label: "PMO·기획", value: "W2R GROUP" },
        { label: "개발", value: "웹아이 — [사용 기술], 웹·통합 관리자 [맡은 범위]" },
        { label: "범위", value: "Web · Admin" },
      ],
      sections: [
        {
          title: "흩어진 사이트를 하나로",
          body: [
            "미국대두협회의 콘텐츠는 여러 개의 개별 사이트로 나뉘어 운영되고 있었고, 사이트마다 관리자 페이지도 따로였습니다. 공통 정보 하나를 바꾸려 해도 사이트별로 같은 작업을 반복해야 해, 누락이나 데이터 불일치가 생기기 쉬운 구조였습니다.",
            "이번 리뉴얼에서는 이 페이지들을 하나의 도메인, 하나의 공식 홈페이지로 합쳤습니다. 사용자 중심으로 메뉴를 다시 정리해 원하는 정보까지 가는 단계를 줄이고, 사이트마다 달랐던 디자인 가이드도 하나로 맞췄습니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/ussec/ussec-laptop.jpg`,
              width: 1600,
              height: 1600,
              alt: "노트북 화면에 띄운 미국대두협회 메인 페이지",
              maxWidth: 720,
            },
          ],
        },
        {
          title: "PC와 모바일에서 같은 구조로",
          body: [
            "메인, 협회 소개, 소이오일 마스터 프로그램처럼 성격이 다른 페이지도 같은 틀 안에서 보이도록 공통 구조로 만들었습니다. [반응형 대응 범위 한 줄]",
          ],
          images: [
            {
              src: `${WORKS_BASE}/ussec/ussec-responsive.jpg`,
              width: 1600,
              height: 890,
              alt: "미국대두협회 메인과 소이오일 마스터 프로그램 페이지의 PC·모바일 화면",
              caption: "PC · Mobile",
            },
          ],
        },
        {
          title: "한 곳에서 관리하는 통합 관리자",
          body: [
            "여러 페이지의 콘텐츠 업데이트와 설정을 하나의 관리자에서 처리하도록 통합했습니다. 공지사항, 자료, 리포트 같은 콘텐츠는 코드 수정 없이 템플릿 형태로 등록·수정하고, 노출과 비공개 전환도 관리자가 직접 제어합니다. 담당자가 바뀌어도 별도의 기술 교육 없이 바로 운영할 수 있는 것을 목표로 했습니다.",
          ],
          items: [
            "통합 콘텐츠·페이지 관리",
            "템플릿 기반 콘텐츠 등록·수정 (CMS)",
            "콘텐츠 노출·비공개 전환",
          ],
          images: [
            {
              src: `${WORKS_BASE}/ussec/ussec-board.jpg`,
              width: 1600,
              height: 748,
              alt: "공지사항 목록과 리포트 목록 페이지",
              caption: "공지사항 · 리포트",
            },
          ],
        },
        {
          title: "역할별 권한과 활동 이력",
          body: [
            "최고 관리자부터 실무 운영자까지 역할에 따라 접근할 수 있는 메뉴와 데이터 범위를 나눠, 내부 보안 정책을 지키면서 권한 밖의 조작으로 생기는 오류를 막았습니다. 관리자 활동 이력도 남겨 데이터 변경을 추적할 수 있습니다.",
          ],
          items: ["계층별 메뉴·데이터 접근 제어", "관리자 활동 이력 관리"],
        },
        {
          title: "늘어날 콘텐츠를 위한 구조",
          body: [
            "한 번의 리뉴얼로 끝나지 않도록, 새 메뉴나 카테고리를 대대적인 구조 변경 없이 추가할 수 있게 페이지를 모듈 단위로 설계했습니다. 공통 요소를 고치면 사이트 전체에 바로 반영되는 구조라 이후 유지보수 부담도 줄였습니다.",
          ],
        },
      ],
      source: {
        label: "W2R GROUP의 프로젝트 소개 보기",
        href: "https://w2rgroup.kr/ussec",
      },
    },
  },
  {
    id: "studioc1",
    title: "스튜디오C1 불꽃야구 OTT 플랫폼 구축",
    summary:
      "스튜디오C1이 만드는 '불꽃야구'를 자체 채널로 서비스하기 위한 OTT 플랫폼. VOD와 자체 라이브, 도네이션, 팬 커뮤니티, 통합 관리자를 새로 구축했고, 기획·PMO는 W2R GROUP, 개발은 웹아이가 맡았습니다.",
    year: "2025",
    role: "개발",
    stack: ["Next.js", "OTT", "라이브 스트리밍", "관리자 시스템"],
    featured: true,
    coverColor: "#0b5cff",
    coverSrc: `${WORKS_BASE}/studioc1/studioc1-main.jpg`,
    links: [{ label: "자세히 보기", href: "/works/studioc1" }],
    caseStudy: {
      hero: {
        src: `${WORKS_BASE}/studioc1/studioc1-main.jpg`,
        width: 1600,
        height: 1464,
        alt: "라이브 일정표와 불꽃야구 에피소드가 보이는 콘텐츠 화면",
      },
      credits: [
        { label: "클라이언트", value: "스튜디오C1 (StudioC1)" },
        { label: "PMO·기획", value: "W2R GROUP" },
        { label: "개발", value: "웹아이 — [사용 기술], 웹·관리자 시스템 [맡은 범위]" },
        { label: "범위", value: "Web · Admin" },
      ],
      sections: [
        {
          title: "우리 채널에서 보는 불꽃야구",
          body: [
            "스튜디오C1에는 직접 만든 프로그램을 내보낼 자체 유통 채널이 없었습니다. 영상 업로드와 라이브, 도네이션, 팬 커뮤니티를 하나의 플랫폼에 담아 콘텐츠 유통과 팬덤 활동이 자연스럽게 이어지도록 하는 것이 목표였습니다.",
            "운영 중인 플랫폼 없이 처음부터 런칭해야 하는 프로젝트라, 스튜디오C1의 콘텐츠 운영 방식과 비즈니스 모델에 맞춰 서비스 화면부터 관리자 시스템까지 새로 만들었습니다. [개발 범위 한두 줄]",
          ],
          images: [
            {
              src: `${WORKS_BASE}/studioc1/studioc1-home.jpg`,
              width: 1600,
              height: 1958,
              alt: "불꽃야구 키비주얼과 회차별 콘텐츠 목록이 있는 메인 화면",
              caption: "Main",
            },
          ],
        },
        {
          title: "플랫폼 안에서 하는 라이브",
          body: [
            "외부 플랫폼으로 라이브를 하면 시청자가 그쪽으로 빠져나가고 시청 데이터도 남지 않습니다. 라이브를 플랫폼 안에서 직접 만들고 송출 상태에 따라 화면 노출을 관리하도록 해, 시청과 소통, 참여가 한곳에서 끝나게 했습니다.",
            "방송이 끝난 뒤에는 그 영상을 VOD 콘텐츠로 바로 쓸 수 있도록 라이브와 VOD의 흐름을 함께 고려했습니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/studioc1/studioc1-live.jpg`,
              width: 1600,
              height: 1172,
              alt: "영상 옆에 실시간 채팅이 열린 라이브 시청 화면",
              caption: "라이브 · 실시간 채팅",
            },
          ],
        },
        {
          title: "시청이 후원으로",
          body: [
            "영상 제공만으로는 수익을 넓히기 어려웠습니다. 시청을 방해하지 않는 도네이션 화면을 붙여 팬의 응원이 바로 수익으로 이어지게 했고, 콘텐츠마다 댓글로 반응을 나눌 수 있게 했습니다.",
          ],
          layout: "row",
          images: [
            {
              src: `${WORKS_BASE}/studioc1/studioc1-donation.jpg`,
              width: 1600,
              height: 1083,
              alt: "시청 화면 위에 열린 후원하기 창",
              caption: "도네이션",
            },
            {
              src: `${WORKS_BASE}/studioc1/studioc1-comment.jpg`,
              width: 1600,
              height: 895,
              alt: "콘텐츠 아래 댓글과 답글 영역",
              caption: "댓글",
            },
          ],
        },
        {
          title: "팬들이 머무는 커뮤니티",
          body: [
            "영상을 다 본 뒤에도 팬들이 플랫폼에 머물 수 있도록, 프로그램과 콘텐츠 단위로 팬 커뮤니티를 만들었습니다. 시청 후기를 나누고 커뮤니티 활동과 라이브 참여로 이어지도록 동선을 짰습니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/studioc1/studioc1-community.jpg`,
              width: 1600,
              height: 1612,
              alt: "인기 커뮤니티와 인기글 목록이 있는 커뮤니티 화면",
              caption: "Community",
            },
          ],
        },
        {
          title: "하나로 모은 관리자",
          body: [
            "콘텐츠, 라이브, 회원, 도네이션, 커뮤니티를 관리자 시스템 하나에서 다루도록 했습니다. 회차 정보와 썸네일 같은 메타 데이터를 함께 관리하고, 새 콘텐츠를 올리면 관련 메뉴에 자동으로 반영되도록 해 적은 인원으로도 운영할 수 있게 했습니다.",
            "회원 정보와 이용 상태, 활동 이력을 한곳에 모아 운영 정책이 바뀌어도 유연하게 대응할 수 있게 했고, 앞으로 기능을 덧붙이기 쉽도록 관리 기능을 모듈 단위로 나눴습니다.",
          ],
          items: [
            "VOD 메타 데이터·공개 상태·노출 순서 관리",
            "라이브 생성과 송출 상태 관리",
            "회원 정보·이용 상태·활동 이력 관리",
            "도네이션·커뮤니티 관리",
          ],
          images: [
            {
              src: `${WORKS_BASE}/studioc1/studioc1-admin-content.jpg`,
              width: 1600,
              height: 1710,
              alt: "콘텐츠 정보를 입력하는 관리자 화면",
              caption: "관리자 · 콘텐츠 등록",
            },
            {
              src: `${WORKS_BASE}/studioc1/studioc1-admin-member.jpg`,
              width: 1600,
              height: 870,
              alt: "회원 정보를 확인하는 관리자 화면",
              caption: "관리자 · 회원 관리",
            },
          ],
        },
      ],
      source: {
        label: "W2R GROUP의 프로젝트 소개 보기",
        href: "https://w2rgroup.kr/studioc1",
      },
    },
  },
  {
    id: "winix",
    title: "위닉스 D2C 자사몰 리뉴얼",
    summary:
      "필터 같은 소모품을 꾸준히 갈아 줘야 하는 가전 브랜드 위닉스의 자사몰 리뉴얼. 구매 이력에 맞춘 소모품 추천과 구독·케어 멤버십 관리를 갖춘 커머스로, 기획·PMO는 W2R GROUP, 디자인은 리메인, 개발은 웹아이가 맡았습니다.",
    year: "2024",
    role: "개발",
    stack: ["C#", "RESTful API", "HTML5", "CSS", "웹 접근성", "Swift", "Objective-C"],
    featured: true,
    coverColor: "#8a2a8c",
    coverSrc: `${WORKS_BASE}/winix/winix-main.jpg`,
    links: [{ label: "자세히 보기", href: "/works/winix" }],
    caseStudy: {
      hero: {
        src: `${WORKS_BASE}/winix/winix-main.jpg`,
        width: 1600,
        height: 1093,
        alt: "노트북 화면에 띄운 리뉴얼된 위닉스 자사몰 메인",
      },
      credits: [
        { label: "클라이언트", value: "위닉스 (WINIX)" },
        { label: "PMO·기획", value: "W2R GROUP" },
        { label: "디자인", value: "리메인" },
        { label: "개발", value: "웹아이 — [사용 기술], 웹·앱·관리자 [맡은 범위]" },
        { label: "기술", value: "C# · RESTful API · HTML5 · CSS(전처리기) · 웹/앱 접근성 · Swift · Objective-C" },
        { label: "범위", value: "Web · App · Admin · E-Commerce" },
      ],
      sections: [
        {
          title: "소모품까지 이어지는 자사몰",
          body: [
            "위닉스는 제습기·공기청정기·가습기처럼 필터와 소모품을 주기적으로 바꿔야 하는 가전을 만드는 브랜드입니다. 리뉴얼의 목표는 고객이 가진 제품을 기준으로 필요한 소모품과 서비스를 바로 찾을 수 있는, 데이터 기반의 개인화된 쇼핑 경험이었습니다.",
            "W2R GROUP이 프로젝트를 이끌고 리메인이 고객 인터뷰와 페르소나 분석을 거쳐 화면을 설계했으며, 웹아이는 이를 메인·목록·상세·마이페이지와 관리자 시스템까지 개발했습니다. [개발 범위 한두 줄]",
          ],
          images: [
            {
              src: `${WORKS_BASE}/winix/winix-pages.jpg`,
              width: 1600,
              height: 1585,
              alt: "위닉스 자사몰 메인 화면과 상품 목록 화면",
              caption: "Main · List",
            },
          ],
        },
        {
          title: "내 제품에 맞는 소모품 추천",
          body: [
            "예전에는 자기 제품에 맞는 필터를 사려면 모델명을 직접 검색해야 했습니다. 고객의 구매 이력과 보유 기기 모델을 바탕으로, 그 기기 전용 소모품을 메인과 목록 화면에 먼저 보여 주도록 했습니다.",
            "구매한 제품의 시리얼 번호를 등록해 정품 인증을 받으면 보증 기간 연장, 맞춤 A/S 신청, 필터 교체 알림 같은 사후 관리를 받을 수 있습니다.",
          ],
          items: [
            "구매 이력·보유 모델 기반 전용 소모품 우선 노출",
            "시리얼 번호 등록과 정품 인증",
            "보증 기간 연장·A/S 신청·필터 교체 알림",
          ],
          images: [
            {
              src: `${WORKS_BASE}/winix/winix-recommend.jpg`,
              width: 1600,
              height: 640,
              alt: "구매 이력에 맞춰 필터를 추천하는 메인 영역",
              caption: "구매 이력 기반 추천",
            },
            {
              src: `${WORKS_BASE}/winix/winix-register.jpg`,
              width: 1600,
              height: 1558,
              alt: "사용 중인 제품을 등록하는 제품 등록 화면",
              caption: "제품 등록 · 정품 인증",
            },
          ],
        },
        {
          title: "본품과 소모품, 케어 서비스를 한 번에",
          body: [
            "본품 상세 페이지에서 그 기기와 호환되는 소모품과 전용 케어 서비스를 바로 확인하고 함께 살 수 있도록, 상품 사이의 매핑 구조를 정리했습니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/winix/winix-detail-care.jpg`,
              width: 1600,
              height: 1394,
              alt: "상품 상세에서 케어 서비스를 함께 선택하는 화면",
              caption: "상품 상세 · 케어 서비스 선택",
            },
            {
              src: `${WORKS_BASE}/winix/winix-care-list.jpg`,
              width: 1600,
              height: 493,
              alt: "제품군별 케어 서비스를 고르는 영역",
              caption: "케어 서비스",
            },
          ],
        },
        {
          title: "구독과 케어 멤버십 관리",
          body: [
            "소모품 정기 배송과 케어 멤버십처럼 결제가 반복되는 상품을 리뉴얼 사이트에서도 끊김 없이 운영해야 했습니다. 기존 시스템의 구독 데이터를 새 사이트로 옮기고, 가입부터 해지까지의 과정을 관리자가 한눈에 보고 다룰 수 있게 했습니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/winix/winix-subscription.jpg`,
              width: 1600,
              height: 888,
              alt: "마이페이지의 정기배송 신청 내역 상세 화면",
              caption: "정기배송 신청 내역",
            },
          ],
        },
        {
          title: "계절마다 바뀌는 주력 상품",
          body: [
            "봄에는 공기청정기, 여름에는 제습기, 겨울에는 가습기처럼 계절마다 주력 상품이 바뀝니다. 메인 배너와 기획전 구좌를 코드 수정 없이 관리자에서 바로 바꿀 수 있게 해, 시즌 마케팅에 빠르게 대응하도록 했습니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/winix/winix-season.jpg`,
              width: 1600,
              height: 530,
              alt: "시즌 상품과 혜택을 보여 주는 메인 배너",
              caption: "시즌 메인 배너",
            },
          ],
        },
      ],
      source: {
        label: "W2R GROUP의 프로젝트 소개 보기",
        href: "https://w2rgroup.kr/winix",
      },
    },
  },
  {
    id: "wattup",
    title: "와츠업 커뮤니티 기반 라이브커머스 플랫폼",
    summary:
      "브랜드와 고객이 콘텐츠와 피드로 소통하고, 그 취향 공유가 구매로 이어지는 커뮤니티형 라이브커머스 플랫폼. 기획·PMO는 W2R GROUP, 디자인은 리메인, 개발은 웹아이가 웹·앱·관리자를 맡았습니다.",
    year: "2024",
    role: "개발",
    stack: ["C#", "RESTful API", "Swift", "Objective-C", "HTML5", "CSS"],
    featured: true,
    coverColor: "#111111",
    coverSrc: `${WORKS_BASE}/wattup/wattup-main.jpg`,
    links: [{ label: "자세히 보기", href: "/works/wattup" }],
    caseStudy: {
      hero: {
        src: `${WORKS_BASE}/wattup/wattup-main.jpg`,
        width: 1600,
        height: 900,
        alt: "와츠업 PC 메인: 라이브 방송 화면과 ON-AIR 영역",
      },
      credits: [
        { label: "클라이언트", value: "WATTZ Creative" },
        { label: "PMO·기획", value: "W2R GROUP" },
        { label: "디자인", value: "리메인 — Creative Director Junu Kim, Project Leader Ji Lee" },
        { label: "개발", value: "웹아이 — 웹·앱·관리자 [맡은 범위]" },
        { label: "기술", value: "C# · RESTful API · Swift · Objective-C · HTML5 · CSS(전처리기) · 웹/앱 접근성" },
        { label: "범위", value: "Web · App · Admin · E-Commerce" },
      ],
      sections: [
        {
          title: "취향 공유가 구매로 이어지는 구조",
          body: [
            "와츠업은 2030세대를 겨냥한 라이브커머스 플랫폼입니다. 가격 비교 위주로 상품을 늘어놓는 방식으로는 브랜드의 정체성을 전하기 어렵고, 일방적인 정보 제공만으로는 사용자가 오래 머물지 않는다는 점이 출발점이었습니다.",
            "그래서 브랜드 콘텐츠와 커머스, SNS형 커뮤니티를 한 서비스 안에 묶었습니다. 사용자가 콘텐츠를 보다가 바로 관련 상품을 찾아 살 수 있고, 다른 사용자의 후기와 스타일링이 다시 구매로 이어지도록 웹·앱과 커머스 관리자를 함께 개발했습니다. [개발 범위와 구조 한두 줄]",
          ],
          images: [
            {
              src: `${WORKS_BASE}/wattup/wattup-mobile.jpg`,
              width: 1600,
              height: 971,
              alt: "와츠업 앱 메인 화면들: 기획전, 추천 브랜드, 피드 미리보기, 베스트 상품",
              caption: "App Main",
            },
          ],
        },
        {
          title: "팔로우와 피드로 만드는 커뮤니티",
          body: [
            "취향이 비슷한 사용자를 팔로우하면 그 사람의 피드 소식을 받아볼 수 있습니다. 이미지와 글로 구매 후기나 스타일링을 올리고, 댓글과 좋아요로 반응을 주고받으며, 프로필에서는 내가 쓴 글과 팔로워 같은 활동 내역을 관리합니다.",
          ],
          items: [
            "사용자 간 팔로우와 팔로잉 기반 타임라인",
            "이미지·텍스트 게시물 업로드, 댓글·좋아요",
            "개인 프로필과 활동 내역 관리",
          ],
          images: [
            {
              src: `${WORKS_BASE}/wattup/wattup-feed.jpg`,
              width: 1600,
              height: 887,
              alt: "와츠업 앱의 피드, 게시물 상세, 프로필 화면",
              caption: "피드 · 프로필",
            },
          ],
        },
        {
          title: "브랜드 채널과 라이브 방송",
          body: [
            "브랜드마다 자기 톤으로 콘텐츠를 올리고 팬과 직접 소통하는 전용 채널을 두었습니다. 콘텐츠 안의 댓글과 피드백으로 브랜드와 사용자가 실시간으로 이야기를 나누고, 라이브 방송 화면에서는 방송을 보면서 소개되는 상품을 바로 확인할 수 있습니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/wattup/wattup-brand.jpg`,
              width: 1600,
              height: 1084,
              alt: "이주의 브랜드 추천과 이 달의 취향 기획 상품이 있는 PC 화면",
              caption: "브랜드 추천 · 취향관",
            },
            {
              src: `${WORKS_BASE}/wattup/wattup-live.jpg`,
              width: 1600,
              height: 853,
              alt: "라이브 방송 화면, 방송 중 상품 목록, 실시간 채팅 입력 화면",
              caption: "라이브 방송 · 상품 목록 · 채팅",
            },
          ],
        },
        {
          title: "판매 방식을 모듈로",
          body: [
            "상시 판매만으로는 구매 동기를 만들기 어려워, 마케팅 목적에 맞게 골라 쓸 수 있도록 판매 방식을 모듈로 나눴습니다. 한정판은 응모부터 당첨, 구매까지 이어지는 럭키드로우로, 특정 시간에만 할인하는 상품은 타임딜로 운영합니다.",
            "여행 상품처럼 정해진 인원이 모여야 판매가 성사되는 목표 달성형 공동구매도 지원해, 사용자들이 스스로 공유하며 모집 인원을 채우도록 했습니다.",
          ],
          items: ["럭키드로우 (응모 → 당첨 → 구매)", "타임딜", "예약판매", "목표 달성형 공동구매"],
        },
        {
          title: "커뮤니티를 지키는 관리자",
          body: [
            "사용자가 올린 이미지와 글을 관리자에서 모니터링하고, 정책에 어긋나는 게시물은 신고와 블라인드로 처리합니다. 신고 내역은 목록으로 모아 관리자가 경고 같은 제재를 단계별로 빠르게 결정할 수 있게 했고, 복잡한 이벤트 판매 일정과 사용자 관계 데이터도 같은 관리자에서 다룹니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/wattup/wattup-report.jpg`,
              width: 1600,
              height: 600,
              alt: "피드 게시물 위에 뜬 팔로우 차단·게시물 신고 메뉴와 신고 사유 선택 창",
              caption: "게시물 신고",
            },
          ],
        },
      ],
      source: {
        label: "W2R GROUP의 프로젝트 소개 보기",
        href: "https://w2rgroup.kr/wattup",
      },
    },
  },
  {
    id: "parata-air",
    title: "파라타항공 브랜드 랜딩 페이지 구축",
    summary:
      "새로 시장에 들어서는 파라타항공의 철학과 비전을 감성적으로 전하는 브랜드 랜딩 페이지. 기획·PMO는 W2R GROUP, 디자인은 리메인, 개발은 웹아이가 맡아 스크롤 인터랙션 중심의 화면을 구현했습니다.",
    year: "2024",
    role: "개발",
    stack: ["브랜드 랜딩 페이지", "스크롤 인터랙션", "Java"],
    featured: true,
    coverColor: "#1d34c4",
    coverSrc: `${WORKS_BASE}/parata-air/parata-air-main.jpg`,
    links: [{ label: "자세히 보기", href: "/works/parata-air" }],
    caseStudy: {
      hero: {
        src: `${WORKS_BASE}/parata-air/parata-air-hero.jpg`,
        width: 1600,
        height: 790,
        alt: "파라타항공 로고가 그려진 A330neo 꼬리날개와 PARATA AIR 워드마크",
      },
      credits: [
        { label: "클라이언트", value: "파라타항공 (PARATA AIR)" },
        { label: "PMO·기획", value: "W2R GROUP" },
        {
          label: "디자인",
          value: "리메인 — Creative Director Junu Kim, Project Leader Ji Lee, UX/UI Designer Chaeyeon Park · Hyewon Shin",
        },
        { label: "개발", value: "웹아이 — [사용 기술], 스크롤 인터랙션 구현 [맡은 범위]" },
        { label: "범위", value: "Web · Branding" },
      ],
      sections: [
        {
          title: "첫인상을 남기는 마이크로 사이트",
          body: [
            "파라타항공이 시장에 처음 내딛는 걸음을 알리는 홍보용 마이크로 사이트입니다. 서비스를 나열하기보다 고객에게 차별화된 가치를 전하고, 첫 만남에서부터 신뢰와 기대감을 심어 오래 이어질 관계의 시작점이 되는 것을 목표로 했습니다.",
            "W2R GROUP이 프로젝트를 이끌고 리메인이 브랜드 경험과 화면을 디자인했으며, 웹아이는 이를 실제로 움직이는 페이지로 개발했습니다. [개발 범위·구조 한두 줄: 반응형, 퍼블리싱 방식 등]",
          ],
          images: [
            {
              src: `${WORKS_BASE}/parata-air/parata-air-main.jpg`,
              width: 1600,
              height: 900,
              alt: "구름 위 하늘을 배경으로 ‘The Happier Journey’ 문구를 띄운 첫 화면",
              caption: "Main · The Happier Journey",
            },
          ],
        },
        {
          title: "스크롤을 따라 흐르는 여정",
          body: [
            "사용자가 페이지를 내려가는 흐름을 하나의 여행처럼 느끼도록, 구간마다 다른 스크롤 인터랙션을 넣어 화면에 움직임을 더했습니다. 기업 철학에서 서비스, 브랜드 가치로 이어지는 이야기가 끊기지 않고 자연스럽게 넘어가도록 구현했습니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/parata-air/parata-air-philosophy.jpg`,
              width: 1600,
              height: 900,
              alt: "비행기 창밖 구름 위로 ‘파라타항공은 고객에게 행복한 여행을 선사합니다’ 문구가 나오는 기업 철학 구간",
              caption: "기업 철학",
            },
          ],
        },
        {
          title: "고객 중심 서비스를 전하는 화면",
          body: [
            "LCC와 FSC로만 나뉘던 항공 서비스에 질문을 던지고, 종류보다 품질에 집중한다는 파라타항공의 서비스 방향을 사진과 짧은 문장으로 전합니다. 이미지와 텍스트가 반씩 나뉜 구성을 두 장면으로 이어 메시지를 차례로 보여 줍니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/parata-air/parata-air-service-1.jpg`,
              width: 1600,
              height: 900,
              alt: "창가 좌석의 승객 사진 옆에 ‘고객 맞춤 서비스를 제공합니다’ 문구가 있는 화면",
              caption: "고객 맞춤 서비스",
            },
            {
              src: `${WORKS_BASE}/parata-air/parata-air-service-2.jpg`,
              width: 1600,
              height: 900,
              alt: "기내식이 놓인 좌석 사진 옆에 ‘서비스 종류보다 품질에 집중합니다’ 문구가 있는 화면",
              caption: "서비스 품질",
            },
          ],
        },
        {
          title: "브랜드 가치와 컬러",
          body: [
            "Essential, Comfort, Authentic 세 가지 핵심 가치는 스크롤에 맞춰 하나씩 강조되도록 했고, 하늘의 여러 색에서 가져온 브랜드 컬러는 Dark Night Blue부터 Mid Night Blue까지 이어지는 화면으로 보여 줍니다. 마지막은 ‘New Paradigm, Trustworthy Airline.’ 메시지로 브랜드의 방향을 정리합니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/parata-air/parata-air-values.jpg`,
              width: 1600,
              height: 900,
              alt: "Essential·Comfort·Authentic 세 가치를 나열한 브랜드 가치 구간",
              caption: "브랜드 가치",
            },
            {
              src: `${WORKS_BASE}/parata-air/parata-air-color.jpg`,
              width: 1600,
              height: 900,
              alt: "‘하늘의 다채로운 색으로 여행의 설렘을 담다’ 문구와 Dark Night Blue 컬러를 보여 주는 브랜드 컬러 구간",
              caption: "Brand Color",
            },
            {
              src: `${WORKS_BASE}/parata-air/parata-air-paradigm.jpg`,
              width: 1600,
              height: 900,
              alt: "‘New Paradigm Trustworthy Airline.’ 문구가 크게 놓인 마무리 화면",
              caption: "New Paradigm",
            },
          ],
        },
      ],
      source: {
        label: "W2R GROUP의 프로젝트 소개 보기",
        href: "https://w2rgroup.kr/parata_air",
      },
    },
  },
  {
    id: "vectorcom",
    title: "벡터컴 글로벌 커머스 통합 관리 시스템 구축",
    summary:
      "국내 여러 브랜드의 일본 판매를 대행하는 벡터컴을 위한 통합 관리 시스템. 라쿠텐·큐텐 상품 등록부터 주문 수집, 재고, 3PL 물류 연동, 매출 리포트까지 한곳에서 다루며, 기획·PMO는 W2R GROUP, 개발은 웹아이가 맡았습니다.",
    year: "2024",
    role: "개발",
    stack: ["[기술 스택]", "B2B SaaS", "API 연동", "관리자 시스템"],
    featured: true,
    coverColor: "#4757f5",
    coverSrc: `${WORKS_BASE}/vectorcom/vectorcom-main.jpg`,
    links: [{ label: "자세히 보기", href: "/works/vectorcom" }],
    caseStudy: {
      hero: {
        src: `${WORKS_BASE}/vectorcom/vectorcom-main.jpg`,
        width: 1600,
        height: 988,
        alt: "벡터컴 통합 관리 시스템의 상품 관리 화면들",
      },
      credits: [
        { label: "클라이언트", value: "벡터컴 (VECTORCOM)" },
        { label: "PMO·기획", value: "W2R GROUP" },
        { label: "개발", value: "웹아이 — [사용 기술], 관리 시스템·채널 API 연동 [맡은 범위]" },
        { label: "범위", value: "B2B SaaS · E-Commerce" },
      ],
      sections: [
        {
          title: "여러 브랜드, 여러 채널을 한곳에서",
          body: [
            "벡터컴은 국내 여러 브랜드의 해외 마케팅과 유통을 대신 맡는 회사입니다. 같은 상품이라도 라쿠텐, 큐텐 같은 일본 판매 채널마다 관리자에 따로 들어가 등록하고 고쳐야 했고, 채널별로 옵션명과 세트 구성이 달라 재고를 한 번에 보기 어려웠습니다.",
            "상품 관리부터 주문 수집, 재고 관리, 3PL 물류 연동, 매출 분석까지 해외 유통에 필요한 과정을 하나의 시스템으로 묶었습니다. [개발 범위 한두 줄]",
          ],
        },
        {
          title: "한 번 등록하면 모든 채널에",
          body: [
            "시스템에서 상품코드, 가격, 옵션, 상세페이지를 한 번 등록하면 각 채널 API를 통해 셀러샵에 상품이 만들어집니다. 채널마다 다른 필수값 규격에 맞춰 정보를 넣을 수 있고, 가격이나 정보를 바꾸면 API로 바로 반영됩니다.",
            "상품과 실제 재고 단위인 품목(SKU)을 나눠, 한 품목을 여러 채널의 상품 옵션에 연결했습니다. 같은 품목이 한 채널에서는 단품, 다른 채널에서는 세트로 팔려도 판매가 일어나면 마스터 품목의 재고가 함께 줄어들어 초과 판매 위험을 낮춥니다.",
          ],
          items: [
            "라쿠텐·큐텐 등 판매 채널 상품 등록·수정 API 연동",
            "채널별 연동 상태·판매 가격·재고/품절 현황 통합 조회",
            "품목(SKU) ↔ 채널 상품 옵션 매핑과 재고 통합 차감",
          ],
          images: [
            {
              src: `${WORKS_BASE}/vectorcom/vectorcom-product.jpg`,
              width: 1600,
              height: 900,
              alt: "상품 정보와 채널 연동 상태를 관리하는 화면",
              caption: "통합 상품 관리",
            },
          ],
        },
        {
          title: "주문 수집과 3PL 물류 연동",
          body: [
            "여러 채널의 주문을 주문 수집 API로 모아, 입금 대기부터 배송 완료까지 채널별 주문 상태를 한 화면에서 관리합니다. 외부 물류 업체(3PL) 시스템과 재고를 연동해 창고의 실제 재고를 일 단위 배치로 반영하고, 판매 가능한 수량을 각 채널에 업데이트합니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/vectorcom/vectorcom-order-flow.jpg`,
              width: 1600,
              height: 610,
              alt: "유통채널, 통합 재고, 3PL 사이의 주문·재고 흐름도",
              caption: "주문 · 재고 · 3PL 연동 흐름",
            },
          ],
        },
        {
          title: "채널을 넘나드는 매출 리포트",
          body: [
            "채널마다 리포트 형식이 달라 전체 매출과 재구매율을 한눈에 보기 어려웠습니다. 입점사·브랜드, 유통 채널, 카테고리, 품목별 매출과 판매 추이를 하나의 리포트로 뽑아 브랜드사별 정산을 자동화했고, 흩어진 구매 데이터에서 신규 고객과 재구매 고객 비중을 도출해 마케팅 근거로 쓸 수 있게 했습니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/vectorcom/vectorcom-report.jpg`,
              width: 1600,
              height: 912,
              alt: "기간별 매출 추이 그래프와 표가 있는 리포트 화면",
              caption: "매출 리포트",
            },
          ],
        },
        {
          title: "입점사마다 독립된 운영",
          body: [
            "관리하는 브랜드가 늘수록 운영 부담도 커졌습니다. 하나의 시스템 안에서 여러 입점사를 독립된 테넌트로 나눠, 입점사마다 셀러샵 API를 따로 연동하고 담당자에게 맞는 권한을 주도록 했습니다. 통합 관리자는 대시보드에서 전체 입점사의 운영 현황을 볼 수 있습니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/vectorcom/vectorcom-tenant.jpg`,
              width: 1600,
              height: 478,
              alt: "입점사, 브랜드, 셀러샵으로 이어지는 멀티 입점사 구조도",
              caption: "멀티 입점사 구조",
            },
          ],
        },
      ],
      source: {
        label: "W2R GROUP의 프로젝트 소개 보기",
        href: "https://w2rgroup.kr/vectorcom",
      },
    },
  },
  {
    id: "shimadzu",
    title: "시마즈 B2B 자사몰 구축",
    summary:
      "시마즈코리아가 오프라인으로 팔던 분석 장비와 소모품을 온라인으로 넓히기 위한 B2B 자사몰. 기획·PMO는 W2R GROUP, 개발은 웹아이가 Java로 웹과 관리자 시스템을 함께 구축했습니다.",
    year: "2024",
    role: "개발",
    stack: ["Java", "B2B 커머스", "관리자 시스템"],
    featured: true,
    coverColor: "#e60012",
    coverSrc: `${WORKS_BASE}/shimadzu/shimadzu-list.jpg`,
    links: [{ label: "자세히 보기", href: "/works/shimadzu" }],
    caseStudy: {
      hero: {
        src: `${WORKS_BASE}/shimadzu/shimadzu-list.jpg`,
        width: 1600,
        height: 796,
        alt: "시마즈 B2B 자사몰의 상품 목록 화면",
      },
      credits: [
        { label: "클라이언트", value: "시마즈코리아" },
        { label: "PMO·기획", value: "W2R GROUP" },
        { label: "디자인", value: "W2R GROUP" },
        { label: "개발", value: "웹아이 — Java, 웹·관리자 시스템" },
        { label: "범위", value: "Web · Admin · E-Commerce" },
      ],
      sections: [
        {
          title: "오프라인 판매를 온라인으로",
          body: [
            "시마즈코리아에서 오프라인으로 판매하던 제품을 온라인으로 넓혀 운영하기 위해 새로 만든 B2B 자사몰입니다. 기업 간 거래라는 특성에 맞춰 회원 인증에 따라 보이는 정보가 달라지고, 거래 조건에 따라 금액별로 구매 과정이 나뉘며, 견적 문의를 중심으로 구매가 흘러가도록 설계했습니다.",
            "연관 상품과 카탈로그 매핑, 이벤트 관리처럼 일반 쇼핑몰 기능에 B2B 운영에 필요한 과정을 더했고, 이 모두를 웹 페이지와 관리자 시스템에서 함께 다룰 수 있도록 Java로 구축했습니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/shimadzu/shimadzu-main.jpg`,
              width: 1600,
              height: 1630,
              alt: "시마즈 B2B 자사몰 메인 화면: 키비주얼, 카테고리별 인기상품, 브랜드",
              caption: "Main",
            },
          ],
        },
        {
          title: "승인된 회원에게만 보이는 정보",
          body: [
            "B2B 거래의 보안성과 폐쇄성을 고려해, 회원가입 후 관리자 승인을 거친 기업 회원에게만 상세 가격과 상품 스펙을 보여 줍니다. 로그인하지 않은 방문자에게는 가격을 숨기거나 별도의 안내 문구를 띄워 브랜드의 가격 정책을 지킵니다.",
          ],
          items: [
            "관리자 승인 기반 기업 회원 인증",
            "회원 상태에 따른 가격·스펙 노출 제어",
            "비로그인 방문자용 가격 미노출·안내 문구 정책 설정",
          ],
        },
        {
          title: "견적 문의 중심의 구매 흐름",
          body: [
            "대량 구매와 고가 장비가 많은 특성을 반영해, 장바구니에서 바로 결제하는 방식 외에 ‘견적 문의’로 소통하는 길을 넓혔습니다. 웹에서 들어온 문의는 관리자 시스템과 이어져, 담당자가 바로 확인하고 견적서를 발행할 수 있습니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/shimadzu/shimadzu-quote.jpg`,
              width: 1600,
              height: 1017,
              alt: "상품과 수량, 문의 내용을 입력하는 견적 문의 화면",
              caption: "견적 문의",
            },
          ],
        },
        {
          title: "운영자가 직접 바꾸는 상품 전시",
          body: [
            "카테고리별 베스트 상품, MD’s Pick, 신규 장비처럼 주요 상품을 메인에 배치해 고객이 원하는 장비를 빨리 찾도록 했습니다. 메인 배너와 이벤트 영역은 관리자 시스템에서 손쉽게 바꿀 수 있어, 시즌 프로모션이나 브랜드 위크 같은 마케팅에 바로 대응할 수 있습니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/shimadzu/shimadzu-display.jpg`,
              width: 1600,
              height: 1418,
              alt: "카테고리별 인기상품과 MD’s Pick 영역",
              caption: "카테고리별 인기상품 · MD’s Pick",
            },
          ],
        },
      ],
      source: {
        label: "W2R GROUP의 프로젝트 소개 보기",
        href: "https://w2rgroup.kr/shimadzu",
      },
    },
  },
  {
    id: "wemade",
    title: "위메이드 오피셜 사이트 리뉴얼",
    summary:
      "게임을 넘어 블록체인·메타버스·NFT로 사업을 넓혀 가는 위메이드의 기업 사이트 리뉴얼. 기획·PMO는 W2R GROUP, 디자인은 리메인, 개발은 웹아이가 Java로 맡았습니다.",
    year: "2024",
    role: "개발",
    stack: ["Java", "HTML5", "CSS", "웹 접근성"],
    featured: true,
    coverColor: "#7b3fe4",
    coverSrc: `${WORKS_BASE}/wemade/wemade-hero.jpg`,
    links: [
      { label: "자세히 보기", href: "/works/wemade" },
      { label: "사이트", href: "https://www.wemade.com" },
    ],
    caseStudy: {
      hero: {
        src: `${WORKS_BASE}/wemade/wemade-hero.jpg`,
        width: 1600,
        height: 929,
        alt: "노트북과 휴대폰에 띄운 리뉴얼된 위메이드 사이트",
      },
      credits: [
        { label: "클라이언트", value: "위메이드 (WEMADE)" },
        { label: "PMO·기획", value: "W2R GROUP" },
        { label: "디자인", value: "리메인 — Creative Director Junu Kim, Project Leader Ji Lee" },
        { label: "개발", value: "웹아이 — Java [맡은 범위]" },
        { label: "기술", value: "Java · HTML5 · CSS(전처리기) · 웹 접근성" },
      ],
      sections: [
        {
          title: "방대한 사업을 한눈에",
          body: [
            "위메이드는 게임과 위믹스(WEMIX) 블록체인, 메타버스, NFT를 아우르는 기업입니다. 사업이 넓어진 만큼 사이트에 담을 정보도 많아져, 기업의 정체성을 분명히 하면서 방대한 콘텐츠를 쉽게 찾아볼 수 있게 하는 것이 리뉴얼의 목표였습니다.",
            "W2R GROUP이 프로젝트를 이끌고, 리메인이 디자인 시스템과 화면을 만들었으며, 웹아이는 이를 Java 기반으로 개발했습니다. [개발 범위와 구조 한두 줄: 관리자, CMS, 다국어 등]",
          ],
        },
        {
          title: "메인: 키비주얼부터 채용까지",
          body: [
            "맨 위에는 위메이드의 정체성을 보여 주는 키비주얼을, 그 아래에는 회사의 움직임을 전하는 뉴스와 강조하고 싶은 사업 정보를 두었습니다. 맨 아래 채용 정보까지 한 흐름으로 이어져, 처음 들어온 사람도 회사의 성장성을 느낄 수 있게 했습니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/wemade/wemade-main.jpg`,
              width: 1600,
              height: 2584,
              alt: "위메이드 메인 페이지 전체 화면",
              caption: "Main",
            },
          ],
        },
        {
          title: "게임: 목록에서 바로 상세로",
          body: [
            "여러 게임을 빠르게 훑어볼 수 있도록 목록 페이지에서 상세 정보를 팝업으로 띄우는 방식을 썼습니다. 페이지를 옮기지 않고도 필요한 게임의 정보를 바로 확인할 수 있습니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/wemade/wemade-game-list.jpg`,
              width: 1344,
              height: 2449,
              alt: "장르별로 정리된 게임 목록 페이지",
              caption: "Game 목록",
              maxWidth: 720,
            },
            {
              src: `${WORKS_BASE}/wemade/wemade-game-popup.jpg`,
              width: 1344,
              height: 756,
              alt: "게임 목록 위에 뜬 나이트 크로우 상세 팝업",
              caption: "Game 상세 팝업",
            },
          ],
        },
        {
          title: "회사 소개·투자 정보·ESG",
          body: [
            "비전, 국내외 사업 현황, 연혁처럼 성격이 다른 정보는 페이지를 나누고 각 페이지에 맞는 레이아웃을 썼습니다. 위믹스 생태계 같은 기술적인 내용은 인포그래픽으로, 기업지배구조와 ESG 추진체계는 차트와 도식으로 풀어 보여 줍니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/wemade/wemade-about.jpg`,
              width: 1344,
              height: 1543,
              alt: "위믹스 3.0을 소개하는 사업 영역 페이지",
              caption: "사업 영역 · 위믹스",
              maxWidth: 720,
            },
            {
              src: `${WORKS_BASE}/wemade/wemade-page-1.jpg`,
              width: 1600,
              height: 1343,
              alt: "주식·주주 현황을 도넛 차트로 보여 주는 기업지배구조 페이지",
              caption: "투자정보 · 기업지배구조",
            },
            {
              src: `${WORKS_BASE}/wemade/wemade-page-2.jpg`,
              width: 1600,
              height: 2119,
              alt: "ESG 위원회 조직도와 로드맵이 있는 추진체계 페이지",
              caption: "지속가능경영 · ESG 추진체계",
            },
          ],
        },
        {
          title: "채용: 원하는 공고를 빠르게",
          body: [
            "채용은 인사제도, 채용안내, 채용공고로 나눴습니다. 공고는 같은 카테고리로 정리하고 직군·직무별 필터를 두어, 구직자가 원하는 공고를 쉽게 비교하고 찾을 수 있게 했습니다.",
          ],
        },
        {
          title: "디자인 시스템과 컴포넌트",
          body: [
            "색상·서체·키비주얼 같은 디자인 요소와 버튼·탭·드롭다운 같은 UI 컴포넌트를 규격화한 디자인 시스템을 바탕으로, 어느 페이지에서도 같은 위메이드다운 경험이 이어지도록 구현했습니다. 앞으로 콘텐츠나 서비스가 늘어도 같은 규칙으로 쌓아 갈 수 있습니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/wemade/wemade-element.jpg`,
              width: 1600,
              height: 478,
              alt: "위메이드 디자인 요소: 브랜드 컬러, 서체 Pretendard, 로고",
              caption: "Design Element",
            },
            {
              src: `${WORKS_BASE}/wemade/wemade-component.jpg`,
              width: 1600,
              height: 1591,
              alt: "버튼, 드롭다운, 탭, 페이지네이션 등 UI 컴포넌트 모음",
              caption: "Design Component",
            },
          ],
        },
      ],
      source: {
        label: "W2R GROUP의 프로젝트 소개 보기",
        href: "https://w2rgroup.kr/wemade",
      },
    },
  },
  {
    id: "ecoyaearth",
    title: "에코야얼스 친환경 ESG 플랫폼 구축",
    summary:
      "순환자원을 수거해 받은 포인트로 경품에 응모하거나 ESG 캠페인에 기부하는 친환경 플랫폼 앱. 기획·PMO는 W2R GROUP, 디자인·브랜딩은 리메인, 개발은 웹아이가 맡았습니다.",
    year: "2023",
    role: "개발",
    stack: ["[기술 스택]", "App", "ESG 플랫폼"],
    featured: true,
    coverColor: "#4b2ff0",
    coverSrc: `${WORKS_BASE}/ecoyaearth/ecoyaearth-main.jpg`,
    links: [{ label: "자세히 보기", href: "/works/ecoyaearth" }],
    caseStudy: {
      hero: {
        src: `${WORKS_BASE}/ecoyaearth/ecoyaearth-main.jpg`,
        width: 1600,
        height: 948,
        alt: "보라색 배경 위 휴대폰에 띄운 에코야얼스 앱 홈 화면",
      },
      credits: [
        { label: "클라이언트", value: "에코야얼스 (ECOYA Earth)" },
        { label: "PMO·기획", value: "W2R GROUP" },
        { label: "디자인", value: "리메인" },
        { label: "개발", value: "웹아이 — [사용 기술], 앱 [맡은 범위]" },
        { label: "범위", value: "App · Branding" },
      ],
      sections: [
        {
          title: "환경 실천이 혜택으로 돌아오는 구조",
          body: [
            "에코야얼스는 사용자가 순환자원을 수거 신청하면 포인트로 보상하고, 그 포인트를 경품 응모나 기부에 쓰게 해 개인의 환경 실천이 실제 혜택과 사회적 가치로 이어지도록 만든 플랫폼입니다. B2B 중심이던 서비스를 개인 사용자에게 넓히는 단계의 프로젝트였습니다.",
            "자체 캐릭터를 서비스 곳곳에 녹여 자칫 딱딱할 수 있는 ESG 서비스를 친근하게 풀었고, 웹아이는 수거 신청부터 리워드, 랭킹까지 앱의 주요 흐름을 개발했습니다. [개발 범위와 구조 한두 줄]",
          ],
          images: [
            {
              src: `${WORKS_BASE}/ecoyaearth/ecoyaearth-overview.jpg`,
              width: 1600,
              height: 1467,
              alt: "에코야얼스 캐릭터와 홈, 수거 완료, 탄소중립실천포인트 안내, 기부 화면",
            },
          ],
        },
        {
          title: "단계별 순환자원 수거 신청",
          body: [
            "플라스틱, 종이, 금속 같은 자원의 종류와 수량, 무게를 고르고 수거지를 입력하면 신청이 끝나는 간단한 흐름으로 만들었습니다. 신청 내용을 바탕으로 탄소 감축량과 적립 예정 포인트를 바로 보여 줘, 사용자가 자기 활동의 효과를 숫자로 확인할 수 있습니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/ecoyaearth/ecoyaearth-pickup-1.jpg`,
              width: 492,
              height: 876,
              alt: "박스에 담긴 수거 품목을 고르는 화면",
              caption: "품목 선택",
            },
            {
              src: `${WORKS_BASE}/ecoyaearth/ecoyaearth-pickup-2.jpg`,
              width: 492,
              height: 876,
              alt: "품목별 수량을 입력하는 화면",
              caption: "수량 입력",
            },
            {
              src: `${WORKS_BASE}/ecoyaearth/ecoyaearth-pickup-3.jpg`,
              width: 492,
              height: 876,
              alt: "신청 내역과 수거지를 확인하는 화면",
              caption: "수거지 입력",
            },
            {
              src: `${WORKS_BASE}/ecoyaearth/ecoyaearth-pickup-4.jpg`,
              width: 492,
              height: 876,
              alt: "탄소 감축량과 적립 예정 포인트가 보이는 수거 신청 완료 화면",
              caption: "신청 완료",
            },
          ],
          layout: "row",
        },
        {
          title: "포인트로 응모하고 기부하고",
          body: [
            "수거 보상으로 쌓인 포인트는 경품 응모에 쓰거나 다양한 ESG 캠페인에 직접 기부할 수 있습니다. 환경을 위한 행동이 개인의 혜택과 사회적 가치 양쪽으로 돌아오도록 리워드 흐름을 구성했습니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/ecoyaearth/ecoyaearth-reward.jpg`,
              width: 1600,
              height: 985,
              alt: "지구포인트, 캠페인 상세, 응모하기, 기부 완료 화면",
              caption: "응모 · 기부",
            },
          ],
        },
        {
          title: "꾸준한 참여를 이끄는 랭킹",
          body: [
            "정기적인 활동 데이터를 모아 랭킹을 매기고, 상위 사용자에게 추가 포인트를 줍니다. 한 번 참여하고 끝나는 것이 아니라 사용자들이 서로 경쟁하며 꾸준히 자원 순환에 참여하도록 설계했습니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/ecoyaearth/ecoyaearth-ranking.jpg`,
              width: 1600,
              height: 1172,
              alt: "월별 자원순환 랭킹 화면",
              caption: "자원순환 랭킹",
            },
          ],
        },
        {
          title: "고래와 지구 캐릭터",
          body: [
            "‘바다의 탄소 저장고’로 불리는 고래와 지구를 모티브로 한 캐릭터를 앱 UI 곳곳에 배치했습니다. 홈, 가입 완료, 수거 완료처럼 사용자가 자주 마주치는 화면에 캐릭터가 등장해 서비스의 인상을 친근하게 만듭니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/ecoyaearth/ecoyaearth-character.jpg`,
              width: 1600,
              height: 1708,
              alt: "고래와 지구 캐릭터의 여러 포즈와 캐릭터가 들어간 앱 화면들",
              caption: "Character",
              maxWidth: 960,
            },
          ],
        },
      ],
      source: {
        label: "W2R GROUP의 프로젝트 소개 보기",
        href: "https://w2rgroup.kr/ecoyaearth",
      },
    },
  },
  {
    id: "ansung",
    title: "농심 안성탕면체 폰트 소개 사이트",
    summary:
      "40여 년 지켜 온 안성탕면의 맛에 한글을 더한 전용서체 ‘안성탕면체’를 소개하고 내려받는 사이트. 디자인은 리메인, 개발은 웹아이가 맡았습니다.",
    year: "2022",
    role: "개발",
    stack: ["반응형 웹", "웹폰트", "서체 미리보기"],
    featured: true,
    coverColor: "#fbc75c",
    coverSrc: `${WORKS_BASE}/ansung/ansung-cover.jpg`,
    links: [
      { label: "자세히 보기", href: "/works/ansung" },
      { label: "사이트", href: "https://brand.nongshim.com/ansung/fonts/index" },
    ],
    caseStudy: {
      hero: {
        src: `${WORKS_BASE}/ansung/ansung-cover.jpg`,
        width: 1600,
        height: 1067,
        alt: "안성탕면체 사이트의 모바일 화면 세 장: 소개, 다운로드, 서체 특징",
      },
      credits: [
        { label: "클라이언트", value: "농심" },
        { label: "디자인", value: "리메인" },
        { label: "개발", value: "웹아이 — [맡은 범위·사용 기술]" },
        { label: "대응 기기", value: "PC · Mobile" },
      ],
      sections: [
        {
          title: "40여 년 지켜 온 맛에 한글을 더하다",
          body: [
            "농심 안성탕면의 전용서체 ‘안성탕면체’를 소개하고 누구나 내려받아 쓸 수 있게 한 브랜드 사이트입니다. 안성탕면체로 꾸민 한정판 한글 패키지 출시와 함께 열렸고, 농심 브랜드관 안에서 운영됩니다.",
            "리메인이 디자인한 안성탕면 특유의 따뜻하고 장난스러운 그래픽을, 웹아이가 PC와 모바일 화면으로 구현했습니다. [구현 방식 한두 줄]",
          ],
          layout: "row",
          images: [
            {
              src: `${WORKS_BASE}/ansung/ansung-intro.jpg`,
              width: 1170,
              height: 2450,
              alt: "‘40여년 지켜온 맛에 한글을 더하다’ 문구와 안성탕면 패키지",
              caption: "인트로",
              maxWidth: 300,
            },
            {
              src: `${WORKS_BASE}/ansung/ansung-package.jpg`,
              width: 1170,
              height: 1650,
              alt: "안성탕면체와 한정판 한글 패키지 출시 안내",
              caption: "한정판 한글 패키지",
              maxWidth: 300,
            },
          ],
        },
        {
          title: "서체 내려받기",
          body: [
            "맥용 OTF와 윈도우용 TTF를 바로 내려받을 수 있고, 라이선스와 이미지 글자(딩벳) 사용법도 함께 제공합니다. 다운로드 버튼마다 라면 봉지, 달걀, 면발 같은 일러스트를 붙여 안성탕면다운 화면을 만들었습니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/ansung/ansung-download.jpg`,
              width: 1170,
              height: 2050,
              alt: "맥용 OTF, 윈도우용 TTF, 라이선스, 딩벳 사용법 다운로드 버튼",
              caption: "다운로드",
              maxWidth: 300,
            },
          ],
        },
        {
          title: "모든 글자를 미리 보기",
          body: [
            "한글, 영문, 특수문자, 이미지 글자(딩벳)를 탭으로 나눠 서체에 들어 있는 글자를 하나씩 확인할 수 있습니다. ‘봉지’, ‘컵라면’처럼 입력하면 그림으로 바뀌는 이미지 글자도 이곳에서 볼 수 있습니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/ansung/ansung-chars.jpg`,
              width: 1170,
              height: 1350,
              alt: "한글·영문·특수문자·이미지 글자 탭과 글자 표",
              caption: "글자 미리보기",
              maxWidth: 300,
            },
          ],
        },
        {
          title: "서체의 특징과 직접 써 보기",
          body: [
            "갈필법이 살아 있는 획, 환경을 생각한 ESG 에코서체라는 안성탕면체의 특징을 슬라이드로 풀어 보여 줍니다. 마지막에는 방문자가 문장을 직접 써 보고 글자 크기를 조절하며 서체를 확인할 수 있는 영역을 두었습니다.",
          ],
          layout: "row",
          images: [
            {
              src: `${WORKS_BASE}/ansung/ansung-features.jpg`,
              width: 1170,
              height: 2100,
              alt: "‘면발의 탱탱함이 살아있는’ 설명이 있는 서체 특징 슬라이드",
              caption: "서체 특징",
              maxWidth: 300,
            },
            {
              src: `${WORKS_BASE}/ansung/ansung-tryit.jpg`,
              width: 1170,
              height: 950,
              alt: "‘어디든 안성맞춤! 직접 써보세요’와 글자 크기 조절 슬라이더",
              caption: "직접 써 보기",
              maxWidth: 300,
            },
          ],
        },
      ],
    },
  },
  {
    id: "holeman",
    title: "LG U+ 홀맨 구독형 이벤트 웹앱",
    summary:
      "2008년 그 홀맨이 돌아왔다는 콘셉트로 매달 새로운 이벤트를 여는 구독형 서비스. 디자인은 리메인, 개발은 웹아이가 PHP와 MySQL로 구축했습니다.",
    year: "2021",
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
    id: "dailypick",
    title: "데일리픽 맞춤형 영양제 서비스",
    summary:
      "약사가 직접 설계한 영양제를 추천해 주는 맞춤형 영양제 커머스. 디자인은 리메인, 개발은 웹아이가 고도몰 샵바이로 구축했습니다.",
    year: "2021",
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
    id: "tmoney",
    title: "티머니 둥근바람 폰트 소개 사이트",
    summary:
      "티머니 전용서체 ‘티머니 둥근바람’이 만들어진 배경부터 브랜딩까지를 소개하는 반응형 홍보 사이트. 디자인은 리메인, 개발은 웹아이가 맡았습니다.",
    year: "2019",
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
    id: "zipbanchan",
    title: "집반찬연구소 쇼핑몰",
    summary:
      "2018년부터 지금까지 웹아이가 개발과 유지보수를 이어 오고 있는 프리미엄 반찬 쇼핑몰. 리뉴얼부터 정기결제, 하이브리드 앱, 외부 판매처 연동, 사내 운영 시스템까지 함께 만들어 왔습니다.",
    year: "2018–",
    period: "2018 ~ 현재",
    role: "개발 · 유지보수",
    stack: ["고도몰 이나무4 독립형", "PHP", "MySQL", "하이브리드 앱"],
    featured: true,
    coverColor: "#2f4a3a",
    coverSrc: `${WORKS_BASE}/zipbanchan/zipbanchan-hero.jpg`,
    links: [
      { label: "자세히 보기", href: "/works/zipbanchan" },
      { label: "사이트", href: "https://www.zipbanchan.co.kr" },
    ],
    caseStudy: {
      hero: {
        src: `${WORKS_BASE}/zipbanchan/zipbanchan-hero.jpg`,
        width: 1600,
        height: 1000,
        alt: "뚝배기 국과 반찬들이 차려진 식탁",
      },
      credits: [
        { label: "클라이언트", value: "집반찬연구소" },
        { label: "기간", value: "2018 ~ 현재 (개발·유지보수)" },
        { label: "개발", value: "웹아이 — 퍼블리싱, 백엔드, 하이브리드 앱, 유지보수" },
        { label: "리뉴얼 디자인", value: "리메인 (2022, 웹·모바일 UX/UI)" },
        { label: "솔루션", value: "고도몰 이나무4 독립형" },
        { label: "개발 환경", value: "LAMP (Linux · Apache · MySQL · PHP)" },
      ],
      sections: [
        {
          title: "2018년부터 이어 온 쇼핑몰",
          body: [
            "집반찬연구소는 “식사 준비하는 데 얼마나 걸려요?”라는 사소한 질문에서 시작된 반찬 브랜드입니다. 50년 동안 식사 준비에만 6.25년이 걸린다는 계산에서 출발해, 그 시간을 더 행복한 곳에 쓸 수 있도록 프리미엄 반찬을 만듭니다.",
            "웹아이는 2018년부터 지금까지 이 쇼핑몰의 개발과 유지보수를 이어 오고 있습니다. 기능 개발, SEO, 통계, 외부 API 연동까지 쇼핑몰이 자라는 동안 필요한 일을 함께해 왔습니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/zipbanchan/zipbanchan-hand.jpg`,
              width: 1600,
              height: 1800,
              alt: "손에 든 휴대폰에 집반찬연구소 모바일 화면이 떠 있는 모습",
              maxWidth: 560,
            },
          ],
        },
        {
          title: "PC·모바일 웹 리뉴얼",
          body: [
            "2022년에는 리메인이 사용자 인지 과정을 기준으로 기존 화면의 문제를 분석해 UX/UI와 브랜드 가이드를 새로 만들었습니다. 주문·결제처럼 흐름이 복잡했던 기능을 정리하고, 누를 수 있는 것과 읽기만 하는 것이 분명히 구분되도록 비주얼 패턴을 다듬은 리뉴얼입니다.",
            "웹아이는 이 디자인을 고도몰 위에 PC와 모바일 웹으로 옮기고, 처음 쓰는 사람을 위한 모바일 튜토리얼 기능을 더했습니다. 주 고객층인 중장년층이 주문할 때 필요한 정보를 한눈에 보고 쉽게 입력할 수 있도록 주문서 흐름도 함께 손봤습니다.",
          ],
          images: [
            {
              src: `${WORKS_BASE}/zipbanchan/zipbanchan-main.jpg`,
              width: 1600,
              height: 900,
              alt: "리뉴얼된 집반찬연구소 모바일 메인 화면",
            },
          ],
        },
        {
          title: "리뉴얼된 화면들",
          body: ["홈, 상품 상세, 카테고리, 신규 반찬 목록까지 새 브랜드 가이드에 맞춰 같은 규칙으로 구현했습니다."],
          layout: "row",
          images: [
            {
              src: `${WORKS_BASE}/zipbanchan/zipbanchan-home.jpg`,
              width: 1040,
              height: 2116,
              alt: "모바일 홈 화면",
              caption: "홈",
              maxWidth: 260,
            },
            {
              src: `${WORKS_BASE}/zipbanchan/zipbanchan-detail.jpg`,
              width: 720,
              height: 1600,
              alt: "상품 상세 화면",
              caption: "상품 상세",
              maxWidth: 260,
            },
            {
              src: `${WORKS_BASE}/zipbanchan/zipbanchan-category.jpg`,
              width: 720,
              height: 1600,
              alt: "카테고리 화면",
              caption: "카테고리",
              maxWidth: 260,
            },
            {
              src: `${WORKS_BASE}/zipbanchan/zipbanchan-new.jpg`,
              width: 720,
              height: 1600,
              alt: "신규 반찬 목록 화면",
              caption: "신규 반찬",
              maxWidth: 260,
            },
          ],
        },
        {
          title: "주문과 결제",
          body: [
            "반찬은 한 번 사고 끝나는 상품이 아니라서, 정기배송과 횟수 결제처럼 반복 구매를 다루는 기능이 많습니다. 결제 모듈 연동부터 배송 방법별 규칙까지 쇼핑몰 운영 방식에 맞춰 직접 만들었습니다.",
          ],
          items: [
            "이니시스 빌링 모듈을 이용한 정기결제 시스템 구축",
            "카카오페이 간편결제 모듈 연동",
            "정기배송 식단 관리 개발",
            "횟수 결제 상품의 주문서 자동 분리",
            "새벽배송·택배배송 방법별 수령 가능일 지정과 배송비 설정",
            "기존 상품을 묶어 구성하는 세트 상품 개발",
            "엑셀로 대량 수기 주문을 등록하는 기능",
          ],
          images: [
            {
              src: `${WORKS_BASE}/zipbanchan/zipbanchan-order-flow.jpg`,
              width: 1600,
              height: 1640,
              alt: "주문서 작성부터 결제까지의 화면 흐름",
              caption: "주문서 작성 흐름",
            },
          ],
        },
        {
          title: "회원과 마케팅 자동화",
          body: ["반복되는 마케팅 작업은 스케줄러로 자동화해, 운영자가 손대지 않아도 조건에 맞게 쿠폰과 등급이 돌아가도록 했습니다."],
          items: [
            "신규 회원 자동 쿠폰 발행",
            "스케줄러를 이용한 조건별 쿠폰 자동 발행",
            "스케줄러를 이용한 매월 회원 등급 자동 변경",
            "상품별 차등 할인 쿠폰, 쿠폰번호 임의 지정 생성",
            "친구 추천 기능",
            "카카오싱크 로그인, OK캐쉬백 적립·사용 API 연동",
          ],
        },
        {
          title: "외부 판매처·물류 연동",
          body: ["홈쇼핑 판매처와 택배사를 API로 연결해, 여러 곳에서 들어오는 상품·주문·문의와 송장 처리를 쇼핑몰 안에서 이어 받도록 했습니다."],
          items: [
            "롯데홈쇼핑 상품·주문 API 연동",
            "GS홈쇼핑 상품·주문·문의 API 연동",
            "CJ GLS 자동 송장 발급과 배송 상태 변경 API 연동",
            "협력사 자동 등록 코드 개발",
          ],
        },
        {
          title: "검색 노출과 측정",
          body: ["검색에 잘 걸리고 빨리 열리는 쇼핑몰이 되도록 상세페이지 구조와 속도를 다듬고, 광고·분석 도구를 연결했습니다."],
          items: [
            "검색 노출을 위한 상품 상세페이지 퍼블리싱과 상품·페이지 SEO 최적화",
            "스키마 마크업으로 구글 검색 결과에 상품 가격과 리뷰 정보 노출",
            "속도 향상을 위한 이미지 Lazy Load",
            "Google Tag Manager를 이용한 Google Analytics 4 연동",
            "Facebook 픽셀 서버 전환 API(Conversions API) 연동",
          ],
        },
        {
          title: "하이브리드 앱",
          body: ["모바일 웹을 바탕으로 하이브리드 앱을 만들고, 앱에서만 필요한 기능을 웹과 연동했습니다."],
          items: [
            "하이브리드 앱 개발과 자동 로그인",
            "FCM 푸시 발송",
            "로딩 이미지, 메뉴 활성 상태, 앱 설정 연동",
            "모바일 튜토리얼 기능",
          ],
        },
        {
          title: "사내 운영 시스템",
          body: [
            "쇼핑몰 바깥의 일도 함께 만들었습니다. 포장 현장, 주문 관리, 경영 정보를 위한 사내 시스템을 직접 개발해 쇼핑몰과 이어 쓰고 있습니다.",
          ],
          items: [
            "Z-PPS 피킹·패킹 시스템: 스캐너로 포장을 확인하고 송장 출력",
            "Z-OMS 주문 통합 관리 시스템: 여러 곳에 흩어진 주문을 한곳에 모아 관리",
            "Z-MIS 경영정보 시스템",
            "재구매율, 시계열, 후기, 문자 발송 등 각종 통계 페이지",
            "조리법 관리, ‘이야기’ 게시판 커스터마이징(상품 등록, 탭별 콘텐츠)",
            "Slack API로 사이트 오류 알림",
          ],
          images: [
            {
              src: `${WORKS_BASE}/zipbanchan/zipbanchan-order-done.jpg`,
              width: 1600,
              height: 1233,
              alt: "주문 완료 화면",
            },
          ],
        },
        {
          title: "오래 쓰는 쇼핑몰을 위한 유지보수",
          body: ["오래 운영되는 쇼핑몰인 만큼 기반도 꾸준히 손봅니다. 솔루션의 주요 보안 패치를 적용하고, PHP와 MySQL 버전을 올려 지금도 안정적으로 운영되고 있습니다."],
          items: ["고도몰 주요 보안 패치 적용", "PHP·MySQL 버전 업그레이드"],
          images: [
            {
              src: `${WORKS_BASE}/zipbanchan/zipbanchan-guide.jpg`,
              width: 1600,
              height: 450,
              alt: "온라인용 브랜드 가이드: 색상, 서체, 아이콘",
              caption: "리뉴얼 때 만든 온라인 브랜드 가이드",
            },
          ],
        },
      ],
      source: {
        label: "리메인의 리뉴얼 소개 보기",
        href: "https://remainlayer.com/work/%EB%B9%84%EC%A3%BC%EC%96%BC%ED%8C%A8%ED%84%B4%EA%B0%9C%EC%84%A0%EC%9D%84%ED%86%B5%ED%95%B4%EC%8B%9C%EC%9D%B8%EC%84%B1%EA%B3%BC%EC%82%AC%EC%9A%A9%EC%84%B1%EC%9D%84%EB%86%92%EC%9D%B8%EC%A7%91%EB%B0%98%EC%B0%AC%EC%97%B0%EA%B5%AC%EC%86%8C.html",
      },
    },
  },
  {
    id: "giom-kiosk",
    title: "GIOM MICE 키오스크 네이티브 앱",
    summary:
      "행사장 등록 키오스크의 윈도우 앱. React로 만든 키오스크 화면을 WebView2로 띄우고, 웹과 앱 사이 브릿지로 QR 리더기·컬러/흑백 라벨 프린터·영수증 프린터·카드 단말기를 제어했습니다. PMO·기획은 W2R GROUP과 함께했습니다.",
    year: "2026",
    role: "개발",
    stack: ["C#", "WPF", "WebView2", "하드웨어 연동"],
    coverColor: "#dcd8ce",
    links: [],
  },
  {
    id: "younginlab",
    title: "영인랩플러스 쇼핑몰 유지보수·추가 개발",
    summary:
      "실험실 소모품·장비 쇼핑몰 ‘랩플러스’의 유지보수와 추가 개발. 영카트 기반 PHP 쇼핑몰과 ERP·CRM 사이의 주문·재고·회원 연동을 바로잡고, 하이픈·공백을 무시하는 상품 검색과 검색 속도 개선, 서버 안정화를 맡았습니다. PMO는 W2R GROUP과 함께했습니다.",
    year: "2024–",
    role: "유지보수 · 개발",
    stack: ["PHP", "영카트", "MySQL", "ERP·CRM 연동"],
    coverColor: "#dcd8ce",
    links: [],
  },
  {
    id: "enliple-widgets",
    title: "인라이플 윈도우 바탕화면 위젯 8종",
    summary:
      "윈도우 바탕화면에서 쓰는 위젯들. 폴더 정리 위젯과 마우스 커서·배경화면·로또·사자성어·드라이브 안전 제거·전자액자·직소퍼즐 위젯을 만들었습니다. PMO·기획은 W2R GROUP과 함께했습니다.",
    year: "2024",
    role: "개발",
    stack: ["C#", "WPF", "윈도우 위젯"],
    coverColor: "#dcd8ce",
    links: [],
  },
];

export const profile = {
  skills: [
    { label: "주력", value: "Java · React · Next.js" },
    { label: "다룰 줄 앎", value: "PHP · Python · C#" },
  ],
  resumeHref: "",
};

export function getProject(id: string): Project | undefined {
  return projects.find((project) => project.id === id);
}
