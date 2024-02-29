const express = require('express')

const {userController} = require('../controllers/')
const { findById } = require('../models/categorie')

const router = express.Router()


// rotas(especificas as rotas) 
// controlers(manda o o res com o status) 
// services(faz a validação para mandar pro controller) 
// models(faz as query- requisiçoes ao bd)
 //databases(conexao com o bd)

router.get('/', userController.list)
//  router.get('/', userController.findByEmail)
router.post('/',userController.create)
// router.post('/', userController.login)
router.delete('/:email',userController.remove)



// productController.list()

module.exports = router