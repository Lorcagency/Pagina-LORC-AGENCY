import { motion } from 'framer-motion'
import { fadeUp } from '../animations'
import { useLang } from '../context/LanguageContext'
import { translations } from '../translations'

const ICONS = [
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
  </svg>,
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>,
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="3" y="11" width="18" height="10" rx="2" />
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v4" />
  </svg>,
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
  </svg>,
]

export default function Products() {
  const { lang } = useLang()
  const T = translations[lang].products

  return (
    <section id="productos" className="products">
      <div className="container">
        <motion.div
          className="section-head"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className="section-label">{T.label}</div>
          <h2 className="section-title">{T.titleStart}<em>{T.titleEm}</em>{T.titleEnd}</h2>
          <p className="section-desc">{T.desc}</p>
        </motion.div>

        <div className="products-grid">
          {T.items.map((p, i) => (
            <motion.div
              key={i}
              className="product"
              initial={{ opacity: 0, y: 30, scale: 0.97 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: '-40px' }}
              transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 0.61, 0.36, 1] }}
            >
              <div className="product-head">
                <div className="product-icon">{ICONS[i]}</div>
                <span className="product-tag">{p.tag}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <ul>
                {p.items.map((item, j) => <li key={j}>{item}</li>)}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
