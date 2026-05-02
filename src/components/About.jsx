import { motion } from 'framer-motion'
import { slideLeft, slideRight, stagger, cardVariant } from '../animations'

const VALUES = [
  { title: 'Directo', desc: 'No te decimos lo que quieres escuchar. Te decimos lo que tu negocio necesita.' },
  { title: 'Accionable', desc: 'Planes ejecutables esta semana, no en 6 meses.' },
  { title: 'Medible', desc: 'Lo que no se mide, no se mejora.' },
  { title: 'Socio', desc: 'Entramos como si fuera nuestro propio negocio.' },
]

export default function About() {
  return (
    <section id="nosotros" className="about">
      <div className="container">
        <div className="about-grid">
          <motion.div
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="section-label">Nosotros</div>
            <h2 className="section-title">Operadores, <em>no teóricos</em>.</h2>
            <div className="about-text">
              <p>La mayoría de agencias se ven bien en papel. Nosotros preferimos vernos bien en tus resultados.</p>
              <p>LORCAGENCY nació porque vimos demasiadas empresas pagando por reportes bonitos que no movían nada. Nosotros venimos de construir negocios — con todo lo que eso implica: prueba, error, ajuste y resultados reales.</p>
              <p>Trabajamos con founders y equipos que ya no tienen tiempo para experimentos. Necesitan clientes, ventas y crecimiento. Eso es exactamente lo que hacemos.</p>
            </div>
          </motion.div>

          <motion.div
            className="values"
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            {VALUES.map((v) => (
              <motion.div key={v.title} className="value" variants={cardVariant}>
                <strong>{v.title}</strong>
                <span>{v.desc}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
