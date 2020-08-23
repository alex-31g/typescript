// =========================
// Перегрузка функций - это возможность создавать несколько функций с одним и тем же именем и разным количеством параметров и типов.
// =========================

interface Position_1 {
  x: number | undefined;
  y: number | undefined;
}

// Перегрузка 1 = Если ф-ция не получает никаких параметров, то она возвращает интерфейс Position_1
function position(): Position_1;

// Перегрузка 2 = Если ф-ция получает один параметр, то она возвращает тип number
function position(a: number): number;

// Перегрузка 3 = Если ф-ция получает два параметра, то она возвращает интерфейс Position_1
function position(a: number, b: number): Position_1;

// Выше мы определили возможные варианты вызова ф-ции position.
// Далее определяем саму ф-цию

function position(a?: number, b?: number) {
  // если 1-й случай вызова ф-ции
  if (!a && !b) {
    return { x: undefined, y: undefined };
  }

  // если 2-й случай вызова ф-ции
  if (a && !b) {
    return a;
  }

  // если 3-й случай вызова ф-ции
  return { x: a, y: b };
}

console.log(position()); // { x: undefined, y: undefined }
console.log(position(10)); // 10
console.log(position(10, 20)); // { x: 10, y: 20 }
