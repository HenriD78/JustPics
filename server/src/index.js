const express = require('express')
const dotenv = require('dotenv')
const connectDB = require('./config/db.js')

dotenv.config()
  l
const app = express()
const port = 8080

//console.log(process.env.MONGO_URI)

app.get('/', (req, res) => {
    res.send('Server is up and running!')
})

app.listen(port, () => {
    connectDB()
    console.log(`Server is running on ${port}`)
}) 