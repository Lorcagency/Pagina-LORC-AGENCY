import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { pageTransition, fadeUp, slideLeft, slideRight } from '../animations'
import Nav from '../components/Nav'
import Footer from '../components/Footer'
import { useLang } from '../context/LanguageContext'
import { translations } from '../translations'

const INFO_ICONS = [
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>,
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>,
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>,
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>,
]

function ContactForm({ T }) {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <motion.div
        className="success-msg"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        {T.success}
      </motion.div>
    )
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="nombre">{T.name}</label>
          <input type="text" id="nombre" name="nombre" required placeholder={T.namePh} />
        </div>
        <div className="field">
          <label htmlFor="empresa">{T.company}</label>
          <input type="text" id="empresa" name="empresa" placeholder={T.companyPh} />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="email">{T.email}</label>
          <input type="email" id="email" name="email" required placeholder="tu@email.com" />
        </div>
        <div className="field">
          <label htmlFor="telefono">{T.phone}</label>
          <input type="tel" id="telefono" name="telefono" placeholder="+52 55 0000 0000" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="servicio">{T.service}</label>
        <select id="servicio" name="servicio" required>
          <option value="">{T.servicePh}</option>
          <optgroup label={T.serviceGroupA}>
            {T.serviceOpts.slice(0, 4).map(o => <option key={o}>{o}</option>)}
          </optgroup>
          <optgroup label={T.serviceGroupB}>
            {T.serviceOpts.slice(4, 7).map(o => <option key={o}>{o}</option>)}
          </optgroup>
          <option>{T.serviceOpts[7]}</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="mensaje">{T.message}</label>
        <textarea id="mensaje" name="mensaje" required placeholder={T.messagePh} />
      </div>
      <button type="submit" className="btn btn-green submit">
        {T.submit}
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </button>
      <p className="form-note">{T.formNote}</p>
    </form>
  )
}

export default function Contacto() {
  const { lang } = useLang()
  const T = translations[lang].contact

  const infoBlocks = [
    { label: 'Email', value: 'hola@lorcagency.com', href: 'mailto:hola@lorcagency.com' },
    { label: 'WhatsApp', value: '+52 55 0000 0000', href: 'https://wa.me/525500000000' },
    { label: T.locationLabel, value: 'Ciudad de México, MX', href: null },
    { label: T.scheduleLabel, value: T.scheduleValue, href: '/#agendar' },
  ]

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
          <p>{T.lead}</p>
        </div>
      </motion.div>

      <section className="contact-page-section">
        <div className="container">
          <div className="contact-grid">
            <motion.div
              className="form-card"
              variants={slideLeft}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <div className="section-label">{T.formLabel}</div>
              <h2>{T.formTitle}</h2>
              <p className="sub">{T.formSub}</p>
              <ContactForm T={T} />
            </motion.div>

            <motion.div
              className="info"
              variants={slideRight}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
            >
              <h3>{T.channels}</h3>
              {infoBlocks.map((b, i) => (
                <div key={b.label} className="info-block">
                  <div className="info-icon">{INFO_ICONS[i]}</div>
                  <div>
                    <strong>{b.label}</strong>
                    <span>{b.href ? <a href={b.href}>{b.value}</a> : b.value}</span>
                  </div>
                </div>
              ))}

              <div className="expectations">
                <h4>{T.nextTitle}</h4>
                <ul>
                  {T.nextItems.map((item, i) => <li key={i}>{item}</li>)}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </motion.div>
  )
}
