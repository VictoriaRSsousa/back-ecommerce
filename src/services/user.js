const {userModel} = require('../models')
const validateUser = require('./validateUser')
const hash = require('./hashPassword')

async function list(){
    const users = await userModel.list()
    return{
        value:users,
        message:false,
        statusCode:200
    }
}

async function findById(id){
    const user = await userModel.findById(id)
    if(user.length>0){
        return{
            value:user,
            message:false,
            statusCode:200
        }
    }else{
        return{
            value:false,
            message:"Usuário não Cadastrado!",
            statusCode:400
        }
    }
}

async function create(user){
    const validate = validateUser(user)
    const findByEmail = await userModel.findByEmail(user.email)
    if(findByEmail.length>0){
        return{
            value:false,
            message:"Email já cadastrado!",
            statusCode:400
        }
    }
    if(validate){
        return{
            value:false,
            message:validate,
            statusCode:400 
        }
    }
    const passwordHash = await hash.hashPassword(user.password)
    const newUser = await userModel.create(user.email,passwordHash)
    return{
        value:newUser,
        message:false,
        statusCode:200 
    }
}

async function findByEmail(queryParam){
    // if(queryParam==='email'){
    //     const find = userModel.findByEmail(queryParam)
    //     if(!find){
    //         return{
    //             value:false,
    //             message:"Email não encontrado",
    //             statusCode:400}
    //     }else{
    //         return{
    //             value:find,
    //             message:false,
    //             statusCode:200  }
    //     }
    // }else{
    //     return{
    //         value:false,
    //         message:"Erro de requisição",
    //         statusCode:400 
    //     }
    // }
}

async function remove(email){
    const find = findByEmail(email)
    if(!find){
        return{
            value:false,
            message:"Email não cadastrado!",
            statusCode:400
        }
    }else{
        const remove = userModel.remove(email)
        return{
            value:"Usuário removido!",
            message:false,
            statusCode:200
        }
    }
}

module.exports = {
    list,create,findByEmail,remove,findById
}