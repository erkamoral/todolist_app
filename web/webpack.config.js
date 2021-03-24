var path = require("path");
var webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const staticDir = path.resolve(__dirname, "build");
module.exports = {
    mode: 'development',
    entry: {
        app: ["./index.js"]
    },
    output: {
        path: path.join(__dirname, 'build'),
        publicPath: './',
        filename: 'bundle.js'
      },
    devServer: {
        contentBase: "./build",
    },
    module: {
        rules:  [{
                test: /\.jsx?$/,
                exclude: /(node_modules)/,
                use: {
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'react', 'stage-0']
                }}
            },{
                test: /\.css$/i,
                use: ['style-loader', 'css-loader']
                } 
            ]
    },
    plugins: [ new HtmlWebpackPlugin({
        template: 'server/index.html',
      }),]
};
