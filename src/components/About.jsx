import { motion } from 'framer-motion'
import { slideLeft, slideRight, stagger, cardVariant } from '../animations'
import { useLang } from '../context/LanguageContext'
import { translations } from '../translations'

export default function About() {
  const { lang } = useLang()
  const T = translations[lang].about

  return (
    <section id="nosotros" className="about">
      <div className="container">
        <div className="about-grid">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="section-label">{T.label}</div>
            <h2 className="section-title">{T.titleStart}<em>{T.titleEm}</em>{T.titleEnd}</h2>
            <div className="about-text">
              <p>{T.p1}</p>
              <p>{T.p2}</p>
              <p>{T.p3}</p>
            </div>
          </motion.div>

          <motion.div
            className="values"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {T.values.map((v, i) => (
              <motion.div key={i} className="value" variants={cardVariant}>
                <strong>{v.title}</strong>
                <span>{v.desc}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
