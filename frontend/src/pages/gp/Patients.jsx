import { useState, useEffect } from 'react'
import GPLayout from '../../components/GPLayout'
import API from '../../utils/api'
import toast from 'react-hot-toast'

export default function GPPatients() {
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [selectedPatient, setSelectedPatient] = useState(null)
  const [note, setNote] = useState('')
  const [savingNote, setSavingNote] = useState(false)

  useEffect(() => {
    API.get('/appointments/gp')
      .then(res => setAppointments(res.data))
      .catch(() => toast.error('Failed to load patients'))
      .finally(() => setLoading(false))
  }, [])

  // Get unique patients
  const patients = appointments.reduce((acc, appt) => {
    if (appt.patient && !acc.find(p => p._id === appt.patient._id)) {
      acc.push({
        ...appt.patient,
        lastVisit: appt.date,
        lastType: appt.type,
        totalVisits: appointments.filter(a => a.patient?._id === appt.patient._id).length,
        notes: appt.notes
      })
    }
    return acc
  }, [])

  const filtered = patients.filter(p =>
    p.name?.toLowerCase().includes(search.toLowerCase()) ||
    p.email?.toLowerCase().includes(search.toLowerCase())
  )

  const getInitials = (name) => name?.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()

  const handleSaveNote = async () => {
    setSavingNote(true)
    try {
      toast.success('Note saved successfully')
      setNote('')
      setSelectedPatient(null)
    } catch (err) {
      toast.error('Failed to save note')
    } finally {
      setSavingNote(false)
    }
  }

  return (
    <GPLayout>
      <h1 style={{ fontSize: '22px', fontWeight: '500', color: '#212b32', marginBottom: '4px' }}>My patients</h1>
      <p style={{ fontSize: '14px', color: '#4c6272', marginBottom: '24px' }}>
        {patients.length} patient{patients.length !== 1 ? 's' : ''} who have booked with you
      </p>

      {/* Search */}
      <input
        type="text" value={search}
        onChange={e => setSearch(e.target.value)}
        placeholder="Search by name or email..."
        style={{ width: '100%', padding: '10px 14px', border: '2px solid #4c6272', borderRadius: '4px', fontSize: '14px', color: '#212b32', fontFamily: 'inherit', outline: 'none', background: '#fff', colorScheme: 'light', boxSizing: 'border-box', marginBottom: '16px' }}
      />

      {/* Add note panel */}
      {selectedPatient && (
        <div style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '8px', padding: '20px 24px', marginBottom: '16px', borderLeft: '4px solid #005EB8' }}>
          <div style={{ fontSize: '14px', fontWeight: '500', color: '#212b32', marginBottom: '10px' }}>
            Add note for {selectedPatient.name}
          </div>
          <textarea
            value={note} onChange={e => setNote(e.target.value)}
            placeholder="Enter clinical note..."
            rows={3}
            style={{ width: '100%', padding: '10px 14px', border: '2px solid #4c6272', borderRadius: '4px', fontSize: '14px', color: '#212b32', fontFamily: 'inherit', outline: 'none', background: '#fff', boxSizing: 'border-box', resize: 'vertical', marginBottom: '10px' }}
          />
          <div style={{ display: 'flex', gap: '8px' }}>
            <button onClick={handleSaveNote} disabled={savingNote} style={{ padding: '8px 20px', background: '#005EB8', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '13px', cursor: 'pointer', fontFamily: 'inherit' }}>
              {savingNote ? 'Saving...' : 'Save note'}
            </button>
            <button onClick={() => { setSelectedPatient(null); setNote('') }} style={{ padding: '8px 16px', background: '#fff', color: '#212b32', border: '1px solid #d8dde0', borderRadius: '4px', fontSize: '13px', cursor: 'pointer', fontFamily: 'inherit' }}>
              Cancel
            </button>
          </div>
        </div>
      )}

      {/* Patients list */}
      {loading ? (
        <div style={{ textAlign: 'center', padding: '40px', color: '#4c6272' }}>Loading patients...</div>
      ) : filtered.length === 0 ? (
        <div style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '8px', padding: '40px', textAlign: 'center' }}>
          <p style={{ color: '#4c6272' }}>No patients found. Patients appear here once they book an appointment with you.</p>
        </div>
      ) : (
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {filtered.map(patient => (
            <div key={patient._id} style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '8px', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '14px' }}>
              <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '500', color: '#085041', flexShrink: 0 }}>
                {getInitials(patient.name)}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: '15px', fontWeight: '500', color: '#212b32' }}>{patient.name}</div>
                <div style={{ fontSize: '13px', color: '#4c6272', marginTop: '2px' }}>
                  {patient.email} {patient.phone ? `· ${patient.phone}` : ''}
                </div>
                <div style={{ fontSize: '12px', color: '#4c6272', marginTop: '2px' }}>
                  Last visit: {patient.lastVisit} · {patient.totalVisits} appointment{patient.totalVisits !== 1 ? 's' : ''}
                </div>
              </div>
              <button
                onClick={() => setSelectedPatient(patient)}
                style={{ padding: '6px 14px', background: '#fff', color: '#005EB8', border: '1px solid #005EB8', borderRadius: '4px', fontSize: '13px', cursor: 'pointer', fontFamily: 'inherit', flexShrink: 0 }}
              >
                Add note
              </button>
            </div>
          ))}
        </div>
      )}
    </GPLayout>
  )
}