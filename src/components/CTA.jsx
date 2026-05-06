import { motion } from 'framer-motion'
import { scaleUp } from '../animations'
import { useLang } from '../context/LanguageContext'
import { translations } from '../translations'

export default function CTA() {
  const { lang } = useLang()
  const T = translations[lang].cta

  return (
    <section className="cta">
      <div className="container">
        <motion.div
          className="cta-card"
          variants={scaleUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <h2>
            {T.titleStart}
            <em style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontWeight: 400, color: 'var(--blue-400)' }}>
              {T.titleEm}
            </em>
            {T.titleEnd}
          </h2>
          <p>{T.desc}</p>
          <a href="#agendar" className="btn btn-green">
            {T.btn}
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
