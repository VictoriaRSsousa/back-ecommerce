const {saleModel, productModel} = require('../models')
const productService = require('./product')
const userService = require('./user')
async function list(){
    console.log("services");
    const list = saleModel.list()
    return{
        value:list,
        message:false,
        statusCode:200
    }

}

async function create(sale){
    const {sale_product_id, sale_user_id,qtd_sale,price,sale_sale_date} = sale

    const product = await productService.findById(sale_product_id)
    const user = await userService.findById(sale_user_id)
    const qtd = await productModel.verifyQtd(qtd_sale)
    

    if(product.message){
        return product 
    }
    if(user.message){
        return user
    }
    //valor negativo no preço de venda
    //validar campos
    
    if(qtd<qtd_sale){
        return{
            value:false,
            message:"Produtos Insuficiente!",
            statusCode:400
        }
    }
    const create = await saleModel.create(sale_product_id, sale_user_id,qtd_sale,price,sale_sale_date)
   // console.log(create);
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
    }}



}

module.exports = {
    list,
    create
}