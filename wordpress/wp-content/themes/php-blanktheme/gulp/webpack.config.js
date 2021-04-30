const path = require('path');

module.exports = {
  mode: 'development',//production
  // エントリーポイントの設定
  entry: './js/app.js',
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: '../js/bundle.js',
    // 出力先のパス（v2系以降は絶対パスを指定する必要がある）
    path: path.join(__dirname, 'js')
  },
  module:{
    rules:[{
      test: /\.js$/,
      exclude: /node_modules\/(?!(dom7|ssr-window|swiper)\/).*/,
      loader: [
        'babel-loader',
        // 'vue-loader'
      ],
      // options: {
      //   presets: [
      //     [
      //       "@babel/preset-env", {
      //         modules: false,
      //         "targets": {
      //           "browsers": "> 1%",
      //           "ie": 10,
      //           // "forceAllTransforms": true
      //         },
      //         useBuiltIns: "entry",
      //         corejs: 3,
      //       }
      //     ]
      //   ],
      // },
    },
    {
      test: /\.vue$/,
      loader: [
        'vue-loader'
      ]
    },
    {
      test: /\.css$/,
      loader: 'style-loader!css-loader!'
    },
    {
      test: /\.(eot|svg|woff|ttf|gif|png|jpg)$/,
      loader: 'url-loader'
    }
    ]
  },
  resolve: {
    extensions: ['.js'],
    alias: {
    // vue.js のビルドを指定する
      vue: 'vue/dist/vue.js',
      // slick: 'slick-carousel/slick/',
    }
  }
};
