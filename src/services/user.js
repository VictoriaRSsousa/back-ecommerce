const {userModel} = require('../models')

async function list(){
    const user = await userModel.list()
    return{
        value:user,
        message:false,
        statusCode:200
    }
}

async function create(user){
    
}

module.exports = {
    list
}