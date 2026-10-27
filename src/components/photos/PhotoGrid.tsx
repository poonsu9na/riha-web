"use client";

import { useState } from "react";
import PhotoTile from "@/components/PhotoTile";
import type { Photo } from "@/content/types";
import PhotoLightbox from "./PhotoLightbox";
import styles from "./PhotoGrid.module.css";

const PAGE_SIZE = 12;

// 화면 폭별 단 수와 각 단의 이미지 sizes. 어떤 레이아웃을 보일지는 CSS 미디어 쿼리가 고른다
const LAYOUTS = [
  { columns: 1, className: styles.one, sizes: "100vw" },
  { columns: 2, className: styles.two, sizes: "50vw" },
  { columns: 3, className: styles.three, sizes: "380px" },
] as const;

type Placed = { photo: Photo; index: number };

/**
 * 사진을 순서대로 "지금 가장 짧은 단"에 넣는다.
 * CSS columns 와 달리 최신 사진이 왼쪽→오른쪽으로 이어지면서도 마소니 모양이 된다.
 * 높이는 원본 비율로 계산하므로 DOM 을 재지 않아도 된다.
 */
function distribute(photos: Photo[], columnCount: number): Placed[][] {
  const columns: Placed[][] = Array.from({ length: columnCount }, () => []);
  const heights = new Array<number>(columnCount).fill(0);

  photos.forEach((photo, index) => {
    const shortest = heights.indexOf(Math.min(...heights));
    columns[shortest].push({ photo, index });
    heights[shortest] += photo.height / photo.width;
  });

  return columns;
}

type Props = {
  photos: Photo[];
};

/** 마소니 사진 그리드. 12장씩 더 보여주고, 누르면 크게 본다 */
export default function PhotoGrid({ photos }: Props) {
  const [visible, setVisible] = useState(PAGE_SIZE);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const shown = photos.slice(0, visible);

  return (
    <>
      <section aria-label="사진 목록" className={styles.grid}>
        {LAYOUTS.map((layout) => (
          <div key={layout.columns} className={`${styles.layout} ${layout.className}`}>
            {distribute(shown, layout.columns).map((column, c) => (
              <div key={c} className={styles.column}>
                {column.map(({ photo, index }) => (
                  <button
                    key={photo.id}
                    type="button"
                    className={styles.item}
                    onClick={() => setOpenIndex(index)}
                    aria-label={`${photo.title ?? photo.alt} 크게 보기`}
                  >
                    <PhotoTile photo={photo} sizes={layout.sizes} />
                    {photo.title && (
                      <span className={styles.title} aria-hidden="true">
                        {photo.title}
                      </span>
                    )}
                  </button>
                ))}
              </div>
            ))}
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

      <PhotoLightbox photos={photos} index={openIndex} onChange={setOpenIndex} />
    </>
  );
}
