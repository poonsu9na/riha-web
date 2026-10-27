import FeaturedWorks from "@/components/home/FeaturedWorks";
import HeroQuote from "@/components/home/HeroQuote";
import RecentBooks from "@/components/home/RecentBooks";
import RecentPhotos from "@/components/home/RecentPhotos";
import RecentQuotes from "@/components/home/RecentQuotes";
import SectionIndex from "@/components/home/SectionIndex";
import { books } from "@/content/books";
import { photos } from "@/content/photos";
import { projects } from "@/content/projects";
import { quotes } from "@/content/quotes";
import type { Quote } from "@/content/types";
import styles from "./page.module.css";

// 홈은 문장이 짧아야 모양이 맞는다. 큰 문장은 80자, 최근 문장은 120자 이하에서 고른다
const HERO_MAX = 80;
const RECENT_MAX = 120;
const RECENT_COUNT = 3;

/** 짧은 문장 위주로, 되도록 서로 다른 책에서 고른다. 모자라면 길이 제한 없이 채운다 */
function pickHomeQuotes(all: Quote[]) {
  const hero = all.find((quote) => quote.text.length <= HERO_MAX) ?? all[0];
  const rest = all.filter((quote) => quote !== hero);
  const short = rest.filter((quote) => quote.text.length <= RECENT_MAX);

  const picked: Quote[] = [];
  const usedBooks = new Set(hero ? [hero.bookId] : []);
  const take = (pool: Quote[], distinctBooks: boolean) => {
    for (const quote of pool) {
      if (picked.length >= RECENT_COUNT) return;
      if (picked.includes(quote) || (distinctBooks && usedBooks.has(quote.bookId))) continue;
      picked.push(quote);
      usedBooks.add(quote.bookId);
    }
  };
  take(short, true); // 짧고 책이 겹치지 않는 문장
  take(short, false); // 모자라면 같은 책이라도 짧은 문장
  take(rest, false); // 그래도 모자라면 긴 문장
  return { hero, recent: picked };
}

export default function Home() {
  const doneBooks = books.filter((book) => book.status === "done");
  const readingBook = books.find((book) => book.status === "reading");
  const { hero: heroQuote, recent: recentQuotes } = pickHomeQuotes(quotes);

  const indexItems = [
    { href: "/reading", title: "읽기", description: `읽은 책 ${doneBooks.length}권 · 밑줄 문장 ${quotes.length}개` },
    { href: "/photos", title: "사진", description: `찍어서 그냥 올리는 사진 · ${photos.length}장` },
    { href: "/works", title: "포트폴리오", description: `만든 것들 · ${projects.length}개 프로젝트` },
  ];

  return (
    <div className={styles.home}>
      {heroQuote && <HeroQuote quote={heroQuote} />}
      <SectionIndex items={indexItems} />
      {/* 읽는 중인 책이 없으면 그 자리만큼 다 읽은 책을 더 보여준다 */}
      <RecentBooks reading={readingBook} done={doneBooks.slice(0, readingBook ? 4 : 6)} />
      <RecentQuotes quotes={recentQuotes} />
      <RecentPhotos photos={photos.slice(0, 5)} />
      <FeaturedWorks projects={projects.filter((project) => project.featured)} />
    </div>
  );
}
