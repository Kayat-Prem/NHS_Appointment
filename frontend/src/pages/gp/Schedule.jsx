import { useState, useEffect } from 'react'
import GPLayout from '../../components/GPLayout'
import API from '../../utils/api'
import toast from 'react-hot-toast'

const statusColors = {
  confirmed: { bg: '#E6F1FB', color: '#0C447C' },
  pending:   { bg: '#fff8e6', color: '#6a4c00' },
  completed: { bg: '#E1F5EE', color: '#085041' },
  cancelled: { bg: '#FAECE7', color: '#712B13' },
}

export default function GPSchedule() {
  const [appointments, setAppointments] = useState([])
  const [loading, setLoading] = useState(true)
  const [selectedDate, setSelectedDate] = useState(new Date().toISOString().split('T')[0])
  const [completing, setCompleting] = useState(null)

  const today = new Date().toISOString().split('T')[0]

  useEffect(() => {
    API.get('/appointments/gp')
      .then(res => setAppointments(res.data))
      .catch(() => toast.error('Failed to load appointments'))
      .finally(() => setLoading(false))
  }, [])

  const handleComplete = async (id) => {
    setCompleting(id)
    try {
      await API.put(`/appointments/${id}/complete`)
      toast.success('Appointment marked as completed')
      const res = await API.get('/appointments/gp')
      setAppointments(res.data)
    } catch (err) {
      toast.error('Failed to update appointment')
    } finally {
      setCompleting(null)
    }
  }

  const filtered = appointments
    .filter(a => a.date === selectedDate)
    .sort((a, b) => a.time.localeCompare(b.time))

  // Get all dates that have appointments
  const datesWithAppointments = [...new Set(
    appointments
      .filter(a => a.status !== 'cancelled')
      .map(a => a.date)
  )]

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
    return {
      days,
      monthLabel: now.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })
    }
  }

  const { days, monthLabel } = generateCalendar()

  return (
    <GPLayout>
      <h1 style={{ fontSize: '22px', fontWeight: '500', color: '#212b32', marginBottom: '4px' }}>My schedule</h1>
      <p style={{ fontSize: '14px', color: '#4c6272', marginBottom: '24px' }}>View and manage your appointments by date</p>

      <div style={{ display: 'grid', gridTemplateColumns: '280px 1fr', gap: '20px', alignItems: 'start' }}>

        {/* Left — Calendar */}
        <div style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '8px', padding: '20px' }}>

          <div style={{ fontSize: '14px', fontWeight: '500', color: '#212b32', marginBottom: '12px' }}>{monthLabel}</div>

          {/* Legend */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '12px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#4c6272' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#005EB8', flexShrink: 0 }}></div>
              Today
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#4c6272' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#007f3b', flexShrink: 0 }}></div>
              Has appointments
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '12px', color: '#4c6272' }}>
              <div style={{ width: '12px', height: '12px', borderRadius: '3px', background: '#FAEEDA', border: '1px solid #ffb81c', flexShrink: 0 }}></div>
              Selected
            </div>
          </div>

          {/* Day headers */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: '2px', marginBottom: '4px' }}>
            {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => (
              <div key={d} style={{ textAlign: 'center', fontSize: '11px', fontWeight: '500', color: '#4c6272', padding: '4px 0' }}>{d}</div>
            ))}
          </div>

          {/* Calendar days */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: '2px', marginBottom: '16px' }}>
            {days.map((dateStr, i) => {
              if (!dateStr) return <div key={i}></div>

              const isToday = dateStr === today
              const isSelected = dateStr === selectedDate
              const isPast = dateStr < today
              const hasAppts = datesWithAppointments.includes(dateStr)
              const dayNum = parseInt(dateStr.split('-')[2])
              const apptCount = appointments.filter(a => a.date === dateStr && a.status !== 'cancelled').length

              let bg = 'transparent'
              let color = isPast ? '#aaa' : '#212b32'
              let border = 'none'

              if (isSelected)       { bg = '#FAEEDA'; color = '#633806'; border = '2px solid #ffb81c' }
              else if (isToday)     { bg = '#005EB8'; color = '#fff' }
              else if (hasAppts)    { bg = '#E1F5EE'; color = '#007f3b'; border = '1px solid #b8e6d0' }

              return (
                <div
                  key={dateStr}
                  onClick={() => setSelectedDate(dateStr)}
                  title={hasAppts ? `${apptCount} appointment${apptCount !== 1 ? 's' : ''}` : ''}
                  style={{
                    textAlign: 'center', padding: '6px 2px',
                    borderRadius: '6px', background: bg, color, border,
                    cursor: 'pointer', fontSize: '12px',
                    fontWeight: hasAppts || isToday ? '600' : '400',
                    transition: 'all .1s', position: 'relative'
                  }}
                >
                  {dayNum}
                  {hasAppts && !isToday && !isSelected && (
                    <div style={{
                      width: '5px', height: '5px', borderRadius: '50%',
                      background: '#007f3b', margin: '1px auto 0'
                    }}></div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Date input */}
          <div style={{ borderTop: '0.5px solid #d8dde0', paddingTop: '12px' }}>
            <label style={{ display: 'block', fontSize: '12px', color: '#4c6272', marginBottom: '6px' }}>Jump to date:</label>
            <input
              type="date" value={selectedDate}
              onChange={e => setSelectedDate(e.target.value)}
              style={{ width: '100%', padding: '7px 10px', border: '1.5px solid #4c6272', borderRadius: '4px', fontSize: '13px', color: '#212b32', fontFamily: 'inherit', outline: 'none', background: '#fff', colorScheme: 'light', boxSizing: 'border-box' }}
            />
            <button
              onClick={() => setSelectedDate(today)}
              style={{ marginTop: '8px', width: '100%', padding: '7px', background: '#005EB8', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '13px', cursor: 'pointer', fontFamily: 'inherit' }}
            >
              Today
            </button>
          </div>

          {/* Appointments summary */}
          {datesWithAppointments.length > 0 && (
            <div style={{ marginTop: '14px', borderTop: '0.5px solid #d8dde0', paddingTop: '12px' }}>
              <div style={{ fontSize: '12px', fontWeight: '500', color: '#4c6272', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '.4px' }}>
                Upcoming ({datesWithAppointments.filter(d => d >= today).length} dates)
              </div>
              {datesWithAppointments
                .filter(d => d >= today)
                .sort()
                .slice(0, 5)
                .map(date => {
                  const count = appointments.filter(a => a.date === date && a.status !== 'cancelled').length
                  return (
                    <div
                      key={date}
                      onClick={() => setSelectedDate(date)}
                      style={{
                        display: 'flex', alignItems: 'center', gap: '8px',
                        padding: '6px 8px', borderRadius: '4px', cursor: 'pointer',
                        background: selectedDate === date ? '#E6F1FB' : 'transparent',
                        marginBottom: '3px'
                      }}
                    >
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: date === today ? '#005EB8' : '#007f3b', flexShrink: 0 }}></div>
                      <span style={{ fontSize: '12px', color: '#212b32', flex: 1 }}>
                        {new Date(date + 'T00:00:00').toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })}
                      </span>
                      <span style={{ fontSize: '11px', background: '#E1F5EE', color: '#085041', padding: '1px 6px', borderRadius: '10px' }}>
                        {count}
                      </span>
                    </div>
                  )
                })}
            </div>
          )}
        </div>

        {/* Right — Appointments for selected date */}
        <div>
          <div style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '8px', padding: '20px 24px', marginBottom: '16px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '15px', fontWeight: '500', color: '#212b32' }}>
                {new Date(selectedDate + 'T00:00:00').toLocaleDateString('en-GB', { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' })}
              </div>
              <div style={{ fontSize: '13px', color: '#4c6272', marginTop: '2px' }}>
                {filtered.length} appointment{filtered.length !== 1 ? 's' : ''}
                {selectedDate === today ? ' · Today' : ''}
              </div>
            </div>
            {datesWithAppointments.includes(selectedDate) && (
              <span style={{ background: '#E1F5EE', color: '#085041', fontSize: '12px', fontWeight: '500', padding: '4px 12px', borderRadius: '20px' }}>
                {filtered.filter(a => a.status === 'confirmed').length} confirmed
              </span>
            )}
          </div>

          {loading ? (
            <div style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '8px', padding: '40px', textAlign: 'center', color: '#4c6272' }}>
              Loading...
            </div>
          ) : filtered.length === 0 ? (
            <div style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '8px', padding: '40px', textAlign: 'center' }}>
              <p style={{ color: '#4c6272', fontSize: '14px', marginBottom: '6px' }}>No appointments for this date</p>
              <p style={{ color: '#4c6272', fontSize: '13px' }}>Dates with appointments are highlighted in green on the calendar</p>
            </div>
          ) : (
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {filtered.map(appt => (
                <div key={appt._id} style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '8px', padding: '16px 20px', display: 'flex', alignItems: 'center', gap: '14px' }}>

                  {/* Time */}
                  <div style={{ textAlign: 'center', minWidth: '56px', flexShrink: 0 }}>
                    <div style={{ fontSize: '16px', fontWeight: '600', color: '#005EB8' }}>{appt.time}</div>
                    <div style={{ fontSize: '11px', color: '#4c6272', marginTop: '2px' }}>30 min</div>
                  </div>

                  <div style={{ width: '1px', height: '44px', background: '#d8dde0', flexShrink: 0 }}></div>

                  {/* Avatar */}
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#007f3b', fontSize: '16px', flexShrink: 0 }}>
                    <i className="ti ti-user" aria-hidden="true"></i>
                  </div>

                  {/* Patient info */}
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '15px', fontWeight: '500', color: '#212b32' }}>{appt.patient?.name}</div>
                    <div style={{ fontSize: '13px', color: '#4c6272', marginTop: '2px' }}>
                      {appt.patient?.email}
                    </div>
                    <div style={{ fontSize: '12px', color: '#4c6272', marginTop: '2px' }}>
                      {appt.type}
                    </div>
                  </div>

                  {/* Status badge */}
                  <span style={{
                    background: statusColors[appt.status]?.bg,
                    color: statusColors[appt.status]?.color,
                    fontSize: '12px', fontWeight: '500',
                    padding: '3px 10px', borderRadius: '20px',
                    textTransform: 'capitalize', flexShrink: 0
                  }}>
                    {appt.status}
                  </span>

                  {/* Mark complete button */}
                  {appt.status === 'confirmed' && (
                    <button
                      onClick={() => handleComplete(appt._id)}
                      disabled={completing === appt._id}
                      style={{ padding: '6px 14px', background: '#007f3b', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '13px', cursor: 'pointer', fontFamily: 'inherit', flexShrink: 0 }}
                    >
                      {completing === appt._id ? '...' : '✓ Complete'}
                    </button>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </GPLayout>
  )
}