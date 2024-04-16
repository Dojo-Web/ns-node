const path = require('path');
const {merge} = require('webpack-merge');
const WebpackCommon = require('./webpack.common.js')
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const WebpackBar = require('webpackbar')
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin')
const CompressionPlugin  = require('compression-webpack-plugin')
console.log('234567')
module.exports = merge(WebpackCommon,{
    entry: {
        index: path.resolve(__dirname, '../utils/index.js')
    },
    output: {
        path: path.resolve(__dirname, '../dist'),
        filename: 'ns-node.js',
        library: {
            name:'ns-node',
            type: 'umd',
            umdNamedDefine: true,
        }
    },
    plugins: [
        new miniCssExtractPlugin({
			filename: "index.css",
		}),
        // new BundleAnalyzerPlugin() // 配置分析打包结果插件
    ]
})
