function foo() {
  console.log(this)
}

// foo.call('aaa')
// foo.call('aaa')
// foo.call('aaa')
// foo.call('aaa')


// 默认绑定和显示绑定bind冲突， 显示绑定优先
var newFoo = foo.bind("aaa")

newFoo()