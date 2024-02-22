const express = require('express')
// rotas(especificas as rotas) 
// controlers(manda o o res com o status) 
// services(faz a validação para mandar pro controller) 
// models(faz as query- requisiçoes ao bd)
 //databases(conexao com o bd)

 const productsService = require('../services/product')

 const list = async (req,res)=>{
   console.log("controller");
   const listar = await productsService.list()
    res.json(listar)
 }

 module.exports={
    list
 }
