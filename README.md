# typescript содержание:

## 01.1. types
- boolean
- number
- string
- задание нескольких типов одной переменной
- undefined
- null
- void
- array
- array generic
- tuple
- any
- never
- object

## 01.2. types guards
- typeof
- instanceof
- in

## 02. enum

## 03.1. functions
- дефолтные значения параметров
- опциональные параметры
- остаточные параметры REST
- описание типа данных, которые возвращает ф-ция
- void
- never
- присвоение в переменную ф-ций вида function

## 03.2. functions overloads

## 04. objects, type
- описание полей и типов объекта
- ключевое слово type

## 05. classes, modifiers, get, set
- модификатора доступа: 
	- public 
	- private 
	- protected 
	- readonly
- аксесоры: 
	- геттеры 
	- сеттеры

## 06. static, inheritance, abstract
- статические свойства и методы
- наследование, ключевое слово extends
- переопределение конструктора, метода, ключевое слово super
- абстрактные классы, ключевое слово abstract

## 07.1. namespace
- пространство имен
- ключевое слово namespace
- локальная область видимости
- namespace экспорт

## 07.2. namespace
- namespace импорт

## 08.1. modules
- экспорт до объявления
- экспорт отдельно от объявления
- экспортировать как псевдоним
- экспорт по умолчанию

## 08.2. modules
- импорт именованного экспорта
- импорт под псевдонимом
- импорт export default
- импорт export default вместе с именованным экспортом
- импортировать всё из файла в виде объекта

## 09. interface, type
- интерфейсы объектов
- необязательные свойства (?) и свойства только для чтения (readonly)
- возможность расширения объекта
- определение методов объекта
- интерфейсы классов
- ключевое слово implements
- наследование интерфейсов
- ключевое слово extends
- интерфейсы функций
- интерфейсы массивов
- интерфейсы объектов у которых много ключей
- type - пользовательские типы

## 10. utility types
- Readonly
- Required
- Record
- Pick
- Omit
- Exclude
- Extract
- NonNullable
- ReturnType

## 11. generic
- запись дженерик типов
- дженерик типы для промисов
- функции
- классы
- утилита Partial
- утилита Readonly

## 12.1. decorators
- 4 вида декораторов: 
	- для классов 
	- для свойств 
	- для методов внутри класов 
	- для геттеров и сеттеров

## 12.2. decorators

------------
# typescript
------------

Создаем *package.json*:  
`npm init -y` 

Устанавливаем *typescript*:
`npm i -D typescript`

Проверить установленную версию *typescript*:
`tsc -v`

Компилировать app.ts в app.js:
`tsc app.ts`

------------

## tsconfig.json 

*tsconfig.json* - файл, с помощью которого происходит настройка компилятора typescript

Создать файл *tsconfig.json*:
`tsc --init`

Когда у нас существует директория с множеством файлов, в которой есть tsconfig.json, компиляцию всего проекта можно выполнять командой: 
`tsc`

Чтобы каждый раз для компиляции не вводить команду *tsc*, используем команду, которая будет следить за изменениями:
`tsc -w`

------------

## Настройки tsconfig.json

Чтобы исключать определенные файлы или папки из компиляции, в файле tsconfig.json добавляем новую настройку exclude, куда вносим, что мы хотим исключить:
```json
  "exclude": [
    "./module.ts"
	]
```

Чтобы включить только определенные файлы или папки в компиляцию, в файле tsconfig.json добавляем настройку include:
```json
  "include": [
    "./src/**/*"
	]
```

Чтобы включить только определенные файлы в компиляцию, в файле tsconfig.json добавляем настройку files:
```json
  "files": [
    "./module.ts"
	]
```

------------

## Настройки объекта "compilerOptions" в tsconfig.json

#### Раздел /* Basic Options */

ts-файлы для разработки – храним в папке src, js-файлы после компиляции – в папке dist. Указать путь компиляции:
```json
  "outDir": "./dist"      
```

Говорим, что наша корневая директория находится в папке src:
```json
  "rootDir": "./src"
```

Указываем в какую версию js компилировать ts (чтобы выбрать возможные варианты, внутри "" нажимаем ctrl + пробел):
```json
  "target": "es5"
```

По умолчанию ts не имеет возможности работать с браузер API, то-есть мы не можем использовать что-то вроде document.querySelector(). С помощью настройки lib мы можем добавить в ts нужные нам библиотеки:
```json
  "lib": ["DOM"]
```

После компиляции в js сложно понять код, а иногда это нужно, например когда код запущен в браузере. В таких случаях, чтобы видеть оригинальный ts-код до компиляции, используют sourcemap - он позволяет видеть исходники ts и показывает оригинальныю структуру файлов. Когда включена поддержка sourcemap, то в браузере, перейдя в Source – можно видеть оригинальный код. Чтобы включить поддержку sourcemap:
```json
  "sourceMap": true
```

Удаление комментариев на этапе компиляции:
```json
  "removeComments": true
```

Если в коде есть ошибки, то компилятор все равно сгенерирует файл. Если нам нужно, чтобы компиляция не работала в случаи ошибок:
```json
  "noEmitOnError": true
```

#### Раздел  /* Strict Type-Checking Options */ содержит свойство strict, которое по умолчанию true и которое говорит, что все остальные свойства этого раздела тоже true:

```json
	/* Strict Type-Checking Options */
	"strict": true                            /* Enable all strict type-checking options. */,
	// "noImplicitAny": true,                 /* Raise error on expressions and declarations with an implied 'any' type. */
	// "strictNullChecks": true,              /* Enable strict null checks. */
	// "strictFunctionTypes": true,           /* Enable strict checking of function types. */
	// "strictBindCallApply": true,           /* Enable strict 'bind', 'call', and 'apply' methods on functions. */
	// "strictPropertyInitialization": true,  /* Enable strict checking of property initialization in classes. */
	// "noImplicitThis": true,                /* Raise error on 'this' expressions with an implied 'any' type. */
	// "alwaysStrict": true,                  /* Parse in strict mode and emit "use strict" for each source file. */
```

Но можно настраивать каждое из этих свойств. Рассмотрим некоторые.
Когда *"strict": true*, ts требует указывать типы. Например, ниже мы видим что параметр data указан без типа, что будет вызывать ошибку:

```js
	function getData(data) {
		console.log(data);
	}
```

Чтобы отключить данное поведение:
```json
	"noImplicitAny": false
```

#### Раздел /* Additional Checks */

Если в коде есть неиспользуемые локальные переменные, и мы хотим чтоб они были подсвечены как ошибка:
```json
	"noUnusedLocals": true,
```

Если в функции есть неиспользуемые параметры, и мы хотим чтоб они были подсвечены как ошибка:
```json
	"noUnusedParameters": true
```

Если мы хотим, чтобы ф-ция всегда что-то возвращала:
```json
	"noImplicitReturns": true
```

Теперь, когда задано *"noImplicitReturns": true* и есть возможность, что из ф-ции ничего не вернется, получим ошибку:
```json
	function getData(a: number, b: number) {
		if (a && b) {
			return a * b;
		}
	}
```