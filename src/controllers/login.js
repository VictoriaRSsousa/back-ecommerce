const {loginService} = require('../services')
const jwt = require('jsonwebtoken')


async function login(req,res){

    //botar em uma variavel de ambiente
     
    const secret = 'ecommerce_secret'
    
    
    const {value,message,statusCode} = await loginService.login(req.body)
    if(message){
        res.status(statusCode).json(message)
    }else{
        const payload = {
            sub: value[0].user_id,
            iss: 'ecommerce back',
            aud: 'ecommerce front',
            email:value[0].email
            }
        const options = {expiresIn:'7 days'}
        const token = jwt.sign(payload, secret,options)    
        console.log(value); 
        res.status(statusCode).json({value:{nameUser:value[0].name,emailUser:value[0].email,idUser:value[0].user_id},token:token})
    }
    //message?res.status(statusCode).json(message):res.status(statusCode).json(value)
}

module.exports = {login}