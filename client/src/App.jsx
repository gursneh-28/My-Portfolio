import { BrowserRouter } from 'react-router-dom'
import Navbar from './components/Navbar'
import CursorTrail from './components/CursorTrail'
import Home from './pages/Home'
import About from './pages/About'
import EducationSkills from './pages/EducationSkills'  
import Projects from './pages/Project'
import Experience from './pages/Experience'
import Contact from './pages/Contact'
import Certificates from './pages/Certificates'

export default function App() {
  return (
    <BrowserRouter>
      <CursorTrail />
      <Navbar />
      <main className="single-page-layout" style={{ position: 'relative', overflowX: 'hidden' }}>
        <section id="home"><Home /></section>
        <section id="about"><About /></section>
        <section id="education-skills"><EducationSkills /></section>
        <section id="experience"><Experience /></section>
        <section id="projects"><Projects /></section>
        <section id="certificates"><Certificates /></section>
        <section id="contact"><Contact /></section>
      </main>
    </BrowserRouter>
  )
}