var path = require('path')
var webpack = require('webpack')

module.exports = {
  context: path.resolve(__dirname, 'src'),
  entry: './main.ts',
  resolve: {
    extensions: ['.js', '.json', '.ts', '.vue'],
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    publicPath: '/dist/',
    filename: 'build.js'
  },
  module: {
    rules: [{
        test: /\.ts$/,
        loader: 'ts-loader',
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: 'vue-style-loader!css-loader!autoprefixer-loader',
            less: 'vue-style-loader!css-loader!autoprefixer-loader!less-loader',
            stylus: 'vue-style-loader!css-loader!autoprefixer-loader!stylus-loader'
          },
          esModule: true
        }
      },
      {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader',
          'autoprefixer-loader'
        ]
      },
      { test: /\.(gif|jpg|png|woff|svg|eot|ttf)\??.*$/, loader: 'url-loader?limit=8192'}
    ]
  },
  devServer: {
    historyApiFallback: true,
    noInfo: true
  },
  performance: {
    hints: false
  },
  devtool: '#eval-source-map'
}

if (process.env.NODE_ENV === 'production') {
  module.exports.devtool = '#source-map'
  // http://vue-loader.vuejs.org/en/workflow/production.html
  module.exports.plugins = (module.exports.plugins || []).concat([
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: '"production"'
      }
    })
  ])
}