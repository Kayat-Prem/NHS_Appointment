const dotenv = require('dotenv')
dotenv.config()

const mongoose = require('mongoose')
const User = require('./models/User')
const Slot = require('./models/Slot')

const seedSlots = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL)
    console.log('Connected to MongoDB')

    const doctors = await User.find({ role: 'gp' })
    if (doctors.length === 0) {
      console.log('No doctors found — run seed.js first')
      process.exit(1)
    }

    await Slot.deleteMany({})

    const times = ['09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '14:00', '14:30', '15:00', '15:30', '16:00']

    const today = new Date()
    const dates = []
    for (let i = 1; i <= 14; i++) {
      const d = new Date(today)
      d.setDate(today.getDate() + i)
      const dayOfWeek = d.getDay()
      if (dayOfWeek !== 0 && dayOfWeek !== 6) {
        dates.push(d.toISOString().split('T')[0])
      }
    }

    const slots = []
    doctors.forEach(doctor => {
      dates.forEach(date => {
        times.forEach(time => {
          slots.push({ doctor: doctor._id, date, time, isBooked: false })
        })
      })
    })

    await Slot.insertMany(slots)
    console.log(`✅ Created ${slots.length} slots across ${doctors.length} doctors for the next 2 weeks!`)
    process.exit(0)

  } catch (error) {
    console.error('Error:', error.message)
    process.exit(1)
  }
}

seedSlots()