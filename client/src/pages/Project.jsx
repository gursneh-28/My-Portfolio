import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ExternalLink } from 'lucide-react'
import PageTransition from '../components/PageTransition'
import { projects } from '../data/portfolioData'
import { fadeUp, stagger } from '../hooks/useAnimation'
import './Project.css'

const GithubIcon = () => (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"/>
  </svg>
)

const projectIcons = {
  'Green Light Traffic Analyzer':       '🚦',
  'Biometric Face Recognition System':  '👁',
  'Phishing Detection Chrome Extension':'🛡',
  'Event Vibes':                        '🎉',
  'MERN Todo App':                      '✅',
  'Crowdsourced Collaboration Platform':'🤝',
}

const allTags = ['All', ...new Set(projects.flatMap(p => p.tags))]

export default function Projects() {
  const [active, setActive] = useState('All')

  const filtered = active === 'All'
    ? projects
    : projects.filter(p => p.tags.includes(active))

  return (
    <PageTransition>
      
      <div className="projects">
        <div className="projects-inner">
          {/* Header */}
          <motion.div
            variants={stagger}
            initial="hidden"
            animate="show"
            className="projects-header"
          >
            <motion.div variants={fadeUp}>
              <span className="section-tag">Projects</span>
            </motion.div>
            <motion.h1 variants={fadeUp} className="section-title">
              Things I've <span>built</span>
            </motion.h1>
            <motion.p variants={fadeUp} className="projects-description">
              A collection of projects spanning computer vision, full-stack
              development, and machine learning.
            </motion.p>
          </motion.div>

          {/* Filter tabs */}
          <motion.div
            className="filter-tabs"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            {allTags.map(tag => (
              <motion.button
                key={tag}
                className={`filter-tab ${active === tag ? 'active' : ''}`}
                onClick={() => setActive(tag)}
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
              >
                {tag}
              </motion.button>
            ))}
          </motion.div>

          {/* Grid */}
          <motion.div
            className="projects-grid"
            variants={stagger}
            initial="hidden"
            animate="show"
          >
            <AnimatePresence mode="popLayout">
              {filtered.length === 0 ? (
                <div className="projects-empty">No projects match this filter.</div>
              ) : (
                filtered.map((project) => (
                  <motion.div
                    key={project.title}
                    className="project-card"
                    variants={fadeUp}
                    layout
                    initial="hidden"
                    animate="show"
                    exit="exit"
                    whileHover={{ y: -5 }}
                  >
                    <div className={`project-card-glow ${project.color}`} />

                    <div className="project-card-header">
                      <div className={`project-icon ${project.color}`}>
                        {projectIcons[project.title] ?? '✦'}
                      </div>
                      <div className="project-links">
                        {project.github && (
                          <motion.a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                            whileHover={{ scale: 1.12 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="GitHub"
                          >
                            <GithubIcon />
                          </motion.a>
                        )}
                        {project.live && (
                          <motion.a
                            href={project.live}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="project-link"
                            whileHover={{ scale: 1.12 }}
                            whileTap={{ scale: 0.95 }}
                            aria-label="Live demo"
                          >
                            <ExternalLink size={13} />
                          </motion.a>
                        )}
                      </div>
                    </div>

                    <div>
                      <div className="project-year">{project.year}</div>
                      <div className="project-title">{project.title}</div>
                    </div>

                    <p className="project-desc">{project.description}</p>

                    <div className="project-tags">
                      {project.tags.map(tag => (
                        <span key={tag} className={`project-tag ${project.color}`}>
                          {tag}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </PageTransition>
  )
}