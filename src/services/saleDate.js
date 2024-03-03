const {saleDateModel} = require('../models')

async function list(){
    const list = await saleDateModel.list()
        return{
            value:list,
            message:false,
            statusCode:200
        }


}

module.exports = {
    list
}