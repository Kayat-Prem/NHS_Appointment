import { useState } from 'react'
import API from '../utils/api'
import toast from 'react-hot-toast'
import { useNavigate, Link } from 'react-router-dom'

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
    <div
      style={{
        minHeight: '100vh',
        width: '100%',
        background: '#f0f4f5'
      }}
    >
     
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

      <div
        style={{
          minHeight: 'calc(100vh - 52px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          padding: '40px 20px'
        }}
      >
        <div
          style={{
            background: '#fff',
            borderRadius: '8px',
            padding: '32px',
            width: '100%',
            maxWidth: '460px',
            border: '0.5px solid #d8dde0'
          }}
        >
          {!sent ? (
            <>
              <h1
                style={{
                  fontSize: '24px',
                  fontWeight: '500',
                  color: '#212b32',
                  marginBottom: '6px'
                }}
              >
                Forgot your password?
              </h1>

              <p
                style={{
                  fontSize: '14.5px',
                  color: '#4c6272',
                  marginBottom: '24px'
                }}
              >
                Enter your registered email address to reset your password.
              </p>

              <hr
                style={{
                  border: 'none',
                  borderTop: '1px solid #d8dde0',
                  marginBottom: '24px'
                }}
              />

              <form onSubmit={handleSubmit}>
                <label
                  style={{
                    display: 'block',
                    fontSize: '14px',
                    fontWeight: '500',
                    color: '#212b32',
                    marginBottom: '6px'
                  }}
                >
                  Email address
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  style={{
                    width: '100%',
                    padding: '10px 14px',
                    border: '2px solid #4c6272',
                    borderRadius: '4px',
                    fontSize: '15px',
                    marginBottom: '20px',
                    boxSizing: 'border-box'
                  }}
                />

                <button
                  type="submit"
                  disabled={loading}
                  style={{
                    width: '100%',
                    padding: '12px',
                    background: loading ? '#4c6272' : '#005EB8',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '4px',
                    cursor: loading ? 'not-allowed' : 'pointer',
                    fontSize: '15px'
                  }}
                >
                  {loading ? 'Generating link...' : 'Get reset link'}
                </button>
              </form>

              <hr
                style={{
                  border: 'none',
                  borderTop: '1px solid #d8dde0',
                  margin: '24px 0'
                }}
              />

              <p
                style={{
                  textAlign: 'center',
                  fontSize: '15px',
                  color: '#4c6272'
                }}
              >
                Remember your password?{' '}
                <Link
                  to="/login"
                  style={{
                    color: '#005EB8',
                    textDecoration: 'underline',
                    fontSize: '15px'
                  }}
                >
                  Sign in here
                </Link>
              </p>
            </>
          ) : (
            <>
              <div
                style={{
                  textAlign: 'center',
                  marginBottom: '20px'
                }}
              >
                <div
                  style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: '#E1F5EE',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    margin: '0 auto 16px',
                    fontSize: '28px'
                  }}
                >
                  🔑
                </div>

                <h1
                  style={{
                    fontSize: '22px',
                    fontWeight: '500',
                    color: '#212b32',
                    marginBottom: '8px'
                  }}
                >
                  Reset link ready
                </h1>

                <p
                  style={{
                    fontSize: '14px',
                    color: '#4c6272'
                  }}
                >
                  Click the button below to reset your password for{' '}
                  <strong>{email}</strong>
                </p>
              </div>

              {resetLink && (
                <a
                  href={resetLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{
                    display: 'block',
                    width: '100%',
                    padding: '14px',
                    background: '#007f3b',
                    color: '#fff',
                    borderRadius: '4px',
                    textAlign: 'center',
                    textDecoration: 'none',
                    fontSize: '15px',
                    fontWeight: '500',
                    marginBottom: '12px'
                  }}
                >
                  Reset my password →
                </a>
              )}

              <div
                style={{
                  background: '#E6F1FB',
                  borderLeft: '4px solid #005EB8',
                  padding: '10px 14px',
                  borderRadius: '0 4px 4px 0',
                  color: '#0C447C',
                  fontSize: '13px',
                  marginBottom: '16px'
                }}
              >
                This link expires in <strong>1 hour</strong>. Use it now to set
                your new password.
              </div>

              <button
                onClick={() => {
                  setSent(false)
                  setResetLink('')
                }}
                style={{
                  width: '100%',
                  padding: '10px',
                  background: '#fff',
                  color: '#212b32',
                  border: '1px solid #d8dde0',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  marginBottom: '10px',
                  fontSize: '15px'
                }}
              >
                Try a different email
              </button>

              <p
                style={{
                  textAlign: 'center',
                  fontSize: '14px',
                  color: '#4c6272'
                }}
              >
                <Link
                  to="/login"
                  style={{
                    color: '#005EB8',
                    textDecoration: 'underline',
                    fontSize: '15px'
                  }}
                >
                  Back to sign in
                </Link>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  )
}