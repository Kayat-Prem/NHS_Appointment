import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import GPLayout from '../../components/GPLayout'
import API from '../../utils/api'
import { useAuth } from '../../context/AuthContext'

const statusColors = {
  confirmed: { bg: '#E6F1FB', color: '#0C447C' },
  pending:   { bg: '#fff8e6', color: '#6a4c00' },
  completed: { bg: '#E1F5EE', color: '#085041' },
  cancelled: { bg: '#FAECE7', color: '#712B13' },
}

export default function GPDashboard() {
  const { user } = useAuth()
  const navigate = useNavigate()
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    API.get('/appointments/gp')
      .then(res => setAppointments(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  const today = new Date().toISOString().split('T')[0]
  const todayAppts = appointments.filter(a => a.date === today && a.status !== 'cancelled')
  const upcoming = appointments.filter(a => a.date > today && a.status === 'confirmed')
  const completed = appointments.filter(a => a.status === 'completed')

  return (
    <GPLayout>
      <h1 style={{ fontSize: '22px', fontWeight: '500', color: '#212b32', marginBottom: '4px' }}>
        Good day, Dr. {user?.name?.split(' ').slice(-1)[0]} 👋
      </h1>
      <p style={{ fontSize: '14px', color: '#4c6272', marginBottom: '24px' }}>
        {user?.specialisation || 'General Practice'} · Here's your overview for today
      </p>

      {/* Stat cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(140px,1fr))', gap: '12px', marginBottom: '28px' }}>
        {[
          { label: "Today's appointments", value: todayAppts.length,   color: '#005EB8' },
          { label: 'Upcoming',             value: upcoming.length,     color: '#007f3b' },
          { label: 'Completed',            value: completed.length,    color: '#4c6272' },
          { label: 'Total patients',       value: appointments.length, color: '#212b32' },
        ].map(card => (
          <div key={card.label} style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '8px', padding: '16px 20px', borderTop: `4px solid ${card.color}` }}>
            <div style={{ fontSize: '12px', color: '#4c6272', marginBottom: '6px' }}>{card.label}</div>
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
          <button onClick={() => navigate('/gp/slots')} style={{ padding: '10px 20px', background: '#005EB8', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '14px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <i className="ti ti-clock" aria-hidden="true"></i> Manage slots
          </button>
          <button onClick={() => navigate('/gp/schedule')} style={{ padding: '10px 20px', background: '#fff', color: '#212b32', border: '1px solid #d8dde0', borderRadius: '4px', fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <i className="ti ti-calendar" aria-hidden="true"></i> View schedule
          </button>
          <button onClick={() => navigate('/gp/patients')} style={{ padding: '10px 20px', background: '#fff', color: '#212b32', border: '1px solid #d8dde0', borderRadius: '4px', fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: '6px' }}>
            <i className="ti ti-users" aria-hidden="true"></i> My patients
          </button>
        </div>
      </div>

      {/* Today's appointments */}
      <div style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '8px', padding: '20px 24px' }}>
        <div style={{ fontSize: '15px', fontWeight: '500', color: '#212b32', marginBottom: '16px' }}>
          Today's appointments — {new Date().toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}
        </div>
        {loading ? (
          <p style={{ color: '#4c6272' }}>Loading...</p>
        ) : todayAppts.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '24px' }}>
            <p style={{ color: '#4c6272', fontSize: '14px', marginBottom: '12px' }}>No appointments today</p>
            <button onClick={() => navigate('/gp/slots')} style={{ padding: '10px 20px', background: '#005EB8', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit' }}>
              Add available slots
            </button>
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {todayAppts.map(appt => (
              <div key={appt._id} style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '12px 16px', background: '#f0f4f5', borderRadius: '6px', border: '0.5px solid #d8dde0' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#007f3b', fontSize: '18px', flexShrink: 0 }}>
                  <i className="ti ti-user" aria-hidden="true"></i>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '14px', fontWeight: '500', color: '#212b32' }}>{appt.patient?.name}</div>
                  <div style={{ fontSize: '13px', color: '#4c6272', marginTop: '2px' }}>
                    {appt.time} · {appt.type}
                  </div>
                </div>
                <span style={{ background: statusColors[appt.status]?.bg, color: statusColors[appt.status]?.color, fontSize: '12px', fontWeight: '500', padding: '3px 10px', borderRadius: '20px', textTransform: 'capitalize' }}>
                  {appt.status}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </GPLayout>
  )
}