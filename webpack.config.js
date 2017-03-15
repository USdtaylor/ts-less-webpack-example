const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');   
const CopyWebpackPlugin = require('copy-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
   entry: './app/app.ts',
   output: {
      filename: './dist/bundle.js'
   },

   resolve: {
      extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.less']
   },

   module: {
      loaders: [{
            test: /\.tsx?$/,
            loader: 'ts-loader',
         }, {
            test: /\.less$/, use: ExtractTextPlugin.extract({
               fallback: 'style-loader',
               use: ['css-loader', 'less-loader']
            })
         }
      ]
   },

   plugins: [
      new ExtractTextPlugin({ filename: './dist/bundle.css' }),
      new UglifyJSPlugin({
         mangle: false
      }),
      new CopyWebpackPlugin([{
         from: '**/*.html',
         to: 'dist'
      }], {
         ignore: ['node_modules/**/*', 'dist/**/*']
      })
   ]
}