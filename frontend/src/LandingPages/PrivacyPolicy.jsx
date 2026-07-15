import { useNavigate } from 'react-router-dom'
import privacyImage from '../assets/PrivacyPolicy.jpg'

export default function PrivacyPolicy() {
  const navigate = useNavigate()

  const sections = [
    {
      icon: 'ti-info-circle', iconBg: '#E6F1FB', iconColor: '#005EB8',
      title: '1. Introduction',
      body: 'The NHS GP Appointment Booking Service ("we", "us", "our") is committed to protecting your personal data. This Privacy Policy explains how we collect, use, store and protect your information when you use our digital appointment booking platform. This policy complies with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018.'
    },
    {
      icon: 'ti-database', iconBg: '#E1F5EE', iconColor: '#007f3b',
      title: '2. What data we collect',
      body: 'We collect the following personal information: your full name, email address, date of birth, phone number, and appointment history. For GP accounts we also collect professional specialisation details. We do not collect financial information, NHS numbers, or medical records. All data collected is strictly necessary for the provision of our appointment booking service.'
    },
    {
      icon: 'ti-eye', iconBg: '#FAEEDA', iconColor: '#633806',
      title: '3. How we use your data',
      body: 'Your data is used to: create and manage your account, book and track GP appointments, send appointment confirmation and reminder emails, allow GPs to view their scheduled patients, and enable administrators to manage the practice system. We do not use your data for marketing purposes or share it with third-party advertisers.'
    },
    {
      icon: 'ti-shield-lock', iconBg: '#EEEDFE', iconColor: '#534AB7',
      title: '4. How we protect your data',
      body: 'We implement industry-standard security measures including: bcrypt password hashing with salt factor 10, JSON Web Token (JWT) authentication with 7-day expiry, role-based access control (RBAC) to limit data visibility, HTTPS encryption for all data in transit, and MongoDB Atlas cloud storage with AES-256 encryption at rest. We conduct regular security reviews.'
    },
    {
      icon: 'ti-users', iconBg: '#FAECE7', iconColor: '#712B13',
      title: '5. Who can see your data',
      body: 'Your personal data is only accessible to authorised users based on their role. As a patient, only your own data and the GP you have booked with can see your appointment details. GPs can only see appointments booked with them. Administrators have system-wide oversight but cannot access clinical notes. No unauthorised third parties have access to your data.'
    },
    {
      icon: 'ti-clock', iconBg: '#E1F5EE', iconColor: '#085041',
      title: '6. How long we keep your data',
      body: 'We retain your personal data for as long as your account remains active. If you request account deletion, your personal data will be permanently removed within 30 days. Appointment records may be retained for up to 2 years for audit purposes in an anonymised form. You may request a copy of all data we hold about you at any time.'
    },
    {
      icon: 'ti-lock', iconBg: '#E6F1FB', iconColor: '#005EB8',
      title: '7. Your rights',
      body: 'Under UK GDPR you have the right to: access your personal data (Subject Access Request), correct inaccurate data, request deletion of your data ("right to be forgotten"), restrict how we process your data, data portability — receive your data in a machine-readable format, and object to processing. To exercise any of these rights, please contact our Data Protection Officer at dpo@nhsgp.nhs.uk.'
    },
    {
      icon: 'ti-cookie', iconBg: '#FAEEDA', iconColor: '#633806',
      title: '8. Cookies',
      body: 'This service uses only essential cookies required for authentication and session management. We do not use tracking cookies, advertising cookies, or analytics cookies. Your session token is stored in your browser\'s localStorage and is automatically cleared when you log out. You can clear your browser storage at any time through your browser settings.'
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
        <span style={{ fontSize: '14px', color: '#4c6272' }}>Privacy policy</span>
      </div>

      {/* ── Hero — text left, image right ── */}
      <div style={{ background: '#005EB8', padding: '72px 6%', display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap', boxSizing: 'border-box' }}>

        {/* Left — text */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <div style={{ fontSize: '13px', fontWeight: '700', color: 'rgba(255,255,255,0.7)', letterSpacing: '1.5px', marginBottom: '14px' }}>PRIVACY POLICY</div>
          <h1 style={{ fontSize: '44px', fontWeight: '700', color: '#fff', lineHeight: '1.25', marginBottom: '20px' }}>
            Your privacy matters to us
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.88)', lineHeight: '1.75', marginBottom: '32px' }}>
            We are committed to protecting your personal health information. This policy explains exactly how we collect, use and safeguard your data in full compliance with UK GDPR.
          </p>

          {/* Key facts */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            {[
              { icon: 'ti-shield-check', text: 'UK GDPR compliant' },
              { icon: 'ti-lock',         text: 'End-to-end encrypted' },
              { icon: 'ti-eye-off',      text: 'Never sold to third parties' },
              { icon: 'ti-trash',        text: 'Delete your data anytime' },
            ].map(fact => (
              <div key={fact.text} style={{ background: 'rgba(255,255,255,0.12)', borderRadius: '8px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className={`ti ${fact.icon}`} style={{ color: '#7dd3a8', fontSize: '18px', flexShrink: 0 }} aria-hidden="true"></i>
                <span style={{ fontSize: '14px', color: '#fff', fontWeight: '500' }}>{fact.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image */}
        <div style={{ flex: '0 0 400px', minWidth: '260px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '380px' }}>
            {/* Decorative glow circles */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '340px', height: '340px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', zIndex: 0 }}></div>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', zIndex: 0 }}></div>
            <img
              src={privacyImage}
              alt="Digital doctor on phone — online GP service"
              style={{ width: '100%', maxWidth: '380px', height: 'auto', position: 'relative', zIndex: 1, filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))' }}
            />
          </div>
        </div>
      </div>

      {/* ── Last updated strip ── */}
      <div style={{ background: '#003087', padding: '16px 6%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          {[
            { label: 'Version',      value: '3.0' },
            { label: 'Effective',    value: '1 January 2026' },
            { label: 'Next review',  value: '1 January 2027' },
            { label: 'Jurisdiction', value: 'England & Wales' },
          ].map(item => (
            <div key={item.label}>
              <span style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)', marginRight: '6px' }}>{item.label}:</span>
              <span style={{ fontSize: '13px', color: '#fff', fontWeight: '500' }}>{item.value}</span>
            </div>
          ))}
        </div>
        <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.6)', display: 'flex', alignItems: 'center', gap: '6px' }}>
          <i className="ti ti-refresh" style={{ fontSize: '14px' }} aria-hidden="true"></i>
          Reviewed annually
        </div>
      </div>

      {/* ── Main content ── */}
      <div style={{ padding: '64px 6%', boxSizing: 'border-box', display: 'grid', gridTemplateColumns: '1fr 280px', gap: '40px', alignItems: 'start' }}>

        {/* Policy sections */}
        <div>
          <div style={{ fontSize: '13px', fontWeight: '700', color: '#005EB8', letterSpacing: '1px', marginBottom: '10px' }}>FULL POLICY</div>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#212b32', marginBottom: '36px' }}>Privacy policy details</h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {sections.map((section, i) => (
              <div key={i} style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '12px', padding: '28px 32px', display: 'flex', gap: '20px', alignItems: 'flex-start' }}>
                <div style={{ width: '50px', height: '50px', borderRadius: '12px', background: section.iconBg, color: section.iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0 }}>
                  <i className={`ti ${section.icon}`} aria-hidden="true"></i>
                </div>
                <div>
                  <div style={{ fontSize: '18px', fontWeight: '700', color: '#212b32', marginBottom: '10px' }}>{section.title}</div>
                  <div style={{ fontSize: '15px', color: '#4c6272', lineHeight: '1.8' }}>{section.body}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Contact DPO */}
          <div style={{ background: '#212b32', borderRadius: '12px', padding: '32px', marginTop: '28px' }}>
            <div style={{ fontSize: '20px', fontWeight: '700', color: '#fff', marginBottom: '10px' }}>Contact our Data Protection Officer</div>
            <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', marginBottom: '20px' }}>
              For any data protection concerns, subject access requests, or questions about this privacy policy, please contact our DPO directly.
            </div>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              {[
                { icon: 'ti-mail',  label: 'Email', value: 'dpo@nhsgp.nhs.uk' },
                { icon: 'ti-phone', label: 'Phone', value: '0800 123 4568' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <i className={`ti ${item.icon}`} style={{ color: '#007f3b', fontSize: '16px' }} aria-hidden="true"></i>
                  </div>
                  <div>
                    <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.5)' }}>{item.label}</div>
                    <div style={{ fontSize: '14px', color: '#fff', fontWeight: '500' }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom CTA */}
          <div style={{ display: 'flex', gap: '12px', marginTop: '28px', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/')} style={{ padding: '14px 28px', background: '#005EB8', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '16px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit' }}>
              Back to home
            </button>
            <button onClick={() => navigate('/contact')} style={{ padding: '14px 28px', background: 'transparent', color: '#005EB8', border: '2px solid #005EB8', borderRadius: '6px', fontSize: '16px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit' }}>
              Contact us
            </button>
          </div>
        </div>

        {/* Sidebar — sticky table of contents */}
        <div style={{ position: 'sticky', top: '120px' }}>
          <div style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <div style={{ fontSize: '15px', fontWeight: '700', color: '#212b32', marginBottom: '16px', paddingBottom: '12px', borderBottom: '0.5px solid #d8dde0' }}>
              Contents
            </div>
            {sections.map((s, i) => (
              <div key={i} style={{ fontSize: '13px', color: '#005EB8', marginBottom: '10px', cursor: 'pointer', display: 'flex', alignItems: 'flex-start', gap: '8px', lineHeight: '1.4' }}
                onMouseEnter={e => e.currentTarget.style.color = '#003087'}
                onMouseLeave={e => e.currentTarget.style.color = '#005EB8'}>
                <i className="ti ti-chevron-right" style={{ fontSize: '12px', marginTop: '2px', flexShrink: 0 }} aria-hidden="true"></i>
                {s.title}
              </div>
            ))}
          </div>

          {/* Image in sidebar too */}
          <div style={{ background: '#E6F1FB', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
            <img
              src={privacyImage}
              alt="Digital healthcare"
              style={{ width: '100%', maxWidth: '200px', height: 'auto', margin: '0 auto 14px', display: 'block' }}
            />
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#005EB8', marginBottom: '6px' }}>Need help?</div>
            <div style={{ fontSize: '13px', color: '#4c6272', marginBottom: '14px', lineHeight: '1.5' }}>Our team is available Mon–Fri, 8am–6pm</div>
            <button onClick={() => navigate('/contact')} style={{ width: '100%', padding: '10px', background: '#005EB8', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', fontFamily: 'inherit' }}>
              Contact support
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}