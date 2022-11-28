const path = require('path')
const sassResourcesLoader = require('./craco-sass-resources-loader')
const SimpleProgressWebpackPlugin = require('simple-progress-webpack-plugin')
const resolve = dir => path.resolve(__dirname, dir)

module.exports = {
  webpack: {
    alias: {
      '@': resolve('src')
    },
    plugins: [new SimpleProgressWebpackPlugin()]
  },
  plugins: [
    {
      plugin: sassResourcesLoader,
      options: {
        resources: ['./src/styles/customize.scss']
      }
    }
  ]
}
