const userRoute =  require('./routes/product')
const express = require('express')

const port = 3000

const app = express()

app.use(express.json())

app.use('/products',userRoute)

app.listen(port,()=>console.log("subiu"))