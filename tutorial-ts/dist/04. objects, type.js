"use strict";
// =========================
// Описываем какие поля и типы может хранить объект
let user = {
    name: 'Joe',
    age: 20,
};
let audi = {
    name: 'audi',
    year: 2010,
};
let ford = {
    name: 'ford',
    year: 2020,
};
let audi_2 = {
    name: 'audi',
    year: 2010,
    color: 'red',
};
let ford_2 = {
    name: 'ford',
    year: 2020,
    getInfo() {
        return `${this.name},${this.year}`;
    },
};
