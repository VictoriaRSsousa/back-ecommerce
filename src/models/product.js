
// rotas(especificas as rotas) 
// controlers(manda o o res com o status) 
// services(faz a validação para mandar pro controller) 
// models(faz as query- requisiçoes ao bd)
 //databases(conexao com o bd)


const connection = require('../databases/e-commerceConnections.js')

async function  list(){
   const result = await connection.query('SELECT * from products;')
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

 module.exports = {
    list,create
 }