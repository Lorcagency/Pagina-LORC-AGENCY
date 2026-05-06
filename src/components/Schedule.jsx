import { useState } from 'react'
import { motion } from 'framer-motion'
import { slideLeft, slideRight } from '../animations'
import { useLang } from '../context/LanguageContext'
import { translations } from '../translations'

const SLOTS = ['10:00', '11:00', '12:00', '15:00', '16:00', '17:00']

function Calendar({ T }) {
  const today = new Date()
  const [year, setYear] = useState(today.getFullYear())
  const [month, setMonth] = useState(today.getMonth())
  const [selectedDay, setSelectedDay] = useState(null)
  const [selectedSlot, setSelectedSlot] = useState(null)
  const [confirmed, setConfirmed] = useState(false)

  function changeMonth(delta) {
    let m = month + delta
    let y = year
    if (m < 0) { m = 11; y-- }
    if (m > 11) { m = 0; y++ }
    setMonth(m); setYear(y)
    setSelectedDay(null); setSelectedSlot(null)
  }

  function selectDay(d, cls) {
    if (!cls.includes('available')) return
    setSelectedDay(d); setSelectedSlot(null); setConfirmed(false)
  }

  function confirm() {
    if (selectedDay && selectedSlot) setConfirmed(true)
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
            className={`cal-day ${item.cls}${item.d === selectedDay && item.cls === 'available' ? ' selected' : ''}`}
            onClick={() => item.d && selectDay(item.d, item.cls)}
          >
            {item.d}
          </div>
        ))}
      </div>

      {selectedDay && !confirmed && (
        <div className="cal-slots">
          {SLOTS.map((s) => (
            <div
              key={s}
              className={`slot${selectedSlot === s ? ' selected' : ''}`}
              onClick={() => setSelectedSlot(s)}
            >
              {s}
            </div>
          ))}
        </div>
      )}

      {selectedSlot && !confirmed && (
        <button type="button" className="btn btn-green cal-cta" onClick={confirm}>
          {T.confirmBtn}
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M13 5l7 7-7 7" />
          </svg>
        </button>
      )}

      {confirmed && (
        <div className="cal-confirm">
          {T.confirmed(selectedDay, T.months[month], selectedSlot)}
        </div>
      )}
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
            <a href="#contacto" className="btn btn-primary">
              {T.formBtn}
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M13 5l7 7-7 7" />
              </svg>
            </a>
          </motion.div>

          <motion.div
            variants={slideRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-80px' }}
          >
            <Calendar T={T} />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
