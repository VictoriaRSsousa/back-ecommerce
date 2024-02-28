const {userModel} = require('../models')
const validateUser = require('./validateUser')

async function list(){
    const users = await userModel.list()
    return{
        value:users,
        message:false,
        statusCode:200
    }
}

async function create(user){
    const validate = validateUser(user)
    //console.log(validate);
    if(validate){
        return{
            value:false,
            message:validate,
            statusCode:400 
        }
    }
    const newUser = await userModel.create(user)
    //console.log(newUser);
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

module.exports = {
    list,create,findByEmail
}