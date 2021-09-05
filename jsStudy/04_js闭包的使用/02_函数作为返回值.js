// function foo(){
//   function bar() {

//   }

//   return bar
// }

// var fn = foo()

// fn()


function makeAdder(count) {
  function add( num ) {
    return count + num
  }
  return add
}

var add5 = makeAdder(5)
console.log(add5(6))

// 高阶函数：就是一个函数如果接受另外一个函数作为参数，或者该函数会返回另外一个函数作为返回值的函数