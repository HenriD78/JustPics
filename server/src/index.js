import dotenv from 'dotenv'
import express from 'express'
import { connectDB } from './config/db.js'
import productRoutes from './routes/product.route.js'

dotenv.config()
console.log("MONGO_URI is:", process.env.MONGO_URI);

const app = express()
const port = 8080

app.get('/', (req, res) => {
    res.send('Server is up and running!')
})

app.use(express.json()) // Middleware to accept JSON data in req.body
app.use("/api/products", productRoutes)

app.listen(port, () => {
    connectDB()
    console.log(`Server is running on http://localhost:${port}`)
})