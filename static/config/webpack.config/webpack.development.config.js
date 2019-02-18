
'use strict';

const env = process.argv[1];
const path = require('path');

let baseConfig = require('./webpack.base.config.js');

module.exports = Object.assign(baseConfig, {
  mode: 'development',
  devServer: {
    host: 'localhost',
    hot: true,
    open: true
  },
  output: {
    filename: "[name]",
    path: path.resolve("dist"),
    hotUpdateChunkFilename: 'hot/hot-update.js',
    hotUpdateMainFilename: 'hot/hot-update.json'
  },
});