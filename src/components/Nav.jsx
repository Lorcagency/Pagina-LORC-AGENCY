import { useState } from 'react'
import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { ease } from '../animations'

export default function Nav() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const prefix = isHome ? '' : '/'
  const [open, setOpen] = useState(false)
  const close = () => setOpen(false)

  return (
    <motion.nav
      className="nav"
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease }}
    >
      <div className="container">
        <div className="nav-inner">
          <Link to="/" className="logo" onClick={close}>
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

          <button className="burger" aria-label="Menu" onClick={() => setOpen(o => !o)}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              {open ? (
                <>
                  <line x1="4" y1="4" x2="20" y2="20" />
                  <line x1="20" y1="4" x2="4" y2="20" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="mobile-menu">
          <div className="container">
            <a href={`${prefix}#productos`} onClick={close}>Productos</a>
            <a href={`${prefix}#servicios`} onClick={close}>Servicios</a>
            <a href={`${prefix}#casos`} onClick={close}>Casos</a>
            <Link to="/quienes-somos" className={pathname === '/quienes-somos' ? 'active' : ''} onClick={close}>Quiénes somos</Link>
            <Link to="/contacto" className={pathname === '/contacto' ? 'active' : ''} onClick={close}>Contacto</Link>
            <a href={`${prefix}#agendar`} className="btn btn-green mobile-menu-cta" onClick={close}>Agendar llamada</a>
          </div>
        </div>
      )}
    </motion.nav>
  )
}
