import { useNavigate } from 'react-router-dom'

export default function CommonConditions() {
  const navigate = useNavigate()

  const conditions = [
    {
      icon: 'ti-lungs', iconBg: '#E6F1FB', iconColor: '#005EB8',
      name: 'Asthma',
      desc: 'A common condition affecting the airways, causing wheezing, breathlessness and chest tightness. Can be managed effectively with inhalers and regular GP reviews.',
      symptoms: ['Wheezing', 'Shortness of breath', 'Chest tightness', 'Persistent cough'],
      management: 'Regular GP review, inhaler therapy, avoiding triggers'
    },
    {
      icon: 'ti-droplet', iconBg: '#E1F5EE', iconColor: '#007f3b',
      name: 'Type 2 Diabetes',
      desc: 'A condition where the body doesn\'t produce enough insulin or doesn\'t use it effectively. Managed through diet, exercise, medication and regular monitoring.',
      symptoms: ['Excessive thirst', 'Frequent urination', 'Fatigue', 'Blurred vision'],
      management: 'Diet management, medication, regular HbA1c blood tests'
    },
    {
      icon: 'ti-heart-rate-monitor', iconBg: '#FAECE7', iconColor: '#712B13',
      name: 'High blood pressure',
      desc: 'Also known as hypertension, this is when blood pressure is consistently too high. Often has no symptoms but significantly increases risk of heart disease and stroke.',
      symptoms: ['Often no symptoms', 'Headaches', 'Dizziness', 'Blurred vision'],
      management: 'Blood pressure monitoring, lifestyle changes, medication'
    },
    {
      icon: 'ti-brain', iconBg: '#EEEDFE', iconColor: '#534AB7',
      name: 'Depression & anxiety',
      desc: 'Common mental health conditions affecting mood, thoughts and behaviour. Highly treatable through talking therapies, medication, lifestyle changes and support.',
      symptoms: ['Low mood', 'Loss of interest', 'Fatigue', 'Worry & fear'],
      management: 'Talking therapy, medication, lifestyle support, NHS IAPT'
    },
    {
      icon: 'ti-spine', iconBg: '#FAEEDA', iconColor: '#633806',
      name: 'Back pain',
      desc: 'One of the most common reasons for GP visits. Most back pain improves within a few weeks with appropriate exercise and pain relief.',
      symptoms: ['Lower back ache', 'Stiffness', 'Muscle spasms', 'Reduced mobility'],
      management: 'Exercise, physiotherapy, pain relief, lifestyle advice'
    },
    {
      icon: 'ti-shield-x', iconBg: '#E1F5EE', iconColor: '#085041',
      name: 'Arthritis',
      desc: 'Inflammation of one or more joints causing pain and stiffness. Osteoarthritis and rheumatoid arthritis are the most common types managed in primary care.',
      symptoms: ['Joint pain', 'Stiffness', 'Swelling', 'Reduced range of motion'],
      management: 'Exercise, pain relief, physiotherapy, specialist referral'
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
        <button onClick={() => navigate(-1)} style={{ background: 'transparent', border: '1.5px solid rgba(255,255,255,0.6)', color: '#fff', padding: '7px 18px', borderRadius: '4px', fontSize: '14px', cursor: 'pointer', fontFamily: 'inherit' }}>← Back</button>
      </div>

      {/* Breadcrumb */}
      <div style={{ background: '#fff', padding: '12px 6%', borderBottom: '0.5px solid #d8dde0', boxSizing: 'border-box' }}>
        <span style={{ fontSize: '14px', color: '#005EB8', cursor: 'pointer' }} onClick={() => navigate('/')}>Home</span>
        <span style={{ fontSize: '14px', color: '#4c6272', margin: '0 8px' }}>›</span>
        <span style={{ fontSize: '14px', color: '#4c6272' }}>Health info</span>
        <span style={{ fontSize: '14px', color: '#4c6272', margin: '0 8px' }}>›</span>
        <span style={{ fontSize: '14px', color: '#4c6272' }}>Common conditions</span>
      </div>

      {/* Hero */}
      <div style={{ background: '#005EB8', padding: '64px 6%', boxSizing: 'border-box' }}>
        <div style={{ fontSize: '13px', fontWeight: '700', color: 'rgba(255,255,255,0.7)', letterSpacing: '1.5px', marginBottom: '14px' }}>HEALTH INFO</div>
        <h1 style={{ fontSize: '44px', fontWeight: '700', color: '#fff', lineHeight: '1.25', marginBottom: '20px', maxWidth: '700px' }}>
          Common conditions managed by your GP
        </h1>
        <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.88)', lineHeight: '1.75', maxWidth: '680px' }}>
          Your GP can diagnose, treat and monitor a wide range of common health conditions. Here's an overview of the most frequently managed conditions in primary care.
        </p>
      </div>

      {/* Disclaimer */}
      <div style={{ background: '#fff8e6', borderLeft: '4px solid #ffb81c', padding: '14px 6%', boxSizing: 'border-box' }}>
        <span style={{ fontSize: '14px', color: '#6a4c00' }}>
          <strong>Important:</strong> This page is for general information only. Always consult your GP for personal medical advice and diagnosis.
        </span>
      </div>

      {/* Conditions grid */}
      <div style={{ padding: '56px 6%', boxSizing: 'border-box' }}>
        <div style={{ fontSize: '13px', fontWeight: '700', color: '#005EB8', letterSpacing: '1px', marginBottom: '10px' }}>CONDITIONS</div>
        <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#212b32', marginBottom: '40px' }}>Common health conditions</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '40px' }}>
          {conditions.map(condition => (
            <div key={condition.name} style={{ background: '#fff', borderRadius: '12px', padding: '28px', border: '0.5px solid #d8dde0' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: condition.iconBg, color: condition.iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '16px' }}>
                <i className={`ti ${condition.icon}`} aria-hidden="true"></i>
              </div>
              <div style={{ fontSize: '18px', fontWeight: '700', color: '#212b32', marginBottom: '8px' }}>{condition.name}</div>
              <div style={{ fontSize: '14px', color: '#4c6272', lineHeight: '1.7', marginBottom: '16px' }}>{condition.desc}</div>

              <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '12px', fontWeight: '700', color: '#212b32', marginBottom: '6px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Common symptoms</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {condition.symptoms.map(s => (
                    <span key={s} style={{ background: '#f0f4f5', color: '#4c6272', fontSize: '11px', padding: '3px 10px', borderRadius: '20px', border: '0.5px solid #d8dde0' }}>{s}</span>
                  ))}
                </div>
              </div>

              <div style={{ background: '#E6F1FB', borderRadius: '6px', padding: '10px 14px' }}>
                <div style={{ fontSize: '12px', fontWeight: '700', color: '#005EB8', marginBottom: '3px' }}>Management</div>
                <div style={{ fontSize: '13px', color: '#4c6272' }}>{condition.management}</div>
              </div>
            </div>
          ))}
        </div>

        <div style={{ background: '#005EB8', borderRadius: '12px', padding: '32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <div style={{ fontSize: '20px', fontWeight: '700', color: '#fff', marginBottom: '6px' }}>Managing a long-term condition?</div>
            <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.8)' }}>Book a review appointment with your GP today</div>
          </div>
          <button onClick={() => navigate('/register')} style={{ padding: '12px 28px', background: '#007f3b', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '15px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit' }}>
            Book appointment
          </button>
        </div>
      </div>
    </div>
  )
}