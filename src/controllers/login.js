const {loginService} = require('../services')
const jwt = require('jsonwebtoken')


async function login(req,res){

    
    const secret = 'ecommerce_secret'
    
    
    const {value,message,statusCode} = await loginService.login(req.body)
    if(message){
        res.status(statusCode).json(message)
    }else{
        const payload = {
            sub: value.user_id,
            iss: 'ecommerce back',
            aud: 'ecommerce front',
            }
        const token = jwt.sign(payload, secret)     
        res.status(statusCode).json({value:value,token:token})
    }
    //message?res.status(statusCode).json(message):res.status(statusCode).json(value)
}

module.exports = {login}