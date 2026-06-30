const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const User = require('../models/User')
const { protect } = require('../middleware/auth.middleware')

const generateToken = (id, role) => {
  return jwt.sign({ id, role }, process.env.JWT_SECRET, { expiresIn: '7d' })
}

// REGISTER
router.post('/register', async (req, res) => {
  try {
    const { name, email, password, role, specialisation, dateOfBirth, phone } = req.body

    const userExists = await User.findOne({ email })
    if (userExists) {
      return res.status(400).json({ message: 'Email already registered' })
    }

    // Hash password manually here
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role: role || 'patient',
      specialisation: specialisation || '',
      dateOfBirth: dateOfBirth || '',
      phone: phone || ''
    })

    res.status(201).json({
      message: 'Account created successfully',
      token: generateToken(user._id, user.role),
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    })
  } catch (error) {
    console.error('Register error:', error.message)
    res.status(500).json({ message: 'Server error', error: error.message })
  }
})

// LOGIN
router.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await User.findOne({ email })
    if (!user) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    const isMatch = await user.matchPassword(password)
    if (!isMatch) {
      return res.status(401).json({ message: 'Invalid email or password' })
    }

    res.json({
      message: 'Login successful',
      token: generateToken(user._id, user.role),
      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role
      }
    })
  } catch (error) {
    console.error('Login error:', error.message)
    res.status(500).json({ message: 'Server error', error: error.message })
  }
})

// GET all GPs — accessible by patients
    router.get('/doctors', protect, async (req, res) => {
      try {
        const doctors = await User.find({ role: 'gp' }).select('-password')
        res.json(doctors)
      } catch (error) {
        res.status(500).json({ message: 'Server error', error: error.message })
      }
    })

module.exports = router