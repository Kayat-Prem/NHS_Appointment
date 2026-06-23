const express = require('express')
const router = express.Router()
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const { protect, authorise } = require('../middleware/auth.middleware')

// ── GET all doctors ─────────────────────────────
router.get('/doctors', protect, authorise('admin'), async (req, res) => {
  try {
    const doctors = await User.find({ role: 'gp' }).select('-password')
    res.json(doctors)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
})

// ── GET stats for dashboard ──────────────────────
router.get('/stats', protect, authorise('admin'), async (req, res) => {
  try {
    const totalDoctors   = await User.countDocuments({ role: 'gp' })
    const totalPatients  = await User.countDocuments({ role: 'patient' })
    const totalAdmins    = await User.countDocuments({ role: 'admin' })
    res.json({ totalDoctors, totalPatients, totalAdmins })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
})

// ── POST create new GP ───────────────────────────
router.post('/doctors', protect, authorise('admin'), async (req, res) => {
  try {
    const { name, email, password, specialisation } = req.body
    if (!name || !email || !password) {
      return res.status(400).json({ message: 'Name, email and password are required' })
    }
    const userExists = await User.findOne({ email })
    if (userExists) {
      return res.status(400).json({ message: 'Email already registered' })
    }
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)
    const doctor = await User.create({
      name, email,
      password: hashedPassword,
      role: 'gp',
      specialisation: specialisation || 'General Practice'
    })
    res.status(201).json({
      message: 'Doctor account created',
      doctor: {
        id: doctor._id,
        name: doctor.name,
        email: doctor.email,
        specialisation: doctor.specialisation,
        createdAt: doctor.createdAt
      }
    })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
})

// ── PUT update GP details ────────────────────────
router.put('/doctors/:id', protect, authorise('admin'), async (req, res) => {
  try {
    const { name, email, specialisation } = req.body
    const doctor = await User.findById(req.params.id)
    if (!doctor || doctor.role !== 'gp') {
      return res.status(404).json({ message: 'Doctor not found' })
    }
    // Check email not taken by someone else
    if (email !== doctor.email) {
      const emailExists = await User.findOne({ email })
      if (emailExists) {
        return res.status(400).json({ message: 'Email already in use' })
      }
    }
    doctor.name           = name           || doctor.name
    doctor.email          = email          || doctor.email
    doctor.specialisation = specialisation || doctor.specialisation
    await doctor.save()
    res.json({ message: 'Doctor updated successfully', doctor })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
})

// ── PUT reset GP password ────────────────────────
router.put('/doctors/:id/reset-password', protect, authorise('admin'), async (req, res) => {
  try {
    const { newPassword } = req.body
    if (!newPassword || newPassword.length < 6) {
      return res.status(400).json({ message: 'Password must be at least 6 characters' })
    }
    const doctor = await User.findById(req.params.id)
    if (!doctor || doctor.role !== 'gp') {
      return res.status(404).json({ message: 'Doctor not found' })
    }
    const salt = await bcrypt.genSalt(10)
    doctor.password = await bcrypt.hash(newPassword, salt)
    await doctor.save()
    res.json({ message: 'Password reset successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
})

// ── DELETE GP account ────────────────────────────
router.delete('/doctors/:id', protect, authorise('admin'), async (req, res) => {
  try {
    const doctor = await User.findById(req.params.id)
    if (!doctor || doctor.role !== 'gp') {
      return res.status(404).json({ message: 'Doctor not found' })
    }
    await User.findByIdAndDelete(req.params.id)
    res.json({ message: 'Doctor account removed successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
})

// ── GET all patients ─────────────────────────────
router.get('/patients', protect, authorise('admin'), async (req, res) => {
  try {
    const patients = await User.find({ role: 'patient' })
      .select('-password')
      .sort({ createdAt: -1 })
    res.json(patients)
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
})

// ── DELETE a patient ─────────────────────────────
router.delete('/patients/:id', protect, authorise('admin'), async (req, res) => {
  try {
    const patient = await User.findById(req.params.id)
    if (!patient || patient.role !== 'patient') {
      return res.status(404).json({ message: 'Patient not found' })
    }
    await User.findByIdAndDelete(req.params.id)
    res.json({ message: 'Patient removed successfully' })
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message })
  }
})

module.exports = router