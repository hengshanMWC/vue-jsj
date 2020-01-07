const merge = require('webpack-merge')
const base = require('./webpack.base')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const webpack = require('webpack')
const {
	r
} = require('./utils')
module.exports = merge(base, {
  mode: 'development',
  devtool: 'source-map',
  module: {
    rules: [
      {
        test: /\.s?css$/,
        use: [
          "vue-style-loader",
          "css-loader",
          "postcss-loader",
          "sass-loader",
          {
						loader: 'sass-resources-loader',
						options: {
								resources: [
										r('src/styles/index.scss')
								]
						}
					}
        ]
      }
    ]
  },
  devServer: {
    stats: 'errors-only',
    open: true, // 打开
    hot: true, // 模块热替换
    host: 'localhost',
    overlay: {
      errors: true
    }, // 出现错误，全屏覆盖
    port: 9000
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(), // 热加载模块
    new HtmlWebpackPlugin({
			title: 'mwc',//无用
			// filename: 'index.html',
			template: 'static/index.html',
			hass: true,//无用
			favicon: 'static/favicon.ico'
		})
  ]
})