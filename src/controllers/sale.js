const {saleService} = require('../services')

async function list(req,res){
    console.log("controller");
    const {value,message,statusCode} = await saleService.list()
    message?res.status(statusCode).json(message):res.status(statusCode).json(value)
}

module.exports ={
    list 
}