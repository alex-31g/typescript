// Модули - это код, вынесенный в отдельные файлы, что позволяет приложению быть более ясным.
// Модули подключаются в приложение с помощью загрузчика модулей:
// - amd (Asynchronys Module Defenition)
// - commonjs
// - umd (Universal Module Defenition)
// - system
// - es 2015

// import/export не работают внутри {...}
// if (something) {
//   import {sayHi} from "./say.js"; // ошибка
// }

// =========================
// Экспорт до объявления
// =========================

export function CallFunc1(): void {
  console.log('Make a call 1');
}

// ========================
// Экспорт отдельно от объявления
// ========================

function CallFunc2(): void {
  console.log('Make a call 2');
}

function CallFunc3(): void {
  console.log('Make a call 3');
}
export { CallFunc2, CallFunc3 };

// ========================
// Экспортировать как псевдоним
// ========================

function CallFunc4(): void {
  console.log('Make a call 4');
}

function CallFunc5(): void {
  console.log('Make a call 5');
}
export { CallFunc4 as f4, CallFunc5 as f5 };

// ========================
// Экспорт по умолчанию
// ========================

// Особенности экспорта по умолчанию:
// - в файле может быть только один export default
// - не требуют имен, например у ф-ции ниже нету имени
// - при импорте можно задавать любое имя
export default function (): void {
  console.log('Export Default Function');
}
