
// webpack入口起点文件
/**
 * 1、运行指令
 *    开发环境 webpack ./src/index.js -o ./build/built.js --mode=development
 *    webpack会议 ./src/index.js 为入口文件来打包，打包后输出到 ./build/buit.js
 *    整体打包环境，是开发环境
 *    生成环境 webpack ./src/index.js -o ./build/built.js --mode=production
 * 
 * 生产环境和开发环境能加es6模块化编译成浏览器能识别的
 * 生成环境比开发环境多一个压缩js戴拿
 *  */
import data from './data.json'
// import './index.css' 不能处理样式资源 只能处理js/json文件
function add(x,y){
  return x+y
}
console.log(add(2,1))
console.log(data)