const connection = require('../databases/e-commerceConnections')


async function list(){
  const result = await connection.query(`select * from sales;`)
  console.log("model");
  return result;
}

async function create(sale){
    const {sale_product_id, sale_user_id,qtd_sale,price} = sale

    const transaction = await connection.connect();
    try {
      await transaction.query("begin;");
;
      const idDateSale = `insert into sale_dates (sale_at) values(CURRENT_TIMESTAMP) returning sale_date_id;`;
      const sale = await connection.query(`insert into sales (sale_product_id, sale_user_id,qtd_sale,price,sale_sale_date) values($1,$2,$3,$4,$5) returning id_sale`)
      const params = [sale_product_id, sale_user_id,qtd_sale,price,idDateSale]

      const result = await transaction.query(sale, params);
      console.log(result.rows);
      // if(result.rowCount>0){

      // }
       const idNewSale = result.rows[0].id_sale;

      await transaction.query(`update products set qtd_d = qtd_d - $1 where product_id = $2`,[qtd_sale,sale_product_id])
      
  
      await transaction.query("commit;");
      return {
        id: idDateSale,
        ...sale,
      };
    } catch(error) {
      await transaction.query("rollback;");
      throw error
    } finally {
      transaction.release();
    }   

}


module.exports = {
    list,
    create
}