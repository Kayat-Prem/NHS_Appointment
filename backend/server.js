const express = require('express')
const cors = require('cors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')

dotenv.config()
connectDB()

const app = express()
app.use(cors({ origin: 'http://localhost:5173' }))
app.use(express.json())

// Routes (we'll add more later)
app.get('/', (req, res) => {
  res.json({ message: '✅ NHS API is running' })
})

const PORT = process.env.PORT || 5000
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))