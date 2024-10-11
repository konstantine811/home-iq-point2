export function splitArray<T>(array: T[]): { firstHalf: T[]; secondHalf: T[] } {
  // Знайти середину масиву
  const middleIndex = Math.ceil(array.length / 2);

  // Розділити масив на дві половини
  const firstHalf = array.slice(0, middleIndex);
  const secondHalf = array.slice(middleIndex);

  return { firstHalf, secondHalf };
}
