import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { fadeUp } from '../animations'

export default function Footer() {
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
              <span className="logo-mark" />
              <span style={{ fontWeight: 800, letterSpacing: '-0.03em' }}>LORC</span>
              <span style={{ fontWeight: 500, color: 'rgba(255,255,255,0.6)', marginLeft: 3, fontSize: '0.85em', letterSpacing: '0.08em' }}>AGENCY</span>
            </div>
            <p className="foot-desc">Hacemos que tu negocio crezca, venda y se dé a conocer. Marketing, AI, automatización y desarrollo web.</p>
          </div>

          <div>
            <h4>Productos</h4>
            <ul>
              <li><a href="#productos">Automatización</a></li>
              <li><a href="#productos">Sitios inteligentes</a></li>
              <li><a href="#productos">Agentes de AI</a></li>
              <li><a href="#productos">Reputación</a></li>
            </ul>
          </div>

          <div>
            <h4>Agencia</h4>
            <ul>
              <li><a href="#servicios">Servicios</a></li>
              <li><a href="#casos">Casos</a></li>
              <li><a href="#nosotros">Nosotros</a></li>
              <li><Link to="/contacto">Contacto</Link></li>
            </ul>
          </div>

          <div>
            <h4>Contacto</h4>
            <ul>
              <li><a href="mailto:hola@lorcagency.com">hola@lorcagency.com</a></li>
              <li><a href="https://wa.me/525500000000">+52 55 0000 0000</a></li>
              <li>Ciudad de México, MX</li>
            </ul>
          </div>
        </div>

        <div className="foot-bottom">
          <div>© 2026 LORCAGENCY. Todos los derechos reservados.</div>
          <div>Hecho con foco en resultados.</div>
        </div>
      </div>
    </motion.footer>
  )
}
