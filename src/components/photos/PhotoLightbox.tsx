"use client";

import Image from "next/image";
import { type CSSProperties, useEffect, useRef } from "react";
import type { Photo } from "@/content/types";
import styles from "./PhotoLightbox.module.css";

type Props = {
  photos: Photo[];
  /** 열려 있는 사진의 index. null 이면 닫힘 */
  index: number | null;
  onChange: (index: number | null) => void;
};

/** 사진을 화면 가득 크게 보여주는 창. ←/→ 로 넘기고 Esc·바깥 클릭으로 닫는다 */
export default function PhotoLightbox({ photos, index, onChange }: Props) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const photo = index === null ? null : photos[index];

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (photo && !dialog.open) dialog.showModal();
    if (!photo && dialog.open) dialog.close();
  }, [photo]);

  const go = (step: number) => {
    if (index === null) return;
    onChange((index + step + photos.length) % photos.length);
  };

  return (
    <dialog
      ref={dialogRef}
      className={styles.dialog}
      aria-label={photo?.title ?? "사진 크게 보기"}
      onClose={() => onChange(null)}
      onClick={(event) => {
        // 사진·버튼 바깥(배경)을 누르면 닫는다
        if (event.target === event.currentTarget) onChange(null);
      }}
      onKeyDown={(event) => {
        if (event.key === "ArrowLeft") go(-1);
        if (event.key === "ArrowRight") go(1);
      }}
    >
      {photo && (
        <div className={styles.body} onClick={(event) => event.target === event.currentTarget && onChange(null)}>
          <figure className={styles.figure}>
            <div
              className={styles.frame}
              style={{ "--ratio": photo.width / photo.height, aspectRatio: `${photo.width} / ${photo.height}` } as CSSProperties}
            >
              {photo.src ? <Image src={photo.src} alt={photo.alt} fill sizes="100vw" className={styles.image} /> : null}
            </div>
            <figcaption className={styles.caption}>
              <span>{photo.title}</span>
              <span className={styles.count}>
                {index! + 1} / {photos.length}
              </span>
            </figcaption>
          </figure>

          <button type="button" className={`${styles.nav} ${styles.prev}`} onClick={() => go(-1)} aria-label="이전 사진">
            ‹
          </button>
          <button type="button" className={`${styles.nav} ${styles.next}`} onClick={() => go(1)} aria-label="다음 사진">
            ›
          </button>
          <button type="button" className={styles.close} onClick={() => onChange(null)} aria-label="닫기">
            ×
          </button>
        </div>
      )}
    </dialog>
  );
}
