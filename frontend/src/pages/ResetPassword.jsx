import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import API from '../utils/api'
import toast from 'react-hot-toast'

export default function ResetPassword() {
  const [searchParams] = useSearchParams()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ newPassword: '', confirmPassword: '' })
  const [showPassword, setShowPassword] = useState(false)
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const token = searchParams.get('token')
  const email = searchParams.get('email')

  useEffect(() => {
    console.log('Token from URL:', token)
    console.log('Email from URL:', email)
    if (!token || !email) {
      toast.error('Invalid reset link')
      navigate('/login')
    }
  }, [token, email, navigate])

  const eyeIcon = (show) => show ? (
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
  )

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (formData.newPassword !== formData.confirmPassword) {
      toast.error('Passwords do not match')
      return
    }
    if (formData.newPassword.length < 6) {
      toast.error('Password must be at least 6 characters')
      return
    }
    setLoading(true)
    try {
      await API.post('/auth/reset-password', {
        email,
        token,
        newPassword: formData.newPassword
      })
      setSuccess(true)
      toast.success('Password reset successfully!')
    } catch (err) {
      toast.error(err.response?.data?.message || 'Reset failed — link may have expired')
    } finally {
      setLoading(false)
    }
  }

  const inputStyle = {
    width: '100%', padding: '10px 14px',
    border: '2px solid #4c6272', borderRadius: '4px',
    fontSize: '15px', color: '#212b32', fontFamily: 'inherit',
    outline: 'none', background: '#fff',
    colorScheme: 'light', boxSizing: 'border-box'
  }

  return (
    <div style={{ minHeight: '100vh', width: '100%', background: '#f0f4f5' }}>

      {/* NHS Header */}
      <div style={{ background: '#005EB8', padding: '0 24px', display: 'flex', alignItems: 'center', height: '52px' }}>
        <span style={{ background: '#fff', color: '#005EB8', fontSize: '13px', fontWeight: '700', padding: '3px 8px', borderRadius: '4px', letterSpacing: '1px' }}>NHS</span>
        <span style={{ color: '#fff', fontSize: '15px', fontWeight: '500', marginLeft: '12px' }}>GP Appointment Booking Service</span>
      </div>

      <div style={{ minHeight: 'calc(100vh - 52px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 20px' }}>
        <div style={{ background: '#fff', borderRadius: '8px', padding: '32px', width: '100%', maxWidth: '420px', border: '0.5px solid #d8dde0' }}>

          {!success ? (
            <>
              <h1 style={{ fontSize: '24px', fontWeight: '500', color: '#212b32', marginBottom: '6px' }}>Set new password</h1>
              <p style={{ fontSize: '14px', color: '#4c6272', marginBottom: '24px' }}>
                Resetting password for <strong>{email}</strong>
              </p>
              <hr style={{ border: 'none', borderTop: '1px solid #d8dde0', marginBottom: '24px' }} />

              <form onSubmit={handleSubmit}>

                {/* New password */}
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#212b32', marginBottom: '6px' }}>
                  New password
                </label>
                <div style={{ position: 'relative', marginBottom: '16px' }}>
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={formData.newPassword}
                    onChange={e => setFormData({ ...formData, newPassword: e.target.value })}
                    placeholder="Min. 6 characters"
                    style={{ ...inputStyle, paddingRight: '44px' }}
                    required
                  />
                  <button type="button" onClick={() => setShowPassword(!showPassword)}
                    style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#4c6272', padding: 0, display: 'flex', alignItems: 'center' }}>
                    {eyeIcon(showPassword)}
                  </button>
                </div>

                {/* Confirm password */}
                <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#212b32', marginBottom: '6px' }}>
                  Confirm new password
                </label>
                <input
                  type={showPassword ? 'text' : 'password'}
                  value={formData.confirmPassword}
                  onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })}
                  placeholder="Repeat your password"
                  style={{ ...inputStyle, marginBottom: '8px' }}
                  required
                />

                {/* Password match indicator */}
                {formData.confirmPassword && (
                  <div style={{ fontSize: '13px', marginBottom: '16px', color: formData.newPassword === formData.confirmPassword ? '#007f3b' : '#d5281b' }}>
                    {formData.newPassword === formData.confirmPassword ? '✓ Passwords match' : '✗ Passwords do not match'}
                  </div>
                )}

                <button
                  type="submit" disabled={loading}
                  style={{ width: '100%', padding: '12px', background: loading ? '#4c6272' : '#007f3b', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '15px', fontWeight: '500', cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                >
                  {loading ? 'Resetting...' : 'Reset password'}
                </button>
              </form>
            </>
          ) : (
            /* Success state */
            <div style={{ textAlign: 'center' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '28px' }}>
                ✅
              </div>
              <h1 style={{ fontSize: '22px', fontWeight: '500', color: '#212b32', marginBottom: '8px' }}>Password reset!</h1>
              <p style={{ fontSize: '14px', color: '#4c6272', marginBottom: '24px' }}>
                Your password has been updated successfully. You can now sign in with your new password.
              </p>
              <button
                onClick={() => navigate('/login')}
                style={{ width: '100%', padding: '12px', background: '#005EB8', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '15px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit' }}
              >
                Sign in now
              </button>
            </div>
          )}

        </div>
      </div>
    </div>
  )
}