const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const dotenv = require('dotenv')

dotenv.config()
const app = express()

app.use(cors())
app.use(express.json())


const authRoutes = require('./routes/authRoutes')
const productRoutes = require('./routes/productRoutes')
const categoryRoutes = require('./routes/categoryRoutes')
const orderRoutes = require('./routes/orderRoutes')

app.use('/auth', authRoutes)
app.use('/product', productRoutes)
app.use('/category', categoryRoutes)
app.use('/order', orderRoutes)

mongoose.connect(process.env.MONGO_URI).then(() => {
          
    console.log('Mongo conectado')
    app.listen(process.env.PORT, () => 
        console.log(`
            servidor rodando na porta http://localhost:${process.env.PORT}
        `)
    )

}).catch( err => console.error(`Erro ao tentar se conctar com o MongoDB : ${err}`))

