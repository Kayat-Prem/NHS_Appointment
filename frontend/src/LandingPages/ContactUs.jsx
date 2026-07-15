import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import contactImage from '../assets/ContactUs.jpg'
import toast from 'react-hot-toast'

export default function ContactUs() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields')
      return
    }
    setSubmitted(true)
    toast.success('Message sent successfully!')
  }

  const inputStyle = {
    width: '100%', padding: '12px 14px',
    border: '2px solid #4c6272', borderRadius: '4px',
    fontSize: '15px', color: '#212b32', fontFamily: 'inherit',
    outline: 'none', background: '#fff',
    colorScheme: 'light', boxSizing: 'border-box'
  }

  const labelStyle = {
    display: 'block', fontSize: '15px',
    fontWeight: '600', color: '#212b32', marginBottom: '6px'
  }

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh', background: '#f0f4f5' }}>

      {/* NHS Header */}
      <div style={{ background: '#005EB8', padding: '0 6%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', cursor: 'pointer' }} onClick={() => navigate('/')}>
          <span style={{ background: '#fff', color: '#005EB8', fontSize: '16px', fontWeight: '900', padding: '4px 10px', borderRadius: '4px', letterSpacing: '2px' }}>NHS</span>
          <span style={{ color: '#fff', fontSize: '16px', fontWeight: '600' }}>GP Appointment Booking Service</span>
        </div>
        <button onClick={() => navigate(-1)} style={{ background: 'transparent', border: '1.5px solid rgba(255,255,255,0.6)', color: '#fff', padding: '7px 18px', borderRadius: '4px', fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit' }}>
          ← Back
        </button>
      </div>

      {/* Breadcrumb */}
      <div style={{ background: '#fff', padding: '12px 6%', borderBottom: '0.5px solid #d8dde0', boxSizing: 'border-box' }}>
        <span style={{ fontSize: '14px', color: '#005EB8', cursor: 'pointer' }} onClick={() => navigate('/')}>Home</span>
        <span style={{ fontSize: '14px', color: '#4c6272', margin: '0 8px' }}>›</span>
        <span style={{ fontSize: '14px', color: '#4c6272' }}>Contact us</span>
      </div>

      {/* ── Hero — text left, image right ── */}
      <div style={{ background: '#005EB8', padding: '72px 6%', display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap', boxSizing: 'border-box' }}>

        {/* Left — text */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <div style={{ fontSize: '13px', fontWeight: '700', color: 'rgba(255,255,255,0.7)', letterSpacing: '1.5px', marginBottom: '14px' }}>GET IN TOUCH</div>
          <h1 style={{ fontSize: '44px', fontWeight: '700', color: '#fff', lineHeight: '1.25', marginBottom: '20px' }}>
            We're here to help you
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.88)', lineHeight: '1.75', marginBottom: '32px' }}>
            Have a question, need support, or want to give feedback? Our team is ready to assist you. Reach out through any of the channels below and we'll respond as quickly as possible.
          </p>

          {/* Quick contact highlights */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {[
              { icon: 'ti-phone',    text: '0800 123 4567',        sub: 'Free phone support' },
              { icon: 'ti-mail',     text: 'support@nhsgp.nhs.uk', sub: 'Reply within 24 hours' },
              { icon: 'ti-clock',    text: 'Mon–Fri 8am–6pm',      sub: 'Opening hours' },
              { icon: 'ti-urgent',   text: 'Emergency? Call 999',   sub: 'Medical emergencies' },
            ].map(item => (
              <div key={item.text} style={{ background: 'rgba(255,255,255,0.12)', borderRadius: '10px', padding: '14px 16px', display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <i className={`ti ${item.icon}`} style={{ color: '#7dd3a8', fontSize: '20px', flexShrink: 0, marginTop: '2px' }} aria-hidden="true"></i>
                <div>
                  <div style={{ fontSize: '14px', fontWeight: '600', color: '#fff' }}>{item.text}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.65)', marginTop: '2px' }}>{item.sub}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image */}
        <div style={{ flex: '0 0 400px', minWidth: '260px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
            {/* Decorative glow circles */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '380px', height: '380px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', zIndex: 0 }}></div>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', zIndex: 0 }}></div>
            <img
              src={contactImage}
              alt="Two people connecting online — NHS digital contact"
              style={{ width: '100%', maxWidth: '400px', height: 'auto', position: 'relative', zIndex: 1, filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.25))' }}
            />
            {/* Badge */}
            <div style={{ position: 'absolute', bottom: '20px', left: '10px', background: '#007f3b', borderRadius: '8px', padding: '10px 16px', zIndex: 2 }}>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', marginBottom: '2px' }}>RESPONSE TIME</div>
              <div style={{ fontSize: '15px', fontWeight: '700', color: '#fff' }}>Within 24 hours</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Info strip ── */}
      <div style={{ background: '#003087', padding: '20px 6%', display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'center', boxSizing: 'border-box' }}>
        {[
          { icon: 'ti-headset',     text: 'Dedicated support team' },
          { icon: 'ti-clock',       text: 'Mon–Fri, 8am–6pm' },
          { icon: 'ti-mail-opened', text: 'Reply within 24 hours' },
          { icon: 'ti-map-pin',     text: 'NHS Digital, Leeds LS2 7UE' },
        ].map(item => (
          <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <i className={`ti ${item.icon}`} style={{ color: '#7dd3a8', fontSize: '18px' }} aria-hidden="true"></i>
            <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', fontWeight: '500' }}>{item.text}</span>
          </div>
        ))}
      </div>

      {/* ── Main content ── */}
      <div style={{ padding: '64px 6%', boxSizing: 'border-box' }}>
        <div style={{ fontSize: '13px', fontWeight: '700', color: '#005EB8', letterSpacing: '1px', marginBottom: '10px' }}>CONTACT US</div>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#212b32', marginBottom: '44px' }}>How can we help?</h2>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: '32px', alignItems: 'start' }}>

          {/* Left — contact info cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            {[
              {
                icon: 'ti-phone', iconBg: '#E6F1FB', iconColor: '#005EB8',
                title: 'Phone', lines: ['0800 123 4567', 'Mon–Fri, 8am–6pm', 'Free from UK landlines & mobiles']
              },
              {
                icon: 'ti-mail', iconBg: '#E1F5EE', iconColor: '#007f3b',
                title: 'Email', lines: ['support@nhsgp.nhs.uk', 'We reply within 24 hours']
              },
              {
                icon: 'ti-map-pin', iconBg: '#FAEEDA', iconColor: '#633806',
                title: 'Address', lines: ['NHS Digital', 'Quarry House, Quarry Hill', 'Leeds, LS2 7UE']
              },
              {
                icon: 'ti-urgent', iconBg: '#FAECE7', iconColor: '#712B13',
                title: 'Emergency', lines: ['Call 999 for life-threatening emergencies', 'Call NHS 111 for urgent medical advice']
              },
              {
                icon: 'ti-clock', iconBg: '#EEEDFE', iconColor: '#534AB7',
                title: 'Opening hours', lines: ['Monday – Friday: 8am – 6pm', 'Saturday: 9am – 1pm', 'Sunday & Bank Holidays: Closed']
              },
            ].map(item => (
              <div key={item.title} style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '12px', padding: '20px 24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: item.iconBg, color: item.iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0 }}>
                  <i className={`ti ${item.icon}`} aria-hidden="true"></i>
                </div>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: '700', color: '#212b32', marginBottom: '6px' }}>{item.title}</div>
                  {item.lines.map((line, i) => (
                    <div key={i} style={{ fontSize: '14px', color: i === 0 ? '#212b32' : '#4c6272', fontWeight: i === 0 ? '500' : '400', lineHeight: '1.6' }}>{line}</div>
                  ))}
                </div>
              </div>
            ))}

            {/* Image in contact info section */}
            <div style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '12px', overflow: 'hidden' }}>
              <img
                src={contactImage}
                alt="Online connection"
                style={{ width: '100%', height: '200px', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
              <div style={{ padding: '16px 20px' }}>
                <div style={{ fontSize: '15px', fontWeight: '700', color: '#212b32', marginBottom: '4px' }}>Connecting you with care</div>
                <div style={{ fontSize: '13px', color: '#4c6272', lineHeight: '1.6' }}>Our digital team bridges the gap between patients and healthcare professionals online.</div>
              </div>
            </div>
          </div>

          {/* Right — contact form */}
          <div style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '12px', padding: '36px' }}>
            {!submitted ? (
              <>
                <div style={{ fontSize: '22px', fontWeight: '700', color: '#212b32', marginBottom: '8px' }}>Send us a message</div>
                <p style={{ fontSize: '15px', color: '#4c6272', marginBottom: '28px', lineHeight: '1.6' }}>
                  Fill in the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '18px' }}>
                    <div>
                      <label style={labelStyle}>Full name <span style={{ color: '#d5281b' }}>*</span></label>
                      <input type="text" value={formData.name} onChange={e => setFormData({ ...formData, name: e.target.value })} placeholder="John Smith" style={inputStyle} required />
                    </div>
                    <div>
                      <label style={labelStyle}>Email address <span style={{ color: '#d5281b' }}>*</span></label>
                      <input type="email" value={formData.email} onChange={e => setFormData({ ...formData, email: e.target.value })} placeholder="your@email.com" style={inputStyle} required />
                    </div>
                  </div>

                  <div style={{ marginBottom: '18px' }}>
                    <label style={labelStyle}>Subject</label>
                    <select value={formData.subject} onChange={e => setFormData({ ...formData, subject: e.target.value })} style={inputStyle}>
                      <option value="">Select a subject</option>
                      <option>Booking issue</option>
                      <option>Account problem</option>
                      <option>Technical support</option>
                      <option>GP registration</option>
                      <option>General enquiry</option>
                      <option>Feedback</option>
                    </select>
                  </div>

                  <div style={{ marginBottom: '24px' }}>
                    <label style={labelStyle}>Message <span style={{ color: '#d5281b' }}>*</span></label>
                    <textarea
                      value={formData.message}
                      onChange={e => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Describe your issue or question in detail..."
                      rows={6}
                      style={{ ...inputStyle, resize: 'vertical' }}
                      required
                    />
                  </div>

                  <div style={{ background: '#fff8e6', borderLeft: '4px solid #ffb81c', padding: '12px 16px', borderRadius: '0 6px 6px 0', fontSize: '14px', color: '#6a4c00', marginBottom: '24px' }}>
                    <strong>Important:</strong> For medical emergencies, call <strong>999</strong>. For urgent medical advice, call <strong>NHS 111</strong>. This form is for service enquiries only.
                  </div>

                  <button type="submit" style={{ width: '100%', padding: '14px', background: '#005EB8', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '16px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit' }}>
                    Send message
                  </button>
                </form>
              </>
            ) : (
              /* Success state */
              <div style={{ textAlign: 'center', padding: '48px 20px' }}>
                <div style={{ width: '80px', height: '80px', borderRadius: '50%', background: '#E1F5EE', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
                  <i className="ti ti-circle-check" style={{ fontSize: '40px', color: '#007f3b' }} aria-hidden="true"></i>
                </div>
                <div style={{ fontSize: '24px', fontWeight: '700', color: '#212b32', marginBottom: '12px' }}>Message sent successfully!</div>
                <div style={{ fontSize: '16px', color: '#4c6272', marginBottom: '8px', lineHeight: '1.7' }}>
                  Thank you for getting in touch, <strong>{formData.name}</strong>.
                </div>
                <div style={{ fontSize: '15px', color: '#4c6272', marginBottom: '32px', lineHeight: '1.7' }}>
                  We'll respond to <strong>{formData.email}</strong> within 24 hours during working hours.
                </div>
                <img
                  src={contactImage}
                  alt="Connected"
                  style={{ width: '200px', height: 'auto', margin: '0 auto 28px', display: 'block', opacity: 0.85 }}
                />
                <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
                  <button onClick={() => navigate('/')} style={{ padding: '12px 28px', background: '#005EB8', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '15px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit' }}>
                    Back to home
                  </button>
                  <button onClick={() => { setSubmitted(false); setFormData({ name: '', email: '', subject: '', message: '' }) }} style={{ padding: '12px 28px', background: 'transparent', color: '#005EB8', border: '2px solid #005EB8', borderRadius: '6px', fontSize: '15px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit' }}>
                    Send another message
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}