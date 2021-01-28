const {createProxyMiddleware} = require('http-proxy-middleware')
module.exports = function (app) {
  app.use('/', createProxyMiddleware({target: 'http://mistrain:3030', changeOrigin: true}))
}