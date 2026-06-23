import { useState, useEffect } from 'react'
import AdminLayout from '../../components/AdminLayout'
import API from '../../utils/api'
import toast from 'react-hot-toast'

const statusColors = {
  confirmed:  { bg: '#E6F1FB', color: '#0C447C' },
  pending:    { bg: '#fff8e6', color: '#6a4c00' },
  completed:  { bg: '#E1F5EE', color: '#085041' },
  cancelled:  { bg: '#FAECE7', color: '#712B13' },
}

export default function AdminAppointments() {
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')
  const [search, setSearch] = useState('')

  const fetchAppointments = async () => {
    try {
      const res = await API.get('/appointments/all')
      setAppointments(res.data)
    } catch (err) {
      toast.error('Failed to load appointments')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchAppointments() }, [])

  const handleCancel = async (id) => {
    if (!window.confirm('Cancel this appointment?')) return
    try {
      await API.put(`/appointments/${id}/cancel`)
      toast.success('Appointment cancelled')
      fetchAppointments()
    } catch (err) {
      toast.error('Failed to cancel appointment')
    }
  }

  const filtered = appointments.filter(a => {
    const matchStatus = filter === 'all' || a.status === filter
    const matchSearch =
      a.patient?.name?.toLowerCase().includes(search.toLowerCase()) ||
      a.doctor?.name?.toLowerCase().includes(search.toLowerCase())
    return matchStatus && matchSearch
  })

  return (
    <AdminLayout>
      <h1 style={{ fontSize: '22px', fontWeight: '500', color: '#212b32', marginBottom: '6px' }}>All Appointments</h1>
      <p style={{ fontSize: '14px', color: '#4c6272', marginBottom: '24px' }}>
        {appointments.length} total appointment{appointments.length !== 1 ? 's' : ''} in the system
      </p>

      {/* Filters */}
      <div style={{ display: 'flex', gap: '10px', marginBottom: '16px', flexWrap: 'wrap' }}>
        <input
          type="text" value={search}
          onChange={e => setSearch(e.target.value)}
          placeholder="Search patient or doctor..."
          style={{ flex: 1, minWidth: '200px', padding: '8px 12px', border: '2px solid #4c6272', borderRadius: '4px', fontSize: '14px', color: '#212b32', fontFamily: 'inherit', outline: 'none', background: '#fff', colorScheme: 'light', boxSizing: 'border-box' }}
        />
        <select
          value={filter} onChange={e => setFilter(e.target.value)}
          style={{ padding: '8px 12px', border: '2px solid #4c6272', borderRadius: '4px', fontSize: '14px', color: '#212b32', fontFamily: 'inherit', outline: 'none', background: '#fff', colorScheme: 'light' }}
        >
          <option value="all">All statuses</option>
          <option value="confirmed">Confirmed</option>
          <option value="pending">Pending</option>
          <option value="completed">Completed</option>
          <option value="cancelled">Cancelled</option>
        </select>
      </div>

      {/* Stats row */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: '10px', marginBottom: '20px' }}>
        {['confirmed','pending','completed','cancelled'].map(status => (
          <div key={status} style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '8px', padding: '12px 16px', textAlign: 'center' }}>
            <div style={{ fontSize: '22px', fontWeight: '500', color: statusColors[status].color }}>
              {appointments.filter(a => a.status === status).length}
            </div>
            <div style={{ fontSize: '12px', color: '#4c6272', textTransform: 'capitalize', marginTop: '2px' }}>{status}</div>
          </div>
        ))}
      </div>

      {/* Appointments list */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px', color: '#4c6272' }}>Loading appointments...</div>
      ) : filtered.length === 0 ? (
        <div style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '8px', padding: '40px', textAlign: 'center' }}>
          <p style={{ color: '#4c6272' }}>No appointments found.</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
          {filtered.map(appt => (
            <div key={appt._id} style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '8px', padding: '14px 20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '14px', fontWeight: '500', color: '#212b32', marginBottom: '4px' }}>
                  {appt.patient?.name || 'Unknown'} → Dr. {appt.doctor?.name || 'Unknown'}
                </div>
                <div style={{ fontSize: '13px', color: '#4c6272' }}>
                  {appt.date} · {appt.time} · {appt.type}
                </div>
                <div style={{ fontSize: '12px', color: '#4c6272', marginTop: '2px' }}>
                  {appt.doctor?.specialisation}
                </div>
              </div>
              <span style={{ background: statusColors[appt.status]?.bg, color: statusColors[appt.status]?.color, fontSize: '12px', fontWeight: '500', padding: '3px 10px', borderRadius: '20px', flexShrink: 0, textTransform: 'capitalize' }}>
                {appt.status}
              </span>
              {appt.status !== 'cancelled' && appt.status !== 'completed' && (
                <button
                  onClick={() => handleCancel(appt._id)}
                  style={{ padding: '6px 14px', background: '#fff', color: '#d5281b', border: '1px solid #d5281b', borderRadius: '4px', fontSize: '13px', cursor: 'pointer', fontFamily: 'inherit', flexShrink: 0 }}
                >
                  Cancel
                </button>
              )}
            </div>
          ))}
        </div>
      )}
    </AdminLayout>
  )
}