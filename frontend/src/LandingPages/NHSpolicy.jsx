import { useNavigate } from 'react-router-dom'
import digitalPolicyImage from '../assets/DigitalPolicy.png'

export default function NHSPolicy() {
  const navigate = useNavigate()

  const sections = [
    {
      icon: 'ti-file-description', iconBg: '#E6F1FB', iconColor: '#005EB8',
      title: '1. Introduction',
      body: 'This NHS GP Appointment Booking Service ("the Service") is committed to transparency, patient safety, and digital inclusion. This policy outlines the principles, legal obligations, and governance standards that apply to the operation of this digital service, in line with NHS England\'s Digital Strategy 2021–2026 and the UK Government\'s National Data Strategy.'
    },
    {
      icon: 'ti-shield-lock', iconBg: '#E1F5EE', iconColor: '#007f3b',
      title: '2. Data protection and privacy',
      body: 'All personal data processed by this service is handled in full compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. We collect only the minimum data necessary for the provision of appointment booking services. Patient data is never sold to third parties. All data is stored securely using AES-256 encryption at rest and TLS 1.3 in transit.'
    },
    {
      icon: 'ti-lock-access', iconBg: '#FAEEDA', iconColor: '#633806',
      title: '3. Access and authentication',
      body: 'This service implements role-based access control (RBAC) to ensure that users can only access data appropriate to their role — patient, GP, or administrator. All authentication is managed through JSON Web Tokens (JWT) with a 7-day expiry. Passwords are hashed using bcrypt with a salt factor of 10. We strongly recommend users use a unique, strong password for this service.'
    },
    {
      icon: 'ti-accessible', iconBg: '#EEEDFE', iconColor: '#534AB7',
      title: '4. Accessibility',
      body: 'This service is designed to meet the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA. We are committed to ensuring that all users, regardless of disability or digital literacy, can access our service. This includes screen reader compatibility, sufficient colour contrast, keyboard navigation support, and clear, plain English throughout.'
    },
    {
      icon: 'ti-brand-open-source', iconBg: '#FAECE7', iconColor: '#712B13',
      title: '5. Open data and interoperability',
      body: 'Where possible, this service aligns with NHS interoperability standards including FHIR (Fast Healthcare Interoperability Resources) and NHS Data Model definitions. We support the principle of open data for public benefit, while strictly protecting individual patient confidentiality. Anonymised, aggregated data may be used for NHS service improvement purposes.'
    },
    {
      icon: 'ti-chart-bar', iconBg: '#E1F5EE', iconColor: '#085041',
      title: '6. Digital inclusion',
      body: 'We recognise that not all patients have equal access to digital services. This service is designed to complement, not replace, traditional phone-based appointment booking. NHS practices are required to maintain telephone booking options for patients who cannot access digital services. We are committed to reducing digital exclusion among vulnerable and elderly patient groups.'
    },
    {
      icon: 'ti-device-mobile', iconBg: '#E6F1FB', iconColor: '#005EB8',
      title: '7. Mobile and device standards',
      body: 'The service is fully responsive and accessible across all modern devices including smartphones, tablets and desktop computers. We follow progressive enhancement principles to ensure core functionality is available even on older devices or slower internet connections. We test across major browsers including Chrome, Firefox, Safari and Edge.'
    },
    {
      icon: 'ti-refresh', iconBg: '#FAEEDA', iconColor: '#633806',
      title: '8. Policy updates',
      body: 'This policy is reviewed annually and updated in line with changes to NHS digital strategy, UK legislation, and cybersecurity best practice. Users will be notified of material changes via email and in-service notifications. Continued use of the service following policy updates constitutes acceptance of the revised policy. The current version is effective as of 1 January 2026.'
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
        <span style={{ fontSize: '14px', color: '#4c6272' }}>NHS digital policy</span>
      </div>

      {/* ── Hero — image left, text right ── */}
      <div style={{ background: '#005EB8', padding: '72px 6%', display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap', boxSizing: 'border-box' }}>

        {/* Left — image */}
        <div style={{ flex: '0 0 380px', minWidth: '260px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '360px' }}>
            {/* Decorative glow circles */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '340px', height: '340px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', zIndex: 0 }}></div>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '260px', height: '260px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', zIndex: 0 }}></div>
            <img
              src={digitalPolicyImage}
              alt="NHS digital policy — online healthcare service"
              style={{ width: '100%', maxWidth: '360px', height: 'auto', position: 'relative', zIndex: 1, filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.2))' }}
            />
            {/* Badge on image */}
            <div style={{ position: 'absolute', bottom: '10px', right: '10px', background: '#007f3b', borderRadius: '8px', padding: '10px 16px', zIndex: 2 }}>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', marginBottom: '2px' }}>COMPLIANT WITH</div>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#fff' }}>NHS Digital Standards</div>
            </div>
          </div>
        </div>

        {/* Right — text */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <div style={{ fontSize: '13px', fontWeight: '700', color: 'rgba(255,255,255,0.7)', letterSpacing: '1.5px', marginBottom: '14px' }}>NHS DIGITAL POLICY</div>
          <h1 style={{ fontSize: '44px', fontWeight: '700', color: '#fff', lineHeight: '1.25', marginBottom: '20px' }}>
            Governing our digital service with NHS standards
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.88)', lineHeight: '1.75', marginBottom: '32px' }}>
            This policy sets out the principles, legal obligations and governance standards that govern the operation of the NHS GP Appointment Booking Service — ensuring it meets NHS England's digital strategy requirements.
          </p>

          {/* Key compliance badges */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {[
              { icon: 'ti-shield-check',    text: 'WCAG 2.1 AA compliant' },
              { icon: 'ti-lock',            text: 'RBAC security model' },
              { icon: 'ti-brand-open-source', text: 'NHS FHIR standards' },
              { icon: 'ti-users',           text: 'Digital inclusion policy' },
            ].map(badge => (
              <div key={badge.text} style={{ background: 'rgba(255,255,255,0.12)', borderRadius: '8px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className={`ti ${badge.icon}`} style={{ color: '#7dd3a8', fontSize: '18px', flexShrink: 0 }} aria-hidden="true"></i>
                <span style={{ fontSize: '14px', color: '#fff', fontWeight: '500' }}>{badge.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Version strip ── */}
      <div style={{ background: '#003087', padding: '16px 6%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          {[
            { label: 'Version',     value: '2.1' },
            { label: 'Effective',   value: '1 January 2026' },
            { label: 'Next review', value: '1 January 2027' },
            { label: 'Owner',       value: 'NHS Digital' },
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
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#212b32', marginBottom: '36px' }}>NHS digital policy details</h2>

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
            <div style={{ fontSize: '20px', fontWeight: '700', color: '#fff', marginBottom: '10px' }}>Data Protection Officer</div>
            <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', marginBottom: '20px' }}>
              For any data protection queries, subject access requests, or concerns about how your data is handled, please contact our Data Protection Officer.
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
            <button onClick={() => navigate('/privacy')} style={{ padding: '14px 28px', background: 'transparent', color: '#4c6272', border: '2px solid #d8dde0', borderRadius: '6px', fontSize: '16px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit' }}>
              Privacy policy
            </button>
          </div>
        </div>

        {/* Sticky sidebar */}
        <div style={{ position: 'sticky', top: '120px' }}>

          {/* Table of contents */}
          <div style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '12px', padding: '24px', marginBottom: '16px' }}>
            <div style={{ fontSize: '15px', fontWeight: '700', color: '#212b32', marginBottom: '16px', paddingBottom: '12px', borderBottom: '0.5px solid #d8dde0' }}>
              Contents
            </div>
            {sections.map((s, i) => (
              <div key={i}
                style={{ fontSize: '13px', color: '#005EB8', marginBottom: '10px', cursor: 'pointer', display: 'flex', alignItems: 'flex-start', gap: '8px', lineHeight: '1.4' }}
                onMouseEnter={e => e.currentTarget.style.color = '#003087'}
                onMouseLeave={e => e.currentTarget.style.color = '#005EB8'}>
                <i className="ti ti-chevron-right" style={{ fontSize: '12px', marginTop: '2px', flexShrink: 0 }} aria-hidden="true"></i>
                {s.title}
              </div>
            ))}
          </div>

          {/* Image in sidebar */}
          <div style={{ background: '#E6F1FB', borderRadius: '12px', padding: '20px', textAlign: 'center' }}>
            <img
              src={digitalPolicyImage}
              alt="Digital healthcare policy"
              style={{ width: '100%', maxWidth: '200px', height: 'auto', margin: '0 auto 14px', display: 'block' }}
            />
            <div style={{ fontSize: '14px', fontWeight: '600', color: '#005EB8', marginBottom: '6px' }}>Related policies</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '14px' }}>
              <button onClick={() => navigate('/privacy')} style={{ width: '100%', padding: '9px', background: '#fff', color: '#005EB8', border: '1px solid #005EB8', borderRadius: '6px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', fontFamily: 'inherit' }}>
                Privacy policy
              </button>
              <button onClick={() => navigate('/about')} style={{ width: '100%', padding: '9px', background: '#fff', color: '#4c6272', border: '1px solid #d8dde0', borderRadius: '6px', fontSize: '13px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit' }}>
                About this service
              </button>
            </div>
            <button onClick={() => navigate('/contact')} style={{ width: '100%', padding: '10px', background: '#005EB8', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', fontFamily: 'inherit' }}>
              Contact support
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}