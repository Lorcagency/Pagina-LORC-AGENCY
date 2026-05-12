import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { getCalApi } from '@calcom/embed-react'
import { slideLeft, slideRight } from '../animations'
import { useLang } from '../context/LanguageContext'
import { translations } from '../translations'

function Calendar({ T, lang }) {
  const today = new Date()
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())
  const triggerRef = useRef(null)

  useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: '30min' })
      cal('ui', { locale: lang, hideEventTypeDetails: false, layout: 'month_view' })
    })()
  }, [lang])

  function changeMonth(delta) {
    let m = month + delta
    let y = year
    if (m < 0) { m = 11; y-- }
    if (m > 11) { m = 0; y++ }
    setMonth(m); setYear(y)
  }

  function selectDay(d, cls) {
    if (!cls.includes('available') || !triggerRef.current) return
    triggerRef.current.click()
  }

  const first = new Date(year, month, 1).getDay()
  const lastDay = new Date(year, month + 1, 0).getDate()
  const days = []
  for (let i = 0; i < first; i++) days.push({ d: null, cls: 'muted' })
  for (let d = 1; d <= lastDay; d++) {
    const dt = new Date(year, month, d)
    const isPast = dt < new Date(today.getFullYear(), today.getMonth(), today.getDate())
    const isWeekend = dt.getDay() === 0 || dt.getDay() === 6
    days.push({ d, cls: isPast || isWeekend ? 'muted' : 'available' })
  }

  return (
    <div className="cal-card">
      {/* Botón oculto que Cal.com intercepta para abrir el popup */}
      <button
        ref={triggerRef}
        data-cal-namespace="30min"
        data-cal-link="lorca-agency-xafmti/30min"
        data-cal-config={JSON.stringify({ layout: 'month_view', locale: lang })}
        style={{ display: 'none' }}
        aria-hidden="true"
      />

      <div className="cal-head">
        <strong>{T.months[month]} {year}</strong>
        <div className="cal-nav">
          <button type="button" onClick={() => changeMonth(-1)}>‹</button>
          <button type="button" onClick={() => changeMonth(1)}>›</button>
        </div>
      </div>

      <div className="cal-grid">
        {T.days.map((d, i) => (
          <div key={i} className="cal-dow">{d}</div>
        ))}
        {days.map((item, i) => (
          <div
            key={i}
            className={`cal-day ${item.cls}`}
            onClick={() => item.d && selectDay(item.d, item.cls)}
          >
            {item.d}
          </div>
        ))}
      </div>

      <p style={{ marginTop: 16, fontSize: 13, color: 'var(--slate)', textAlign: 'center' }}>
        {T.clickDay}
      </p>
    </div>
  )
}

export default function Schedule() {
  const { lang } = useLang()
  const T = translations[lang].schedule

  return (
    <section id="agendar" className="schedule">
      <div className="container">
        <div className="schedule-inner">
          <motion.div
            className="schedule-text"
            variants={slideLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <div className="section-label">{T.label}</div>
            <h2>{T.titleStart}<em>{T.titleEm}</em></h2>
            <p>{T.desc}</p>
            <ul className="schedule-bullets">
              {T.bullets.map((b, i) => <li key={i}>{b}</li>)}
            </ul>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <Calendar T={T} lang={lang} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
