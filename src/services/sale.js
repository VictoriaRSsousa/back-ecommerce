const {saleModel} = require('../models')

async function list(){
    console.log("services");
    const list = saleModel.list()
    return{
        value:list,
        message:false,
        statusCode:200
    }

}

module.exports = {
    list
}