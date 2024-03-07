const express = require('express')

const {saleController, loginController} = require('../controllers/')


const router = express.Router()

router.get('/',loginController.verifyToken,saleController.list )
router.get('/:id',loginController.verifyToken,saleController.listByUser)// 
router.post('/',loginController.verifyToken,saleController.create)

module.exports = router