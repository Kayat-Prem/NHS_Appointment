import { useState, useEffect } from 'react'
import AdminLayout from '../../components/AdminLayout'
import API from '../../utils/api'

export default function AdminDashboard() {
  const [stats, setStats] = useState({ totalDoctors: 0, totalPatients: 0, totalAdmins: 0 })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    API.get('/admin/stats')
      .then(res => setStats(res.data))
      .catch(err => console.error(err))
      .finally(() => setLoading(false))
  }, [])

  const statCards = [
    { label: 'Total Doctors',   value: stats.totalDoctors,  color: '#005EB8', bg: '#E6F1FB' },
    { label: 'Total Patients',  value: stats.totalPatients, color: '#007f3b', bg: '#E1F5EE' },
    { label: 'Total Admins',    value: stats.totalAdmins,   color: '#6a4c00', bg: '#fff8e6' },
  ]

  return (
    <AdminLayout>
      <h1 style={{ fontSize: '22px', fontWeight: '500', color: '#212b32', marginBottom: '6px' }}>Admin Dashboard</h1>
      <p style={{ fontSize: '14px', color: '#4c6272', marginBottom: '24px' }}>Welcome back — here's an overview of the system</p>

      {/* Stat cards */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '12px', marginBottom: '28px' }}>
        {statCards.map(card => (
          <div key={card.label} style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '8px', padding: '16px 20px', borderTop: `4px solid ${card.color}` }}>
            <div style={{ fontSize: '13px', color: '#4c6272', marginBottom: '6px' }}>{card.label}</div>
            <div style={{ fontSize: '32px', fontWeight: '500', color: card.color }}>
              {loading ? '...' : card.value}
            </div>
          </div>
        ))}
      </div>

      {/* Quick actions */}
      <div style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '8px', padding: '20px 24px' }}>
        <div style={{ fontSize: '15px', fontWeight: '500', color: '#212b32', marginBottom: '16px' }}>Quick actions</div>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <a href="/admin/doctors" style={{ padding: '10px 20px', background: '#005EB8', color: '#fff', borderRadius: '4px', fontSize: '14px', fontWeight: '500', textDecoration: 'none' }}>
            + Add new doctor
          </a>
          <a href="/admin/patients" style={{ padding: '10px 20px', background: '#fff', color: '#212b32', border: '1px solid #d8dde0', borderRadius: '4px', fontSize: '14px', textDecoration: 'none' }}>
            View all patients
          </a>
          <a href="/admin/appointments" style={{ padding: '10px 20px', background: '#fff', color: '#212b32', border: '1px solid #d8dde0', borderRadius: '4px', fontSize: '14px', textDecoration: 'none' }}>
            View appointments
          </a>
        </div>
      </div>
    </AdminLayout>
  )
}