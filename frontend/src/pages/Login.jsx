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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validation toasts
    if (!formData.email || !formData.password) {
      toast.error('Please fill in all fields')
      return
    }
    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters')
      return
    }

    setLoading(true)

    try {
      const res = await API.post('/auth/login', formData)
      login(res.data.user, res.data.token)

      toast.success(`Welcome back, ${res.data.user.name}! 👋`)

      // Small delay so user sees the success toast
      setTimeout(() => {
        const role = res.data.user.role
        if (role === 'patient') navigate('/patient/dashboard')
        else if (role === 'gp') navigate('/gp/dashboard')
        else if (role === 'admin') navigate('/admin/dashboard')
      }, 1000)

    } catch (err) {
      const status = err.response?.status
      const message = err.response?.data?.message

      if (status === 401) {
        if (message === 'Invalid email or password') {
          toast.error('Incorrect email or password. Please try again.')
        } else {
          toast.error('Login failed. Please check your credentials.')
        }
      } else if (status === 404) {
        toast.error('No account found with this email.')
      } else if (status === 500) {
        toast.error('Server error. Please try again later.')
      } else if (!err.response) {
        toast.error('Cannot connect to server. Make sure backend is running.')
      } else {
        toast.error(message || 'Login failed. Please try again.')
      }

    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">

        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-700 text-white text-sm font-bold px-2 py-1 rounded">
            NHS
          </div>
          <h1 className="text-xl font-semibold text-gray-800">
            GP Appointment System
          </h1>
        </div>

        <h2 className="text-lg font-medium text-gray-700 mb-6">Sign in</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Email address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="••••••••"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-blue-700 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
                Signing in...
              </>
            ) : 'Sign in'}
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-4 text-center">
          Don't have an account?{' '}
          <Link to="/register" className="text-blue-700 hover:underline">
            Register here
          </Link>
        </p>

        {/* Test credentials */}
        <div className="mt-6 p-3 bg-gray-50 rounded-lg border border-gray-200">
          <p className="text-xs font-medium text-gray-500 mb-2">Test accounts:</p>
          <p className="text-xs text-gray-400">GP: gp@nhs.com / gp123456</p>
          <p className="text-xs text-gray-400">Admin: admin@nhs.com / admin123</p>
          <p className="text-xs text-gray-400">Patient: your registered email</p>
        </div>

      </div>
    </div>
  )
}