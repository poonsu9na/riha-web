import styles from "./Stars.module.css";

type Props = {
  /** 0.5 단위 별점(예: 3.5). 없거나 0 이면 그리지 않는다 */
  rating?: number;
};

/** 별점 표시. 빈 별 위에 채운 별을 비율만큼 덮어 반 개도 그린다. 스크린리더에는 "별점 3.5점" */
export default function Stars({ rating }: Props) {
  if (!rating) return null;
  return (
    <span className={styles.stars} role="img" aria-label={`별점 ${rating}점`}>
      <span aria-hidden="true">☆☆☆☆☆</span>
      <span aria-hidden="true" className={styles.filled} style={{ width: `${(rating / 5) * 100}%` }}>
        ★★★★★
      </span>
    </span>
  );
}
