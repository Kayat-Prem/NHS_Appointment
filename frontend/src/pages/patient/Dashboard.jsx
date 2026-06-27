import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PatientLayout from '../../components/PatientLayout'
import API from '../../utils/api'
import { useAuth } from '../../context/AuthContext'

const statusColors = {
  confirmed: { bg: '#E6F1FB', color: '#0C447C' },
  pending:   { bg: '#fff8e6', color: '#6a4c00' },
  completed: { bg: '#E1F5EE', color: '#085041' },
  cancelled: { bg: '#FAECE7', color: '#712B13' },
}

export default function PatientDashboard() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    API.get('/appointments/my')
      .then(res => setAppointments(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  const upcoming = appointments.filter(a => a.status === 'confirmed' || a.status === 'pending')
  const past = appointments.filter(a => a.status === 'completed' || a.status === 'cancelled')

  return (
    <PatientLayout>

      {/* Welcome */}
      <h1 style={{ fontSize: '22px', fontWeight: '500', color: '#212b32', marginBottom: '4px' }}>
        Good day, {user?.name?.split(' ')[0]} 👋
      </h1>
      <p style={{ fontSize: '14px', color: '#4c6272', marginBottom: '24px' }}>
        Here's an overview of your GP appointments
      </p>

      {/* Stat cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: '12px', marginBottom: '28px' }}>
        {[
          { label: 'Upcoming',  value: upcoming.length, color: '#005EB8', bg: '#E6F1FB' },
          { label: 'Completed', value: past.filter(a => a.status === 'completed').length, color: '#007f3b', bg: '#E1F5EE' },
          { label: 'Cancelled', value: past.filter(a => a.status === 'cancelled').length, color: '#d5281b', bg: '#FAECE7' },
          { label: 'Total',     value: appointments.length, color: '#212b32', bg: '#f0f4f5' },
        ].map(card => (
          <div key={card.label} style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '8px', padding: '16px 20px', borderTop: `4px solid ${card.color}` }}>
            <div style={{ fontSize: '13px', color: '#4c6272', marginBottom: '6px' }}>{card.label}</div>
            <div style={{ fontSize: '28px', fontWeight: '500', color: card.color }}>
              {loading ? '...' : card.value}
            </div>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '8px', padding: '20px 24px', marginBottom: '24px' }}>
        <div style={{ fontSize: '15px', fontWeight: '500', color: '#212b32', marginBottom: '14px' }}>Quick actions</div>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
          <button onClick={() => navigate('/patient/book')} style={{ padding: '10px 20px', background: '#005EB8', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '14px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <i className="ti ti-calendar-plus" aria-hidden="true"></i> Book appointment
          </button>
          <button onClick={() => navigate('/patient/appointments')} style={{ padding: '10px 20px', background: '#fff', color: '#212b32', border: '1px solid #d8dde0', borderRadius: '4px', fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <i className="ti ti-calendar" aria-hidden="true"></i> View appointments
          </button>
        </div>
      </div>

      {/* Upcoming appointments */}
      <div style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '8px', padding: '20px 24px' }}>
        <div style={{ fontSize: '15px', fontWeight: '500', color: '#212b32', marginBottom: '16px' }}>
          Upcoming appointments
        </div>
        {loading ? (
          <p style={{ color: '#4c6272', fontSize: '14px' }}>Loading...</p>
        ) : upcoming.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '24px' }}>
            <p style={{ color: '#4c6272', fontSize: '14px', marginBottom: '12px' }}>No upcoming appointments</p>
            <button onClick={() => navigate('/patient/book')} style={{ padding: '10px 20px', background: '#005EB8', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit' }}>
              Book your first appointment
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {upcoming.slice(0, 3).map(appt => (
              <div key={appt._id} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '12px 16px', background: '#f0f4f5', borderRadius: '6px', border: '0.5px solid #d8dde0' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#E6F1FB', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#005EB8', fontSize: '18px', flexShrink: 0 }}>
                  <i className="ti ti-stethoscope" aria-hidden="true"></i>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '14px', fontWeight: '500', color: '#212b32' }}>Dr. {appt.doctor?.name}</div>
                  <div style={{ fontSize: '13px', color: '#4c6272', marginTop: '2px' }}>
                    {appt.date} · {appt.time} · {appt.type}
                  </div>
                </div>
                <span style={{ background: statusColors[appt.status]?.bg, color: statusColors[appt.status]?.color, fontSize: '12px', fontWeight: '500', padding: '3px 10px', borderRadius: '20px', textTransform: 'capitalize' }}>
                  {appt.status}
                </span>
              </div>
            ))}
            {upcoming.length > 3 && (
              <button onClick={() => navigate('/patient/appointments')} style={{ background: 'transparent', border: 'none', color: '#005EB8', fontSize: '13px', cursor: 'pointer', textDecoration: 'underline', textAlign: 'left', padding: '4px 0' }}>
                View all {upcoming.length} appointments →
              </button>
            )}
          </div>
        )}
      </div>

    </PatientLayout>
  )
}