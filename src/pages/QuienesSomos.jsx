import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { pageTransition, fadeUp } from '../animations'
import Nav from '../components/Nav'
import TeamSection from '../components/TeamSection'
import Footer from '../components/Footer'
import { useLang } from '../context/LanguageContext'
import { translations } from '../translations'

export default function QuienesSomos() {
  const { lang } = useLang()
  const T = translations[lang].qs

  return (
    <motion.div {...pageTransition}>
      <Nav />

      <motion.div
        className="page-hero"
        variants={fadeUp}
        initial="hidden"
        animate="visible"
      >
        <div className="container">
          <div className="breadcrumb">
            <Link to="/">Inicio</Link>
            <span>›</span>
            <span>{T.breadcrumb}</span>
          </div>
          <h1>{T.titleStart}<em>{T.titleEm}</em>{T.titleEnd}</h1>
          <p>{T.desc}</p>
        </div>
      </motion.div>

      <TeamSection />

      <section className="qs-values-section">
        <div className="container">
          <motion.div
            className="section-head center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="section-label">{T.valuesLabel}</div>
            <h2 className="section-title">{T.valuesTitleStart}<em>{T.valuesTitleEm}</em></h2>
          </motion.div>

          <div className="qs-values-grid">
            {T.values.map((v, i) => (
              <motion.div
                key={v.title}
                className="qs-value-card"
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                transition={{ delay: i * 0.1 }}
              >
                <div className="qs-value-icon">{v.icon}</div>
                <h4>{v.title}</h4>
                <p>{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="qs-cta-section">
        <div className="container">
          <motion.div
            className="qs-cta-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="section-label" style={{ color: 'var(--blue-400)', marginBottom: 16 }}>{T.ctaLabel}</div>
            <h2>{T.ctaTitle}</h2>
            <p>{T.ctaDesc}</p>
            <div className="qs-cta-actions">
              <Link to="/contacto" className="btn btn-green">
                {T.ctaBtn}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14M13 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </motion.div>
  )
}
