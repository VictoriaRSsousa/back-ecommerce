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
    // const id = req.user.sub
    // const {email} = req.user
    // console.log(email, "listar");
    const {value,message,statusCode} = await saleService.listByUser(req.params.id)
    message?res.status(statusCode).json(message):res.status(statusCode).json(value)
}



async function create(req,res){
    //console.log(req.body);
    
    //console.log(req.user);
   // console.log(decode);
   // console.log(req.headers);
    //console.log(req.headers.authorization);
   // console.log(req.body);
    const {value,message,statusCode} = await saleService.create(req.body)
    message?res.status(statusCode).json(message):res.status(statusCode).json(value)
}

module.exports ={
    list ,
    create,
    listByUser
}