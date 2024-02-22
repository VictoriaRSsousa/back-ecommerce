const { Pool } = require('pg')



const connection = new Pool({
host: 'localhost',
user: 'postgres',
port: 3000,
password:'admin',
database: 'e_commerce'
})
// console.log(process.env);
module.exports = connection
