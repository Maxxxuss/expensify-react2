const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin')
// const CSSExtract = new ExtractTextPlugin('styles.css')

module.exports = (env) =>{ 
  const isProduction = env ==='production'
  return{
  entry: './src/app.js',
  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath:'/'
  },
  module: {
    rules: [{
      loader: 'babel-loader',
      test: /\.js$/,
      exclude: /node_modules/
    }
    , 
    {
     test: /\.s[ac]ss$/i,
     use: [
       'style-loader',
       'css-loader',
       'sass-loader'
     ]
   }]
 },
  // plugins: [   ggf anschauen min~ 1:50
  //   CSSExtract
  // ],

  devtool: isProduction ? 'source-map' :'cheap-module-eval-source-map', 
  devtool: 'cheap-module-eval-source-map', // zeigt fehler-code im QuellCode an 
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    historyApiFallback: true,
    writeToDisk: true, 
}  
}
};
