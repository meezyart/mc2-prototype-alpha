// var css = require("!raw!sass!./file.scss");
// var css = require("!css!sass!/styles/sass/style.sass");

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
        loaders: ["style-loader", "style", "css-loader", "sass"]
      },
      { test: /\.(png|jpg|jpeg|gif|woff)$/, loader: 'url' },
      {
        test: /\.js$/,
        loader: 'babel',
        exclude: /node_modules$/,
        query: {
          presets: ['es2015']
        }
      }
    ]
  }
};