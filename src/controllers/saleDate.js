const {saleDateService} = require('../services')

async function list(req,res){
    const {value,message,statusCode} = await saleDateService.list()
    message?res.status(statusCode).json(message):res.status(statusCode).json(value)
}

module.exports ={
    list
}