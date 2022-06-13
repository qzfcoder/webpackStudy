const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
  mode: 'development',
  // entry: "./src/index.js",
  entry: {
    index: './src/index.js',
    // print: './src/print.js',
    // another: './src/another-module.js',
    // index: {
    //   import: './src/index.js',
    //   dependOn: 'shared',
    // },
    // print: {
    //   import: './src/print.js',
    //   dependOn: 'shared',
    // },
    // another: {
    //   import: './src/another-module.js',
    //   dependOn: 'shared',
    // },
    // shared: 'lodash',
  },
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
  },
  plugins: [
    new HtmlWebpackPlugin({
      // title: '管理输出',
      title: 'Development',
    }),
  ],
  output: {
    // filename: "bundle.js",
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, "dist"),
    clean: true,
    publicPath: '/',
  },
  // optimization: {
  //   splitChunks: {
  //     chunks: 'all',
  //   },
  // },
};
