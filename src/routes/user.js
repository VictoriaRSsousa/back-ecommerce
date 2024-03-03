const express = require('express')

const {userController} = require('../controllers/')
const { findById } = require('../models/categorie')

const router = express.Router()

router.get('/', userController.list)
router.post('/',userController.create)
router.delete('/:id',userController.remove)
router.get('/:id',userController.findById)



module.exports = router