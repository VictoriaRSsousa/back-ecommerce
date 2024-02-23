const connection = require('../databases/e-commerceConnections.js')
async function findById(id){
    const categorie = await connection.query(`select * from categories where categorie_id= $1`,[id])
    return categorie.rows
}

module.exports ={
    findById
}