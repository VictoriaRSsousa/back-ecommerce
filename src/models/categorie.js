const connection = require('../databases/e-commerceConnections.js')
async function findById(id){
    const categorie = await connection.query(`select * from categories where categorie_id= $1;`,[id])
    return categorie.rows
}

async function filterByName(name){
    //console.log(name);
    const categorie = await connection.query(`select categorie_id from categories where categorie = $1;`,[name])

    return categorie.rows[0].categorie_id
}

module.exports ={
    findById,filterByName
}