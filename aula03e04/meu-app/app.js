const express = require('express')
const app = express()
const postRoutes = require('./routes/postRoutes')
const path = require('path')

app.use(express.static(path.join(__dirname, 'public')))
app.use('/', postRoutes)

app.listen(3000, ()=> console.log('Servidor rodando na porta http://localhost:3000'))