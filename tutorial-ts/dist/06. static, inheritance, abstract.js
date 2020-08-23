"use strict";
// ============================
// STATIC
// Статические свойства и методы - видны в классе без создания экземпляра
class UserClass {
    // Свойства name и age появятся в экземпляре класса
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // this.name - значение получаемое снаружи при создании экземпляра класса.
    // UserClass.secret - обращение к статическому свойству класса
    getPass() {
        return `${this.name}-${UserClass.secret}`;
    }
}
// Каждый экземпляр получит доступ к статическому свойству
UserClass.secret = 123;
const tom = new UserClass('Tom', 30);
tom.getPass(); //'Tom-123'
// ============================
// НАСЛЕДОВАНИЕ
// Имеем базовый класс
class UserClass_2 {
    constructor(name, age) {
        this.name = name;
        this.age = age;
        this.nickName = 'web';
    }
    getPass() {
        return `${this.name}-${UserClass_2.secret}`;
    }
}
UserClass_2.secret = 123;
// С помощью ключевого слова extends сделаем наследника.
// Класс Bob наследуется от класса UserClass_2
class Bob extends UserClass_2 {
    // ПЕРЕОПРЕДЕЛЕНИЕ КОНСТРУКТОРА
    // Если наследник имеет конструктор - первое что нужно сделать внутри конструктора -
    // вызвать конструктор родителя с помощью ключевого слова super -
    // таким образом мы обращаемся к его функционалу.
    // Даже если в классе родителя не был определен конструктор -
    // в классе наследника необходим вызов конструктора по умолчанию с помощью super()
    constructor(age) {
        // 'name' обернуто кавычками так как оно определено внутри класса
        super('name', age);
        this.name = 'Bob';
    }
    // ПЕРЕОПРЕДЕЛЕНИЕ МЕТОДА
    // Метод getPass уже сущевствует в родительском классе, но мы хотим создать его новую реализацию.
    // Для это просто создаем точно таким же образом новый метод и пишем его реализацию
    getPass() {
        // UserClass_2.secret - обращение к статическому свойству родителя
        return `${this.age}-${this.name}-${UserClass_2.secret}`;
    }
}
// Создадим экземпляры от двух наших классов
const max = new UserClass_2('Max', 20);
console.log(max); // { name: 'Max', age: 20, nickName: 'web' }
// Передаем один аргумент, так как в классе наследника уже есть свойство name
const bob = new Bob(30);
console.log(bob); // { name: 'Bob', age: 30, nickName: 'web' }
console.log(bob.getPass()); // 30-Bob-123
// ============================
// АБСТРАКТНЫЕ КЛАССЫ - это классы от которых наследуются другие.
// Они описывают общий функционал, описывают как должны выглядеть потомки.
// Нельзя создать напрямую объект абстрактного класса.
// Абстрактные классы определяются с ключевым словом abstract.
// NewUser - это абстрактный класс, который примерно описывает то, как должны выглядеть потомки
class NewUser {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    // Данный метод полностью реализован
    greet() {
        console.log(this.name);
    }
}
// Создаем класс Kurt, который наследуем от абстракции NewUser
class Kurt extends NewUser {
    constructor(age) {
        super('name', age);
        this.name = 'Kurt';
    }
    getPass() {
        return `${this.name}-${this.age}`;
    }
}
const kurt = new Kurt(27);
kurt.greet(); //Kurt
console.log(kurt.getPass()); //Kurt-27
