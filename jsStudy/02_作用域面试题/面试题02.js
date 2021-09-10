function foo() {
  console.log(n)
  var n = 200 
  console.log(n)
}

var n = 100

foo()


// go对象{n : undefined}
// 执行到var n= 100 的时候 go中n=100

// 执行foo的时候 创建一个ao对象{n: undefined（编译的时候）}
// 打印的时候 第一个n  优先在ao中查找 为undefined, 后面n=200赋值，在打印结果为200