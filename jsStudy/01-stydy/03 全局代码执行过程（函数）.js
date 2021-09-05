var name = "qzf"





foo()

function foo() {
    
    console.log("foo")
}



// console.log(num1)

// var num1 = 10
// var num2 = 20

// var result = num1 + num2

// console.log(result)

// console.log(window)


// 创建一个全局对象,当前函数编译的时候
var GlobalObject = {
    String: '类',
    window:GlobalObject,
    name: undefined,
    // 进行到第四行发现时一个函数的定义,函数是特殊的。他会在内存中开辟一个存储空间
    // 帮我们创建一个函数对象，保存函数执行体（要执行的代码块）
    foo: '0x(内存空间的地址)', //指向内存中的那个存储空间
}
