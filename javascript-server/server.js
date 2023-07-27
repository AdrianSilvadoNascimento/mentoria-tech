const express = require('express')

const userRoutes = require('./routes/userRoutes')
const contaBancaria = require('./routes/contaBancoRoutes')

const app = express()
const PORT = 3004

app.use('/conta-bancaria', contaBancaria)
app.use('/user', userRoutes)

app.listen(PORT, () => {
  console.log('Servidor está rodando na porta:', PORT)
})