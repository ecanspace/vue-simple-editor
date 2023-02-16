const path = require('path')
const fse = require('fs-extra')
const saveHandler = require('./save')

const targetDirPath = path.resolve(process.cwd(), 'model', 'viewdata', 'sheet')

// 查询接口
module.exports = function copyHandler(req, res, next) {
  const reqData = req.body
  const targetPath = path.join(targetDirPath, reqData.code + '.json')

  fse.readJson(targetPath).then((data) => {
    reqData.data = data, delete reqData.code
    saveHandler(req, res, next)
  })
}