() => {

}

var nums = [1,2,3,4,5,6]

nums.forEach((item)=>{
  console.log(item)
}) 

nums.forEach( item => console.log(item))

var newNums = nums.filter(item => item %2 === 0)
console.log(newNums)

var result = nums.filter(item => item % 2 ===0).map(item => item *100).reduce( (preValue, item) => preValue + item)
console.log(result)

var bar = () => {
  return {name:'qzf', age:18}
}

// ===========

var bar = () => ({name:'qzf', age:18})