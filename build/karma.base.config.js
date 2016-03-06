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
          exclude: /node_modules/,
          loader: 'babel'
        }
      ]
    }
  },
  webpackMiddleware: {
    noInfo: true
  },
  singleRun: true
}
