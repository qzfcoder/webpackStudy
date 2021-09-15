function double(num) {
    return num * 2
}

function square ( num){
    return num ** 2
}

var count = 10
var result = square(double(count))
console.log(result)

function composeFn(m, n) {
    return function (count) {
        n(m(count))
    }
}

var newFn = composeFn(double, square)

console.log(newFn(10))


function hyCompose(...fns){
    var length = fn.length
    for(var i = 0; i<length; i++) {
        if( typeof fns[i] !== 'function') {
            throw new TypeError('xxxxxxxxxxx')
        }
    }
    function compose(...args) {
        var index = 0
        var result = length ? fns[index].apply(this, args) : args
        while ( ++index < length) {
           result = fns[index].apply(this, [result])
        }
        return result
    }
    return compose
}