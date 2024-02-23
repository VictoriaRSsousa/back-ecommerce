const  validateProduct=(product)=>{
    const {model, price,image,qtd_d,product_categorie_id} = product 

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

    if(typeof(product_categorie_id)!=='number' || !product_categorie_id){
        return "Categoria inválida!"
    }

    return ''

}

module.exports = validateProduct
