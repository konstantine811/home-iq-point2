export function countDecimalPlaces(number: number) {
  if (Math.floor(number) === number) {
    return 0; // Число ціле, немає цифр після крапки
  }

  // Перетворення числа на рядок і визначення довжини після крапки
  const decimalPart = number.toString().split(".")[1];
  return decimalPart ? decimalPart.length : 0;
}
