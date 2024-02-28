const {saleService} = require('../services')

async function list(req,res){
    console.log("controller");
    saleService.list()
    res.send("ook")
}

module.exports ={
    list 
}