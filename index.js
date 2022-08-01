import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/connectdb.js'
import postRoutes from './routes/postRoutes.js'

const app = express()
dotenv.config()
app.use(express.json({limit: "30mb"}))
app.use(cors())
const PORT = process.env.PORT || 4000
connectDB()

app.use('/api/posts', postRoutes)

app.listen(PORT, () => console.log('Server running on ' + PORT))

