const basketballPlayers: string[] = ['kobe', 'James', 'Pierce'];
const dates = [new Date(), new Date()];

// 二维数组
const studentsByClass = [
  ['Mike', 'Tom'],
  ['Lee'],
  ['Jack', 'Smith']
]

// 提取值的时候帮助判断
const player = basketballPlayers[0];
const favPlayer = basketballPlayers.pop();

// 防止加入不一样类型的值
// basketballPlayers.push(123);
// Argument of type 'number' is not assignable to parameter of type 'string'.ts(2345)

// 使用map, forEach, reduce函数时提供帮助
// 确保car的类型是一个字符串 "."的时候会有提示(帮助)字符串相关的方法
basketballPlayers.map((car: string): string => {
  return car;
})

// 容纳不同类型
// const importantDates = [new Date(), '2020-10-01'] // 类型推断结果 const importantDates: (string | Date)[]
// importantDates.push(123); // Argument of type 'number' is not assignable to parameter of type 'string | Date'.ts(2345)

const importantDates: (string | Date)[] = [new Date()];