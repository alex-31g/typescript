"use strict";
// ==============================
// Интерфейсы объектов
// Необязательные свойства и свойства только для чтения
// ==============================
let user1 = {
    id: 1,
    name: 'Alice',
    sex: 'female',
    age: 23,
};
let user2 = {
    id: 2,
    name: 'Tom',
    sex: 'male',
};
// 1
let dog = {
    name: 'Tom',
};
// 2
let cat = {
    name: 'Tom',
};
let user3 = {
    id: 3,
    name: 'Tomas',
    sex: 'male',
    age: 20,
};
let employee = {
    name: 'Alice',
    getFullName(surname) {
        return this.name + ' ' + surname;
    },
};
console.log(employee.getFullName('Tompson')); // Alice Tompson
// Класс на базе двух интерфейсов
class SomeUser {
    // Свойство age не присутствует в интерфейсе, но ошибки нет.
    // Суть интерфейса для класса в том - что он описывает только обязательные свойства для класса,
    // остальные свойства могут присутствовать в любом колличестве
    // При реализации интерфейса классом свойства могут быть определены только как публичные
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    getFullName(surname) {
        return this.name + ' ' + surname;
    }
}
let tommy = new SomeUser('Tom', 23);
console.log(tommy.getFullName('Simpson')); // Tom Simpson
class Alex {
    constructor(name) {
        this.name = name;
    }
    getPass() {
        return this.name + '777';
    }
}
let alex = new Alex('alex');
console.log(alex.getPass()); // alex777
let simpleBuilder = (name, surname) => {
    return 'Mr. ' + name + ' ' + surname;
};
console.log(simpleBuilder('Bob', 'Simpson')); // Mr. Bob Simpson
let phones = ['iPhone 7', 'HTC 10', 'HP Elite x3'];
let myPhone = phones[0];
console.log(myPhone); // iPhone 7
const css = {
    border: '1px solid red',
    color: 'red',
};
const id1 = 1;
const id2 = '1';
// const id3: ID = true; // error
