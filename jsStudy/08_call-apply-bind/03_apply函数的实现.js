// 自己实现hyapply
Function.prototype.hyapply = function(thisArg, argsArray) {
  // 1、获取到我们要执行的函数
  var fn = this
  // 2、处理thisArg
  thisArg = thisArg ? Object(thisArg) : window

  // 3、执行函数
  thisArg.fn = fn

  argsArray = argsArray ? argsArray : []

  var result = thisArg.fn(...argsArray)
  delete thisArg.fn
  return result
}

function sun(num1, num2){
  console.log('sum被调用',this, num1, num2)
  return num1 + num2
}

// var result = sun.apply('abc', [1,2])
// console.log(result)

// 自己实现
var result = sum.hyapply('ad', [1,2,3])
console.log(result)