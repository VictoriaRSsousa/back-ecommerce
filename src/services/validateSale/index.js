function validateSale({sale_user_id,products}){
    if(!products){
        return "Compra Inválida!"
    }

    if(!sale_user_id || typeof(sale_user_id)!=='number'){
        return "Usuário Inválido!"
    }
    if (products.some(product => typeof(product.sale_product_id )!== 'number') || products.some(product => !product.sale_product_id )) {
        return "Algum produto não é válido!"
    }
    if (products.some(product => typeof(product.qtd_sale )!== 'number') || products.some(product => !product.qtd_sale ) || products.some(product => product.qtd_sale<=0 )) {
        return "Quantidade Inválida!"
    }
    if (products.some(product => typeof(product.price )!== 'number') || products.some(product => !product.price ) || products.some(product => product.price<=0 )) {
        return "Valor Inválido!"
    }



    return ""
} 

module.exports = validateSale