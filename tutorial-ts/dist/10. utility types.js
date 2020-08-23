"use strict";
// typescript предоставляет 16 утилит для преобразования типов (type):
// https://www.typescriptlang.org/docs/handbook/utility-types.html
const todo = {
    id: 1,
};
// Создаем объект только с 1 полем - ok
const foo1 = { a: 5 };
const nav = {
    about: { title: 'hello' },
    contact: { title: 'world' },
    home: { title: '!!!' },
};
console.log(nav.about); // { title: 'hello' }
const todo2 = {
    title: 'Clean room',
    completed: false,
};
const todo3 = {
    title: 'Clean room',
    completed: false,
};
// ============================
// ReturnType - создает тип, состоящий из возвращаемого функцией типа
// ============================
const fooo1 = (id, color) => {
    return color;
};
const z1 = 'hello';
// const z2: Ty1 = 5; // error
const fooo2 = (id, color) => {
    return { id, color };
};
const z3 = {
    id: 1,
    color: 'red',
};
// const z4: Ty1 = 5; // error
// ============================
// ReturnType - создает тип, состоящий из типа экземпляра ф-ции конструктора
// ============================
// TODO
