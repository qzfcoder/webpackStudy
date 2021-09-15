function add(x, y, z) {
    return x + y + z
}

var result = add(1,2,3)

console.log(result)

function sum(x) {
    return function (y){
        return function (z){
            return x + y + z
        }
    }
}
var result1 = sum(1)(2)(4)

console.log(result1)

// 简化柯里化代码

var sum2 = x => y => z => {
    return x + y + z
}
console.log(sum2(2)(3)(4))

// 柯里化让函数职责单一
// 让每次传入的参数在单一函数中进行处理