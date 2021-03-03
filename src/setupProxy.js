const {
  createProxyMiddleware
} = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    // '/',// 上传服务器
    '/blog/page',
    createProxyMiddleware({
      target: 'http://localhost:3030',
      changeOrigin: true
    })
  )
}