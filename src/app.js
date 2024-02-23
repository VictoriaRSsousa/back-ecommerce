const {productRoute,userRoute} =  require('./routes')
const express = require('express')

//PORTA QUE A APLICAÇÃO VAI RODAR
const port = 3000

const app = express()

app.use(express.json())

app.use('/products',productRoute)
app.use('/users',userRoute)

app.listen(port,()=>console.log("subiu"))