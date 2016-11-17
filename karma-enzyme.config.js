module.exports = function(config) {
  config.set({
    browsers: ['PhantomJS'],
    files: [
        { pattern: 'tests-enzyme.webpack.js', watched: false },
    ],
    preprocessors: {
        'tests-enzyme.webpack.js': ['webpack'],
    },
    frameworks: ['jasmine'],
    reporters: ['dots'],
    singleRun: true,
    webpackServer: {
        noInfo: true,
    },
    webpack: { //kind of a copy of your webpack config
      module: {
          loaders: [
              { test: /\.jsx?$/, exclude: /node_modules/, loader: 'babel-loader' },
          ],
      },
      watch: true,
      externals: {
        'cheerio': 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true
      }
    }
  })
}
