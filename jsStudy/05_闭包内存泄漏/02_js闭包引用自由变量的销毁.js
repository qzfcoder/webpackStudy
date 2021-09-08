function foo() {
    var name = 'qzf'
    var age = 19
    function bar () {
        console.log(name)
        console.log(age)
    }
    return bar
}
var fn = foo()

fn()