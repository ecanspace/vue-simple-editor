const path = require('path')
const fse = require('fs-extra')

const targetDirPath = path.resolve(process.cwd(), 'model', 'viewdata')

// 查询接口
module.exports = function removeHandler(req, res, next) {
  const reqData = req.body
  const targetListPath = path.join(targetDirPath, 'list.json')
  const targetViewPath = path.join(targetDirPath, 'sheet', reqData.code + '.json')

  fse.readJson(targetListPath).then((data) => {

    const index = data.findIndex((item) => item.code === reqData.code)
    data.splice(index, 1)
    return fse.outputJson(targetListPath, data, { spaces: 2 })

  }).then(() => {

    return fse.remove(targetViewPath, err => {
      if (err) throw err;
      console.log('remove successfully')
    })

  }).then(() => {

    res.status(200).json({
      code: '0000',
      message: 'success'
    })

  })
}
