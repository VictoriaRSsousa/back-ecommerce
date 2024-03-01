const {saleService} = require('../services')

async function list(req,res){
    console.log("controller");
    const {value,message,statusCode} = await saleService.list()
    message?res.status(statusCode).json(message):res.status(statusCode).json(value)
}

async function create(req,res){
    const {value,message,statusCode} = await saleService.create(req.body)
    //console.log("controller");
    //console.log(value,message,statusCode);
    message?res.status(statusCode).json(message):res.status(statusCode).json(value)
}

module.exports ={
    list ,
    create
}