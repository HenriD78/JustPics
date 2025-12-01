import express from 'express'
import dotenv from 'dotenv'
import { connectDB } from './config/db.js'
import { Product } from './models/model.product.js'

dotenv.config()
 
const app = express()
const port = 8080

//console.log(process.env.MONGO_URI)

app.get('/', (req, res) => {
    res.send('Server is up and running!')
})

app.use(express.json()) // Middleware to accept JSON data in req.body

app.post("/api/products", async (req, res) => {
    const product = req.body;

    if (!product.name || !product.price) {
      return res.status(400).json({success: false, message: "Please provide all fields"})
    }
    const newProduct = new Product(product)

    try {
      await newProduct.save();
      res.status(201).json({success: true, data: newProduct})
    } catch (error){
      console.log("Error creating product:", error.message)
      res.status(500).json({success: false, message: "Server Error"})
    }
})

app.listen(port, () => {
    connectDB()
    console.log(`Server is running on ${port}`)
})