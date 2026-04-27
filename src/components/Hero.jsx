import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ease, stagger, fadeUp } from '../animations'

const WORDS = ['venda.', 'crezca.', 'se dé a conocer.', 'automatice.', 'destaque.']

function useTypewriter() {
  const [text, setText] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    const word = WORDS[wordIdx]
    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), 1800)
      return () => clearTimeout(t)
    }
    if (deleting && text === '') {
      setDeleting(false)
      setWordIdx(i => (i + 1) % WORDS.length)
      return
    }
    const t = setTimeout(() => {
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
    }, deleting ? 40 : 80)
    return () => clearTimeout(t)
  }, [text, deleting, wordIdx])

  return text
}

function StatCounter({ target, suffix = '', prefix = '' }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    const num = parseInt(String(target).replace(/\D/g, ''), 10)
    const duration = 1600
    const start = performance.now()
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - p, 3)
      setCount(Math.round(num * eased))
      if (p < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target])

  return <span ref={ref}>{prefix}{count}{suffix}</span>
}

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
}

const itemVariants = {
  hidden: { opacity: 0, y: 35 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, ease } },
}

export default function Hero() {
  const typed = useTypewriter()

  return (
    <header className="hero">
      <div className="container">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants}>
            <div className="eyebrow">Agencia · Marketing · AI · Automatización</div>
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            Hacemos que tu negocio
            <br />
            <span className="typed-wrap">
              <span className="typed">{typed}</span>
              <span className="cursor" />
            </span>
          </motion.h1>

          <motion.p className="hero-sub" variants={itemVariants}>
            LORCAGENCY es la agencia que une estrategia, marketing digital, automatización e inteligencia
            artificial para que tu negocio no solo exista — crezca, venda y se dé a conocer.
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <a href="#agendar" className="btn btn-green">
              Quiero crecer mi negocio
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#productos" className="btn btn-ghost">Ver productos</a>
            <span className="hero-note">Diagnóstico gratis. Sin compromiso.</span>
          </motion.div>


        </motion.div>
      </div>
    </header>
  )
}
