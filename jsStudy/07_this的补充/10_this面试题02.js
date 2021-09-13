var name = 'window'

var person1 = {
  name: 'person1',
  foo1: function() {
    console.log(this.name)
  },
  foo2: ()=> {console.log(this.name)},
  foo3: function() {
    return function () {
      console.log(this.name)
    }
  },
  foo4: function() {
    return () => {
      console.log(this.name)
    }
  }
}

var person2 = {
  name: 'person2'
}

person1.foo1()  //perosn1 隐式绑定
person1.foo1.call(person2) //perosn2 显示绑定

person1.foo2() //window 
person1.foo2.call(person2) //window 

person1.foo3()() //window 独立函数调用 
person1.foo3.call(person2)() // //window 独立函数调用
person1.foo3().call(person2) //person2 最终调用函数时候用的是显示绑定

person1.foo4()() //person1 箭头函数不绑定函数，上层作用域绑定的是person1
person1.foo4.call(person2)() //perso2 
person1.foo4().call(person2)() //person1
