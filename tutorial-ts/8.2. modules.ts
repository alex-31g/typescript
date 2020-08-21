// импорт производится с фигурными скобками
import { CallFunc1 } from './8.1. modules';

// с помощью as можно импортировать под другими именами
import { CallFunc2, CallFunc3 as foo } from './8.1. modules';

import { f4, f5 } from './8.1. modules';

// если был выполнен export default - импортируем без фигурных скобок
// для импортируемых данных задаем любое имя
import exportDefaultFunction from './8.1. modules';

// импорт export default вместе с именованным экспортом
// import { default as exportDefaultFunction, CallFunc6 } from './8.1. modules';

// импортировать всё из файла в виде объекта
// import * as data from './8.1. modules';

// ===============================

CallFunc1();
CallFunc2();
foo();
f4();
f5();
exportDefaultFunction();

// Если импорт был выполнен как import * as ... from ...
// то обращение к импортированным данным происходит так
// data.CallFunc1();
