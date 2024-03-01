const {loginService} = require('../services')
async function login(req,res){
    console.log("controller");
    const login = await loginService.login(req.body)
    console.log(login,"login controller");
    return login

}

module.exports = {login}