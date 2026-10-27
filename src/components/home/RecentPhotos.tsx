import Link from "next/link";
import PhotoTile from "@/components/PhotoTile";
import SectionHeader from "@/components/SectionHeader";
import type { Photo } from "@/content/types";
import styles from "./RecentPhotos.module.css";

type Props = {
  photos: Photo[];
};

/** "최근 사진": 4:5 로 잘라 한 줄에 늘어놓는다 */
export default function RecentPhotos({ photos }: Props) {
  return (
    <section className={styles.section}>
      <SectionHeader title="최근 사진" moreHref="/photos" moreLabel="사진 모두 보기" />
      <div className={styles.grid}>
        {photos.map((photo) => (
          <Link key={photo.id} href="/photos" aria-label="사진 보기">
            <PhotoTile photo={photo} aspectRatio="4 / 5" sizes="(max-width: 767px) 50vw, 20vw" />
          </Link>
        ))}
      </div>
    </section>
  );
}
