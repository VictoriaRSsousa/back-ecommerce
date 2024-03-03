const validateEmail = require('./validateEmail')
const {loginModel} = require('../models')
const hash = require('./hashPassword')
async function login(user){
    const {email, password } = user
    const valideEmail = validateEmail(email)
    
    if(!valideEmail){
        return {
            value:null,
            message:"Email Inválido!",
            statusCode:401,
        }
    }
    if(typeof(password)!=='string'){
        return {
            value:null,
            message:"Entrada Inválida!",
            statusCode:401,
        }
    }
    

    const login = await loginModel.login(email)
    
    if(login.length<=0 ){  
        return{
            value:null,
            message:"Email ou Senha Incorreto!",
            statusCode:401,
        }
    }
        
    const passwordbd = login[0].password
    const senhaCorreta = await hash.decriptPassword(password,passwordbd)
    if(senhaCorreta){
        return{   
            value:login,
            message:false,
            statusCode:200,    
        }
    }else{
        return{
            value:null,
            message:"Email ou Senha Incorreto!",
            statusCode:401,
        }
    }
}
module.exports = {login}