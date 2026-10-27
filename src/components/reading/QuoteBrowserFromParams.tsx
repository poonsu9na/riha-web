"use client";

import { useSearchParams } from "next/navigation";
import QuoteBrowser from "./QuoteBrowser";

/**
 * ?book= 쿼리로 처음 거를 책을 정한다.
 * useSearchParams 를 쓰므로 페이지에서 <Suspense> 로 감싸야 한다.
 */
export default function QuoteBrowserFromParams() {
  const bookId = useSearchParams().get("book");
  // 같은 페이지 안에서 쿼리가 바뀌면 선택 상태를 새로 잡도록 key 로 리셋
  return <QuoteBrowser key={bookId ?? "all"} initialBookId={bookId} />;
}
