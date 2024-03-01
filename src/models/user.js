const connection = require("../databases/e-commerceConnections");

async function list() {
  const result = await connection.query(`select * from users;`);
  
  return result.rows;
}

async function findById(id){
  const result = await connection.query(`select * from users where user_id = $1`,[id])
  return result.rows
}

async function create(sale) {
  const transaction = await connection.connect();
  try {
    await transaction.query("begin;");

    const { sale_product_id, sale_user_id,qtd_sale,price,sale_sale_date } = sale;
    const query = `insert into users (sale_product_id, sale_user_id,qtd_sale,price,sale_sale_date) values($1,$2,$3) returning user_id;`;
    const params = [name, email, password];
    const result = await transaction.query(query, params);
    const idNewUser = result.rows[0].user_id;

    await transaction.query("commit;");
    return {
      id: idNewUser,
      ...user,
    };
  } catch {
    await transaction.query("rollback;");
  } finally {
    transaction.release();
  }
}
async function findByEmail(email){
   const query = `SELECT * from users where email = $1`
   const result = await connection.query(query,[email])
   console.log(result.rows);
   return result.rows
}

async function remove(email){
  const result = await connection.query(`delete from users where email = $1`,[email])
  console.log(result);
}




module.exports = {list,create,remove,findByEmail,findById}