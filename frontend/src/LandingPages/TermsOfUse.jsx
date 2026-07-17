import { useNavigate } from 'react-router-dom'
import termsImage from '../assets/TermsUse.jpg'

export default function TermsOfUse() {
  const navigate = useNavigate()

  const sections = [
    {
      icon: 'ti-info-circle', iconBg: '#E6F1FB', iconColor: '#005EB8',
      title: '1. Introduction and acceptance',
      body: 'By accessing or using the NHS GP Appointment Booking Service ("the Service"), you agree to be bound by these Terms of Use. These terms apply to all users of the Service including patients, GPs, and administrators. If you do not agree to these terms, you must not use this Service. These terms are governed by the laws of England and Wales.'
    },
    {
      icon: 'ti-user-check', iconBg: '#E1F5EE', iconColor: '#007f3b',
      title: '2. Eligibility and registration',
      body: 'To use this Service, you must be a resident of the United Kingdom and be registered with a participating NHS GP practice. You must be at least 16 years old to register independently. Parents or guardians may register on behalf of children under 16. You must provide accurate, complete and up-to-date information during registration. Creating a false identity or impersonating another person is strictly prohibited.'
    },
    {
      icon: 'ti-lock', iconBg: '#FAEEDA', iconColor: '#633806',
      title: '3. Account security and responsibilities',
      body: 'You are responsible for maintaining the confidentiality of your account credentials. You must not share your username or password with any other person. You must notify us immediately at support@nhsgp.nhs.uk if you suspect any unauthorised use of your account. You are responsible for all activity that occurs under your account. We reserve the right to disable any account that we believe poses a security risk.'
    },
    {
      icon: 'ti-thumb-up', iconBg: '#EEEDFE', iconColor: '#534AB7',
      title: '4. Acceptable use',
      body: 'You agree to use this Service only for its intended purpose of booking and managing NHS GP appointments. You must not: use the Service for any unlawful purpose, attempt to gain unauthorised access to any part of the Service, transmit any harmful or malicious code, use automated scripts or bots to interact with the Service, attempt to disrupt or overload the Service, or collect personal data about other users without consent.'
    },
    {
      icon: 'ti-thumb-down', iconBg: '#FAECE7', iconColor: '#712B13',
      title: '5. Prohibited conduct',
      body: 'The following conduct is strictly prohibited: impersonating a GP, medical professional, or NHS staff member; booking appointments with no intention of attending (persistent no-shows may result in account suspension); submitting false or misleading medical information; using the Service to harass or threaten other users or staff; attempting to access another patient\'s medical records or appointment history; and reselling or commercially exploiting any part of the Service.'
    },
    {
      icon: 'ti-calendar-x', iconBg: '#E1F5EE', iconColor: '#085041',
      title: '6. Appointment responsibilities',
      body: 'When you book an appointment through this Service, you accept responsibility for attending at the scheduled time or cancelling with reasonable notice. Missed appointments without prior cancellation place an unnecessary burden on the NHS. Repeated missed appointments (three or more within a 6-month period) may result in a warning or temporary suspension of your booking privileges. You must cancel appointments at least 2 hours in advance wherever possible.'
    },
    {
      icon: 'ti-medical-cross', iconBg: '#E6F1FB', iconColor: '#005EB8',
      title: '7. Medical disclaimer',
      body: 'This Service is a digital appointment booking platform only. It does not provide medical advice, diagnosis, or treatment. Any medical information displayed is for administrative purposes only and should not be interpreted as clinical guidance. In the event of a medical emergency, you must call 999 immediately. For urgent medical advice, contact NHS 111. Do not use this Service to seek urgent medical help — it is not monitored in real time by medical professionals.'
    },
    {
      icon: 'ti-shield-x', iconBg: '#FAEEDA', iconColor: '#633806',
      title: '8. Limitation of liability',
      body: 'To the maximum extent permitted by law, the NHS GP Appointment Booking Service shall not be liable for: any indirect, incidental, or consequential damages arising from use of the Service; loss of appointments due to technical failures (though we will make reasonable efforts to reschedule); any medical outcomes resulting from delayed, missed, or incorrectly booked appointments; or any third-party content or services linked from this platform.'
    },
    {
      icon: 'ti-ban', iconBg: '#FAECE7', iconColor: '#712B13',
      title: '9. Account suspension and termination',
      body: 'We reserve the right to suspend or terminate your account at any time, with or without notice, if we reasonably believe you have violated these Terms of Use. Grounds for suspension include: fraudulent activity, repeated missed appointments, misuse of the booking system, or threatening behaviour toward NHS staff. You may request account deletion at any time by contacting support@nhsgp.nhs.uk. Upon deletion, your personal data will be removed within 30 days.'
    },
    {
      icon: 'ti-refresh', iconBg: '#E1F5EE', iconColor: '#007f3b',
      title: '10. Changes to these terms',
      body: 'We may update these Terms of Use from time to time to reflect changes in the law, NHS policy, or our service. We will notify you of material changes via email and through a prominent notice on the Service at least 14 days before the changes take effect. Your continued use of the Service after the effective date constitutes acceptance of the updated terms. The current version of these terms is always available at this URL.'
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
        <span style={{ fontSize: '14px', color: '#4c6272' }}>Terms of use</span>
      </div>

      {/* ── Hero — image left, text right ── */}
      <div style={{ background: '#005EB8', padding: '72px 6%', display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap', boxSizing: 'border-box' }}>

        {/* Left — image */}
        <div style={{ flex: '0 0 400px', minWidth: '260px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '400px' }}>
            {/* Decorative circles */}
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '380px', height: '380px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', zIndex: 0 }}></div>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '300px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', zIndex: 0 }}></div>
            <img
              src={termsImage}
              alt="Navigating NHS terms — maze with clear path"
              style={{ width: '100%', maxWidth: '400px', height: 'auto', position: 'relative', zIndex: 1, borderRadius: '16px', boxShadow: '0 20px 60px rgba(0,0,0,0.3)', filter: 'drop-shadow(0 10px 30px rgba(0,0,0,0.3))' }}
            />
            {/* Badge */}
            <div style={{ position: 'absolute', bottom: '20px', right: '20px', background: '#007f3b', borderRadius: '8px', padding: '10px 16px', zIndex: 2 }}>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', marginBottom: '2px' }}>EFFECTIVE DATE</div>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#fff' }}>1 January 2026</div>
            </div>
          </div>
        </div>

        {/* Right — text */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <div style={{ fontSize: '13px', fontWeight: '700', color: 'rgba(255,255,255,0.7)', letterSpacing: '1.5px', marginBottom: '14px' }}>TERMS OF USE</div>
          <h1 style={{ fontSize: '44px', fontWeight: '700', color: '#fff', lineHeight: '1.25', marginBottom: '20px' }}>
            The rules that keep our service fair and safe
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.88)', lineHeight: '1.75', marginBottom: '32px' }}>
            These Terms of Use set out the rules for using the NHS GP Appointment Booking Service. By registering or using this platform, you agree to follow these rules. They are designed to protect patients, GPs, and the integrity of NHS services.
          </p>

          {/* Key points */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {[
              { icon: 'ti-user-check',   text: 'UK residents only' },
              { icon: 'ti-lock',         text: 'Keep your account secure' },
              { icon: 'ti-calendar-x',   text: 'Cancel appointments you cannot attend' },
              { icon: 'ti-medical-cross',text: 'Not for medical emergencies' },
            ].map(item => (
              <div key={item.text} style={{ background: 'rgba(255,255,255,0.12)', borderRadius: '8px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className={`ti ${item.icon}`} style={{ color: '#7dd3a8', fontSize: '18px', flexShrink: 0 }} aria-hidden="true"></i>
                <span style={{ fontSize: '14px', color: '#fff', fontWeight: '500' }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Version strip ── */}
      <div style={{ background: '#003087', padding: '16px 6%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          {[
            { label: 'Version',      value: '1.4' },
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

      {/* ── Emergency warning ── */}
      <div style={{ background: '#d5281b', padding: '14px 6%', display: 'flex', alignItems: 'center', gap: '12px', boxSizing: 'border-box' }}>
        <i className="ti ti-alert-triangle" style={{ color: '#fff', fontSize: '20px', flexShrink: 0 }} aria-hidden="true"></i>
        <span style={{ fontSize: '14px', color: '#fff', fontWeight: '500' }}>
          This Service is <strong>not</strong> for medical emergencies. If you have a life-threatening emergency, call <strong>999</strong> immediately. For urgent advice, call <strong>NHS 111</strong>.
        </span>
      </div>

      {/* ── Main content ── */}
      <div style={{ padding: '64px 6%', boxSizing: 'border-box', display: 'grid', gridTemplateColumns: '1fr 280px', gap: '40px', alignItems: 'start' }}>

        {/* Terms sections */}
        <div>
          <div style={{ fontSize: '13px', fontWeight: '700', color: '#005EB8', letterSpacing: '1px', marginBottom: '10px' }}>FULL TERMS</div>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#212b32', marginBottom: '12px' }}>Terms of use</h2>
          <p style={{ fontSize: '15px', color: '#4c6272', lineHeight: '1.7', marginBottom: '36px', borderLeft: '4px solid #005EB8', paddingLeft: '16px' }}>
            Please read these terms carefully before using the NHS GP Appointment Booking Service. By creating an account or using this Service, you confirm that you have read, understood and agree to be bound by these terms.
          </p>

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

          {/* Contact section */}
          <div style={{ background: '#212b32', borderRadius: '12px', padding: '32px', marginTop: '28px' }}>
            <div style={{ fontSize: '20px', fontWeight: '700', color: '#fff', marginBottom: '10px' }}>Questions about these terms?</div>
            <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', marginBottom: '20px' }}>
              If you have any questions about these Terms of Use or need clarification on any point, please contact our support team. We aim to respond within 2 working days.
            </div>
            <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap' }}>
              {[
                { icon: 'ti-mail',  label: 'Email',  value: 'legal@nhsgp.nhs.uk' },
                { icon: 'ti-phone', label: 'Phone',  value: '0800 123 4567' },
                { icon: 'ti-clock', label: 'Hours',  value: 'Mon–Fri, 8am–6pm' },
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
            <button onClick={() => navigate('/privacy')} style={{ padding: '14px 28px', background: 'transparent', color: '#005EB8', border: '2px solid #005EB8', borderRadius: '6px', fontSize: '16px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit' }}>
              Privacy policy
            </button>
            <button onClick={() => navigate('/contact')} style={{ padding: '14px 28px', background: 'transparent', color: '#4c6272', border: '2px solid #d8dde0', borderRadius: '6px', fontSize: '16px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit' }}>
              Contact us
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
              <div
                key={i}
                style={{ fontSize: '13px', color: '#005EB8', marginBottom: '10px', cursor: 'pointer', display: 'flex', alignItems: 'flex-start', gap: '8px', lineHeight: '1.4' }}
                onMouseEnter={e => e.currentTarget.style.color = '#003087'}
                onMouseLeave={e => e.currentTarget.style.color = '#005EB8'}
              >
                <i className="ti ti-chevron-right" style={{ fontSize: '12px', marginTop: '2px', flexShrink: 0 }} aria-hidden="true"></i>
                {s.title}
              </div>
            ))}
          </div>

          {/* Image in sidebar */}
          <div style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '12px', overflow: 'hidden', marginBottom: '16px' }}>
            <img
              src={termsImage}
              alt="Terms of use"
              style={{ width: '100%', height: '160px', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
            />
            <div style={{ padding: '16px' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#212b32', marginBottom: '4px' }}>Finding your way through the rules</div>
              <div style={{ fontSize: '13px', color: '#4c6272', lineHeight: '1.5' }}>Our terms are designed to be clear and fair for everyone.</div>
            </div>
          </div>

          {/* Related pages */}
          <div style={{ background: '#E6F1FB', borderRadius: '12px', padding: '20px' }}>
            <div style={{ fontSize: '14px', fontWeight: '700', color: '#005EB8', marginBottom: '12px' }}>Related policies</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button onClick={() => navigate('/privacy')} style={{ width: '100%', padding: '9px', background: '#fff', color: '#005EB8', border: '1px solid #005EB8', borderRadius: '6px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', fontFamily: 'inherit' }}>
                Privacy policy
              </button>
              <button onClick={() => navigate('/nhs-policy')} style={{ width: '100%', padding: '9px', background: '#fff', color: '#4c6272', border: '1px solid #d8dde0', borderRadius: '6px', fontSize: '13px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit' }}>
                NHS digital policy
              </button>
              <button onClick={() => navigate('/about')} style={{ width: '100%', padding: '9px', background: '#fff', color: '#4c6272', border: '1px solid #d8dde0', borderRadius: '6px', fontSize: '13px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit' }}>
                About this service
              </button>
              <button onClick={() => navigate('/contact')} style={{ width: '100%', padding: '10px', background: '#005EB8', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', fontFamily: 'inherit' }}>
                Contact support
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}