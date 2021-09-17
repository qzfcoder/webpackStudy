var obj = {
    name: 'qzf',
    age: 10
}

Object.defineProperty(obj, 'adress', {
    value: '杭州',
    configurable: false, // 不可配置的，不会被删除，改变
    enumerable: false, // 不可枚举的
    writable: false, //是否可以修改值
})