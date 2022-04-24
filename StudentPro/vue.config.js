
const path = require('path')
const webpack = require('webpack')
module.exports = {
  // mode: 'development',
  // entry: './src/main.js',
  // output:{
  //   path: path.resolve(__dirname,'dist'),
  //   filename: '[name].js'
  // },
  publicPath: "./",
  // assetsPublicPath: './',
  productionSourceMap: false,
  // module:{
  //   unknownContextCritical: false,
  // }
  devServer:{
    port:9002,
    proxy:{
      '/apis': {
        target: 'http://localhost:8080',
        changeOrigin: true,
        pathRewrite: {
          '^/apis': ''
        }
      },
      '/apis-test': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        pathRewrite: {
          '^/apis-test': ''
        }
      }
    }
  },
  configureWebpack:{
    resolve: {
      alias:{
        comps: path.join(__dirname, 'src/components')
      }
    },
    name: 'MYVUE'
  },
  chainWebpack: conf =>{
    // 禁用默认的svg rules
    // 启用svg-sprite-loader
  },
  pluginOptions: {
    DllPlugin: new webpack.DllPlugin({
      context: __dirname,
      name: "[111]_dll",
      path: path.resolve(__dirname, "../dist/manifest.json"),
    }),
  },
};