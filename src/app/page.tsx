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
import styles from "./page.module.css";

export default function Home() {
  const doneBooks = books.filter((book) => book.status === "done");
  const readingBook = books.find((book) => book.status === "reading");
  const [heroQuote, ...restQuotes] = quotes;

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
      <RecentQuotes quotes={restQuotes.slice(0, 3)} />
      <RecentPhotos photos={photos.slice(0, 5)} />
      <FeaturedWorks projects={projects.filter((project) => project.featured)} />
    </div>
  );
}
