import { motion } from 'framer-motion'
import { slideLeft, slideRight, stagger, cardVariant } from '../animations'

const VALUES = [
  { title: 'Directo', desc: 'Te decimos qué funciona y qué no, sin suavizar.' },
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
              <p>LORCAGENCY nace de una idea simple: la mayoría de agencias venden bonito pero no mueven la aguja. Nosotros somos diferentes porque venimos de construir negocios reales — no solo de hablar de ellos.</p>
              <p>Trabajamos con founders, emprendedores y empresas que necesitan resultados claros. Sin reportes llenos de humo, sin métricas de vanidad. Solo lo que importa: más clientes, más ventas, más crecimiento.</p>
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
