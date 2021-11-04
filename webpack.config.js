const { join } = require("path");
const { VueLoaderPlugin } = require("vue-loader");
const { HotModuleReplacementPlugin } = require("webpack");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');




module.exports = {
  mode: "development",
  entry: join(__dirname,"src","main.js"),
  output: {
    filename: "[name].js",
    path: join(__dirname, "./build"),
  },
  resolve: {
    extensions: ['', '.js', '.jsx', '.css'],
    modules: ['node_modules']
  },
  devServer: {
    open: true,
    historyApiFallback: true,

  },
  module: {
    rules: [
      {
        test: /\.js$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env"],
        },
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
        use: [MiniCssExtractPlugin.loader, "css-loader"]

      },
      {
        test: /\.(png|jpe?g|gif)$/i,
        loader: 'file-loader',
        options: {
          outputPath: 'assets',
        },
      }
    ],
   
  },
  plugins: [
    new MiniCssExtractPlugin(),
    new HotModuleReplacementPlugin(),
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      inject: true,
      template:'./public/index.html', // relative to project root 
      filename:'index.html'         // relative to build folder
  }),
  new webpack.ProvidePlugin({
    process: 'process/browser',
  })

  ],
  optimization: {
    splitChunks: {
      cacheGroups: {
        vendor: {
          chunks: "initial",
          name: "vendor",
          test: /node_modules/,
        },
      },
    },
  },
};