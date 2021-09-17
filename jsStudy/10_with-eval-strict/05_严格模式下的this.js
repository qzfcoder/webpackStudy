// 在非严格模式下指向window，在严格模式下会直向underfined
function foo() {
    console.log(this)
}
foo()