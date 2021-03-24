var path = require("path");
var webpack = require("webpack");
const HtmlWebPackPlugin = require('html-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: {
        app: ["./web/index.js"]
    },
    output: {
        path: path.resolve(__dirname, "server"),
        publicPath: "./",
        filename: "bundle.js"
    },
    devServer: {
        contentBase: "./server",
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
                },
                {
                    test: /\.html$/i,
                    loader: 'html-loader',
                  }
            ]
    },
    plugins: [
        new HtmlWebPackPlugin({
            template: "./server/index.html",
            filename: "./index.html"
        })
    ]
};
