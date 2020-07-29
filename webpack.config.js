const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackMd5Hash = require('webpack-md5-hash');
const webpack = require('webpack');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const isDev = process.env.NODE_ENV === 'development';

module.exports = {
    entry: {
        index: './src/js/index.js',
        about: './src/js/about.js',
        paper: './src/js/paper.js',
      },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: './js/[name].[chunkhash].js',

    },
    module: {
        rules: [{
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },
            {
                test: /\.css$/,
                use: [
                    (isDev ? 'style-loader' : ({
                        loader: MiniCssExtractPlugin.loader,
                        options: {
                            publicPath: '../'
                        }})
                    ),

                    {
                        loader: 'css-loader',
                        options: {},
                        
                    }, 
                    'postcss-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|svg|gif|ico)$/i,
                use: [
                    
                    {
                        loader: 'file-loader',
                        options: {
                          name: '[name].[ext]',
                          outputPath: './images/'
                        }
                    },
                    {
                      loader: 'image-webpack-loader',
                      options: {
                        mozjpeg: {
                            progressive: true,
                            quality: 65
                        },
                        // optipng.enabled: false will disable optipng
                        optipng: {
                            enabled: false,
                        },
                        pngquant: {
                            quality: [0.65, 0.90],
                            speed: 4
                        },
                        gifsicle: {
                            interlaced: false,
                        },
                      }
                    },
                ]
            },
            {
                test: /\.(eot|ttf|woff|woff2)$/,
                loader: 'file-loader?name=./vendor/[name].[ext]'
            },
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: './style/[name].[contenthash].css'
        }),
        new OptimizeCssAssetsPlugin({
            assetNameRegExp: /\.css$/g,
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                    preset: ['default'],
            },
            canPrint: true
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: './src/index.html',
            filename: 'index.html',
            chunks: ['index'],
          }),
        new HtmlWebpackPlugin({
            inject: false,
            template: './src/about.html',
            filename: 'about.html',
            chunks: ['about'],
        }),
        new HtmlWebpackPlugin({
            inject: false,
            template: './src/paper.html',
            filename: 'paper.html',
            chunks: ['paper'],
        }),
        new webpack.DefinePlugin({
            'NODE_ENV': JSON.stringify(process.env.NODE_ENV)
        }),
        new WebpackMd5Hash(),
    ]
};