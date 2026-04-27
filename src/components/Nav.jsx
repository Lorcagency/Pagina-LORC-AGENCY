import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { ease } from '../animations'

export default function Nav() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const prefix = isHome ? '' : '/'

  return (
    <motion.nav
      className="nav"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease }}
    >
      <div className="container nav-inner">
        <Link to="/" className="logo">
          <span className="logo-mark" />
          <span style={{ fontWeight: 800, letterSpacing: '-0.03em' }}>LORC</span>
          <span style={{ fontWeight: 500, color: 'var(--slate)', marginLeft: 3, fontSize: '0.85em', letterSpacing: '0.08em' }}>AGENCY</span>
        </Link>

        <div className="nav-links">
          <a href={`${prefix}#productos`}>Productos</a>
          <a href={`${prefix}#servicios`}>Servicios</a>
          <a href={`${prefix}#casos`}>Casos</a>
          <Link to="/quienes-somos" className={pathname === '/quienes-somos' ? 'active' : ''}>Quiénes somos</Link>
          <Link to="/contacto" className={pathname === '/contacto' ? 'active' : ''}>Contacto</Link>
          <a href={`${prefix}#agendar`} className="btn btn-green">Agendar llamada</a>
        </div>

        <button className="burger" aria-label="Menu">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
        </button>
      </div>
    </motion.nav>
  )
}
