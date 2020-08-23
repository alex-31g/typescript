// =============================================
// Данный файл запускать с помощью index.html
// =============================================

interface IComponentDecorator {
  selector: string;
  template: string;
}

// В первой ф-ции мы только принимаем параметр: function ComponentDecorator(config: IComponentDecorator) {}.
// Вторая ф-ция: return function <T extends { new (...args: any[]): object }>(Constructor: T) {} является непосредственно самим декоратором.

function ComponentDecorator(config: IComponentDecorator) {
  // Так как это декоратор для класса, то ф-ция принимает параметр Constructor.
  return function <T extends { new (...args: any[]): object }>(Constructor: T) {
    // возвращаем новый анонимный класс, который наследуется от конструктора, который мы передаем в декоратор:
    return class extends Constructor {
      // мы не знаем сколько параметров мы получаем, но мы их можем получить в массив с помощью оператора rest:
      constructor(...args: any[]) {
        // чтобы был вызван конструктор родительского класса мы обращаемся к методу super и с помощью оператора spread передаем все параметры:
        super(...args);
        console.log(...args);
        const el = document.querySelector(config.selector)!;
        el.innerHTML = config.template;
      }
    };
  };
}

// При вызове декоратора ComponentDecorator мы передаем в него объект, так как декоратор требует параметр config, который был описан интерфейсом IComponentDecorator
@ComponentDecorator({
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
class CardComponent {
  constructor(public name: string) {}

  logName(): void {
    console.log(`Component name: ${this.name}`);
  }
}

// Когда создается новый экземпляр класса CardComponent, будет срабатывать ComponentDecorator, который будет добавлять в html описанный нами темплейт:
const card = new CardComponent('my card component');
card.logName();
