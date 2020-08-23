// type guards (защита типа) - это механизм, позволяющий составить логические условия, в результате которых будет выбран нужный тип из множества типов.
// Данный механизм реализовывается с помощью операторов typeof, instanceof, in и на основе функций определенных пользователем

// ======================
// typeof
// ======================

// Ф-ция, в зависимости от типа получаемого параметра, имеет разную логику.
// Чтоб определить тип параметра - используется механизм type guards, реализованный с помощью typeof
function strip(x: string | number) {
  if (typeof x === 'number') {
    return x.toFixed(2);
  }
  return x.trim();
}

// ======================
// instanceof
// ======================

// Ф-ция handle, в зависимости от какого класса был создан параметр, имеет разную логику.
// Чтоб определить от какого класса был создан параметр - используется механизм type guards, реализованный с помощью instanceof

class MyResponse {
  header = 'response header';
  result = 'response result';
}

class MyError {
  header = 'error header';
  errorMessage = 'error message';
}

function handle(res: MyResponse | MyError) {
  if (res instanceof MyResponse) {
    return {
      info: res.header + ' ' + res.result,
    };
  } else {
    return {
      info: res.header + ' ' + res.errorMessage,
    };
  }
}

const objError = new MyError();
console.log(handle(objError));

// ======================
// in
// ======================

// Ф-ция handle, в зависимости от какого типа был создан параметр, имеет разную логику.
// Чтоб определить от какого типа был создан параметр - используется механизм type guards, реализованный с помощью in

type IFirst = { first: string };
type ISecond = { second: string };

function func(firstOrSecond: IFirst | ISecond) {
  if ('first' in firstOrSecond) {
    return 'first ' + firstOrSecond.first;
  }
  return 'second ' + firstOrSecond.second;
}

console.log(func({ first: 'hello' }));
