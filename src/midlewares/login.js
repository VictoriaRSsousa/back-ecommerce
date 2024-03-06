const jwt = require('jsonwebtoken')

function verifyToken(req, res, next) {
    const token = req.headers.authorization
   // console.log(token);
    //botar no login 
    if (!token) {
        return res.status(401).json("Falha na autenticação");
    }
    const secret = 'ecommerce_secret'

    jwt.verify(token, secret, (erro, decode) => {
        if (erro) {
            return res.status(401).json("Falha na autenticação");
        }

         req.user = decode;
         
        next();
    });
    
}

module.exports = verifyToken