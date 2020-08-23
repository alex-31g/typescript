"use strict";
// Параметры ф-ции могут иметь дефолтные значения
const createPassword = (name = 'Alex', age = 20) => {
    return `${name}, ${age}`;
};
console.log(createPassword()); // Alex, 20
// Ф-ция может иметь опциональные параметры.
// Опциональные параметры указываются с ? в конце.
// Опциональные параметры не могут иметь дефолтных значений.
// Опциональные параметры всегда идут после обязательных параметров
const createPassword_2 = (name = 'Alex', age) => {
    return `${name}, ${age}`;
};
console.log(createPassword_2()); // Alex, 20
// Остаточные параметры REST
const createSkills = (name, ...skills) => {
    // return `${name}, your skills are ${skills.join()}`;
    return `${name}, your skills are ${skills}`;
};
console.log(createSkills('joe', 'js', 'angular', 'node'));
// Важно описывать тип данных, которые возвращает ф-ция
const createObject = (value) => {
    return { key: value };
};
console.log(createObject('hello'));
// Если ф-ция ничего не возвращает - используем void
const sayHello = () => {
    console.log('Hello');
};
// Для ф-ций используем тип never в двух случаях:
// - когда ф-ция возвращает ошибку и не заканчивает свое выполнение
// - когда ф-ция постоянно выполняется
const error = (message) => {
    throw new Error(message);
};
const infiniteLoops = () => {
    while (true) { }
};
/*
    Присвоение в переменную ф-ций вида function
*/
// Необходимо в переменную myFunc присвоить ф-цию oldFunc.
// Указываем, что в переменной должна храниться функция с одним аргументом типа string и ф-ция будет возвращать тип string
let myFunc;
function oldFunc(name) {
    return `Hello, ${name}`;
}
myFunc = oldFunc;
console.log(myFunc('Joe'));
// console.log(myFunc(555)); // ошибка, так как аргумент типа "number" нельзя назначить параметру типа "string"
