var a = 100

function foo () {
  console.log(a) // undefined
  return
  var a = 100
}

foo()

// go {
//   a: undefined
//   foo: 0xa00 foo函数地址
// }

// foo为函数对象

// a = 100

// ao{a: undefined}