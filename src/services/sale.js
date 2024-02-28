const {saleModel} = require('../models')

async function list(){
    console.log("services");
    saleModel.list()

}

module.exports = {
    list
}