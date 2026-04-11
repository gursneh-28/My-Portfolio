import { motion, AnimatePresence } from 'framer-motion'
import { useState } from 'react'
import { MapPin, GraduationCap, Calendar, Star } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import { personalInfo, achievements } from '../data/portfolioData'
import { fadeUp, stagger } from '../hooks/useAnimation'
import profileImg from '../assets/image.png'
import './About.css'

const infoCards = [
  { label: 'Location', value: personalInfo.location, icon: '📍', color: 'lavender' },
  { label: 'University', value: personalInfo.university, icon: '🎓', color: 'blush' },
  { label: 'Degree', value: 'B.Tech — CSE', icon: '📖', color: 'mint' },
  { label: 'CGPA', value: personalInfo.cgpa, icon: '⭐', color: 'sky' },
  { label: 'Batch', value: personalInfo.batch, icon: '📅', color: 'lavender' },
]

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function About() {
  const [avatarOpen, setAvatarOpen] = useState(false)

  return (
    <PageTransition>
      
      <div className="about">
        <div className="about-inner">
          {/* Header */}
          <motion.div 
            variants={stagger} 
            initial="hidden" 
            animate="show"
            className="about-header"
          >
            <motion.div variants={fadeUp}>
              <span className="section-tag">About me</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="section-title">
              Passionate about building
              <br />
              <span>meaningful things</span>
            </motion.h1>
          </motion.div>

          {/* About grid */}
          <motion.div
            className="about-grid"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            <motion.div variants={fadeUp} className="about-left">
              <div className="about-photo-col">
                <div 
                  className="about-avatar" 
                  onClick={() => setAvatarOpen(true)}
                >
                  <div className="avatar-svg" />
                  <img 
                    src={profileImg} 
                    alt="Gursneh Kaur" 
                    className="avatar-img" 
                  />
                  <div className="avatar-ring" />
                </div>
            
                <div className="avatar-name-block">
                  <div className="avatar-name">Gursneh Kaur</div>
                  <div className="avatar-status">
                    <span className="avatar-status-dot" />
                    B.Tech CSE · 2023–27
                  </div>
                </div>
              </div>
            
              <div className="about-text">
                <p>
                  I'm Gursneh Kaur, a Computer Science undergraduate at JK Lakshmipat University,
                  Jaipur, with a strong foundation in full-stack development and a growing passion
                  for AI and computer vision.
                </p>
                <p>
                  I've had the privilege of being selected as a Visiting Student at IIT Gandhinagar
                  and participating in the AI Vicharana Shala at IIT Ropar — experiences that deepened
                  my interest in intelligent systems and research-driven engineering.
                </p>
                <p>
                  Whether I'm building real-time traffic analyzers with YOLO, crafting full-stack
                  platforms with the MERN stack, or exploring ML pipelines — I care deeply about
                  writing clean, purposeful code that solves real problems.
                </p>
              </div>
            </motion.div>
            
            <motion.div variants={fadeUp} className="about-info-cards">
              {infoCards.map(({ label, value, icon, color }) => (
                <motion.div
                  key={label}
                  className="info-card"
                  whileHover={{ x: 6 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`info-card-icon ${color}`}>{icon}</div>
                  <div>
                    <div className="info-card-label">{label}</div>
                    <div className="info-card-value">{value}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            className="achievements-section"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <span className="section-tag">Achievements</span>
              <h2 className="section-title">Highlights & <span>recognition</span></h2>
            </motion.div>

            <motion.div className="achievements-grid" variants={stagger}>
              {achievements.map((a) => (
                <motion.div
                  key={a.title}
                  className="achievement-card"
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`achievement-dot ${a.color}`} />
                  <div>
                    <div className="achievement-title">{a.title}</div>
                    <div className="achievement-desc">{a.desc}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Resume Download - Moved below achievements */}
          <motion.div
            className="resume-card"
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <div className="resume-title">Download my resume?</div>
              <div className="resume-subtitle">Available in PDF and Word format</div>
            </div>

            <div className="resume-actions">
              <motion.a
                href={`${API_URL}/api/cv/pdf`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-pdf"
              >
                PDF
              </motion.a>

              <motion.a
                href={`${API_URL}/api/cv/docx`}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="btn-doc"
              >
                Word (.docx)
              </motion.a>
            </div>
          </motion.div>
        </div>
      </div>

      <AnimatePresence>
        {avatarOpen && (
          <motion.div
            className="avatar-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setAvatarOpen(false)}
          >
            <motion.div
              className="avatar-modal-img"
              initial={{ scale: 0.7, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.7, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              onClick={e => e.stopPropagation()}
            >
              <img src={profileImg} alt="Gursneh Kaur" />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  )
}