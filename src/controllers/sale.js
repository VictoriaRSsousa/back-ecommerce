const { decode } = require('jsonwebtoken');
const {saleService} = require('../services')

//AUTORIZAÇÃO
//LISTAR POR CLIENTE DO CLIENTE 
async function list(req,res){
    const {value,message,statusCode} = await saleService.list()
    message?res.status(statusCode).json(message):res.status(statusCode).json(value)
}

async function listByUser(req,res){
    console.log(req.params.id,"id");
    console.log(req.user.sub,"token");  
    const {value,message,statusCode} = await saleService.listByUser(req.params.id)
    message?res.status(statusCode).json(message):res.status(statusCode).json(value)
}



async function create(req,res){
    //console.log(req.body);
    
    //console.log(req.user);
    //console.log(decode);
    //console.log(req.headers);
    //console.log(req.headers.authorization);
    const {value,message,statusCode} = await saleService.create(req.body)
    message?res.status(statusCode).json(message):res.status(statusCode).json(value)
}

module.exports ={
    list ,
    create,
    listByUser
}