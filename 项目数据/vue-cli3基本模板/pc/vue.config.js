
const path = require('path');
module.exports = {
  publicPath: "./",    // 公共路径
  outputDir: process.env.VUE_APP_TITLE == "test" ? 'distTest' : 'distProd', // 不同的环境打不同包名
  css: {  // 一次配置，全局使用，这个scss 因为每个文件都要引入
    loaderOptions: {
      // sass: {
      //   data: `@import "./src/assets/hotcss/px2rem.scss";`
      // }
    }
  },
  lintOnSave: false,  // 关闭eslint
  productionSourceMap: true,  // 生产环境下css 分离文件
  devServer: {
    port: 8888, // 端口号
    host: '0.0.0.0',  
    https: false, // https:{type:Boolean}
    open: true, //配置自动启动浏览器

    proxy: 'https://api.qingcxt.com/'  // 配置跨域处理,只有一个代理
    // proxy: {
    //   '/api': {
    //     target: '<url>',
    //     ws: true,
    //     changeOrigin: true
    //   },
    //   '/foo': {
    //     target: '<other_url>'
    //   }
    // },  // 配置多个代理
  },
  configureWebpack: {  // 覆盖webpack默认配置的都在这里
    resolve: {   // 配置解析别名
      alias: {
        '@': path.resolve(__dirname, './src'),
        '@s': path.resolve(__dirname, './src/assets/style'),
        '@i': path.resolve(__dirname, './src/assets/images'),
        '@a': path.resolve(__dirname, './src/api'),
        '@u': path.resolve(__dirname, './src/utils'),
      }
    }
  }
}