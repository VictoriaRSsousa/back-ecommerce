// rotas(especificas as rotas) 
// controlers(manda o o res com o status) 
// services(faz a validação para mandar pro controller) 
// models(faz as query- requisiçoes ao bd)
 //databases(conexao com o bd)

const productsService = require('../services/product')

const list = async (req,res)=>{
   const {value,errorMessage,statusCode} = await productsService.list()
   res.json(value).status(statusCode)
 }

const create = async(req,res) =>{
   const {value,errorMessage,statusCode} = await productsService.create(req.body)
   errorMessage?res.json(errorMessage).status(statusCode):res.json(value).status(statusCode)
 }

 module.exports={
    list,
    create
 }
