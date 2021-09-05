var message = 'hello world'

function foo() {
  console.log(message)
}

function bar () {
  var message =  'bar'
  foo()
}

bar()