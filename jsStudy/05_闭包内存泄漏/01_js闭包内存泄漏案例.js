function createFnArray () {
    var arr = new Array(1024 * 1024).fill(1)
    return function() {
        console.log(arr.length)
    }
}

// var arrayFn = createFnArray()

// 若不写 arrayFn = null 就会有一个4m的对象在内存中


// for ( var i = 0; i<100 ; i++ ){
//     createFnArray() //在这里没有用东西接受，所以会被销毁
// }

var arrfns = []
for ( var i = 0; i<100 ; i++ ){
    arrfns.push(createFnArray()) //在这里不会被销毁
}