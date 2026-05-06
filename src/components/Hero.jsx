import { useEffect, useState, useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import { ease, stagger, fadeUp } from '../animations'
import { useLang } from '../context/LanguageContext'
import { translations } from '../translations'

function useTypewriter(words) {
  const [text, setText] = useState('')
  const [wordIdx, setWordIdx] = useState(0)
  const [deleting, setDeleting] = useState(false)

  useEffect(() => {
    setText('')
    setWordIdx(0)
    setDeleting(false)
  }, [words])

  useEffect(() => {
    const word = words[wordIdx]
    if (!deleting && text === word) {
      const t = setTimeout(() => setDeleting(true), 1800)
      return () => clearTimeout(t)
    }
    if (deleting && text === '') {
      setDeleting(false)
      setWordIdx(i => (i + 1) % words.length)
      return
    }
    const t = setTimeout(() => {
      setText(deleting ? word.slice(0, text.length - 1) : word.slice(0, text.length + 1))
    }, deleting ? 40 : 80)
    return () => clearTimeout(t)
  }, [text, deleting, wordIdx, words])

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
  const { lang } = useLang()
  const T = translations[lang].hero
  const typed = useTypewriter(T.words)

  return (
    <header className="hero">
      <div className="container">
        <motion.div variants={containerVariants} initial="hidden" animate="visible">
          <motion.div variants={itemVariants}>
            <div className="eyebrow">{T.eyebrow}</div>
          </motion.div>

          <motion.h1 className="hero-title" variants={itemVariants}>
            {T.title}
            <br />
            <span className="typed-wrap">
              <span className="typed">{typed}</span>
              <span className="cursor" />
            </span>
          </motion.h1>

          <motion.p className="hero-sub" variants={itemVariants}>
            {T.sub}
          </motion.p>

          <motion.div className="hero-actions" variants={itemVariants}>
            <a href="#agendar" className="btn btn-green">
              {T.cta}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
            <a href="#productos" className="btn btn-ghost">{T.ghost}</a>
            <span className="hero-note">{T.note}</span>
          </motion.div>
        </motion.div>
      </div>
    </header>
  )
}
