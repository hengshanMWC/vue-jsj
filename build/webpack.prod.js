const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const merge = require('webpack-merge')
const base = require('./webpack.base')
const {
	r
} = require('./utils')
module.exports = merge(base, {
	mode: 'production',
	output: {
		path: r('dist'),
		filename: 'main.js',
		// filename: '[name].js',
		// chunkFilename: '[name].[chunkhash].bundle.js',
		publicPath: ''
	},
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [
					MiniCssExtractPlugin.loader,
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
	// devtool: 'inline-source-map',
  plugins: [
		//打包的时候，根据output清除目录
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'dist',//无用
			// filename: 'index.html',
			template: 'static/index.html',
			hass: true,//无用
			favicon: 'static/favicon.ico',
			minif: {//无用
				collapseWhitespace: true, //是否去除空格                
				removeAttributeQuotes: true, // 去掉属性引用               
			  removeComments: true //去注释
			}
		}),
 		// 将css提取到自己的文件中
		new MiniCssExtractPlugin({
			filename: 'css/[name].[contenthash].css'
		}),
	],
})