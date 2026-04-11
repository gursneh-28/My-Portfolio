import 'dotenv/config'
import Contact from '../models/Contact.js'
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
})

export const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' })
    }

    // Save to MongoDB
    const contact = await Contact.create({ name, email, subject, message })

    // Send email to you
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.EMAIL_USER,
      subject: `Portfolio: ${subject || 'New message'}`,
      html: `<h3>From: ${name}</h3><p>Email: ${email}</p><p>${message}</p>`,
    })

    // Send auto-reply to sender
    await transporter.sendMail({
      from: `"Gursneh Kaur" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: `Thanks for reaching out, ${name}!`,
      html: `<p>Thanks for your message! I'll get back to you soon.</p><p>- Gursneh</p>`,
    })

    res.status(201).json({ success: true })
  } catch (err) {
    console.error('Error:', err.message)
    res.status(500).json({ error: 'Server error' })
  }
}