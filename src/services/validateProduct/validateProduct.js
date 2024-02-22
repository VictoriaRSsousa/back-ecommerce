const {categorieModel} = require('../../models')

const validateProduct=(product)=>{
    const {model, price,image,qtd_d,product_categoria_id} = product 
    const idVerif = categorieModel.findById(product_categoria_id)

    if(typeof(model) !=='string' || !model){
        return "Modelo inválido!"
    }

    if(typeof(price)!== 'number' || price<0 || !price){
        return "Preço inválido!"
    }

    if(typeof(image) !=='string' || !image){
        return "Imagem inválido!"
    }

    if(typeof(qtd_d)!== 'number' || qtd_d<0 || !qtd_d){
        return "Quantidade de produtos inválidas!"
    }

    if(typeof(product_categoria_id)!=='number' || !product_categoria_id || !idVerif ){
        return "Categoria inválida!"
    }

    return ''

}

module.exports = validateProduct
