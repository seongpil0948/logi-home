export const uniqueArr = <T>(arr: T[]): T[] => [...new Set(arr)];
export function uniqueFilter<T>(arr: T[]): T[] {
  // used when There are many Duplicate values
  return arr.filter((x, idx) => arr.indexOf(x) === idx);
}
export function range(start: number, end: number) {
  return Array.from(Array(end - start).keys()).map((x) => x + 1);
}
export function choice<T>(choices: T[]): T {
  const index = Math.floor(Math.random() * choices.length);
  return choices[index];
}
