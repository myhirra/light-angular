// shared config for all unit tests
module.exports = {
  frameworks: ['jasmine'],
  files: [
    '../test/index.js'
  ],
  preprocessors: {
    '../test/index.js': ['webpack']
  },
  webpack: {
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /test|node_modules/,
          loader: 'babel?optional[]=runtime&loose=all'
        }
      ]
    }
  },
  webpackMiddleware: {
    noInfo: true
  },
  singleRun: true
}
