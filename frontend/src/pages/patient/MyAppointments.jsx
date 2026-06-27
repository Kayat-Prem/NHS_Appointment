import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PatientLayout from '../../components/PatientLayout'
import API from '../../utils/api'
import toast from 'react-hot-toast'

const statusColors = {
  confirmed: { bg: '#E6F1FB', color: '#0C447C' },
  pending:   { bg: '#fff8e6', color: '#6a4c00' },
  completed: { bg: '#E1F5EE', color: '#085041' },
  cancelled: { bg: '#FAECE7', color: '#712B13' },
}

export default function MyAppointments() {
  const navigate = useNavigate()
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('all')

  const fetchAppointments = async () => {
    try {
      const res = await API.get('/appointments/my')
      setAppointments(res.data)
    } catch (err) {
      toast.error('Failed to load appointments')
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => { fetchAppointments() }, [])

  const handleCancel = async (id) => {
    if (!window.confirm('Are you sure you want to cancel this appointment?')) return
    try {
      await API.put(`/appointments/${id}/cancel`)
      toast.success('Appointment cancelled')
      fetchAppointments()
    } catch (err) {
      toast.error('Failed to cancel appointment')
    }
  }

  const filtered = filter === 'all' ? appointments : appointments.filter(a => a.status === filter)

  return (
    <PatientLayout>
      <h1 style={{ fontSize: '22px', fontWeight: '500', color: '#212b32', marginBottom: '4px' }}>My appointments</h1>
      <p style={{ fontSize: '14px', color: '#4c6272', marginBottom: '24px' }}>
        {appointments.length} appointment{appointments.length !== 1 ? 's' : ''} total
      </p>

      {/* Filter tabs */}
      <div style={{ display: 'flex', gap: '8px', marginBottom: '20px', flexWrap: 'wrap' }}>
        {['all', 'confirmed', 'completed', 'cancelled'].map(f => (
          <button
            key={f} onClick={() => setFilter(f)}
            style={{ padding: '6px 16px', borderRadius: '20px', border: '0.5px solid', fontSize: '13px', cursor: 'pointer', fontFamily: 'inherit', fontWeight: filter === f ? '500' : '400', background: filter === f ? '#005EB8' : '#fff', color: filter === f ? '#fff' : '#4c6272', borderColor: filter === f ? '#005EB8' : '#d8dde0' }}
          >
            {f.charAt(0).toUpperCase() + f.slice(1)}
            {f !== 'all' && ` (${appointments.filter(a => a.status === f).length})`}
          </button>
        ))}
        <button
          onClick={() => navigate('/patient/book')}
          style={{ marginLeft: 'auto', padding: '6px 16px', background: '#005EB8', color: '#fff', border: 'none', borderRadius: '20px', fontSize: '13px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit' }}
        >
          + Book new
        </button>
      </div>

      {/* Appointments list */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px', color: '#4c6272' }}>Loading...</div>
      ) : filtered.length === 0 ? (
        <div style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '8px', padding: '40px', textAlign: 'center' }}>
          <p style={{ color: '#4c6272', marginBottom: '12px' }}>No appointments found</p>
          <button onClick={() => navigate('/patient/book')} style={{ padding: '10px 20px', background: '#005EB8', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit' }}>
            Book an appointment
          </button>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {filtered.map(appt => (
            <div key={appt._id} style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '8px', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#E6F1FB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#005EB8', fontSize: '20px', flexShrink: 0 }}>
                <i className="ti ti-stethoscope" aria-hidden="true"></i>
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '15px', fontWeight: '500', color: '#212b32' }}>Dr. {appt.doctor?.name}</div>
                <div style={{ fontSize: '13px', color: '#4c6272', marginTop: '2px' }}>
                  {appt.doctor?.specialisation} · {appt.type}
                </div>
                <div style={{ fontSize: '13px', color: '#4c6272', marginTop: '2px' }}>
                  📅 {new Date(appt.date).toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric' })} · ⏰ {appt.time}
                </div>
              </div>
              <span style={{ background: statusColors[appt.status]?.bg, color: statusColors[appt.status]?.color, fontSize: '12px', fontWeight: '500', padding: '3px 10px', borderRadius: '20px', textTransform: 'capitalize', flexShrink: 0 }}>
                {appt.status}
              </span>
              {(appt.status === 'confirmed' || appt.status === 'pending') && (
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
    </PatientLayout>
  )
}