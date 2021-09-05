// function foo(arg) {
//   console.log('foo', arg)
// }

// foo(123)

// function foo(fn) {
//   fn()
// }

// function bar() {
//   console.log('bar')
// }

// foo(bar)

function calculate(num1, num2, calcfn) {
  calcfn(num1, num2)
  console.log(calcfn(num1, num2))
}

function add(num1,num2){
  return num1 + num2
}

function sub (num1,num2){
  return num1 - num2
}

function mul (num1, num2) {
  return num1 *num2
}

calculate(1,2,add)