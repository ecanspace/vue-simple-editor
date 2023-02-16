const express = require('express')
const router = express.Router()
const {
  saveHandler,
  downloadHandler,
  queryHandler,
  detailHandler,
  removeHandler,
  copyHandler,
} = require('../controller/viewdata/index')

router.use('/save', saveHandler)
router.use('/download', downloadHandler)
router.use('/query', queryHandler)
router.use('/detail', detailHandler)
router.use('/remove', removeHandler)
router.use('/copy', copyHandler)

module.exports = router
