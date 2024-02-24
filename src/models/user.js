const connection =  require('../databases/e-commerceConnections')


async function list(){
    const result = await connection.query(`select * from users;`)
    return result.rows
}

async function create(user){
    const transaction = await connection.connect()
    try{
       await transaction.query('begin;')
 
       const {name,email,password} = user
       const query = `insert into users (name,email,password) values($1,$2,$3) returning user_id;`
       const params =[name,email,password]
       const result = await transaction.query(query,params)
       const idNewUser = result.rows[0].user_id
 
       await transaction.query('commit;')
       return {
          id:idNewUser,
          ...user
       }
 
    }catch{
       await transaction.query('rollback;')
       
 
    }finally {
    transaction.release()}
}

module.exports = {list,create}