var webpack = require('webpack'),
    path = require('path'),
    ExtractTextPlugin = require("extract-text-webpack-plugin");

/*
 * 如果木有别的需求，直接靠devtool: 'source-map'和loaders: ['style', 'css?sourceMap', 'sass?sourceMap']可以编译sass并启用sourcemap，可以自动重新加载，但编译出来的东西会塞进bundle.js里面，完全看不到
 * 不过如果希望将sass编译到独立的CSS而不是默认的bundle.js里面，那就得引入别的东西了，详情见https://webpack.github.io/docs/stylesheets.html#separate-css-bundle，注意这样做就没有了自动重新加载
 * */

module.exports = {
    entry: [
        'webpack/hot/dev-server',
        'webpack-dev-server/client?http://localhost:8080',
        path.resolve(__dirname, 'app/main.js')
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js',
        chunkFilename: "[id].js"
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('common.js'),
        new ExtractTextPlugin('[name].css')
    ],
    module: {
        loaders: [{
            test: /.jsx?$/,
            loader: 'babel-loader',
            exclude: /node_modules/,
            query: {
                presets: ['es2015', 'react']
            }
        }, {
            test: /\.css$/, loader: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap")
        }, {
            test: /\.scss$/,
            loaders: ExtractTextPlugin.extract("style-loader", "css-loader?sourceMap", "sass-loader?sourceMap")
        }]
    }
};