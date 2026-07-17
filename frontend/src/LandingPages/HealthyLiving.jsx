import { useNavigate } from 'react-router-dom'
import healthyLivingImage from '../assets/HealthyLiving.jpg'

export default function HealthyLiving() {
  const navigate = useNavigate()

  const pillars = [
    {
      icon: 'ti-apple', iconBg: '#E1F5EE', iconColor: '#007f3b',
      title: 'Healthy eating',
      desc: 'A balanced diet provides the nutrients your body needs to function well, maintain a healthy weight, and reduce the risk of chronic disease.',
      tips: [
        'Eat at least 5 portions of fruit and vegetables a day',
        'Base meals on higher-fibre starchy foods like potatoes, bread, rice or pasta',
        'Have some dairy or dairy alternatives',
        'Eat some beans, pulses, fish, eggs, meat and other protein',
        'Choose unsaturated oils and spreads in small amounts',
        'Drink 6–8 cups of fluid per day',
        'Limit foods high in salt, sugar and saturated fat',
      ]
    },
    {
      icon: 'ti-run', iconBg: '#E6F1FB', iconColor: '#005EB8',
      title: 'Physical activity',
      desc: 'Regular exercise is one of the most important things you can do for your health. It reduces the risk of heart disease, diabetes, cancer and mental health problems.',
      tips: [
        'Aim for at least 150 minutes of moderate activity per week',
        'Or 75 minutes of vigorous activity per week',
        'Do strengthening exercises on at least 2 days a week',
        'Reduce time spent sitting or lying down',
        'Break up long periods of inactivity with movement',
        'Walking, cycling and swimming all count',
        'Even short bursts of activity are beneficial',
      ]
    },
    {
      icon: 'ti-moon', iconBg: '#EEEDFE', iconColor: '#534AB7',
      title: 'Sleep & rest',
      desc: 'Quality sleep is essential for physical health, mental wellbeing, and cognitive function. Most adults need 7–9 hours of sleep per night.',
      tips: [
        'Keep a consistent sleep and wake time, even at weekends',
        'Create a relaxing bedtime routine',
        'Keep your bedroom cool, dark and quiet',
        'Avoid screens at least 1 hour before bed',
        'Limit caffeine after 2pm',
        'Avoid large meals close to bedtime',
        'Get up if you can\'t sleep — return when tired',
      ]
    },
    {
      icon: 'ti-wine-off', iconBg: '#FAECE7', iconColor: '#712B13',
      title: 'Reducing alcohol & smoking',
      desc: 'Alcohol and smoking are leading causes of preventable illness and death in the UK. Reducing or stopping both has immediate and long-term health benefits.',
      tips: [
        'Keep alcohol within the UK low-risk guidelines (14 units per week)',
        'Have at least 2-3 alcohol-free days per week',
        'Never drink on an empty stomach',
        'Quitting smoking is the single best thing you can do for your health',
        'NHS Stop Smoking services are free and effective',
        'Nicotine replacement therapy is available on prescription',
        'Avoid vaping as a long-term alternative',
      ]
    },
    {
      icon: 'ti-peace', iconBg: '#FAEEDA', iconColor: '#633806',
      title: 'Stress management',
      desc: 'Chronic stress affects physical and mental health. Learning to manage stress effectively is a key part of a healthy lifestyle.',
      tips: [
        'Identify your stress triggers and work to reduce them',
        'Practice deep breathing, yoga or meditation',
        'Exercise regularly — it\'s a natural stress reliever',
        'Connect with friends, family and community',
        'Set realistic goals and learn to say no',
        'Take regular breaks from work and screens',
        'Talk to your GP if stress feels unmanageable',
      ]
    },
    {
      icon: 'ti-calendar-check', iconBg: '#E1F5EE', iconColor: '#085041',
      title: 'Regular health checks',
      desc: 'Preventive healthcare through regular check-ups and screenings can detect health problems early when they are most treatable.',
      tips: [
        'Book an annual NHS Health Check if you are 40–74',
        'Keep up with cervical screening (smear tests)',
        'Attend bowel cancer screening when invited',
        'Get regular blood pressure and cholesterol checks',
        'Check your skin regularly for changes in moles',
        'Attend dental and eye check-ups regularly',
        'Keep your vaccinations up to date',
      ]
    },
  ]

  const quickStats = [
    { num: '150', unit: 'mins', label: 'Recommended exercise per week' },
    { num: '5',   unit: 'a day', label: 'Fruit & veg portions recommended' },
    { num: '7-9', unit: 'hours', label: 'Sleep needed per night' },
    { num: '14',  unit: 'units', label: 'Max alcohol per week (UK guideline)' },
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
        <span style={{ fontSize: '14px', color: '#4c6272' }}>Healthy living</span>
      </div>

      {/* ── Hero — text left, image right ── */}
      <div style={{ background: '#007f3b', padding: '72px 6%', display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap', boxSizing: 'border-box' }}>

        {/* Left — text */}
        <div style={{ flex: 1, minWidth: '300px' }}>
          <div style={{ fontSize: '13px', fontWeight: '700', color: 'rgba(255,255,255,0.7)', letterSpacing: '1.5px', marginBottom: '14px' }}>HEALTHY LIVING</div>
          <h1 style={{ fontSize: '44px', fontWeight: '700', color: '#fff', lineHeight: '1.25', marginBottom: '20px' }}>
            Simple steps to a healthier life
          </h1>
          <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.88)', lineHeight: '1.75', marginBottom: '32px' }}>
            Small, consistent changes to your lifestyle can make a huge difference to your long-term health. Your NHS GP can support you with personalised healthy living advice at any appointment.
          </p>

          {/* Key pillars badges */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
            {[
              { icon: 'ti-apple',     text: 'Eat well' },
              { icon: 'ti-run',       text: 'Stay active' },
              { icon: 'ti-moon',      text: 'Sleep well' },
              { icon: 'ti-wine-off',  text: 'Reduce alcohol' },
              { icon: 'ti-peace',     text: 'Manage stress' },
              { icon: 'ti-heart',     text: 'Health checks' },
            ].map(item => (
              <div key={item.text} style={{ background: 'rgba(255,255,255,0.15)', borderRadius: '8px', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <i className={`ti ${item.icon}`} style={{ color: '#fff', fontSize: '18px', flexShrink: 0 }} aria-hidden="true"></i>
                <span style={{ fontSize: '13px', color: '#fff', fontWeight: '600' }}>{item.text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Right — image */}
        <div style={{ flex: '0 0 420px', minWidth: '260px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ position: 'relative', width: '100%', maxWidth: '420px' }}>
            <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(255,255,255,0.08)', zIndex: 0 }}></div>
            <img
              src={healthyLivingImage}
              alt="Healthy living — NHS guidance"
              style={{ width: '100%', maxWidth: '420px', height: '360px', objectFit: 'cover', objectPosition: 'center', borderRadius: '16px', position: 'relative', zIndex: 1, boxShadow: '0 20px 60px rgba(0,0,0,0.25)' }}
            />
            {/* Badge */}
            <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: '#005EB8', borderRadius: '8px', padding: '10px 16px', zIndex: 2 }}>
              <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', marginBottom: '2px' }}>NHS GUIDANCE</div>
              <div style={{ fontSize: '14px', fontWeight: '700', color: '#fff' }}>Evidence-based advice</div>
            </div>
          </div>
        </div>
      </div>

      {/* ── Stats strip ── */}
      <div style={{ background: '#003087', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', boxSizing: 'border-box' }}>
        {quickStats.map((stat, i) => (
          <div key={stat.label} style={{ padding: '32px 20px', textAlign: 'center', borderRight: i < 3 ? '0.5px solid rgba(255,255,255,0.15)' : 'none' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'center', gap: '4px', marginBottom: '6px' }}>
              <span style={{ fontSize: '36px', fontWeight: '700', color: '#fff' }}>{stat.num}</span>
              <span style={{ fontSize: '16px', color: '#7dd3a8', fontWeight: '600' }}>{stat.unit}</span>
            </div>
            <div style={{ fontSize: '13px', color: 'rgba(255,255,255,0.7)' }}>{stat.label}</div>
          </div>
        ))}
      </div>

      {/* ── 6 Pillars of Healthy Living ── */}
      <div style={{ padding: '56px 6%', boxSizing: 'border-box' }}>
        <div style={{ fontSize: '13px', fontWeight: '700', color: '#007f3b', letterSpacing: '1px', marginBottom: '10px' }}>THE 6 PILLARS</div>
        <h2 style={{ fontSize: '28px', fontWeight: '700', color: '#212b32', marginBottom: '12px' }}>Foundations of a healthy lifestyle</h2>
        <p style={{ fontSize: '16px', color: '#4c6272', marginBottom: '40px', lineHeight: '1.7' }}>
          NHS guidance recommends focusing on these six key areas to improve and maintain your health and wellbeing.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px', marginBottom: '48px' }}>
          {pillars.map(pillar => (
            <div key={pillar.title} style={{ background: '#fff', borderRadius: '12px', padding: '28px', border: '0.5px solid #d8dde0' }}>
              <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: pillar.iconBg, color: pillar.iconColor, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '24px', marginBottom: '16px' }}>
                <i className={`ti ${pillar.icon}`} aria-hidden="true"></i>
              </div>
              <div style={{ fontSize: '18px', fontWeight: '700', color: '#212b32', marginBottom: '8px' }}>{pillar.title}</div>
              <div style={{ fontSize: '14px', color: '#4c6272', lineHeight: '1.7', marginBottom: '16px' }}>{pillar.desc}</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                {pillar.tips.map(tip => (
                  <div key={tip} style={{ fontSize: '13px', color: '#4c6272', display: 'flex', alignItems: 'flex-start', gap: '8px', lineHeight: '1.5' }}>
                    <i className="ti ti-circle-check" style={{ color: pillar.iconColor, fontSize: '15px', flexShrink: 0, marginTop: '2px' }} aria-hidden="true"></i>
                    {tip}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* ── Image + GP advice panel ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px', marginBottom: '32px' }}>

          {/* Image panel */}
          <div style={{ borderRadius: '16px', overflow: 'hidden', position: 'relative', minHeight: '300px' }}>
            <img
              src={healthyLivingImage}
              alt="Healthy living"
              style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center', display: 'block', minHeight: '300px' }}
            />
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(0,127,59,0.9) 0%, transparent 50%)' }}></div>
            <div style={{ position: 'absolute', bottom: '24px', left: '24px', right: '24px' }}>
              <div style={{ fontSize: '20px', fontWeight: '700', color: '#fff', marginBottom: '6px' }}>Your GP can help</div>
              <div style={{ fontSize: '14px', color: 'rgba(255,255,255,0.85)', lineHeight: '1.6' }}>
                Ask your GP for personalised healthy living advice at your next appointment.
              </div>
            </div>
          </div>

          {/* NHS Health Check panel */}
          <div style={{ background: '#007f3b', borderRadius: '16px', padding: '36px' }}>
            <div style={{ fontSize: '13px', fontWeight: '700', color: 'rgba(255,255,255,0.7)', letterSpacing: '1px', marginBottom: '12px' }}>FREE NHS SERVICE</div>
            <div style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '12px' }}>NHS Health Check</div>
            <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.85)', lineHeight: '1.7', marginBottom: '24px' }}>
              If you are between 40 and 74 and don't have a pre-existing condition, you are eligible for a free NHS Health Check every 5 years. It checks your risk of heart disease, stroke, kidney disease and type 2 diabetes.
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '24px' }}>
              {[
                'Blood pressure measurement',
                'Cholesterol blood test',
                'BMI and waist measurement',
                'Lifestyle advice and support',
                'Diabetes risk assessment',
              ].map(item => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <i className="ti ti-circle-check" style={{ color: '#7dd3a8', fontSize: '16px', flexShrink: 0 }} aria-hidden="true"></i>
                  <span style={{ fontSize: '14px', color: 'rgba(255,255,255,0.9)' }}>{item}</span>
                </div>
              ))}
            </div>
            <button onClick={() => navigate('/register')} style={{ width: '100%', padding: '13px', background: '#fff', color: '#007f3b', border: 'none', borderRadius: '8px', fontSize: '15px', fontWeight: '700', cursor: 'pointer', fontFamily: 'inherit' }}>
              Book a health check
            </button>
          </div>
        </div>

        {/* CTA */}
        <div style={{ background: '#005EB8', borderRadius: '12px', padding: '36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>
          <div style={{ flex: '0 0 100px' }}>
            <img src={healthyLivingImage} alt="Healthy living" style={{ width: '100px', height: '80px', objectFit: 'cover', borderRadius: '8px', display: 'block' }} />
          </div>
          <div style={{ flex: 1, minWidth: '200px' }}>
            <div style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '6px' }}>Ready to take the first step?</div>
            <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.8)' }}>Book a healthy living review with your GP today</div>
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