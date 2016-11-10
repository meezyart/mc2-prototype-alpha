// var css = require("!raw!sass!./file.scss");

module.exports = {
  entry: './app.js',
  output: {
    filename: './build.js'
  },
  watch: true,
  // scripts: {
  //   "test-watch": "webpack --config test/watch/webpack.config.js"
  // },
  module: {
    preLoaders: [
        {
            test: /\.js$/, // include .js files
            exclude: /node_modules/, // exclude any and all files in the node_modules folder
            loader: "jshint-loader"
        }
    ],
    loaders: [
      {
        test: /\.sass$/,
        loader: 'style!css!sass'
      },
      {
        test: /\.s$/,
        loader: 'babel',
        exclude: /node_modules$/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};