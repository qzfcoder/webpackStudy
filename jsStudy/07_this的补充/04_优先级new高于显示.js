// new 不能和apply和call一起使用

function foo() {
  console.log(this)
}

var bar  = foo.bind('asd')

var obj = new bar
obj() // foo

// new绑定 >显示 > 隐式 > 默认绑定（独立函数调用）