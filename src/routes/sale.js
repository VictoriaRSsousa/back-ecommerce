const express = require('express')

const {saleController} = require('../controllers/')
const verifyToken = require('../midlewares/login')

const router = express.Router()

router.get('/',verifyToken,saleController.list )
router.get('/:id',verifyToken,saleController.listByUser)
router.post('/',verifyToken,saleController.create)

module.exports = router