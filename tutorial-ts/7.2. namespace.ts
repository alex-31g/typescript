/// <reference path='7.1. namespace.ts' />

// Синтаксис для импорта namespace: /// <reference path='file-name.ts' />
// Теперь данные файла '7.1. namespace.ts' доступны нам:

const myPass2 = Utils_3.getPass('Sasha', 5);
console.log(myPass2); // Sasha:5

// Так как файлы '7.1. namespace.ts' и '7.2. namespace.ts' зависят друг от друга,
// их необходимо компилировать в один файл.
// Команда для компиляции '7.1. namespace.ts' и '7.2. namespace.ts в '7. namespace.js':

// tsc --outFile '7. namespace.js' '7.1. namespace.ts' '7.2. namespace.ts'
