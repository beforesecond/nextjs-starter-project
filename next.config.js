const withTypescript = require('@zeit/next-typescript')
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin')

module.exports = withTypescript({
  webpack(config, options) {
    // Fixes npm packages that depend on `fs` module
    config.node = {
      fs: 'empty'
    }
    if (options.isServer) config.plugins.push(new ForkTsCheckerWebpackPlugin())
    return config
  }
})
