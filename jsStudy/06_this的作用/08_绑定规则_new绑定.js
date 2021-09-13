// JavaScript中的函数可以当作一个类的构造函数来使用的，也就是i使用new
// 使用new来调用函数
//   1、创建一个全新的对象
//   2、这个新对象会被执行prototype
//   3、这个对象会被绑定到函数调用的this上
//   4、如果函数没有返回其他对象，表达式会返回这个新对象


// t1
// function Person() {

// }

// new Person()  //通过new 会创建一个新的对象，会赋值给函数中的this，若函数没有没有返回，则返回这个新的对象

// t2

function Person (name, age) {
  this.name = name
  this.age =age
}

var p1 = new Person('qzf', 19)
console.log(p1.name, p1.age)

var p2 = new Person('kobe', 22)