import { useNavigate } from 'react-router-dom'
import nhsServiceImage from '../assets/NHSservice.png'

export default function NhsService() {
  const navigate = useNavigate()

  const services = [
    {
      icon: 'ti-calendar-plus', iconBg: '#E6F1FB', iconColor: '#005EB8',
      title: 'GP Appointments',
      desc: 'Book routine and follow-up appointments with your registered GP online, by phone, or in person. Same-day urgent appointments are also available for acute conditions.',
      tags: ['Online booking', 'Same-day urgent', 'Follow-up visits']
    },
    {
      icon: 'ti-pill', iconBg: '#E1F5EE', iconColor: '#007f3b',
      title: 'Prescriptions',
      desc: 'Request repeat prescriptions online through your GP practice. Prescriptions can be sent directly to your chosen pharmacy, saving you time and unnecessary visits.',
      tags: ['Repeat prescriptions', 'Online requests', 'Pharmacy delivery']
    },
    {
      icon: 'ti-test-pipe', iconBg: '#FAEEDA', iconColor: '#633806',
      title: 'Test results',
      desc: 'Access your blood test results, X-rays, and other diagnostic results securely online. Your GP will review results and contact you if any action is required.',
      tags: ['Blood tests', 'X-rays', 'Diagnostic results']
    },
    {
      icon: 'ti-arrows-right', iconBg: '#EEEDFE', iconColor: '#534AB7',
      title: 'Referrals',
      desc: 'Your GP can refer you to specialist consultants, hospital departments, or community health services. NHS referrals are free and based on clinical need.',
      tags: ['Specialist referrals', 'Hospital services', 'Community health']
    },
    {
      icon: 'ti-heart-rate-monitor', iconBg: '#FAECE7', iconColor: '#712B13',
      title: 'Chronic disease management',
      desc: 'Regular monitoring and management of long-term conditions including diabetes, hypertension, asthma, COPD, and heart disease through dedicated clinics and review appointments.',
      tags: ['Diabetes', 'Hypertension', 'Asthma & COPD']
    },
    {
      icon: 'ti-vaccine', iconBg: '#E1F5EE', iconColor: '#085041',
      title: 'Vaccinations & immunisations',
      desc: 'NHS vaccination programmes including flu jabs, COVID-19 boosters, childhood immunisations, travel vaccines, and shingles vaccinations for eligible patients.',
      tags: ['Flu vaccine', 'COVID boosters', 'Travel vaccines']
    },
    {
      icon: 'ti-brain', iconBg: '#E6F1FB', iconColor: '#005EB8',
      title: 'Mental health support',
      desc: 'Access mental health services including counselling referrals, talking therapies (IAPT), medication management, and crisis support through your GP practice.',
      tags: ['Counselling', 'Talking therapies', 'Crisis support']
    },
    {
      icon: 'ti-baby-carriage', iconBg: '#FAEEDA', iconColor: '#633806',
      title: 'Maternity & family health',
      desc: 'Antenatal care, postnatal checks, family planning advice, child health surveillance, and new patient registrations for newborns are all available through your GP.',
      tags: ['Antenatal care', 'Family planning', 'Child health']
    },
    {
      icon: 'ti-wheelchair', iconBg: '#EEEDFE', iconColor: '#534AB7',
      title: 'Elderly & palliative care',
      desc: 'Dedicated support for elderly patients including home visits, medication reviews, falls prevention, and palliative care coordination for those with terminal conditions.',
      tags: ['Home visits', 'Medication reviews', 'Palliative care']
    },
  ]

  const urgencyLevels = [
    {
      level: 'Emergency', color: '#d5281b', bg: '#FAECE7',
      icon: 'ti-urgent',
      desc: 'Life-threatening condition',
      action: 'Call 999 immediately',
      examples: ['Chest pain', 'Difficulty breathing', 'Stroke symptoms', 'Severe bleeding']
    },
    {
      level: 'Urgent', color: '#ffb81c', bg: '#fff8e6',
      icon: 'ti-clock',
      desc: 'Needs attention today',
      action: 'Call NHS 111',
      examples: ['High fever', 'Severe pain', 'Mental health crisis', 'Urgent prescription']
    },
    {
      level: 'Routine', color: '#007f3b', bg: '#E1F5EE',
      icon: 'ti-calendar',
      desc: 'Non-urgent appointment',
      action: 'Book via this service',
      examples: ['Regular check-up', 'Follow-up', 'Test results', 'Prescription review']
    },
  ]

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
        <span style={{ fontSize: '14px', color: '#4c6272' }}>Health info</span>
        <span style={{ fontSize: '14px', color: '#4c6272', margin: '0 8px' }}>›</span>
        <span style={{ fontSize: '14px', color: '#4c6272' }}>NHS services</span>
      </div>

      {/* ── Hero — text left, image right ── */}
      <div style={{ background: '#005EB8', padding: '72px 6%', display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap', boxSizing: 'border-box' }}>

        {/* Left — text */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <div style={{ fontSize: '13px', fontWeight: '700', color: 'rgba(255,255,255,0.7)', letterSpacing: '1.5px', marginBottom: '14px' }}>NHS SERVICES</div>
          <h1 style={{ fontSize: '44px', fontWeight: '700', color: '#fff', lineHeight: '1.25', marginBottom: '20px' }}>
            NHS GP services available to you
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.88)', lineHeight: '1.75', marginBottom: '32px' }}>
            Your NHS GP practice offers a wide range of primary healthcare services — from routine check-ups and prescriptions to mental health support and specialist referrals. All services are free at the point of use for UK residents.
          </p>

          {/* Key stats */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px', marginBottom: '32px' }}>
            {[
              { num: 'Free',  label: 'At point of use' },
              { num: '9+',    label: 'GP services offered' },
              { num: '24/7',  label: 'Online booking' },
            ].map(stat => (
              <div key={stat.label} style={{ background: 'rgba(255,255,255,0.12)', borderRadius: '8px', padding: '16px', textAlign: 'center' }}>
                <div style={{ fontSize: '28px', fontWeight: '700', color: '#fff', marginBottom: '4px' }}>{stat.num}</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)' }}>{stat.label}</div>
              </div>
            ))}
          </div>

          <button
            onClick={() => navigate('/register')}
            style={{ padding: '14px 32px', background: '#007f3b', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '16px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit' }}
          >
            Book an appointment now
          </button>
        </div>

        {/* Right — image */}
        <div style={{ flex: '0 0 420px', minWidth: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '420px' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', zIndex: 0 }}></div>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '320px', height: '320px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', zIndex: 0 }}></div>
            <img
              src={nhsServiceImage}
              alt="NHS digital GP services on mobile"
              style={{ width: '100%', maxWidth: '420px', height: 'auto', position: 'relative', zIndex: 1, filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))' }}
            />
            {/* Badge */}
            <div style={{ position: 'absolute', bottom: '20px', right: '10px', background: '#007f3b', borderRadius: '8px', padding: '10px 16px', zIndex: 2 }}>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', marginBottom: '2px' }}>AVAILABLE</div>
              <div style={{ fontSize: '15px', fontWeight: '700', color: '#fff' }}>Online 24/7</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Info strip ── */}
      <div style={{ background: '#003087', padding: '20px 6%', display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'center', boxSizing: 'border-box' }}>
        {[
          { icon: 'ti-building-hospital', text: 'Primary care services' },
          { icon: 'ti-shield-check',      text: 'Free at point of use' },
          { icon: 'ti-users',             text: 'For all UK residents' },
          { icon: 'ti-device-mobile',     text: 'Book online anytime' },
        ].map(item => (
          <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <i className={`ti ${item.icon}`} style={{ color: '#7dd3a8', fontSize: '18px' }} aria-hidden="true"></i>
            <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', fontWeight: '500' }}>{item.text}</span>
          </div>
        ))}
      </div>

      {/* ── Know when to seek help ── */}
      <div style={{ background: '#fff', padding: '56px 6%', boxSizing: 'border-box' }}>
        <div style={{ fontSize: '13px', fontWeight: '700', color: '#005EB8', letterSpacing: '1px', marginBottom: '10px' }}>IMPORTANT</div>
        <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#212b32', marginBottom: '12px' }}>Know when to seek help</h2>
        <p style={{ fontSize: '16px', color: '#4c6272', marginBottom: '32px', lineHeight: '1.7' }}>
          Different situations require different responses. Always use the right service for your needs.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {urgencyLevels.map(level => (
            <div key={level.level} style={{ background: level.bg, borderRadius: '12px', padding: '28px', border: `2px solid ${level.color}` }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '12px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: level.color, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <i className={`ti ${level.icon}`} style={{ color: '#fff', fontSize: '20px' }} aria-hidden="true"></i>
                </div>
                <div>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: level.color }}>{level.level}</div>
                  <div style={{ fontSize: '13px', color: '#4c6272' }}>{level.desc}</div>
                </div>
              </div>
              <div style={{ background: level.color, borderRadius: '6px', padding: '10px 14px', marginBottom: '16px' }}>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#fff' }}>{level.action}</div>
              </div>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {level.examples.map(ex => (
                  <li key={ex} style={{ fontSize: '13px', color: '#4c6272', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <i className="ti ti-point-filled" style={{ color: level.color, fontSize: '10px', flexShrink: 0 }} aria-hidden="true"></i>
                    {ex}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* ── All services ── */}
      <div style={{ background: '#f0f4f5', padding: '56px 6%', boxSizing: 'border-box' }}>
        <div style={{ fontSize: '13px', fontWeight: '700', color: '#005EB8', letterSpacing: '1px', marginBottom: '10px' }}>WHAT WE OFFER</div>
        <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#212b32', marginBottom: '12px' }}>All GP services</h2>
        <p style={{ fontSize: '16px', color: '#4c6272', marginBottom: '40px', lineHeight: '1.7' }}>
          A full range of primary healthcare services available through your NHS GP practice
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {services.map(service => (
            <div key={service.title} style={{ background: '#fff', borderRadius: '12px', padding: '28px', border: '0.5px solid #d8dde0' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: service.iconBg, color: service.iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '16px' }}>
                <i className={`ti ${service.icon}`} aria-hidden="true"></i>
              </div>
              <div style={{ fontSize: '17px', fontWeight: '700', color: '#212b32', marginBottom: '8px' }}>{service.title}</div>
              <div style={{ fontSize: '14px', color: '#4c6272', lineHeight: '1.7', marginBottom: '16px' }}>{service.desc}</div>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {service.tags.map(tag => (
                  <span key={tag} style={{ background: '#f0f4f5', color: '#4c6272', fontSize: '11px', fontWeight: '600', padding: '3px 10px', borderRadius: '20px', border: '0.5px solid #d8dde0' }}>
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Image banner ── */}
      <div style={{ background: '#005EB8', padding: '56px 6%', display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap', boxSizing: 'border-box' }}>
        <div style={{ flex: '0 0 300px', minWidth: '200px', display: 'flex', justifyContent: 'center' }}>
          <img
            src={nhsServiceImage}
            alt="NHS services on mobile"
            style={{ width: '100%', maxWidth: '280px', height: 'auto', filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))' }}
          />
        </div>
        <div style={{ flex: 1, minWidth: '280px' }}>
          <div style={{ fontSize: '13px', fontWeight: '700', color: 'rgba(255,255,255,0.7)', letterSpacing: '1px', marginBottom: '12px' }}>BOOK ONLINE TODAY</div>
          <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#fff', marginBottom: '14px', lineHeight: 1.3 }}>
            Access NHS GP services from anywhere
          </h2>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', lineHeight: '1.7', marginBottom: '28px' }}>
            Our digital booking system gives you access to all NHS GP services online. Register in minutes and book your first appointment today — no phone calls, no waiting on hold.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/register')} style={{ padding: '14px 28px', background: '#007f3b', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '15px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit' }}>
              Register as patient
            </button>
            <button onClick={() => navigate('/login')} style={{ padding: '14px 28px', background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.6)', borderRadius: '6px', fontSize: '15px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit' }}>
              Sign in
            </button>
          </div>
        </div>
      </div>

      {/* ── Bottom CTA ── */}
      <div style={{ background: '#f0f4f5', padding: '48px 6%', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button onClick={() => navigate('/register')} style={{ padding: '14px 28px', background: '#005EB8', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '16px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit' }}>
            Book an appointment
          </button>
          <button onClick={() => navigate('/about')} style={{ padding: '14px 28px', background: 'transparent', color: '#005EB8', border: '2px solid #005EB8', borderRadius: '6px', fontSize: '16px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit' }}>
            About this service
          </button>
          <button onClick={() => navigate('/contact')} style={{ padding: '14px 28px', background: 'transparent', color: '#4c6272', border: '2px solid #d8dde0', borderRadius: '6px', fontSize: '16px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit' }}>
            Contact us
          </button>
        </div>
      </div>

    </div>
  )
}