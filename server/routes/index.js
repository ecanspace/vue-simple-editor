// node-api
const express = require('express')
const bodyParser = require('body-parser')
// const { proxyHandler } = require('./middleware')
const viewdata = require('./viewdata')
const router = express.Router()

// router.use(proxyHandler())
router.use(bodyParser.json())
router.use('/viewdata', viewdata)

module.exports = router
