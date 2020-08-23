"use strict";
// =============================================
// Данный файл запускать с помощью index.html
// =============================================
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// В первой ф-ции мы только принимаем параметр: function ComponentDecorator(config: IComponentDecorator) {}.
// Вторая ф-ция: return function <T extends { new (...args: any[]): object }>(Constructor: T) {} является непосредственно самим декоратором.
function ComponentDecorator(config) {
    // Так как это декоратор для класса, то ф-ция принимает параметр Constructor.
    return function (Constructor) {
        // возвращаем новый анонимный класс, который наследуется от конструктора, который мы передаем в декоратор:
        return class extends Constructor {
            // мы не знаем сколько параметров мы получаем, но мы их можем получить в массив с помощью оператора rest:
            constructor(...args) {
                // чтобы был вызван конструктор родительского класса мы обращаемся к методу super и с помощью оператора spread передаем все параметры:
                super(...args);
                console.log(...args);
                const el = document.querySelector(config.selector);
                el.innerHTML = config.template;
            }
        };
    };
}
// При вызове декоратора ComponentDecorator мы передаем в него объект, так как декоратор требует параметр config, который был описан интерфейсом IComponentDecorator
let CardComponent = class CardComponent {
    constructor(name) {
        this.name = name;
    }
    logName() {
        console.log(`Component name: ${this.name}`);
    }
};
CardComponent = __decorate([
    ComponentDecorator({
        selector: '#card',
        // классы, описанные внутри template - это классы materialize библиотеки:
        template: `
		<div class='card'>
			<div class='card-content'>
				<span class='card-title'>card component</span>
			</div>
		</div>
	`,
    })
], CardComponent);
// Когда создается новый экземпляр класса CardComponent, будет срабатывать ComponentDecorator, который будет добавлять в html описанный нами темплейт:
const card = new CardComponent('my card component');
card.logName();
