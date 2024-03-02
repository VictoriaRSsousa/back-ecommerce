const connection = require('../databases/e-commerceConnections')
const format = require('pg-format')
//usar 

async function list(){
  const result = await connection.query(`select * from sales;`)

  return result.rows;
}

async function create(sale){ 
    const {sale_product_id, sale_user_id,qtd_sale,price,sale_sale_date} = sale
    
 
    const transaction = await connection.connect();

    try {
      await transaction.query("begin;");
    
      const idDateSale = await connection.query(`insert into sale_dates (sale_at) values(CURRENT_TIMESTAMP) returning sale_date_id;`);
    
      const saleQuery = `
        INSERT INTO sales (sale_product_id, sale_user_id, qtd_sale, price, sale_sale_date)
        VALUES ($1, $2, $3, $4, $5) returning id_sale;`;
    
      const saleParams = [
        sale_product_id,
        sale_user_id,
        qtd_sale,
        price,
        idDateSale.rows[0].sale_date_id 
      ];
    
      const saleResult = await transaction.query(saleQuery, saleParams);

    
      const idNewSale = saleResult.rows[0].id_sale;
    
      await transaction.query(
        `update products set qtd_d = qtd_d - $1 where product_id = $2`,
        [qtd_sale, sale_product_id]
      );
    
      await transaction.query("commit;");
      
      return {
        id: idNewSale,
        ...sale,  
      };
    } catch (error) {
      await transaction.query("rollback;");
      throw error;
    } finally {
      transaction.release();
    }
}


module.exports = {
    list,
    create
}