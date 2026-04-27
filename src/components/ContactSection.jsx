import { useState } from 'react'
import { motion } from 'framer-motion'
import { fadeUp, slideLeft, slideRight, stagger, cardVariant } from '../animations'

function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

  if (submitted) {
    return (
      <motion.div
        className="success-msg"
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
      >
        ✓ Mensaje enviado. Te contactamos en menos de 24 horas.
      </motion.div>
    )
  }

  return (
    <form onSubmit={(e) => { e.preventDefault(); setSubmitted(true) }}>
      <div className="form-row">
        <div className="field">
          <label htmlFor="nombre">Nombre*</label>
          <input type="text" id="nombre" name="nombre" required placeholder="Tu nombre" />
        </div>
        <div className="field">
          <label htmlFor="empresa">Empresa</label>
          <input type="text" id="empresa" name="empresa" placeholder="Tu empresa o proyecto" />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor="email">Email*</label>
          <input type="email" id="email" name="email" required placeholder="tu@email.com" />
        </div>
        <div className="field">
          <label htmlFor="telefono">Teléfono</label>
          <input type="tel" id="telefono" name="telefono" placeholder="+52 55 0000 0000" />
        </div>
      </div>
      <div className="field">
        <label htmlFor="servicio">¿Qué te interesa?*</label>
        <select id="servicio" name="servicio" required>
          <option value="">Selecciona una opción</option>
          <optgroup label="Productos">
            <option>Automatización</option>
            <option>Sitios web inteligentes</option>
            <option>Agentes de AI</option>
            <option>Gestión de reputación</option>
          </optgroup>
          <optgroup label="Servicios">
            <option>Desarrollo web / e-commerce</option>
            <option>Marketing digital y redes</option>
            <option>Consultoría estratégica</option>
          </optgroup>
          <option>Todo / no estoy seguro</option>
        </select>
      </div>
      <div className="field">
        <label htmlFor="mensaje">Cuéntanos brevemente qué necesitas*</label>
        <textarea id="mensaje" name="mensaje" required placeholder="¿Cuál es el objetivo? ¿Qué has intentado? Mientras más contexto, mejor." />
      </div>
      <button type="submit" className="btn btn-green submit">
        Enviar mensaje
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <path d="M5 12h14M13 5l7 7-7 7" />
        </svg>
      </button>
      <p className="form-note">Al enviar aceptas que contactemos contigo sobre tu proyecto.</p>
    </form>
  )
}

const INFO_BLOCKS = [
  {
    label: 'Email',
    value: 'hola@lorcagency.com',
    href: 'mailto:hola@lorcagency.com',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
      </svg>
    ),
  },
  {
    label: 'WhatsApp',
    value: '+52 55 0000 0000',
    href: 'https://wa.me/525500000000',
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
  },
  {
    label: 'Ubicación',
    value: 'Ciudad de México, MX',
    href: null,
    icon: (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    ),
  },
]

export default function ContactSection() {
  return (
    <section id="contacto" className="contact-section">
      <div className="container">
        <motion.div
          className="section-head"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className="section-label">Contacto</div>
          <h2 className="contact-title">Cuéntanos de tu <em>proyecto</em>.</h2>
          <p className="lead">Responde en menos de 2 minutos. Te contactamos en menos de 24 horas para agendar una llamada de diagnóstico — gratuita y sin compromiso.</p>
        </motion.div>

        <div className="contact-grid">
          <motion.div
            className="form-card"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <h2>Envíanos un mensaje</h2>
            <p className="sub">Mientras más contexto nos des, mejor podemos ayudarte.</p>
            <ContactForm />
          </motion.div>

          <motion.div
            className="info"
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <h3>Otros canales</h3>
            {INFO_BLOCKS.map((b) => (
              <div key={b.label} className="info-block">
                <div className="info-icon">{b.icon}</div>
                <div>
                  <strong>{b.label}</strong>
                  <span>{b.href ? <a href={b.href}>{b.value}</a> : b.value}</span>
                </div>
              </div>
            ))}

            <div className="expectations">
              <h4>¿Qué pasa después?</h4>
              <ul>
                <li>Revisamos tu mensaje en menos de 24 horas.</li>
                <li>Te mandamos link para agendar la llamada cuando te venga bien.</li>
                <li>30 minutos de diagnóstico — salimos con mini-plan de acción.</li>
                <li>Si hace sentido trabajar juntos, te enviamos propuesta. Si no, te vas con claridad.</li>
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
