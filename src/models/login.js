const connection = require('../databases/e-commerceConnections.js')

async function login(email,password){
    const result = await connection.query(`select name,email, user_id from users where email = $1 and password = $2;`,[email,password])
    return result.rows
}  

module.exports = {login}