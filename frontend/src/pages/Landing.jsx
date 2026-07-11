import { useNavigate } from 'react-router-dom'

export default function Landing() {
  const navigate = useNavigate()

  const features = [
    { icon: 'ti-clock',         bg: '#E6F1FB', color: '#005EB8', title: 'Book anytime, anywhere',  desc: 'No more waiting on hold. Book your GP appointment online 24 hours a day, 7 days a week.' },
    { icon: 'ti-shield-check',  bg: '#E1F5EE', color: '#007f3b', title: 'Secure and private',       desc: 'Your health information is protected. We follow NHS data security standards and UK GDPR.' },
    { icon: 'ti-mail',          bg: '#FAEEDA', color: '#633806', title: 'Instant confirmation',      desc: 'Receive email confirmation the moment your appointment is booked.' },
    { icon: 'ti-x',             bg: '#FAECE7', color: '#712B13', title: 'Easy cancellation',         desc: 'Cancel or reschedule online — helping free up slots for other patients.' },
    { icon: 'ti-users',         bg: '#EEEDFE', color: '#3C3489', title: 'Choose your GP',            desc: 'Browse available GPs by specialisation and pick the right doctor for you.' },
    { icon: 'ti-device-mobile', bg: '#E1F5EE', color: '#085041', title: 'Works on any device',       desc: 'Fully responsive — works on phone, tablet or desktop with no app to download.' },
  ]

  const roles = [
    {
      icon: '🧑‍💼', title: 'Patients', topColor: '#007f3b',
      desc: 'Register once and manage all your GP appointments in one secure place.',
      list: ['Book appointments online', 'View upcoming & past visits', 'Cancel or reschedule', 'Email confirmations'],
      listColor: '#007f3b', btnBg: '#007f3b', btnLabel: 'Register as patient',
      onClick: () => navigate('/register')
    },
    {
      icon: '👨‍⚕️', title: 'GPs & Doctors', topColor: '#005EB8',
      desc: 'Manage your schedule, patient notes and availability in one dashboard.',
      list: ['View daily schedule', 'Manage appointment slots', 'Add patient notes', 'Mark appointments complete'],
      listColor: '#005EB8', btnBg: '#005EB8', btnLabel: 'GP sign in',
      onClick: () => navigate('/login')
    },
    {
      icon: '🏥', title: 'Administrators', topColor: '#7F77DD',
      desc: 'Full oversight of the practice — manage staff, patients and all appointments.',
      list: ['Add and manage GPs', 'View all appointments', 'Monitor patient records', 'System-wide oversight'],
      listColor: '#7F77DD', btnBg: '#7F77DD', btnLabel: 'Admin sign in',
      onClick: () => navigate('/login')
    },
  ]

  const steps = [
    { num: 1, title: 'Create your account', desc: 'Register with your name, email and basic details. Takes less than 2 minutes.' },
    { num: 2, title: 'Choose a GP',         desc: 'Browse available GPs, see their specialisation and select the right one for you.' },
    { num: 3, title: 'Pick a time slot',    desc: 'See real-time availability and pick a date and time that works for you.' },
    { num: 4, title: 'Get confirmed',       desc: 'Receive an instant email confirmation with everything you need for your visit.' },
  ]

  const S = {
    page: {
      fontFamily: 'Arial, sans-serif',
      minHeight: '100vh',
      width: '100%',
      margin: 0,
      padding: 0,
      overflowX: 'hidden',
      display: 'block',
    },
    section: (bg) => ({
      width: '100%',
      background: bg,
      padding: '64px 6%',
      boxSizing: 'border-box',
    }),
  }

  return (
    <div style={S.page}>

      {/* ── Navbar ── */}
      <div style={{ width: '100%', background: '#005EB8', padding: '0 6%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
          <span style={{ background: '#fff', color: '#005EB8', fontSize: '14px', fontWeight: '700', padding: '4px 10px', borderRadius: '4px', letterSpacing: '1px' }}>NHS</span>
          <span style={{ color: '#fff', fontSize: '16px', fontWeight: '500' }}>GP Appointment Booking Service</span>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button onClick={() => navigate('/login')} style={{ padding: '9px 22px', background: 'transparent', border: '1.5px solid rgba(255,255,255,0.8)', color: '#fff', borderRadius: '4px', fontSize: '14px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit' }}>Sign in</button>
          <button onClick={() => navigate('/register')} style={{ padding: '9px 22px', background: '#fff', border: 'none', color: '#005EB8', borderRadius: '4px', fontSize: '14px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit' }}>Register</button>
        </div>
      </div>

      {/* ── Hero ── */}
      <div style={{ width: '100%', background: '#005EB8', padding: '80px 6%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '48px', flexWrap: 'wrap', boxSizing: 'border-box' }}>
        <div style={{ flex: 1, minWidth: '300px' }}>
          <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.18)', color: '#fff', fontSize: '12px', fontWeight: '600', padding: '5px 14px', borderRadius: '20px', marginBottom: '20px', letterSpacing: '1px' }}>NHS DIGITAL SERVICE</span>
          <h1 style={{ fontSize: '42px', fontWeight: '600', color: '#fff', lineHeight: '1.25', marginBottom: '20px', fontFamily: 'Arial, sans-serif' }}>
            Book your GP appointment online, anytime
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.88)', lineHeight: '1.7', marginBottom: '32px' }}>
            A simple, secure way to book, manage and track your NHS GP appointments — no phone calls, no waiting on hold.
          </p>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/register')} style={{ padding: '14px 32px', background: '#007f3b', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '16px', fontWeight: '600', cursor: 'pointer', fontFamily: 'inherit' }}>Book an appointment</button>
            <button onClick={() => navigate('/login')} style={{ padding: '14px 32px', background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.75)', borderRadius: '4px', fontSize: '16px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit' }}>Sign in</button>
          </div>
        </div>

        {/* Quick access card */}
        <div style={{ flex: '0 0 400px', minWidth: '300px' }}>
          <div style={{ background: '#fff', borderRadius: '10px', padding: '32px' }}>
            <div style={{ fontSize: '18px', fontWeight: '600', color: '#212b32', marginBottom: '20px' }}>Quick access</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { icon: 'ti-calendar-plus', bg: '#E1F5EE', color: '#007f3b', label: 'Book appointment', sub: 'Choose a GP and time slot', onClick: () => navigate('/register') },
                { icon: 'ti-calendar',      bg: '#E6F1FB', color: '#005EB8', label: 'My appointments',  sub: 'View and manage bookings',  onClick: () => navigate('/login') },
                { icon: 'ti-user',          bg: '#FAEEDA', color: '#633806', label: 'My profile',        sub: 'Update your details',       onClick: () => navigate('/login') },
              ].map(link => (
                <div key={link.label} onClick={link.onClick}
                  style={{ display: 'flex', alignItems: 'center', gap: '14px', padding: '14px 16px', background: '#f0f4f5', borderRadius: '6px', cursor: 'pointer', border: '0.5px solid #d8dde0' }}>
                  <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: link.bg, color: link.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className={`ti ${link.icon}`} style={{ fontSize: '18px' }} aria-hidden="true"></i>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '15px', fontWeight: '600', color: '#212b32' }}>{link.label}</div>
                    <div style={{ fontSize: '13px', color: '#4c6272' }}>{link.sub}</div>
                  </div>
                  <i className="ti ti-chevron-right" style={{ color: '#4c6272', fontSize: '18px' }} aria-hidden="true"></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats ── */}
      <div style={{ width: '100%', display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', background: '#003087', boxSizing: 'border-box' }}>
        {[
          { num: '15M+', label: 'Appointments managed annually' },
          { num: '68M',  label: 'UK patients served by NHS' },
          { num: '24/7', label: 'Online booking availability' },
        ].map((s, i) => (
          <div key={i} style={{ padding: '36px 20px', textAlign: 'center', borderRight: i < 2 ? '0.5px solid rgba(255,255,255,0.15)' : 'none' }}>
            <div style={{ fontSize: '40px', fontWeight: '600', color: '#fff', marginBottom: '6px' }}>{s.num}</div>
            <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.75)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── Features ── */}
      <div style={{ ...S.section('#fff') }}>
        <div style={{ fontSize: '13px', fontWeight: '600', color: '#005EB8', letterSpacing: '1px', marginBottom: '10px' }}>WHY USE THIS SERVICE</div>
        <div style={{ fontSize: '28px', fontWeight: '600', color: '#212b32', marginBottom: '10px' }}>Everything you need in one place</div>
        <div style={{ fontSize: '16px', color: '#4c6272', marginBottom: '40px' }}>Designed to make accessing NHS primary care simpler for everyone</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px,1fr))', gap: '30px' }}>
          {features.map(f => (
            <div key={f.title} style={{ background: '#f0f4f5', borderRadius: '10px', padding: '40px', border: '0.5px solid #d8dde0'}}>
              <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: f.bg, color: f.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', marginBottom: '16px' }}>
                <i className={`ti ${f.icon}`} aria-hidden="true"></i>
              </div>
              <div style={{ fontSize: '16px', fontWeight: '600', color: '#212b32', marginBottom: '8px' }}>{f.title}</div>
              <div style={{ fontSize: '14px', color: '#4c6272', lineHeight: '1.65' }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Roles ── */}
      <div style={{ ...S.section('#f0f4f5') }}>
        <div style={{ fontSize: '13px', fontWeight: '600', color: '#005EB8', letterSpacing: '1px', marginBottom: '10px' }}>WHO IS THIS FOR</div>
        <div style={{ fontSize: '28px', fontWeight: '600', color: '#212b32', marginBottom: '10px' }}>Built for everyone in the practice</div>
        <div style={{ fontSize: '16px', color: '#4c6272', marginBottom: '40px' }}>Different dashboards for patients, GPs, and administrators</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px,1fr))', gap: '20px' }}>
          {roles.map(role => (
            <div key={role.title} style={{ background: '#fff', borderRadius: '10px', padding: '28px', border: '0.5px solid #d8dde0', borderTop: `4px solid ${role.topColor}` }}>
              <div style={{ fontSize: '32px', marginBottom: '14px' }}>{role.icon}</div>
              <div style={{ fontSize: '18px', fontWeight: '600', color: '#212b32', marginBottom: '8px' }}>{role.title}</div>
              <div style={{ fontSize: '14px', color: '#4c6272', lineHeight: '1.65', marginBottom: '18px' }}>{role.desc}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 20px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {role.list.map(item => (
                  <li key={item} style={{ fontSize: '13px', color: '#4c6272', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: role.listColor, fontWeight: '700', fontSize: '15px' }}>✓</span>{item}
                  </li>
                ))}
              </ul>
              <button onClick={role.onClick} style={{ width: '100%', padding: '12px', background: role.btnBg, color: '#fff', border: 'none', borderRadius: '4px', fontSize: '14px', fontWeight: '600', cursor: 'pointer', fontFamily: 'inherit' }}>
                {role.btnLabel}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ── How it works ── */}
      <div style={{ ...S.section('#fff') }}>
        <div style={{ fontSize: '13px', fontWeight: '600', color: '#005EB8', letterSpacing: '1px', marginBottom: '10px' }}>HOW IT WORKS</div>
        <div style={{ fontSize: '28px', fontWeight: '600', color: '#212b32', marginBottom: '10px' }}>Book your appointment in 4 simple steps</div>
        <div style={{ fontSize: '16px', color: '#4c6272', marginBottom: '40px' }}>From registration to confirmation in minutes</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px,1fr))', gap: '20px' }}>
          {steps.map(step => (
            <div key={step.num} style={{ textAlign: 'center', padding: '24px 20px' }}>
              <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#005EB8', color: '#fff', fontSize: '20px', fontWeight: '600', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>{step.num}</div>
              <div style={{ fontSize: '16px', fontWeight: '600', color: '#212b32', marginBottom: '8px' }}>{step.title}</div>
              <div style={{ fontSize: '14px', color: '#4c6272', lineHeight: '1.65' }}>{step.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div style={{ width: '100%', background: '#005EB8', padding: '80px 6%', textAlign: 'center', boxSizing: 'border-box' }}>
        <div style={{ fontSize: '32px', fontWeight: '600', color: '#fff', marginBottom: '12px' }}>Ready to book your appointment?</div>
        <div style={{ fontSize: '17px', color: 'rgba(255,255,255,0.85)', marginBottom: '32px' }}>Join thousands of patients already using the NHS online booking service</div>
        <div style={{ display: 'flex', gap: '14px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => navigate('/register')} style={{ padding: '14px 32px', background: '#007f3b', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '16px', fontWeight: '600', cursor: 'pointer', fontFamily: 'inherit' }}>Create free account</button>
          <button onClick={() => navigate('/login')} style={{ padding: '14px 32px', background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.75)', borderRadius: '4px', fontSize: '16px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit' }}>Sign in</button>
        </div>
      </div>

      {/* ── Footer ── */}
      <div style={{ width: '100%', background: '#212b32', padding: '32px 6%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '14px', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ background: '#fff', color: '#212b32', fontSize: '13px', fontWeight: '700', padding: '3px 8px', borderRadius: '4px', letterSpacing: '1px' }}>NHS</span>
          <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)' }}>© 2026 NHS GP Appointment Booking Service</span>
        </div>
        <div style={{ display: 'flex', gap: '24px' }}>
          {['Privacy policy', 'Accessibility', 'Contact', 'Terms of use'].map(link => (
            <span key={link} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', cursor: 'pointer' }}>{link}</span>
          ))}
        </div>
      </div>

    </div>
  )
}