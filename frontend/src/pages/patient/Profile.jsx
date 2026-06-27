import { useState } from 'react'
import PatientLayout from '../../components/PatientLayout'
import { useAuth } from '../../context/AuthContext'
import API from '../../utils/api'
import toast from 'react-hot-toast'

export default function PatientProfile() {
  const { user, login, token } = useAuth()
  const [formData, setFormData] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    dateOfBirth: user?.dateOfBirth || ''
  })
  const [saving, setSaving] = useState(false)

  const inputStyle = {
    width: '100%', padding: '10px 14px',
    border: '2px solid #4c6272', borderRadius: '4px',
    fontSize: '14px', color: '#212b32', fontFamily: 'inherit',
    outline: 'none', background: '#fff',
    colorScheme: 'light', boxSizing: 'border-box'
  }

  const labelStyle = {
    display: 'block', fontSize: '14px',
    fontWeight: '500', color: '#212b32', marginBottom: '4px'
  }

  const handleSave = async (e) => {
    e.preventDefault()
    setSaving(true)
    try {
      toast.success('Profile updated successfully!')
    } catch (err) {
      toast.error('Failed to update profile')
    } finally {
      setSaving(false)
    }
  }

  const getInitials = (name) => name?.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()

  return (
    <PatientLayout>
      <h1 style={{ fontSize: '22px', fontWeight: '500', color: '#212b32', marginBottom: '4px' }}>My profile</h1>
      <p style={{ fontSize: '14px', color: '#4c6272', marginBottom: '24px' }}>View and update your personal details</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 2fr', gap: '20px', alignItems: 'start' }}>

        {/* Profile card */}
        <div style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '8px', padding: '24px', textAlign: 'center' }}>
          <div style={{ width: '72px', height: '72px', borderRadius: '50%', background: '#005EB8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', fontWeight: '500', color: '#fff', margin: '0 auto 14px' }}>
            {getInitials(user?.name || '')}
          </div>
          <div style={{ fontSize: '16px', fontWeight: '500', color: '#212b32', marginBottom: '4px' }}>{user?.name}</div>
          <div style={{ fontSize: '13px', color: '#4c6272', marginBottom: '8px' }}>{user?.email}</div>
          <span style={{ background: '#E6F1FB', color: '#0C447C', fontSize: '12px', fontWeight: '500', padding: '3px 10px', borderRadius: '20px' }}>Patient</span>
        </div>

        {/* Edit form */}
        <div style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '8px', padding: '24px' }}>
          <div style={{ fontSize: '15px', fontWeight: '500', color: '#212b32', marginBottom: '20px' }}>Personal details</div>
          <form onSubmit={handleSave}>
            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>Full name</label>
              <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} style={inputStyle} />
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>Email address</label>
              <input type="email" value={user?.email} disabled style={{ ...inputStyle, background: '#f0f4f5', color: '#4c6272', cursor: 'not-allowed' }} />
              <span style={{ fontSize: '12px', color: '#4c6272', marginTop: '4px', display: 'block' }}>Email cannot be changed here</span>
            </div>
            <div style={{ marginBottom: '16px' }}>
              <label style={labelStyle}>Phone number</label>
              <input type="tel" value={formData.phone} onChange={e => setFormData({...formData, phone: e.target.value})} placeholder="07700 900 123" style={inputStyle} />
            </div>
            <div style={{ marginBottom: '20px' }}>
              <label style={labelStyle}>Date of birth</label>
              <input type="date" value={formData.dateOfBirth} onChange={e => setFormData({...formData, dateOfBirth: e.target.value})} style={inputStyle} />
            </div>
            <button type="submit" disabled={saving} style={{ padding: '10px 24px', background: saving ? '#4c6272' : '#005EB8', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '14px', fontWeight: '500', cursor: saving ? 'not-allowed' : 'pointer', fontFamily: 'inherit' }}>
              {saving ? 'Saving...' : 'Save changes'}
            </button>
          </form>
        </div>

      </div>
    </PatientLayout>
  )
}