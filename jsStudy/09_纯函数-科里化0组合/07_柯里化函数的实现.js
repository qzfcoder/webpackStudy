function add(x, y, z) {
    return x + y + z
}


// 柯里化函数的实现
function hyCurrying( fn ) {
    function curried(...args) {
        // 做一个判断，当前已经接收到参数的个数，与要接收参数是否一致
        if(args.length >= fn.length) {
            return fn.apply(this, args)
        } else {
            return function(...args2) {
                return curried.apply(this,[...args,...args2])
            }
        }
    }
    return curried
}