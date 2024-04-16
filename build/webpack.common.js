const path = require('path');
const {merge} = require('webpack-merge');
const WebpackBase = require('./webpack.base.js')
const WebpackBar = require('webpackbar')
const ProgressBarWebpackPlugin = require('progress-bar-webpack-plugin')
const CompressionPlugin  = require('compression-webpack-plugin')
const TerserPlugin = require('terser-webpack-plugin')
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin')
const globAll = require('glob-all')
const { PurgeCSSPlugin } = require('purgecss-webpack-plugin')
module.exports = merge(WebpackBase,{
    devtool: 'source-map',
    mode: "production",
    externals: {
        vue: 'Vue'
    },
    optimization: {
        splitChunks: { // 分隔代码
            cacheGroups: {
         
            }
        },
        minimizer: [
            new CssMinimizerPlugin(), // 压缩css
          new TerserPlugin({ // 压缩js
            parallel: true, // 开启多线程压缩
            terserOptions: {
              compress: {
                pure_funcs: ["console.log"] // 删除console.log
              }
            }
          }),
        ],
      },
    plugins: [
        new WebpackBar(),
		new ProgressBarWebpackPlugin(),
        new CompressionPlugin({
            test: /.(js|css)$/, // 只生成css,js压缩文件
            filename: '[path][base].gz', // 文件命名
            algorithm: 'gzip', // 压缩格式,默认是gzip
            test: /.(js|css)$/, // 只生成css,js压缩文件
            threshold: 10240, // 只有大小大于该值的资源会被处理。默认值是 10k
            minRatio: 0.8 // 压缩率,默认值是 0.8
          }),
          // 清理无用css
         new PurgeCSSPlugin({
            // 检测src下所有vue文件和public下index.html中使用的类名和id和标签名称
            // 只打包这些文件中用到的样式
            paths: globAll.sync([
            `${path.join(__dirname, '../packages')}/**/*.vue`,
            ]),
        }),
    ]
})
