// 什么是类型? Type(s)
// 一个方便我们去更简便的描述一个具有相应的属性和方法的值的东西

// 什么是值(value)
// 就是能够赋值给变量(variable)的东西
// 不同的值 -> 不同的类型

// 什么叫做方便我们去更简便地描述一个具有相应的属性和方法的值的东西?
// "red" 怎么样来描述它
// 1. 它是一个值 具有chartAt()、concat()、includes()这类方法的值
// let color = "red";

// 更简便的方式
// 2. 它是一个字符串  字符串 -> 类型

// red -> 字符串

// interface Todo {
//   id: number;
//   title: string;
//   completed: boolean;
// }

// const todo = result.data as Todo;

// result.data 怎么样来描述它呢?
// 1. 它是一个对象 具有id, title, completed属性的对象

// 2. 它是一个Todo类型的值

// 总结
// 1. 类型指的是一个方便我们去描述一个具有相应的属性和方法的值的这样一个东西
// 2. 每一个值都会有相应的类型

// 常见的基础类型
// String   '你好' "" '今天是星期一'
// Number   .05 -10 100   在TS中  不像其他语言一样  数字类型  没有子类型  整数  浮点数
// Boolean  true false

// 特殊的类型
// Date类型
// let date = new Date();

// Todo类型
// {
//   id: number;
//   title: string;
//   completed: boolean;
// }
// 建立在Todo接口的前提下

// 类型的分类
// 元类型 (primitve types)   number boolean undefined void string symbol null
// 对象类型 (object types)   functions arrays classes objects

// 为什么要用类型?
// 1. 能够帮助TS编译器分析我们的代码
// 2. 能够帮助其他的工程师去理解整个代码库里面存在的值到底是什么东西
// 大型项目 函数 参数 a b c 类型

// 类型的例子