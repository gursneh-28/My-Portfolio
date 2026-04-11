import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Moon, Sun } from 'lucide-react'
import './Navbar.css'

const links = [
  { path: '#home',             label: 'Home'         },
  { path: '#about',            label: 'About'        },
  { path: '#education-skills', label: 'Education'    },
  { path: '#experience',       label: 'Experience'   },
  { path: '#projects',         label: 'Projects'     },
  { path: '#certificates',     label: 'Certificates' },
  { path: '#contact',          label: 'Contact'      },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [dark, setDark]         = useState(false)
  const [activeHash, setActiveHash] = useState('#home')

  useEffect(() => {
    const saved = localStorage.getItem('theme')
    if (saved === 'dark') {
      setDark(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      
      let current = '#home'
      for (const link of links) {
        const id = link.path.substring(1)
        const el = document.getElementById(id)
        if (el) {
          const rect = el.getBoundingClientRect()
          if (rect.top <= window.innerHeight / 2) {
            current = link.path
          }
        }
      }
      setActiveHash(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const toggleDark = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  const handleLinkClick = (e, path) => {
    e.preventDefault()
    setMenuOpen(false)
    const id = path.substring(1)
    const el = document.getElementById(id)
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <>
      <motion.nav
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0,   opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="navbar-inner">
          <a
            href="#home" 
            className="navbar-logo"
            onClick={(e) => handleLinkClick(e, '#home')}
          >
            Gursneh<span>.</span>
          </a>

          <ul className="navbar-links">
            {links.map(({ path, label }) => {
              const isActive = activeHash === path
              return (
                <li key={path}>
                  <a
                    href={path}
                    onClick={(e) => handleLinkClick(e, path)}
                    className={`nav-link ${isActive ? 'active' : ''}`}
                  >
                    {label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-pill"
                        className="nav-pill"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </a>
                </li>
              )
            })}
          </ul>

          <div className="navbar-right">
            <motion.button
              className="theme-toggle"
              onClick={toggleDark}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Toggle dark mode"
            >
              <AnimatePresence mode="wait">
                {dark ? (
                  <motion.span key="sun"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0,   opacity: 1 }}
                    exit={{    rotate:  90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Sun size={17} />
                  </motion.span>
                ) : (
                  <motion.span key="moon"
                    initial={{ rotate: 90,  opacity: 0 }}
                    animate={{ rotate: 0,   opacity: 1 }}
                    exit={{    rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Moon size={17} />
                  </motion.span>
                )}
              </AnimatePresence>
            </motion.button>

            <button
              className="hamburger"
              onClick={() => setMenuOpen(p => !p)}
              aria-label="Toggle menu"
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="mobile-menu"
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <ul>
              {links.map(({ path, label }) => {
                const isActive = activeHash === path
                return (
                  <li key={path}>
                    <a
                      href={path}
                      onClick={(e) => handleLinkClick(e, path)}
                      className={`mobile-nav-link ${isActive ? 'active' : ''}`}
                    >
                      {label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}