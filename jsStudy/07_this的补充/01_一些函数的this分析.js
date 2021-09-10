// settimeout

// function hySetTimeOut (fn, duration) {
//   fn() //独立函数调用
// }

// hySetTimeOut(() => {
//   console.log(this) //windeow
// }, 2000);

// setTimeout(function() {
//   console.log(this) //windeow
// }, 2000);

// 2、监听点击

// const boxdiv = document.querySelector('.box')
// boxdiv.onclick = function() {
//   console.log(this) //box对象  隐式绑定
// }


// 3、数组 foreach/mape/fliter/find
var names = ['qzf', 'kobe', 'james']

names.forEach(function(item){
  console.log(item, this) //指向window
})

names.forEach(function(item){
  console.log(item, this) // 指向abc
}, "abc") // 改变this指向为abc

names.map(function(item){
  console.log(item, this) //指向window
})

names.map(function(item){
  console.log(item, this) // 指向abc
}, "abc") // 改变this指向为abc