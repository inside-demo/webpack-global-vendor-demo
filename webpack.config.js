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

    target: "web",

    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                        options: {
                            presets: ['env']
                        }
                    },
                ],
            },

            // Must be after `babel-loader`
            {
                test: /\.exec\.js$/,
                use: ['script-loader']
            }
        ]
    },
}