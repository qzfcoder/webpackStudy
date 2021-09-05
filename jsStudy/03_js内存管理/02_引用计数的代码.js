var obj = {name: 'qzf'}

var info = {
  name: 'kobe',
  friend: obj
}

var p = {
  name :'james',
  friend: obj
}

// 这时候在堆中有了三个内存空间
// info中friend中指针指向obj的内存空间，p中也是指向obj
// 这时候obj中有一个专门的空间retain count 表示当前的计数，有指向的话 就+1 ，那么现在info 和 p 还有栈空间都指向obj
// 这时候obj中retain count为3，
// 当我们引入计数为0的时候这块内存空间就会被销毁

// 引入计数的弊端：循环引用
var obj1 = {
  friend:obj2
}
var obj2 = {
  friend:obj1
}