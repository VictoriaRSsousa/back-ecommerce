const { decode } = require('jsonwebtoken');
const {saleService} = require('../services')

//AUTORIZAÇÃO
//LISTAR POR CLIENTE DO CLIENTE 
async function list(req,res){
    const id = req.user.sub
    const {value,message,statusCode} = await saleService.listByUser(id)
    message?res.status(statusCode).json(message):res.status(statusCode).json(value)
}

async function listByUser(req,res){
    console.log(req.params.id,"id");
    console.log(req.user.sub,"token");  

    const {value,message,statusCode} = await saleService.listByUser(req.params.id)
    message?res.status(statusCode).json(message):res.status(statusCode).json(value)
}



async function create(req,res){
    const id = req.user.sub
    const products = req.body

    const {value,message,statusCode} = await saleService.create(req.body,id)
    message?res.status(statusCode).json(message):res.status(statusCode).json(value)
}

module.exports ={
    list ,
    create,
    listByUser
}