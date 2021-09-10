// var name = 'qzf'

// var foo = ()=>{
//   console.log(this)
// }

// foo()
// // 箭头函数中显示绑定，隐式绑定等都没有用 
// var obj = {foo: foo}

// obj.foo()

// foo.call('abc')

// 应用场景

var obj = {
  data: [],
  getData: function () {
    // 发送网络请求，把结果放到data中
    var that = this // 隐式绑定，this指向的是obj，
    setTimeout(function(){
      var result = ['a', 'b', 'c']
      that.data = result
    }, 2000);
  }
}
obj.getData()
// 使用箭头函数
var obj2 = {
  data: [],
  getData: function () {
    // 发送网络请求，把结果放到data中
    setTimeout(() => {
      var result = ['a', 'b', 'c']
      this.data = result  //这里的this指向的是getData 对象是obj2
    }, 2000);
  }
}
obj2.getData()