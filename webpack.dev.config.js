const path = require('path')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development',
    devtool: 'source-map',
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
    plugins: [
        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: path.resolve(__dirname, 'public', 'index.html'),
        }),
        new MiniCssExtractPlugin({
            filename: 'styles.css'
        })
    ],
    devServer: {
        static: path.resolve(__dirname, 'dist'),
        port: 8080,
        hot: true,
    },
}