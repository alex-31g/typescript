"use strict";
// enum - набор именованных числовых констант
// Перечисления начинаются с нуля
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Downn"] = 1] = "Downn";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
})(Direction || (Direction = {}));
console.log(Direction.Left + 10); // 12
// Также можно задавать значения.
// При этом, если значение не задано, то оно инкрементируется от предыдущего
var Direction_2;
(function (Direction_2) {
    Direction_2[Direction_2["Up"] = 10] = "Up";
    Direction_2[Direction_2["Downn"] = 5] = "Downn";
    Direction_2[Direction_2["Left"] = 6] = "Left";
    Direction_2[Direction_2["Right"] = 7] = "Right";
})(Direction_2 || (Direction_2 = {}));
console.log(Direction_2.Right); // 7
// Также можно получать ключи по значению
console.log(Direction_2[6]); // 'Left'
console.log("https://vk.com/" /* vk */);
