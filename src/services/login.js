const validateEmail = require('./validateEmail')
const {loginModel} = require('../models')
async function login(user){
    const {email, password } = user
    console.log("service");
    const valideEmail = validateEmail(email)
    console.log(valideEmail,"validate email service");
    if(!valideEmail){
        console.log();
        return {
            value:null,
            message:"Email Inválido!",
            statusCode:400,
        }
    }
    const login = await loginModel.login(email,password)
    console.log(login);
    if(login){
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