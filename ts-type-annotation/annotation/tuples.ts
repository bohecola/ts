// tuple 元组
const drink = {
  color: 'brown',
  carbonated: true,
  sugar: 35
};

// 类型别名 Type Alias
type Drink = [string, boolean, number];

const pepsi: Drink = ['brown', true, 35];
const sprite: Drink = ['clear', true, 40];
const tea: Drink = ['brown', true, 0];
// pepsi[0] = true;
// pepsi[1] = 'brown';
// [true, 'brown', 35]

// 处理CSV文件 会使用到元组类型

// 农场 鸡、鸭 个数
// const farm: [number, number] = [6, 8];

const fram = {
  chick: 6,
  duck: 8
}
