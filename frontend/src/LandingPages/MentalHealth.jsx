import { useNavigate } from 'react-router-dom'
import mentalHealthImage from '../assets/MentalHealth.jpg'

export default function MentalHealth() {
  const navigate = useNavigate()

  const conditions = [
    {
      icon: 'ti-mood-sad', iconBg: '#EEEDFE', iconColor: '#534AB7',
      name: 'Depression',
      desc: 'Depression is more than just feeling sad. It is a persistent low mood that affects your daily life, relationships and ability to function. It is very common and highly treatable.',
      symptoms: ['Persistent low mood', 'Loss of interest', 'Fatigue', 'Changes in sleep', 'Feelings of worthlessness'],
      treatment: 'Talking therapy (CBT), antidepressants, lifestyle changes, social support'
    },
    {
      icon: 'ti-brain', iconBg: '#E6F1FB', iconColor: '#005EB8',
      name: 'Anxiety disorders',
      desc: 'Anxiety is a feeling of unease, worry or fear. When it becomes persistent and overwhelming, it can interfere with daily life. Several types of anxiety disorders can be treated effectively.',
      symptoms: ['Excessive worry', 'Racing heart', 'Sweating', 'Panic attacks', 'Avoidance behaviour'],
      treatment: 'CBT, breathing techniques, medication, mindfulness, NHS IAPT'
    },
    {
      icon: 'ti-arrows-split-2', iconBg: '#FAEEDA', iconColor: '#633806',
      name: 'Stress & burnout',
      desc: 'Stress is a normal response to pressure, but chronic stress can lead to burnout — a state of physical and emotional exhaustion. Early intervention is important to prevent long-term impact.',
      symptoms: ['Exhaustion', 'Irritability', 'Difficulty concentrating', 'Headaches', 'Feeling overwhelmed'],
      treatment: 'Stress management, talking therapy, lifestyle changes, workplace support'
    },
    {
      icon: 'ti-moon', iconBg: '#E1F5EE', iconColor: '#007f3b',
      name: 'Sleep disorders',
      desc: 'Poor sleep has a significant impact on mental health. Insomnia, disrupted sleep patterns, and nightmares are commonly linked to anxiety, depression, and other mental health conditions.',
      symptoms: ['Difficulty falling asleep', 'Waking frequently', 'Daytime fatigue', 'Poor concentration', 'Low mood'],
      treatment: 'Sleep hygiene advice, CBT for insomnia (CBT-I), medication review'
    },
    {
      icon: 'ti-user-x', iconBg: '#FAECE7', iconColor: '#712B13',
      name: 'PTSD',
      desc: 'Post-traumatic stress disorder can develop after experiencing or witnessing a traumatic event. Symptoms can appear months or years later and affect all areas of life.',
      symptoms: ['Flashbacks', 'Nightmares', 'Hypervigilance', 'Emotional numbness', 'Avoidance'],
      treatment: 'Trauma-focused CBT, EMDR therapy, medication, peer support'
    },
    {
      icon: 'ti-heart-broken', iconBg: '#E6F1FB', iconColor: '#005EB8',
      name: 'Eating disorders',
      desc: 'Eating disorders including anorexia, bulimia and binge eating disorder are serious mental health conditions. Early diagnosis and treatment significantly improves outcomes.',
      symptoms: ['Distorted body image', 'Restrictive eating', 'Binge eating', 'Purging behaviours', 'Social withdrawal'],
      treatment: 'Specialist eating disorder services, CBT, nutritional support, family therapy'
    },
  ]

  const selfHelpTips = [
    { icon: 'ti-run', color: '#007f3b', bg: '#E1F5EE', title: 'Stay active', desc: 'Even 30 minutes of walking a day can significantly improve mood and reduce anxiety.' },
    { icon: 'ti-users', color: '#005EB8', bg: '#E6F1FB', title: 'Stay connected', desc: 'Talk to friends, family or a support group. Social connection is vital for mental wellbeing.' },
    { icon: 'ti-moon', color: '#534AB7', bg: '#EEEDFE', title: 'Prioritise sleep', desc: 'Aim for 7–9 hours of sleep per night. A consistent sleep routine makes a big difference.' },
    { icon: 'ti-leaf', color: '#085041', bg: '#E1F5EE', title: 'Eat well', desc: 'A balanced diet supports brain health. Reduce alcohol, caffeine and processed foods.' },
    { icon: 'ti-peace', color: '#633806', bg: '#FAEEDA', title: 'Practise mindfulness', desc: 'Even 5–10 minutes of mindfulness or breathing exercises a day can reduce stress levels.' },
    { icon: 'ti-phone-call', color: '#712B13', bg: '#FAECE7', title: 'Seek help early', desc: 'Talking to your GP is the first step. Don\'t wait until things feel unmanageable.' },
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
        <span style={{ fontSize: '14px', color: '#4c6272' }}>Mental health</span>
      </div>

      {/* ── Hero — image left, text right ── */}
      <div style={{ background: '#005EB8', padding: '72px 6%', display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap', boxSizing: 'border-box' }}>

        {/* Left — image */}
        <div style={{ flex: '0 0 380px', minWidth: '260px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '360px' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '360px', height: '360px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', zIndex: 0 }}></div>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '280px', height: '280px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', zIndex: 0 }}></div>
            <img
              src={mentalHealthImage}
              alt="Mental health awareness — NHS support"
              style={{ width: '100%', maxWidth: '360px', height: 'auto', position: 'relative', zIndex: 1, filter: 'drop-shadow(0 20px 40px rgba(0,0,0,0.25))' }}
            />
            {/* Badge */}
            <div style={{ position: 'absolute', bottom: '10px', right: '10px', background: '#7F77DD', borderRadius: '8px', padding: '10px 16px', zIndex: 2 }}>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', marginBottom: '2px' }}>NHS SUPPORT</div>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#fff' }}>Free mental health care</div>
            </div>
          </div>
        </div>

        {/* Right — text */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <div style={{ fontSize: '13px', fontWeight: '700', color: 'rgba(255,255,255,0.7)', letterSpacing: '1.5px', marginBottom: '14px' }}>MENTAL HEALTH</div>
          <h1 style={{ fontSize: '44px', fontWeight: '700', color: '#fff', lineHeight: '1.25', marginBottom: '20px' }}>
            Mental health support from your NHS GP
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.88)', lineHeight: '1.75', marginBottom: '32px' }}>
            Mental health is just as important as physical health. Your NHS GP is your first point of contact for mental health concerns — from depression and anxiety to stress and sleep problems. Help is always available.
          </p>

          {/* Key facts */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
            {[
              { icon: 'ti-heart',      text: '1 in 4 people experience mental health issues each year' },
              { icon: 'ti-check',      text: 'Mental health conditions are highly treatable' },
              { icon: 'ti-shield',     text: 'All consultations are completely confidential' },
              { icon: 'ti-phone-call', text: 'Crisis support available 24/7 via NHS 111' },
            ].map(item => (
              <div key={item.text} style={{ background: 'rgba(255,255,255,0.12)', borderRadius: '8px', padding: '12px 16px', display: 'flex', alignItems: 'flex-start', gap: '10px' }}>
                <i className={`ti ${item.icon}`} style={{ color: '#7dd3a8', fontSize: '18px', flexShrink: 0, marginTop: '2px' }} aria-hidden="true"></i>
                <span style={{ fontSize: '13px', color: '#fff', fontWeight: '500', lineHeight: '1.5' }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Crisis strip ── */}
      <div style={{ background: '#712B13', padding: '18px 6%', display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', boxSizing: 'border-box' }}>
        <i className="ti ti-urgent" style={{ color: '#fff', fontSize: '22px', flexShrink: 0 }} aria-hidden="true"></i>
        <div style={{ flex: 1 }}>
          <span style={{ fontSize: '14px', color: '#fff', fontWeight: '700' }}>Mental health crisis? </span>
          <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)' }}>Call NHS 111 and select the mental health option, or call the Samaritans on </span>
          <span style={{ fontSize: '14px', color: '#fff', fontWeight: '700' }}>116 123 </span>
          <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)' }}>— free, 24 hours a day.</span>
        </div>
        <button onClick={() => navigate('/register')} style={{ padding: '8px 20px', background: '#fff', color: '#712B13', border: 'none', borderRadius: '6px', fontSize: '13px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit', flexShrink: 0 }}>
          Book GP appointment
        </button>
      </div>

      {/* ── Conditions ── */}
      <div style={{ padding: '56px 6%', boxSizing: 'border-box' }}>
        <div style={{ fontSize: '13px', fontWeight: '700', color: '#005EB8', letterSpacing: '1px', marginBottom: '10px' }}>CONDITIONS</div>
        <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#212b32', marginBottom: '12px' }}>Common mental health conditions</h2>
        <p style={{ fontSize: '16px', color: '#4c6272', marginBottom: '40px', lineHeight: '1.7' }}>
          Your GP can help diagnose, treat and refer you for a wide range of mental health conditions. You are never alone.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '48px' }}>
          {conditions.map(condition => (
            <div key={condition.name} style={{ background: '#fff', borderRadius: '12px', padding: '28px', border: '0.5px solid #d8dde0' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: condition.iconBg, color: condition.iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '16px' }}>
                <i className={`ti ${condition.icon}`} aria-hidden="true"></i>
              </div>
              <div style={{ fontSize: '18px', fontWeight: '700', color: '#212b32', marginBottom: '8px' }}>{condition.name}</div>
              <div style={{ fontSize: '14px', color: '#4c6272', lineHeight: '1.7', marginBottom: '16px' }}>{condition.desc}</div>
              <div style={{ marginBottom: '12px' }}>
                <div style={{ fontSize: '12px', fontWeight: '700', color: '#212b32', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.5px' }}>Symptoms</div>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                  {condition.symptoms.map(s => (
                    <span key={s} style={{ background: '#f0f4f5', color: '#4c6272', fontSize: '11px', padding: '3px 10px', borderRadius: '20px', border: '0.5px solid #d8dde0' }}>{s}</span>
                  ))}
                </div>
              </div>
              <div style={{ background: '#EEEDFE', borderRadius: '6px', padding: '10px 14px' }}>
                <div style={{ fontSize: '12px', fontWeight: '700', color: '#534AB7', marginBottom: '3px' }}>Treatment options</div>
                <div style={{ fontSize: '13px', color: '#4c6272', lineHeight: '1.5' }}>{condition.treatment}</div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Self-help tips ── */}
        <div style={{ background: '#212b32', borderRadius: '12px', padding: '40px', marginBottom: '40px' }}>
          <div style={{ fontSize: '13px', fontWeight: '700', color: '#7dd3a8', letterSpacing: '1px', marginBottom: '10px' }}>SELF-HELP</div>
          <h2 style={{ fontSize: '24px', fontWeight: '700', color: '#fff', marginBottom: '32px' }}>Tips to support your mental wellbeing</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '16px' }}>
            {selfHelpTips.map(tip => (
              <div key={tip.title} style={{ background: 'rgba(255,255,255,0.07)', borderRadius: '10px', padding: '20px' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: tip.bg, color: tip.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', marginBottom: '14px' }}>
                  <i className={`ti ${tip.icon}`} aria-hidden="true"></i>
                </div>
                <div style={{ fontSize: '16px', fontWeight: '700', color: '#fff', marginBottom: '8px' }}>{tip.title}</div>
                <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)', lineHeight: '1.6' }}>{tip.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* ── Where to get help ── */}
        <div style={{ background: '#fff', borderRadius: '12px', padding: '32px', marginBottom: '32px', border: '0.5px solid #d8dde0' }}>
          <h2 style={{ fontSize: '22px', fontWeight: '700', color: '#212b32', marginBottom: '24px' }}>Where to get help</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
            {[
              { icon: 'ti-building-hospital', color: '#005EB8', bg: '#E6F1FB', title: 'Your NHS GP', desc: 'First point of contact for any mental health concern. Can refer you to specialist services and prescribe medication.', action: 'Book appointment', path: '/register' },
              { icon: 'ti-phone', color: '#712B13', bg: '#FAECE7', title: 'NHS 111', desc: 'For urgent mental health support outside GP hours. Select the mental health option when you call.', action: 'Call 111', path: null },
              { icon: 'ti-heart-handshake', color: '#534AB7', bg: '#EEEDFE', title: 'NHS Talking Therapies (IAPT)', desc: 'You can refer yourself for free NHS talking therapies including CBT, counselling and mindfulness.', action: 'Find local service', path: null },
              { icon: 'ti-phone-call', color: '#007f3b', bg: '#E1F5EE', title: 'Samaritans', desc: 'Free, confidential listening service available 24 hours a day, 7 days a week. Call 116 123.', action: 'Call 116 123', path: null },
            ].map(item => (
              <div key={item.title} style={{ background: item.bg, borderRadius: '10px', padding: '20px', display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '10px', background: '#fff', color: item.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '22px', flexShrink: 0 }}>
                  <i className={`ti ${item.icon}`} aria-hidden="true"></i>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '16px', fontWeight: '700', color: '#212b32', marginBottom: '6px' }}>{item.title}</div>
                  <div style={{ fontSize: '13px', color: '#4c6272', lineHeight: '1.6', marginBottom: '12px' }}>{item.desc}</div>
                  <button
                    onClick={() => item.path && navigate(item.path)}
                    style={{ padding: '7px 16px', background: item.color, color: '#fff', border: 'none', borderRadius: '6px', fontSize: '13px', fontWeight: '600', cursor: 'pointer', fontFamily: 'inherit' }}
                  >
                    {item.action}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: '#005EB8', borderRadius: '12px', padding: '36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ flex: '0 0 100px' }}>
            <img src={mentalHealthImage} alt="Mental health" style={{ width: '100px', height: '100px', objectFit: 'contain', display: 'block' }} />
          </div>
          <div style={{ flex: 1, minWidth: '200px' }}>
            <div style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '6px' }}>Talk to your GP about your mental health</div>
            <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.8)' }}>Book a confidential appointment today — it's the first step to feeling better</div>
          </div>
          <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
            <button onClick={() => navigate('/register')} style={{ padding: '12px 28px', background: '#007f3b', color: '#fff', border: 'none', borderRadius: '6px', fontSize: '15px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit' }}>
              Book appointment
            </button>
            <button onClick={() => navigate('/')} style={{ padding: '12px 28px', background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.6)', borderRadius: '6px', fontSize: '15px', fontWeight: '500', cursor: 'pointer', fontFamily: 'inherit' }}>
              Back to home
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}