interface Reportable {
  summary(): string;
}

const uncleMike = {
  name: 'Mike',
  age: 20,
  married: false,
  summary(): string {
    return `名字：${this.name}`;
  }
}

const drink = {
  color: '棕色',
  carbonated: true,
  sugar: 35,
  summary(): string {
    return `这个饮料的颜色是${this.color}`;
  }
}

// printSummary函数接受一个满足Reportable接口类型的参数 -> 得到了一个可以高度复用的printSummary函数
const printSummary = (item: Reportable): void => {
  console.log(item.summary());
}

printSummary(uncleMike);
printSummary(drink);