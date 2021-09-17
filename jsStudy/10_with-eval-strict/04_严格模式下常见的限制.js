// 意外创建全局变量
message = 'hello world'
console.log(message)

function foo() {
    age = 10
}
foo()

console.log(age)

// 不允许函数有相同的参数名称

function fzz(x, x, y){
    console.log(x, x, y)
}
fzz()

// 静默错误
NaN = 123

var obj = {}

Object.defineProperty(obj, 'name', {
    configurable: false, // 不能配置
    writable: false, // 不可更改
    value: 'qzf'
})
console.log(obj.name)
obj.name = 'qqq'  // 静默错误

// 在严格模式下不能使用8进制格式
var num = 0123 //8进制数字
var num2 = 0x123 

// with语句不能使用

// eval函数不会向上引用变量
var jsString = 'var message="asdasd asd"; console.log(message)' //普通模式下，会创建message对象，在严格模式下不会创建
eval(jsString)
