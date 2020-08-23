// Для доступа к свойствам и методам класса есть 4 модификатора доступа:
// - public
// - private
// - protected
// - readonly

// public - значение по умолчанию, элемент доступен внутри и за пределами класса.
// Если у элемента не задано никакого модификатора, то он получает public автоматически.

// private - элемент не доступен за пределами класса, только внутри.
// Ни классы наследники, ни объекты созданные с помощью данного класса не смогут получить к нему доступ.

// protected - элемент доступен внутри и только наследникам, экземпляры класса доступа к элементу не имеют.

// readonly - элемент доступен внутри и за пределами класса только для чтения.

class User {
  public name: string;
  private nick: string;
  protected age: number;
  readonly pass: number;

  constructor(name: string, nick: string, age: number, pass: number) {
    this.name = name;
    this.nick = nick;
    this.age = age;
    this.pass = pass;
  }
}
const joe = new User('Joe', 'dev', 20, 100);
console.log(joe.name); // 'Joe'
// console.log(joe.nick); // error - cвойство доступно только в классе "User"
// console.log(joe.age); // error - cвойство доступно только в классе "User" и его наследникам
console.log(joe.pass + 5); // 105
// joe.pass = 200; // error - cвойство, доступное только для чтения

// =========================

// Класс выше выглядит очень громоздким, его можно сократить до следующего вида.
// Такая запись возможна, если для каждого свойства указан модификатор
class User_2 {
  constructor(
    public name: string,
    private nick: string,
    protected age: number,
    readonly pass: number
  ) {}
}

// =========================

// Аксесоры - геттеры и сеттеры - это специальные методы класса, которые ведут себя снаружи этого класса как свойства.
// Служат либо для чтения либо для установки значений внутри экземпляра класса.

// Пример
// class User_3 {
//   private age: number = 20;
//   constructor(public name: string) {}
// }
// const tim = new User_3('Tim');
// tim.age = 30; // error

// При попытке изменить приватное свойство age - получили ошибку.
// Чтобы изменить приватное свойство нужно использовать сеттеры

class User_3 {
  private age: number = 20;
  constructor(public name: string) {}

  // 1 способ - сеттер с помощью set
  set changeAge(age: number) {
    this.age = age;
  }
  // 2 способ - сеттер с помощью обычного метода
  setAge(age: number) {
    this.age = age;
  }
}
const tim = new User_3('Tim');
tim.changeAge = 30; // 1 способ - обращение как к свойству
tim.setAge(30); // 2 способ - обращение как к методу
