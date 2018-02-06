const OpenBrowserWebpackPlugin = require('open-browser-webpack-plugin');
const webpack = require('webpack');
module.exports = {
    entry: './src/main.js',
    output: {
        path: __dirname,
        filename: 'dist/app.js'
    },
    module: {
        loaders: [{
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader'
            },
            {
                test: /\.(png|gif|jpe?g|ttf|wottf)$/,
                loader: 'file-loader'
            }
        ]
    },
    devServer: {
        contentBase: __dirname,
        historyApiFallback: true,
        port: 8005,
        inline: true,
        hot: true,
        proxy: { // 请求代理项
            // '/bgs': {
            //   "target": 'https://restapi.ele.me',
            //   "changeOrigin": true,
            // }
            '/hdl_market': {
                "target": 'http://wemedia.haidilao.com',
                "changeOrigin": true
            }
        }
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new OpenBrowserWebpackPlugin({
            url: 'http://localhost:8002'
        }),
        // 使用 webpack 的 DefinePlugin 来指定生产环境，以便在压缩时可以让 UglifyJS 自动删除警告代码块
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        })
    ]
}