import 'dotenv/config'
import Contact from '../models/Contact.js'
import { Resend } from 'resend'

const resend = new Resend(process.env.RESEND_API_KEY)

export const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' })
    }

    // ✅ Save to DB
    const contact = await Contact.create({ name, email, subject, message })

    console.log('📩 New contact saved:', contact)

    // ✅ Send email to YOU
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: process.env.EMAIL_USER,
      subject: `Portfolio: ${subject || 'New message'}`,
      html: `
        <h3>New Contact Message</h3>
        <p><b>Name:</b> ${name}</p>
        <p><b>Email:</b> ${email}</p>
        <p>${message}</p>
      `,
    })

    // ✅ Auto reply to user
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: email,
      subject: `Thanks for reaching out, ${name}!`,
      html: `
        <p>Hi ${name},</p>
        <p>Thanks for your message! I'll get back to you soon.</p>
        <p>- Gursneh</p>
      `,
    })

    res.status(201).json({
      success: true,
      message: 'Message sent successfully!',
    })
  } catch (err) {
    console.error('❌ Contact error:', err)
    res.status(500).json({ error: 'Server error' })
  }
}