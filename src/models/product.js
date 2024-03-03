

const connection = require('../databases/e-commerceConnections.js')
const format = require('pg-format')

async function  list(){
   const result = await connection.query('SELECT c.categorie,p.* from products as p join categories as c on product_categorie_id = categorie_id;')
   return result.rows
 }

async function verifyQtd(ids){
   const query = format(`select qtd_d from products where product_id in (%L)`,[...ids])
   const result = await connection.query(query)
   return result.rows
}

async function create(product){
   const transaction = await connection.connect()
   try{
      await transaction.query('begin;')

      const {model, price,image,qtd_d,product_categorie_id} = product
      const query = `insert into products (model,price,image,qtd_d,product_categorie_id) values($1,$2,$3,$4,$5) returning product_id;`
      const params =[model,price,image,qtd_d,product_categorie_id]
      const result = await transaction.query(query,params)
      const idNewProduct = result.rows[0].product_id

      await transaction.query('commit;')
      return {
         id:idNewProduct,
         ...product
      }

   }catch{
      await transaction.query('rollback;')
      

   }finally {
   transaction.release()}
} 

async function findById(products){

   const query = format('SELECT * FROM products WHERE product_id in (%L);',[...products])
   const result = await connection.query(query)
   return result.rows
}


async function filterByCategorie(categorie){
   const result = await connection.query('SELECT * FROM products WHERE product_categorie_id = $1',[parseInt(categorie)])
   return result.rows
}

 module.exports = {
    list,create,findById, filterByCategorie,verifyQtd
 }