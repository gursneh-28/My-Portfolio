import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink, Award } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import { certificates } from '../data/portfolioData'
import { fadeUp, stagger } from '../hooks/useAnimation'
import './Certificates.css'

const categories = ['All', ...new Set(certificates.map(c => c.category))]

const certStats = [
  { number: certificates.filter(c => c.category === 'Internship').length, label: 'Internships' },
  { number: certificates.filter(c => c.category === 'Course').length, label: 'Courses' },
  { number: certificates.filter(c => c.category === 'Hackathon').length, label: 'Hackathons' },
  { number: certificates.filter(c => c.category === 'Program').length, label: 'Programs' },
]

export default function Certificates() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? certificates
    : certificates.filter(c => c.category === active)

  return (
    <PageTransition>
      
      <div className="certificates">
        <div className="certificates-inner">
          {/* Header */}
          <motion.div variants={stagger} initial="hidden" animate="show" className="certificates-header">
            <motion.div variants={fadeUp}>
              <span className="section-tag">Certificates</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="section-title">
              Credentials & <span>achievements</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="cert-description">
              Internships, courses, hackathons and programs that have shaped
              my journey as an engineer.
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="cert-stats"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {certStats.map(({ number, label }) => (
              <motion.div
                key={label}
                className="cert-stat"
                variants={fadeUp}
                whileHover={{ y: -3 }}
              >
                <div className="cert-stat-number">{number}</div>
                <div className="cert-stat-label">{label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Filters */}
          <motion.div
            className="cert-filters"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.4 }}
          >
            {categories.map(cat => (
              <motion.button
                key={cat}
                className={`cert-filter-tab ${active === cat ? 'active' : ''}`}
                onClick={() => setActive(cat)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                {cat}
              </motion.button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div
            className="cert-grid"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((cert) => (
                <motion.div
                  key={cert.title}
                  className="cert-card"
                  variants={fadeUp}
                  layout
                  initial="hidden"
                  animate="show"
                  exit="exit"
                  whileHover={{ y: -4 }}
                >
                  <div className="cert-card-top">
                    <div className={`cert-icon ${cert.color}`}>{cert.icon}</div>
                    <span className={`cert-category-badge ${cert.color}`}>
                      {cert.category}
                    </span>
                  </div>

                  <div>
                    <div className="cert-title">{cert.title}</div>
                    <div className="cert-issuer">{cert.issuer}</div>
                  </div>

                  <div className="cert-card-footer">
                    <span className="cert-date">{cert.date}</span>
                    {cert.file ? (
                      <a
                        href={cert.file}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cert-verify-btn"
                      >
                        <ExternalLink size={11} /> View Certificate
                      </a>
                    ) : (
                      <span className="cert-verify-btn cert-verify-disabled">
                        <Award size={11} /> Verified
                      </span>
                    )}
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}