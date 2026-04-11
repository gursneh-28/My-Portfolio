import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import { experience } from '../data/portfolioData'
import { fadeUp, stagger } from '../hooks/useAnimation'
import './Experience.css'

const slideIn = {
  hidden: { opacity: 0, x: -30 },
  show: { opacity: 1, x: 0, transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] } },
}

const stats = [
  { number: '3', label: 'Internships' },
  { number: '2', label: 'Months avg. tenure' },
  { number: '3+', label: 'Tech stacks used' },
  { number: '2025', label: 'Latest role' },
]

export default function Experience() {

  return (
    <PageTransition>

      
      <div className="experience">
        <div className="experience-inner">
          {/* Header */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="experience-header"
          >
            <motion.div variants={fadeUp}>
              <span className="section-tag">Experience</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="section-title">
              Where I've <span>worked</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="exp-description">
              A timeline of internships where I've built real products,
              solved real problems, and grown as an engineer.
            </motion.p>
          </motion.div>

          {/* Stats */}
          <motion.div
            className="exp-stats"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
          >
            {stats.map(({ number, label }) => (
              <motion.div
                key={label}
                className="exp-stat"
                variants={fadeUp}
                whileHover={{ y: -4 }}
              >
                <div className="exp-stat-number">{number}</div>
                <div className="exp-stat-label">{label}</div>
              </motion.div>
            ))}
          </motion.div>

          {/* Timeline */}
          <motion.div
            className="timeline"
            variants={stagger}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.1 }}
          >
            {experience.map((exp, i) => (
              <motion.div
                key={i}
                className="timeline-item"
                variants={slideIn}
              >
                <div className={`timeline-dot ${exp.color}`} />
                
                <motion.div
                  className="exp-card"
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className={`exp-card-accent ${exp.color}`} />
                  
                  <div className="exp-card-header">
                    <div>
                      <div className="exp-role">{exp.role}</div>
                      <div className="exp-company">{exp.company}</div>
                    </div>
                    <div className="exp-meta">
                      <span className="exp-duration">
                        <Calendar size={12} />
                        {exp.duration}
                      </span>
                      <span className={`exp-type-badge ${exp.color}`}>
                        {exp.type}
                      </span>
                    </div>
                  </div>

                  <ul className="exp-points">
                    {exp.points.map((point, j) => (
                      <motion.li
                        key={j}
                        className="exp-point"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: j * 0.1, duration: 0.4 }}
                        viewport={{ once: true }}
                      >
                        <div className={`exp-point-bullet ${exp.color}`} />
                        <span className="exp-point-text">{point}</span>
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}