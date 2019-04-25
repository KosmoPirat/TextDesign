const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'docs'),
        filename: 'bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'docs'),
        hot: true,
        port: 9000,
        watchContentBase: true,
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [ 
                    {
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            hmr: true,
                            reloadAll: true,
                        }
                    },
                    {
                        loader: 'css-loader',
                        options: {
                            url: true
                        }
                    }
                ],
            },
            {
                test: /\.svg$/,
                loader: 'url-loader'
            },
            {
                test: /\.pug$/,
                use: ["pug-loader"]
            }
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({template: './src/index.pug'}),
        new MiniCssExtractPlugin({
            filename: '[name].css',
            chunkFilename: '[id].css',
        }),
    ]
};