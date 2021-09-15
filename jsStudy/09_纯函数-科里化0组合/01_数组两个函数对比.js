var names = ['qzf', 'kobe', 'james', 'nba']

// slice只要getaway一个start/end，那么对于同一个数组来说，他会给我们返回确定的值
// slice函数本身他不会改变原来的数组
// slice -> this  slice就是一个纯函数
var newNames1 = names.slice(0,3)

console.log(newNames1)

// 原数组被改变了，splice不是纯函数
var newnames2 = names.splice(2)
console.log(names)
console.log(newnames2)