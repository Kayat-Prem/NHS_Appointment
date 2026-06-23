const express = require('express')
const router = express.Router()
const Appointment = require('../models/Appointment')
const { protect, authorise } = require('../middleware/auth.middleware')

// GET all appointments (admin only)
router.get('/all', protect, authorise('admin'), async (req, res) => {
  try {
    const appointments = await Appointment.find()
      .populate('patient', 'name email phone')
      .populate('doctor', 'name specialisation')
      .sort({ createdAt: -1 })
    res.json(appointments)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
})

// GET appointments for a specific patient
router.get('/my', protect, authorise('patient'), async (req, res) => {
  try {
    const appointments = await Appointment.find({ patient: req.user._id })
      .populate('doctor', 'name specialisation')
      .sort({ createdAt: -1 })
    res.json(appointments)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
})

// GET appointments for a specific GP
router.get('/gp', protect, authorise('gp'), async (req, res) => {
  try {
    const appointments = await Appointment.find({ doctor: req.user._id })
      .populate('patient', 'name email phone dateOfBirth')
      .sort({ date: 1, time: 1 })
    res.json(appointments)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
})

// POST book appointment (patient)
router.post('/book', protect, authorise('patient'), async (req, res) => {
  try {
    const { doctorId, date, time, type } = req.body
    if (!doctorId || !date || !time) {
      return res.status(400).json({ message: 'Doctor, date and time are required' })
    }
    // Check slot not already booked
    const existing = await Appointment.findOne({
      doctor: doctorId, date, time,
      status: { $ne: 'cancelled' }
    })
    if (existing) {
      return res.status(400).json({ message: 'This slot is already booked' })
    }
    const appointment = await Appointment.create({
      patient: req.user._id,
      doctor: doctorId,
      date, time,
      type: type || 'General Checkup'
    })
    const populated = await appointment.populate([
      { path: 'doctor', select: 'name specialisation' },
      { path: 'patient', select: 'name email' }
    ])
    res.status(201).json({ message: 'Appointment booked successfully', appointment: populated })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
})

// PUT cancel appointment
router.put('/:id/cancel', protect, async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id)
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' })
    }
    appointment.status = 'cancelled'
    await appointment.save()
    res.json({ message: 'Appointment cancelled' })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
})

// PUT mark as completed (GP only)
router.put('/:id/complete', protect, authorise('gp'), async (req, res) => {
  try {
    const appointment = await Appointment.findById(req.params.id)
    if (!appointment) {
      return res.status(404).json({ message: 'Appointment not found' })
    }
    appointment.status = 'completed'
    appointment.notes = req.body.notes || appointment.notes
    await appointment.save()
    res.json({ message: 'Appointment marked as completed' })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
})

module.exports = router