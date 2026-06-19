const dotenv = require('dotenv')
dotenv.config()

const mongoose = require('mongoose')
const bcrypt = require('bcryptjs')
const User = require('./models/User')

const seedUsers = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log('Connected to MongoDB')

    await User.deleteMany({ role: { $in: ['gp', 'admin'] } })

    const gpSalt = await bcrypt.genSalt(10)
    const gpHash = await bcrypt.hash('gp123456', gpSalt)

    const adminSalt = await bcrypt.genSalt(10)
    const adminHash = await bcrypt.hash('admin123', adminSalt)

    await User.create([
      {
        name: 'Dr. Sarah Patel',
        email: 'gp@nhs.com',
        password: gpHash,
        role: 'gp',
        specialisation: 'General Practice'
      },
      {
        name: 'Dr. James Wilson',
        email: 'gp2@nhs.com',
        password: gpHash,
        role: 'gp',
        specialisation: 'Cardiology'
      },
      {
        name: 'Admin User',
        email: 'admin@nhs.com',
        password: adminHash,
        role: 'admin'
      }
    ])

    console.log('✅ Accounts created successfully!')
    console.log('─────────────────────────────────────')
    console.log('GP login:    gp@nhs.com    / gp123456')
    console.log('GP2 login:   gp2@nhs.com   / gp123456')
    console.log('Admin login: admin@nhs.com / admin123')
    process.exit(0)

  } catch (error) {
    console.error('❌ Seed error:', error.message)
    process.exit(1)
  }
}

seedUsers()