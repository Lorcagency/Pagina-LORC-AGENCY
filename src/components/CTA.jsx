import { motion } from 'framer-motion'
import { scaleUp } from '../animations'

export default function CTA() {
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
            ¿Listo para que tu negocio{' '}
            <em style={{ fontFamily: "'Instrument Serif', serif", fontStyle: 'italic', fontWeight: 400, color: 'var(--blue-400)' }}>
              crezca
            </em>?
          </h2>
          <p>Agenda una llamada de diagnóstico gratuita. Si no aportamos valor, no hay por qué seguir.</p>
          <a href="#agendar" className="btn btn-green">
            Quiero crecer mi negocio
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M13 5l7 7-7 7" />
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  )
}
