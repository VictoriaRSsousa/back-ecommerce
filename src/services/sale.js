const {saleModel, productModel} = require('../models')
const productService = require('./product')
const userService = require('./user')
const validateSale = require('./validateSale')
async function list(){
    const list = await saleModel.list()
    return{
        value:list,
        message:false,
        statusCode:200
    }

}
async function listByUser(id){
    const list = await saleModel.listByUser(id)
    return{
        value:list,
        message:false,
        statusCode:200
    }

}

async function create(sale){    
     const {sale_user_id,products} = sale

     const valiSale = validateSale(sale)
     if(valiSale){
        return{
            value:false,
            message:valiSale,
            statusCode:400
        }
     }
     const ids = products.map((product)=>product.sale_product_id)
     const qtds = products.map((product)=>product.qtd_sale)

     //pegar id do token
     const user = await userService.findById(sale_user_id)
     if(user.message){
         return user   
     }
     const product = await productService.findById( ids)
     if(product.message){
         return product 
        }

    const qtds_ver = await productModel.verifyQtd(ids)

    //verificar produtos numa query
   
    for(let i =0;i<products.length;i++){
        if(qtds_ver[i].qtd_d<qtds[i]){
            return{
                value:false,
                message:"Produtos Insuficiente!",
                statusCode:400
            }
        }
    }

    const create = await saleModel.create(sale)
    if(!create){
        return{
            value:false,
            message:"Erro ao efetuar a compra",
            statusCode:400
        }
    }else{
        return{
        value:create,
        message:false ,
        statusCode:200
    }
 }



}

module.exports = {
    list,
    create,
    listByUser
}