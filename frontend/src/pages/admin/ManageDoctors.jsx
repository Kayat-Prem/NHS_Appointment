import { useState, useEffect } from 'react'
import AdminLayout from '../../components/AdminLayout'
import API from '../../utils/api'
import toast from 'react-hot-toast'

const inputStyle = {
  width: '100%', padding: '8px 12px',
  border: '2px solid #4c6272', borderRadius: '4px',
  fontSize: '14px', color: '#212b32', fontFamily: 'inherit',
  outline: 'none', background: '#fff',
  colorScheme: 'light', boxSizing: 'border-box'
}

const labelStyle = {
  display: 'block', fontSize: '13px',
  fontWeight: '500', color: '#212b32', marginBottom: '4px'
}

export default function ManageDoctors() {
  const [doctors, setDoctors]       = useState([])
  const [loading, setLoading]       = useState(true)
  const [showAddForm, setShowAddForm] = useState(false)
  const [editDoctor, setEditDoctor] = useState(null)
  const [resetDoctor, setResetDoctor] = useState(null)
  const [newPassword, setNewPassword] = useState('')
  const [creating, setCreating]     = useState(false)
  const [updating, setUpdating]     = useState(false)

  const [formData, setFormData] = useState({
    name: '', email: '', password: '', specialisation: ''
  })
  const [editData, setEditData] = useState({
    name: '', email: '', specialisation: ''
  })

  const fetchDoctors = async () => {
    try {
      const res = await API.get('/admin/doctors')
      setDoctors(res.data)
    } catch (err) {
      toast.error('Failed to load doctors')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchDoctors() }, [])

  // ── CREATE ──────────────────────────────────────
  const handleCreate = async (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.password) {
      toast.error('Name, email and password are required')
      return
    }
    if (formData.password.length < 6) {
      toast.error('Password must be at least 6 characters')
      return
    }
    setCreating(true)
    try {
      await API.post('/admin/doctors', formData)
      toast.success(`Dr. ${formData.name} account created!`)
      setFormData({ name: '', email: '', password: '', specialisation: '' })
      setShowAddForm(false)
      fetchDoctors()
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to create doctor')
    } finally {
      setCreating(false)
    }
  }

  // ── UPDATE ──────────────────────────────────────
  const openEdit = (doctor) => {
    setEditDoctor(doctor)
    setEditData({ name: doctor.name, email: doctor.email, specialisation: doctor.specialisation || '' })
  }

  const handleUpdate = async (e) => {
    e.preventDefault()
    setUpdating(true)
    try {
      await API.put(`/admin/doctors/${editDoctor._id}`, editData)
      toast.success('Doctor updated successfully!')
      setEditDoctor(null)
      fetchDoctors()
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to update doctor')
    } finally {
      setUpdating(false)
    }
  }

  // ── RESET PASSWORD ──────────────────────────────
  const handleResetPassword = async (e) => {
    e.preventDefault()
    if (!newPassword || newPassword.length < 6) {
      toast.error('Password must be at least 6 characters')
      return
    }
    try {
      await API.put(`/admin/doctors/${resetDoctor._id}/reset-password`, { newPassword })
      toast.success(`Password reset for ${resetDoctor.name}`)
      setResetDoctor(null)
      setNewPassword('')
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to reset password')
    }
  }

  // ── DELETE ──────────────────────────────────────
  const handleDelete = async (doctor) => {
    if (!window.confirm(`Are you sure you want to remove Dr. ${doctor.name}? This cannot be undone.`)) return
    try {
      await API.delete(`/admin/doctors/${doctor._id}`)
      toast.success(`Dr. ${doctor.name} removed`)
      fetchDoctors()
    } catch (err) {
      toast.error('Failed to remove doctor')
    }
  }

  const getInitials = (name) => name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()

  return (
    <AdminLayout>

      {/* Header */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
        <div>
          <h1 style={{ fontSize: '22px', fontWeight: '500', color: '#212b32', margin: 0 }}>Manage Doctors</h1>
          <p style={{ fontSize: '14px', color: '#4c6272', marginTop: '4px' }}>
            {doctors.length} doctor{doctors.length !== 1 ? 's' : ''} registered
          </p>
        </div>
        <button
          onClick={() => { setShowAddForm(!showAddForm); setEditDoctor(null); setResetDoctor(null) }}
          style={{ padding: '10px 20px', background: showAddForm ? '#4c6272' : '#005EB8', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '14px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit' }}
        >
          {showAddForm ? 'Cancel' : '+ Add new doctor'}
        </button>
      </div>

      {/* ── ADD FORM ── */}
      {showAddForm && (
        <div style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '8px', padding: '24px', marginBottom: '20px', borderLeft: '4px solid #005EB8' }}>
          <h2 style={{ fontSize: '16px', fontWeight: '500', color: '#212b32', marginBottom: '20px' }}>Create new GP account</h2>
          <form onSubmit={handleCreate}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
              <div>
                <label style={labelStyle}>Full name *</label>
                <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="e.g. Dr. Sarah Patel" style={inputStyle} required />
              </div>
              <div>
                <label style={labelStyle}>Specialisation</label>
                <input type="text" value={formData.specialisation} onChange={e => setFormData({...formData, specialisation: e.target.value})} placeholder="e.g. General Practice" style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Email address *</label>
                <input type="email" value={formData.email} onChange={e => setFormData({...formData, email: e.target.value})} placeholder="dr.patel@nhs.com" style={inputStyle} required />
              </div>
              <div>
                <label style={labelStyle}>Temporary password *</label>
                <input type="password" value={formData.password} onChange={e => setFormData({...formData, password: e.target.value})} placeholder="Min. 6 characters" style={inputStyle} required />
              </div>
            </div>
            <div style={{ background: '#fff8e6', borderLeft: '4px solid #ffb81c', padding: '8px 12px', borderRadius: '0 4px 4px 0', marginBottom: '16px', fontSize: '13px', color: '#6a4c00' }}>
              Share the email and temporary password with the doctor so they can log in.
            </div>
            <button type="submit" disabled={creating} style={{ padding: '10px 24px', background: creating ? '#4c6272' : '#007f3b', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '14px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit' }}>
              {creating ? 'Creating...' : 'Create doctor account'}
            </button>
          </form>
        </div>
      )}

      {/* ── EDIT FORM ── */}
      {editDoctor && (
        <div style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '8px', padding: '24px', marginBottom: '20px', borderLeft: '4px solid #ffb81c' }}>
          <h2 style={{ fontSize: '16px', fontWeight: '500', color: '#212b32', marginBottom: '20px' }}>Edit — {editDoctor.name}</h2>
          <form onSubmit={handleUpdate}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
              <div>
                <label style={labelStyle}>Full name</label>
                <input type="text" value={editData.name} onChange={e => setEditData({...editData, name: e.target.value})} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Specialisation</label>
                <input type="text" value={editData.specialisation} onChange={e => setEditData({...editData, specialisation: e.target.value})} style={inputStyle} />
              </div>
              <div>
                <label style={labelStyle}>Email address</label>
                <input type="email" value={editData.email} onChange={e => setEditData({...editData, email: e.target.value})} style={inputStyle} />
              </div>
            </div>
            <div style={{ display: 'flex', gap: '10px' }}>
              <button type="submit" disabled={updating} style={{ padding: '8px 20px', background: updating ? '#4c6272' : '#005EB8', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit' }}>
                {updating ? 'Saving...' : 'Save changes'}
              </button>
              <button type="button" onClick={() => setEditDoctor(null)} style={{ padding: '8px 20px', background: '#fff', color: '#212b32', border: '1px solid #d8dde0', borderRadius: '4px', fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit' }}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ── RESET PASSWORD FORM ── */}
      {resetDoctor && (
        <div style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '8px', padding: '24px', marginBottom: '20px', borderLeft: '4px solid #d5281b' }}>
          <h2 style={{ fontSize: '16px', fontWeight: '500', color: '#212b32', marginBottom: '8px' }}>Reset password — {resetDoctor.name}</h2>
          <p style={{ fontSize: '13px', color: '#4c6272', marginBottom: '16px' }}>Set a new temporary password for this doctor.</p>
          <form onSubmit={handleResetPassword}>
            <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-end' }}>
              <div style={{ flex: 1 }}>
                <label style={labelStyle}>New password</label>
                <input type="password" value={newPassword} onChange={e => setNewPassword(e.target.value)} placeholder="Min. 6 characters" style={inputStyle} required />
              </div>
              <button type="submit" style={{ padding: '8px 20px', background: '#d5281b', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit', marginBottom: '0' }}>
                Reset
              </button>
              <button type="button" onClick={() => { setResetDoctor(null); setNewPassword('') }} style={{ padding: '8px 20px', background: '#fff', color: '#212b32', border: '1px solid #d8dde0', borderRadius: '4px', fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit' }}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      )}

      {/* ── DOCTORS LIST ── */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px', color: '#4c6272' }}>Loading doctors...</div>
      ) : doctors.length === 0 ? (
        <div style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '8px', padding: '40px', textAlign: 'center' }}>
          <p style={{ color: '#4c6272', fontSize: '15px' }}>No doctors registered yet.</p>
          <p style={{ color: '#4c6272', fontSize: '13px', marginTop: '6px' }}>Click "Add new doctor" to create the first GP account.</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {doctors.map(doctor => (
            <div key={doctor._id} style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '8px', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '16px' }}>

              {/* Avatar */}
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#E6F1FB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '500', color: '#0C447C', flexShrink: 0 }}>
                {getInitials(doctor.name)}
              </div>

              {/* Info */}
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '15px', fontWeight: '500', color: '#212b32' }}>{doctor.name}</div>
                <div style={{ fontSize: '13px', color: '#4c6272', marginTop: '2px' }}>
                  {doctor.specialisation || 'General Practice'} · {doctor.email}
                </div>
                <div style={{ fontSize: '12px', color: '#4c6272', marginTop: '2px' }}>
                  Joined: {new Date(doctor.createdAt).toLocaleDateString('en-GB')}
                </div>
              </div>

              {/* Status badge */}
              <span style={{ background: '#E1F5EE', color: '#085041', fontSize: '12px', fontWeight: '500', padding: '3px 10px', borderRadius: '20px', flexShrink: 0 }}>
                Active
              </span>

              {/* Action buttons */}
              <div style={{ display: 'flex', gap: '8px', flexShrink: 0 }}>
                <button
                  onClick={() => { openEdit(doctor); setShowAddForm(false); setResetDoctor(null) }}
                  style={{ padding: '6px 14px', background: '#fff', color: '#005EB8', border: '1px solid #005EB8', borderRadius: '4px', fontSize: '13px', cursor: 'pointer', fontFamily: 'inherit' }}
                >
                  Edit
                </button>
                <button
                  onClick={() => { setResetDoctor(doctor); setShowAddForm(false); setEditDoctor(null) }}
                  style={{ padding: '6px 14px', background: '#fff', color: '#6a4c00', border: '1px solid #ffb81c', borderRadius: '4px', fontSize: '13px', cursor: 'pointer', fontFamily: 'inherit' }}
                >
                  Reset password
                </button>
                <button
                  onClick={() => handleDelete(doctor)}
                  style={{ padding: '6px 14px', background: '#fff', color: '#d5281b', border: '1px solid #d5281b', borderRadius: '4px', fontSize: '13px', cursor: 'pointer', fontFamily: 'inherit' }}
                >
                  Remove
                </button>
              </div>

            </div>
          ))}
        </div>
      )}

    </AdminLayout>
  )
}