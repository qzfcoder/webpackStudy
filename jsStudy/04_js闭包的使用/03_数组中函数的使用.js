var nums = [10, 5, 11, 23, 12, 77]

// var newnums = []
// for(var i = 0; i<nums.length; i++) {
//   var num =  nums[i]
//   if(num%2 === 0) {
//     newnums.push(num)
//   }
// }
// console.log(newnums)

// 函数 function 独立的一个function，称之为一个函数
// 例如 function foo() {}
// 方法 methods 当我们的函数属于莫一个对象时候，我们称这个函数是这个对象的方法
// 例如 var obj = {
//   foo: function () {

//   }
// }
// filter: 过滤  可以传入一个函数，返回一个boolean类型的
var newnums = nums.filter((item, index, arr) => {
  return item % 2 === 0
})
console.log(newnums)

// map: 映射
var newNums2 = nums.map((item) => {
  return item *2
})
console.log(newNums2)

// forearch 迭代
nums.forEach((item) => {
  console.log(item)
})

// find/findIndex
var item = nums.find((item) => {
  return item === 77
})
console.log(item)


var friends = [
  {
    name: 'qzf',
    age: 18
  },
  {
    name: 'kobe',
    age: 18
  },
  {
    name: 'james',
    age: 18
  },
  {
    name: 'curry',
    age: 18
  },
]

var friend = friends.find((item) => {
    return item.name === 'james'
})

var friendIndex = friends.findIndex((item) => {
  return item.name === 'james'
})
console.log(friend,friendIndex)


// reduce: 累加
var total = 0
for ( var i = 0; i<nums.length; i++){
  total += nums[i]
}
console.log(total)
// reduce中的第一个参数是上一次的返回值
var totalreduce = nums.reduce((preValue, item) => {
  return  preValue + item
}, 0)
console.log('reduce', totalreduce)