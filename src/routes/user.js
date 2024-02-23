const express = require('express')

const {userController} = require('../controllers/')

const router = express.Router()


// rotas(especificas as rotas) 
// controlers(manda o o res com o status) 
// services(faz a validação para mandar pro controller) 
// models(faz as query- requisiçoes ao bd)
 //databases(conexao com o bd)

router.get('/', userController.list)
router.post('/',userController.create)



// productController.list()

module.exports = router