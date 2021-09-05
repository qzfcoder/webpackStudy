var n = 0
function foo () {
  n = 200
}

foo()

console.log(n)


// go: {n:undefined, foo: 地址}
// undefined -> 100 -> 200
// foo函数对象