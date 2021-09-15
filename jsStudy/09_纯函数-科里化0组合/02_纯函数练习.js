// foo是一个纯函数，相同的输入有相同的输出，执行过程中没有任何副作用
function foo(num1, num2){
    return num1 * 2 + num2 * 2
}

// bar不是一个纯函数， name已经被修改了
var name = 'abc'
function bar(){
    console.log("xxxxxxxxx")
    name = 'cba'
}
bar()


// baz不是一个纯函数， age已经被修改了
function baz(info) {
    info.age = 100
}

var obj = {name: 'qzf', age: 18}
baz(obj)
console.log(obj)

// test是一个纯函数， obj被传入了，但是没有被修改 
function test(info) {
    return {
        ...info,
        age: 100
    }
}

test(obj)
console.log(obj)