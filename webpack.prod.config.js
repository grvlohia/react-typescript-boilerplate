const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const path = require('path');

module.exports = {
    mode: 'production',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.[contenthash].js"
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /.scss$/,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },
    optimization: {
        minimizer: [
            `...`,
            new CssMinimizerPlugin()
        ]
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'public', 'index.html'),
            minify: true
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.[contenthash].css'
        })
    ]
}