import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import PatientLayout from '../../components/PatientLayout'
import API from '../../utils/api'
import toast from 'react-hot-toast'

const appointmentTypes = [
  'General Checkup', 'Follow-up', 'Blood pressure review',
  'Test results', 'Referral', 'Prescription review', 'Other'
]

export default function BookAppointment() {
  const navigate = useNavigate()
  const [step, setStep] = useState(1)
  const [doctors, setDoctors] = useState([])
  const [slots, setSlots] = useState([])
  const [availableDates, setAvailableDates] = useState([])
  const [loadingDoctors, setLoadingDoctors] = useState(true)
  const [loadingSlots, setLoadingSlots] = useState(false)
  const [booking, setBooking] = useState(false)

  const [selectedDoctor, setSelectedDoctor] = useState(null)
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedSlot, setSelectedSlot] = useState(null)
  const [appointmentType, setAppointmentType] = useState('General Checkup')

  const today = new Date().toISOString().split('T')[0]

  // Fetch all GPs
  useEffect(() => {
    API.get('/auth/doctors')
      .then(res => setDoctors(res.data))
      .catch(() => toast.error('Failed to load doctors'))
      .finally(() => setLoadingDoctors(false))
  }, [])

  // Fetch available dates when doctor selected
  useEffect(() => {
    if (!selectedDoctor) return
    API.get(`/slots/available-dates?doctorId=${selectedDoctor._id}`)
      .then(res => setAvailableDates(res.data))
      .catch(err => console.error(err))
  }, [selectedDoctor])

  // Fetch slots when doctor and date selected
  useEffect(() => {
    if (!selectedDoctor || !selectedDate) return
    setLoadingSlots(true)
    setSlots([])
    setSelectedSlot(null)
    API.get(`/slots?doctorId=${selectedDoctor._id}&date=${selectedDate}`)
      .then(res => setSlots(res.data))
      .catch(() => toast.error('Failed to load slots'))
      .finally(() => setLoadingSlots(false))
  }, [selectedDoctor, selectedDate])

  const handleBook = async () => {
    if (!selectedDoctor || !selectedDate || !selectedSlot) {
      toast.error('Please select a doctor, date and time slot')
      return
    }
    setBooking(true)
    try {
      await API.post('/appointments/book', {
        doctorId: selectedDoctor._id,
        date: selectedDate,
        time: selectedSlot.time,
        type: appointmentType
      })
      toast.success('Appointment booked successfully!')
      setTimeout(() => navigate('/patient/appointments'), 1500)
    } catch (err) {
      toast.error(err.response?.data?.message || 'Booking failed')
    } finally {
      setBooking(false)
    }
  }

  const getInitials = (name) => name.split(' ').map(n => n[0]).join('').slice(0, 2).toUpperCase()

  const inputStyle = {
    padding: '10px 14px', border: '2px solid #4c6272',
    borderRadius: '4px', fontSize: '14px', color: '#212b32',
    fontFamily: 'inherit', outline: 'none', background: '#fff',
    colorScheme: 'light', boxSizing: 'border-box'
  }

  // Generate calendar for current month
  const generateCalendar = () => {
    const now = new Date()
    const year = now.getFullYear()
    const month = now.getMonth()
    const firstDay = new Date(year, month, 1).getDay()
    const daysInMonth = new Date(year, month + 1, 0).getDate()
    const days = []
    for (let i = 0; i < firstDay; i++) days.push(null)
    for (let d = 1; d <= daysInMonth; d++) {
      const dateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`
      days.push(dateStr)
    }
    return { days, monthLabel: now.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' }) }
  }

  const { days, monthLabel } = generateCalendar()

  return (
    <PatientLayout>
      <h1 style={{ fontSize: '22px', fontWeight: '500', color: '#212b32', marginBottom: '4px' }}>Book an appointment</h1>
      <p style={{ fontSize: '14px', color: '#4c6272', marginBottom: '24px' }}>Choose a GP, date and available time slot</p>

      {/* Step indicator */}
      <div style={{ display: 'flex', alignItems: 'center', marginBottom: '28px' }}>
        {[{ num: 1, label: 'Choose GP' }, { num: 2, label: 'Pick date & slot' }, { num: 3, label: 'Confirm' }].map((s, i) => (
          <div key={s.num} style={{ display: 'flex', alignItems: 'center', flex: i < 2 ? 1 : 'none' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: step >= s.num ? '#005EB8' : '#d8dde0', color: step >= s.num ? '#fff' : '#4c6272', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: '500', flexShrink: 0 }}>
                {step > s.num ? '✓' : s.num}
              </div>
              <span style={{ fontSize: '13px', color: step >= s.num ? '#005EB8' : '#4c6272', fontWeight: step === s.num ? '500' : '400', whiteSpace: 'nowrap' }}>{s.label}</span>
            </div>
            {i < 2 && <div style={{ flex: 1, height: '2px', background: step > s.num ? '#005EB8' : '#d8dde0', margin: '0 12px' }}></div>}
          </div>
        ))}
      </div>

      {/* Step 1 — Choose GP */}
      {step === 1 && (
        <div style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '8px', padding: '24px' }}>
          <div style={{ fontSize: '15px', fontWeight: '500', color: '#212b32', marginBottom: '16px' }}>Select a GP</div>
          {loadingDoctors ? (
            <p style={{ color: '#4c6272' }}>Loading doctors...</p>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {doctors.map(doctor => (
                <div key={doctor._id} onClick={() => setSelectedDoctor(doctor)}
                  style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 16px', border: selectedDoctor?._id === doctor._id ? '2px solid #005EB8' : '0.5px solid #d8dde0', borderRadius: '8px', cursor: 'pointer', background: selectedDoctor?._id === doctor._id ? '#E6F1FB' : '#fff', transition: 'all .15s' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: '#E6F1FB', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '14px', fontWeight: '500', color: '#0C447C', flexShrink: 0 }}>
                    {getInitials(doctor.name)}
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '15px', fontWeight: '500', color: '#212b32' }}>{doctor.name}</div>
                    <div style={{ fontSize: '13px', color: '#4c6272', marginTop: '2px' }}>{doctor.specialisation || 'General Practice'}</div>
                  </div>
                  {selectedDoctor?._id === doctor._id && (
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#005EB8', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ color: '#fff', fontSize: '12px' }}>✓</span>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'flex-end' }}>
            <button onClick={() => { if (!selectedDoctor) { toast.error('Please select a GP first'); return } setStep(2) }}
              style={{ padding: '10px 24px', background: '#005EB8', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '14px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit' }}>
              Continue →
            </button>
          </div>
        </div>
      )}

      {/* Step 2 — Pick date and slot */}
      {step === 2 && (
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>

          {/* Calendar */}
          <div style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '8px', padding: '24px' }}>
            <div style={{ fontSize: '15px', fontWeight: '500', color: '#212b32', marginBottom: '4px' }}>
              Booking with: {selectedDoctor?.name}
            </div>
            <div style={{ fontSize: '13px', color: '#4c6272', marginBottom: '20px' }}>{selectedDoctor?.specialisation}</div>

            <div style={{ fontSize: '14px', fontWeight: '500', color: '#212b32', marginBottom: '12px' }}>{monthLabel}</div>

            {/* Legend */}
            <div style={{ display: 'flex', gap: '16px', marginBottom: '12px', flexWrap: 'wrap' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#4c6272' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#005EB8' }}></div> Today
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#4c6272' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#007f3b' }}></div> Slots available
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#4c6272' }}>
                <div style={{ width: '12px', height: '12px', borderRadius: '50%', background: '#FAEEDA', border: '1px solid #ffb81c' }}></div> Selected
              </div>
            </div>

            {/* Day headers */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: '4px', marginBottom: '6px' }}>
              {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => (
                <div key={d} style={{ textAlign: 'center', fontSize: '11px', fontWeight: '500', color: '#4c6272', padding: '4px 0' }}>{d}</div>
              ))}
            </div>

            {/* Calendar days */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: '4px' }}>
              {days.map((dateStr, i) => {
                if (!dateStr) return <div key={i}></div>
                const isToday = dateStr === today
                const isSelected = dateStr === selectedDate
                const isPast = dateStr < today
                const hasSlots = availableDates.includes(dateStr)
                const dayNum = parseInt(dateStr.split('-')[2])

                let bg = 'transparent'
                let color = isPast ? '#ccc' : '#212b32'
                let border = 'none'
                let cursor = isPast ? 'not-allowed' : 'pointer'

                if (isSelected) { bg = '#FAEEDA'; color = '#633806'; border = '2px solid #ffb81c' }
                else if (isToday) { bg = '#005EB8'; color = '#fff' }
                else if (hasSlots && !isPast) { bg = '#E1F5EE'; color = '#007f3b'; border = '1px solid #007f3b' }

                return (
                  <div key={dateStr}
                    onClick={() => { if (!isPast) setSelectedDate(dateStr) }}
                    style={{ textAlign: 'center', padding: '8px 4px', borderRadius: '6px', background: bg, color, border, cursor, fontSize: '13px', fontWeight: hasSlots || isToday ? '500' : '400', transition: 'all .1s', position: 'relative' }}>
                    {dayNum}
                    {hasSlots && !isToday && !isSelected && (
                      <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#007f3b', margin: '2px auto 0' }}></div>
                    )}
                  </div>
                )
              })}
            </div>

            {/* Or use input */}
            <div style={{ marginTop: '16px', borderTop: '0.5px solid #d8dde0', paddingTop: '14px' }}>
              <label style={{ display: 'block', fontSize: '13px', color: '#4c6272', marginBottom: '6px' }}>Or pick a specific date:</label>
              <input type="date" value={selectedDate} min={today}
                onChange={e => setSelectedDate(e.target.value)}
                style={{ ...inputStyle, width: '100%' }}
              />
            </div>
          </div>

          {/* Slots panel */}
          <div style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '8px', padding: '24px' }}>
            <div style={{ fontSize: '14px', fontWeight: '500', color: '#212b32', marginBottom: '16px' }}>
              {selectedDate ? `Available slots — ${new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long' })}` : 'Select a date to see slots'}
            </div>

            {!selectedDate ? (
              <div style={{ textAlign: 'center', padding: '30px', color: '#4c6272', fontSize: '14px' }}>
                👆 Pick a date from the calendar
              </div>
            ) : loadingSlots ? (
              <p style={{ color: '#4c6272' }}>Loading slots...</p>
            ) : slots.length === 0 ? (
              <div style={{ background: '#fff8e6', borderLeft: '4px solid #ffb81c', padding: '12px 16px', borderRadius: '0 4px 4px 0', fontSize: '14px', color: '#6a4c00' }}>
                No available slots for this date. Try a date highlighted in green.
              </div>
            ) : (
              <>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '8px', marginBottom: '20px' }}>
                  {slots.map(slot => (
                    <button key={slot._id} onClick={() => setSelectedSlot(slot)}
                      style={{ padding: '12px 8px', border: selectedSlot?._id === slot._id ? '2px solid #005EB8' : '1px solid #d8dde0', borderRadius: '6px', background: selectedSlot?._id === slot._id ? '#005EB8' : '#f0f4f5', color: selectedSlot?._id === slot._id ? '#fff' : '#212b32', fontSize: '14px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit', transition: 'all .15s' }}>
                      {slot.time}
                    </button>
                  ))}
                </div>

                {selectedSlot && (
                  <div style={{ background: '#E1F5EE', borderLeft: '4px solid #007f3b', padding: '10px 14px', borderRadius: '0 4px 4px 0', fontSize: '13px', color: '#085041', marginBottom: '16px' }}>
                    ✓ Selected: {selectedSlot.time} on {new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-GB')}
                  </div>
                )}
              </>
            )}

            {/* Appointment type */}
            <div style={{ marginTop: '16px' }}>
              <label style={{ display: 'block', fontSize: '14px', fontWeight: '500', color: '#212b32', marginBottom: '6px' }}>Appointment type</label>
              <select value={appointmentType} onChange={e => setAppointmentType(e.target.value)}
                style={{ ...inputStyle, width: '100%' }}>
                {appointmentTypes.map(type => <option key={type} value={type}>{type}</option>)}
              </select>
            </div>

            <div style={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
              <button onClick={() => setStep(1)} style={{ padding: '10px 20px', background: '#fff', color: '#212b32', border: '1px solid #d8dde0', borderRadius: '4px', fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit' }}>← Back</button>
              <button onClick={() => { if (!selectedDate || !selectedSlot) { toast.error('Please select a date and time slot'); return } setStep(3) }}
                style={{ padding: '10px 24px', background: '#005EB8', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '14px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit' }}>
                Continue →
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 3 — Confirm */}
      {step === 3 && (
        <div style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '8px', padding: '24px' }}>
          <div style={{ fontSize: '15px', fontWeight: '500', color: '#212b32', marginBottom: '20px' }}>Confirm your appointment</div>
          <div style={{ background: '#f0f4f5', borderRadius: '8px', padding: '20px', marginBottom: '20px', border: '0.5px solid #d8dde0' }}>
            {[
              { label: 'Doctor',           value: selectedDoctor?.name },
              { label: 'Specialisation',   value: selectedDoctor?.specialisation || 'General Practice' },
              { label: 'Date',             value: new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-GB', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }) },
              { label: 'Time',             value: selectedSlot?.time },
              { label: 'Appointment type', value: appointmentType },
            ].map(row => (
              <div key={row.label} style={{ display: 'flex', gap: '16px', padding: '10px 0', borderBottom: '0.5px solid #d8dde0' }}>
                <div style={{ fontSize: '13px', color: '#4c6272', minWidth: '140px' }}>{row.label}</div>
                <div style={{ fontSize: '13px', fontWeight: '500', color: '#212b32' }}>{row.value}</div>
              </div>
            ))}
          </div>
          <div style={{ background: '#E1F5EE', borderLeft: '4px solid #007f3b', padding: '12px 16px', borderRadius: '0 4px 4px 0', fontSize: '13px', color: '#085041', marginBottom: '20px' }}>
            A confirmation email will be sent to your registered email address after booking.
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <button onClick={() => setStep(2)} style={{ padding: '10px 20px', background: '#fff', color: '#212b32', border: '1px solid #d8dde0', borderRadius: '4px', fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit' }}>← Back</button>
            <button onClick={handleBook} disabled={booking}
              style={{ padding: '10px 28px', background: booking ? '#4c6272' : '#007f3b', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '14px', fontWeight: '500', cursor: booking ? 'not-allowed' : 'pointer', fontFamily: 'inherit', display: 'flex', alignItems: 'center', gap: '8px' }}>
              {booking ? 'Booking...' : '✓ Confirm booking'}
            </button>
          </div>
        </div>
      )}
    </PatientLayout>
  )
}