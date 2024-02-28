const express = require('express')

const {saleDateController} = require('../controllers/')

const router = express.Router()

router.get('/',saleDateController.list )

module.exports = router