import { useNavigate } from 'react-router-dom'
import prescriptionImage1 from '../assets/Prescription.png'
import prescriptionImage2 from '../assets/Prescription2.jpg'
import prescriptionImage5 from '../assets/Prescription5.jpg'

export default function Prescriptions() {
  const navigate = useNavigate()

  const prescriptionTypes = [
    {
      icon: 'ti-refresh', iconBg: '#E1F5EE', iconColor: '#007f3b',
      name: 'Repeat prescriptions',
      desc: 'For medicines you take regularly for a long-term condition. Your GP sets up a repeat prescription so you can request it without a new appointment each time.',
      examples: ['Blood pressure medication', 'Insulin for diabetes', 'Inhalers for asthma', 'Antidepressants', 'Contraceptive pill'],
      badge: 'Most common', badgeColor: '#007f3b', badgeBg: '#E1F5EE'
    },
    {
      icon: 'ti-file-text', iconBg: '#E6F1FB', iconColor: '#005EB8',
      name: 'Acute prescriptions',
      desc: 'For a one-off medication prescribed during a GP appointment to treat a specific short-term illness or condition. Usually not repeatable without another consultation.',
      examples: ['Antibiotics for infection', 'Painkillers for injury', 'Antifungal treatment', 'Eye drops', 'Short-term steroids'],
      badge: 'One-off', badgeColor: '#005EB8', badgeBg: '#E6F1FB'
    },
    {
      icon: 'ti-device-tablet', iconBg: '#EEEDFE', iconColor: '#534AB7',
      name: 'Electronic Prescriptions (EPS)',
      desc: 'The NHS Electronic Prescription Service sends your prescription directly to your chosen pharmacy electronically — no paper needed. Faster and more convenient.',
      examples: ['Sent directly to pharmacy', 'No paper required', 'Nominated pharmacy', 'Available at most GP practices', 'Reduces wait times'],
      badge: 'Digital', badgeColor: '#534AB7', badgeBg: '#EEEDFE'
    },
    {
      icon: 'ti-building-store', iconBg: '#FAEEDA', iconColor: '#633806',
      name: 'Private prescriptions',
      desc: 'Issued by private doctors rather than NHS GPs. You pay the full cost of the medicine rather than the standard NHS prescription charge. Not available through this service.',
      examples: ['Private GP consultation', 'Full medicine cost', 'Not NHS funded', 'Specialist medications', 'Travel medicine'],
      badge: 'Private only', badgeColor: '#633806', badgeBg: '#FAEEDA'
    },
  ]

  const exemptions = [
    { icon: 'ti-user', label: 'Age exemptions', items: ['Under 16 years old', 'Aged 16–18 and in full-time education', 'Aged 60 or over'] },
    { icon: 'ti-heart', label: 'Medical exemptions', items: ['Certain medical conditions (e.g. diabetes, epilepsy, cancer)', 'Permanent fistula', 'Hypoadrenalism requiring cortisol', 'Hypoparathyroidism'] },
    { icon: 'ti-currency-pound', label: 'Income-based exemptions', items: ['Universal Credit recipients', 'Income Support recipients', 'NHS Low Income Scheme (HC2 certificate)', 'Pension Credit Guarantee Credit'] },
    { icon: 'ti-baby-carriage', label: 'Maternity exemptions', items: ['Pregnant women (with valid MatEx card)', 'Women who have given birth in the last 12 months', 'Free for the duration of pregnancy + 1 year'] },
  ]

  const howToSteps = [
    { num: 1, icon: 'ti-login', title: 'Log in to your account', desc: 'Sign in to your NHS GP Appointment Booking Service patient portal using your email and password.' },
    { num: 2, icon: 'ti-calendar-plus', title: 'Book a GP appointment', desc: 'Request a prescription review or consultation with your GP through the online booking system.' },
    { num: 3, icon: 'ti-stethoscope', title: 'GP reviews your request', desc: 'Your GP reviews your repeat prescription request and approves it if clinically appropriate.' },
    { num: 4, icon: 'ti-device-tablet', title: 'Sent to your pharmacy', desc: 'Your prescription is sent electronically to your nominated pharmacy via the NHS Electronic Prescription Service.' },
    { num: 5, icon: 'ti-building-store', title: 'Collect your medication', desc: 'Visit your pharmacy to collect your medication. Allow 2 working days from approval before collecting.' },
  ]

  const pharmacyTips = [
    { icon: 'ti-map-pin',       title: 'NHS Find a Pharmacy',          desc: 'Use the NHS website to find your nearest pharmacy by postcode. Most pharmacies are open 7 days a week.' },
    { icon: 'ti-clock',         title: 'Opening hours',                 desc: 'Most pharmacies are open 9am–6pm weekdays. Some large pharmacies and supermarkets are open until 10pm or 24 hours.' },
    { icon: 'ti-truck-delivery', title: 'Home delivery',               desc: 'Many pharmacies offer free home delivery of your prescriptions. Ask your local pharmacy or use an online pharmacy service.' },
    { icon: 'ti-device-mobile', title: 'Pharmacy apps',                desc: 'Apps like NHS App, Pharmacy2U and Echo allow you to manage and order prescriptions directly from your smartphone.' },
  ]

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', minHeight: '100vh', background: '#f0f4f5' }}>

      {/* NHS Header */}
      <div style={{ background: '#005EB8', padding: '0 6%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '60px', boxSizing: 'border-box' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '14px', cursor: 'pointer' }} onClick={() => navigate('/')}>
          <span style={{ background: '#fff', color: '#005EB8', fontSize: '16px', fontWeight: '900', padding: '4px 10px', borderRadius: '4px', letterSpacing: '2px' }}>NHS</span>
          <span style={{ color: '#fff', fontSize: '16px', fontWeight: '600' }}>GP Appointment Booking Service</span>
        </div>
        <button onClick={() => navigate(-1)} style={{ background: 'transparent', border: '1.5px solid rgba(255,255,255,0.6)', color: '#fff', padding: '7px 18px', borderRadius: '4px', fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit' }}>← Back</button>
      </div>

      {/* Breadcrumb */}
      <div style={{ background: '#fff', padding: '12px 6%', borderBottom: '0.5px solid #d8dde0', boxSizing: 'border-box' }}>
        <span style={{ fontSize: '14px', color: '#005EB8', cursor: 'pointer' }} onClick={() => navigate('/')}>Home</span>
        <span style={{ fontSize: '14px', color: '#4c6272', margin: '0 8px' }}>›</span>
        <span style={{ fontSize: '14px', color: '#4c6272' }}>Online services</span>
        <span style={{ fontSize: '14px', color: '#4c6272', margin: '0 8px' }}>›</span>
        <span style={{ fontSize: '14px', color: '#4c6272' }}>Prescriptions</span>
      </div>

      {/* ── Hero — text left, image right ── */}
      <div style={{ background: '#005EB8', padding: '72px 6%', display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap', boxSizing: 'border-box' }}>

        {/* Left — text */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <div style={{ fontSize: '13px', fontWeight: '700', color: 'rgba(255,255,255,0.7)', letterSpacing: '1.5px', marginBottom: '14px' }}>NHS PRESCRIPTIONS</div>
          <h1 style={{ fontSize: '44px', fontWeight: '700', color: '#fff', lineHeight: '1.25', marginBottom: '20px' }}>
            Everything you need to know about NHS prescriptions
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.88)', lineHeight: '1.75', marginBottom: '32px' }}>
            Your GP can issue prescriptions for medication you need. Find out how to request repeat prescriptions, what you pay, who gets them free, and how to find your nearest pharmacy.
          </p>

          {/* Quick facts */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {[
              { icon: 'ti-currency-pound', text: '£9.90 standard prescription charge (2026)' },
              { icon: 'ti-check',          text: 'Over 90% of prescriptions are dispensed free' },
              { icon: 'ti-device-tablet',  text: 'Electronic prescriptions sent direct to pharmacy' },
              { icon: 'ti-clock',          text: 'Allow 2 working days before collecting' },
            ].map(item => (
              <div key={item.text} style={{ background: 'rgba(255,255,255,0.12)', borderRadius: '8px', padding: '12px 16px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <i className={`ti ${item.icon}`} style={{ color: '#7dd3a8', fontSize: '18px', flexShrink: 0, marginTop: '2px' }} aria-hidden="true"></i>
                <span style={{ fontSize: '13px', color: '#fff', fontWeight: '500', lineHeight: '1.5' }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image 1 (pharmacy illustration) */}
        <div style={{ flex: '0 0 420px', minWidth: '260px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '420px' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', zIndex: 0 }}></div>
            <img
              src={prescriptionImage1}
              alt="Pharmacist helping patient with prescription"
              style={{ width: '100%', maxWidth: '420px', height: 'auto', position: 'relative', zIndex: 1, borderRadius: '16px', boxShadow: '0 20px 60px rgba(0,0,0,0.25)' }}
            />
            {/* Badge */}
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: '#007f3b', borderRadius: '8px', padding: '10px 16px', zIndex: 2 }}>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', marginBottom: '2px' }}>NHS SERVICE</div>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#fff' }}>Free for most patients</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Info strip ── */}
      <div style={{ background: '#003087', padding: '20px 6%', display: 'flex', gap: '40px', flexWrap: 'wrap', alignItems: 'center', boxSizing: 'border-box' }}>
        {[
          { icon: 'ti-pill',             text: '1 billion+ prescriptions dispensed annually in England' },
          { icon: 'ti-currency-pound',   text: '£9.90 per item (standard charge 2026)' },
          { icon: 'ti-users',            text: 'Free for over 90% of the population' },
          { icon: 'ti-device-tablet',    text: 'EPS sends prescriptions digitally to pharmacy' },
        ].map(item => (
          <div key={item.text} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <i className={`ti ${item.icon}`} style={{ color: '#7dd3a8', fontSize: '18px' }} aria-hidden="true"></i>
            <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '14px', fontWeight: '500' }}>{item.text}</span>
          </div>
        ))}
      </div>

      <div style={{ padding: '56px 6%', boxSizing: 'border-box' }}>

        {/* ── Section 1: How to request ── */}
        <div style={{ marginBottom: '56px' }}>
          <div style={{ fontSize: '13px', fontWeight: '700', color: '#005EB8', letterSpacing: '1px', marginBottom: '10px' }}>HOW TO REQUEST</div>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#212b32', marginBottom: '12px' }}>How to request a repeat prescription online</h2>
          <p style={{ fontSize: '16px', color: '#4c6272', marginBottom: '36px', lineHeight: '1.7' }}>
            Requesting your repeat prescription through this service is quick and easy. Follow these steps:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '16px', marginBottom: '32px' }}>
            {howToSteps.map((step, i) => (
              <div key={step.num} style={{ background: '#fff', borderRadius: '12px', padding: '24px 18px', border: '0.5px solid #d8dde0', textAlign: 'center', position: 'relative' }}>
                <div style={{ position: 'absolute', top: '14px', right: '14px', width: '24px', height: '24px', borderRadius: '50%', background: '#E6F1FB', color: '#005EB8', fontSize: '12px', fontWeight: '700', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{step.num}</div>
                <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: '#005EB8', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', margin: '0 auto 14px' }}>
                  <i className={`ti ${step.icon}`} aria-hidden="true"></i>
                </div>
                <div style={{ fontSize: '14px', fontWeight: '700', color: '#212b32', marginBottom: '8px' }}>{step.title}</div>
                <div style={{ fontSize: '12px', color: '#4c6272', lineHeight: '1.6' }}>{step.desc}</div>
                {i < howToSteps.length - 1 && (
                  <div style={{ position: 'absolute', right: '-12px', top: '50%', transform: 'translateY(-50%)', color: '#005EB8', fontSize: '20px', zIndex: 1 }}>›</div>
                )}
              </div>
            ))}
          </div>

          <div style={{ background: '#E6F1FB', borderLeft: '4px solid #005EB8', padding: '14px 20px', borderRadius: '0 8px 8px 0', fontSize: '14px', color: '#0C447C' }}>
            <strong>Important:</strong> Allow at least 2 working days for your prescription to be processed before visiting the pharmacy. Order before you run out of medication.
          </div>
        </div>

        {/* ── Section 2: Types — image on right ── */}
        <div style={{ marginBottom: '56px' }}>
          <div style={{ fontSize: '13px', fontWeight: '700', color: '#005EB8', letterSpacing: '1px', marginBottom: '10px' }}>TYPES</div>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#212b32', marginBottom: '12px' }}>Types of NHS prescriptions</h2>
          <p style={{ fontSize: '16px', color: '#4c6272', marginBottom: '36px', lineHeight: '1.7' }}>
            There are several types of prescription available through the NHS. Understanding which type applies to you helps you manage your medication effectively.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 340px', gap: '32px', alignItems: 'start' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
              {prescriptionTypes.map(type => (
                <div key={type.name} style={{ background: '#fff', borderRadius: '12px', padding: '24px', border: '0.5px solid #d8dde0' }}>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                    <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: type.iconBg, color: type.iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px' }}>
                      <i className={`ti ${type.icon}`} aria-hidden="true"></i>
                    </div>
                    <span style={{ background: type.badgeBg, color: type.badgeColor, fontSize: '11px', fontWeight: '700', padding: '3px 10px', borderRadius: '20px' }}>{type.badge}</span>
                  </div>
                  <div style={{ fontSize: '16px', fontWeight: '700', color: '#212b32', marginBottom: '8px' }}>{type.name}</div>
                  <div style={{ fontSize: '13px', color: '#4c6272', lineHeight: '1.6', marginBottom: '14px' }}>{type.desc}</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px' }}>
                    {type.examples.map(ex => (
                      <span key={ex} style={{ background: '#f0f4f5', color: '#4c6272', fontSize: '11px', padding: '3px 9px', borderRadius: '20px', border: '0.5px solid #d8dde0' }}>{ex}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Image 2 — pills */}
            <div style={{ position: 'sticky', top: '80px' }}>
              <div style={{ borderRadius: '16px', overflow: 'hidden', marginBottom: '16px' }}>
                <img
                  src={prescriptionImage2}
                  alt="NHS prescription medication — green and white capsules"
                  style={{ width: '100%', height: '280px', objectFit: 'cover', objectPosition: 'center', display: 'block' }}
                />
              </div>
              <div style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '12px', padding: '20px' }}>
                <div style={{ fontSize: '15px', fontWeight: '700', color: '#212b32', marginBottom: '8px' }}>Current prescription charge</div>
                <div style={{ fontSize: '32px', fontWeight: '700', color: '#005EB8', marginBottom: '4px' }}>£9.90</div>
                <div style={{ fontSize: '13px', color: '#4c6272', marginBottom: '12px' }}>Per prescription item (2026)</div>
                <div style={{ background: '#E1F5EE', borderRadius: '8px', padding: '10px 14px', fontSize: '13px', color: '#085041' }}>
                  <strong>Prepayment Certificate:</strong> If you need more than 2 items in 3 months, a PPC saves money. Currently £111.60/year.
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── Section 3: Exemptions ── */}
        <div style={{ marginBottom: '56px' }}>
          <div style={{ fontSize: '13px', fontWeight: '700', color: '#005EB8', letterSpacing: '1px', marginBottom: '10px' }}>FREE PRESCRIPTIONS</div>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#212b32', marginBottom: '12px' }}>Prescription costs and exemptions</h2>
          <p style={{ fontSize: '16px', color: '#4c6272', marginBottom: '36px', lineHeight: '1.7' }}>
            Over 90% of prescriptions in England are dispensed free. You may be entitled to free NHS prescriptions if you fall into one of these groups:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '20px', marginBottom: '24px' }}>
            {exemptions.map(group => (
              <div key={group.label} style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '12px', padding: '28px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#E6F1FB', color: '#005EB8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0 }}>
                  <i className={`ti ${group.icon}`} aria-hidden="true"></i>
                </div>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: '700', color: '#212b32', marginBottom: '12px' }}>{group.label}</div>
                  {group.items.map(item => (
                    <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', marginBottom: '8px' }}>
                      <i className="ti ti-circle-check" style={{ color: '#007f3b', fontSize: '15px', flexShrink: 0, marginTop: '2px' }} aria-hidden="true"></i>
                      <span style={{ fontSize: '14px', color: '#4c6272', lineHeight: '1.5' }}>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: '#fff8e6', borderLeft: '4px solid #ffb81c', padding: '14px 20px', borderRadius: '0 8px 8px 0', fontSize: '14px', color: '#6a4c00' }}>
            <strong>Claiming exemption:</strong> You must complete the back of your prescription form to declare your exemption. Wrongly claiming free prescriptions is a criminal offence and can result in a penalty charge of £100 or more.
          </div>
        </div>

        {/* ── Section 4: Find a pharmacy ── */}
        <div style={{ marginBottom: '40px' }}>
          <div style={{ fontSize: '13px', fontWeight: '700', color: '#005EB8', letterSpacing: '1px', marginBottom: '10px' }}>PHARMACY</div>
          <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#212b32', marginBottom: '12px' }}>How to find your nearest pharmacy</h2>
          <p style={{ fontSize: '16px', color: '#4c6272', marginBottom: '36px', lineHeight: '1.7' }}>
            There are over 11,000 pharmacies across England. Here's how to find the right one for you:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px', marginBottom: '32px' }}>
            {pharmacyTips.map(tip => (
              <div key={tip.title} style={{ background: '#fff', border: '0.5px solid #d8dde0', borderRadius: '12px', padding: '24px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: '#E1F5EE', color: '#007f3b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0 }}>
                  <i className={`ti ${tip.icon}`} aria-hidden="true"></i>
                </div>
                <div>
                  <div style={{ fontSize: '16px', fontWeight: '700', color: '#212b32', marginBottom: '6px' }}>{tip.title}</div>
                  <div style={{ fontSize: '14px', color: '#4c6272', lineHeight: '1.6' }}>{tip.desc}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Image + nominate pharmacy panel */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            <div style={{ borderRadius: '16px', overflow: 'hidden', position: 'relative' }}>
              <img
                src={prescriptionImage5}
                alt="Pharmacy prescription service"
                style={{ width: '100%', height: '280px', objectFit: 'cover', objectPosition: 'center top', display: 'block' }}
              />
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,48,135,0.85) 0%, transparent 50%)' }}></div>
              <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px' }}>
                <div style={{ fontSize: '18px', fontWeight: '700', color: '#fff', marginBottom: '6px' }}>Nominate your pharmacy</div>
                <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', lineHeight: '1.6' }}>
                  Ask your GP practice to nominate a preferred pharmacy so prescriptions are sent there automatically.
                </div>
              </div>
            </div>

            <div style={{ background: '#212b32', borderRadius: '16px', padding: '32px' }}>
              <div style={{ fontSize: '18px', fontWeight: '700', color: '#fff', marginBottom: '16px' }}>Useful contacts</div>
              {[
                { icon: 'ti-world',        label: 'Find a pharmacy online', value: 'nhs.uk/service-search/pharmacy', color: '#7dd3a8' },
                { icon: 'ti-phone',        label: 'NHS helpline',           value: 'Call 111',                       color: '#7dd3a8' },
                { icon: 'ti-device-mobile', label: 'NHS App',              value: 'Manage prescriptions digitally',  color: '#7dd3a8' },
                { icon: 'ti-currency-pound', label: 'Prepayment Certificate', value: '0300 330 1341',              color: '#7dd3a8' },
              ].map(item => (
                <div key={item.label} style={{ display: 'flex', gap: '12px', marginBottom: '16px', alignItems: 'flex-start' }}>
                  <div style={{ width: '32px', height: '32px', borderRadius: '6px', background: 'rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <i className={`ti ${item.icon}`} style={{ color: item.color, fontSize: '15px' }} aria-hidden="true"></i>
                  </div>
                  <div>
                    <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.55)', marginBottom: '2px' }}>{item.label}</div>
                    <div style={{ fontSize: '14px', color: '#fff', fontWeight: '500' }}>{item.value}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* ── CTA ── */}
        <div style={{ background: '#005EB8', borderRadius: '12px', padding: '36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
            <img src={prescriptionImage1} alt="Prescription medication" style={{ width: '80px', height: '60px', objectFit: 'cover', borderRadius: '8px', display: 'block', flexShrink: 0 }} />
            <div>
              <div style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '6px' }}>Need a prescription?</div>
              <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.8)' }}>Book a GP appointment to request or review your prescription</div>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/register')} style={{ padding: '12px 28px', background: '#007f3b', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '15px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit' }}>
              Book appointment
            </button>
            <button onClick={() => navigate('/login')} style={{ padding: '12px 28px', background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.6)', borderRadius: '6px', fontSize: '15px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit' }}>
              Sign in
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}