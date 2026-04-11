import { motion } from 'framer-motion'
import { MapPin, GraduationCap, Calendar, Star } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import { personalInfo, skills } from '../data/portfolioData'
import { fadeUp, stagger } from '../hooks/useAnimation'
import './EducationSkills.css'

const skillIcons = {
  'Languages': '{ }',
  'Web Development': '⚡',
  'Databases': '🗄',
  'ML / CV': '🤖',
  'Cloud & DevOps': '☁',
  'Tools': '🔧',
}

const courses = [
  'Data Structures & Algorithms',
  'Operating Systems',
  'Computer Networks',
  'DBMS',
  'Machine Learning',
  'Deep Learning',
]

export default function EducationSkills() {

  return (
    <PageTransition>
      
      <div className="education-skills">
        <div className="education-skills-inner">
          {/* Header */}
          <motion.div 
            variants={stagger} 
            initial="hidden" 
            animate="show"
            className="education-header"
          >
            <motion.div variants={fadeUp}>
              <span className="section-tag">Education & Skills</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="section-title">
              My Academic <span>Journey</span>
            </motion.h1>
          </motion.div>

          {/* Education */}
          <motion.div
            className="education-section"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <h2 className="subsection-title">Education</h2>
            </motion.div>

            <motion.div variants={fadeUp} className="edu-card">
              <div className="edu-card-header">
                <div className="edu-degree">B.Tech in Computer Science & Engineering</div>
                <span className="edu-badge">Current</span>
              </div>
              <div className="edu-school">JK Lakshmipat University, Jaipur</div>
              <div className="edu-meta">
                <span className="edu-meta-item">
                  <Calendar size={13} /> Aug 2023 – May 2027
                </span>
                <span className="edu-meta-item">
                  <Star size={13} /> CGPA: {personalInfo.cgpa}
                </span>
                <span className="edu-meta-item">
                  <MapPin size={13} /> Jaipur, Rajasthan
                </span>
              </div>
              <div className="edu-courses">
                <div className="edu-courses-label">Relevant Coursework</div>
                <div className="edu-courses-tags">
                  {courses.map(c => (
                    <span key={c} className="course-tag">{c}</span>
                  ))}
                </div>
              </div>
            </motion.div>

            <motion.div variants={fadeUp} className="edu-card">
              <div className="edu-card-header">
                <div className="edu-degree">Visiting Student — Computer Science & Engineering</div>
                <span className="edu-badge">Completed</span>
              </div>
              <div className="edu-school">Indian Institute of Technology Gandhinagar</div>
              <div className="edu-meta">
                <span className="edu-meta-item">
                  <Calendar size={13} /> Jan 2025 – May 2025
                </span>
                <span className="edu-meta-item">
                  <GraduationCap size={13} /> Semester 4
                </span>
                <span className="edu-meta-item">
                  <MapPin size={13} /> Gandhinagar, Gujarat
                </span>
              </div>
              <div className="edu-courses">
                <div className="edu-courses-label">Selected Courses</div>
                <div className="edu-courses-tags">
                  <span className="course-tag">Operating System</span>
                  <span className="course-tag">Design & Analysis of Algorithm</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Skills */}
          <motion.div
            className="skills-section"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.15 }}
            variants={stagger}
          >
            <motion.div variants={fadeUp}>
              <h2 className="subsection-title">Technical <span>Toolkit</span></h2>
            </motion.div>

            <motion.div className="skills-grid" variants={stagger}>
              {skills.map((s) => (
                <motion.div
                  key={s.category}
                  className="skill-card"
                  variants={fadeUp}
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="skill-card-header">
                    <div className={`skill-card-icon ${s.color}`}>
                      {skillIcons[s.category] ?? '✦'}
                    </div>
                    <span className="skill-card-title">{s.category}</span>
                  </div>
              
                  <div className="skill-tags">
                    {s.items.map(item => {
                      const prof = s.proficiency?.find(p => p.name === item || item.startsWith(p.name.split('/')[0]))
                      return (
                        <div key={item} className="skill-tag-wrapper">
                          <span className={`skill-tag ${s.color}`}>{item}</span>
                          {prof && <span className="skill-tooltip">{prof.level}%</span>}
                        </div>
                      )
                    })}
                  </div>
                  
                  {s.proficiency && (
                    <div className="skill-bars">
                      {s.proficiency.map((p) => (
                        <div key={p.name} className="skill-bar-row">
                          <div className="skill-bar-header">
                            <span className="skill-bar-name">{p.name}</span>
                            <span className="skill-bar-pct">{p.level}%</span>
                          </div>
                          <div className="skill-bar-track">
                            <motion.div
                              className={`skill-bar-fill ${s.color}`}
                              initial={{ scaleX: 0 }}
                              animate={{ scaleX: p.level / 100 }} 
                              transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}