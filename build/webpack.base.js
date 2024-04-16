const path = require('path');
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require('vue-loader');
// function resolve(dir) {
// 	return path.join(__dirname, '..', dir);
// }
const isPre = process.env.NODE_ENV === 'development'
console.log('process.env.NODE_ENV ', process.env.NODE_ENV)
module.exports = {
	module: {
		rules: [
			{
				//转换文件格式
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			{
				test: /\.(t|j)s$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						cacheDirectory: true,
					},

				}
			},
			{
				test: /\.tsx?$/,
				loader: 'ts-loader',
				exclude: /node_modules/,
				options: {
					configFile: path.resolve(__dirname, '../tsconfig.json'),
					appendTsSuffixTo: [/\.vue$/],
				}
			},
			{
				test: /\.(less|css)$/,
				use: [
					isPre ? 'style-loader' : miniCssExtractPlugin.loader,
					'css-loader',
					'postcss-loader',
					'less-loader']
			},
			// {
			// 	test: /\.(jpg|png|jpeg|gif|bmp)$/,
			// 	use: {
			// 		loader: 'url-loader',
			// 		options: {
			// 			limit: 1024,
			// 			fallback: {
			// 				loader: 'file-loader',
			// 				options: {
			// 					name: '[name].[ext]'
			// 				}
			// 			}
			// 		}
			// 	}
			// },
			{
				test: /.(png|jpg|jpeg|gif|svg)$/, // 匹配图片文件
				type: "asset", // type选择asset
				parser: {
					dataUrlCondition: {
						maxSize: 10 * 1024, // 小于10kb转base64位
					}
				},
				generator: {
					filename: 'static/images/[name][ext]', // 文件输出目录和命名
				},
			},
			{
				test: /.(woff2?|eot|ttf|otf)$/, // 匹配字体图标文件
				type: "asset", // type选择asset
				parser: {
					dataUrlCondition: {
						maxSize: 10 * 1024, // 小于10kb转base64位
					}
				},
				generator: {
					filename: 'static/fonts/[name][ext]', // 文件输出目录和命名
				},
			},
			{
				test: /.(mp4|webm|ogg|mp3|wav|flac|aac)$/, // 匹配媒体文件
				type: "asset", // type选择asset
				parser: {
					dataUrlCondition: {
						maxSize: 10 * 1024, // 小于10kb转base64位
					}
				},
				generator: {
					filename: 'static/media/[name][ext]', // 文件输出目录和命名
				},
			},
		]
	},
	resolve: {
		extensions: [".js", ".jsx", ".json", ".vue"], //省略文件后缀
	},
	plugins: [
		new VueLoaderPlugin()
	]
}