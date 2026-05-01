import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { pageTransition, fadeUp } from '../animations'
import Nav from '../components/Nav'
import TeamSection from '../components/TeamSection'
import Footer from '../components/Footer'

const VALUES = [
  { icon: '🎯', title: 'Orientados a resultados', desc: 'Cada decisión que tomamos está enfocada en el impacto real para tu negocio.' },
  { icon: '🤝', title: 'Aliados, no proveedores', desc: 'Nos involucramos como si el negocio fuera nuestro. Tu éxito es el nuestro.' },
  { icon: '⚡', title: 'Velocidad con criterio', desc: 'Ejecutamos rápido sin sacrificar la estrategia. Ideas a acción en días, no meses.' },
  { icon: '🧠', title: 'Tecnología al servicio', desc: 'AI y automatización como herramientas, siempre con un propósito claro detrás.' },
]

export default function QuienesSomos() {
  return (
    <motion.div {...pageTransition}>
      <Nav />

      {/* PAGE HERO */}
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
            <span>Quiénes somos</span>
          </div>
          <h1>Las personas detrás de <em>LORCAGENCY</em>.</h1>
          <p>Somos dos emprendedores convencidos de que la tecnología, bien aplicada, cambia el juego para cualquier negocio.</p>
        </div>
      </motion.div>

      <TeamSection />

      {/* VALUES */}
      <section className="qs-values-section">
        <div className="container">
          <motion.div
            className="section-head center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="section-label">Nuestra forma de trabajar</div>
            <h2 className="section-title">Lo que nos <em>define</em></h2>
          </motion.div>

          <div className="qs-values-grid">
            {VALUES.map((v, i) => (
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

      {/* CTA */}
      <section className="qs-cta-section">
        <div className="container">
          <motion.div
            className="qs-cta-card"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="section-label" style={{ color: 'var(--blue-400)', marginBottom: 16 }}>¿Listo para trabajar juntos?</div>
            <h2>Platicemos sobre tu negocio</h2>
            <p>Una llamada de 30 minutos puede cambiar el rumbo de tu empresa. Sin costo, sin compromiso.</p>
            <div className="qs-cta-actions">
              <Link to="/contacto" className="btn btn-green">
                Agendar llamada gratis
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
