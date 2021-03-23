var path = require("path");
var webpack = require("webpack");
module.exports = {
    mode: 'development',
    entry: {
        app: ["./web/index.js"]
    },
    output: {
        path: path.resolve(__dirname, "build"),
        publicPath: "/assets/",
        filename: "bundle.js",
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
    }
};
