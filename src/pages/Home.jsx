import { motion } from 'framer-motion'
import { pageTransition } from '../animations'
import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Products from '../components/Products'
import TeamSection from '../components/TeamSection'
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
      <TeamSection />
      <Schedule />
      <About />
      <CTA />
      <Footer />
    </motion.div>
  )
}
