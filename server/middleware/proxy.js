const { createProxyMiddleware } = require('http-proxy-middleware')

const proxyTable = {
  target: 'http://www.example.org',
  changeOrigin: true
}

module.exports = function proxyHandler() {
  return createProxyMiddleware(proxyTable)
}
