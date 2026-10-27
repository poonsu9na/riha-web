"use client";

import { useState } from "react";
import PhotoTile from "@/components/PhotoTile";
import type { Photo } from "@/content/types";
import PhotoLightbox from "./PhotoLightbox";
import styles from "./PhotoGrid.module.css";

const PAGE_SIZE = 12;

type Props = {
  photos: Photo[];
};

/** 비율이 섞인 사진을 세로 단으로 이어 붙인 그리드. 12장씩 더 보여주고, 누르면 크게 본다 */
export default function PhotoGrid({ photos }: Props) {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const shown = photos.slice(0, visible);

  return (
    <>
      <section aria-label="사진 목록" className={styles.grid}>
        {shown.map((photo, i) => (
          <button
            key={photo.id}
            type="button"
            className={styles.item}
            onClick={() => setOpenIndex(i)}
            aria-label={`${photo.title ?? photo.alt} 크게 보기`}
          >
            <PhotoTile photo={photo} sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 380px" />
            {photo.title && (
              <span className={styles.title} aria-hidden="true">
                {photo.title}
              </span>
            )}
          </button>
        ))}
      </section>

      {photos.length > visible && (
        <div className={styles.more}>
          <button type="button" className={styles.moreButton} onClick={() => setVisible((n) => n + PAGE_SIZE)}>
            더 보기
          </button>
        </div>
      )}

      <PhotoLightbox photos={photos} index={openIndex} onChange={setOpenIndex} />
    </>
  );
}
