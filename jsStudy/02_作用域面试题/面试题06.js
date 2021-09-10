function foo() {
  var a = b = 100
  // 转换成
  // var a = 100
  // b = 1000
}

foo()
console.log(a)
console.log(b)

