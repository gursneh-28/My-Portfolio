import 'dotenv/config'
import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import contactRoutes from './routes/contact.js'
import cvRoutes from './routes/cv.js'

const app = express()
const PORT = process.env.PORT || 5000

const allowedOrigins = [
  'http://localhost:5173',
  process.env.CLIENT_URL,
].filter(Boolean)

app.use(cors({
  origin: (origin, callback) => {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true)
    } else {
      callback(null, false)  
    }
  },
  credentials: true,
}))

app.use(express.json())
app.use('/api/contact', contactRoutes)
app.use('/api/cv', cvRoutes)

mongoose.connect(process.env.MONGO_URI)
  .then(() => {
    console.log('✅ MongoDB connected')
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`))
  })
  .catch(err => console.error('❌ MongoDB error:', err))