import 'dotenv/config'
import Contact from '../models/Contact.js'
import nodemailer from 'nodemailer'

// ✅ FIXED transporter (no "service: gmail")
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false, // important
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

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' })
    }

    // ✅ Save to MongoDB
    const contact = await Contact.create({ name, email, subject, message })

    // ✅ Send email to YOU
    await transporter.sendMail({
      from: `"Portfolio Contact" <${process.env.EMAIL_USER}>`, // safer sender
      replyTo: email, // so you can reply directly
      to: process.env.EMAIL_USER,
      subject: `Portfolio: ${subject || 'New message'}`,
      html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p><b>Message:</b><br/>${message}</p>
      `,
    })

    // ✅ Auto-reply to user
    await transporter.sendMail({
      from: `"Gursneh Kaur" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thanks for reaching out, ${name}!`,
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for your message! I'll get back to you soon.</p>
        <br/>
        <p>- Gursneh</p>
      `,
    })

    res.status(201).json({ success: true })
  } catch (err) {
    console.error('❌ Contact error:', err)
    res.status(500).json({ error: 'Server error' })
  }
}
