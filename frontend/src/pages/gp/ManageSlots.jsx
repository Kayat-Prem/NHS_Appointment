import { useState, useEffect } from 'react'
import GPLayout from '../../components/GPLayout'
import API from '../../utils/api'
import toast from 'react-hot-toast'

const timeOptions = [
  '08:00','08:30','09:00','09:30','10:00','10:30',
  '11:00','11:30','12:00','12:30','13:00','13:30',
  '14:00','14:30','15:00','15:30','16:00','16:30','17:00'
]

export default function ManageSlots() {
  const [selectedDate, setSelectedDate] = useState('')
  const [selectedTimes, setSelectedTimes] = useState([])
  const [existingSlots, setExistingSlots] = useState([])
  const [datesWithSlots, setDatesWithSlots] = useState([])
  const [loading, setLoading] = useState(false)
  const [saving, setSaving] = useState(false)

  const today = new Date().toISOString().split('T')[0]

  // Fetch all dates GP has slots on
  const fetchDatesWithSlots = async () => {
    try {
      const res = await API.get('/slots/gp')
      const dates = [...new Set(res.data.map(s => s.date))]
      setDatesWithSlots(dates)
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => { fetchDatesWithSlots() }, [])

  const fetchExistingSlots = async (date) => {
    if (!date) return
    setLoading(true)
    try {
      const res = await API.get(`/slots/gp?date=${date}`)
      setExistingSlots(res.data)
      setSelectedTimes(res.data.map(s => s.time))
    } catch (err) {
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (selectedDate) fetchExistingSlots(selectedDate)
  }, [selectedDate])

  const toggleTime = (time) => {
    setSelectedTimes(prev =>
      prev.includes(time) ? prev.filter(t => t !== time) : [...prev, time]
    )
  }

  const handleSave = async () => {
    if (!selectedDate) { toast.error('Please select a date first'); return }
    if (selectedTimes.length === 0) { toast.error('Please select at least one time slot'); return }
    setSaving(true)
    try {
      await API.post('/slots', { date: selectedDate, times: selectedTimes.sort() })
      toast.success(`${selectedTimes.length} slots saved!`)
      fetchDatesWithSlots()
      fetchExistingSlots(selectedDate)
    } catch (err) {
      toast.error(err.response?.data?.message || 'Failed to save slots')
    } finally {
      setSaving(false)
    }
  }

  // Calendar generator
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
    <GPLayout>
      <h1 style={{ fontSize: '22px', fontWeight: '500', color: '#212b32', marginBottom: '4px' }}>Manage availability slots</h1>
      <p style={{ fontSize: '14px', color: '#4c6272', marginBottom: '24px' }}>Set your available appointment times for patients to book</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px', alignItems: 'start' }}>

        {/* Left — Calendar + time picker */}
        <div style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '8px', padding: '24px' }}>

          {/* Calendar */}
          <div style={{ fontSize: '14px', fontWeight: '500', color: '#212b32', marginBottom: '12px' }}>{monthLabel}</div>

          {/* Legend */}
          <div style={{ display: 'flex', gap: '14px', marginBottom: '12px', flexWrap: 'wrap' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#4c6272' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#005EB8' }}></div> Today
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#4c6272' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#007f3b' }}></div> Slots added
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontSize: '12px', color: '#4c6272' }}>
              <div style={{ width: '10px', height: '10px', borderRadius: '50%', background: '#FAEEDA', border: '1px solid #ffb81c' }}></div> Selected
            </div>
          </div>

          {/* Day headers */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: '3px', marginBottom: '4px' }}>
            {['Su','Mo','Tu','We','Th','Fr','Sa'].map(d => (
              <div key={d} style={{ textAlign: 'center', fontSize: '11px', fontWeight: '500', color: '#4c6272', padding: '4px 0' }}>{d}</div>
            ))}
          </div>

          {/* Days */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(7,1fr)', gap: '3px', marginBottom: '16px' }}>
            {days.map((dateStr, i) => {
              if (!dateStr) return <div key={i}></div>
              const isToday = dateStr === today
              const isSelected = dateStr === selectedDate
              const isPast = dateStr < today
              const hasSlots = datesWithSlots.includes(dateStr)
              const dayNum = parseInt(dateStr.split('-')[2])

              let bg = 'transparent'
              let color = isPast ? '#ccc' : '#212b32'
              let border = 'none'
              let cursor = isPast ? 'not-allowed' : 'pointer'

              if (isSelected) { bg = '#FAEEDA'; color = '#633806'; border = '2px solid #ffb81c' }
              else if (isToday) { bg = '#005EB8'; color = '#fff' }
              else if (hasSlots) { bg = '#E1F5EE'; color = '#007f3b'; border = '1px solid #007f3b' }

              return (
                <div key={dateStr}
                  onClick={() => { if (!isPast) setSelectedDate(dateStr) }}
                  style={{ textAlign: 'center', padding: '7px 3px', borderRadius: '6px', background: bg, color, border, cursor, fontSize: '13px', fontWeight: hasSlots || isToday ? '500' : '400', transition: 'all .1s' }}>
                  {dayNum}
                  {hasSlots && !isToday && !isSelected && (
                    <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#007f3b', margin: '1px auto 0' }}></div>
                  )}
                </div>
              )
            })}
          </div>

          {/* Date input fallback */}
          <div style={{ borderTop: '0.5px solid #d8dde0', paddingTop: '14px', marginBottom: '16px' }}>
            <label style={{ display: 'block', fontSize: '13px', color: '#4c6272', marginBottom: '6px' }}>Or type a date:</label>
            <input type="date" value={selectedDate} min={today}
              onChange={e => { setSelectedDate(e.target.value); setSelectedTimes([]) }}
              style={{ width: '100%', padding: '8px 12px', border: '2px solid #4c6272', borderRadius: '4px', fontSize: '14px', color: '#212b32', fontFamily: 'inherit', outline: 'none', background: '#fff', colorScheme: 'light', boxSizing: 'border-box' }}
            />
          </div>

          {/* Time slots */}
          {selectedDate && (
            <>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                <span style={{ fontSize: '14px', fontWeight: '500', color: '#212b32' }}>Select times</span>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <button onClick={() => setSelectedTimes([...timeOptions])} style={{ fontSize: '12px', color: '#005EB8', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>All</button>
                  <button onClick={() => setSelectedTimes([])} style={{ fontSize: '12px', color: '#d5281b', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Clear</button>
                </div>
              </div>
              {loading ? (
                <p style={{ color: '#4c6272', fontSize: '14px' }}>Loading...</p>
              ) : (
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: '6px', marginBottom: '16px' }}>
                  {timeOptions.map(time => {
                    const isBooked = existingSlots.find(s => s.time === time && s.isBooked)
                    const isSelected = selectedTimes.includes(time)
                    return (
                      <button key={time} onClick={() => { if (!isBooked) toggleTime(time) }}
                        disabled={!!isBooked}
                        style={{ padding: '9px 6px', border: isSelected ? '2px solid #005EB8' : '1px solid #d8dde0', borderRadius: '4px', background: isBooked ? '#FAECE7' : isSelected ? '#005EB8' : '#fff', color: isBooked ? '#712B13' : isSelected ? '#fff' : '#212b32', fontSize: '12px', fontWeight: '500', cursor: isBooked ? 'not-allowed' : 'pointer', fontFamily: 'inherit', transition: 'all .15s' }}>
                        {time}{isBooked ? ' 🔒' : ''}
                      </button>
                    )
                  })}
                </div>
              )}

              <div style={{ background: '#E6F1FB', borderLeft: '4px solid #005EB8', padding: '8px 12px', borderRadius: '0 4px 4px 0', fontSize: '13px', color: '#0C447C', marginBottom: '14px' }}>
                {selectedTimes.length} slot{selectedTimes.length !== 1 ? 's' : ''} selected
              </div>

              <button onClick={handleSave} disabled={saving}
                style={{ width: '100%', padding: '12px', background: saving ? '#4c6272' : '#007f3b', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '14px', fontWeight: '500', cursor: saving ? 'not-allowed' : 'pointer', fontFamily: 'inherit' }}>
                {saving ? 'Saving...' : `Save ${selectedTimes.length} slots`}
              </button>
            </>
          )}
        </div>

        {/* Right — Tips + current slots */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

          <div style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '8px', padding: '20px 24px' }}>
            <div style={{ fontSize: '15px', fontWeight: '500', color: '#212b32', marginBottom: '14px' }}>💡 How it works</div>
            {[
              { step: '1', text: 'Click a date on the calendar (green = already has slots)' },
              { step: '2', text: 'Click the times you are available — red lock means already booked' },
              { step: '3', text: 'Click Save to publish your availability' },
              { step: '4', text: 'Patients can now see and book these times' },
            ].map(item => (
              <div key={item.step} style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#005EB8', color: '#fff', fontSize: '12px', fontWeight: '500', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  {item.step}
                </div>
                <span style={{ fontSize: '13px', color: '#4c6272', lineHeight: '1.5', paddingTop: '2px' }}>{item.text}</span>
              </div>
            ))}
          </div>

          {/* Dates summary */}
          {datesWithSlots.length > 0 && (
            <div style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '8px', padding: '20px 24px' }}>
              <div style={{ fontSize: '14px', fontWeight: '500', color: '#212b32', marginBottom: '12px' }}>
                Your scheduled dates ({datesWithSlots.length})
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {datesWithSlots.sort().filter(d => d >= today).slice(0, 8).map(date => {
                  const daySlots = existingSlots.filter(s => s.date === date)
                  return (
                    <div key={date} onClick={() => setSelectedDate(date)}
                      style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '8px 12px', background: selectedDate === date ? '#E6F1FB' : '#f0f4f5', borderRadius: '6px', cursor: 'pointer', border: selectedDate === date ? '1px solid #005EB8' : 'none' }}>
                      <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#007f3b', flexShrink: 0 }}></div>
                      <span style={{ fontSize: '13px', color: '#212b32', flex: 1 }}>
                        {new Date(date + 'T00:00:00').toLocaleDateString('en-GB', { weekday: 'short', day: 'numeric', month: 'short' })}
                      </span>
                      <span style={{ fontSize: '12px', color: '#4c6272' }}>
                        {date === today ? 'Today' : ''}
                      </span>
                    </div>
                  )
                })}
              </div>
            </div>
          )}

        </div>
      </div>
    </GPLayout>
  )
}