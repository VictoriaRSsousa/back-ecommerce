const {saleDateService} = require('../services')

async function list(req,res){
    console.log("controller");
    saleDateService.list()
    res.send("ook")
}

module.exports ={
    list
}