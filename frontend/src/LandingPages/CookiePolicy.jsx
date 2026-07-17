import { useNavigate } from 'react-router-dom'
import cookiesImage from '../assets/cookies.png'

export default function CookiePolicy() {
  const navigate = useNavigate()

  const sections = [
    {
      icon: 'ti-cookie', iconBg: '#E6F1FB', iconColor: '#005EB8',
      title: '1. What are cookies?',
      body: 'Cookies are small text files that are placed on your device (computer, smartphone or tablet) when you visit a website or use a digital service. They are widely used to make websites work more efficiently and to provide a better user experience. Cookies can be session-based (deleted when you close your browser) or persistent (remaining on your device for a set period).'
    },
    {
      icon: 'ti-shield-check', iconBg: '#E1F5EE', iconColor: '#007f3b',
      title: '2. How we use cookies',
      body: 'The NHS GP Appointment Booking Service uses only essential cookies that are strictly necessary for the Service to function. We do not use tracking cookies, advertising cookies, or analytics cookies of any kind. Our cookies are used solely to manage your login session and maintain your authentication status while you use the Service. Without these essential cookies, you would not be able to log in or use the booking system.'
    },
    {
      icon: 'ti-list', iconBg: '#FAEEDA', iconColor: '#633806',
      title: '3. Cookies we use',
      body: 'We use one type of storage mechanism: a JWT (JSON Web Token) authentication token stored in your browser\'s localStorage. This token: is created when you successfully log in, identifies your account and user role (patient, GP, or admin), expires automatically after 7 days, is deleted immediately when you log out, and is never shared with third parties. This is not technically a "cookie" in the traditional sense but serves the same purpose of maintaining your session.'
    },
    {
      icon: 'ti-ban', iconBg: '#FAECE7', iconColor: '#712B13',
      title: '4. Cookies we do NOT use',
      body: 'We are committed to minimal data collection. We do not use: advertising or targeting cookies, social media tracking pixels, analytics cookies (such as Google Analytics), performance monitoring cookies, A/B testing cookies, third-party marketing cookies, or cross-site tracking technologies of any kind. Your activity on this Service is never shared with advertisers or data brokers.'
    },
    {
      icon: 'ti-device-desktop', iconBg: '#EEEDFE', iconColor: '#534AB7',
      title: '5. Managing your cookies',
      body: 'Since we only use essential cookies, there is no cookie consent banner on this Service — essential cookies do not require consent under UK GDPR and the Privacy and Electronic Communications Regulations (PECR). You can clear your browser storage (including our authentication token) at any time through your browser settings. Note that clearing your storage will log you out of the Service. You can also log out manually which immediately removes the authentication token.'
    },
    {
      icon: 'ti-browser', iconBg: '#E1F5EE', iconColor: '#085041',
      title: '6. How to clear cookies in your browser',
      body: 'To clear cookies and localStorage data from your browser: In Chrome — Settings → Privacy and Security → Clear browsing data → tick "Cookies and other site data". In Firefox — Settings → Privacy & Security → Cookies and Site Data → Clear Data. In Safari — Preferences → Privacy → Manage Website Data → Remove All. In Edge — Settings → Privacy, search, and services → Clear browsing data → Cookies and other site data. Clearing this data will log you out of the NHS GP Appointment Booking Service.'
    },
    {
      icon: 'ti-refresh', iconBg: '#E6F1FB', iconColor: '#005EB8',
      title: '7. Changes to this cookie policy',
      body: 'We may update this Cookie Policy from time to time, for example if we introduce new features that require additional cookies. We will notify you of any significant changes via email and through a notice on the Service at least 14 days before they take effect. The date at the top of this page shows when this policy was last updated. We encourage you to review this policy periodically.'
    },
    {
      icon: 'ti-scale', iconBg: '#FAEEDA', iconColor: '#633806',
      title: '8. Legal basis',
      body: 'Our use of essential cookies is based on the legal ground of legitimate interests under UK GDPR Article 6(1)(f), as these cookies are strictly necessary for the operation of the Service. Under the Privacy and Electronic Communications Regulations (PECR) 2003, essential cookies that are necessary for the provision of a service do not require prior consent. For any non-essential cookies we may introduce in the future, we will obtain your explicit consent before placing them.'
    },
  ]

  const cookieTable = [
    { name: 'auth_token', type: 'Essential', storage: 'localStorage', duration: '7 days', purpose: 'Maintains your login session and identifies your user role' },
    { name: 'user_data',  type: 'Essential', storage: 'localStorage', duration: '7 days', purpose: 'Stores your basic profile info (name, email, role) for display purposes' },
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
        <span style={{ fontSize: '14px', color: '#4c6272' }}>Cookie policy</span>
      </div>

      {/* ── Hero — text left, image right ── */}
      <div style={{ background: '#005EB8', padding: '72px 6%', display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap', boxSizing: 'border-box' }}>

        {/* Left — text */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <div style={{ fontSize: '13px', fontWeight: '700', color: 'rgba(255,255,255,0.7)', letterSpacing: '1.5px', marginBottom: '14px' }}>COOKIE POLICY</div>
          <h1 style={{ fontSize: '44px', fontWeight: '700', color: '#fff', lineHeight: '1.25', marginBottom: '20px' }}>
            We only use cookies that are essential
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.88)', lineHeight: '1.75', marginBottom: '32px' }}>
            We keep our cookie usage to an absolute minimum. We do not track you, advertise to you, or share your data with third parties. The only cookies we use are strictly necessary to keep you logged in.
          </p>

          {/* Key facts */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {[
              { icon: 'ti-check',    text: 'Essential cookies only' },
              { icon: 'ti-ban',      text: 'No tracking cookies' },
              { icon: 'ti-eye-off',  text: 'No advertising cookies' },
              { icon: 'ti-trash',    text: 'Clear anytime by logging out' },
            ].map(item => (
              <div key={item.text} style={{ background: 'rgba(255,255,255,0.12)', borderRadius: '8px', padding: '12px 16px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <i className={`ti ${item.icon}`} style={{ color: '#7dd3a8', fontSize: '18px', flexShrink: 0 }} aria-hidden="true"></i>
                <span style={{ fontSize: '14px', color: '#fff', fontWeight: '500' }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image */}
        <div style={{ flex: '0 0 460px', minWidth: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '460px' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '420px', height: '300px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', zIndex: 0 }}></div>
            <img
              src={cookiesImage}
              alt="NHS digital health service — secure and protected"
              style={{ width: '100%', maxWidth: '460px', height: 'auto', position: 'relative', zIndex: 1, filter: 'drop-shadow(0 16px 40px rgba(0,0,0,0.25))' }}
            />
            {/* Badge */}
            <div style={{ position: 'absolute', bottom: '10px', left: '20px', background: '#007f3b', borderRadius: '8px', padding: '10px 16px', zIndex: 2 }}>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', marginBottom: '2px' }}>COMPLIANT WITH</div>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#fff' }}>UK GDPR & PECR 2003</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Version strip ── */}
      <div style={{ background: '#003087', padding: '16px 6%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '10px', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
          {[
            { label: 'Version',      value: '1.2' },
            { label: 'Effective',    value: '1 January 2026' },
            { label: 'Next review',  value: '1 January 2027' },
            { label: 'Regulation',   value: 'UK GDPR & PECR 2003' },
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

        {/* Left — main content */}
        <div>
          <div style={{ fontSize: '13px', fontWeight: '700', color: '#005EB8', letterSpacing: '1px', marginBottom: '10px' }}>FULL POLICY</div>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#212b32', marginBottom: '12px' }}>Cookie policy details</h2>
          <p style={{ fontSize: '15px', color: '#4c6272', lineHeight: '1.7', marginBottom: '36px', borderLeft: '4px solid #005EB8', paddingLeft: '16px' }}>
            We believe in being completely transparent about how we use cookies. This page explains everything — what we use, why we use it, and how you can control it.
          </p>

          {/* Cookie table */}
          <div style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '12px', padding: '28px 32px', marginBottom: '20px' }}>
            <div style={{ fontSize: '18px', fontWeight: '700', color: '#212b32', marginBottom: '6px' }}>Cookies currently in use</div>
            <p style={{ fontSize: '14px', color: '#4c6272', marginBottom: '20px' }}>
              This is the complete list of all cookies and storage items used by this Service:
            </p>
            <div style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
                <thead>
                  <tr style={{ background: '#f0f4f5' }}>
                    {['Name', 'Type', 'Storage', 'Duration', 'Purpose'].map(h => (
                      <th key={h} style={{ padding: '12px 16px', textAlign: 'left', fontWeight: '700', color: '#212b32', borderBottom: '2px solid #d8dde0', whiteSpace: 'nowrap' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {cookieTable.map((row, i) => (
                    <tr key={i} style={{ borderBottom: '0.5px solid #f0f4f5' }}>
                      <td style={{ padding: '12px 16px', fontFamily: 'monospace', color: '#005EB8', fontWeight: '600' }}>{row.name}</td>
                      <td style={{ padding: '12px 16px' }}>
                        <span style={{ background: '#E1F5EE', color: '#085041', fontSize: '12px', fontWeight: '600', padding: '3px 10px', borderRadius: '20px' }}>{row.type}</span>
                      </td>
                      <td style={{ padding: '12px 16px', color: '#4c6272' }}>{row.storage}</td>
                      <td style={{ padding: '12px 16px', color: '#4c6272' }}>{row.duration}</td>
                      <td style={{ padding: '12px 16px', color: '#4c6272' }}>{row.purpose}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Policy sections */}
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

          {/* Contact */}
          <div style={{ background: '#212b32', borderRadius: '12px', padding: '32px', marginTop: '28px' }}>
            <div style={{ fontSize: '20px', fontWeight: '700', color: '#fff', marginBottom: '10px' }}>Questions about cookies?</div>
            <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.7', marginBottom: '20px' }}>
              If you have any questions about how we use cookies or local storage, please contact our Data Protection Officer.
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
            <div
              style={{ fontSize: '13px', color: '#005EB8', marginBottom: '10px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '8px' }}
              onMouseEnter={e => e.currentTarget.style.color = '#003087'}
              onMouseLeave={e => e.currentTarget.style.color = '#005EB8'}
            >
              <i className="ti ti-chevron-right" style={{ fontSize: '12px' }} aria-hidden="true"></i>
              Cookies currently in use
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
              src={cookiesImage}
              alt="Cookie policy"
              style={{ width: '100%', height: '160px', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
            />
            <div style={{ padding: '16px' }}>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#212b32', marginBottom: '4px' }}>Your data is protected</div>
              <div style={{ fontSize: '13px', color: '#4c6272', lineHeight: '1.5' }}>We comply fully with UK GDPR and PECR 2003 regulations.</div>
            </div>
          </div>

          {/* Related policies */}
          <div style={{ background: '#E6F1FB', borderRadius: '12px', padding: '20px' }}>
            <div style={{ fontSize: '14px', fontWeight: '700', color: '#005EB8', marginBottom: '12px' }}>Related policies</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <button onClick={() => navigate('/privacy')} style={{ width: '100%', padding: '9px', background: '#fff', color: '#005EB8', border: '1px solid #005EB8', borderRadius: '6px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', fontFamily: 'inherit' }}>
                Privacy policy
              </button>
              <button onClick={() => navigate('/terms')} style={{ width: '100%', padding: '9px', background: '#fff', color: '#4c6272', border: '1px solid #d8dde0', borderRadius: '6px', fontSize: '13px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit' }}>
                Terms of use
              </button>
              <button onClick={() => navigate('/nhs-policy')} style={{ width: '100%', padding: '9px', background: '#fff', color: '#4c6272', border: '1px solid #d8dde0', borderRadius: '6px', fontSize: '13px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit' }}>
                NHS digital policy
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