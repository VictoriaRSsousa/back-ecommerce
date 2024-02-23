const { Pool } = require('pg')


//PORTA DO BANCO DE DADOS
const connection = new Pool({
host: 'localhost',
user: 'postgres',
port: 5432,
password:'admin',
database: 'e_commerce_victoria'
})
// console.log(process.env);
module.exports = connection
