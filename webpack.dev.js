const webpack = require("webpack");
const path = require("path")

const htmlWebPackPlugin = require("html-webpack-plugin")
//require("./client/views/index.html")

module.exports = {
    mode:'development',
    entry:"./client/index.js", //Entry
    output:{
        libraryTarget: 'var',
        library: 'Client'
    },
    module:{ //loaders
        rules:[
            {
                test:'/\.js$/',
                exclude: /node_modules/,
                loader: "babel-loader"
            },
            {
                test: /\.(s(a|c)ss)$/,
                use:['style-loader','css-loader', 'sass-loader']
            }
        ]
    },
    plugins:[
        new htmlWebPackPlugin({
            template:"./client/views/index.html",
            filename:"index.html"
        })
    ]

}