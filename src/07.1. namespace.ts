// namespace - позволяют создавать модульный код, объединять элементы в группы.
// namespace - это отдельная сущность похожая на объект, объявляется с помощью ключевого слова namespace.
// namespace инкапсулирует все добавленные в нее сущности, создавая свое пространство имен.

namespace Utils {
  const SECRET: string = '4545';
  const getPass = (name: string, age: number): string => `${name}:${age}`;
}

// Если мы попробуем обратиться к константе из namespace как к свойству объекта, то получим ошибку.
// Это основное отличие namespace от объекта:
// const myPass = Utils.getPass('Alex', 35); // ошибка

// namespace создают свою локальную область видимости, внутри которой мы можем поместить любое количество данных.
// Чтобы получить доступ к этим данным снаружи, нам нужно экспортировать их с помощью ключевого слова export:

namespace Utils_2 {
  export const SECRET: string = '4545';
  export const getPass = (name: string, age: number): string =>
    `${name}:${age}`;
}

const myPass = Utils_2.getPass('Alex', 35);
console.log(myPass); // Alex:35

// За пределами namespace Utils_2 можно создать еще одну константу SECRET и это не будет ошибка:

const SECRET: string = '111';

// ==============================

// Что если нужно использовать один namespace на несколько файлов?
// Например у нас есть namespace Utils_3:

namespace Utils_3 {
  export const SECRET: string = '777';
  export const getPass = (name: string, age: number): string =>
    `${name}:${age}`;
}

// И нам нужно получить доступ к ф-ции getPass в файле '07.2. namespace.ts'
// Продолжение в файле '07.2. namespace.ts' ...
