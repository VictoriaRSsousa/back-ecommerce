const validEmail = require('../validateEmail')

function validadeUser(user){
    const{name,email,password} = user
    

    if(!name || typeof(name) !== 'string'){
        return "Nome Inválido!"
    }
    //validar email regex
    if(!email || typeof(email) !== 'string' || !validEmail(email) ){
        return "Email Inválido!"
    }
    
    if(!password || typeof(password) !== 'string' ){
        return "Senha Inválida!"
    }
    return ""
}
module.exports = validadeUser