function foo() {
  console.log("foo被执行", this)
}

function sum(num1, num2, num3, num4){
  console.log(num1, num2, num3m, num4)
}

// var bar  = foo.bind('abc')
// bar()


// bind的几种传参写法
// var newSum = sum.bind('aaa', 1, 2, 3, 4)
// newSum()

// var newSum = sum.bind('aaa')
// newSum(1, 2, 3, 4)

// var newSum = sum.bind('aaa', 3, 4 )
// newSum(1, 2)

// 自己实现bind

Function.prototype.hybind = function(thisArg, ...argArray){
  // 获取到真实要调用的函数
  var fn = this //this指向的是调用的函数
  // 绑定this
  thisArg = (thisArg !== null && thisArg !== undefined) ? Object(thisArg) :window

  return function(...args) {
    // 将函数放到thisArgs中进行调用
    thisArg.fn = fn
    var finalArgs = [...argArray, ...args]
    var result = thisArg.fn(...finalArgs)
    delete thisArg.fn
    return result
  }
}

var bar = foo.hybind('abc')
