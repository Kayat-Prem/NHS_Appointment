import { useState, useEffect } from 'react'
import AdminLayout from '../../components/AdminLayout'
import API from '../../utils/api'
import toast from 'react-hot-toast'

export default function AdminPatients() {
  const [patients, setPatients] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  const fetchPatients = async () => {
    try {
      const res = await API.get('/admin/patients')
      setPatients(res.data)
    } catch (err) {
      toast.error('Failed to load patients')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchPatients() }, [])

  const handleDelete = async (patient) => {
    if (!window.confirm(`Remove patient ${patient.name}? This cannot be undone.`)) return
    try {
      await API.delete(`/admin/patients/${patient._id}`)
      toast.success(`${patient.name} removed`)
      fetchPatients()
    } catch (err) {
      toast.error('Failed to remove patient')
    }
  }

  const getInitials = (name) => name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()

  const filtered = patients.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase()) ||
    p.email.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <AdminLayout>
      <h1 style={{ fontSize: '22px', fontWeight: '500', color: '#212b32', marginBottom: '6px' }}>Patients</h1>
      <p style={{ fontSize: '14px', color: '#4c6272', marginBottom: '24px' }}>
        {patients.length} patient{patients.length !== 1 ? 's' : ''} registered
      </p>

      {/* Search */}
      <input
        type="text" value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search by name or email..."
        style={{ width: '100%', padding: '10px 14px', border: '2px solid #4c6272', borderRadius: '4px', fontSize: '14px', color: '#212b32', fontFamily: 'inherit', outline: 'none', background: '#fff', colorScheme: 'light', boxSizing: 'border-box', marginBottom: '16px' }}
      />

      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px', color: '#4c6272' }}>Loading patients...</div>
      ) : filtered.length === 0 ? (
        <div style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '8px', padding: '40px', textAlign: 'center' }}>
          <p style={{ color: '#4c6272' }}>No patients found.</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {filtered.map(patient => (
            <div key={patient._id} style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '8px', padding: '14px 20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '500', color: '#085041', flexShrink: 0 }}>
                {getInitials(patient.name)}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '14px', fontWeight: '500', color: '#212b32' }}>{patient.name}</div>
                <div style={{ fontSize: '13px', color: '#4c6272', marginTop: '2px' }}>
                  {patient.email} {patient.phone ? `· ${patient.phone}` : ''}
                </div>
                <div style={{ fontSize: '12px', color: '#4c6272', marginTop: '2px' }}>
                  DOB: {patient.dateOfBirth || 'Not provided'} · Joined: {new Date(patient.createdAt).toLocaleDateString('en-GB')}
                </div>
              </div>
              <span style={{ background: '#E1F5EE', color: '#085041', fontSize: '12px', fontWeight: '500', padding: '3px 10px', borderRadius: '20px', flexShrink: 0 }}>
                Patient
              </span>
              <button
                onClick={() => handleDelete(patient)}
                style={{ padding: '6px 14px', background: '#fff', color: '#d5281b', border: '1px solid #d5281b', borderRadius: '4px', fontSize: '13px', cursor: 'pointer', fontFamily: 'inherit', flexShrink: 0 }}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </AdminLayout>
  )
}