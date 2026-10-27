import Image from "next/image";
import type { WorkImage } from "@/content/types";
import styles from "./CaseImage.module.css";

type Props = {
  image: WorkImage;
  priority?: boolean;
};

/** 포트폴리오 상세 이미지. 긴 화면 캡처도 잘라내지 않고 원본 비율 그대로 펼쳐 보여준다 */
export default function CaseImage({ image, priority }: Props) {
  return (
    <figure className={styles.figure} style={image.maxWidth ? { maxWidth: image.maxWidth } : undefined}>
      <Image
        src={image.src}
        alt={image.alt}
        width={image.width}
        height={image.height}
        sizes={image.maxWidth ? `${image.maxWidth}px` : "(max-width: 1180px) 100vw, 1132px"}
        priority={priority}
        className={styles.image}
      />
      {image.caption && <figcaption className={styles.caption}>{image.caption}</figcaption>}
    </figure>
  );
}
