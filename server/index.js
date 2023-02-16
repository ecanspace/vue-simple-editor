const express = require('express')
const routes = require('./routes/index')
const app = express()

app.set('env', 'production')
// 阻止响应头写入服务提供方
app.disable('x-powered-by')

// set static resource
app.use(express.static('webfront'))
app.use(express.static('public'))

// middleware: node api
app.use('/napi', routes)

// middleware: error handler
app.use(function errorHandler(req, res, next) {
  if (req.method === 'GET') {
    res.status(404).json({ code: 'PE1004', message: '页面不存在！' })
  } else {
    res.status(500).json({ code: 'PE1005', message: '服务器错误！' })
  }
})

app.listen(1000, function () {
  console.log('Server is listening on port: 1000')
})
