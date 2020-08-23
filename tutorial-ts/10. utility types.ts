// typescript предоставляет 16 утилит для преобразования типов (type):
// https://www.typescriptlang.org/docs/handbook/utility-types.html

// ============================
// Readonly - с помощью этой утилиты мы можем создать type, все свойства которого предназначены только для чтения
// ============================

interface Todo {
  id: number;
}

const todo: Readonly<Todo> = {
  id: 1,
};

// todo.id = 2; // error

// ============================
// Required - с помощью этой утилиты можно создать type, все поля которого обязательны
// ============================

// Интерфейс содержит 2 необязательных поля
interface Props {
  a?: number;
  b?: string;
}

// Создаем объект только с 1 полем - ok
const foo1: Props = { a: 5 };

// Создаем объект только с 1 полем - error - так как применили утилиту Required
// const foo2: Required<Props> = { a: 5 };

// ============================
// Record - утилита, которая создает type с набором свойств Page типа PageInfo
// ============================

// Указываем какие свойства должен иметь объект
type Page = 'about' | 'contact' | 'home';

// Описываем значения объекта
interface PageInfo {
  title: string;
}

const nav: Record<Page, PageInfo> = {
  about: { title: 'hello' },
  contact: { title: 'world' },
  home: { title: '!!!' },
};

console.log(nav.about); // { title: 'hello' }

// ============================
// Pick - утилита, которая создает type, выбирая свойства из существующего интерфейса
// ============================

interface Todo2 {
  title: string;
  description: string;
  completed: boolean;
}

// Выбираем из интерфейса Todo2 только 2 свойства
type TodoPreview = Pick<Todo2, 'title' | 'completed'>;

const todo2: TodoPreview = {
  title: 'Clean room',
  completed: false,
};

// ============================
// Omit - утилита, которая создает type, удаляя свойства из существующего интерфейса
// ============================

interface Todo3 {
  title: string;
  description: string;
  completed: boolean;
}

// Удаляем из интерфейса Todo3 свойство description
type TodoPreview3 = Omit<Todo3, 'description'>;

const todo3: TodoPreview = {
  title: 'Clean room',
  completed: false,
};

// ============================
// Exclude - утилита, которая создает type, удаляя из него все типы, которые передаются вторым аргументом
// ============================

// Исключаем тип 'a' - остается "b" | "c"
type T0 = Exclude<'a' | 'b' | 'c', 'a'>;

// Исключаем тип 'a' | 'b' - остается "c"
type T1 = Exclude<'a' | 'b' | 'c', 'a' | 'b'>;

// Исключаем тип Function - остается string | number
type T2 = Exclude<string | number | (() => void), Function>;

// ============================
// Extract - утилита, которая создает type, оставляя в нем только типы, которые передаются вторым аргументом
// ============================

// Первый аргумент "a" | "b" | "c"
// Второй аргумент "a" | "f"
// Совпал только тип "a" - он и остается в типе Т3
type T3 = Extract<'a' | 'b' | 'c', 'a' | 'f'>;

// Первый аргумент string | number | (() => void)
// Второй аргумент Function
// Совпал только тип Function - он и остается в типе Т4
type T4 = Extract<string | number | (() => void), Function>;

// ============================
// NonNullable - создает тип, исключая значения null и undefined из type
// ============================

type T5 = NonNullable<string | number | undefined>; // string | number
type T6 = NonNullable<string[] | null | undefined>; // string[]

// ============================
// ReturnType - создает тип, состоящий из возвращаемого функцией типа
// ============================

const fooo1 = (id: number, color: string) => {
  return color;
};
type Ty1 = ReturnType<typeof fooo1>; // string
const z1: Ty1 = 'hello';
// const z2: Ty1 = 5; // error

const fooo2 = (id: number, color: string) => {
  return { id, color };
};
type Ty2 = ReturnType<typeof fooo2>; // { id: number; color: string; }
const z3: Ty2 = {
  id: 1,
  color: 'red',
};
// const z4: Ty1 = 5; // error

// ============================
// ReturnType - создает тип, состоящий из типа экземпляра ф-ции конструктора
// ============================

// TODO
