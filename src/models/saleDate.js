const connection = require('../databases/e-commerceConnections')


async function list(){
    const result = await connection.query(`select * from sale_dates;`)
    return result.rows
}


module.exports = {
    list
}