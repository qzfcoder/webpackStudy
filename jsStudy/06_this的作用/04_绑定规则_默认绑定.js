// 默认绑定
function foo() {
  console.log(this)
}

//独立函数调用，指向windows
foo()


// 案例2
// 默认绑定
function foo1() {
  console.log(this)
}

function foo2() {
  console.log(this)
  foo1() // 独立调用。打印出来都是windows
}

function foo3() {
  console.log(this)
  foo2() // 独立调用。打印出来都是windows
}

foo3() // 独立调用。打印出来都是windows


// 案例3
var obj = {
  name : 'qzf',
  foo: function () {
    console.log(this)
  }
}

var bar = obj.foo

bar() // windows


// 案例4

function foo() {
  console.log(this)
}
var obj = {
  name : 'qzf',
  foo: foo
}

var bar = obj.foo

bar() // windows


// 案例5

function foo() {
  
  function bar () {
    console.log(this)
  }
  return bar
}

var fn = foo()

fn()