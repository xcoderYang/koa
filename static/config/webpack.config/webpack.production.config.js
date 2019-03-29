
'use strict';
let baseConfig = require('./webpack.base.config.js');
module.exports = Object.assign(baseConfig, {
  mode: 'production',
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.common.js'
    }
  }
});