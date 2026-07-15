import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Landing() {
  const navigate = useNavigate()
  const [activeDropdown, setActiveDropdown] = useState(null)

  const features = [
    { icon: 'ti-clock',         bg: '#E6F1FB', color: '#005EB8', title: 'Book anytime, anywhere',  desc: 'No more waiting on hold. Book your GP appointment online 24 hours a day, 7 days a week, from any device.' },
    { icon: 'ti-shield-check',  bg: '#E1F5EE', color: '#007f3b', title: 'Secure and private',       desc: 'Your health information is fully protected. We follow NHS data security standards and comply with UK GDPR.' },
    { icon: 'ti-mail',          bg: '#FAEEDA', color: '#633806', title: 'Instant confirmation',      desc: 'Receive an email confirmation the moment your appointment is booked, with all the details you need.' },
    { icon: 'ti-calendar-x',    bg: '#FAECE7', color: '#712B13', title: 'Easy cancellation',         desc: 'Cancel or reschedule your appointment online at any time — helping free up slots for other patients.' },
    { icon: 'ti-stethoscope',   bg: '#EEEDFE', color: '#3C3489', title: 'Choose your GP',            desc: 'Browse all available GPs, view their specialisation and availability, and pick the right doctor for you.' },
    { icon: 'ti-device-mobile', bg: '#E1F5EE', color: '#085041', title: 'Works on any device',       desc: 'Fully responsive design — works perfectly on your phone, tablet or desktop with no app to download.' },
  ]

  const roles = [
    {
      icon: 'ti-user-heart', iconBg: '#E1F5EE', iconColor: '#007f3b',
      title: 'Patients', topColor: '#007f3b',
      desc: 'Register once and manage all your NHS GP appointments in one secure, easy-to-use place.',
      list: ['Book appointments online', 'View upcoming & past visits', 'Cancel or reschedule easily', 'Receive email confirmations'],
      listColor: '#007f3b', btnBg: '#007f3b', btnLabel: 'Register as patient',
      onClick: () => navigate('/register')
    },
    {
      icon: 'ti-stethoscope', iconBg: '#E6F1FB', iconColor: '#005EB8',
      title: 'GPs & Doctors', topColor: '#005EB8',
      desc: 'Manage your schedule, patient records and availability all in one professional dashboard.',
      list: ['View your daily schedule', 'Manage appointment slots', 'Add and review patient notes', 'Mark appointments as complete'],
      listColor: '#005EB8', btnBg: '#005EB8', btnLabel: 'GP sign in',
      onClick: () => navigate('/login')
    },
    {
      icon: 'ti-building-hospital', iconBg: '#EEEDFE', iconColor: '#534AB7',
      title: 'Administrators', topColor: '#7F77DD',
      desc: 'Full oversight of the practice — manage your entire team, patients and all appointments.',
      list: ['Add and manage GP accounts', 'View all appointments system-wide', 'Monitor patient registrations', 'System-wide oversight & reports'],
      listColor: '#7F77DD', btnBg: '#7F77DD', btnLabel: 'Admin sign in',
      onClick: () => navigate('/login')
    },
  ]

  const steps = [
    { num: 1, icon: 'ti-user-plus',      title: 'Create your account', desc: 'Register with your name, email and basic details in under 2 minutes.' },
    { num: 2, icon: 'ti-stethoscope',    title: 'Choose your GP',      desc: 'Browse available GPs, view specialisations and select the right doctor.' },
    { num: 3, icon: 'ti-clock',          title: 'Pick a time slot',    desc: 'See real-time availability and pick a date and time that suits you.' },
    { num: 4, icon: 'ti-circle-check',   title: 'Get confirmed',       desc: 'Receive instant email confirmation with all your appointment details.' },
  ]

  const navItems = [
    { label: 'Home', onClick: () => window.scrollTo({ top: 0, behavior: 'smooth' }), dropdown: null },
    {
      label: 'Appointments', dropdown: [
        { label: 'Book an appointment', onClick: () => navigate('/register') },
        { label: 'My appointments',     onClick: () => navigate('/login') },
        { label: 'Cancel appointment',  onClick: () => navigate('/login') },
        { label: 'Urgent appointment',  onClick: () => navigate('/register') },
      ]
    },
    {
      label: 'Online Services', dropdown: [
        { label: 'Patient portal',  onClick: () => navigate('/login') },
        { label: 'GP portal',       onClick: () => navigate('/login') },
        { label: 'Test results',    onClick: () => navigate('/login') },
        { label: 'Prescriptions',   onClick: () => navigate('/login') },
      ]
    },
    {
      label: 'How it works', dropdown: [
        { label: 'Register as patient', onClick: () => navigate('/register') },
        { label: 'Find a GP',           onClick: () => navigate('/register') },
        { label: 'Book a slot',         onClick: () => navigate('/register') },
        { label: 'Get confirmation',    onClick: () => navigate('/register') },
      ]
    },
    {
      label: 'Health Info', dropdown: [
        { label: 'NHS services',   onClick: () => {} },
        { label: 'GP services',    onClick: () => {} },
        { label: 'When to see a GP', onClick: () => {} },
        { label: 'Accessibility',  onClick: () => {} },
      ]
    },
    {
      label: 'About',
      dropdown: [
        { label: 'About this service', onClick: () => navigate('/about') },
        { label: 'Contact us',         onClick: () => navigate('/contact') },
        { label: 'NHS digital policy', onClick: () => navigate('/nhs-policy') },
        {label: 'Privacy policy', onClick: () => navigate('/privacy') }
      ]
    },
    { label: 'Register Online', onClick: () => navigate('/register'), highlight: true, dropdown: null },
  ]

  const S = {
    page: { fontFamily: 'Arial, sans-serif', minHeight: '100vh', width: '100%', margin: 0, padding: 0, overflowX: 'hidden', display: 'block' },
    section: (bg) => ({ width: '100%', background: bg, padding: '72px 6%', boxSizing: 'border-box' }),
    sectionLabel: { fontSize: '13px', fontWeight: '700', color: '#005EB8', letterSpacing: '1.5px', marginBottom: '12px', textTransform: 'uppercase' },
    sectionTitle: { fontSize: '32px', fontWeight: '700', color: '#212b32', marginBottom: '12px', lineHeight: 1.3 },
    sectionSub: { fontSize: '18px', color: '#4c6272', marginBottom: '44px', lineHeight: 1.6 },
  }

  return (
    <div style={S.page}>

      {/* ── Navbar ── */}
      <div style={{ position: 'sticky', top: 0, zIndex: 1000, width: '100%' }}>

        {/* Top bar */}
        <div style={{ width: '100%', background: '#003087', padding: '10px 6%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', boxSizing: 'border-box' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px', cursor: 'pointer' }} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
            <span style={{ background: '#fff', color: '#005EB8', fontSize: '20px', fontWeight: '900', padding: '5px 12px', borderRadius: '4px', letterSpacing: '2px', lineHeight: 1 }}>NHS</span>
            <div>
              <div style={{ color: '#fff', fontSize: '17px', fontWeight: '700', lineHeight: 1.2 }}>GP Appointment</div>
              <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '12px', lineHeight: 1.4 }}>Booking Service</div>
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '14px' }}>
            <div style={{ display: 'flex', alignItems: 'center', background: '#fff', borderRadius: '4px', overflow: 'hidden', height: '36px' }}>
              <input type="text" placeholder="Search..." style={{ border: 'none', outline: 'none', padding: '0 14px', fontSize: '14px', width: '200px', height: '100%', fontFamily: 'inherit', color: '#212b32' }} />
              <div style={{ background: '#007f3b', width: '40px', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                <i className="ti ti-search" style={{ color: '#fff', fontSize: '17px' }} aria-hidden="true"></i>
              </div>
            </div>
            <button onClick={() => navigate('/login')} style={{ padding: '8px 20px', background: 'transparent', border: '1.5px solid rgba(255,255,255,0.6)', color: '#fff', borderRadius: '4px', fontSize: '14px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit' }}>Sign in</button>
            <button onClick={() => navigate('/register')} style={{ padding: '8px 20px', background: '#007f3b', border: 'none', color: '#fff', borderRadius: '4px', fontSize: '14px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit' }}>Register</button>
          </div>
        </div>

        {/* Bottom nav bar */}
        <div style={{ width: '100%', background: '#005EB8', boxSizing: 'border-box' }}>
          <div style={{ padding: '0 6%', display: 'flex', alignItems: 'center', boxSizing: 'border-box' }}>
            {navItems.map((item) => (
              <div key={item.label} style={{ position: 'relative' }}
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}>
                <div onClick={item.onClick} style={{ padding: '15px 18px', color: '#fff', fontSize: '15px', fontWeight: item.highlight ? '700' : '500', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', borderBottom: activeDropdown === item.label ? '3px solid #fff' : '3px solid transparent', background: item.highlight ? '#007f3b' : activeDropdown === item.label ? 'rgba(255,255,255,0.1)' : 'transparent', whiteSpace: 'nowrap', userSelect: 'none', transition: 'all .15s' }}>
                  {item.label}
                  {item.dropdown && <i className={`ti ti-chevron-${activeDropdown === item.label ? 'up' : 'down'}`} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.8)' }} aria-hidden="true"></i>}
                </div>
                {item.dropdown && activeDropdown === item.label && (
                  <div style={{ position: 'absolute', top: '100%', left: 0, background: '#fff', borderRadius: '0 0 8px 8px', boxShadow: '0 10px 30px rgba(0,0,0,0.15)', minWidth: '230px', zIndex: 2000, borderTop: '3px solid #005EB8', overflow: 'hidden' }}>
                    {item.dropdown.map((drop, di) => (
                      <div key={drop.label} onClick={drop.onClick}
                        style={{ padding: '13px 20px', fontSize: '15px', color: '#212b32', cursor: 'pointer', borderBottom: di < item.dropdown.length - 1 ? '0.5px solid #f0f4f5' : 'none', display: 'flex', alignItems: 'center', gap: '10px' }}
                        onMouseEnter={e => e.currentTarget.style.background = '#f0f4f5'}
                        onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                        <i className="ti ti-chevron-right" style={{ fontSize: '13px', color: '#005EB8' }} aria-hidden="true"></i>
                        {drop.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Hero ── */}
      <div style={{ width: '100%', background: '#005EB8', padding: '90px 6%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '52px', flexWrap: 'wrap', boxSizing: 'border-box' }}>
        <div style={{ flex: 1, minWidth: '320px' }}>
          <span style={{ display: 'inline-block', background: 'rgba(255,255,255,0.18)', color: '#fff', fontSize: '13px', fontWeight: '700', padding: '6px 16px', borderRadius: '20px', marginBottom: '22px', letterSpacing: '1px' }}>NHS DIGITAL SERVICE</span>
          <h1 style={{ fontSize: '48px', fontWeight: '700', color: '#fff', lineHeight: '1.2', marginBottom: '22px', fontFamily: 'Arial, sans-serif' }}>
            Book your GP appointment online, anytime
          </h1>
          <p style={{ fontSize: '20px', color: 'rgba(255,255,255,0.88)', lineHeight: '1.7', marginBottom: '36px' }}>
            A simple, secure way to book, manage and track your NHS GP appointments — no phone calls, no waiting on hold.
          </p>
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/register')} style={{ padding: '16px 36px', background: '#007f3b', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '17px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit' }}>Book an appointment</button>
            <button onClick={() => navigate('/login')} style={{ padding: '16px 36px', background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.75)', borderRadius: '4px', fontSize: '17px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit' }}>Sign in</button>
          </div>
        </div>
        <div style={{ flex: '0 0 420px', minWidth: '300px' }}>
          <div style={{ background: '#fff', borderRadius: '12px', padding: '36px' }}>
            <div style={{ fontSize: '20px', fontWeight: '700', color: '#212b32', marginBottom: '22px' }}>Quick access</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              {[
                { icon: 'ti-calendar-plus', bg: '#E1F5EE', color: '#007f3b', label: 'Book appointment', sub: 'Choose a GP and time slot', onClick: () => navigate('/register') },
                { icon: 'ti-calendar',      bg: '#E6F1FB', color: '#005EB8', label: 'My appointments',  sub: 'View and manage bookings',  onClick: () => navigate('/login') },
                { icon: 'ti-user',          bg: '#FAEEDA', color: '#633806', label: 'My profile',        sub: 'Update your details',       onClick: () => navigate('/login') },
              ].map(link => (
                <div key={link.label} onClick={link.onClick} style={{ display: 'flex', alignItems: 'center', gap: '16px', padding: '16px 18px', background: '#f0f4f5', borderRadius: '8px', cursor: 'pointer', border: '0.5px solid #d8dde0' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: link.bg, color: link.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className={`ti ${link.icon}`} style={{ fontSize: '20px' }} aria-hidden="true"></i>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: '16px', fontWeight: '700', color: '#212b32' }}>{link.label}</div>
                    <div style={{ fontSize: '14px', color: '#4c6272', marginTop: '2px' }}>{link.sub}</div>
                  </div>
                  <i className="ti ti-chevron-right" style={{ color: '#4c6272', fontSize: '20px' }} aria-hidden="true"></i>
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
          <div key={i} style={{ padding: '44px 20px', textAlign: 'center', borderRight: i < 2 ? '0.5px solid rgba(255,255,255,0.15)' : 'none' }}>
            <div style={{ fontSize: '44px', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>{s.num}</div>
            <div style={{ fontSize: '16px', color: 'rgba(255,255,255,0.75)' }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* ── Features ── */}
      <div style={{ ...S.section('#fff') }}>
        <div style={S.sectionLabel}>WHY USE THIS SERVICE</div>
        <div style={S.sectionTitle}>Everything you need in one place</div>
        <div style={S.sectionSub}>Designed to make accessing NHS primary care simpler for everyone</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {features.map(f => (
            <div key={f.title} style={{ background: '#f0f4f5', borderRadius: '12px', padding: '32px', border: '0.5px solid #d8dde0' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '12px', background: f.bg, color: f.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px', marginBottom: '18px' }}>
                <i className={`ti ${f.icon}`} aria-hidden="true"></i>
              </div>
              <div style={{ fontSize: '18px', fontWeight: '700', color: '#212b32', marginBottom: '10px' }}>{f.title}</div>
              <div style={{ fontSize: '15px', color: '#4c6272', lineHeight: '1.7' }}>{f.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Roles ── */}
      <div style={{ ...S.section('#f0f4f5') }}>
        <div style={S.sectionLabel}>WHO IS THIS FOR</div>
        <div style={S.sectionTitle}>Built for everyone in the practice</div>
        <div style={S.sectionSub}>Different dashboards tailored for patients, GPs, and administrators</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
          {roles.map(role => (
            <div key={role.title} style={{ background: '#fff', borderRadius: '12px', padding: '32px', border: '0.5px solid #d8dde0', borderTop: `4px solid ${role.topColor}` }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '12px', background: role.iconBg, color: role.iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '26px', marginBottom: '18px' }}>
                <i className={`ti ${role.icon}`} aria-hidden="true"></i>
              </div>
              <div style={{ fontSize: '20px', fontWeight: '700', color: '#212b32', marginBottom: '10px' }}>{role.title}</div>
              <div style={{ fontSize: '15px', color: '#4c6272', lineHeight: '1.7', marginBottom: '20px' }}>{role.desc}</div>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {role.list.map(item => (
                  <li key={item} style={{ fontSize: '14px', color: '#4c6272', display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <i className="ti ti-circle-check" style={{ color: role.listColor, fontSize: '18px', flexShrink: 0 }} aria-hidden="true"></i>
                    {item}
                  </li>
                ))}
              </ul>
              <button onClick={role.onClick} style={{ width: '100%', padding: '14px', background: role.btnBg, color: '#fff', border: 'none', borderRadius: '6px', fontSize: '15px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit' }}>
                {role.btnLabel}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* ── How it works ── */}
      <div style={{ ...S.section('#fff') }}>
        <div style={S.sectionLabel}>HOW IT WORKS</div>
        <div style={S.sectionTitle}>Book your appointment in 4 simple steps</div>
        <div style={S.sectionSub}>From registration to confirmation in just a few minutes</div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '24px' }}>
          {steps.map((step, i) => (
            <div key={step.num} style={{ textAlign: 'center', padding: '32px 24px', background: '#f0f4f5', borderRadius: '12px', border: '0.5px solid #d8dde0', position: 'relative' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#005EB8', color: '#fff', fontSize: '22px', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px' }}>
                <i className={`ti ${step.icon}`} aria-hidden="true"></i>
              </div>
              <div style={{ position: 'absolute', top: '20px', right: '20px', width: '28px', height: '28px', borderRadius: '50%', background: '#E6F1FB', color: '#005EB8', fontSize: '13px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{step.num}</div>
              <div style={{ fontSize: '17px', fontWeight: '700', color: '#212b32', marginBottom: '10px' }}>{step.title}</div>
              <div style={{ fontSize: '14px', color: '#4c6272', lineHeight: '1.7' }}>{step.desc}</div>
            </div>
          ))}
        </div>
      </div>

      {/* ── CTA ── */}
      <div style={{ width: '100%', background: '#005EB8', padding: '90px 6%', textAlign: 'center', boxSizing: 'border-box' }}>
        <div style={{ fontSize: '36px', fontWeight: '700', color: '#fff', marginBottom: '14px' }}>Ready to book your appointment?</div>
        <div style={{ fontSize: '19px', color: 'rgba(255,255,255,0.85)', marginBottom: '36px' }}>Join thousands of patients already using the NHS online booking service</div>
        <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
          <button onClick={() => navigate('/register')} style={{ padding: '16px 36px', background: '#007f3b', color: '#fff', border: 'none', borderRadius: '4px', fontSize: '17px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit' }}>Create free account</button>
          <button onClick={() => navigate('/login')} style={{ padding: '16px 36px', background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.75)', borderRadius: '4px', fontSize: '17px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit' }}>Sign in to your account</button>
        </div>
      </div>

      {/* ── Footer ── */}
      <div style={{ width: '100%', background: '#212b32', boxSizing: 'border-box' }}>

        {/* Footer main content */}
        <div style={{ padding: '56px 6%', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '40px', boxSizing: 'border-box' }}>

          {/* Brand column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '16px' }}>
              <span style={{ background: '#fff', color: '#212b32', fontSize: '14px', fontWeight: '800', padding: '4px 10px', borderRadius: '4px', letterSpacing: '1px' }}>NHS</span>
              <span style={{ fontSize: '15px', color: '#fff', fontWeight: '600' }}>GP Booking Service</span>
            </div>
            <p style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', lineHeight: '1.7', marginBottom: '20px' }}>
              A secure digital service for booking and managing NHS GP appointments online, available 24/7.
            </p>
            <div style={{ display: 'flex', gap: '10px' }}>
              {['ti-brand-twitter', 'ti-brand-facebook', 'ti-brand-instagram'].map(icon => (
                <div key={icon} style={{ width: '36px', height: '36px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <i className={`ti ${icon}`} style={{ color: 'rgba(255,255,255,0.7)', fontSize: '16px' }} aria-hidden="true"></i>
                </div>
              ))}
            </div>
          </div>

          {/* Services column */}
          <div>
            <div style={{ fontSize: '15px', fontWeight: '700', color: '#fff', marginBottom: '16px', paddingBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>Our Services</div>
            {[
              { label: 'Book an appointment', onClick: () => navigate('/register') },
              { label: 'Find a GP near you',  onClick: () => navigate('/register') },
              { label: 'View my appointments',onClick: () => navigate('/login') },
              { label: 'Cancel appointment',  onClick: () => navigate('/login') },
              { label: 'Patient portal',      onClick: () => navigate('/login') },
              { label: 'GP portal',           onClick: () => navigate('/login') },
            ].map(item => (
              <div key={item.label} onClick={item.onClick} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', marginBottom: '10px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}>
                <i className="ti ti-chevron-right" style={{ fontSize: '12px', color: '#007f3b' }} aria-hidden="true"></i>
                {item.label}
              </div>
            ))}
          </div>

          {/* Contact column */}
          <div>
            <div style={{ fontSize: '15px', fontWeight: '700', color: '#fff', marginBottom: '16px', paddingBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>Contact Us</div>
            {[
              { icon: 'ti-phone',        text: '0800 123 4567', sub: 'Mon–Fri, 8am–6pm' },
              { icon: 'ti-mail',         text: 'support@nhsgp.nhs.uk', sub: 'We reply within 24 hours' },
              { icon: 'ti-map-pin',      text: 'NHS Digital, Leeds', sub: 'LS1 4AP, United Kingdom' },
              { icon: 'ti-urgent',       text: 'Medical Emergency?', sub: 'Call 999 immediately' },
            ].map(item => (
              <div key={item.text} style={{ display: 'flex', gap: '12px', marginBottom: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: 'rgba(255,255,255,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, marginTop: '2px' }}>
                  <i className={`ti ${item.icon}`} style={{ color: '#007f3b', fontSize: '15px' }} aria-hidden="true"></i>
                </div>
                <div>
                  <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', fontWeight: '500' }}>{item.text}</div>
                  <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginTop: '2px' }}>{item.sub}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Info column */}
          <div>
            <div style={{ fontSize: '15px', fontWeight: '700', color: '#fff', marginBottom: '16px', paddingBottom: '10px', borderBottom: '1px solid rgba(255,255,255,0.15)' }}>Information</div>
            {/* {[
              { label: 'Privacy policy', onClick: () => navigate('/register') },
              { label: 'Cookie policy',  onClick: () => navigate('/register') },
              { label: 'Accessibility statement',onClick: () => navigate('/login') },
              { label: 'Terms of use',  onClick: () => navigate('/login') },
              { label: 'NHS digital policy',      onClick: () => navigate('/login') },
              { label: 'Freedom of information',  onClick: () => navigate('/login') },
            ].map(item => */}
            // {[
              'About this service', 
              'Privacy policy',
              'Cookie policy',
              'Accessibility statement',
              'Terms of use',
              'NHS digital policy',
              'Freedom of information',
            ].map(item => (
              <div key={item} style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)', marginBottom: '10px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.65)'}>
                <i className="ti ti-chevron-right" style={{ fontSize: '12px', color: '#007f3b' }} aria-hidden="true"></i>
                {item}
              </div>
            ))}
          </div>

        </div>

        {/* Emergency banner */}
        <div style={{ background: '#d5281b', padding: '14px 6%', display: 'flex', alignItems: 'center', gap: '12px', boxSizing: 'border-box' }}>
          <i className="ti ti-alert-triangle" style={{ color: '#fff', fontSize: '20px', flexShrink: 0 }} aria-hidden="true"></i>
          <span style={{ fontSize: '14px', color: '#fff', fontWeight: '500' }}>
            If you have a medical emergency, call <strong>999</strong> immediately. For urgent medical advice, call <strong>NHS 111</strong>.
          </span>
        </div>

        {/* Footer bottom bar */}
        <div style={{ background: '#1a2028', padding: '18px 6%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', boxSizing: 'border-box' }}>
          <span style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)' }}>© 2026 NHS GP Appointment Booking Service. All rights reserved.</span>
          <div style={{ display: 'flex', gap: '20px' }}>
            {['Privacy', 'Cookies', 'Accessibility', 'Sitemap'].map(link => (
              <span key={link} style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', cursor: 'pointer' }}
                onMouseEnter={e => e.currentTarget.style.color = '#fff'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}>
                {link}
              </span>
            ))}
          </div>
        </div>
        {/* // In the footer Information column, add this to the list: */}
          {['Privacy', 'Cookies', 'Accessibility', 'Sitemap'].map(link => (
              <span key={link}
                onClick={() => link === 'Privacy' ? navigate('/privacy') : {}}
                style={{ fontSize: '13px', color: 'rgba(255,255,255,0.5)', cursor: 'pointer' }}>
                {link}
              </span>
            ))}
      </div>

    </div>
  )
}