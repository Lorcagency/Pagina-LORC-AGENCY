import { Routes, Route, useLocation } from 'react-router-dom'
import { AnimatePresence } from 'framer-motion'
import Home from './pages/Home'
import Contacto from './pages/Contacto'
import QuienesSomos from './pages/QuienesSomos'

export default function App() {
  const location = useLocation()
  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/contacto" element={<Contacto />} />
        <Route path="/quienes-somos" element={<QuienesSomos />} />
      </Routes>
    </AnimatePresence>
  )
}

