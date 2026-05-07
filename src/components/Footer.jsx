import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp } from '../animations'
import { useLang } from '../context/LanguageContext'
import { translations } from '../translations'

export default function Footer() {
  const { lang } = useLang()
  const T = translations[lang].footer

  return (
    <motion.footer
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-60px' }}
    >
      <div className="container">
        <div className="footer-grid">
          <div>
            <div className="logo">
              <img src="/fotos/logo-sin-fondo.png" alt="LORC Agency logo" className="logo-img footer-logo-img" />
              <span style={{ fontWeight: 800, letterSpacing: '-0.03em' }}>LORC</span>
              <span style={{ fontWeight: 500, color: 'rgba(255,255,255,0.6)', marginLeft: 3, fontSize: '0.85em', letterSpacing: '0.08em' }}>AGENCY</span>
            </div>
            <p className="foot-desc">{T.desc}</p>
          </div>

          <div>
            <h4>{T.productsTitle}</h4>
            <ul>
              {T.productItems.map((item) => (
                <li key={item}><a href="#productos">{item}</a></li>
              ))}
            </ul>
          </div>

          <div>
            <h4>{T.agencyTitle}</h4>
            <ul>
              {T.agencyLinks.map((link) => (
                <li key={link.label}>
                  {link.to ? <Link to={link.to}>{link.label}</Link> : <a href={link.href}>{link.label}</a>}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4>{T.contactTitle}</h4>
            <ul>
              <li><a href="mailto:lorcagency@outlook.com">lorcagency@outlook.com</a></li>
              <li><a href="https://wa.me/525500000000">+52 55 0000 0000</a></li>
              <li>Ciudad de México, MX</li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <div>{T.copyright}</div>
          <div>{T.tagline}</div>
        </div>
      </div>
    </motion.footer>
  )
}
