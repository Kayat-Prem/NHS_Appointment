const express = require('express')
const router = express.Router()
const Slot = require('../models/Slot')
const { protect, authorise } = require('../middleware/auth.middleware')

// GET available slots for a doctor on a date
// GET /api/slots?doctorId=xxx&date=2026-06-23
router.get('/', protect, async (req, res) => {
  try {
    const { doctorId, date } = req.query
    if (!doctorId || !date) {
      return res.status(400).json({ message: 'doctorId and date are required' })
    }
    const slots = await Slot.find({
      doctor: doctorId,
      date,
      isBooked: false
    }).sort({ time: 1 })
    res.json(slots)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
})

// POST create slots (GP only)
// POST /api/slots
router.post('/', protect, authorise('gp'), async (req, res) => {
  try {
    const { date, times } = req.body
    if (!date || !times || times.length === 0) {
      return res.status(400).json({ message: 'Date and times are required' })
    }
    // Delete existing unbooked slots for that date
    await Slot.deleteMany({
      doctor: req.user._id,
      date,
      isBooked: false
    })
    // Create new slots
    const slots = await Slot.insertMany(
      times.map(time => ({
        doctor: req.user._id,
        date,
        time,
        isBooked: false
      }))
    )
    res.status(201).json({ message: 'Slots created', slots })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
})

    // GET GP's own slots for a specific date
    router.get('/gp', protect, authorise('gp'), async (req, res) => {
        try {
        const { date } = req.query
        const query = { doctor: req.user._id }
        if (date) query.date = date
        const slots = await Slot.find(query).sort({ date: 1, time: 1 })
        res.json(slots)
        } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message })
        }
    })

    // GET dates that have available slots for a doctor
    router.get('/available-dates', protect, async (req, res) => {
        try {
        const { doctorId } = req.query
        if (!doctorId) return res.status(400).json({ message: 'doctorId required' })
        const slots = await Slot.find({ doctor: doctorId, isBooked: false })
        const dates = [...new Set(slots.map(s => s.date))]
        res.json(dates)
        } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message })
        }
    })

module.exports = router