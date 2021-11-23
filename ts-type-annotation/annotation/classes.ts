// 修饰符 public private protected

// 父类 parent class  超类 super class
class Person {
  // name: string;

  // constructor(name: string) {
  //   this.name = name;
  // }

  constructor(public name: string) {}

  protected scream(): void {
    console.log('ahhhh');
  }
}

const person = new Person('Tom');
console.log(person.name);

// person.scream();
// person.sing();

// 继承 inheritance
// Men 作为一种Person
// Men 可以做的事情 Person也能够做
// 子类 child class
// private修饰符 这个方法只能在当前这个类的其他方法中被调用
class Men extends Person {
  constructor(public age: number, name: string) {
    super(name);
  }

  private sing(): void {
    console.log('woohoooo!')
  }

  startSinging(): void {
    this.sing();
    men.scream();
  }
}

const men = new Men(20, 'Lee');
// men.scream();     // Property 'scream' is protected and only accessible within class 'Person' and its subclasses.ts(2445)
men.startSinging();