// ============================

// STATIC
// Статические свойства и методы - видны в классе без создания экземпляра

class UserClass {
  // Каждый экземпляр получит доступ к статическому свойству
  static secret = 123;

  // Свойства name и age появятся в экземпляре класса
  constructor(public name: string, public age: number) {}

  // this.name - значение получаемое снаружи при создании экземпляра класса.
  // UserClass.secret - обращение к статическому свойству класса
  getPass(): string {
    return `${this.name}-${UserClass.secret}`;
  }
}
const tom = new UserClass('Tom', 30);
tom.getPass(); //'Tom-123'

// ============================

// НАСЛЕДОВАНИЕ

// Имеем базовый класс
class UserClass_2 {
  private nickName: string = 'web';
  static secret = 123;

  constructor(public name: string, public age: number) {}

  getPass(): string {
    return `${this.name}-${UserClass_2.secret}`;
  }
}

// С помощью ключевого слова extends сделаем наследника.
// Класс Bob наследуется от класса UserClass_2
class Bob extends UserClass_2 {
  name: string = 'Bob';

  // ПЕРЕОПРЕДЕЛЕНИЕ КОНСТРУКТОРА
  // Если наследник имеет конструктор - первое что нужно сделать внутри конструктора -
  // вызвать конструктор родителя с помощью ключевого слова super -
  // таким образом мы обращаемся к его функционалу.
  // Даже если в классе родителя не был определен конструктор -
  // в классе наследника необходим вызов конструктора по умолчанию с помощью super()
  constructor(age: number) {
    // 'name' обернуто кавычками так как оно определено внутри класса
    super('name', age);
  }

  // ПЕРЕОПРЕДЕЛЕНИЕ МЕТОДА
  // Метод getPass уже сущевствует в родительском классе, но мы хотим создать его новую реализацию.
  // Для это просто создаем точно таким же образом новый метод и пишем его реализацию
  getPass(): string {
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
abstract class NewUser {
  constructor(public name: string, public age: number) {}

  // Данный метод полностью реализован
  greet(): void {
    console.log(this.name);
  }

  // Данный метод не реализован, так как перед ним стоит ключевое слово abstract
  // Это значит, что реализация даного метода обязательно должна быть реализована в потомке.
  // При этом метод должен возвращать строку
  abstract getPass(): string;
}

// Создаем класс Kurt, который наследуем от абстракции NewUser
class Kurt extends NewUser {
  name: string = 'Kurt';

  constructor(age: number) {
    super('name', age);
  }

  getPass(): string {
    return `${this.name}-${this.age}`;
  }
}

const kurt = new Kurt(27);
kurt.greet(); //Kurt
console.log(kurt.getPass()); //Kurt-27
