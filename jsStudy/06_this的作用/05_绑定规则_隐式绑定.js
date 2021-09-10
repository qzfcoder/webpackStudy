function foo() {
  console.log(this)
}

// 案例1
var obj = {
  name: 'qzf',
  foo: foo
}

obj.foo()

// 案例2
var obj1 = {
  name: 'qzf',
  eating: function() {
    console.log(this.name + '吃东西')
  },
  running: function() {
    console.log(this.name + '跑步')
  }
}

var fn = obj1.eating
fn()

// 案例3
var obj2 = {
  name: 'qzf',
  foo: function() {
    console.log(this);
  }
}

var obj3 = {
  name: 'qzf',
  bar: obj2.foo
}

obj3.bar()