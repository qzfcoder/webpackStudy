function foo( ) {
  console.log(this)
}
foo.apply('asd') //asd
foo.call({})  // 指向对象

foo.apply(null) //若传入的是null undefinded  指向的是window