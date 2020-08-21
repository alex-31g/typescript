// ==============================
// Интерфейсы объектов
// Необязательные свойства и свойства только для чтения
// ==============================

// Свойство sex помечено как только для чтения 'readonly' - его значение нельзя изменять
// Свойство age помечено как необязательное '?' - поэтому его можно не определять
interface IUser {
  id: number;
  name: string;
  readonly sex: string;
  country?: {
    id: number;
    name: string;
  };
  age?: number;
}
let user1: IUser = {
  id: 1,
  name: 'Alice',
  sex: 'female',
  age: 23,
};
let user2: IUser = {
  id: 2,
  name: 'Tom',
  sex: 'male',
};
// user1.sex = 'male'; // error - не удается изменить значение для "sex", так как это свойство, доступное только для чтения

// ==============================
// Другие варианты указания интерфейса для объекта
// ==============================

interface IAnimal {
  name: string;
}

// 1
let dog = {
  name: 'Tom',
} as IAnimal;

// 2
let cat = <IAnimal>{
  name: 'Tom',
};

// ==============================
// Возможность расширения объекта
// ==============================

interface IUser1 {
  id: number;
  name: string;
  // Чтобы указать, что в нашем объекте могут присутствовать и другие свойства неопределенного количества и неизвестного типа, используется такая запись:
  [propName: string]: any;
}
let user3: IUser1 = {
  id: 3,
  name: 'Tomas',
  sex: 'male', // не определенное в интерфейсе свойство
  age: 20, // не определенное в интерфейсе свойство
};

// ==============================
// Определение методов объекта
// ==============================

interface IUser2 {
  name: string;
  getFullName(surname: string): string; // 1 вариант записи ф-ции
  // getFullName: (surname: string) => string; // 2 вариант записи ф-ции
}
let employee: IUser2 = {
  name: 'Alice',
  getFullName(surname: string): string {
    return this.name + ' ' + surname;
  },
};
console.log(employee.getFullName('Tompson')); // Alice Tompson

// ==============================
// Интерфейсы классов
// ==============================

// Для описания класса с помощью интерфейса используется ключевое слово implements

interface IUser2 {
  name: string;
}
interface IPassword {
  getFullName(surname: string): string; // 1 вариант записи ф-ции
  // getFullName: (surname: string) => string; // 2 вариант записи ф-ции
}

// Класс на базе двух интерфейсов
class SomeUser implements IUser2, IPassword {
  // Свойство age не присутствует в интерфейсе, но ошибки нет.
  // Суть интерфейса для класса в том - что он описывает только обязательные свойства для класса,
  // остальные свойства могут присутствовать в любом колличестве

  // При реализации интерфейса классом свойства могут быть определены только как публичные
  constructor(public name: string, public age: number) {}
  getFullName(surname: string): string {
    return this.name + ' ' + surname;
  }
}
let tommy = new SomeUser('Tom', 23);
console.log(tommy.getFullName('Simpson')); // Tom Simpson

// ==============================
// Наследование интерфейсов
// ==============================

interface IUser4 {
  name: string;
}
interface Admin extends IUser4 {
  getPass(): string;
}
class Alex implements Admin {
  constructor(public name: string) {}
  getPass(): string {
    return this.name + '777';
  }
}
let alex = new Alex('alex');
console.log(alex.getPass()); // alex777

// ==============================
// Интерфейсы функций
// ==============================

interface FullNameBuilder {
  (name: string, surname: string): string;
}
let simpleBuilder: FullNameBuilder = (
  name: string,
  surname: string
): string => {
  return 'Mr. ' + name + ' ' + surname;
};
console.log(simpleBuilder('Bob', 'Simpson')); // Mr. Bob Simpson

// ==============================
// Интерфейсы массивов
// ==============================

interface StringArray {
  // указываем, что индекс элемента - число, а элемент - строка
  [index: number]: string;
}
let phones: StringArray = ['iPhone 7', 'HTC 10', 'HP Elite x3'];
let myPhone: string = phones[0];
console.log(myPhone); // iPhone 7

// ==============================
// Интерфейсы объектов у которых много ключей
// ==============================

interface IStyles {
  [key: string]: string;
}

const css: IStyles = {
  border: '1px solid red',
  color: 'red',
};

// ==============================
// type - позволяет задавать пользовательские типы
// ==============================

type ID = string | number;
const id1: ID = 1;
const id2: ID = '1';
// const id3: ID = true; // error
