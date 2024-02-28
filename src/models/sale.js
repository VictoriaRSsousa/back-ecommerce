const connection = require('../databases/e-commerceConnections')


async function list(){
    const result = await connection.query(`select * from sales;`)
    console.log(result);
    console.log("model");
}

async function create(){

}


module.exports = {
    list
}