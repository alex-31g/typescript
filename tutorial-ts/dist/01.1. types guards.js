"use strict";
// type guards (защита типа) - это механизм, позволяющий составить логические условия, в результате которых будет выбран нужный тип из множества типов.
// Данный механизм реализовывается с помощью операторов typeof, instanceof, in и на основе функций определенных пользователем
// ======================
// typeof
// ======================
// Ф-ция, в зависимости от типа получаемого параметра, имеет разную логику.
// Чтоб определить тип параметра - используется механизм type guards, реализованный с помощью typeof
function strip(x) {
    if (typeof x === 'number') {
        return x.toFixed(2);
    }
    return x.trim();
}
// ======================
// instanceof
// ======================
// Ф-ция handle, в зависимости от какого класса был создан параметр, имеет разную логику.
// Чтоб определить от какого класса был создан параметр - используется механизм type guards, реализованный с помощью instanceof
class MyResponse {
    constructor() {
        this.header = 'response header';
        this.result = 'response result';
    }
}
class MyError {
    constructor() {
        this.header = 'error header';
        this.errorMessage = 'error message';
    }
}
function handle(res) {
    if (res instanceof MyResponse) {
        return {
            info: res.header + ' ' + res.result,
        };
    }
    else {
        return {
            info: res.header + ' ' + res.errorMessage,
        };
    }
}
const objError = new MyError();
console.log(handle(objError));
function func(firstOrSecond) {
    if ('first' in firstOrSecond) {
        return 'first ' + firstOrSecond.first;
    }
    return 'second ' + firstOrSecond.second;
}
console.log(func({ first: 'hello' }));
