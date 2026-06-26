import { useNavigate } from 'react-router-dom'

export default function Landing() {
  const navigate = useNavigate()

  const featureIconStyle = (bg, color) => ({
    width: '44px', height: '44px', borderRadius: '8px',
    background: bg, color: color,
    display: 'flex', alignItems: 'center',
    justifyContent: 'center', fontSize: '20px', marginBottom: '14px'
  })

  const features = [
    { icon: 'ti-clock',         bg: '#E6F1FB', color: '#005EB8', title: 'Book anytime, anywhere',   desc: 'No more waiting on hold. Book your GP appointment online 24 hours a day, 7 days a week.' },
    { icon: 'ti-shield-check',  bg: '#E1F5EE', color: '#007f3b', title: 'Secure and private',        desc: 'Your health information is protected. We follow NHS data security standards and UK GDPR.' },
    { icon: 'ti-mail',          bg: '#FAEEDA', color: '#633806', title: 'Instant confirmation',       desc: 'Receive email confirmation the moment your appointment is booked.' },
    { icon: 'ti-x',             bg: '#FAECE7', color: '#712B13', title: 'Easy cancellation',          desc: 'Cancel or reschedule online — helping free up slots for other patients.' },
    { icon: 'ti-users',         bg: '#EEEDFE', color: '#3C3489', title: 'Choose your GP',             desc: 'Browse available GPs by specialisation and pick the right doctor for you.' },
    { icon: 'ti-device-mobile', bg: '#E1F5EE', color: '#085041', title: 'Works on any device',        desc: 'Fully responsive — works on phone, tablet or desktop with no app to download.' },
  ]

  const roles = [
    {
      icon: '🧑‍💼', title: 'Patients', topColor: '#007f3b',
      desc: 'Register once and manage all your GP appointments in one secure place.',
      list: ['Book appointments online','View upcoming & past visits','Cancel or reschedule','Email confirmations'],
      listColor: '#007f3b', btnBg: '#007f3b', btnLabel: 'Register as patient',
      onClick: () => navigate('/register')
    },
    {
      icon: '👨‍⚕️', title: 'GPs & Doctors', topColor: '#005EB8',
      desc: 'Manage your schedule, patient notes and availability in one dashboard.',
      list: ['View daily schedule','Manage appointment slots','Add patient notes','Mark appointments complete'],
      listColor: '#005EB8', btnBg: '#005EB8', btnLabel: 'GP sign in',
      onClick: () => navigate('/login')
    },
    {
      icon: '🏥', title: 'Administrators', topColor: '#7F77DD',
      desc: 'Full oversight of the practice — manage staff, patients and all appointments.',
      list: ['Add and manage GPs','View all appointments','Monitor patient records','System-wide oversight'],
      listColor: '#7F77DD', btnBg: '#7F77DD', btnLabel: 'Admin sign in',
      onClick: () => navigate('/login')
    },
  ]

  const steps = [
    { num: 1, title: 'Create your account', desc: 'Register with your name, email and basic details. Takes less than 2 minutes.' },
    { num: 2, title: 'Choose a GP',          desc: 'Browse available GPs, see their specialisation and select the right one for you.' },
    { num: 3, title: 'Pick a time slot',     desc: 'See real-time availability and pick a date and time that works for you.' },
    { num: 4, title: 'Get confirmed',         desc: 'Receive an instant email confirmation with everything you need for your visit.' },
  ]

  return (
    <div style={{ fontFamily: 'sans-serif', background: '#f0f4f5', minHeight: '100vh' }}>

      {/* Navbar */}
      <div style={{ background: '#005EB8', padding: '0 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '56px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ background: '#fff', color: '#005EB8', fontSize: '13px', fontWeight: '700', padding: '4px 10px', borderRadius: '4px', letterSpacing: '1px' }}>NHS</span>
          <span style={{ color: '#fff', fontSize: '15px', fontWeight: '500' }}>GP Appointment Booking Service</span>
        </div>
        <div style={{ display: 'flex', gap: '12px' }}>
          <button onClick={() => navigate('/login')} style={{ padding: '8px 20px', background: 'transparent', border: '1.5px solid rgba(255,255,255,0.7)', color: '#fff', borderRadius: '4px', fontSize: '14px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit' }}>Sign in</button>
          <button onClick={() => navigate('/register')} style={{ padding: '8px 20px', background: '#fff', border: 'none', color: '#005EB8', borderRadius: '4px', fontSize: '14px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit' }}>Register</button>
        </div>
      </div>

      {/* Hero */}
      <div style={{ background: '#005EB8', padding: '64px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '40px', flexWrap: 'wrap' }}>
        <div style={{ flex: 1, minWidth: '280px' }}>
          <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.15)', color: '#fff', fontSize: '12px', fontWeight: '500', padding: '4px 12px', borderRadius: '20px', marginBottom: '16px', letterSpacing: '.5px' }}>NHS DIGITAL SERVICE</span>
          <h1 style={{ fontSize: '32px', fontWeight: '500', color: '#fff', lineHeight: '1.3', marginBottom: '16px' }}>Book your GP appointment online, anytime</h1>
          <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.85)', lineHeight: '1.7', marginBottom: '28px' }}>A simple, secure way to book, manage and track your NHS GP appointments — no phone calls, no waiting on hold.</p>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/register')} style={{ padding: '12px 28px', background: '#007f3b', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '15px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit' }}>Book an appointment</button>
            <button onClick={() => navigate('/login')} style={{ padding: '12px 28px', background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.7)', borderRadius: '4px', fontSize: '15px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit' }}>Sign in</button>
          </div>
        </div>

        {/* Quick access card */}
        <div style={{ flex: 1, minWidth: '280px', maxWidth: '380px' }}>
          <div style={{ background: '#fff', borderRadius: '8px', padding: '28px' }}>
            <div style={{ fontSize: '16px', fontWeight: '500', color: '#212b32', marginBottom: '20px' }}>Quick access</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { icon: 'ti-calendar-plus', bg: '#E1F5EE', color: '#007f3b', label: 'Book appointment',  sub: 'Choose a GP and time slot',   onClick: () => navigate('/register') },
                { icon: 'ti-calendar',      bg: '#E6F1FB', color: '#005EB8', label: 'My appointments',   sub: 'View and manage bookings',     onClick: () => navigate('/login') },
                { icon: 'ti-user',          bg: '#FAEEDA', color: '#633806', label: 'My profile',         sub: 'Update your details',          onClick: () => navigate('/login') },
              ].map(link => (
                <div key={link.label} onClick={link.onClick} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '12px 16px', background: '#f0f4f5', borderRadius: '4px', cursor: 'pointer', border: '0.5px solid #d8dde0' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: link.bg, color: link.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className={`ti ${link.icon}`} aria-hidden="true" style={{ fontSize: '16px' }}></i>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '14px', fontWeight: '500', color: '#212b32' }}>{link.label}</div>
                    <div style={{ fontSize: '12px', color: '#4c6272' }}>{link.sub}</div>
                  </div>
                  <i className="ti ti-chevron-right" aria-hidden="true" style={{ color: '#4c6272', fontSize: '16px' }}></i>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Stats */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', background: '#003087' }}>
        {[
          { num: '15M+', label: 'Appointments managed annually' },
          { num: '68M',  label: 'UK patients served by NHS' },
          { num: '24/7', label: 'Online booking availability' },
        ].map((s, i) => (
          <div key={i} style={{ padding: '28px', textAlign: 'center', borderRight: i < 2 ? '0.5px solid rgba(255,255,255,0.15)' : 'none' }}>
            <div style={{ fontSize: '32px', fontWeight: '500', color: '#fff', marginBottom: '4px' }}>{s.num}</div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.75)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Features */}
      <div style={{ padding: '56px 40px', background: '#fff' }}>
        <div style={{ fontSize: '12px', fontWeight: '500', color: '#005EB8', letterSpacing: '.5px', marginBottom: '8px' }}>WHY USE THIS SERVICE</div>
        <div style={{ fontSize: '24px', fontWeight: '500', color: '#212b32', marginBottom: '8px' }}>Everything you need in one place</div>
        <div style={{ fontSize: '15px', color: '#4c6272', marginBottom: '36px' }}>Designed to make accessing NHS primary care simpler for everyone</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px,1fr))', gap: '16px' }}>
          {features.map(f => (
            <div key={f.title} style={{ background: '#f0f4f5', borderRadius: '8px', padding: '24px', border: '0.5px solid #d8dde0' }}>
              <div style={featureIconStyle(f.bg, f.color)}>
                <i className={`ti ${f.icon}`} aria-hidden="true"></i>
              </div>
              <div style={{ fontSize: '15px', fontWeight: '500', color: '#212b32', marginBottom: '6px' }}>{f.title}</div>
              <div style={{ fontSize: '13px', color: '#4c6272', lineHeight: '1.6' }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Roles */}
      <div style={{ padding: '56px 40px', background: '#f0f4f5' }}>
        <div style={{ fontSize: '12px', fontWeight: '500', color: '#005EB8', letterSpacing: '.5px', marginBottom: '8px' }}>WHO IS THIS FOR</div>
        <div style={{ fontSize: '24px', fontWeight: '500', color: '#212b32', marginBottom: '8px' }}>Built for everyone in the practice</div>
        <div style={{ fontSize: '15px', color: '#4c6272', marginBottom: '36px' }}>Different dashboards for patients, GPs, and administrators</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px,1fr))', gap: '16px' }}>
          {roles.map(role => (
            <div key={role.title} style={{ background: '#fff', borderRadius: '8px', padding: '24px', border: '0.5px solid #d8dde0', borderTop: `4px solid ${role.topColor}` }}>
              <div style={{ fontSize: '28px', marginBottom: '12px' }}>{role.icon}</div>
              <div style={{ fontSize: '16px', fontWeight: '500', color: '#212b32', marginBottom: '6px' }}>{role.title}</div>
              <div style={{ fontSize: '13px', color: '#4c6272', lineHeight: '1.6', marginBottom: '16px' }}>{role.desc}</div>
              <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '6px', marginBottom: '16px' }}>
                {role.list.map(item => (
                  <li key={item} style={{ fontSize: '12px', color: '#4c6272', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ color: role.listColor, fontWeight: '700' }}>✓</span>{item}
                  </li>
                ))}
              </ul>
              <button onClick={role.onClick} style={{ width: '100%', padding: '10px', background: role.btnBg, color: '#fff', border: 'none', borderRadius: '4px', fontSize: '13px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit' }}>
                {role.btnLabel}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* How it works */}
      <div style={{ padding: '56px 40px', background: '#fff' }}>
        <div style={{ fontSize: '12px', fontWeight: '500', color: '#005EB8', letterSpacing: '.5px', marginBottom: '8px' }}>HOW IT WORKS</div>
        <div style={{ fontSize: '24px', fontWeight: '500', color: '#212b32', marginBottom: '8px' }}>Book your appointment in 4 simple steps</div>
        <div style={{ fontSize: '15px', color: '#4c6272', marginBottom: '36px' }}>From registration to confirmation in minutes</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit,minmax(160px,1fr))', gap: '16px' }}>
          {steps.map(step => (
            <div key={step.num} style={{ textAlign: 'center', padding: '20px 16px' }}>
              <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: '#005EB8', color: '#fff', fontSize: '16px', fontWeight: '500', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 12px' }}>{step.num}</div>
              <div style={{ fontSize: '14px', fontWeight: '500', color: '#212b32', marginBottom: '6px' }}>{step.title}</div>
              <div style={{ fontSize: '12px', color: '#4c6272', lineHeight: '1.6' }}>{step.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div style={{ background: '#005EB8', padding: '56px 40px', textAlign: 'center' }}>
        <div style={{ fontSize: '26px', fontWeight: '500', color: '#fff', marginBottom: '10px' }}>Ready to book your appointment?</div>
        <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.85)', marginBottom: '28px' }}>Join thousands of patients already using the NHS online booking service</div>
        <div style={{ display: 'flex', gap: '12px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => navigate('/register')} style={{ padding: '12px 28px', background: '#007f3b', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '15px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit' }}>Create free account</button>
          <button onClick={() => navigate('/login')} style={{ padding: '12px 28px', background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.7)', borderRadius: '4px', fontSize: '15px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit' }}>Sign in</button>
        </div>
      </div>

      {/* Footer */}
      <div style={{ background: '#212b32', padding: '28px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <span style={{ background: '#fff', color: '#212b32', fontSize: '13px', fontWeight: '700', padding: '3px 8px', borderRadius: '4px', letterSpacing: '1px' }}>NHS</span>
          <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)' }}>© 2026 NHS GP Appointment Booking Service</span>
        </div>
        <div style={{ display: 'flex', gap: '20px' }}>
          {['Privacy policy', 'Accessibility', 'Contact', 'Terms of use'].map(link => (
            <span key={link} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', cursor: 'pointer' }}>{link}</span>
          ))}
        </div>
      </div>

    </div>
  )
}