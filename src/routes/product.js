const express = require('express')

const productController = require('../controllers/')

const router = express.Router()


// rotas(especificas as rotas) 
// controlers(manda o o res com o status) 
// services(faz a validação para mandar pro controller) 
// models(faz as query- requisiçoes ao bd)
 //databases(conexao com o bd)

router.get('/', productController.list)
router.post('/',productController.create)



// productController.list()

module.exports = router