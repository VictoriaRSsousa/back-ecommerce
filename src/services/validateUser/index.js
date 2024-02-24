function validadeUser(user){
    const{name,email,password} = user
    //var pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;

    if(!name || typeof(name) !== 'string'){
        return "Nome Inválido!"
    }
    //validar email regex
    if(!email || typeof(email) !== 'string'){
        return "Email Inválido!"
    }
    
    if(!password || typeof(password) !== 'string'){
        return "Senha Inválida!"
    }
    return ""
}
module.exports = validadeUser