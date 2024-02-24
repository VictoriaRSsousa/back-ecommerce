const {productRoute,userRoute} =  require('./routes')
const express = require('express')
require('dotenv').config()

//PORTA QUE A APLICAÇÃO VAI RODAR

const port = process.env.PORT_SERVER || 3000
const app = express()

app.use(express.json())

app.use('/products',productRoute)
app.use('/users',userRoute)

app.listen(port,()=>console.log("subiu"))