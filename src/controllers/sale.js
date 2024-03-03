const {saleService} = require('../services')

//AUTORIZAÇÃO
//LISTAR POR CLIENTE DO CLIENTE 
async function list(req,res){
    const {value,message,statusCode} = await saleService.list()
    message?res.status(statusCode).json(message):res.status(statusCode).json(value)
}



async function create(req,res){
    const {value,message,statusCode} = await saleService.create(req.body)
     message?res.status(statusCode).json(message):res.status(statusCode).json(value)
}

module.exports ={
    list ,
    create
}