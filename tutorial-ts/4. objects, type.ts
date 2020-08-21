// =========================

// Описываем какие поля и типы может хранить объект
let user: { name: string; age: number } = {
  name: 'Joe',
  age: 20,
};

// Теперь при попытке добавить новое свойство, получим ошибку,
// так как ранее была задана строгая типизация для даного объекта
// user.nickname = 'dev';

// =========================

// Есть несколько объектов с одинаковыми полями и типами
// let audi: { name: string; year: number } = {
//   name: 'audi',
//   year: 2010,
// };
// let ford: { name: string; year: number } = {
//   name: 'ford',
//   year: 2020,
// };

// Чтобы избавиться от повторений при указании типов, необходимо использовать ключевое слово type (или интерфейсы),
// с помощью которого можно создать пользовательский тип и применить его ко всем объектам
type Car = { name: string; year: number };
let audi: Car = {
  name: 'audi',
  year: 2010,
};
let ford: Car = {
  name: 'ford',
  year: 2020,
};

// Если же наши объекты имеют некоторые отличия, описать типы можно так
type Car_2 = {
  name: string;
  year: number;
  color?: string;
  getInfo?: () => string; // поле хранит ф-цию, которая возвращает тип string
};
let audi_2: Car_2 = {
  name: 'audi',
  year: 2010,
  color: 'red',
};
let ford_2: Car_2 = {
  name: 'ford',
  year: 2020,
  getInfo(): string {
    return `${this.name},${this.year}`;
  },
};
