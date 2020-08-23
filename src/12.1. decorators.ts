// ====================================
// !!! в файле tsconfig.json расскоментировать строку - "experimentalDecorators": true
// ====================================

// Декораторы позволяют добавить к классам и их членам метаданные и тем самым изменить их поведение без изменения их кода.

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
function Log(constructor: Function) {
  console.log('====================');
  console.log('декоратор для класса Component', constructor);
}

// Ф-ция Log2 будет выступать в роли декоратора для свойства name внутри класса Component.
// Декораторы свойств принимают 2 параметра.
function Log2(target: any, propName: string | Symbol) {
  console.log('====================');
  console.log('декоратор для свойства name', target); // class Component
  console.log('декоратор для свойства name', propName); // name1
}

// Ф-ция Log3 будет выступать в роли декоратора для метода logName внутри класса Component.
// Декораторы методов принимают 3 параметра.
function Log3(
  target: any,
  propName: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('====================');
  console.log('декоратор для метода logName', target); // class Component
  console.log('декоратор для метода logName', propName); // logName
  console.log('декоратор для метода logName', descriptor);
}

// Ф-ция Log4 будет выступать в роли декоратора для геттера componentName внутри класса Component.
// Декораторы геттеров/сеттеров аналогичны декораторам методов и принимают 3 параметра.
// Разница между декоратором для метода и для геттера/сеттера в том, что внутри объекта descriptor
// мы можем видеть свойство get/set, а свойство value - отсутствует
function Log4(
  target: any,
  propName: string | Symbol,
  descriptor: PropertyDescriptor
) {
  console.log('====================');
  console.log('декоратор для геттера componentName', target); // class Component
  console.log('декоратор для геттера componentName', propName); // logName
  console.log('декоратор для геттера componentName', descriptor);
}

// Чтобы навесить декоратор на класс/свойство/метод нужно:
// 1) в файле tsconfig.json расскоментировать строку - "experimentalDecorators": true
// 2) навешивать декоратор с помощью @decoratorName - синтаксиса, непосредственно перед классом/свойством/методом

@Log
class Component {
  @Log2
  name1: string;

  constructor(name: string) {
    this.name1 = name;
  }

  @Log3
  logName(): void {
    console.log(`Component name: ${this.name1}`);
  }

  @Log4
  get componentName() {
    return this.name1;
  }
}
