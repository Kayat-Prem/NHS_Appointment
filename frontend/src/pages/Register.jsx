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

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Validation toasts
    if (!formData.name || !formData.email || !formData.password) {
      toast.error('Please fill in all required fields')
      return
    }
    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters')
      return
    }
    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      toast.error('Please enter a valid email address')
      return
    }

    setLoading(true)

    try {
      await API.post('/auth/register', { ...formData, role: 'patient' })
      toast.success('Account created successfully! Please sign in.')
      setTimeout(() => navigate('/login'), 1500)

    } catch (err) {
      const status = err.response?.status
      const message = err.response?.data?.message

      if (status === 400 && message === 'Email already registered') {
        toast.error('This email is already registered. Please sign in.')
      } else if (status === 500) {
        toast.error('Server error. Please try again later.')
      } else if (!err.response) {
        toast.error('Cannot connect to server. Make sure backend is running.')
      } else {
        toast.error(message || 'Registration failed. Please try again.')
      }

    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center py-8">
      <div className="bg-white p-8 rounded-xl shadow-md w-full max-w-md">

        <div className="flex items-center gap-3 mb-6">
          <div className="bg-blue-700 text-white text-sm font-bold px-2 py-1 rounded">
            NHS
          </div>
          <h1 className="text-xl font-semibold text-gray-800">
            GP Appointment System
          </h1>
        </div>

        <h2 className="text-lg font-medium text-gray-700 mb-1">
          Create patient account
        </h2>
        <p className="text-sm text-gray-400 mb-6">
          GP and Admin accounts are created by the administrator.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Full name <span className="text-red-400">*</span>
            </label>
            <input
              type="text" name="name" value={formData.name}
              onChange={handleChange} required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="John Smith"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Email address <span className="text-red-400">*</span>
            </label>
            <input
              type="email" name="email" value={formData.email}
              onChange={handleChange} required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="your@email.com"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Password <span className="text-red-400">*</span>
            </label>
            <input
              type="password" name="password" value={formData.password}
              onChange={handleChange} required
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Min. 6 characters"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Date of birth
            </label>
            <input
              type="date" name="dateOfBirth" value={formData.dateOfBirth}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm text-gray-600 mb-1">
              Phone number
            </label>
            <input
              type="tel" name="phone" value={formData.phone}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="07700 900 123"
            />
          </div>

          <button
            type="submit" disabled={loading}
            className="w-full bg-blue-700 text-white py-2 rounded-lg text-sm font-medium hover:bg-blue-800 transition disabled:opacity-50 flex items-center justify-center gap-2"
          >
            {loading ? (
              <>
                <svg className="animate-spin h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z"></path>
                </svg>
                Creating account...
              </>
            ) : 'Create account'}
          </button>
        </form>

        <p className="text-sm text-gray-500 mt-4 text-center">
          Already have an account?{' '}
          <Link to="/login" className="text-blue-700 hover:underline">
            Sign in here
          </Link>
        </p>

      </div>
    </div>
  )
}