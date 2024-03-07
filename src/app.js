const {
    productRoute,
    userRoute,
    saleRoute,
    saleDateRoute,
    loginRoute,
    cadastroRoute,
    categorieRoute
} =  require('./routes')
const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken');
require('dotenv').config()

const port = process.env.PORT_SERVER || 3000
const app = express()

app.use(cors())

app.use(express.json())

app.use('/products',productRoute)
app.use('/users',userRoute)  
app.use('/sales',saleRoute)
app.use('/saleDates',saleDateRoute)
app.use('/login',loginRoute)
app.use('/cadastro',cadastroRoute)
app.use('/categories',categorieRoute)

app.listen(port,()=>console.log("subiu"))