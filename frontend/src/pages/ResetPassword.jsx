import { useState, useEffect } from 'react'
import { useNavigate, useSearchParams, Link } from 'react-router-dom'
import API from '../utils/api'
import toast from 'react-hot-toast'
import resetImage from '../assets/ResetPassword.jpg'

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
    width: '100%', padding: '13px 16px',
    border: '2px solid #4c6272', borderRadius: '4px',
    fontSize: '16px', color: '#212b32', fontFamily: 'inherit',
    outline: 'none', background: '#fff',
    colorScheme: 'light', boxSizing: 'border-box'
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

      {/* Two-column layout */}
      <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>

        {/* Left panel */}
        <div style={{ flex: '0 0 45%', background: '#212b32', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '48px 40px', minHeight: '100%' }}>

          {/* Decorative circles */}
          <div style={{ position: 'absolute', top: '-80px', left: '-80px', width: '320px', height: '320px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)', zIndex: 0 }}></div>
          <div style={{ position: 'absolute', bottom: '-60px', right: '-60px', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)', zIndex: 0 }}></div>
          <div style={{ position: 'absolute', top: '30%', right: '-40px', width: '200px', height: '200px', borderRadius: '50%', background: 'rgba(0,94,184,0.15)', zIndex: 0 }}></div>
          <div style={{ position: 'absolute', bottom: '20%', left: '-40px', width: '160px', height: '160px', borderRadius: '50%', background: 'rgba(0,127,59,0.15)', zIndex: 0 }}></div>

          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', width: '100%', maxWidth: '360px' }}>

            {/* NHS badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.10)', borderRadius: '20px', padding: '6px 16px', marginBottom: '24px' }}>
              <span style={{ background: '#005EB8', color: '#fff', fontSize: '11px', fontWeight: '800', padding: '2px 7px', borderRadius: '3px', letterSpacing: '1px' }}>NHS</span>
              <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '13px', fontWeight: '600', letterSpacing: '0.5px' }}>SECURE RESET</span>
            </div>

            {/* Heading */}
            <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#fff', lineHeight: '1.25', marginBottom: '14px' }}>
              {success ? 'All done!' : 'Set a new password'}
            </h2>
            <p style={{ fontSize: '15px', color: 'rgba(255,255,255,0.75)', lineHeight: '1.7', marginBottom: '32px' }}>
              {success
                ? 'Your password has been successfully updated. You can now sign in with your new credentials.'
                : 'Create a strong new password for your NHS account. Make sure it is something you will remember but others cannot guess.'}
            </p>

            {/* Image — the plague doctor looks amazing on dark bg */}
            <div style={{ position: 'relative', margin: '0 auto 28px', display: 'inline-block' }}>
              <div style={{ width: '260px', height: '260px', borderRadius: '50%', background: 'rgba(0,94,184,0.15)', border: '2px solid rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto', overflow: 'hidden' }}>
                <img
                  src={resetImage}
                  alt="Reset your NHS password"
                  style={{ width: '260px', height: '260px', objectFit: 'cover', objectPosition: 'center top', filter: 'drop-shadow(0 8px 24px rgba(0,0,0,0.5))' }}
                />
              </div>
              {/* Badge */}
              <div style={{ position: 'absolute', bottom: '8px', right: '-8px', background: '#005EB8', borderRadius: '8px', padding: '8px 14px', boxShadow: '0 4px 16px rgba(0,0,0,0.4)' }}>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', marginBottom: '2px' }}>SECURED BY</div>
                <div style={{ fontSize: '13px', fontWeight: '700', color: '#fff' }}>NHS Encryption</div>
              </div>
            </div>

            {/* Password tips */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', textAlign: 'left', marginBottom: '24px' }}>
              <div style={{ fontSize: '12px', fontWeight: '700', color: 'rgba(255,255,255,0.5)', letterSpacing: '1px', textTransform: 'uppercase', marginBottom: '4px' }}>
                Password tips
              </div>
              {[
                { icon: 'ti-check', color: '#7dd3a8', text: 'At least 8 characters long' },
                { icon: 'ti-check', color: '#7dd3a8', text: 'Mix uppercase and lowercase letters' },
                { icon: 'ti-check', color: '#7dd3a8', text: 'Include at least one number' },
                { icon: 'ti-check', color: '#7dd3a8', text: 'Add a special character (!@#$)' },
                { icon: 'ti-x',     color: '#fca5a5', text: 'Do not reuse your old password' },
              ].map((tip, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px', background: 'rgba(255,255,255,0.06)', borderRadius: '8px', padding: '9px 12px' }}>
                  <i className={`ti ${tip.icon}`} style={{ color: tip.color, fontSize: '16px', flexShrink: 0 }} aria-hidden="true"></i>
                  <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)' }}>{tip.text}</span>
                </div>
              ))}
            </div>

            {/* Back to login */}
            <div style={{ padding: '12px', background: 'rgba(255,255,255,0.07)', borderRadius: '8px', fontSize: '14px', color: 'rgba(255,255,255,0.75)' }}>
              Remember your password?{' '}
              <span onClick={() => navigate('/login')} style={{ color: '#7dd3a8', fontWeight: '700', textDecoration: 'underline', cursor: 'pointer' }}>
                Sign in here
              </span>
            </div>

          </div>
        </div>

        {/* Right panel */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px 32px', overflowY: 'auto', background: '#f0f4f5' }}>
          <div style={{ background: '#fff', borderRadius: '8px', padding: '40px 44px', width: '100%', maxWidth: '560px', border: '0.5px solid #d8dde0' }}>

            {!success ? (

              /* RESET FORM */
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#212b32', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="ti ti-lock" style={{ color: '#fff', fontSize: '22px' }} aria-hidden="true"></i>
                  </div>
                  <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#212b32', margin: 0 }}>Set new password</h1>
                </div>
                <p style={{ fontSize: '15px', color: '#4c6272', marginBottom: '8px' }}>
                  Resetting password for <strong style={{ color: '#212b32' }}>{email}</strong>
                </p>
                <hr style={{ border: 'none', borderTop: '1px solid #d8dde0', margin: '20px 0 24px' }} />

                <form onSubmit={handleSubmit}>

                  {/* New password */}
                  <div style={{ marginBottom: '20px' }}>
                    <label style={{ display: 'block', fontSize: '16px', fontWeight: '500', color: '#212b32', marginBottom: '8px' }}>
                      New password
                    </label>
                    <div style={{ position: 'relative' }}>
                      <input
                        type={showPassword ? 'text' : 'password'}
                        value={formData.newPassword}
                        onChange={e => setFormData({ ...formData, newPassword: e.target.value })}
                        placeholder="Min. 6 characters"
                        style={{ ...inputStyle, paddingRight: '48px' }}
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        style={{ position: 'absolute', right: '12px', top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', cursor: 'pointer', color: '#4c6272', padding: 0, display: 'flex', alignItems: 'center' }}
                      >
                        {eyeIcon(showPassword)}
                      </button>
                    </div>
                  </div>

                  {/* Confirm password */}
                  <div style={{ marginBottom: '12px' }}>
                    <label style={{ display: 'block', fontSize: '16px', fontWeight: '500', color: '#212b32', marginBottom: '8px' }}>
                      Confirm new password
                    </label>
                    <input
                      type={showPassword ? 'text' : 'password'}
                      value={formData.confirmPassword}
                      onChange={e => setFormData({ ...formData, confirmPassword: e.target.value })}
                      placeholder="Repeat your password"
                      style={inputStyle}
                      required
                    />
                  </div>

                  {/* Password match indicator */}
                  {formData.confirmPassword.length > 0 && (
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '14px', marginBottom: '20px', color: formData.newPassword === formData.confirmPassword ? '#007f3b' : '#d5281b' }}>
                      <i className={`ti ${formData.newPassword === formData.confirmPassword ? 'ti-circle-check' : 'ti-circle-x'}`} style={{ fontSize: '18px' }} aria-hidden="true"></i>
                      {formData.newPassword === formData.confirmPassword ? 'Passwords match' : 'Passwords do not match'}
                    </div>
                  )}

                  {/* Security note */}
                  <div style={{ background: '#f0f4f5', borderLeft: '4px solid #212b32', padding: '12px 16px', borderRadius: '0 6px 6px 0', marginBottom: '24px', fontSize: '14px', color: '#4c6272' }}>
                    <strong style={{ color: '#212b32' }}>Security note:</strong> After resetting, you will be signed out of all other devices automatically.
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    style={{ width: '100%', padding: '15px', background: loading ? '#4c6272' : '#212b32', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '18px', fontWeight: '700', cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                  >
                    {loading ? 'Resetting...' : (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <i className="ti ti-lock-check" style={{ fontSize: '20px' }} aria-hidden="true"></i>
                        Reset password
                      </span>
                    )}
                  </button>

                </form>

                <hr style={{ border: 'none', borderTop: '1px solid #d8dde0', margin: '28px 0' }} />

                <p style={{ textAlign: 'center', fontSize: '15px', color: '#4c6272', margin: 0 }}>
                  <Link to="/login" style={{ color: '#005EB8', textDecoration: 'underline' }}>
                    Back to sign in
                  </Link>
                </p>
              </div>

            ) : (

              /* SUCCESS STATE */
              <div style={{ textAlign: 'center' }}>

                {/* Success icon */}
                <div style={{ width: '90px', height: '90px', borderRadius: '50%', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <i className="ti ti-circle-check" style={{ color: '#007f3b', fontSize: '48px' }} aria-hidden="true"></i>
                </div>

                <h1 style={{ fontSize: '30px', fontWeight: '700', color: '#212b32', marginBottom: '10px' }}>
                  Password reset!
                </h1>
                <p style={{ fontSize: '15px', color: '#4c6272', lineHeight: '1.7', marginBottom: '28px' }}>
                  Your password has been updated successfully for{' '}
                  <strong style={{ color: '#212b32' }}>{email}</strong>.
                  You can now sign in with your new password.
                </p>

                {/* Image on success */}
                <div style={{ margin: '0 auto 28px', width: '160px', height: '160px', borderRadius: '50%', background: '#f0f4f5', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
                  <img
                    src={resetImage}
                    alt="Password reset success"
                    style={{ width: '160px', height: '160px', objectFit: 'cover', objectPosition: 'center top', opacity: 0.85 }}
                  />
                </div>

                {/* What changed */}
                <div style={{ background: '#E1F5EE', borderRadius: '8px', padding: '16px', marginBottom: '24px', textAlign: 'left' }}>
                  <div style={{ fontSize: '13px', fontWeight: '700', color: '#007f3b', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>What happened</div>
                  {[
                    'Your password has been securely updated',
                    'All previous sessions have been invalidated',
                    'You can now sign in with your new password',
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                      <i className="ti ti-check" style={{ color: '#007f3b', fontSize: '16px', flexShrink: 0 }} aria-hidden="true"></i>
                      <span style={{ fontSize: '14px', color: '#212b32' }}>{item}</span>
                    </div>
                  ))}
                </div>

                <button
                  onClick={() => navigate('/login')}
                  style={{ width: '100%', padding: '15px', background: '#005EB8', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '18px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                >
                  <i className="ti ti-login" style={{ fontSize: '20px' }} aria-hidden="true"></i>
                  Sign in now
                </button>

              </div>
            )}

          </div>
        </div>

      </div>
    </div>
  )
}