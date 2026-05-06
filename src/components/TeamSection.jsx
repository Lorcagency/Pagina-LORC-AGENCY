import { motion } from 'framer-motion'
import { fadeUp, slideLeft, slideRight } from '../animations'
import { useLang } from '../context/LanguageContext'
import { translations } from '../translations'

export default function TeamSection() {
  const { lang } = useLang()
  const T = translations[lang].team

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
          <div className="section-label">{T.label}</div>
          <h2 className="section-title">{T.titleStart}<em>{T.titleEm}</em></h2>
          <p className="section-desc">{T.desc}</p>
        </motion.div>

        <div className="qs-team-grid">
          {T.members.map((member, i) => (
            <motion.div
              key={member.name}
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
                <ul className="qs-bio-list">
                  {member.bio.map((item, idx) => (
                    <li key={idx}>{item}</li>
                  ))}
                </ul>
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
