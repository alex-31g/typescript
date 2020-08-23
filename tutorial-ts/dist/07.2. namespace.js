"use strict";
/// <reference path='07.1. namespace.ts' />
// Синтаксис для импорта namespace: /// <reference path='file-name.ts' />
// Теперь данные файла '07.1. namespace.ts' доступны нам:
const myPass2 = Utils_3.getPass('Sasha', 5);
console.log(myPass2); // Sasha:5
// Так как файлы '07.1. namespace.ts' и '07.2. namespace.ts' зависят друг от друга,
// их необходимо компилировать в один файл.
// Команда для компиляции '07.1. namespace.ts' и '07.2. namespace.ts в '07. namespace.js':
// tsc --outFile '07. namespace.js' '07.1. namespace.ts' '07.2. namespace.ts'
