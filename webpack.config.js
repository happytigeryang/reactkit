var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: [
        'react-hot-loader/patch',
        // activate HMR for React

        'webpack-dev-server/client?http://localhost:8080',
        // bundle the client for webpack-dev-server and connect to the provided endpoint

        'webpack/hot/only-dev-server',
        // bundle the client for hot reloading only- means to only hot reload for
        // successful updates
        './src/index.js'
    ],
    output: {
        filename: 'bundle.js',
        // the output bundle

        path: path.resolve(__dirname, 'dist'),

        publicPath: '/static/'
        // necessary for HMR to know where to load the hot update chunks
    },
    // context: path.resolve(__dirname, 'src'),
    resolve: {
        extensions: ['.js', '.jsx']
    },
    devServer: {
        hot: true,
        // enable HMR on the server

        contentBase: path.resolve(__dirname, 'src'),
        // match the output path

        publicPath: '/static/'
        // match the output `publicPath`
    },
    module: {
        rules: [
            {
                test: /\.js|jsx/,
                loaders: ['babel-loader'],
                exclude: /node-modules/
            }
        ]

    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        // enable HMR globally

        new webpack.NamedModulesPlugin(),
        // prints more readable module names in the browser console on HMR updates

        // new HtmlWebpackPlugin(),
        // //The plugin will generate an HTML5 file for you that includes all your webpack bundles in the body using script tags. 
    ]
};