import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import API from '../utils/api'
import toast from 'react-hot-toast'
import signInImage from '../assets/SignInPage.jpg'

export default function Login() {
  const { login } = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ email: '', password: '' })
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value })

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
        if (role === 'patient')     navigate('/patient/dashboard')
        else if (role === 'gp')    navigate('/gp/dashboard')
        else if (role === 'admin') navigate('/admin/dashboard')
      }, 1000)
    } catch (err) {
      const status = err.response?.status
      if (status === 401)    toast.error('Incorrect email or password')
      else if (!err.response) toast.error('Cannot connect to server')
      else toast.error(err.response?.data?.message || 'Login failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div style={{ minHeight: '100vh', width: '100%', background: '#f0f4f5', display: 'flex', flexDirection: 'column' }}>

      {/* NHS Header */}
      <div style={{ background: '#005EB8', padding: '0 24px', display: 'flex', alignItems: 'center', height: '52px', flexShrink: 0 }}>
        <div onClick={() => navigate('/')} style={{ display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer' }}>
          <span style={{ background: '#fff', color: '#005EB8', fontSize: '13px', fontWeight: '700', padding: '3px 8px', borderRadius: '4px', letterSpacing: '1px' }}>NHS</span>
          <span style={{ color: '#fff', fontSize: '15px', fontWeight: '500' }}>GP Appointment Booking Service</span>
        </div>
      </div>

      {/* ── Two-column layout ── */}
      <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>

        {/* ── Left panel — image + info ── */}
        <div style={{
          flex: '0 0 45%',
          background: '#003087',
          position: 'relative',
          overflow: 'hidden',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '48px 40px',
          minHeight: '100%',
        }}>
          {/* Decorative circles */}
          <div style={{ position: 'absolute', top: '-80px', right: '-80px', width: '320px', height: '320px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', zIndex: 0 }}></div>
          <div style={{ position: 'absolute', bottom: '-60px', left: '-60px', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', zIndex: 0 }}></div>
          <div style={{ position: 'absolute', top: '35%', left: '-30px', width: '160px', height: '160px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)', zIndex: 0 }}></div>

          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', width: '100%', maxWidth: '360px' }}>

            {/* NHS badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.12)', borderRadius: '20px', padding: '6px 16px', marginBottom: '28px' }}>
              <span style={{ background: '#fff', color: '#003087', fontSize: '11px', fontWeight: '800', padding: '2px 7px', borderRadius: '3px', letterSpacing: '1px' }}>NHS</span>
              <span style={{ color: '#fff', fontSize: '13px', fontWeight: '600', letterSpacing: '0.5px' }}>SECURE SIGN IN</span>
            </div>

            {/* Heading */}
            <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#fff', lineHeight: '1.25', marginBottom: '16px' }}>
              Welcome back
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.82)', lineHeight: '1.7', marginBottom: '36px' }}>
              Sign in to manage your GP appointments, view your health records, and access all NHS digital services in one place.
            </p>

            {/* Image */}
            <div style={{ position: 'relative', margin: '0 auto 32px', display: 'inline-block' }}>
              <div style={{ width: '240px', height: '240px', borderRadius: '50%', background: 'rgba(255,255,255,0.10)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                <img
                  src={signInImage}
                  alt="Sign in to NHS GP services"
                  style={{ width: '220px', height: '220px', objectFit: 'contain', filter: 'drop-shadow(0 12px 32px rgba(0,0,0,0.25))' }}
                />
              </div>
              {/* Floating badge */}
              <div style={{ position: 'absolute', bottom: '8px', left: '-12px', background: '#005EB8', borderRadius: '8px', padding: '8px 14px', boxShadow: '0 4px 16px rgba(0,0,0,0.25)' }}>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', marginBottom: '2px' }}>PROTECTED BY</div>
                <div style={{ fontSize: '13px', fontWeight: '700', color: '#fff' }}>NHS Security</div>
              </div>
            </div>

            {/* Role cards */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left', marginBottom: '24px' }}>
              {[
                { icon: 'ti-user-heart',       color: '#7dd3a8', role: 'Patient',        desc: 'Book & manage appointments' },
                { icon: 'ti-stethoscope',       color: '#93c5fd', role: 'GP / Doctor',    desc: 'Manage schedule & patients' },
                { icon: 'ti-building-hospital', color: '#c4b5fd', role: 'Administrator',  desc: 'Practice-wide oversight' },
              ].map(item => (
                <div key={item.role} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.08)', borderRadius: '8px', padding: '10px 14px' }}>
                  <i className={`ti ${item.icon}`} style={{ color: item.color, fontSize: '20px', flexShrink: 0 }} aria-hidden="true"></i>
                  <div>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: '#fff' }}>{item.role}</div>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.65)' }}>{item.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Register link */}
            <div style={{ padding: '14px', background: 'rgba(255,255,255,0.08)', borderRadius: '8px', fontSize: '14px', color: 'rgba(255,255,255,0.82)' }}>
              New patient?{' '}
              <span
                onClick={() => navigate('/register')}
                style={{ color: '#7dd3a8', fontWeight: '700', textDecoration: 'underline', cursor: 'pointer' }}
              >
                Create a free account
              </span>
            </div>
          </div>
        </div>

        {/* ── Right panel — sign in form ── */}
        <div style={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '24px 32px',
          overflowY: 'auto',
          background: '#f0f4f5',
        }}>
          <div style={{ background: '#fff', borderRadius: '8px', padding: '40px 44px', width: '100%', maxWidth: '560px', border: '0.5px solid #d8dde0' }}>


            {/* Form header */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#E6F1FB', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <i className="ti ti-lock" style={{ color: '#005EB8', fontSize: '20px' }} aria-hidden="true"></i>
              </div>
              <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#212b32', margin: 0 }}>Sign in</h1>
            </div>
            <p style={{ fontSize: '14px', color: '#4c6272', marginBottom: '24px' }}>Use your NHS login details to continue</p>
            <hr style={{ border: 'none', borderTop: '1px solid #d8dde0', marginBottom: '24px' }} />

            <form onSubmit={handleSubmit}>

              {/* Email */}
              <div style={{ marginBottom: '18px' }}>
                <label style={{ display: 'block', fontSize: '16px', fontWeight: '500', color: '#212b32', marginBottom: '6px' }}>
                  Email address
                </label>
                <input
                  type="email" name="email" value={formData.email}
                  onChange={handleChange} required
                  placeholder="e.g. john.smith@email.com"
                  style={{
                    width: '100%', padding: '13px 16px',
                    border: '2px solid #4c6272', borderRadius: '4px',
                    fontSize: '16px', color: '#212b32',
                    fontFamily: 'inherit', outline: 'none',
                    background: '#ffffff', colorScheme: 'light',
                    boxSizing: 'border-box',
                  }}
                />
              </div>

              {/* Password */}
              <div style={{ marginBottom: '8px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <label style={{ fontSize: '16px', fontWeight: '500', color: '#212b32' }}>Password</label>
                </div>
                <div style={{ position: 'relative' }}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    name="password" value={formData.password}
                    onChange={handleChange} required
                    placeholder="Enter your password"
                    style={{
                      width: '100%', padding: '13px 48px 13px 16px',
                      border: '2px solid #4c6272', borderRadius: '4px',
                      fontSize: '16px', color: '#212b32',
                      fontFamily: 'inherit', outline: 'none',
                      background: '#ffffff', colorScheme: 'light',
                      boxSizing: 'border-box',
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#4c6272', padding: 0, display: 'flex', alignItems: 'center' }}
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

              {/* Sign in button */}
              <button
                type="submit" disabled={loading}
                style={{ width: '100%', padding: '15px', background: loading ? '#4c6272' : '#005EB8', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '18px', fontWeight: '700', cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'inherit', marginTop: '24px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}>
                {loading ? 'Signing in...' : (
                  <>
                    <i className="ti ti-login" style={{ fontSize: '18px' }} aria-hidden="true"></i>
                    Sign in
                  </>
                )}
              </button>

            </form>

            {/* Password label with forgot link */}         
             <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>            <label style={{ fontSize: '14px', fontWeight: '500', color: '#212b32' }}>            </label>            <Link to="/forgot-password" style={{ fontSize: '14.5px', color: '#005EB8', textDecoration: 'underline', marginTop: '16px' }}>              Forgot password?            </Link>          </div>

            <hr style={{ border: 'none', borderTop: '1px solid #d8dde0', margin: '24px 0' }} />

          

            {/* Role quick info */}
            <div style={{ background: '#f0f4f5', borderRadius: '8px', padding: '14px 16px', marginBottom: '20px' }}>
              <div style={{ fontSize: '12px', fontWeight: '700', color: '#4c6272', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Signing in as</div>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                {[
                  { label: 'Patient',       color: '#007f3b', bg: '#E1F5EE' },
                  { label: 'GP',            color: '#005EB8', bg: '#E6F1FB' },
                  { label: 'Admin',         color: '#534AB7', bg: '#EEEDFE' },
                ].map(item => (
                  <span key={item.label} style={{ background: item.bg, color: item.color, fontSize: '12px', fontWeight: '600', padding: '4px 12px', borderRadius: '20px' }}>
                    {item.label}
                  </span>
                ))}
              </div>
              <div style={{ fontSize: '12px', color: '#4c6272', marginTop: '8px' }}>
                Your dashboard is loaded automatically based on your role.
              </div>
            </div>

            <p style={{ textAlign: 'center', fontSize: '15px', color: '#4c6272', margin: 0 }}>
              Don't have an account?{' '}
              <Link to="/register" style={{ color: '#005EB8', textDecoration: 'underline', fontSize: '14.5px' }}>Register here</Link>
            </p>

          </div>
        </div>
      </div>
    </div>
  )
}




{/* Test credentials */}
          {/* <div style={{ marginTop: '16px', padding: '12px', background: '#f0f4f5', borderRadius: '4px', borderLeft: '4px solid #005EB8' }}>
            <p style={{ fontSize: '12px', fontWeight: '500', color: '#005EB8', marginBottom: '6px' }}>Test accounts</p>
            <p style={{ fontSize: '12px', color: '#4c6272' }}>GP: gp@nhs.com / gp123456</p>
            <p style={{ fontSize: '12px', color: '#4c6272' }}>Admin: admin@nhs.com / admin123</p>
            <p style={{ fontSize: '12px', color: '#4c6272' }}>Patient: your registered email</p>
          </div> */}
