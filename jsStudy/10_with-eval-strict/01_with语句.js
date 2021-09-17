var message = 'hello world'


// function foo() {
//     function bar () {
//         console.log(message)
//     }
//     bar()
// }

// foo()


// with 语句： 可以形成自己的作用域
var obj = { name: 'qzf', age: 19, message: 'aaa'}

function foo() {
    function bar() {
        with(obj) {
            console.log(message) // 他会先在with传入的对象中查找，在去外层查找，一直到go对象
            console.log('=========')
        }
    }
    bar()
}

foo()