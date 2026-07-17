import { useNavigate } from 'react-router-dom'
import seeGpImage from '../assets/SeeGp.jpg'

export default function WhenToSeeGP() {
    const navigate = useNavigate()

    const situations = [
        {
            urgency: 'Call 999', color: '#d5281b', bg: '#FAECE7',
            icon: 'ti-urgent',
            title: 'Life-threatening emergencies',
            desc: 'Call 999 immediately — do not drive yourself to hospital',
            items: [
                'Chest pain or pressure — possible heart attack',
                'Difficulty breathing or shortness of breath',
                'Signs of stroke — face drooping, arm weakness, speech difficulty',
                'Severe allergic reaction (anaphylaxis)',
                'Loss of consciousness or unresponsive',
                'Severe bleeding that won\'t stop',
                'Suspected overdose or poisoning',
                'Severe head injury after accident',
            ]
        },
        {
            urgency: 'Call NHS 111', color: '#ffb81c', bg: '#fff8e6',
            icon: 'ti-phone',
            title: 'Urgent but not life-threatening',
            desc: 'Contact NHS 111 online or by phone — available 24/7',
            items: [
                'High fever (above 39°C) that won\'t come down',
                'Severe earache or toothache',
                'Suspected broken bone',
                'Mental health crisis or suicidal thoughts',
                'Urinary tract infection with severe symptoms',
                'Sudden rash with fever',
                'Vomiting blood or blood in urine',
                'Eye injury or sudden vision changes',
            ]
        },
        {
            urgency: 'See your GP', color: '#005EB8', bg: '#E6F1FB',
            icon: 'ti-calendar',
            title: 'Book a GP appointment',
            desc: 'Book online through this service or call your surgery',
            items: [
                'Persistent cough lasting more than 3 weeks',
                'Unexplained weight loss',
                'Recurring headaches or migraines',
                'Skin changes, new moles, or rashes',
                'Digestive problems lasting more than 2 weeks',
                'Anxiety, depression, or low mood',
                'Blood pressure check or health review',
                'Repeat prescription or medication review',
            ]
        },
        {
            urgency: 'Self-care at home', color: '#007f3b', bg: '#E1F5EE',
            icon: 'ti-home',
            title: 'Manage at home',
            desc: 'Rest, stay hydrated, and use over-the-counter remedies',
            items: [
                'Common cold or mild flu symptoms',
                'Minor cuts, scrapes, or bruises',
                'Mild headache or tension headache',
                'Mild sore throat',
                'Mild stomach ache or indigestion',
                'Insect bites or mild allergic reactions',
                'Mild back pain',
                'General tiredness or fatigue',
            ]
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
                <span style={{ fontSize: '14px', color: '#4c6272' }}>When to see a GP</span>
            </div>

            {/* Hero — text left, image right */}
            <div style={{ background: '#005EB8', padding: '72px 6%', display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap', boxSizing: 'border-box' }}>

                {/* Left — text */}
                <div style={{ flex: 1, minWidth: '300px' }}>
                    <div style={{ fontSize: '13px', fontWeight: '700', color: 'rgba(255,255,255,0.7)', letterSpacing: '1.5px', marginBottom: '14px' }}>HEALTH INFO</div>
                    <h1 style={{ fontSize: '44px', fontWeight: '700', color: '#fff', lineHeight: '1.25', marginBottom: '20px' }}>
                        When should you see a GP?
                    </h1>
                    <p style={{ fontSize: '18px', color: 'rgba(255,255,255,0.88)', lineHeight: '1.75', marginBottom: '28px' }}>
                        Knowing which service to use can save valuable time for you and the NHS. Use this guide to decide the right course of action for your situation.
                    </p>

                    {/* Quick guide badges */}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '28px' }}>
                        {[
                            { icon: 'ti-urgent', color: '#d5281b', bg: 'rgba(213,40,27,0.2)', text: '999 — Life-threatening' },
                            { icon: 'ti-phone', color: '#ffb81c', bg: 'rgba(255,184,28,0.2)', text: '111 — Urgent advice' },
                            { icon: 'ti-calendar', color: '#7dd3a8', bg: 'rgba(125,211,168,0.2)', text: 'GP — Routine care' },
                            { icon: 'ti-home', color: '#fff', bg: 'rgba(255,255,255,0.15)', text: 'Home — Self-care' },
                        ].map(item => (
                            <div key={item.text} style={{ background: item.bg, borderRadius: '8px', padding: '10px 14px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                                <i className={`ti ${item.icon}`} style={{ color: item.color, fontSize: '18px', flexShrink: 0 }} aria-hidden="true"></i>
                                <span style={{ fontSize: '13px', color: '#fff', fontWeight: '600' }}>{item.text}</span>
                            </div>
                        ))}
                    </div>

                    {/* Emergency warning */}
                    <div style={{ background: '#d5281b', borderRadius: '8px', padding: '14px 20px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                        <i className="ti ti-alert-triangle" style={{ color: '#fff', fontSize: '20px', flexShrink: 0 }} aria-hidden="true"></i>
                        <span style={{ color: '#fff', fontSize: '14px', fontWeight: '600' }}>In a life-threatening emergency, always call 999 first</span>
                    </div>
                </div>

                {/* Right — image */}
                <div style={{ flex: '0 0 440px', minWidth: '280px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <div style={{ position: 'relative', width: '100%', maxWidth: '440px' }}>
                        {/* Decorative circles */}
                        <div style={{ position: 'absolute', top: '-16px', right: '-16px', width: '400px', height: '400px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', zIndex: 0 }}></div>
                        <div style={{ position: 'absolute', top: '16px', right: '16px', width: '320px', height: '320px', borderRadius: '50%', background: 'rgba(255,255,255,0.06)', zIndex: 0 }}></div>
                        <img
                            src={seeGpImage}
                            alt="Doctor consulting with patient"
                            style={{ width: '100%', maxWidth: '440px', height: '380px', objectFit: 'cover', objectPosition: 'center', borderRadius: '16px', position: 'relative', zIndex: 1, boxShadow: '0 20px 60px rgba(0,0,0,0.3)' }}
                        />
                        {/* Badge on image */}
                        <div style={{ position: 'absolute', bottom: '20px', left: '20px', background: '#007f3b', borderRadius: '8px', padding: '10px 16px', zIndex: 2, boxShadow: '0 4px 16px rgba(0,0,0,0.2)' }}>
                            <div style={{ fontSize: '11px', color: 'rgba(255,255,255,0.8)', marginBottom: '2px' }}>NHS</div>
                            <div style={{ fontSize: '15px', fontWeight: '700', color: '#fff' }}>Primary Care Guide</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Situations grid */}
            <div style={{ padding: '56px 6%', boxSizing: 'border-box' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px', marginBottom: '40px' }}>
                    {situations.map(situation => (
                        <div key={situation.urgency} style={{ background: situation.bg, borderRadius: '12px', padding: '28px', border: `2px solid ${situation.color}` }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '14px', marginBottom: '16px' }}>
                                <div style={{ width: '52px', height: '52px', borderRadius: '50%', background: situation.color, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                                    <i className={`ti ${situation.icon}`} style={{ color: '#fff', fontSize: '24px' }} aria-hidden="true"></i>
                                </div>
                                <div>
                                    <div style={{ fontSize: '11px', fontWeight: '700', color: situation.color, letterSpacing: '1px', marginBottom: '2px' }}>{situation.urgency.toUpperCase()}</div>
                                    <div style={{ fontSize: '18px', fontWeight: '700', color: '#212b32' }}>{situation.title}</div>
                                </div>
                            </div>
                            <div style={{ background: situation.color, borderRadius: '6px', padding: '8px 14px', marginBottom: '16px' }}>
                                <span style={{ fontSize: '13px', fontWeight: '600', color: '#fff' }}>{situation.desc}</span>
                            </div>
                            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '8px' }}>
                                {situation.items.map(item => (
                                    <li key={item} style={{ fontSize: '14px', color: '#212b32', display: 'flex', alignItems: 'flex-start', gap: '8px', lineHeight: '1.5' }}>
                                        <i className="ti ti-circle-check" style={{ color: situation.color, fontSize: '16px', flexShrink: 0, marginTop: '2px' }} aria-hidden="true"></i>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Book CTA */}
               
                <div style={{ background: '#005EB8', borderRadius: '12px', padding: '36px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: '20px' }}>

                    {/* Image thumbnail */}
                    <div style={{ flex: '0 0 120px' }}>
                        <img
                            src={seeGpImage}
                            alt="GP consultation"
                            style={{ width: '120px', height: '90px', objectFit: 'cover', objectPosition: 'center', borderRadius: '8px', display: 'block' }}
                        />
                    </div>

                    <div style={{ flex: 1, minWidth: '200px' }}>
                        <div style={{ fontSize: '22px', fontWeight: '700', color: '#fff', marginBottom: '6px' }}>Ready to book your GP appointment?</div>
                        <div style={{ fontSize: '15px', color: 'rgba(255,255,255,0.8)' }}>Book online in minutes — no phone calls needed</div>
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