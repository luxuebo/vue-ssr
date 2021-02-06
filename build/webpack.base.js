const path = require('path')
const resolve = dir=>path.resolve(__dirname,dir);
const VuePlugin = require('vue-loader/lib/plugin')
module.exports={
    output:{
        filename:'[name].bundle.js',
        path:resolve('../dist')
    },
    resolve:{
        extensions:['.js','.vue']
    },
    module:{
        rules:[
            {
                test:/\.vue$/,
                use:'vue-loader'
            },
            {
                test:/\.js$/,
                use:{
                    loader:'babel-loader',
                    options:{
                        presets:['@babel/preset-env']
                    }
                },
                exclude:/node_modules/
            },
            {
                test:/\.css$/,
                use:[
                    {
                        loader:'vue-style-loader'
                    },
                    {
                        loader:'css-loader',
                        options:{
                            esModule: false
                        }
                    }
                ],
            }
           
        ]
    },
    plugins:[
        new VuePlugin()
    ]
}