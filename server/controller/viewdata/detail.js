const path = require('path')
const fse = require('fs-extra')

const targetDirPath = path.resolve(process.cwd(), 'model', 'viewdata', 'sheet')

// 查询接口
module.exports = function detailHandler(req, res, next) {
  const reqData = req.body
  const targetPath = path.join(targetDirPath, reqData.code + '.json')

  fse.readJson(targetPath).then((data) => res.status(200).json({
    code: '0000',
    message: 'success',
    data: data
  }))
}