import { motion } from 'framer-motion'
import { fadeUp, slideLeft, slideRight } from '../animations'

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

export default function TeamSection() {
  return (
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
  )
}
