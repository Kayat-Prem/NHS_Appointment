import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import API from '../utils/api'
import toast from 'react-hot-toast'

const checkPasswordStrength = (password) => {
  const rules = [
    { id: 'length',    label: 'At least 8 characters',       pass: password.length >= 8 },
    { id: 'uppercase', label: 'One uppercase letter (A-Z)',   pass: /[A-Z]/.test(password) },
    { id: 'lowercase', label: 'One lowercase letter (a-z)',   pass: /[a-z]/.test(password) },
    { id: 'number',    label: 'One number (0-9)',             pass: /[0-9]/.test(password) },
    { id: 'special',   label: 'One special character (!@#$)', pass: /[!@#$%^&*(),.?":{}|<>]/.test(password) },
  ]
  const passed = rules.filter(r => r.pass).length
  let strength = { label: '', color: '', bg: '', width: '0%' }
  if (password.length === 0) strength = { label: '', color: '', bg: '#e0e0e0', width: '0%' }
  else if (passed <= 1)      strength = { label: 'Very weak',  color: '#d5281b', bg: '#d5281b', width: '20%' }
  else if (passed === 2)     strength = { label: 'Weak',       color: '#d5281b', bg: '#d5281b', width: '40%' }
  else if (passed === 3)     strength = { label: 'Fair',       color: '#ffb81c', bg: '#ffb81c', width: '60%' }
  else if (passed === 4)     strength = { label: 'Strong',     color: '#007f3b', bg: '#007f3b', width: '80%' }
  else                       strength = { label: 'Very strong',color: '#007f3b', bg: '#007f3b', width: '100%' }
  return { rules, passed, strength }
}

export default function Register() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '', email: '', password: '',
    dateOfBirth: '', phone: ''
  })
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [passwordFocused, setPasswordFocused] = useState(false)

  const { rules, passed, strength } = checkPasswordStrength(formData.password)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.password) {
      toast.error('Please fill in all required fields')
      return
    }
    if (passed < 4) {
      toast.error('Please choose a stronger password')
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
    width: '100%', padding: '10px 14px',
    border: '2px solid #4c6272', borderRadius: '4px',
    fontSize: '15px', color: '#212b32',
    fontFamily: 'inherit', outline: 'none',
    background: '#ffffff', colorScheme: 'light',
    boxSizing: 'border-box', display: 'block'
  }

  const labelStyle = {
    display: 'block', fontSize: '14px',
    fontWeight: '500', color: '#212b32',
    marginBottom: '4px', textAlign: 'left'
  }

  const hintStyle = {
    display: 'block', fontSize: '13px',
    color: '#4c6272', marginBottom: '6px', textAlign: 'left'
  }

  const fieldStyle = { marginBottom: '18px', textAlign: 'left' }

  return (
    <div style={{ minHeight: '100vh', width: '100%', background: '#f0f4f5' }}>

      {/* NHS Header — clickable logo goes to landing page */}
      <div style={{ background: '#005EB8', padding: '0 24px', display: 'flex', alignItems: 'center', height: '52px' }}>
        <div
          onClick={() => navigate('/')}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
          title="Go to home page"
        >
          <span style={{ background: '#fff', color: '#005EB8', fontSize: '13px', fontWeight: '700', padding: '3px 8px', borderRadius: '4px', letterSpacing: '1px' }}>NHS</span>
          <span style={{ color: '#fff', fontSize: '15px', fontWeight: '500' }}>GP Appointment Booking Service</span>
        </div>
      </div>

      {/* Centered Card */}
      <div style={{ minHeight: 'calc(100vh - 52px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
        <div style={{ background: '#fff', borderRadius: '8px', padding: '32px', width: '100%', maxWidth: '460px', border: '0.5px solid #d8dde0' }}>

          <h1 style={{ fontSize: '24px', fontWeight: '500', color: '#212b32', marginBottom: '6px', textAlign: 'left' }}>Create your account</h1>
          <p style={{ fontSize: '14px', color: '#4c6272', marginBottom: '24px', textAlign: 'left' }}>Register to book and manage GP appointments online</p>
          <hr style={{ border: 'none', borderTop: '1px solid #d8dde0', marginBottom: '24px' }} />

          <form onSubmit={handleSubmit}>

            {/* Full name */}
            <div style={fieldStyle}>
              <label style={labelStyle}>Full name <span style={{ color: '#d5281b' }}>*</span></label>
              <input
                type="text" name="name" value={formData.name}
                onChange={handleChange} required
                placeholder="e.g. John Smith"
                style={inputStyle}
              />
            </div>

            {/* Email */}
            <div style={fieldStyle}>
              <label style={labelStyle}>Email address <span style={{ color: '#d5281b' }}>*</span></label>
              <span style={hintStyle}>We'll send appointment confirmations here</span>
              <input
                type="email" name="email" value={formData.email}
                onChange={handleChange} required
                placeholder="john.smith@email.com"
                style={inputStyle}
              />
            </div>

            {/* Password with strength checker */}
            <div style={fieldStyle}>
              <label style={labelStyle}>Password <span style={{ color: '#d5281b' }}>*</span></label>

              {/* Input with eye toggle */}
              <div style={{ position: 'relative', width: '100%' }}>
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password" value={formData.password}
                  onChange={handleChange} required
                  onFocus={() => setPasswordFocused(true)}
                  placeholder="Create a strong password"
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

              {/* Strength bar — shows when user starts typing */}
              {passwordFocused && formData.password.length > 0 && (
                <div style={{ marginTop: '10px' }}>

                  {/* Bar */}
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                    <div style={{ flex: 1, height: '6px', background: '#e0e0e0', borderRadius: '3px', overflow: 'hidden' }}>
                      <div style={{ height: '100%', width: strength.width, background: strength.bg, borderRadius: '3px', transition: 'width 0.3s ease, background 0.3s ease' }}></div>
                    </div>
                    <span style={{ fontSize: '12px', fontWeight: '500', color: strength.color, minWidth: '70px', textAlign: 'right' }}>
                      {strength.label}
                    </span>
                  </div>

                  {/* Rules checklist */}
                  <div style={{ background: '#f8f9fa', border: '0.5px solid #d8dde0', borderRadius: '6px', padding: '10px 14px' }}>
                    {rules.map(rule => (
                      <div key={rule.id} style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '3px 0' }}>
                        <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: rule.pass ? '#007f3b' : '#e0e0e0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, transition: 'background 0.2s' }}>
                          {rule.pass && (
                            <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                              <polyline points="20 6 9 17 4 12"/>
                            </svg>
                          )}
                        </div>
                        <span style={{ fontSize: '12px', color: rule.pass ? '#007f3b' : '#4c6272', transition: 'color 0.2s' }}>
                          {rule.label}
                        </span>
                      </div>
                    ))}
                  </div>

                </div>
              )}
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

            {/* Submit */}
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

          <p style={{ textAlign: 'center', fontSize: '15px', color: '#4c6272' }}>
            Already have an account?{' '}
            <Link to="/login" style={{ color: '#005EB8', textDecoration: 'underline', fontSize: '14.5px' }}>Sign in here</Link>
          </p>

        </div>
      </div>
    </div>
  )
}