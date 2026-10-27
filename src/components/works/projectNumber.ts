/** 목차·블록에 붙는 두 자리 번호. 0 → "01" */
export function projectNumber(index: number): string {
  return String(index + 1).padStart(2, "0");
}
