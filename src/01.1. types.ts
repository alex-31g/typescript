// =========================
// ТИПЫ
// =========================

// boolean, number, string
const isTrue: boolean = true;
const num: number = 1;
const str: string = 'hello';

// задание нескольких типов одной переменной
const foo: number | string = 5;

// undefined
const u: undefined = undefined;

// null
const n: null = null;

// void - предназначен для определения отсутствующих типов.
// Например, ф-ция ничего не возвращает и значит, результат выполнения ф-ции - отсутствующий тип
const sayName = (name: string): void => {
  console.log(name);
};

// Array
const arr1: number[] = [1, 2, 3];

// Array generic
const arr2: Array<number> = [1, 2, 3];

// Tuple - массив, который состоит из разных типов
const arr3: [string, number] = ['hello', 1];

// any - возможность переопределять типы
let x: any = 1;
x = 2;

// never - следует указывать в двух случаях:
// - когда ф-ция возвращает ошибку и не заканчивает свое выполнение
// - когда ф-ция постоянно выполняется
const throwError = (message: string): never => {
  throw new Error(message);
};
const infiniteLoop = (): never => {
  while (true) {}
};

// object
const obj: object = {
  pass: 1111,
};
