const { merge } = require('webpack-merge');
const path = require('path')
const resolve = dir=>path.resolve(__dirname,dir);
const base = require('./webpack.base.js')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const VueSSRServerPlugin = require('vue-server-renderer/server-plugin')
module.exports = merge(base,{
    mode:'production',
    entry:{
        server:resolve('../src/server-entry.js')
    },
    target:'node',
    output: {
        libraryTarget: 'commonjs2'
    },
    plugins:[
        new VueSSRServerPlugin(),
        new HtmlWebpackPlugin({
            template:resolve('../public/index.ssr.html'),
            filename:'index.ssr.html',
            excludeChunks:['server'],
            minify:false
        })
        
    ]
})