"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// импорт производится с фигурными скобками
const _08_1__modules_1 = require("./08.1. modules");
// с помощью as можно импортировать под другими именами
const _08_1__modules_2 = require("./08.1. modules");
const _08_1__modules_3 = require("./08.1. modules");
// если был выполнен export default - импортируем без фигурных скобок
// для импортируемых данных задаем любое имя
const _08_1__modules_4 = __importDefault(require("./08.1. modules"));
// импорт export default вместе с именованным экспортом
// import { default as exportDefaultFunction, CallFunc6 } from './08.1. modules';
// импортировать всё из файла в виде объекта
// import * as data from './08.1. modules';
// ===============================
_08_1__modules_1.CallFunc1();
_08_1__modules_2.CallFunc2();
_08_1__modules_2.CallFunc3();
_08_1__modules_3.f4();
_08_1__modules_3.f5();
_08_1__modules_4.default();
// Если импорт был выполнен как import * as ... from ...
// то обращение к импортированным данным происходит так
// data.CallFunc1();
