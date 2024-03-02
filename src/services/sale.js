const {saleModel, productModel} = require('../models')
const productService = require('./product')
const userService = require('./user')
async function list(){
    const list = await saleModel.list()
    console.log(list);
    return{
        value:list,
        message:false,
        statusCode:200
    }

}

async function create(sale){    
     const {sale_user_id,products,sale_sale_date} = sale

     console.log(products);

 

     const product = await productService.findById( products.map((product)=>product.id))
     console.log(product);
//     const user = await userService.findById(sale_user_id)
//     const qtd = await productModel.verifyQtd(qtd_sale)
    

//     if(product.message){
//         return product 
//     }
//     if(user.message){
//         return user
//     }
//     //valor negativo no preço de venda
//     //validar campos
    
//     if(qtd<qtd_sale){
//         return{
//             value:false,
//             message:"Produtos Insuficiente!",
//             statusCode:400
//         }
//     }
//     const create = await saleModel.create(sale)
//    // console.log(create);
//     if(!create){
    
//         return{
//             value:false,
//             message:"Erro ao efetuar a compra",
//             statusCode:400
//         }
//     }else{
        return{
        value:create,
        message:false ,
        statusCode:200
    }
// }



}

module.exports = {
    list,
    create
}