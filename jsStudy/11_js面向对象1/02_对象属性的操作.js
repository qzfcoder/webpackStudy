var obj = {
    name: 'qzf',
    age: 24
}


console.log(obj.name)

obj.name = 'kobe'
console.log(obj.name)

// delete obj.name
console.log(obj)


// 对属性进行操作时候，进行一些限制，
// 不允许摸个属性被赋值或者被删除，不允许某些属性被连里出来


// 遍历属性
for (var key in obj) {
    console.log(key)
}