const path = require("path")
const HtmlWebapckPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/迭代器模式/index.js",
  output: {
    // path: path.join(__dirname, 'dist'),
    // filename: "[name].min.js",
    path: __dirname,
    filename: "./dist/bundle.js"
  },

  module: {
    rules: [{
      test: /\.js?$/,
      exclude: /(node_modules)/,
      loader: "babel-loader"
    }]
  },

  plugins: [
    new HtmlWebapckPlugin({
      template: "./index.html"
    })
  ],

  devServer: {
    contentBase: path.join(__dirname, "./dist"),
    open: true,
    // 是否压缩
    compress: true,
    port: 9999
  }
}
