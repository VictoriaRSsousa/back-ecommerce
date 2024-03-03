//ADICIONAR CAMPO IMAGEM EM CATEGORIA


const express = require('express')

const {categorieController} = require('../controllers/')

const router = express.Router()


router.get('/',categorieController.list)


module.exports = router 