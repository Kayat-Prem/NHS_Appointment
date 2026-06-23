const dotenv = require('dotenv')
dotenv.config()

const express = require('express')
const connectDB = require('./config/db')
const authRoutes = require('./routes/auth.routes')
const adminRoutes = require('./routes/admin.routes')
const appointmentRoutes = require('./routes/appointment.routes')

connectDB()

const app = express()

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173')
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization')
  if (req.method === 'OPTIONS') return res.status(200).end()
  next()
})

app.use(express.json())
app.use('/api/auth', authRoutes)
app.use('/api/admin', adminRoutes)
app.use('/api/appointments', appointmentRoutes)

app.get('/', (req, res) => {
  res.json({ message: '✅ NHS API is running' })
})

const PORT = process.env.PORT || 5001
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`))