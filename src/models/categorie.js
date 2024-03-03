const connection = require('../databases/e-commerceConnections.js')
async function findById(id){
    const categorie = await connection.query(`select * from categories where categorie_id= $1;`,[id])
    return categorie.rows
}

async function filterByName(name){


    const categorie = await connection.query(`select categorie_id from categories where categorie = $1;`,[name])
        if(categorie.rowCount){
            return categorie.rows[0].categorie_id
        }else{
            return false
        }
 
    
    //
}
async function list(){
    const categorie = await connection.query(`select * from categories ;`)
    return categorie.rows
}

module.exports ={
    findById,filterByName,list
}