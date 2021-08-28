/**
 * webpack.config.js webpack 的配置文件
作用 只是webpack干那些活（当你运行webpack指令时候，会加载里面的配置）

所有构建工具都市居于nodejs平台运行的 模块化采用commonjs
 */

// resolve用来拼接绝对路径的方法
const {resolve} = require('path')
module.exports = {
  //webpack配置
  //入口起点
  entry: './src/index.js',
  //输出
  output: {
    filename: 'built.js',
    // 输出路径
    path: resolve(__dirname,'build')
  },
  // loader的配置
  module: {
    rules:[
      //详细loader配置
      // 不同文件要配置不同loader
      {
        //匹配哪些文件
        test: /\.css$/,
        // 使用哪些loader
        use: [//use数组中loader执行顺序，从右到左，从上到下，依次执行
          // 创建一个style标签，将js中的css样式资源插入进行，添加到head中生效
          'style-loader',
          //将css文件以字符串的形成  变成一个commonjs模块加载到js中，
          'css-loader'
        ]
      },
      {
        //匹配哪些文件
        test: /\.less$/,
        // 使用哪些loader
        use: [//use数组中loader执行顺序，从右到左，从上到下，依次执行
          // 创建一个style标签，将js中的css样式资源插入进行，添加到head中生效
          'style-loader',
          //将css文件以字符串的形成  变成一个commonjs模块加载到js中，
          'css-loader',
          'less-loader'
        ]
      }

    ]
  },
  //plugins的配置
  plugins: [

  ],
  //模式
  mode: 'development',
  // mode: 'production'
}
