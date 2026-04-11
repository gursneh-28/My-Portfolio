import Contact from '../models/Contact.js'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
  tls: {
    rejectUnauthorized: false,
  },
})

export const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body

    if (!name || !email || !message)
      return res.status(400).json({ error: 'All fields are required' })

    // Save to MongoDB
    await Contact.create({ name, email, subject, message })

    // Notify you
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`,
      replyTo: email,
      to: process.env.EMAIL_USER,
      subject: `📬 New message: ${subject || 'No subject'}`,
      html: `
        <div style="font-family:sans-serif;max-width:500px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:12px;">
          <h2 style="color:#7C3AED;margin-bottom:16px;">New Portfolio Message</h2>
          <table style="width:100%;border-collapse:collapse;font-size:14px;">
            <tr style="border-bottom:1px solid #f3f4f6;">
              <td style="padding:10px 8px;color:#6b7280;width:80px;">Name</td>
              <td style="padding:10px 8px;font-weight:600;color:#1e1b4b;">${name}</td>
            </tr>
            <tr style="border-bottom:1px solid #f3f4f6;">
              <td style="padding:10px 8px;color:#6b7280;">Email</td>
              <td style="padding:10px 8px;color:#1e1b4b;">${email}</td>
            </tr>
            <tr style="border-bottom:1px solid #f3f4f6;">
              <td style="padding:10px 8px;color:#6b7280;">Subject</td>
              <td style="padding:10px 8px;color:#1e1b4b;">${subject || '—'}</td>
            </tr>
          </table>
          <div style="margin-top:16px;padding:16px;background:#f9fafb;border-radius:8px;font-size:14px;color:#374151;line-height:1.6;">
            <strong>Message:</strong><br/><br/>${message}
          </div>
          <p style="margin-top:16px;font-size:12px;color:#9ca3af;">Sent from your portfolio contact form</p>
        </div>
      `,
    })

    // Confirmation to sender
    await transporter.sendMail({
      from: `"Gursneh Kaur" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Got your message, ${name}! 👋`,
      html: `
        <div style="font-family:sans-serif;max-width:500px;margin:0 auto;padding:24px;border:1px solid #e5e7eb;border-radius:12px;">
          <h2 style="color:#7C3AED;">Hey ${name}! 👋</h2>
          <p style="color:#555;line-height:1.7;font-size:14px;">
            Thanks for reaching out! I've received your message and will get back to you as soon as possible.
          </p>
          <div style="margin:20px 0;padding:16px;background:#f5f3ff;border-left:3px solid #7C3AED;border-radius:4px;font-size:13px;color:#6b7280;">
            <strong>Your message:</strong><br/><br/>${message}
          </div>
          <p style="color:#555;line-height:1.7;font-size:14px;">
            In the meantime, feel free to check out my work on
            <a href="https://github.com/gursneh-28" style="color:#7C3AED;">GitHub</a> or connect on
            <a href="https://linkedin.com/in/gursneh-kaur" style="color:#7C3AED;">LinkedIn</a>.
          </p>
          <p style="color:#9ca3af;font-size:12px;margin-top:24px;">— Gursneh Kaur</p>
        </div>
      `,
    })

    res.status(201).json({ success: true })

  } catch (err) {
    console.error('❌ Contact error:', err)
    res.status(500).json({ error: 'Server error' })
  }
}