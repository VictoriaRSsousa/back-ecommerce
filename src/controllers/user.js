
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

 module.exports={
    list,
    create
 }
