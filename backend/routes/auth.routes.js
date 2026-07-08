const express = require('express')
const router = express.Router()
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const crypto = require('crypto')
const User = require('../models/User')
const { protect } = require('../middleware/auth.middleware')
const { sendPasswordResetEmail } = require('../utils/sendEmail')


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



    // For Reset Password:
// POST /api/auth/forgot-password
router.post('/forgot-password', async (req, res) => {
  try {
    const { email } = req.body
    if (!email) {
      return res.status(400).json({ message: 'Email is required' })
    }

    const user = await User.findOne({ email })
    if (!user) {
      return res.json({ message: 'If an account exists, a reset link has been sent' })
    }

    const resetToken = crypto.randomBytes(32).toString('hex')
    const resetExpires = new Date(Date.now() + 60 * 60 * 1000)

    user.resetPasswordToken = resetToken
    user.resetPasswordExpires = resetExpires
    await user.save()

    const resetUrl = `http://localhost:5173/reset-password?token=${resetToken}&email=${email}`

    // Try to send email but don't fail if it doesn't work
    try {
      await sendPasswordResetEmail({ toEmail: email, toName: user.name, resetUrl })
    } catch (emailError) {
      console.error('Email failed but continuing:', emailError.message)
    }

    // Always return the reset URL so the page can show a direct link
    res.json({
      message: 'Reset link generated successfully',
      resetUrl  // ← send this back to frontend
    })

  } catch (error) {
    console.error('Forgot password error:', error.message)
    res.status(500).json({ message: 'Server error' })
  }
})

    // POST /api/auth/reset-password
    router.post('/reset-password', async (req, res) => {
      try {
        const { email, token, newPassword } = req.body

        if (!email || !token || !newPassword) {
          return res.status(400).json({ message: 'All fields are required' })
        }
        if (newPassword.length < 6) {
          return res.status(400).json({ message: 'Password must be at least 6 characters' })
        }

        const user = await User.findOne({
          email,
          resetPasswordToken: token,
          resetPasswordExpires: { $gt: new Date() } // token not expired
        })

        if (!user) {
          return res.status(400).json({ message: 'Reset link is invalid or has expired' })
        }

        // Update password
        const salt = await bcrypt.genSalt(10)
        user.password = await bcrypt.hash(newPassword, salt)
        user.resetPasswordToken = null
        user.resetPasswordExpires = null
        await user.save()

        res.json({ message: 'Password reset successfully. You can now sign in.' })
      } catch (error) {
        console.error('Reset password error:', error.message)
        res.status(500).json({ message: 'Server error' })
      }
    })


module.exports = router