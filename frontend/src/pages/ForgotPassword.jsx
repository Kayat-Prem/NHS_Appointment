import { useState } from 'react'
import API from '../utils/api'
import toast from 'react-hot-toast'
import { useNavigate, Link } from 'react-router-dom'
import forgotImage from '../assets/ForgotPassword.png'

export default function ForgotPassword() {
  const [email, setEmail] = useState('')
  const [loading, setLoading] = useState(false)
  const [sent, setSent] = useState(false)
  const [resetLink, setResetLink] = useState('')
  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!email) {
      toast.error('Please enter your email address')
      return
    }
    setLoading(true)
    try {
      const res = await API.post('/auth/forgot-password', { email })
      setResetLink(res.data.resetUrl || '')
      setSent(true)
      toast.success('Reset link generated!')
    } catch (err) {
      toast.error(err.response?.data?.message || 'Something went wrong')
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

      {/* Two-column layout */}
      <div style={{ flex: 1, display: 'flex', minHeight: 0 }}>

        {/* Left panel */}
        <div style={{ flex: '0 0 45%', background: '#007f3b', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '48px 40px', minHeight: '100%' }}>

          {/* Decorative circles */}
          <div style={{ position: 'absolute', top: '-80px', left: '-80px', width: '320px', height: '320px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', zIndex: 0 }}></div>
          <div style={{ position: 'absolute', bottom: '-60px', right: '-60px', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', zIndex: 0 }}></div>
          <div style={{ position: 'absolute', top: '40%', right: '-30px', width: '180px', height: '180px', borderRadius: '50%', background: 'rgba(255,255,255,0.04)', zIndex: 0 }}></div>

          <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', width: '100%', maxWidth: '360px' }}>

            {/* NHS badge */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(255,255,255,0.15)', borderRadius: '20px', padding: '6px 16px', marginBottom: '28px' }}>
              <span style={{ background: '#fff', color: '#007f3b', fontSize: '11px', fontWeight: '800', padding: '2px 7px', borderRadius: '3px', letterSpacing: '1px' }}>NHS</span>
              <span style={{ color: '#fff', fontSize: '13px', fontWeight: '600', letterSpacing: '0.5px' }}>PASSWORD RESET</span>
            </div>

            {/* Heading */}
            <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#fff', lineHeight: '1.25', marginBottom: '16px' }}>
              {sent ? 'Check your email' : 'Forgot your password?'}
            </h2>
            <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', lineHeight: '1.7', marginBottom: '36px' }}>
              {sent
                ? 'Your password reset link has been generated. Click it to create a new password before it expires.'
                : 'No need to worry — enter your registered email address and we will send you a secure link to reset your password instantly.'}
            </p>

            {/* Image */}
            <div style={{ position: 'relative', margin: '0 auto 32px', display: 'inline-block' }}>
              <div style={{ width: '240px', height: '240px', borderRadius: '50%', background: 'rgba(255,255,255,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
                <img
                  src={forgotImage}
                  alt="Forgot password"
                  style={{ width: '220px', height: '220px', objectFit: 'contain', filter: 'drop-shadow(0 12px 32px rgba(0,0,0,0.15))' }}
                />
              </div>
              {/* Badge */}
              <div style={{ position: 'absolute', bottom: '8px', right: '-12px', background: '#005EB8', borderRadius: '8px', padding: '8px 14px', boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}>
                <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', marginBottom: '2px' }}>LINK EXPIRES IN</div>
                <div style={{ fontSize: '13px', fontWeight: '700', color: '#fff' }}>1 hour</div>
              </div>
            </div>

            {/* Steps */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', textAlign: 'left' }}>
              {[
                { num: '1', icon: 'ti-mail',        text: 'Enter your registered email address' },
                { num: '2', icon: 'ti-link',         text: 'Receive a secure reset link instantly' },
                { num: '3', icon: 'ti-lock-open',    text: 'Create a new strong password' },
                { num: '4', icon: 'ti-circle-check', text: 'Sign back in to your account' },
              ].map(step => (
                <div key={step.num} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(255,255,255,0.10)', borderRadius: '8px', padding: '10px 14px' }}>
                  <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontSize: '13px', fontWeight: '700', color: '#fff' }}>{step.num}</span>
                  </div>
                  <i className={`ti ${step.icon}`} style={{ color: '#7dd3a8', fontSize: '18px', flexShrink: 0 }} aria-hidden="true"></i>
                  <span style={{ fontSize: '14px', color: '#fff', fontWeight: '500' }}>{step.text}</span>
                </div>
              ))}
            </div>

            {/* Remember password */}
            <div style={{ marginTop: '24px', padding: '14px', background: 'rgba(255,255,255,0.10)', borderRadius: '8px', fontSize: '14px', color: 'rgba(255,255,255,0.85)' }}>
              Remember your password?{' '}
              <span onClick={() => navigate('/login')} style={{ color: '#fff', fontWeight: '700', textDecoration: 'underline', cursor: 'pointer' }}>
                Sign in here
              </span>
            </div>

          </div>
        </div>

        {/* Right panel */}
        <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px 32px', overflowY: 'auto', background: '#f0f4f5' }}>
          <div style={{ background: '#fff', borderRadius: '8px', padding: '40px 44px', width: '100%', maxWidth: '560px', border: '0.5px solid #d8dde0' }}>

            {!sent ? (

              /* REQUEST FORM */
              <div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '8px' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className="ti ti-lock-open" style={{ color: '#007f3b', fontSize: '22px' }} aria-hidden="true"></i>
                  </div>
                  <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#212b32', margin: 0 }}>Reset password</h1>
                </div>

                <p style={{ fontSize: '15px', color: '#4c6272', marginBottom: '28px' }}>
                  Enter your registered email address and we will generate a secure reset link for you.
                </p>

                <hr style={{ border: 'none', borderTop: '1px solid #d8dde0', marginBottom: '28px' }} />

                <form onSubmit={handleSubmit}>
                  <label style={{ display: 'block', fontSize: '16px', fontWeight: '500', color: '#212b32', marginBottom: '8px' }}>
                    Email address
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    required
                    style={{ width: '100%', padding: '13px 16px', border: '2px solid #4c6272', borderRadius: '4px', fontSize: '16px', color: '#212b32', fontFamily: 'inherit', outline: 'none', background: '#fff', colorScheme: 'light', boxSizing: 'border-box', marginBottom: '24px' }}
                  />

                  <div style={{ background: '#E6F1FB', borderLeft: '4px solid #005EB8', padding: '12px 16px', borderRadius: '0 6px 6px 0', marginBottom: '24px', fontSize: '14px', color: '#0C447C' }}>
                    <strong>How it works:</strong> We will generate a secure reset link that expires in 1 hour. Click the link to set a new password.
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    style={{ width: '100%', padding: '15px', background: loading ? '#4c6272' : '#007f3b', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '18px', fontWeight: '700', cursor: loading ? 'not-allowed' : 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px' }}
                  >
                    {loading ? 'Generating link...' : (
                      <span style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <i className="ti ti-send" style={{ fontSize: '20px' }} aria-hidden="true"></i>
                        Get reset link
                      </span>
                    )}
                  </button>
                </form>

                <hr style={{ border: 'none', borderTop: '1px solid #d8dde0', margin: '28px 0' }} />

                <p style={{ textAlign: 'center', fontSize: '15px', color: '#4c6272', margin: 0 }}>
                  Remember your password?{' '}
                  <Link to="/login" style={{ color: '#005EB8', textDecoration: 'underline' }}>Sign in here</Link>
                </p>
              </div>

            ) : (

              /* SUCCESS STATE */
              <div>
                <div style={{ textAlign: 'center', marginBottom: '28px' }}>
                  <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                    <i className="ti ti-circle-check" style={{ color: '#007f3b', fontSize: '40px' }} aria-hidden="true"></i>
                  </div>
                  <h1 style={{ fontSize: '28px', fontWeight: '700', color: '#212b32', marginBottom: '10px' }}>Reset link ready!</h1>
                  <p style={{ fontSize: '15px', color: '#4c6272', lineHeight: '1.6' }}>
                    A password reset link has been generated for{' '}
                    <strong style={{ color: '#212b32' }}>{email}</strong>
                  </p>
                </div>

                <div style={{ textAlign: 'center', marginBottom: '24px' }}>
                  <img
                    src={forgotImage}
                    alt="Check your email"
                    style={{ width: '120px', height: '120px', objectFit: 'contain', opacity: 0.85 }}
                  />
                </div>

                {resetLink && (
                  <a
                    href={resetLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', width: '100%', padding: '15px', background: '#007f3b', color: '#fff', borderRadius: '4px', textDecoration: 'none', fontSize: '18px', fontWeight: '700', marginBottom: '16px', boxSizing: 'border-box' }}
                  >
                    <i className="ti ti-lock-open" style={{ fontSize: '20px' }} aria-hidden="true"></i>
                    Reset my password
                  </a>
                )}

                <div style={{ background: '#fff8e6', borderLeft: '4px solid #ffb81c', padding: '12px 16px', borderRadius: '0 6px 6px 0', color: '#6a4c00', fontSize: '14px', marginBottom: '20px' }}>
                  <strong>Important:</strong> This link expires in <strong>1 hour</strong>. Use it now to set your new password.
                </div>

                <button
                  onClick={() => { setSent(false); setResetLink('') }}
                  style={{ width: '100%', padding: '13px', background: '#fff', color: '#212b32', border: '2px solid #d8dde0', borderRadius: '4px', cursor: 'pointer', fontSize: '16px', fontWeight: '500', fontFamily: 'inherit', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
                >
                  <i className="ti ti-refresh" style={{ fontSize: '18px' }} aria-hidden="true"></i>
                  Try a different email
                </button>

                <p style={{ textAlign: 'center', fontSize: '15px', color: '#4c6272', margin: 0 }}>
                  <Link to="/login" style={{ color: '#005EB8', textDecoration: 'underline' }}>
                    Back to sign in
                  </Link>
                </p>
              </div>

            )}

          </div>
        </div>

      </div>
    </div>
  )
}
