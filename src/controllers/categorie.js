const {categorieService} = require('../services')
const list = async (req,res)=>{

    const {value,message,statusCode} = await categorieService.list()
    res.json(value).status(statusCode)
  }

  module.exports = {list}