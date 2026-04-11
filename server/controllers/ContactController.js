import 'dotenv/config'
import Contact from '../models/Contact.js'

export const submitContact = async (req, res) => {
  try {
    const { name, email, subject, message } = req.body

    if (!name || !email || !message) {
      return res.status(400).json({ error: 'All fields are required' })
    }

    const contact = await Contact.create({ name, email, subject, message })

    console.log('📩 New contact saved:', contact)
    
    res.status(201).json({
      success: true,
      message: 'Message received successfully!',
    })
  } catch (err) {
    console.error('❌ Contact error:', err)
    res.status(500).json({ error: 'Server error' })
  }
}