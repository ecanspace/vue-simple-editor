const path = require('path')
const fse = require('fs-extra')

const targetPath = path.resolve(process.cwd(), 'model', 'viewdata', 'list.json')

// 查询接口
module.exports = function queryHandler(req, res, next) {
  fse.readJson(targetPath).then((data) => res.status(200).json({
    code: '0000',
    message: 'success',
    data: data
  }))
}
