import { motion } from 'framer-motion'
import { fadeUp, stagger, cardVariant } from '../animations'

const PRODUCTS = [
  {
    tag: '24/7',
    title: 'Automatización',
    desc: 'Procesos que corren solos. Dejas de perder clientes por demoras, dejas de hacer tareas repetitivas y tu equipo se enfoca en lo que importa.',
    items: ['Flujos de ventas automatizados (lead → cierre)', 'Seguimiento por WhatsApp / email / SMS', 'Integraciones Zapier, Make, n8n', 'CRMs conectados a tu sitio'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    ),
  },
  {
    tag: 'Hecho con AI',
    title: 'Sitios web inteligentes',
    desc: 'Más que una página bonita. Sitios que convierten, aprenden del usuario y se adaptan. Construidos para vender, no para verse.',
    items: ['Landing pages + e-commerce optimizados', 'Chatbots de ventas integrados', 'Personalización dinámica del contenido', 'SEO + velocidad + analítica desde día uno'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    tag: 'Nuevo',
    title: 'Agentes de AI',
    desc: 'Asistentes virtuales entrenados con tu negocio. Atienden clientes, cierran ventas, responden preguntas y califican leads — mientras duermes.',
    items: ['Agente de ventas por WhatsApp / web', 'Entrenado con tu catálogo y políticas', 'Escalado humano cuando se necesita', 'Conexión con CRM y calendarios'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <rect x="3" y="11" width="18" height="10" rx="2" />
        <circle cx="12" cy="5" r="2" />
        <path d="M12 7v4" />
      </svg>
    ),
  },
  {
    tag: 'Premium',
    title: 'Gestión de reputación',
    desc: 'Tu marca en internet importa. Monitoreamos, respondemos y construimos tu reputación online para que te elijan antes que a la competencia.',
    items: ['Monitoreo de menciones y reseñas', 'Respuesta a reviews (Google / redes)', 'Generación de reseñas positivas', 'Reportes de sentimiento mensuales'],
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
]

export default function Products() {
  return (
    <section id="productos" className="products">
      <div className="container">
        <motion.div
          className="section-head"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
        >
          <div className="section-label">Productos</div>
          <h2 className="section-title">Tecnología que <em>vende por ti</em>.</h2>
          <p className="section-desc">No solo hacemos marketing. Construimos sistemas que trabajan 24/7 para que tu negocio venda, automatice procesos y responda antes que la competencia.</p>
        </motion.div>

        <motion.div
          className="products-grid"
          variants={stagger}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-60px' }}
        >
          {PRODUCTS.map((p) => (
            <motion.div key={p.title} className="product" variants={cardVariant}>
              <div className="product-head">
                <div className="product-icon">{p.icon}</div>
                <span className="product-tag">{p.tag}</span>
              </div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <ul>
                {p.items.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
