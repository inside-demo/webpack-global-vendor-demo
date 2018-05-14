const webpack = require('webpack')
const path = require('path')

module.exports = {
    entry: {
        app: ['./src/app.js']
    },
    
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: '[name].js'
    },

    module: {
        rules: [
            {
                test: /\.exec\.js$/,
                use: ['script-loader']
            }
        ]
    },
}