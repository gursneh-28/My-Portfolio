import { useEffect, useRef } from 'react'
import './CursorTrail.css'

const COLORS = [
  'rgba(196,181,253,0.9)',
  'rgba(251,207,232,0.9)',
  'rgba(167,243,208,0.9)',
  'rgba(186,230,253,0.9)',
  'rgba(124,58,237,0.7)',
]

const PARTICLE_COUNT = 18

export default function CursorTrail() {
  const containerRef = useRef(null)
  const particles    = useRef([])
  const mouse        = useRef({ x: 0, y: 0 })
  const rafRef       = useRef(null)

  useEffect(() => {
    const container = containerRef.current

    // Create particle DOM nodes once
    for (let i = 0; i < PARTICLE_COUNT; i++) {
      const el = document.createElement('div')
      el.className = 'cursor-trail-dot'
      container.appendChild(el)
      particles.current.push({
        el,
        x: 0, y: 0,
        size: Math.random() * 6 + 3,
        alpha: 0,
        color: COLORS[Math.floor(Math.random() * COLORS.length)],
        vx: 0, vy: 0,
        life: 0,
      })
    }

    const onMove = (e) => {
      mouse.current = { x: e.clientX, y: e.clientY }

      // Respawn a random particle at cursor
      const p = particles.current[Math.floor(Math.random() * PARTICLE_COUNT)]
      p.x     = e.clientX
      p.y     = e.clientY
      p.alpha = 1
      p.life  = 1
      p.size  = Math.random() * 7 + 3
      p.color = COLORS[Math.floor(Math.random() * COLORS.length)]
      p.vx    = (Math.random() - 0.5) * 2.5
      p.vy    = (Math.random() - 0.5) * 2.5 - 1
    }

    const animate = () => {
      particles.current.forEach((p) => {
        if (p.alpha <= 0) {
          p.el.style.opacity = '0'
          return
        }
        p.x    += p.vx
        p.y    += p.vy
        p.vy   += 0.07        // slight gravity
        p.life -= 0.035
        p.alpha = Math.max(0, p.life)

        const size = p.size * p.alpha
        p.el.style.cssText = `
          position: fixed;
          pointer-events: none;
          border-radius: 9999px;
          z-index: 9999;
          transform: translate(-50%, -50%);
          left: ${p.x}px;
          top: ${p.y}px;
          width: ${size}px;
          height: ${size}px;
          background: ${p.color};
          opacity: ${p.alpha};
          box-shadow: 0 0 ${size * 2}px ${p.color};
        `
      })
      rafRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    rafRef.current = requestAnimationFrame(animate)

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return <div ref={containerRef} aria-hidden="true" />
}