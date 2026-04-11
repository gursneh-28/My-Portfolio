import { motion, AnimatePresence } from 'framer-motion'
// removed Link from react-router-dom
import { ArrowRight, Download } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import { personalInfo } from '../data/portfolioData'
import { useState, useRef, useEffect } from 'react'
import Typewriter from 'typewriter-effect'
import { fadeUp, stagger } from '../hooks/useAnimation'
import './Home.css'

const blobs = [
  { cls: 'blob-1', y: [0,-20,0], x: [0, 10,0], dur: 6 },
  { cls: 'blob-2', y: [0,-16,0], x: [0,-12,0], dur: 7 },
  { cls: 'blob-3', y: [0,-24,0], x: [0, 14,0], dur: 8 },
  { cls: 'blob-4', y: [0,-18,0], x: [0,-10,0], dur: 9 },
]

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000'

export default function Home() {
  const [dropdownOpen, setDropdownOpen] = useState(false)
  const dropdownRef = useRef(null)

  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDropdownOpen(false)
      }
    }
    document.addEventListener('mousedown', handler)
    return () => document.removeEventListener('mousedown', handler)
  }, [])

  const stats = [
    { number: '8.74', label: 'CGPA' },
    { number: '5+', label: 'Projects' },
    { number: '3', label: 'Internships' },
    { number: '2023-27', label: 'BTech' },
  ]

  return (
    <PageTransition>
      
      <div className="home">
        {/* Animated gradient background - Light mode only */}
        <div className="home-gradient-bg">
          <div className="gradient-orb orb-1" />
          <div className="gradient-orb orb-2" />
          <div className="gradient-orb orb-3" />
          <div className="gradient-orb orb-4" />
          <div className="gradient-overlay" />
        </div>

        {/* Animated blobs - Light mode only */}
        <div className="home-blobs">
          {blobs.map((b, i) => (
            <motion.div
              key={i}
              className={`blob ${b.cls}`}
              animate={{ y: b.y, x: b.x }}
              transition={{ duration: b.dur, repeat: Infinity, ease: 'easeInOut', delay: i * 0.4 }}
            />
          ))}
        </div>

        <motion.div
          className="home-content"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.h1 variants={fadeUp} className="home-name">
            {personalInfo.name}
          </motion.h1>

          <motion.div variants={fadeUp} className="home-title">
            <Typewriter
              options={{
                strings: [
                  'B.Tech CSE Undergrad @ 2027',
                  'Full Stack Developer',
                  'Building Real-World Solutions',
                  'Code. Build. Solve.'
                ],
                autoStart: true,
                loop: true,
                delay: 60,
                deleteSpeed: 35,
              }}
            />
          </motion.div>

          <motion.p variants={fadeUp} className="home-subtitle">
            {personalInfo.subtitle}
          </motion.p>

          <motion.div variants={fadeUp} className="home-stats">
            {stats.map(({ number, label }) => (
              <motion.div
                key={label}
                className="stat-card"
                whileHover={{ y: -4 }}
                transition={{ duration: 0.2 }}
              >
                <div className="stat-number">{number}</div>
                <div className="stat-label">{label}</div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div variants={fadeUp} className="home-ctas">
            <a href="#projects" onClick={(e) => { e.preventDefault(); document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}}>
              <motion.span
                className="btn-primary"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                View Projects <ArrowRight size={15} />
              </motion.span>
            </a>

            <a href="#contact" onClick={(e) => { e.preventDefault(); document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}}>
              <motion.span
                className="btn-secondary"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                Get in touch
              </motion.span>
            </a>

            <div className="btn-download-wrapper" ref={dropdownRef}>
              <motion.button
                className="btn-download"
                onClick={() => setDropdownOpen(prev => !prev)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                <Download size={15} /> Resume
              </motion.button>

              <AnimatePresence>
                {dropdownOpen && (
                  <motion.div
                    className="btn-download-menu"
                    initial={{ opacity: 0, y: -6, scale: 0.97 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -6, scale: 0.97 }}
                    transition={{ duration: 0.18, ease: 'easeOut' }}
                  >
                    <a href={`${API_URL}/api/cv/pdf`} target="_blank" rel="noopener noreferrer">
                      Download PDF
                    </a>
                    <div className="btn-download-menu-divider" />
                    <a href={`${API_URL}/api/cv/docx`} target="_blank" rel="noopener noreferrer">
                      Download Word
                    </a>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </PageTransition>
  )
}