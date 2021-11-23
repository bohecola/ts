// 参数 返回值
// TS检查类型，不会检查逻辑
const addNums = (a: number, b: number): number => {
  return a + b;
}

// 不使用返回值注解，会自动推断
const sustractNums = (a: number, b: number) => {
  return a - b;
}

// 函数声明
function multiply(a: number, b: number): number {
  return a * b;
}

// 匿名函数
const divide = function (a: number, b: number): number {
  return a / b;
}

// 没有返回值
const logger = (message: string): void => {
  console.log(message);
  // return null; return undefined; 不会报错
  // return 'an apple'; 会报错
}

// 函数有可能没有尽头，就满足never类型条件
const throwError = (message: string): string => {
  if (!message) {
    throw new Error(message);
  }

  return message;
}

// 解构
const todayWeather = {
  date: new Date(),
  weather: '晴天'
}

// 加解构，且类型注解
const logWeather = ({
  date,
  weather
}: {
  date: Date,
  weather: string
}): void => {
  console.log(date);
  console.log(weather);
}

logWeather(todayWeather);
