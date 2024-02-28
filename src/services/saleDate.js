const {saleDateModel} = require('../models')

async function list(){
    console.log("services");
    saleDateModel.list()

}

module.exports = {
    list
}