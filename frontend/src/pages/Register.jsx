import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import API from '../utils/api'
import toast from 'react-hot-toast'

export default function Register() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '', email: '', password: '',
    dateOfBirth: '', phone: ''
  })
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.password) {
      toast.error('Please fill in all required fields')
      return
    }
    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters')
      return
    }
    setLoading(true)
    try {
      await API.post('/auth/register', { ...formData, role: 'patient' })
      toast.success('Account created! Please sign in.')
      setTimeout(() => navigate('/login'), 1500)
    } catch (err) {
      const message = err.response?.data?.message
      if (message === 'Email already registered') toast.error('This email is already registered')
      else if (!err.response) toast.error('Cannot connect to server')
      else toast.error(message || 'Registration failed')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    width: '100%',
    padding: '10px 14px',
    border: '2px solid #4c6272',
    borderRadius: '4px',
    fontSize: '15px',
    color: '#212b32',
    fontFamily: 'inherit',
    outline: 'none',
    background: '#ffffff',
    colorScheme: 'light',
    boxSizing: 'border-box',
    display: 'block'
  }

  const labelStyle = {
    display: 'block',
    fontSize: '14px',
    fontWeight: '500',
    color: '#212b32',
    marginBottom: '4px',
    textAlign: 'left'
  }

  const hintStyle = {
    display: 'block',
    fontSize: '13px',
    color: '#4c6272',
    marginBottom: '6px',
    textAlign: 'left'
  }

  const fieldStyle = {
    marginBottom: '18px',
    textAlign: 'left'
  }

  return (
    <div style={{ minHeight: '100vh', width: '100%', background: '#f0f8ff' }}>

      {/* NHS Blue Header */}
      <div style={{ background: '#005EB8', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ background: '#fff', color: '#005EB8', fontSize: '13px', fontWeight: '700', padding: '3px 8px', borderRadius: '4px', letterSpacing: '1px' }}>NHS</span>
        <span style={{ color: '#fff', fontSize: '15px', fontWeight: '500' }}>GP Appointment Booking Service</span>
      </div>

      {/* Centered Card */}
      <div style={{ minHeight: 'calc(100vh - 52px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
        <div style={{ background: '#fff', borderRadius: '8px', padding: '32px', width: '100%', maxWidth: '460px', border: '0.5px solid #d8dde0' }}>

          <h1 style={{ fontSize: '24px', fontWeight: '500', color: '#212b32', marginBottom: '6px', textAlign: 'left' }}>
            Create your account
          </h1>
          <p style={{ fontSize: '14px', color: '#4c6272', marginBottom: '24px', textAlign: 'left' }}>
            Register to book and manage GP appointments online
          </p>

          <hr style={{ border: 'none', borderTop: '1px solid #d8dde0', marginBottom: '24px' }} />

          <form onSubmit={handleSubmit}>

            {/* Full name */}
            <div style={fieldStyle}>
              <label style={labelStyle}>
                Full name <span style={{ color: '#d5281b' }}>*</span>
              </label>
              <input
                type="text" name="name" value={formData.name}
                onChange={handleChange} required
                placeholder="e.g. Prem Kayat"
                style={inputStyle}
              />
            </div>

            {/* Email */}
            <div style={fieldStyle}>
              <label style={labelStyle}>
                Email address <span style={{ color: '#d5281b' }}>*</span>
              </label>
              <span style={hintStyle}>We'll send appointment confirmations here</span>
              <input
                type="email" name="email" value={formData.email}
                onChange={handleChange} required
                placeholder="kayat@gmail.com"
                style={inputStyle}
              />
            </div>

            {/* Password with eye toggle */}
            <div style={fieldStyle}>
              <label style={labelStyle}>
                Password <span style={{ color: '#d5281b' }}>*</span>
              </label>
              <span style={hintStyle}>Must be at least 6 characters</span>
              <div style={{ position: 'relative', width: '100%' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password" value={formData.password}
                  onChange={handleChange} required
                  placeholder="Create a password"
                  style={{ ...inputStyle, paddingRight: '44px' }}
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#4c6272', padding: '0', display: 'flex', alignItems: 'center' }}
                  aria-label={showPassword ? 'Hide password' : 'Show password'}
                >
                  {showPassword ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M17.94 17.94A10.07 10.07 0 0 1 12 20c-7 0-11-8-11-8a18.45 18.45 0 0 1 5.06-5.94"/>
                      <path d="M9.9 4.24A9.12 9.12 0 0 1 12 4c7 0 11 8 11 8a18.5 18.5 0 0 1-2.16 3.19"/>
                      <line x1="1" y1="1" x2="23" y2="23"/>
                    </svg>
                  ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                      <circle cx="12" cy="12" r="3"/>
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Date of birth */}
            <div style={fieldStyle}>
              <label style={labelStyle}>Date of birth</label>
              <input
                type="date" name="dateOfBirth" value={formData.dateOfBirth}
                onChange={handleChange}
                style={inputStyle}
              />
            </div>

            {/* Phone */}
            <div style={fieldStyle}>
              <label style={labelStyle}>Phone number</label>
              <span style={hintStyle}>So your GP can contact you if needed</span>
              <input
                type="tel" name="phone" value={formData.phone}
                onChange={handleChange}
                placeholder="07700 900 123"
                style={inputStyle}
              />
            </div>

            {/* Warning note */}
            <div style={{ background: '#fff8e6', borderLeft: '4px solid #ffb81c', padding: '10px 14px', borderRadius: '0 4px 4px 0', marginBottom: '20px', fontSize: '13px', color: '#6a4c00', textAlign: 'left' }}>
              <strong>Note:</strong> GP and Admin accounts are set up by your practice administrator.
            </div>

            {/* Submit button */}
            <button
              type="submit" disabled={loading}
              style={{ width: '100%', padding: '12px', background: loading ? '#4c6272' : '#007f3b', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '16px', fontWeight: '500', cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', boxSizing: 'border-box' }}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                  </svg>
                  Creating account...
                </>
              ) : 'Create account'}
            </button>

          </form>

          <hr style={{ border: 'none', borderTop: '1px solid #d8dde0', margin: '24px 0' }} />

          <p style={{ textAlign: 'center', fontSize: '14px', color: '#4c6272' }}>
            Already have an account?{' '}
            <Link to="/login" style={{ color: '#005EB8', textDecoration: 'underline' }}>Sign in here</Link>
          </p>

        </div>
      </div>
    </div>
  )
}