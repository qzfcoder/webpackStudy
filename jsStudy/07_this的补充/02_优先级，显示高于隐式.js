var obj = {
  name: 'qzf',
  foo: function() {
    console.log(this)
  }
}
obj.foo() //obj

obj.foo.call("anc") //abc 显示高于隐式
obj.foo.apply("asd") //abc 显示高于隐式

// bind的时候

var bar = obj.foo.bind("aaa")
bar() //aaa

// 3、更明显的比较
function foo() {
  console.log(this)
}

var obj1 = {
  name: 'qzf',
  foo: foo.bind('aaa')
}
obj.foo()
