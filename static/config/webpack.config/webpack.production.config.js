
'use strict';
const path = require('path');
let baseConfig = require('./webpack.base.config.js');
let obj = Object.assign(baseConfig,{
  mode: 'production',
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  }
});
module.exports = Object.assign(baseConfig, {
  mode: 'production',
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  }
});