function sum(m, n) {
    return m + n
}

// 假如在程序中，我们一直要把5和另外一个数字相加
console.log(sum(5,10))
console.log(sum(5,11))
// .....

// 柯里化处理
function makeAdd(count){
    count = count * count
    return function(num) {
        return count + num
    }
}
var result = makeAdd(5)(10)

console.log(result)



var adder5 = makeAdd(5)
adder5(10)
adder5(11)