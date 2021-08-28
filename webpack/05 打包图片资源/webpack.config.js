/**
 * webpack.config.js webpack 的配置文件
作用 只是webpack干那些活（当你运行webpack指令时候，会加载里面的配置）

所有构建工具都市居于nodejs平台运行的 模块化采用commonjs

loader:1、下载 2、使用（配置loader）
plugins 1、下载 2、映入 3、使用
 */

// resolve用来拼接绝对路径的方法
const {resolve} = require('path')
// 映入插件
const HtmlWebpackPlugin  = require('html-webpack-plugin')
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
      },
      {
        //处理图片资源,默认处理不了html中的文件
        test:/\.(jpg|png|gif)$/,
        loader:'url-loader',
        options: {
          //图片小于8kb 就会被base64处理
          //优点: 减小请求数量（减少服务器压力）
          //缺点: 图片体积会更大（文件请求速度会更慢）
          limit: 8 * 1024,
          // 解决，关闭url-loader的es6模块化
          esModule: false,
          // 给图片重命名，
          // hash:10 取图片hash的钱10位
          name:'[hash:5].[ext]'
        }
      },
      // {
      //   test: /\.html$/,
      //   // 处理html中的img文件
      //   loader: 'html-loader'
      // }
    ]
  },
  //plugins的配置
  plugins: [
    //html-webpack-plugin:  会常见一个html文件，引入打包输出所有的资源（js/css）
    // 需求： 需要有结构的html文件
    new HtmlWebpackPlugin({
      // 创建一个html文件
      // 复制'./src/index.js'
      template: './src/index.html'
    })
  ],
  //模式
  mode: 'development',
  // mode: 'production'
}
