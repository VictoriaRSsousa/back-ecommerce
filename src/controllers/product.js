// rotas(especificas as rotas) 
// controlers(manda o o res com o status) 
// services(faz a validação para mandar pro controller) 
// models(faz as query- requisiçoes ao bd)
 //databases(conexao com o bd)

const {productService,categorieService} = require('../services')

const list = async (req,res)=>{
   if(req.query.categorie){
      const filterByName = await productService.filterByCategorie(req.query.categorie)
   }
   const {value,message,statusCode} = await productService.list()
   res.json(value).status(statusCode)
 }



const create = async(req,res) =>{
   const {value,message,statusCode} = await productService.create(req.body)
   if(message){
      res.status(statusCode).json(message)
   }else{
      res.status(statusCode).json(value)

   }

 }

const findById = async(req,res)=>{
   const {value,message,statusCode} = await productService.findById(req.params.id)
   if(message){
      res.status(statusCode).json(message)
   }else{
      res.status(statusCode).json(value)

   }
 }


// async function update(req, res){
//    const {value,message,statusCode} = await productService.update(req.body)
//    if(message){
//       res.status(statusCode).json(message)
//    }else{
//       res.status(statusCode).json(value)

//    }


//}


 module.exports={
    list,
    create,
    findById
 }
