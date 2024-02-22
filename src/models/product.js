
// rotas(especificas as rotas) 
// controlers(manda o o res com o status) 
// services(faz a validação para mandar pro controller) 
// models(faz as query- requisiçoes ao bd)
 //databases(conexao com o bd)


const connection = require('../databases/e-commerceConnections.js')

 async function  list(){
    //  try{
        console.log("models");
        console.log(connection.query);
        const result = await connection.query('SELECT * from products;')
        // console.log(result.rows)
        // return result.rows
        // return {
        //     errorMessage: null,
        //     value: result
        // }

    // }catch{
       // return "deu erro"
        // return {
        //     errorMessage: "Deu erro aqui",
        //     value: null
        // }
    // }
 }

 module.exports = {
    list
 }