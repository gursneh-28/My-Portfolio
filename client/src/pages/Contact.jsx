import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Send, Mail, MapPin, Loader } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import { personalInfo } from '../data/portfolioData'
import { fadeUp, stagger } from '../hooks/useAnimation'
import './Contact.css'

const LinkedInIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
  </svg>
)

const GithubIcon = () => (
  <svg width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)

const contactLinks = [
  {
    label: 'Email',
    value: personalInfo.email,
    href: `mailto:${personalInfo.email}`,
    icon: <Mail size={16} color="#7C3AED" />,
    color: 'lavender',
  },
  {
    label: 'LinkedIn',
    value: 'gursneh-kaur',
    href: personalInfo.linkedin,
    icon: <LinkedInIcon />,
    color: 'sky',
  },
  {
    label: 'GitHub',
    value: 'gursneh-28',
    href: personalInfo.github,
    icon: <GithubIcon />,
    color: 'blush',
  },
  {
    label: 'Location',
    value: personalInfo.location,
    href: null,
    icon: <MapPin size={16} color="#10b981" />,
    color: 'mint',
  },
]

// API URL - change this to your production URL when deploying
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' })
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)
  const [error, setError] = useState('')

  const handleChange = (e) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }))
    // Clear error when user starts typing again
    if (error) setError('')
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSending(true)
    setError('')

    try {
      const response = await fetch(`${API_URL}/api/contact`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(form),
      })

      const data = await response.json()

      if (response.ok) {
        setSent(true)
        setForm({ name: '', email: '', subject: '', message: '' })
        // Reset success message after 5 seconds
        setTimeout(() => setSent(false), 5000)
      } else {
        setError(data.message || 'Something went wrong. Please try again.')
      }
    } catch (err) {
      console.error('Error sending message:', err)
      setError('Network error. Please check your connection and try again.')
    } finally {
      setSending(false)
    }
  }

  return (
    <PageTransition>
      
      <div className="contact">
        <div className="contact-inner">
          {/* Header */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="contact-header"
          >
            <motion.div variants={fadeUp}>
              <span className="section-tag">Contact</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="section-title">
              Let's <span>connect</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="contact-description">
              Whether it's a project, an opportunity, or just a hello —
              my inbox is always open.
            </motion.p>
          </motion.div>

          {/* Grid */}
          <div className="contact-grid">
            {/* Left */}
            <motion.div
              className="contact-left"
              variants={stagger}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true }}
            >
              <motion.p variants={fadeUp}>
                I'm currently looking for internship and full-time opportunities.
                If you have a role that fits my profile or just want to chat about
                tech, AI, or collaboration — reach out!
              </motion.p>

              <motion.div variants={fadeUp} className="contact-links">
                {contactLinks.map(({ label, value, href, icon, color }) =>
                  href ? (
                    <motion.a
                      key={label}
                      href={href}
                      target={href.startsWith('mailto') ? '_self' : '_blank'}
                      rel="noopener noreferrer"
                      className="contact-link-item"
                      whileHover={{ x: 5 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className={`contact-link-icon ${color}`}>{icon}</div>
                      <div>
                        <div className="contact-link-label">{label}</div>
                        <div className="contact-link-value">{value}</div>
                      </div>
                    </motion.a>
                  ) : (
                    <div key={label} className="contact-link-item">
                      <div className={`contact-link-icon ${color}`}>{icon}</div>
                      <div>
                        <div className="contact-link-label">{label}</div>
                        <div className="contact-link-value">{value}</div>
                      </div>
                    </div>
                  )
                )}
              </motion.div>

              <motion.div variants={fadeUp}>
                <span className="availability-badge">
                  <span className="availability-dot" />
                  Available for opportunities
                </span>
              </motion.div>
            </motion.div>

            {/* Right — Form */}
            <motion.div
              className="contact-form-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <AnimatePresence mode="wait">
                {sent ? (
                  <motion.div
                    key="success"
                    className="form-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                  >
                    <div className="form-success-icon">✓</div>
                    <div className="form-success-title">Message sent!</div>
                    <div className="form-success-sub">
                      Thanks for reaching out, {form.name.split(' ')[0] || 'there'}!<br />
                      I'll get back to you as soon as possible.
                    </div>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {error && (
                      <div className="form-error">
                        <span className="form-error-icon">⚠️</span>
                        {error}
                      </div>
                    )}
                    
                    <div className="form-row">
                      <div className="form-group">
                        <label className="form-label">Name</label>
                        <input
                          className="form-input"
                          type="text"
                          name="name"
                          placeholder="Your name"
                          value={form.name}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="form-group">
                        <label className="form-label">Email</label>
                        <input
                          className="form-input"
                          type="email"
                          name="email"
                          placeholder="your@email.com"
                          value={form.email}
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div className="form-group">
                      <label className="form-label">Subject</label>
                      <input
                        className="form-input"
                        type="text"
                        name="subject"
                        placeholder="What's this about?"
                        value={form.subject}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label className="form-label">Message</label>
                      <textarea
                        className="form-textarea"
                        name="message"
                        placeholder="Your message..."
                        value={form.message}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <motion.button
                      type="submit"
                      className="form-submit"
                      disabled={sending}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {sending ? (
                        <>
                          <motion.span
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          >
                            <Loader size={15} />
                          </motion.span>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send size={15} /> Send message
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        </div>
      </div>
    </PageTransition>
  )
}