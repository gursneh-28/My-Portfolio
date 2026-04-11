import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Navbar from './components/Navbar'
import CursorTrail from './components/CursorTrail'
import Home from './pages/Home'
import About from './pages/About'
import EducationSkills from './pages/EducationSkills'  
import Projects from './pages/Project'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import Certificates from './pages/Certificates'

function AnimatedRoutes() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/education-skills" element={<EducationSkills />} /> 
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/certificates" element={<Certificates />} />
      </Routes>
    </AnimatePresence>
  )
}

export default function App() {
  return (
    <BrowserRouter>
      <CursorTrail />
      <Navbar />
      <AnimatedRoutes />
    </BrowserRouter>
  )
}