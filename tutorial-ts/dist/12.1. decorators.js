"use strict";
// Декораторы позволяют добавить к классам и их членам метаданные и тем самым изменить их поведение без изменения их кода.
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Есть 4 вида декораторов:
// - для классов
// - для свойств
// - для методов внутри класов
// - для геттеров и сеттеров
// Декораторы в основном работают с класами.
// Сами по себе декораторы - это обычные ф-ции.
// Ф-ция Log будет выступать в роли декоратора для класса Component.
// Декораторы классов должны принимать параметр constructor с типом Function.
// Если мы выведем в консоль console.log(constructor), то увидим там наш класс Component,
// с которым мы можем взаимодействовать
function Log(constructor) {
    console.log('====================');
    console.log('декоратор для класса Component', constructor);
}
// Ф-ция Log2 будет выступать в роли декоратора для свойства name внутри класса Component.
// Декораторы свойств принимают 2 параметра.
function Log2(target, propName) {
    console.log('====================');
    console.log('декоратор для свойства name', target); // class Component
    console.log('декоратор для свойства name', propName); // name1
}
// Ф-ция Log3 будет выступать в роли декоратора для метода logName внутри класса Component.
// Декораторы методов принимают 3 параметра.
function Log3(target, propName, descriptor) {
    console.log('====================');
    console.log('декоратор для метода logName', target); // class Component
    console.log('декоратор для метода logName', propName); // logName
    console.log('декоратор для метода logName', descriptor);
}
// Ф-ция Log4 будет выступать в роли декоратора для геттера componentName внутри класса Component.
// Декораторы геттеров/сеттеров аналогичны декораторам методов и принимают 3 параметра.
// Разница между декоратором для метода и для геттера/сеттера в том, что внутри объекта descriptor
// мы можем видеть свойство get/set, а свойство value - отсутствует
function Log4(target, propName, descriptor) {
    console.log('====================');
    console.log('декоратор для геттера componentName', target); // class Component
    console.log('декоратор для геттера componentName', propName); // logName
    console.log('декоратор для геттера componentName', descriptor);
}
// Чтобы навесить декоратор на класс/свойство/метод нужно:
// 1) в файле tsconfig.json расскоментировать строку - "experimentalDecorators": true
// 2) навешивать декоратор с помощью @decoratorName - синтаксиса, непосредственно перед классом/свойством/методом
let Component = class Component {
    constructor(name) {
        this.name1 = name;
    }
    logName() {
        console.log(`Component name: ${this.name1}`);
    }
    get componentName() {
        return this.name1;
    }
};
__decorate([
    Log2
], Component.prototype, "name1", void 0);
__decorate([
    Log3
], Component.prototype, "logName", null);
__decorate([
    Log4
], Component.prototype, "componentName", null);
Component = __decorate([
    Log
], Component);
