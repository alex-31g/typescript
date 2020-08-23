"use strict";
// ***********************************
// ДЖЕНЕРИК ТИПЫ
// ***********************************
// Чтобы скомпилировать только этот файл:
// tsc -t es6 '11. generic.ts'
// обычная запись типов
const cars = ['audi', 'ford'];
// использование дженериков для записи типов
const cars_2 = ['audi', 'ford'];
// использование дженериков для записи типов промисов (вариант 1)
const promise = new Promise((resolve) => { });
// использование дженериков для записи типов промисов (вариант 2)
const promise_2 = new Promise((resolve) => { });
console.log('ФУНКЦИИ ======================');
// ==============================
// ФУНКЦИИ - ПРИМЕР 1
// Добавляя к функции скобки <> мы делаем её дженерик функцией.
// Внутри скобок указываем с какими типами ф-ция будет работать.
// Мы сами придумываем названия для этих типов -
// обычно эти типы содержат одну большую букву -
// в нашем случаи мы задаем типы T и R.
// Также мы указываем, что наша ф-ция может работать только с объектами,
// для этого указываем, что типы T и R наследуются от object:
// <T extends object, R extends object>
// Далее присваем типы, с которыми работает наша ф-ция к параметрам:
// (a: T, b: R)
function mergeObjects(a, b) {
    return Object.assign({}, a, b);
}
const merged = mergeObjects({ name: 'alex' }, { age: 35 });
// Чтобы указать что ф-ция работает с дженерик типом у которого есть ключ length,
// мы производим наследование от даного интерфейса:
// <T extends ILength>
function withCount(value) {
    return {
        value,
        count: `object has ${value.length} symbols`,
    };
}
console.log(withCount('Hello'));
console.log(withCount(['i', 'am', 'array']));
// Аргумент типа "20" нельзя назначить параметру типа "ILength":
// console.log(withCount(20)); // тут получим ошибку
// ==============================
// ==============================
// ФУНКЦИИ - ПРИМЕР 3
// getObjectKey - это дженерик ф-ция, которая работает с типами:
// - Т который наследуются от object
// - R который наследуется от ключей типа Т с помощью keyof -
// таким образом мы говорим, что только свойство, которое есть у типа Т
// может быть вторым параметром ф-ции
function getObjectKey(obj, key) {
    return obj[key];
}
const person = {
    name: 'Alex',
    age: 35,
};
console.log(getObjectKey(person, 'name'));
// ==============================
console.log('КЛАССЫ ======================');
// ==============================
// КЛАССЫ - ПРИМЕР 1
// Указываем что класс работает с дженерик типом Т,
// который может быть number | string | boolean
class Collestion {
    // Указываем, что _items это массив, который может хранить
    // только типы Т (чтоб легче понять _items: number[] = [])
    // и значение по умочанию пустой массив
    constructor(_items = []) {
        this._items = _items;
    }
    add(item) {
        this._items.push(item);
    }
    remove(item) {
        this._items = this._items.filter((elem) => elem !== item);
    }
    get items() {
        return this._items;
    }
}
const strings = new Collestion(['i', 'am', 'strings']);
strings.add('!');
strings.remove('am');
console.log(strings.items);
const numbers = new Collestion([1, 2, 3]);
numbers.add(2);
numbers.remove(3);
console.log(numbers.items);
function createAndValidateCar(model, year) {
    // Создаем объект, который имеет тип ICar и значение {}:
    // const car: ICar = {}; // ошибка: отсутствуют свойства из типа "ICar": model, year.
    // Но получили ошибку, что в нашем объекте нету полей, которые есть в типе ICar.
    // Чтобы избавиться от этой ошибки, используем утилиту Partial, которая говорит
    // что мы создаем объект в котором ВРЕМЕННО не хватает определенных полей:
    const car = {};
    if (model.length > 2)
        car.model = model;
    if (year > 2000)
        car.year = year;
    return car;
}
// ==============================
// ==============================
// Утилита Readonly
// Имеем массив, который хранится в константе:
const carsArr = ['Ford', 'Audi'];
// Несмотря на то, что массив хранится в константе,
// мы можем менять его состояние, например удалим один элемент:
carsArr.shift();
// Чтобы запретить изменение состояния, используем утилиту Readonly:
const carsArr_2 = ['Ford', 'Audi'];
// carsArr_2.shift(); // будет ошибка
// Тоже самое можно делать для объектов:
const fords = {
    model: 'ford',
    year: 2000,
};
// Мы можем изменить поле и это не будет ошибкой, так как поле остается,
// меняется только значение:
fords.model = 'audi';
// Чтобы запретить изменение состояния, используем утилиту Readonly:
const fords_2 = {
    model: 'ford',
    year: 2000,
};
// fords_2.model = 'audi'; // будет ошибка
// ==============================
