const {saleDateModel} = require('../models')

async function list(){
    console.log("services");
    const list = saleDateModel.list()
        return{
            value:list,
            message:false,
            statusCode:200
        }


}

module.exports = {
    list
}