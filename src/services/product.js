const {productModel}= require('../models/index')

const validateProduct = require('./validateProduct/validateProduct')


const list = async () =>{
    const products = await productModel.list()
    return {
        value:products,
        errorMessage:false,
        statusCode:200
    }
}

async function create(product){
    const {model, price,image,qtd_d,product_categoria_id} = product
    const message = validateProduct(product)

    if(message){
        return {
            value:null,
            message,
            statusCode:400,
        }
    }

    const newProduct = productModel.create(product)
    return {
        value:newProduct,
        message:null,
        statusCode:201,
    }
}

module.exports ={
    list,create
}