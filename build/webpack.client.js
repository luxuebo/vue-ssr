const { merge } = require('webpack-merge');
const path = require('path')
const resolve = dir=>path.resolve(__dirname,dir);
const base = require('./webpack.base.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueSSRClientPlugin = require('vue-server-renderer/client-plugin')
module.exports = merge(base,{
    entry:{
        client:resolve('../src/client-entry.js')
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:resolve('../public/index.html'),
            filename:'index.html',
            minify:false
        }),
        new VueSSRClientPlugin()
    ]
})