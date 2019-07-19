module.exports = {
  chainWebpack: config => {
    // 修复HMR
    config.resolve.symlinks(true)
  },
  devServer: {
    proxy: {
      // 匹配所有以'/api'开头的请求路径
      '/api': {
        target: 'http://localhost:4000',  //对应后台服务器接口
        changeOrigin: true,               //允许跨域
        ws: true,
        pathRewrite: {                   //重写路径：去掉路径中开头的'/api'
          '^/api': ''
        }
      }
    }
  }
}
