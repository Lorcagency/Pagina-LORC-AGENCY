# Prompt para Claude Code en Replit — LORCAGENCY

Documento listo para pegar en Claude Code dentro de Replit. Copia el bloque del prompt y pégalo como primer mensaje.

---

## PASO 1 — Cómo arrancar en Replit

1. Entra a replit.com → **Create Repl**.
2. Selecciona template: **HTML, CSS, JS** (o **Node.js** si vas a querer formulario funcional con backend).
3. Nombra el proyecto: `lorcagency`.
4. Sube los dos archivos base que ya te genero (`index.html`, `contacto.html`) o deja que Claude los genere desde cero con el prompt.
5. Abre Claude Code (botón Assistant / Agent dentro de Replit).
6. Pega el prompt de abajo.

---

## PROMPT (copia desde aquí hasta el final del bloque)

```
Eres un desarrollador senior. Vas a construir el sitio web de LORCAGENCY, una agencia de marketing, desarrollo web, automatización y agentes de AI en Ciudad de México.

OBJETIVO
Construir un sitio web multipágina, minimalista premium, enfocado en conversión. Debe transmitir autoridad, confianza y resultados. Referente visual: Linear / Stripe / Vercel — limpio, mucho espacio en blanco, tipografía grande, micro-interacciones sutiles. La sección de Productos va en oscuro estilo MHA Intelligence.

IDENTIDAD DE MARCA
- Nombre: LORCAGENCY
- Tagline: "Hacemos que tu negocio venda / crezca / se dé a conocer / automatice / destaque." (typing animation rotando estas palabras)
- Tono: directo, sin relleno, profesional pero cercano. Nada corporativo acartonado.
- Idioma: español (México).

PALETA DE COLORES (azul oscuro / blanco — usar variables CSS)
- Blue 500    #1E40AF   → Principal (botones verdes/CTA)
- Blue 600    #1E3A8A   → Hover dark, links importantes
- Blue 400    #3B82F6   → Light accents, hover en hero
- Blue 300    #93C5FD   → Highlights, bordes badges
- Blue 100    #DBEAFE   → Background de tags
- Blue 50     #EFF6FF   → Background mist principal
- Indigo      #4F46E5   → Accent, gradientes
- Navy        #172554   → Deep, gradientes oscuros
- Ink         #0F172A   → Dark UI (cards de productos, footer)
- Slate       #64748B   → Texto body
- Slate dark  #334155   → Texto subtítulos
- White       #FFFFFF

TIPOGRAFÍA
- Inter (Google Fonts) para todo el UI — weights 400, 500, 600, 700, 900.
- Instrument Serif italic para acentos en títulos y para el typing animation (efecto editorial, palabras destacadas).
- Headline: tamaños grandes (44–88px en desktop), letter-spacing negativo (-0.04em).

ESTRUCTURA DEL SITIO

Dos páginas:

1) index.html (landing)
   - Nav sticky con blur, logo LORCAGENCY + links + CTA "Agendar llamada".
   - Hero con eyebrow badge "Agencia · Marketing · AI · Automatización", H1 grande "Hacemos que tu negocio [palabra rotando con typing animation en serif italic con gradient azul→indigo]", subtítulo, dos CTAs (verde primario + ghost), nota "Diagnóstico gratis. Sin compromiso.", stats row (4 métricas: +10 países, +160 clientes, +25 industrias, +$50M ventas generadas).
   - PRODUCTOS (sección oscura, fondo Ink #0F172A): título "Tecnología que vende por ti", grid 2x2 con 4 cards oscuras con borde sutil y gradientes:
       a) Automatización (icon sol/engranajes, tag "24/7"): flujos de ventas, WhatsApp/email automation, Zapier/Make/n8n, CRMs.
       b) Sitios web inteligentes (icon monitor, tag "Hecho con AI"): landing+ecommerce, chatbots ventas, personalización dinámica, SEO+velocidad+analytics.
       c) Agentes de AI (icon robot, tag "Nuevo"): agente de ventas WhatsApp/web, entrenado con tu catálogo, escalado humano, conexión CRM/calendarios.
       d) Gestión de reputación (icon estrella, tag "Premium"): monitoreo de menciones, respuesta a reviews, generación de reseñas, reportes de sentimiento.
   - SERVICIOS (sección clara): 3 cards con borde sutil:
       1) Desarrollo web y e-commerce
       2) Marketing digital y redes
       3) Consultoría estratégica
   - CASOS DE ÉXITO (background blue-50): 4 cards con gradientes azules/oscuros, tag, métrica grande arriba derecha (3.2x ROAS, +180% leads, -45% CAC, +65% conversión).
   - CALENDARIO PARA AGENDAR (sección con card grande): grid 2 columnas:
       · Izquierda: título "Hablemos 30 minutos. Sin compromiso.", descripción, 4 bullets de qué pasa, botón secundario "O llena el formulario" → contacto.html.
       · Derecha: card de calendario interactivo construido con HTML+JS vanilla, navegable mes anterior/siguiente, días disponibles (no domingos/sábados, no días pasados), al click muestra slots de horarios (10:00, 11:00, 12:00, 15:00, 16:00, 17:00), al elegir slot aparece botón "Confirmar horario", al confirmar muestra mensaje "✓ Llamada reservada para [día] de [mes] a las [hora]". Listo para conectar a Calendly después.
   - SOBRE NOSOTROS (sección clara): 2 columnas, izquierda título "Operadores, no teóricos" + 2 párrafos, derecha grid 2x2 de 4 valores (Directo, Accionable, Medible, Socio).
   - CTA final (card oscura Ink con gradientes azules): "¿Listo para que tu negocio crezca?", botón verde "Quiero crecer mi negocio".
   - Footer oscuro Ink (logo + descripción + 3 columnas links + bottom bar).

2) contacto.html (página de contacto)
   - Nav igual.
   - Hero corto: H1 "Cuéntanos de tu proyecto." (palabra "proyecto" en serif italic azul).
   - Grid 2 columnas:
       · Form card (nombre, empresa, email, teléfono, select con optgroups Productos/Servicios, textarea mensaje, submit).
       · Side info: Email, WhatsApp, Ubicación CDMX + bloque oscuro Ink "¿Qué pasa después?" con 4 bullets y check verdes (azul-claro).
   - Submit muestra mensaje de éxito (frontend-only o conectado a Formspree).
   - Footer compacto.

COMPONENTES Y DETALLES VISUALES
- Logo mark: círculo pequeño con gradiente Blue 500 → Indigo + líneas internas que sugieren un planeta/órbita.
- Botón primario: fondo Ink, texto blanco, hover → fondo Blue 600 + shadow azul + translateY(-1px).
- Botón "verde" (que es realmente azul ahora): fondo Blue 500, hover → Blue 600.
- Botón ghost: transparente con borde sutil, hover → fondo Blue 50.
- Eyebrow badges: píldora blanca con punto Blue 500 pulsante, borde Blue 300.
- Cards de servicios light: border sutil, hover levanta con shadow azul tenue y cambia border a Blue 400.
- Cards de productos dark: gradiente sutil interno blanco-transparente, hover gradiente azul tenue + línea superior Blue 400 que aparece.
- Cards de casos: gradientes radiales con colores de marca azul/navy/indigo, texto blanco, tag glass-morphism, métrica grande arriba derecha.
- Hero con grid pattern sutil (líneas azul muy claras) + radial gradients azules en esquinas.
- Typing animation en H1: rotando "venda. / crezca. / se dé a conocer. / automatice. / destaque." con cursor parpadeante azul.
- Fade-in on scroll con IntersectionObserver (clase .reveal → .visible).
- Smooth scroll en anchors.
- Calendario funcional construido a mano (no librerías), con navegación de meses y selección de slots.
- Responsive breakpoint en 900px: nav colapsa, grids → 1 columna.

CALIDAD TÉCNICA
- HTML semántico (header, nav, main, section, footer).
- CSS vanilla con variables :root — nada de Tailwind, Bootstrap, ni frameworks.
- Sin dependencias de build. Debe correr con solo abrir el HTML.
- Accesible: aria-labels en botones de iconos, contrastes WCAG AA, focus states visibles.
- SEO básico: meta description, títulos descriptivos.
- Optimizado: Google Fonts con preconnect, SVG icons inline.

ENTREGABLES
- index.html (todo inline: HTML + CSS + JS en un solo archivo).
- contacto.html (mismo approach).
- README.md con instrucciones para editar contenido y desplegar en Replit.

ARRANCA POR:
1. Crear index.html completo.
2. Crear contacto.html completo.
3. Crear README.md.
4. Mostrar cómo correrlo: usar el botón "Run" de Replit.
5. Dame la URL pública del Repl cuando termines.

IMPORTANTE
- No agregues features que no pedí.
- No uses librerías externas de UI.
- El sitio debe verse profesional de primera pasada.
- Contenido en español mexicano, sin regionalismos raros.
```

---

## PASO 2 — Después de que Claude Code termine

1. **Probar local:** Click en "Run" dentro de Replit → se abre el preview.
2. **Editar contenido:** Pídele a Claude Code:
   - "Cambia el email a `contacto@tudominio.com`"
   - "Reemplaza el caso 1 por [tu historia real con métricas]"
   - "Actualiza el WhatsApp al número +52 55 XXXX XXXX"
3. **Conectar formulario al email (recomendado):**
   - Crea cuenta gratis en [Formspree](https://formspree.io/).
   - Copia tu endpoint (ej. `https://formspree.io/f/xxxxxx`).
   - Dile a Claude Code: *"Conecta el formulario de contacto.html a este Formspree endpoint: [URL]"*.
4. **Conectar el calendario a Calendly (recomendado):**
   - Crea cuenta gratis en [Calendly](https://calendly.com/).
   - Configura tu evento de 30 min.
   - Dile a Claude Code: *"Reemplaza el calendario custom de la sección #agendar por un embed de Calendly con esta URL: [URL]"*.
5. **Publicar:**
   - En Replit, click en **Deploy** → **Static deployment** (gratis para HTML puro).
   - Te da una URL tipo `lorcagency.tudominio.replit.app`.
   - Para dominio propio (`lorcagency.com`): compra en Namecheap/GoDaddy y configura el CNAME en Replit.

---

## PASO 3 — Mejoras siguientes (cuando tengas tracción)

Pídele a Claude Code estas mejoras en orden, una por una:

1. **Google Analytics 4 + Meta Pixel** — para medir todo desde día uno.
2. **Calendly real embebido** en sección de agendar.
3. **Open Graph meta tags** — para que se vea bien al compartir en WhatsApp / redes.
4. **Sección de testimonios** debajo de casos.
5. **Blog / casos de estudio** — sistema simple basado en markdown.
6. **Sitemap.xml + robots.txt** — SEO básico.
7. **Lighthouse 100** — pídele que optimice performance, SEO y accesibilidad.

---

## Qué NO hacer aún

- No gastes en publicidad hasta tener 2-3 casos reales en el portafolio.
- No agregues 20 servicios. Con los 4 productos + 3 servicios actuales basta para validar.
- No compres dominio premium todavía — valida con el subdominio de Replit primero.
- No contrates diseñador — el sitio que te dejo ya está a nivel producción.

---

## Archivos en este workspace

- `index.html` — landing completa con typing hero, productos oscuros, servicios, casos, calendario funcional y CTA.
- `contacto.html` — página de contacto con formulario completo.
- `PROMPT-CLAUDE-CODE.md` — este documento.

Súbelos directo al Repl o usa el prompt de arriba para que Claude los genere desde cero.
