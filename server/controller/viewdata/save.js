const path = require('path')
const fse = require('fs-extra')
const ejs = require('ejs')

const vueTemplatePath = path.resolve(process.cwd(), 'template.vue')
const viewDirPath = path.resolve(process.cwd(), 'views')

const targetDirPath = path.resolve(process.cwd(), 'model', 'viewdata')
const listPath = path.join(targetDirPath, 'list.json')

const outputJsonOptions = {
  spaces: 2
}

function addHandler(req, res, next) {
  const reqData = req.body
  const newCode = Date.now().toString() // 根据时间戳生成唯一 code 编码

  // 新增一条记录
  if (fse.existsSync(listPath)) {
    fse.readJson(listPath).then((data) => {
      data.push({
        id: data.length,
        code: newCode,
        name: reqData.name,
        description: reqData.description,
        path: reqData.path
      })

      fse.outputJson(listPath, data, outputJsonOptions)
    })
  } else {
    fse.outputJson(listPath, [{
      id: 0,
      code: newCode,
      name: reqData.name,
      description: reqData.description,
      path: reqData.path
    }], outputJsonOptions)
  }

  // 视图数据入库
  fse.outputJson(path.join(targetDirPath, 'sheet', newCode + '.json'), reqData.data, outputJsonOptions)

  // Generate template view
  fse.readFile(vueTemplatePath, {
    encoding: 'utf8'
  }).then((str) => {
    const routePath = reqData.path
    const html = ejs.render(str, {
      name: routePath.replace(/^\//, '').replace(/[\/]+/g, '-'),
      code: newCode,
    })

    fse.outputFile(path.join(viewDirPath, path.normalize(routePath) + '.vue'), html).then(() => {
      res.status(200).json({
        code: '0000',
        message: 'success',
        data: {
          code: newCode
        }
      })
    })
  })
}

function updateHandler(req, res, next) {
  const reqData = req.body
  const currentCode = reqData.code
  // 覆盖当前 code 数据
  fse.outputJson(path.join(targetDirPath, 'sheet', currentCode + '.json'), reqData.data, outputJsonOptions).then(() => {
    res.status(200).json({
      code: '0000',
      message: 'success',
      data: {
        code: currentCode
      }
    })
  })
}

// Save viewdata
module.exports = function saveHandler(req, res, next) {
  const reqData = req.body

  if (reqData.data && reqData.data.length > 0) {
    reqData.code ? updateHandler(req, res, next) : addHandler(req, res, next)
  } else {
    res.status(200).json({
      code: 'PE0001',
      message: '参数错误，未接收到 data 数据！'
    })
  }
}
