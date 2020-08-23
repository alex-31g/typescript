"use strict";
// Модули - это код, вынесенный в отдельные файлы, что позволяет приложению быть более ясным.
// Модули подключаются в приложение с помощью загрузчика модулей:
// - amd (Asynchronys Module Defenition)
// - commonjs
// - umd (Universal Module Defenition)
// - system
// - es 2015
Object.defineProperty(exports, "__esModule", { value: true });
exports.f5 = exports.f4 = exports.CallFunc3 = exports.CallFunc2 = exports.CallFunc1 = void 0;
// import/export не работают внутри {...}
// if (something) {
//   import {sayHi} from "./say.js"; // ошибка
// }
// =========================
// Экспорт до объявления
// =========================
function CallFunc1() {
    console.log('Make a call 1');
}
exports.CallFunc1 = CallFunc1;
// ========================
// Экспорт отдельно от объявления
// ========================
function CallFunc2() {
    console.log('Make a call 2');
}
exports.CallFunc2 = CallFunc2;
function CallFunc3() {
    console.log('Make a call 3');
}
exports.CallFunc3 = CallFunc3;
// ========================
// Экспортировать как псевдоним
// ========================
function CallFunc4() {
    console.log('Make a call 4');
}
exports.f4 = CallFunc4;
function CallFunc5() {
    console.log('Make a call 5');
}
exports.f5 = CallFunc5;
// ========================
// Экспорт по умолчанию
// ========================
// Особенности экспорта по умолчанию:
// - в файле может быть только один export default
// - не требуют имен, например у ф-ции ниже нету имени
// - при импорте можно задавать любое имя
function default_1() {
    console.log('Export Default Function');
}
exports.default = default_1;
