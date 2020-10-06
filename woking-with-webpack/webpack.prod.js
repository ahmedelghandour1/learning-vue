const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
  mode: 'production',
  devtool: 'source-map',
  resolve: {
    alias: {
      'vue$': 'vue/dist/vue.min.js' // 'vue/dist/vue.common.js' for webpack 1
    }
  },
});