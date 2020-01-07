const VueLoaderPlugin = require('vue-loader/lib/plugin')
const {
	r
} = require('./utils')
module.exports = {
	entry: {
		index: r('src/main.js')
	},
	resolve: {
	  // extensions: ['.js', '.jsx','.ts','.tsx', '.scss','.json','.css'],
		alias: {
			'@' : r('src'),
			'~': r('src/utils')
		},
		modules: ['node_modules'],
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				loader: "babel-loader",
				exclude: /node_modules/,
				options: {
					cacheDirectory: true
				}
				// include: path.join(__dirname, './src')  // 指定匹配文件的范围,需要绝对路径
			},
			{
        test: /\.vue$/,
        loader: 'vue-loader'
      },
			{
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: {
					limit: 10000,//低于1000字节的转base64
				}
      },
      {
				test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
				loader: 'url-loader',
				options: {
					limit: 10000,
				}
			}
		]
	},
	optimization: {
		runtimeChunk:true,//方式一
	},
	plugins: [
		new VueLoaderPlugin()
	]
}