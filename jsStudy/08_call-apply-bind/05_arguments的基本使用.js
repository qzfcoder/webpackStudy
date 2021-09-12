function foo(num1, num2, num3){
  // 类数组对象中（长得像一个数组，其实是一个对象）
  console.log(arguments) // 会去ao中找anguments     [Arguments] { '0': 1, '1': 2, '2': 3, '3': 4, '4': 5 }

  // 常见的对arguments的操作
  // 1、获取参数长度
  console.log(arguments.length)
  // 2、根据索引值获取莫一个参数
  console.log(arguments[2])
  // 3、获取当前arguments所在的函数
  console.log(arguments.callee)

  // 自己便利arguments，返回数据*10
  var newArr = []
  for(var i = 0; i<arguments.length; i++){
    newArr.push(arguments[i] * 10)
  }
  console.log(newArr)

  // 将arguments转换成arry类型
  var newArray2 = Array.prototype.slice.call(arguments)
  console.log(newArray2)

  // es6语法
  var newArr4 = Array.from(arguments)
  console.log(newArr4)

  var newArr5 =  [...arguments]
  console.log(newArr5)
  
  console.log(num1,num2, num3)
}

foo(1,2,3,4,5)