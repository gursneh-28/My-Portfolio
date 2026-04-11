import { motion } from 'framer-motion'
import './PageTransition.css'

const variants = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
}

export default function PageTransition({ children }) {
  return (
    <motion.div
      className="page-transition"
      variants={variants}
      initial="initial"
      whileInView="animate"
      viewport={{ once: false, amount: 0.1 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  )
}