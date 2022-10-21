const path = require("path");
var HtmlWebpackPlugin = require("html-webpack-plugin");
var MiniCssExtractPlugin= require("mini-css-extract-plugin");
const OptimizeCSSAssetsPlugin = require("optimize-css-assets-webpack-plugin");



module.exports = {

    mode: 'development',

    entry: {

      main: path.resolve(__dirname, './src/index.js'),

    },

    output: {

        filename: 'main.js',

        path: path.resolve(__dirname, 'dist'),
        publicPath: '',

    },
    

    devServer: {

      static: {

        directory: path.join(__dirname, 'build'),

    },

      port: 1233,
  
      devMiddleware: {
        writeToDisk: true
     }
  
    },
  

    module: {

      rules: [
 
        {
 
          test: /\.html$/,
 
          use: [
 
            { 
 
   loader: 'html-loader',
 
              options: {
 
             minimize: true,
 
           }
          }
 
          ],
 
        },
 
        {
 
          test: /\.css$/,
 
          use: [
 
              //'style-loader',
 
          MiniCssExtractPlugin.loader,
            'css-loader'
 
          ]
 
        },
        {

          test: /\.(png|svg|jpe?g|gif)$/,
  
          use: [
  
            {
  
              loader: "file-loader", 
  
              options: {
  
              name: '[name].[ext]',
  
              outputPath: "images",
  
              }
            }
          ]
        },
        {
          test: /\.(svg|eot|woff|woff2|ttf)$/,
          use: [
            {
            loader: "file-loader",
            options: {
              name: '[name].[ext]',
              outputPath: "fonts",
              esModule: false,
            }
          }
          ]
        },  
        {

          test: require.resolve('jquery'),
  
          loader: 'expose-loader',
  
          options: {
  
            exposes: ['$', 'jQuery'],
  
          }
  
        },
        

      ]

    },

  plugins: [

    new HtmlWebpackPlugin({

      filename: "index.html",

    template: "./src/index.html",

    }),

    new MiniCssExtractPlugin({filename: "css/style.css"}),
     new OptimizeCSSAssetsPlugin({}),
 
    ],
   };
