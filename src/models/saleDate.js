const connection = require('../databases/e-commerceConnections')


async function list(){
    const result = await connection.query(`select * from sale_dates;`)
    console.log(result.rows);
    console.log("model");
    return result.rows
}

async function create(){
    
}


module.exports = {
    list,create
}