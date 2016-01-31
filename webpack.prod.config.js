var webpack = require("webpack");
var path = require("path");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

var config = require("./webpack.dev.config");

config.entry = './dev/app.jsx';

config.output.path = path.join(__dirname, 'dist');
delete config.output.publicPath;

config.plugins = [
  new webpack.optimize.OccurenceOrderPlugin(),
  new webpack.DefinePlugin({
    '__DEV__': false,
    'process.env': {
      'NODE_ENV': JSON.stringify('production')
    }
  }),
  new webpack.optimize.UglifyJsPlugin({
    compress: {
      screw_ie8: true,
      warnings: false
    },
    sourceMap: false
  }),
  new ExtractTextPlugin('style.css', { allChunks: true })
];

delete config.debug;
delete config.devtool;
