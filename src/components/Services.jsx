import { motion } from 'framer-motion'
import { fadeUp, stagger, cardVariant } from '../animations'

const SERVICES = [
  {
    title: 'Desarrollo web y e-commerce',
    desc: 'Sitios rápidos, optimizados y pensados para convertir — no plantillas genéricas.',
    items: ['Landing pages de alta conversión', 'Tiendas Shopify / WooCommerce', 'Integración Amazon / Mercado Libre', 'CRM y automatización'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polyline points="16 18 22 12 16 6" />
        <polyline points="8 6 2 12 8 18" />
      </svg>
    ),
  },
  {
    title: 'Marketing digital y redes',
    desc: 'Contenido, paid ads y estrategia de crecimiento que genera demanda real.',
    items: ['Meta Ads y Google Ads', 'Manejo de redes sociales', 'Estrategia de contenido', 'Email marketing y funnels'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9" />
        <path d="M13.73 21a2 2 0 0 1-3.46 0" />
      </svg>
    ),
  },
  {
    title: 'Consultoría estratégica',
    desc: 'Analizamos tu negocio y te damos el roadmap claro: qué hacer primero, segundo y tercero.',
    items: ['Validación de producto y mercado', 'Posicionamiento y propuesta de valor', 'Estructura de precios y márgenes', 'Plan de crecimiento trimestral'],
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
]

export default function Services() {
  return (
    <section id="servicios" className="services">
      <div className="container">
        <motion.div
          className="section-head"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className="section-label">Servicios</div>
          <h2 className="section-title">Estrategia + ejecución que <em>mueve la aguja</em>.</h2>
          <p className="section-desc">No vendemos humo ni métricas de vanidad. Nos enfocamos en lo que convierte: clientes, ventas y crecimiento real medible.</p>
        </motion.div>

        <motion.div
          className="services-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {SERVICES.map((s) => (
            <motion.div key={s.title} className="service" variants={cardVariant}>
              <div className="service-icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <ul>
                {s.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
