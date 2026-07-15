import { useNavigate } from 'react-router-dom'
import doctorImage from '../assets/aboutDoctor.jpg'

export default function AboutService() {
  const navigate = useNavigate()

  const cards = [
    {
      icon: 'ti-building-hospital', iconBg: '#E6F1FB', iconColor: '#005EB8',
      title: 'What is this service?',
      body: 'This is an academic prototype developed as part of an MSc Computer Science final year project at the University of Roehampton. It simulates a real-world NHS-style GP appointment booking system, demonstrating how digital tools can improve access to primary healthcare in the UK.'
    },
    {
      icon: 'ti-target', iconBg: '#E1F5EE', iconColor: '#007f3b',
      title: 'Our mission',
      body: 'Our mission is to reduce the burden on NHS telephone lines by providing a simple, accessible, and secure online booking system. We aim to improve patient experience and help GP practices manage their appointment schedules more efficiently.'
    },
    {
      icon: 'ti-users', iconBg: '#EEEDFE', iconColor: '#534AB7',
      title: 'Who is it for?',
      body: 'The service is designed for three types of users: patients who wish to book GP appointments online, GPs and doctors who need to manage their schedules and patient records, and administrators who oversee the entire practice management system.'
    },
    {
      icon: 'ti-shield-check', iconBg: '#FAEEDA', iconColor: '#633806',
      title: 'How we protect your data',
      body: 'All data is handled in accordance with UK GDPR and the Data Protection Act 2018. Passwords are securely hashed, sessions are protected with JWT tokens, and access is controlled through role-based permissions. Data is stored securely on MongoDB Atlas.'
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
        <span style={{ fontSize: '14px', color: '#4c6272' }}>About this service</span>
      </div>

      {/* ── Hero section — text left, image right ── */}
      <div style={{ background: '#005EB8', padding: '72px 6%', display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap', boxSizing: 'border-box' }}>

        {/* Left — text */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <div style={{ fontSize: '13px', fontWeight: '700', color: 'rgba(255,255,255,0.75)', letterSpacing: '1.5px', marginBottom: '14px' }}>ABOUT THIS SERVICE</div>
          <h1 style={{ fontSize: '44px', fontWeight: '700', color: '#fff', lineHeight: '1.25', marginBottom: '20px', fontFamily: 'Arial, sans-serif' }}>
            Bringing NHS care closer to you — online, anytime
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.88)', lineHeight: '1.75', marginBottom: '32px' }}>
            The NHS GP Appointment Booking Service is a secure, digital platform that allows patients to book, manage and track their GP appointments online — without the need to call their surgery.
          </p>
          <div style={{ display: 'flex', gap: '36px', flexWrap: 'wrap' }}>
            {[
              { num: '15M+', label: 'Appointments annually' },
              { num: '68M',  label: 'UK patients' },
              { num: '24/7', label: 'Online access' },
            ].map(stat => (
              <div key={stat.label}>
                <div style={{ fontSize: '32px', fontWeight: '700', color: '#fff' }}>{stat.num}</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginTop: '2px' }}>{stat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image */}
        <div style={{ flex: '0 0 420px', minWidth: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '420px' }}>
            {/* Decorative circle behind image */}
            <div style={{ position: 'absolute', top: '-20px', right: '-20px', width: '380px', height: '380px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', zIndex: 0 }}></div>
            <div style={{ position: 'absolute', top: '20px', right: '20px', width: '320px', height: '320px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', zIndex: 0 }}></div>
            <img
              src={doctorImage}
              alt="NHS doctors and medical professionals"
              style={{ width: '100%', maxWidth: '420px', height: '380px', objectFit: 'cover', objectPosition: 'center', borderRadius: '16px', position: 'relative', zIndex: 1, boxShadow: '0 20px 60px rgba(0,0,0,0.25)' }}
            />
            {/* Badge on image */}
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: '#007f3b', borderRadius: '8px', padding: '10px 16px', zIndex: 2, boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', marginBottom: '2px' }}>TRUSTED BY</div>
              <div style={{ fontSize: '16px', fontWeight: '700', color: '#fff' }}>68M+ UK Patients</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── What we offer strip ── */}
      <div style={{ background: '#003087', padding: '28px 6%', display: 'flex', gap: '40px', flexWrap: 'wrap', boxSizing: 'border-box' }}>
        {[
          { icon: 'ti-clock',        text: 'Book appointments 24/7' },
          { icon: 'ti-shield-check', text: 'NHS-grade data security' },
          { icon: 'ti-mail',         text: 'Instant email confirmation' },
          { icon: 'ti-device-mobile',text: 'Works on any device' },
        ].map(item => (
          <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <i className={`ti ${item.icon}`} style={{ color: '#007f3b', fontSize: '20px' }} aria-hidden="true"></i>
            <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', fontWeight: '500' }}>{item.text}</span>
          </div>
        ))}
      </div>

      {/* ── Main content ── */}
      <div style={{ padding: '64px 6%', boxSizing: 'border-box' }}>

        {/* Section heading */}
        <div style={{ fontSize: '13px', fontWeight: '700', color: '#005EB8', letterSpacing: '1px', marginBottom: '10px' }}>WHAT WE DO</div>
        <h2 style={{ fontSize: '32px', fontWeight: '700', color: '#212b32', marginBottom: '44px' }}>Everything you need to know</h2>

        {/* Info cards — 2 columns */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '20px', marginBottom: '56px' }}>
          {cards.map(card => (
            <div key={card.title} style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '12px', padding: '28px 32px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: card.iconBg, color: card.iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', flexShrink: 0 }}>
                <i className={`ti ${card.icon}`} aria-hidden="true"></i>
              </div>
              <div>
                <div style={{ fontSize: '18px', fontWeight: '700', color: '#212b32', marginBottom: '8px' }}>{card.title}</div>
                <div style={{ fontSize: '15px', color: '#4c6272', lineHeight: '1.75' }}>{card.body}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Image + tech stack side by side ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '32px', alignItems: 'center', marginBottom: '56px' }}>

          {/* Image panel */}
          <div style={{ borderRadius: '16px', overflow: 'hidden', position: 'relative' }}>
            <img
              src={doctorImage}
              alt="Medical professionals worldwide"
              style={{ width: '100%', height: '360px', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,48,135,0.85) 0%, transparent 50%)' }}></div>
            <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px' }}>
              <div style={{ fontSize: '20px', fontWeight: '700', color: '#fff', marginBottom: '6px' }}>Connecting patients with GPs</div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: '1.6' }}>Our platform brings together patients and healthcare professionals in one secure digital space.</div>
            </div>
          </div>

          {/* Tech stack */}
          <div style={{ background: '#212b32', borderRadius: '16px', padding: '36px' }}>
            <div style={{ fontSize: '18px', fontWeight: '700', color: '#fff', marginBottom: '6px' }}>Built with modern technology</div>
            <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.6)', marginBottom: '24px' }}>Industry-standard tools used by leading UK tech companies</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
              {[
                { label: 'React.js',     sub: 'Frontend UI',      icon: 'ti-brand-react',    color: '#61DAFB' },
                { label: 'Node.js',      sub: 'Backend API',      icon: 'ti-brand-nodejs',   color: '#68A063' },
                { label: 'MongoDB',      sub: 'Database',         icon: 'ti-database',       color: '#4DB33D' },
                { label: 'Express.js',   sub: 'REST API',         icon: 'ti-server',         color: '#fff' },
                { label: 'JWT Auth',     sub: 'Security',         icon: 'ti-shield-lock',    color: '#FFD700' },
                { label: 'Tailwind CSS', sub: 'Styling',          icon: 'ti-palette',        color: '#38BDF8' },
              ].map(tech => (
                <div key={tech.label} style={{ background: 'rgba(255,255,255,0.07)', borderRadius: '8px', padding: '14px 16px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <i className={`ti ${tech.icon}`} style={{ fontSize: '22px', color: tech.color, flexShrink: 0 }} aria-hidden="true"></i>
                  <div>
                    <div style={{ fontSize: '14px', fontWeight: '700', color: '#fff' }}>{tech.label}</div>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>{tech.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA strip ── */}
        <div style={{ background: '#005EB8', borderRadius: '16px', padding: '48px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '24px' }}>
          <div>
            <div style={{ fontSize: '24px', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>Ready to get started?</div>
            <div style={{ fontSize: '16px', color: 'rgba(255,255,255,0.8)' }}>Register as a patient and book your first appointment today</div>
          </div>
          <div style={{ display: 'flex', gap: '14px', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/register')} style={{ padding: '14px 28px', background: '#007f3b', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '16px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit' }}>
              Register as patient
            </button>
            <button onClick={() => navigate('/contact')} style={{ padding: '14px 28px', background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.6)', borderRadius: '6px', fontSize: '16px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit' }}>
              Contact us
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}