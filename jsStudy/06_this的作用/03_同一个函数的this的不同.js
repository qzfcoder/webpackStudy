
// this指向什么，根函数所处位置没有关系；跟函数被谁调用，调用方式有关
// 函数在调用时候，js会默认给this一个值，this是在运行时被绑定的

// 绑定规则
// 1、默认绑定
// 独立的函数调用我们可以理解成函数没有被绑定到对象上进行调用
// 2、隐式绑定
// 3、显示绑定
// 4、new 绑定

function foo() {
  console.log(this)
}
// 直接第哦啊用这个函数
foo()

// 创建一个对象。对象中的函数指向foo
var obj = {
  name: 'qzf',
  foo: foo
}

obj.foo()

// apply调用

foo.apply('asd')