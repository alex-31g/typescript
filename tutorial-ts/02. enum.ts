// enum - набор именованных числовых констант
// Перечисления начинаются с нуля
enum Direction {
  Up, // 0
  Downn, // 1
  Left, // 2
  Right, // 3
}
console.log(Direction.Left + 10); // 12

// Также можно задавать значения.
// При этом, если значение не задано, то оно инкрементируется от предыдущего
enum Direction_2 {
  Up = 10, // 10
  Downn = 5, // 5
  Left, // 6 так как предыдущее равно 5
  Right, // 7
}
console.log(Direction_2.Right); // 7

// Также можно получать ключи по значению
console.log(Direction_2[6]); // 'Left'

// Пример использования (рекомендуется использовать с const)
const enum links {
  youtube = 'https://youtube.com/',
  vk = 'https://vk.com/',
}
console.log(links.vk);
