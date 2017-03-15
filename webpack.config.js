var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');    

module.exports = {
   entry: ['./app.ts'],
   output: {
      filename: "./dist/bundle.js"
   },

   resolve: {
      extensions: ['.webpack.js', '.web.js', '.ts', '.tsx', '.js', '.less']
   },

   module: {
      loaders: [{
            test: /\.tsx?$/,
            loader: 'ts-loader'
         }, {
            test: /\.less$/, use: ExtractTextPlugin.extract({
               fallback: 'style-loader',
               use: ['css-loader', 'less-loader']
            })
         }
      ]
   },

   plugins: [
      new ExtractTextPlugin({ filename: 'bundle.css' })
   ]
}