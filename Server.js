require('dotenv').config()

const express = require('express')
const app = express()
const port = 3000
const mongoose = require('mongoose')

mongoose.connect(process.env.DATABASE_URL)
const db = mongoose.connection
db.on('error', (error) => console.error(error))
db.once('open', (error) => console.log('Connected to Database'))


app.use(express.json())

const shampoosRouter = require('./routers/shampoos')
app.use('/shampoos', shampoosRouter)

const manufacturerRouter = require('./routers/manufacturers')
app.use('/manufacturers', manufacturerRouter)

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})  