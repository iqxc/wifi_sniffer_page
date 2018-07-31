'use strict'
const path = require('path')
const merge = require('webpack-merge')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const baseWebpackConfig = require('./webpack.base.conf')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

const prodWebpackConfig = merge(baseWebpackConfig, {
  // devtool: '#source-map',
  devtool: '',
  plugins: [
    new OptimizeCSSPlugin(),
    // copy custom static assets
    new CopyWebpackPlugin([{
      from: path.resolve(__dirname, '../vendors'),
      to: path.resolve(__dirname, '../dist/vendors'),
      ignore: ['.*']
    }])
  ]
})

module.exports = prodWebpackConfig
