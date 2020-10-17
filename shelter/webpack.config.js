const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {
    CleanWebpackPlugin
} = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
// const CopyWebpackPlugin = require('copy-webpack-plugin')

// const PATHS = {
//     src: path.join(__dirname, '../src'),
//     dist: path.join(__dirname, '../dist'),
//     assets: 'assets/'
//   }

module.exports = {
    // externals: {
    //     paths: PATHS
    //   },
    entry: {
        main: './src/index.js',
        pets: './src/pets.js'

    },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: './dist',
    },
    output: {
        filename: '[name]/[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),

    },

    module: {
        rules: [{
                test: /\.css$/,
                use: [{
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../',
                        },
                    },
                    'css-loader',
                ],
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    'file-loader',
                ],
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    'file-loader',
                ],
            },
        ],
    },
    plugins: [
        new CleanWebpackPlugin({
            cleanStaleWebpackAssets: false
        }),
        new HtmlWebpackPlugin({
            title: 'Main',
            filename: 'main/index.html',
            template: 'src/pages/main/index.html',
            chunks: ['main']

        }),
        new HtmlWebpackPlugin({
            title: 'Pets',
            filename: 'pets/pets.html',
            template: 'src/pages/pets/pets.html',
            chunks: ['pets']

        }),
        new MiniCssExtractPlugin({
            filename: '[name]/[name].css',
            chunkFilename: '[id].css',
            ignoreOrder: false,
        }),

    ],
};