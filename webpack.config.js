/* global __dirname */



var webpack = require('webpack');

module.exports = {
    entry:__dirname+'/src/app/index.js',
    output:{
        path:__dirname + '/src/endpoint/static/',
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {
                test:/\.js?$/,
                loader: 'babel-loader',
                exclude: /(node_modules|bower_components)/,
                query: {
                    presets: ['stage-0','es2015','react']
                }
            },
            {
                test:/\.css$/,
                loader:'style-loader!css-loader'
            }
        ]
    },
    /*plugins:[
        new webpack.ProvidePlugin({
            'fetch':'imports?this=>global!exports?global.fetch!whatwg-fetch'
        })
    ]*/

}