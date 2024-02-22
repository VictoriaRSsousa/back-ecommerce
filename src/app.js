const productRoute =  require('./routes/product')
const express = require('express')

//PORTA QUE A APLICAÇÃO VAI RODAR
const port = 3000

const app = express()

app.use(express.json())

app.use('/products',productRoute)

app.listen(port,()=>console.log("subiu"))