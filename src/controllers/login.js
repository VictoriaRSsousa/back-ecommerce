const {loginService} = require('../services')
async function login(req,res){
    const {value,message,statusCode} = await loginService.login(req.body)
    message?res.status(statusCode).json(message):res.status(statusCode).json(value)
}

module.exports = {login}