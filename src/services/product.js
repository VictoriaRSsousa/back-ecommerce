const {productModel,categorieModel}= require('../models/')

const validateProduct = require('./validateProduct/validateProduct')


const list = async () =>{
    const products = await productModel.list()
    return {
        value:products,
        message:false,
        statusCode:200
    }
}

async function create(product){
    const message = validateProduct(product)
    if(message){
        return {
            value:null,
            message,
            statusCode:400,
        }
    }
    const  idVerif =  await categorieModel.findById(product.product_categorie_id)
    if(idVerif){
        return{
            value:null,
            message:`Categoria Inválida!`,
            statusCode:400
        }
    }

    const newProduct = await productModel.create(product)
    return {
        value:newProduct,
        message:null,
        statusCode:201,
    }
}

// async function update(product){
//     const message = validateupdate(product)

//     const updateProduct =  await productModel.update(product)
//     if(message){
//         return {
//             value:null,
//             message,
//             statusCode:400,
//         }
//     }
        
    
// }

module.exports ={
    list,create
}