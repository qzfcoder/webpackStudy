// 给所有函数添加一个hycall方法
Function.prototype.hycall = function(thisArg, ...args) {
  console.log('hycall');
  // 在这里可以去执行调用的哪个函数
  // 问题，如何可以获取到那个调用hycall的函数

  var fn = this;
  // 对我们的thisArg转换成对象类型
  thisArg = thisArg ? Object(thisArg) : null;

  thisArg.fn = fn;
  var result = thisArg.fn(...args);
  delete thisArg.fn;
  return result
}

function foo() {
  console.log('foo函数被执行', this)
}

function sum(num1, num2) {
  // return num1+num2
  console.log('sum', num1, num2, this)
  return num1 + num2
}
//系统函数自带的call方法
// foo.call()

// 自己实现的函数的hycall方法
sum.hycall('abd', 1, 2)

// sum.hycall()

