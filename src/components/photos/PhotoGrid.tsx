"use client";

import { useState } from "react";
import PhotoTile from "@/components/PhotoTile";
import type { Photo } from "@/content/types";
import styles from "./PhotoGrid.module.css";

const PAGE_SIZE = 12;

type Props = {
  photos: Photo[];
};

/** 비율이 섞인 사진을 세로 단으로 이어 붙인 그리드. 12장씩 더 보여준다 */
export default function PhotoGrid({ photos }: Props) {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const shown = photos.slice(0, visible);

  return (
    <>
      <section aria-label="사진 목록" className={styles.grid}>
        {shown.map((photo) => (
          <div key={photo.id} className={styles.item}>
            <PhotoTile photo={photo} sizes="(max-width: 700px) 100vw, (max-width: 1050px) 50vw, 380px" />
          </div>
        ))}
      </section>

      {photos.length > visible && (
        <div className={styles.more}>
          <button type="button" className={styles.moreButton} onClick={() => setVisible((n) => n + PAGE_SIZE)}>
            더 보기
          </button>
        </div>
      )}
    </>
  );
}
