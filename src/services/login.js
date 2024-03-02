const validateEmail = require('./validateEmail')
const {loginModel} = require('../models')
const hash = require('./hashPassword')
async function login(user){
    const {email, password } = user
    const valideEmail = validateEmail(email)
    const hashPassword = hash.hashPassword(password)
    if(!valideEmail){
        return {
            value:null,
            message:"Email Inválido!",
            statusCode:400,
        }
    }
    const login = await loginModel.login(email,hashPassword)
    console.log(login);
    if(login.length>0){
        return{
            value:login,
            message:false,
            statusCode:200,    
        }
    }else{
        return{
            value:null,
            message:"Email ou Senha Incorreto!",
            statusCode:400,
        }
    }
}
module.exports = {login}