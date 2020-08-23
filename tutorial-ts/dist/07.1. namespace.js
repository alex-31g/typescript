"use strict";
// namespace - позволяют создавать модульный код, объединять элементы в группы.
// namespace - это отдельная сущность похожая на объект, объявляется с помощью ключевого слова namespace.
// namespace инкапсулирует все добавленные в нее сущности, создавая свое пространство имен.
var Utils;
(function (Utils) {
    const SECRET = '4545';
    const getPass = (name, age) => `${name}:${age}`;
})(Utils || (Utils = {}));
// Если мы попробуем обратиться к константе из namespace как к свойству объекта, то получим ошибку.
// Это основное отличие namespace от объекта:
// const myPass = Utils.getPass('Alex', 35); // ошибка
// namespace создают свою локальную область видимости, внутри которой мы можем поместить любое количество данных.
// Чтобы получить доступ к этим данным снаружи, нам нужно экспортировать их с помощью ключевого слова export:
var Utils_2;
(function (Utils_2) {
    Utils_2.SECRET = '4545';
    Utils_2.getPass = (name, age) => `${name}:${age}`;
})(Utils_2 || (Utils_2 = {}));
const myPass = Utils_2.getPass('Alex', 35);
console.log(myPass); // Alex:35
// За пределами namespace Utils_2 можно создать еще одну константу SECRET и это не будет ошибка:
const SECRET = '111';
// ==============================
// Что если нужно использовать один namespace на несколько файлов?
// Например у нас есть namespace Utils_3:
var Utils_3;
(function (Utils_3) {
    Utils_3.SECRET = '777';
    Utils_3.getPass = (name, age) => `${name}:${age}`;
})(Utils_3 || (Utils_3 = {}));
// И нам нужно получить доступ к ф-ции getPass в файле '07.2. namespace.ts'
// Продолжение в файле '07.2. namespace.ts' ...
