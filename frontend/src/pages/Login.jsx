import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import API from '../utils/api'
import toast from 'react-hot-toast'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!formData.email || !formData.password) {
      toast.error('Please fill in all fields')
      return
    }
    setLoading(true)
    try {
      const res = await API.post('/auth/login', formData)
      login(res.data.user, res.data.token)
      toast.success(`Welcome back, ${res.data.user.name}!`)
      setTimeout(() => {
        const role = res.data.user.role
        if (role === 'patient') navigate('/patient/dashboard')
        else if (role === 'gp') navigate('/gp/dashboard')
        else if (role === 'admin') navigate('/admin/dashboard')
      }, 1000)
    } catch (err) {
      const status = err.response?.status
      if (status === 401) toast.error('Incorrect email or password')
      else if (!err.response) toast.error('Cannot connect to server')
      else toast.error(err.response?.data?.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    width: '100%', padding: '8px 12px',
    border: '2px solid #4c6272', borderRadius: '4px',
    fontSize: '16px', color: '#212b32',
    fontFamily: 'inherit', outline: 'none',
    background: '#ffffff', colorScheme: 'light'
  }

  return (
    <div style={{ minHeight: '100vh', width: '100%', background: '#f0f4f5' }}>

      {/* NHS Blue Header */}
      <div style={{ background: '#005EB8', padding: '14px 24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
        <span style={{ background: '#fff', color: '#005EB8', fontSize: '13px', fontWeight: '700', padding: '3px 8px', borderRadius: '4px', letterSpacing: '1px' }}>NHS</span>
        <span style={{ color: '#fff', fontSize: '15px', fontWeight: '500' }}>GP Appointment Booking Service</span>
      </div>

      {/* Centered Card */}
      <div style={{ minHeight: 'calc(100vh - 52px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
        <div style={{ background: '#fff', borderRadius: '8px', padding: '32px', width: '100%', maxWidth: '420px', border: '0.5px solid #d8dde0' }}>

          <h1 style={{ fontSize: '24px', fontWeight: '500', color: '#212b32', marginBottom: '6px' }}>Sign in</h1>
          <p style={{ fontSize: '14px', color: '#4c6272', marginBottom: '24px' }}>Use your NHS login details to continue</p>
          <hr style={{ border: 'none', borderTop: '1px solid #d8dde0', marginBottom: '24px' }} />

          <form onSubmit={handleSubmit}>

            {/* Email */}
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#212b32', marginBottom: '6px' }}>
              Email address
            </label>
            <input
                type="email" name="email" value={formData.email}
                onChange={handleChange} required
                placeholder="e.g. john.smith@email.com"
                style={{
                  width: '100%', padding: '8px 12px',
                  border: '2px solid #4c6272', borderRadius: '4px',
                  fontSize: '16px', color: '#212b32',
                  marginBottom: '16px', fontFamily: 'inherit',
                  outline: 'none', background: '#ffffff',
                  colorScheme: 'light', boxSizing: 'border-box'
                }}
            />

            {/* Password with eye toggle */}
            <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#212b32', marginBottom: '6px' }}>
              Password
            </label>
          <div style={{ position: 'relative', marginBottom: '20px', width: '100%' }}>
            <input
              type={showPassword ? 'text' : 'password'}
              name="password" value={formData.password}
              onChange={handleChange} required
              placeholder="Enter your password"
              style={{
                width: '100%', padding: '8px 12px',
                border: '2px solid #4c6272', borderRadius: '4px',
                fontSize: '16px', color: '#212b32',
                fontFamily: 'inherit', outline: 'none',
                background: '#ffffff', colorScheme: 'light',
                paddingRight: '44px',
                boxSizing: 'border-box'
              }}
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

            <button
              type="submit" disabled={loading}
              style={{ width: '100%', padding: '12px', background: loading ? '#4c6272' : '#005EB8', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '16px', fontWeight: '500', cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
            >
              {loading ? (
                <>
                  <svg className="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                  </svg>
                  Signing in...
                </>
              ) : 'Sign in'}
            </button>

          </form>

          <hr style={{ border: 'none', borderTop: '1px solid #d8dde0', margin: '24px 0' }} />

          <p style={{ textAlign: 'center', fontSize: '14px', color: '#4c6272' }}>
            Don't have an account?{' '}
            <Link to="/register" style={{ color: '#005EB8', textDecoration: 'underline' }}>Register here</Link>
          </p>

          {/* Test credentials */}
          {/* <div style={{ marginTop: '16px', padding: '12px', background: '#f0f4f5', borderRadius: '4px', borderLeft: '4px solid #005EB8' }}>
            <p style={{ fontSize: '12px', fontWeight: '500', color: '#005EB8', marginBottom: '6px' }}>Test accounts</p>
            <p style={{ fontSize: '12px', color: '#4c6272' }}>GP: gp@nhs.com / gp123456</p>
            <p style={{ fontSize: '12px', color: '#4c6272' }}>Admin: admin@nhs.com / admin123</p>
            <p style={{ fontSize: '12px', color: '#4c6272' }}>Patient: your registered email</p>
          </div> */}

        </div>
      </div>
    </div>
  )
}