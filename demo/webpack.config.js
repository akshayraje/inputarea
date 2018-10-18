const path = require("path");
const baseConfig = require('../webpack.config');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './demo/index.js',
    output: {
        path: path.resolve('./dist'),
        filename: 'main.js',
        libraryTarget: 'umd'
    },
    module: baseConfig.module,
    plugins: [
        new HtmlWebpackPlugin({ template: "./demo/index.html" })
    ]
};