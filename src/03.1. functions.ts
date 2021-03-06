// Параметры ф-ции могут иметь дефолтные значения
const createPassword = (
  name: string = 'Alex',
  age: number | string = 20
): string => {
  return `${name}, ${age}`;
};
console.log(createPassword()); // Alex, 20

// Ф-ция может иметь опциональные параметры.
// Опциональные параметры указываются с ? в конце.
// Опциональные параметры не могут иметь дефолтных значений.
// Опциональные параметры всегда идут после обязательных параметров
const createPassword_2 = (
  name: string = 'Alex',
  age?: number | string
): string => {
  return `${name}, ${age}`;
};
console.log(createPassword_2()); // Alex, 20

// Остаточные параметры REST
const createSkills = (name: string, ...skills: Array<string>) => {
  // return `${name}, your skills are ${skills.join()}`;
  return `${name}, your skills are ${skills}`;
};
console.log(createSkills('joe', 'js', 'angular', 'node'));

// Важно описывать тип данных, которые возвращает ф-ция
const createObject = (value: string): object => {
  return { key: value };
};
console.log(createObject('hello'));

// Если ф-ция ничего не возвращает - используем void
const sayHello = (): void => {
  console.log('Hello');
};

// Для ф-ций используем тип never в двух случаях:
// - когда ф-ция возвращает ошибку и не заканчивает свое выполнение
// - когда ф-ция постоянно выполняется
const error = (message: string): never => {
  throw new Error(message);
};

const infiniteLoops = (): never => {
  while (true) {}
};

/*
	Присвоение в переменную ф-ций вида function
*/
// Необходимо в переменную myFunc присвоить ф-цию oldFunc.
// Указываем, что в переменной должна храниться функция с одним аргументом типа string и ф-ция будет возвращать тип string
let myFunc: (arg: string) => string;

function oldFunc(name: string): string {
  return `Hello, ${name}`;
}

myFunc = oldFunc;
console.log(myFunc('Joe'));
// console.log(myFunc(555)); // ошибка, так как аргумент типа "number" нельзя назначить параметру типа "string"
