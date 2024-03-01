const {saleDateModel} = require('../models')

async function list(){
    console.log("services");
    const list = saleDateModel.list()
    // if(list.length>0){
        return{
            value:list,
            message:false,
            statusCode:200
        }
    // }

}

module.exports = {
    list
}