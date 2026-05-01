import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { pageTransition, fadeUp, slideLeft, slideRight } from '../animations'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const TEAM = [
  {
    id: 'socio-1',
    name: 'Emiliano Ortega Castellanos',
    role: 'Co-fundador',
    bio: [
      'Ingeniero en nanotecnología con experiencia trabajando de la mano con modelos de inteligencia artificial y soluciones tecnológicas aplicadas a negocio.',
      'Cuenta con trayectoria en consultoría estratégica para empresas de distintas industrias, donde se enfoca en entender cada operación y diseñar soluciones que generen impacto real.',
      'En LORCAGENCY, lidera la implementación de estrategias basadas en tecnología para optimizar procesos, escalar operaciones y generar resultados medibles.',
    ],
    photo: null,
    instagram: 'https://www.instagram.com/emiliano.ortega.796/',
  },
  {
    id: 'socio-2',
    name: 'Santiago López Rodríguez',
    role: 'Co-fundador',
    bio: [
      'Licenciado en Comunicación con especialidad en Mercadotecnia y Publicidad, con experiencia en marketing, ventas consultivas y reclutamiento estratégico.',
      'Se especializa en identificar oportunidades de negocio y transformarlas en resultados concretos, combinando visión estratégica con ejecución.',
      'En LORCAGENCY, lidera el desarrollo de estrategias innovadoras que conectan a las marcas con su mercado y generan valor sostenible.',
    ],
    photo: null,
    instagram: 'https://www.instagram.com/lopez7130/',
  },
]

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

      {/* TEAM SECTION */}
      <section className="qs-team-section">
        <div className="container">
          <motion.div
            className="section-head center"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-60px' }}
          >
            <div className="section-label">El equipo</div>
            <h2 className="section-title">Dos socios, <em>una visión</em></h2>
            <p className="section-desc">Fundamos LORCAGENCY para demostrar que las pymes y emprendedores merecen acceso a las mismas herramientas y estrategias que usan las grandes empresas.</p>
          </motion.div>

          <div className="qs-team-grid">
            {TEAM.map((member, i) => (
              <motion.div
                key={member.id}
                className="qs-card"
                variants={i === 0 ? slideLeft : slideRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
              >
                {/* FOTO */}
                <div className="qs-photo-wrap">
                  {member.photo ? (
                    <img src={member.photo} alt={member.name} className="qs-photo" />
                  ) : (
                    <div className="qs-photo-placeholder">
                      <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
                        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                        <circle cx="12" cy="7" r="4" />
                      </svg>
                    </div>
                  )}
                </div>

                {/* INFO */}
                <div className="qs-card-body">
                  <div className="section-label" style={{ marginBottom: 8 }}>{member.role}</div>
                  <h3 className="qs-name">{member.name}</h3>
                  {member.bio.map((p, idx) => (
                    <p key={idx} className="qs-bio">{p}</p>
                  ))}

                  <div className="qs-socials">
                    <a href={member.instagram} className="qs-social-btn" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                        <circle cx="12" cy="12" r="4"/>
                        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor"/>
                      </svg>
                      Instagram
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
