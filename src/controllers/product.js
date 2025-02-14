
const {productService,categorieService} = require('../services')

const list = async (req,res)=>{
   if(req.query.categorie){
      const {value,message,statusCode} = await productService.filterByCategorie(req.query.categorie)
      value? res.status(statusCode).json(value):res.status(statusCode).json(message)
      
   }else{
      const {value,message,statusCode} = await productService.list()
      res.status(statusCode).json(value)

   }
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
 module.exports={
    list,
    create,
    findById
 }
