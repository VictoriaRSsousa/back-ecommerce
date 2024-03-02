
const {userService} = require('../services')

const list = async (req,res)=>{

   const {value,message,statusCode} = await userService.list()
   res.json(value).status(statusCode)
 }

const create = async(req,res) =>{
   const {value,message,statusCode} = await userService.create(req.body)
   if(message){
      res.status(statusCode).json(message)
   }else{
      res.status(statusCode).json(value)

   }

 }

 const findById = async(req,res)=>{
   const {value,message,statusCode} = await userService.findById(req.params.id)
   if(message){
      res.status(statusCode).json(message)
   }else{
      res.status(statusCode).json(value)
   }
 }

 const findByEmail = async(req,res) =>{
   // const {value,message,statusCode} = await userService.findByEmail(req.query.email)
   // // console.log(req.body);
   // if(message){
   //    res.status(statusCode).json(message)
   // }else{
   //    res.status(statusCode).json(value)

   // }

 }

 const remove = async(req,res) =>{
   const {value,message,statusCode} = userService.remove(req.params.id)
   if(message){
      res.status(statusCode).json(message)
   }else{
      res.status(statusCode).json(value)
   }

 }


 



 module.exports={
    list,
    create,
    findByEmail,
    remove,
    findById
 }
