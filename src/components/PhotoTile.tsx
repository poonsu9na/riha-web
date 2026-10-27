import Image from "next/image";
import type { Photo } from "@/content/types";
import styles from "./PhotoTile.module.css";

type Props = {
  photo: Photo;
  /** 원본 비율 대신 강제할 비율. 예: "4 / 5" */
  aspectRatio?: string;
  sizes?: string;
};

/** 사진 한 장(목록용 thumb 우선). 이미지가 없으면 tone 색 placeholder 로 그린다 */
export default function PhotoTile({ photo, aspectRatio, sizes = "(max-width: 768px) 100vw, 33vw" }: Props) {
  const ratio = aspectRatio ?? `${photo.width} / ${photo.height}`;
  const src = photo.thumb ?? photo.src;

  return (
    <span className={styles.tile} style={{ aspectRatio: ratio, backgroundColor: photo.tone }}>
      {src ? <Image src={src} alt={photo.alt} fill sizes={sizes} className={styles.image} /> : null}
    </span>
  );
}
