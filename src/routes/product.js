const express = require('express')

const {productController} = require('../controllers/')

const router = express.Router()

router.get('/', productController.list)
router.get('/:id', productController.findById)
router.post('/',productController.create)


module.exports = router