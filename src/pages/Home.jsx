import { motion } from 'framer-motion'
import { pageTransition } from '../animations'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Products from '../components/Products'
import Services from '../components/Services'
import Cases from '../components/Cases'
import Schedule from '../components/Schedule'
import About from '../components/About'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <motion.div {...pageTransition}>
      <Nav />
      <Hero />
      <Products />
      <Services />
      <Cases />
      <Schedule />
      <About />
      <CTA />
      <Footer />
    </motion.div>
  )
}
