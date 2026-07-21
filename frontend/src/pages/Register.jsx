import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import API from '../utils/api'
import toast from 'react-hot-toast'
import registerImage from '../assets/RegisterPage.jpg'

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
  else if (passed <= 1)      strength = { label: 'Very weak',   color: '#d5281b', bg: '#d5281b', width: '20%' }
  else if (passed === 2)     strength = { label: 'Weak',        color: '#d5281b', bg: '#d5281b', width: '40%' }
  else if (passed === 3)     strength = { label: 'Fair',        color: '#ffb81c', bg: '#ffb81c', width: '60%' }
  else if (passed === 4)     strength = { label: 'Strong',      color: '#007f3b', bg: '#007f3b', width: '80%' }
  else                       strength = { label: 'Very strong', color: '#007f3b', bg: '#007f3b', width: '100%' }
  return { rules, passed, strength }
}

export default function Register() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '', email: '', password: '',
    dateOfBirth: '', phone: ''
  })
  const [loading, setLoading]           = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [passwordFocused, setPasswordFocused] = useState(false)

  const { rules, passed, strength } = checkPasswordStrength(formData.password)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

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
    <div style={{ minHeight: '100vh', width: '100%', background: '#f0f4f5', display: 'flex', flexDirection: 'column' }}>

      {/* NHS Header */}
      <div style={{ background: '#005EB8', padding: '0 24px', display: 'flex', alignItems: 'center', height: '52px', flexShrink: 0 }}>
        <div
          onClick={() => navigate('/')}
          style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}
        >
          <span style={{ background: '#fff', color: '#005EB8', fontSize: '13px', fontWeight: '700', padding: '3px 8px', borderRadius: '4px', letterSpacing: '1px' }}>NHS</span>
          <span style={{ color: '#fff', fontSize: '15px', fontWeight: '500' }}>GP Appointment Booking Service</span>
        </div>
      </div>

      {/* ── Two-column layout ── */}
      <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>

        {/* ── Left panel — image + info ── */}
        <div style={{
          flex: '0 0 45%',
          background: '#005EB8',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px 40px',
          minHeight: '100%',
        }}>
          {/* Background decorative circles */}
          <div style={{ position: 'absolute', top: '-80px', left: '-80px', width: '320px', height: '320px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', zIndex: 0 }}></div>
          <div style={{ position: 'absolute', bottom: '-60px', right: '-60px', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', zIndex: 0 }}></div>
          <div style={{ position: 'absolute', top: '40%', right: '-40px', width: '180px', height: '180px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)', zIndex: 0 }}></div>

          {/* Content */}
          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', width: '100%', maxWidth: '360px' }}>

            {/* NHS badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.15)', borderRadius: '20px', padding: '6px 16px', marginBottom: '28px' }}>
              <span style={{ background: '#fff', color: '#005EB8', fontSize: '11px', fontWeight: '800', padding: '2px 7px', borderRadius: '3px', letterSpacing: '1px' }}>NHS</span>
              <span style={{ color: '#fff', fontSize: '13px', fontWeight: '600', letterSpacing: '0.5px' }}>DIGITAL SERVICE</span>
            </div>

            {/* Heading */}
            <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#fff', lineHeight: '1.25', marginBottom: '16px' }}>
              Your health, your way
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', lineHeight: '1.7', marginBottom: '36px' }}>
              Create your NHS account to book GP appointments online, manage your health records, and access NHS services — anytime, anywhere.
            </p>

            {/* Image */}
            <div style={{ position: 'relative', margin: '0 auto 32px', display: 'inline-block' }}>
              <div style={{ width: '240px', height: '240px', borderRadius: '50%', background: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                <img
                  src={registerImage}
                  alt="Register for NHS GP services"
                  style={{ width: '220px', height: '220px', objectFit: 'contain', filter: 'drop-shadow(0 12px 32px rgba(0,0,0,0.2))' }}
                />
              </div>
              {/* Floating badge */}
              <div style={{ position: 'absolute', bottom: '8px', right: '-12px', background: '#007f3b', borderRadius: '8px', padding: '8px 14px', boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', marginBottom: '2px' }}>REGISTRATION</div>
                <div style={{ fontSize: '13px', fontWeight: '700', color: '#fff' }}>Free & secure</div>
              </div>
            </div>

            {/* Feature bullets */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left' }}>
              {[
                { icon: 'ti-calendar-plus', text: 'Book GP appointments online 24/7' },
                { icon: 'ti-shield-check',  text: 'Secure NHS-grade data protection' },
                { icon: 'ti-mail',          text: 'Instant email appointment confirmation' },
                { icon: 'ti-clock',         text: 'No more waiting on hold' },
              ].map(item => (
                <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', padding: '10px 14px' }}>
                  <i className={`ti ${item.icon}`} style={{ color: '#7dd3a8', fontSize: '18px', flexShrink: 0 }} aria-hidden="true"></i>
                  <span style={{ fontSize: '14px', color: '#fff', fontWeight: '500' }}>{item.text}</span>
                </div>
              ))}
            </div>

            {/* Already have account */}
            <div style={{ marginTop: '28px', padding: '14px', background: 'rgba(255,255,255,0.1)', borderRadius: '8px', fontSize: '14px', color: 'rgba(255,255,255,0.85)' }}>
              Already registered?{' '}
              <span
                onClick={() => navigate('/login')}
                style={{ color: '#fff', fontWeight: '700', textDecoration: 'underline', cursor: 'pointer' }}
              >
                Sign in here
              </span>
            </div>
          </div>
        </div>

        {/* ── Right panel — form ── */}
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 32px',
          overflowY: 'auto',
          background: '#f0f4f5',
        }}>
          <div style={{ background: '#fff', borderRadius: '8px', padding: '36px', width: '100%', maxWidth: '460px', border: '0.5px solid #d8dde0' }}>

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

                {/* Strength bar */}
                {passwordFocused && formData.password.length > 0 && (
                  <div style={{ marginTop: '10px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
                      <div style={{ flex: 1, height: '6px', background: '#e0e0e0', borderRadius: '3px', overflow: 'hidden' }}>
                        <div style={{ height: '100%', width: strength.width, background: strength.bg, borderRadius: '3px', transition: 'width 0.3s ease, background 0.3s ease' }}></div>
                      </div>
                      <span style={{ fontSize: '12px', fontWeight: '500', color: strength.color, minWidth: '70px', textAlign: 'right' }}>
                        {strength.label}
                      </span>
                    </div>
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
                {loading ? 'Creating account...' : 'Create account'}
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
    </div>
  )
}