const path = require('path');
const { merge } = require('webpack-merge');
const WebpackBase = require('./webpack.base.js')
const { HotModuleReplacementPlugin, IgnorePlugin } = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin')
function resolve(dir) {
	return path.join(__dirname, '..', dir);
}
module.exports = merge(WebpackBase, {
	mode: 'development',
	entry: path.resolve(__dirname,'../examples/main.ts'),
	output: {
		filename: 'index.js',
		path: path.resolve(__dirname, '../ns-node')
	},
	devServer: {
		hot: true,
		port: 7777,
		compress: true,
		historyApiFallback: {
            index: '/index.html' 
        }
	},
	watchOptions: {
		ignored: /node_modules/
	},
	resolve: {
		extensions: [".js", ".ts", '.vue'], //省略文件后缀
		alias: {
			'@src': resolve('examples'),
			'@utils': resolve('utils'),
			'@packages': resolve('packages'),
		}
	},
	plugins: [
		// new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: '楠社前端组件库',
			// filename: "./index.html",
			inject: true, // 自动注入静态资源
			template:path.resolve(__dirname, '../examples/index.html')
		}),
		// new IgnorePlugin({
		// 	resourceRegExp:/^\.\/locale$/,
		// 	contextRegExp: /moment$/
		// }),
		new HotModuleReplacementPlugin(),
	],
}) 