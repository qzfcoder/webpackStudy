var obj = {
    name: 'qzf',
    age: 24
}

// 属性描述符是一个对象
Object.defineProperty(obj, "height", {
    value: 1.88
})

console.log(obj) // 单纯这样写 输出不了height
console.log(obj.height) // 这样可以取到height
