import { useNavigate, Link, useLocation } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import toast from 'react-hot-toast'

export default function PatientLayout({ children }) {
  const { user, logout } = useAuth()
  const navigate = useNavigate()
  const location = useLocation()

  const handleLogout = () => {
    logout()
    toast.success('Logged out successfully')
    navigate('/login')
  }

  const navItems = [
    { path: '/patient/dashboard',    label: 'Dashboard',        icon: 'ti-layout-dashboard' },
    { path: '/patient/book',         label: 'Book appointment', icon: 'ti-calendar-plus' },
    { path: '/patient/appointments', label: 'My appointments',  icon: 'ti-calendar' },
    { path: '/patient/profile',      label: 'My profile',       icon: 'ti-user' },
  ]

  return (
    <div style={{ minHeight: '100vh', background: '#f0f4f5', display: 'flex', flexDirection: 'column' }}>

      {/* NHS Header */}
      <div style={{ background: '#005EB8', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '52px', flexShrink: 0 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ background: '#fff', color: '#005EB8', fontSize: '13px', fontWeight: '700', padding: '3px 8px', borderRadius: '4px', letterSpacing: '1px' }}>NHS</span>
          <span style={{ color: '#fff', fontSize: '15px', fontWeight: '500' }}>GP Appointment Booking Service</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '13px' }}>Welcome, {user?.name}</span>
          <button onClick={handleLogout} style={{ background: 'transparent', border: '1px solid rgba(255,255,255,0.5)', color: '#fff', padding: '4px 12px', borderRadius: '4px', fontSize: '13px', cursor: 'pointer', fontFamily: 'inherit' }}>
            Log out
          </button>
        </div>
      </div>

      <div style={{ display: 'flex', flex: 1 }}>

        {/* Sidebar */}
        <div style={{ width: '220px', background: '#fff', borderRight: '0.5px solid #d8dde0', padding: '20px 0', flexShrink: 0 }}>
          <div style={{ padding: '0 16px 16px', fontSize: '11px', fontWeight: '500', color: '#4c6272', textTransform: 'uppercase', letterSpacing: '.5px' }}>
            Patient Portal
          </div>
          {navItems.map(item => (
            <Link
              key={item.path}
              to={item.path}
              style={{
                display: 'flex', alignItems: 'center', gap: '10px',
                padding: '10px 16px', fontSize: '14px', textDecoration: 'none',
                color: location.pathname === item.path ? '#005EB8' : '#212b32',
                background: location.pathname === item.path ? '#E6F1FB' : 'transparent',
                borderLeft: location.pathname === item.path ? '3px solid #005EB8' : '3px solid transparent',
                fontWeight: location.pathname === item.path ? '500' : '400'
              }}
            >
              <i className={`ti ${item.icon}`} aria-hidden="true" style={{ fontSize: '16px' }}></i>
              {item.label}
            </Link>
          ))}
        </div>

        {/* Main content */}
        <div style={{ flex: 1, padding: '28px', overflowY: 'auto' }}>
          {children}
        </div>
      </div>
    </div>
  )
}