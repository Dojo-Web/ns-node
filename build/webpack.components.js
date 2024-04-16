const path = require('path');
const { merge } = require('webpack-merge');
const WebpackCommon = require('./webpack.common.js')
const miniCssExtractPlugin = require("mini-css-extract-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const SpeedMeasurePlugin = require('speed-measure-webpack-plugin');
const CompressionPlugin  = require('compression-webpack-plugin')
const smp = new SpeedMeasurePlugin();
// smp.wrap( 分析打包速度
const components = require('./components.json')
const entryList = {}
const basePath = path.resolve(__dirname, '../')
Object.keys(components).forEach(key => {
    entryList[key] = path.join(basePath, components[key])
})
console.log('entryList', entryList)
module.exports = merge(WebpackCommon,{
    entry: entryList,
    output: {
        path: path.resolve(__dirname, '../dist/'),
        filename: '[name]/index.js',
        chunkFilename: '[id].js',
        library: {
            type: 'umd',
            umdNamedDefine: true
        }
        
    },
    plugins:[
        new miniCssExtractPlugin({
			filename: "[name]/style.css",
		}),
        // new BundleAnalyzerPlugin() // 配置分析打包结果插件
    ]
})
