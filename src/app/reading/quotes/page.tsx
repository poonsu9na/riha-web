import type { Metadata } from "next";
import { Suspense } from "react";
import PageIntro from "@/components/PageIntro";
import QuoteBrowser from "@/components/reading/QuoteBrowser";
import QuoteBrowserFromParams from "@/components/reading/QuoteBrowserFromParams";
import ReadingTabs from "@/components/reading/ReadingTabs";
import { quotes } from "@/content/quotes";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "밑줄 문장",
};

export default function QuotesPage() {
  return (
    <>
      <PageIntro
        eyebrow="01 — 읽기"
        title="밑줄 그은 문장들"
        description={`책을 읽다 멈춘 자리에서 한 줄씩 옮겨 적습니다. 지금까지 ${quotes.length}개.`}
      >
        <ReadingTabs current="quotes" />
      </PageIntro>

      <div className={styles.body}>
        {/* 정적 셸에는 "전체" 상태로 그려두고, 쿼리를 읽으면 그 책으로 바꾼다 */}
        <Suspense fallback={<QuoteBrowser />}>
          <QuoteBrowserFromParams />
        </Suspense>
      </div>
    </>
  );
}
