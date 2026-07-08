const sendBookingConfirmation = async ({ patientEmail, patientName, doctorName, date, time, type }) => {
  try {
    if (!process.env.RESEND_API_KEY) {
      console.log('No RESEND_API_KEY — skipping booking email')
      return
    }
    const { Resend } = require('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'NHS Booking <onboarding@resend.dev>',
      to: patientEmail,
      subject: `Appointment Confirmed — ${date} at ${time}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:500px;margin:0 auto;">
          <div style="background:#005EB8;padding:20px 24px;">
            <span style="background:#fff;color:#005EB8;font-size:13px;font-weight:700;padding:3px 8px;border-radius:4px;">NHS</span>
            <span style="color:#fff;font-size:15px;margin-left:10px;">GP Appointment Booking Service</span>
          </div>
          <div style="background:#f0f4f5;padding:24px;border:1px solid #d8dde0;">
            <h2 style="color:#212b32;">Appointment Confirmed ✓</h2>
            <p style="color:#4c6272;">Dear ${patientName}, your appointment has been booked.</p>
            <table style="width:100%;font-size:14px;">
              <tr><td style="color:#4c6272;padding:6px 0;">Doctor</td><td style="font-weight:500;">${doctorName}</td></tr>
              <tr><td style="color:#4c6272;padding:6px 0;">Date</td><td style="font-weight:500;">${date}</td></tr>
              <tr><td style="color:#4c6272;padding:6px 0;">Time</td><td style="font-weight:500;">${time}</td></tr>
              <tr><td style="color:#4c6272;padding:6px 0;">Type</td><td style="font-weight:500;">${type}</td></tr>
            </table>
          </div>
        </div>
      `
    })
    console.log('✅ Booking confirmation sent to', patientEmail)
  } catch (error) {
    console.error('❌ Booking email failed:', error.message)
  }
}

const sendPasswordResetEmail = async ({ toEmail, toName, resetUrl }) => {
  try {
    if (!process.env.RESEND_API_KEY) {
      // In development — just log the reset URL to terminal
      console.log('====================================')
      console.log('🔑 PASSWORD RESET LINK (dev mode):')
      console.log(resetUrl)
      console.log('====================================')
      return
    }
    const { Resend } = require('resend')
    const resend = new Resend(process.env.RESEND_API_KEY)
    await resend.emails.send({
      from: 'NHS Booking <onboarding@resend.dev>',
      to: toEmail,
      subject: 'Reset your NHS password',
      html: `
        <div style="font-family:Arial,sans-serif;max-width:500px;margin:0 auto;">
          <div style="background:#005EB8;padding:20px 24px;">
            <span style="background:#fff;color:#005EB8;font-size:13px;font-weight:700;padding:3px 8px;border-radius:4px;">NHS</span>
            <span style="color:#fff;font-size:15px;margin-left:10px;">GP Appointment Booking Service</span>
          </div>
          <div style="background:#f0f4f5;padding:24px;border:1px solid #d8dde0;">
            <h2 style="color:#212b32;">Reset your password</h2>
            <p style="color:#4c6272;">Hi ${toName},</p>
            <p style="color:#4c6272;">We received a request to reset your password. Click the button below to set a new one.</p>
            <div style="text-align:center;margin:24px 0;">
              <a href="${resetUrl}"
                style="background:#005EB8;color:#fff;padding:12px 28px;border-radius:4px;font-size:15px;font-weight:500;text-decoration:none;display:inline-block;">
                Reset password
              </a>
            </div>
            <p style="color:#4c6272;font-size:13px;">This link expires in <strong>1 hour</strong>.</p>
            <p style="color:#4c6272;font-size:13px;">If you didn't request this, you can safely ignore this email.</p>
            <div style="background:#fff8e6;border-left:4px solid #ffb81c;padding:10px 14px;border-radius:0 4px 4px 0;margin-top:16px;">
              <p style="color:#6a4c00;font-size:13px;margin:0;">
                Or copy this link: <a href="${resetUrl}" style="color:#005EB8;">${resetUrl}</a>
              </p>
            </div>
          </div>
        </div>
      `
    })
    console.log('✅ Password reset email sent to', toEmail)
  } catch (error) {
    console.error('❌ Reset email failed:', error.message)
  }
}

module.exports = { sendBookingConfirmation, sendPasswordResetEmail }