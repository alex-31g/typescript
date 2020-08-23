"use strict";
// =========================
// ТИПЫ
// =========================
// boolean, number, string
const isTrue = true;
const num = 1;
const str = 'hello';
// задание нескольких типов
const foo = 5;
// undefined
const u = undefined;
// null
const n = null;
// void - предназначен для определения отсутствующих типов.
// Например, ф-ция ничего не возвращает и значит, результат выполнения ф-ции - отсутствующий тип
const sayName = (name) => {
    console.log(name);
};
// Array
const arr1 = [1, 2, 3];
// Array generic
const arr2 = [1, 2, 3];
// Tuple - массив, который состоит из разных типов
const arr3 = ['hello', 1];
// any - возможность переопределять типы
let x = 1;
x = 2;
// never - следует указывать в двух случаях:
// - когда ф-ция возвращает ошибку и не заканчивает свое выполнение
// - когда ф-ция постоянно выполняется
const throwError = (message) => {
    throw new Error(message);
};
const infiniteLoop = () => {
    while (true) { }
};
// object
const obj = {
    pass: 1111,
};
