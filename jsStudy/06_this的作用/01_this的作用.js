var obj = {
    name: 'qzf',
    eating: function () {
        console.log(obj.name + '在吃饭')
    },
    running: function() {
        console.log(obj.name + '在跑步')
    },
    studying: function() {
        console.log(this.name + '在学习')
    }
}

obj.eating()
obj.running()
obj.studying()