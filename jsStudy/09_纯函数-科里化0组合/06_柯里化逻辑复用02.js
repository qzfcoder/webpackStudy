function log(data, type, message) {
    console.log(`[${data.getHours()}:${data.getMinutes()}] ${type}:${message}`)
}
log(new Date(), 'bug', 'asdsadas')
log(new Date(), 'bug2', '2222')



// 柯里化优化
var log = date => type => message =>{
    console.log(`[${date.getHours()}:${date.getMinutes()}] ${type}:${message}`)
}

// 如果我现在打印的都市当前时间
var newLog = log(new Date())
newLog('bug')('asdas')