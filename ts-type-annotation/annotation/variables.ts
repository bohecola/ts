// 元类型
// let score: number = 50;
// 当变量声明 和 变量初始化 在同一行的时候，类型推断系统才会起作用。
// let score: number;    // 变量声明
// score = 50;   // 变量初始化
// let sports: string = 'basketball';
// let isHappy: boolean = true;

// let nothingMuch: null = null;
// let nothing: undefined = undefined;

// let today: Date = new Date();

// // 对象类型
// // 数组
// let balls: string[] = ['basketball', 'football', 'volleyball'];
// let someNums: number[] = [1, -5, 0]
// let truths: boolean[] = [true, true, false];

// // 类
// class Car {

// }

// let car: Car = new Car();

// // 对象字面量
// let person: {name: string; age: number;} = {
//   name: '张三',
//   age: 20
// }

// // 函数 参数、返回值
// const logNumber: (num: number) => void = (num: number) => { }

// 手动添加类型注解的3种情况
// 1) 变量声明和变量初始化不在同一行
let score: number;
score = 50

// 2) 当一个函数返回any类型，但我们想要明确具体类型
const json = '{"name": "张三", "age": 20}';
const person: {name: string; age: number;} = JSON.parse(json);

// 3) 当我们想要一个变量拥有一个不能推断出来的类型
// 联合类型
let numbers = [-10, 0, 1];
let numAboveZero: boolean | number = false;

for (let i = 0; i < numbers.length; i ++) {
  if (numbers[i] > 0) {
    numAboveZero = numbers[i];
  }
}