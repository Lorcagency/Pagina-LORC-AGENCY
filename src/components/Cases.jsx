import { motion } from 'framer-motion'
import { fadeUp, stagger, cardVariant } from '../animations'

const CASES = [
  {
    cls: 'case-1',
    metric: '3.2x', metricLabel: 'ROAS',
    tag: 'E-commerce',
    title: 'Escalamos una tienda de moda a 6 cifras mensuales',
    desc: 'Rediseño de tienda + paid ads. De 0 a $500K MXN/mes en 6 meses.',
  },
  {
    cls: 'case-2',
    metric: '+180%', metricLabel: 'leads',
    tag: 'B2B',
    title: 'Funnel de ventas para consultora profesional',
    desc: 'Landing + email + Meta Ads. Triplicamos leads calificados en 90 días.',
  },
  {
    cls: 'case-3',
    metric: '-45%', metricLabel: 'CAC',
    tag: 'Servicios',
    title: 'Reducción de costo de adquisición para marca local',
    desc: 'Optimización de campañas y creativos. Mismo presupuesto, casi el doble de clientes.',
  },
  {
    cls: 'case-4',
    metric: '+65%', metricLabel: 'conv.',
    tag: 'Retail',
    title: 'Rediseño web enfocado en conversión',
    desc: 'Nueva arquitectura + UX + copy. Mismos visitantes, 65% más ventas.',
  },
]

export default function Cases() {
  return (
    <section id="casos" className="cases">
      <div className="container">
        <motion.div
          className="section-head"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className="section-label">Casos de éxito</div>
          <h2 className="section-title">Resultados, no <em>promesas</em>.</h2>
          <p className="section-desc">Cada proyecto tiene un objetivo claro y números que lo respaldan. Aquí algunos ejemplos.</p>
        </motion.div>

        <motion.div
          className="cases-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {CASES.map((c) => (
            <motion.div key={c.title} className={`case ${c.cls}`} variants={cardVariant}>
              <div className="case-metric">
                <strong>{c.metric}</strong>
                <span>{c.metricLabel}</span>
              </div>
              <span className="case-tag">{c.tag}</span>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
