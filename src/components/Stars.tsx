type Props = {
  rating?: number;
};

/** 별점 표시. 스크린리더에는 "별점 4점" 으로 읽힌다 */
export default function Stars({ rating }: Props) {
  if (!rating) return null;
  return <span aria-label={`별점 ${rating}점`}>{"★".repeat(rating)}</span>;
}
