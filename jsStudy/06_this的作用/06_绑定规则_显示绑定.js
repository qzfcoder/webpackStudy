function foo() {
  console.log('函数被调用了')
}
// foo直接调用和call、apply调用的不同在于this指向的不同，
// foo()  指向window
// foo函数上有有个call，来调用foo函数

var obj = {
  name: 'qzf'
}

// call和apply可以指定this的绑定对象
foo.call(obj)
foo.apply(obj)

// call和apply的区别
function sum(num1, num2){
  console.log(num1 + num2 , this)
}

sum.call("call", 20, 30)
sum.apply("apply", [20,30])

// 3、call和apply在执行函数的时候是可以明确绑定this的，这个就是显示绑定