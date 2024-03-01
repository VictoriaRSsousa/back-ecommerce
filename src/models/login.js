const connection = require('../databases/e-commerceConnections.js')

async function login(email,password){
    const result = await connection.query(`select * from user where email = $1 && password = $2`,[email,password])
    console.log("model");
    return result.rows
}  

module.exports = {login}