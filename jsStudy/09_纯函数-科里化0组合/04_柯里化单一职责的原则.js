function add(x, y, z) {
    x = x + 2
    y = y * 2
    z = z * z
    return x + y + z
}

console.log(add(1, 2, 3))


// 柯里化操作
function sum(x) {
    x = x + 10
    return function (y) {
        y = y * 2
        return function (z) {
            z = z * z
            return x + y + z
        }
    }
}

sum(10)(20)(30)