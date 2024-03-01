const express = require('express')

const {saleController} = require('../controllers/')

const router = express.Router()

router.get('/',saleController.list )
router.post('/',saleController.create)

module.exports = router