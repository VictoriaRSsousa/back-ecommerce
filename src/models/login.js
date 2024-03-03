const connection = require('../databases/e-commerceConnections.js')

async function login(email){
    const result = await connection.query(`select * from users where email = $1;`,[email])
    return result.rows
}  

module.exports = {login}