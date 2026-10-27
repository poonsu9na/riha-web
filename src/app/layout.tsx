import type { Metadata } from "next";
import { Nanum_Myeongjo, Noto_Sans_KR } from "next/font/google";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { site } from "@/content/site";
import "./globals.css";

// 한글 글꼴은 서브셋이 커서 preload 하지 않는다
const nanumMyeongjo = Nanum_Myeongjo({
  variable: "--font-nanum-myeongjo",
  weight: ["400", "700", "800"],
  preload: false,
  display: "swap",
});

const notoSansKr = Noto_Sans_KR({
  variable: "--font-noto-sans-kr",
  weight: ["400", "500", "700"],
  preload: false,
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.name,
    template: `%s · ${site.name}`,
  },
  description: site.description,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="ko" className={`${nanumMyeongjo.variable} ${notoSansKr.variable}`}>
      <body>
        <div className="container">
          <SiteHeader />
          <main>{children}</main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
