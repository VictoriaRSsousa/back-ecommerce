const connection = require('../databases/e-commerceConnections')
const format = require('pg-format')
 //usar 

async function list(){
  const result = await connection.query(`SELECT
  TO_CHAR(d.sale_at, 'YYYY-MM-DD HH24:MI:SS') as data_da_venda,
  ARRAY_AGG(
    JSONB_BUILD_OBJECT(
      'id_sale', s.id_sale,
      'sale_product_id', s.sale_product_id,
      'sale_user_id', s.sale_user_id,
      'qtd_sale', s.qtd_sale,
      'price', s.price
    )
  ) AS sales
FROM sales as s join sale_dates as d on d.sale_date_id = s.sale_sale_date
GROUP BY d.sale_at, s.sale_sale_date`)

  return result.rows;
}

async function listByUser(id){
  const result = await connection.query(`SELECT
  TO_CHAR(d.sale_at, 'YYYY-MM-DD HH24:MI:SS') as data_da_venda,
  ARRAY_AGG(
    JSONB_BUILD_OBJECT(
      'id_sale', s.id_sale,
      'sale_product_id', s.sale_product_id,
      'sale_user_id', s.sale_user_id,
      'qtd_sale', s.qtd_sale,
      'price', s.price
    )
  ) AS sales
FROM sales as s join sale_dates as d on d.sale_date_id = s.sale_sale_date
where sale_user_id = $1
GROUP BY d.sale_at, s.sale_sale_date`,[id])

  return result.rows;
}

async function create(sale){ 
    const {sale_user_id,products} = sale
 
    const transaction = await connection.connect();

    try {
      await transaction.query("begin;");
    
      const queryDate = await connection.query(`insert into sale_dates (sale_at) values(CURRENT_TIMESTAMP) returning sale_date_id;`);
      const idDateSale = queryDate.rows[0].sale_date_id
      console.log(idDateSale);

      const insertFormat = products.map(product => {
        return [ product.sale_product_id,sale_user_id,product.qtd_sale,product.price, idDateSale ]
    })

    


    
      const saleQuery = `
        INSERT INTO sales (sale_product_id, sale_user_id, qtd_sale, price, sale_sale_date)
        VALUES %L;`;
    
    
     await transaction.query(format(saleQuery, insertFormat));


     for (const product of products) {
      const updateProductQuery = `
        UPDATE products
        SET qtd_d = qtd_d - $1
        WHERE product_id = $2;`;

      await transaction.query(updateProductQuery, [product.qtd_sale, product.sale_product_id]);
    }

      await transaction.query("commit;");
      
      return {
        message:"compra efetuada com sucesso!",
        ...sale 
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
    create,
    listByUser
}