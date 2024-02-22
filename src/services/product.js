const express = require('express')

const productModels = require('../models/product')

const list = async () =>{
    console.log("services")
    const listar = await productModels.list()
    return listar

}

module.exports ={
    list
}