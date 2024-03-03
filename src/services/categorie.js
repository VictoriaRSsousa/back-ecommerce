const {categorieModel} = require('../models')
const list = async () =>{
    const categories = await categorieModel.list()
    return {
        value:categories,
        message:false,
        statusCode:200
    }
}

module.exports = {list}