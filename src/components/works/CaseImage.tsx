import Image from "next/image";
import type { WorkImage } from "@/content/types";
import styles from "./CaseImage.module.css";

// 세로가 가로의 1.8배를 넘는 이미지(전체 페이지 캡처 등)는 높이를 고정하고 안에서 스크롤한다
const TALL_RATIO = 1.8;

type Props = {
  image: WorkImage;
  priority?: boolean;
};

/** 포트폴리오 상세 이미지. 긴 화면 캡처는 브라우저처럼 스크롤해서 본다 */
export default function CaseImage({ image, priority }: Props) {
  const tall = image.height / image.width > TALL_RATIO;
  const img = (
    <Image
      src={image.src}
      alt={image.alt}
      width={image.width}
      height={image.height}
      sizes="(max-width: 1180px) 100vw, 1132px"
      priority={priority}
      className={styles.image}
    />
  );

  return (
    <figure className={styles.figure}>
      {tall ? (
        <div className={styles.scroller} tabIndex={0} aria-label={`${image.alt} (스크롤해서 전체 보기)`}>
          {img}
        </div>
      ) : (
        img
      )}
      {(image.caption || tall) && (
        <figcaption className={styles.caption}>
          {image.caption}
          {tall && <span className={styles.hint}>안에서 스크롤해 전체를 볼 수 있어요</span>}
        </figcaption>
      )}
    </figure>
  );
}
