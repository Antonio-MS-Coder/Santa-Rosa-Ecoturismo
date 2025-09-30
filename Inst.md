Diseño de Landing “Santa Rosa” (v1)

Target: athleisure / wellness premium (vibe Lululemon + cacao ceremonies). Estética editorial, minimalista, con foco en naturaleza, performance consciente y comunidad local.

1) Estrategia de marca & voz
	•	Propuesta de valor: “Corre, respira y regenera. Experiencias con causa a 30 min de Santa Fe.”
	•	Tono: sobrio, cálido, preciso. Nada estridente; lujo funcional.
	•	Narrativa: performance ↔ bienestar ↔ impacto (reforestación + economía local).
	•	Prueba social: conteo de árboles apadrinados, fotos de comunidad, logos de aliados.

2) Arquitectura de información (one‑page con anclas)
	1.	Hero: claim + microcopy + CTA doble (“Reservar ahora” / “Explorar paquetes”). Imagen editorial.
	2.	Micro‑badges: “Reforestación real”, “Guías locales certificados”, “Reserva flexible”.
	3.	Paquetes (Tabs): Ecosystems · EcoPass · Running Club · Ruta Verde · Sendero & Sabor.
	4.	Qué incluye: bullet breve + iconos lineales; deja claro logística y tiempos.
	5.	Impacto: árboles, empleo local, compras a productores; mini‑story con cifras.
	6.	Calendario: próximas fechas (cards), filtro por categoría.
	7.	Galería: 6–8 fotos en grid responsivo (natural light).
	8.	FAQ: logística, clima, política de cancelación, nivel físico.
	9.	Mapa: ubicación aproximada + punto de reunión (Santa Fe) para shuttles.
	10.	Footer: políticas, contacto, redes, términos.

3) Visual & UI
	•	Color (Tailwind tokens sugeridos):
	•	Bosque: #0B2027
	•	Pino: #35524A
	•	Salvia: #DDE5D7
	•	Arena: #F5F3EF
	•	Cacao: #A67B5B
	•	Tipografías: Headings Playfair Display (serif elegante); cuerpo Inter (sans).
	•	Fotos: editorial, sin saturar; runners, manos, comida local, plantío; luz natural.
	•	Iconos: línea fina, minimalistas (árbol, shuttle, altitud, snack, pin, medalla).
	•	Motion: apariciones suaves al scroll; hover con leve lift/shadow; tabs con fade.
	•	CTA: botón sólido (Bosque) + contraste sobre Arena; sticky CTA móvil.

4) Paquetes & precios (v1 sugerido)

Rango definido por comparables; aquí fijamos precio recomendado (puede ajustarse).

Ecosystems – Reforestación + Hike + Comida
	•	Eco Básico — $1,350
Hike guiado + snack + adopción de 1 árbol.
	•	Eco Plus — $1,850
Hike + comida local + adopción de 1 árbol + sticker/pin.
	•	Eco Impacto — $2,300
Hike + comida + adopción de 3 árboles + visita breve a vivero.

EcoPass – Pase de Acceso & Recompensas (web)
	•	Pase Bosque Día — $220
Acceso, mapa digital, 1 actividad guiada corta.
	•	Pase Experiencias — $450
Acceso + 2 actividades + descuento en comida/merch.
	•	Pase Temporada — $1,200
90 días, acceso ilimitado + insignias + 1 invitado -50% en 1 visita.

Santa Rosa Running Club – Carreras & Transporte
	•	Runner Base — $900
Inscripción 5–10K (sin kit).
	•	Runner Kit — $1,250
Inscripción + playera + medalla + adopción 1 árbol.
	•	Runner Shuttle — $1,650
Lo anterior + transporte redondo desde Santa Fe.

Ruta Verde – Cultura & Gastronomía
	•	Ruta Local — $790
Caminata interpretativa + comida local.
	•	Ruta Taller — $1,250
Caminata + micro‑taller (45–60 min) + comida.
	•	Ruta Completa con Shuttle — $1,600
Todo + transporte redondo desde Santa Fe.

Sendero & Sabor – Base (Hike + Comida + Merch)
	•	Sendero & Sabor — $850
Hike (2–3 h) + comida local.
	•	Sendero Plus — $1,300
Hike + comida + gorra/termo + adopción 1 árbol.
	•	Privado 4–6 — $2,200 p/p
Ruta personalizada + anfitrión comunitario + comida extendida.

Nota: incluir leyenda “Precios orientativos IVA incluido; pueden variar por temporada y disponibilidad”.

5) Copys clave
	•	Hero H1: “Corre, respira y regenera.”
	•	Hero sub: “Experiencias con causa en Santa Rosa: trail, cultura y cocina local. Reserva y siembra árboles con cada visita.”
	•	CTA primario: “Reservar ahora”
CTA secundario: “Explorar paquetes”
	•	Impacto: “Cada salida deja huella verde: empleos locales, compras a productores y árboles apadrinados.”

6) Accesibilidad & UX
	•	Contraste AA mínimo 4.5:1.
	•	Alt text descriptivo; foco visible; botones ≥44px altura.
	•	Inputs con labels y error states claros; mensajes humanos.

7) Conversión & analítica
	•	Sticky CTA móvil; resumen de carrito liviano en modal.
	•	Eventos: click CTA, tab view, step checkout, faq open.
	•	Métricas de impacto en tiempo real (árboles apadrinados, km recorridos).

⸻

instructions.md

Objetivo

Construir una landing one‑page premium para “Santa Rosa” con estética editorial, clara y rápida de reservar. Debe ser responsiva, accesible, y lista para conectar a Stripe Payment Links (placeholder).

Tech stack (sugerido)
	•	Next.js 14 (App Router) + TypeScript
	•	Tailwind CSS + shadcn/ui (Cards, Tabs, Button, Accordion, Dialog)
	•	Framer Motion para micro‑animaciones
	•	Vercel deploy; OG Image automática
	•	PostHog o GA4 para eventos (opcional)

Estructura de carpetas

/src
  /app
    /(marketing)
      page.tsx
    /api (placeholder)
  /components
    Hero.tsx
    PackageTabs.tsx
    PackageCard.tsx
    ImpactStrip.tsx
    Calendar.tsx
    Gallery.tsx
    FAQ.tsx
    Map.tsx
    StickyCTA.tsx
  /lib
    packages.ts (JSON estático)
    analytics.ts
  /styles
    globals.css
/public
  /images (placeholders)

Design tokens (Tailwind)

Agregar a tailwind.config.ts:

extend: {
  colors: {
    bosque: '#0B2027',
    pino: '#35524A',
    salvia: '#DDE5D7',
    arena: '#F5F3EF',
    cacao: '#A67B5B',
  }
}

Tipografías

Usar Google Fonts: Playfair Display (headings) y Inter (body). Cargar en layout.tsx con next/font.

Componentes & comportamiento
	•	Hero: H1 + sub + 2 CTAs + foto. Fondo Arena, texto Bosque. Motion: fade‑up.
	•	PackageTabs: pestañas para 5 categorías. Mantener estado en URL hash.
	•	PackageCard: título, precio, bullets, duración, dificultad, incluye, CTA “Reservar”.
	•	ImpactStrip: 3 métricas (árboles, empleos, compras locales) con conteo animado.
	•	Calendar: cards de fechas (placeholder), botón “Ver más”.
	•	Gallery: 6–8 imágenes responsive.
	•	FAQ: Accordion con 6–8 preguntas.
	•	Map: iframe de Google Maps (aproximado) + punto de reunión Santa Fe.
	•	StickyCTA (móvil): botón flotante “Reservar ahora”.

Datos (packages.ts)

Copiar y ajustar este esquema:

export type Package = {
  id: string
  category: 'ecosystems' | 'ecopass' | 'running' | 'ruta' | 'sendero'
  name: string
  price: number
  currency: 'MXN'
  includes: string[]
  ctaLabel: string
  stripeUrl?: string // opcional
};

export const PACKAGES: Package[] = [
  { id:'eco-basico', category:'ecosystems', name:'Eco Básico', price:1350, currency:'MXN', includes:[
    'Hike guiado', 'Snack', 'Adopción de 1 árbol'
  ], ctaLabel:'Reservar' },
  { id:'eco-plus', category:'ecosystems', name:'Eco Plus', price:1850, currency:'MXN', includes:[
    'Hike + comida local', 'Adopción de 1 árbol', 'Sticker/Pin'
  ], ctaLabel:'Reservar' },
  { id:'eco-impacto', category:'ecosystems', name:'Eco Impacto', price:2300, currency:'MXN', includes:[
    'Hike + comida', 'Adopción de 3 árboles', 'Visita breve a vivero'
  ], ctaLabel:'Reservar' },

  { id:'eco-dia', category:'ecopass', name:'Pase Bosque Día', price:220, currency:'MXN', includes:[
    'Acceso al bosque', 'Mapa digital', 'Actividad guiada corta'
  ], ctaLabel:'Comprar pase' },
  { id:'eco-experiencias', category:'ecopass', name:'Pase Experiencias', price:450, currency:'MXN', includes:[
    'Acceso + 2 actividades', 'Descuento en comida/merch'
  ], ctaLabel:'Comprar pase' },
  { id:'eco-temporada', category:'ecopass', name:'Pase Temporada (90 días)', price:1200, currency:'MXN', includes:[
    'Acceso ilimitado', 'Insignias en web', '1 invitado -50% (1 visita)'
  ], ctaLabel:'Comprar pase' },

  { id:'runner-base', category:'running', name:'Runner Base', price:900, currency:'MXN', includes:[
    'Inscripción 5–10K (sin kit)'
  ], ctaLabel:'Inscribirme' },
  { id:'runner-kit', category:'running', name:'Runner Kit', price:1250, currency:'MXN', includes:[
    'Inscripción', 'Playera + medalla', 'Adopción 1 árbol'
  ], ctaLabel:'Inscribirme' },
  { id:'runner-shuttle', category:'running', name:'Runner Shuttle', price:1650, currency:'MXN', includes:[
    'Kit completo', 'Transporte redondo desde Santa Fe'
  ], ctaLabel:'Inscribirme' },

  { id:'ruta-local', category:'ruta', name:'Ruta Local', price:790, currency:'MXN', includes:[
    'Caminata interpretativa', 'Comida en socio local'
  ], ctaLabel:'Reservar' },
  { id:'ruta-taller', category:'ruta', name:'Ruta Taller', price:1250, currency:'MXN', includes:[
    'Caminata', 'Micro‑taller 45–60 min', 'Comida local'
  ], ctaLabel:'Reservar' },
  { id:'ruta-completa', category:'ruta', name:'Ruta Completa + Shuttle', price:1600, currency:'MXN', includes:[
    'Caminata + taller + comida', 'Transporte desde Santa Fe'
  ], ctaLabel:'Reservar' },

  { id:'sendero', category:'sendero', name:'Sendero & Sabor', price:850, currency:'MXN', includes:[
    'Hike 2–3 h', 'Comida local'
  ], ctaLabel:'Reservar' },
  { id:'sendero-plus', category:'sendero', name:'Sendero Plus', price:1300, currency:'MXN', includes:[
    'Hike + comida', 'Gorra/termo', 'Adopción 1 árbol'
  ], ctaLabel:'Reservar' },
  { id:'privado', category:'sendero', name:'Privado 4–6', price:2200, currency:'MXN', includes:[
    'Ruta personalizada', 'Anfitrión comunitario', 'Comida extendida'
  ], ctaLabel:'Reservar' }
];

Copys (usar tal cual, editables)
	•	Hero H1: “Corre, respira y regenera.”
	•	Hero sub: “Experiencias con causa en Santa Rosa: trail, cultura y cocina local. Reserva y siembra árboles con cada visita.”
	•	Badges: “Reforestación real” · “Guías locales” · “Reserva flexible”.
	•	Impacto H2: “Impacto real con cada paso”.
	•	Impacto bullets: “Árboles apadrinados”, “Empleos locales”, “Compras a productores”.
	•	FAQ (ejemplos): ¿Qué nivel físico necesito? / ¿Qué incluye el shuttle? / ¿Qué pasa si llueve? / Políticas de cancelación.

Accesibilidad
	•	Contraste AA mínimo; focus visible; alt text en todas las imágenes.
	•	Botones ≥44px; labels claros; validaciones con mensaje útil.

SEO & Meta
	•	Title: “Santa Rosa — Ecoturismo con causa: trail, cultura y cocina local”.
	•	Description: “Vive Santa Rosa: hikes, reforestación, rutas culturales y carreras. Reserva fácil, impacto real.”
	•	OG image: foto de bosque con titular.
	•	Favicon: hoja/árbol minimal.

Integraciones (placeholders)
	•	Stripe: stripeUrl por paquete (usar Payment Links cuando estén listos).
	•	Analítica: evento reserve_click con { packageId }.

QA checklist
	•	3 breakpoints listos (sm/md/lg).
	•	Lighthouse ≥90 en Perf/Acc/Best/SEO.
	•	Navegación por teclado completa.
	•	Texto no salta en motion reduce.

Nota legal

“Precios orientativos IVA incluido; pueden variar por temporada y disponibilidad.”

⸻

Fin v1.

⸻

Ruta alternativa: GitHub Pages + HTML/CSS + Google Forms (simple & robust)

Recomendación

Dado que:
	•	Quieren desplegar en GitHub Pages (sitio estático),
	•	El equipo no es técnico, y
	•	Se puede cobrar con Stripe Payment Links (solo botones/links), y capturar datos con Google Forms,

en esta fase conviene una versión Lite: HTML + CSS (con Tailwind vía CDN o CSS propio), un poco de JS vanilla solo si es necesario, más embeds (Google Forms, Google Maps, Google Calendar). Esta ruta es:
	•	Barata (sin servidores, sin build step complejo),
	•	Mantenible por no‑técnicos (editar texto en index.html),
	•	Escalable a futuro (podemos migrar a Next.js cuando haya equipo/tiempo).

Stack “Lite”
	•	Hosting: GitHub Pages.
	•	Estilos:
	•	Opción A: Tailwind Play CDN (rápido para prototipar)
	•	Opción B: CSS propio (más control, sin dependencia CDN)
	•	Formularios: Google Forms (embed responsive) o Typeform.
	•	Pagos: Stripe Payment Links (botones <a> por paquete).
	•	Analítica: GA4 o Plausible (script en <head>).

Estructura de carpetas

/
├─ index.html
├─ styles.css        # si usas CSS propio
├─ scripts.js        # opcional, solo si lo necesitas
└─ /assets
   ├─ /images
   └─ /icons

Tokens visuales (idénticos a la versión Pro)

Colores sugeridos:
	•	Bosque #0B2027 · Pino #35524A · Salvia #DDE5D7 · Arena #F5F3EF · Cacao #A67B5B
Tipografías: Playfair Display (headings) + Inter (texto).

index.html — esqueleto base

<!doctype html>
<html lang="es">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>Santa Rosa — Corre, respira y regenera</title>
  <meta name="description" content="Experiencias con causa en Santa Rosa: trail, cultura y cocina local. Reserva y siembra árboles con cada visita." />
  <!-- Tailwind Play CDN (rápido de iniciar). Para producción seria, pasar a build o CSS propio. -->
  <script src="https://cdn.tailwindcss.com"></script>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet">
  <style>
    :root{--bosque:#0B2027;--pino:#35524A;--salvia:#DDE5D7;--arena:#F5F3EF;--cacao:#A67B5B}
    body{font-family:Inter,system-ui,-apple-system,Segoe UI,Roboto,"Helvetica Neue",Arial,"Noto Sans","Apple Color Emoji","Segoe UI Emoji"}
    .serif{font-family:"Playfair Display",serif}
  </style>
</head>
<body class="bg-[var(--arena)] text-[var(--bosque)]">
  <!-- Hero -->
  <header class="relative overflow-hidden">
    <section class="mx-auto max-w-6xl px-6 py-20 grid gap-8 md:grid-cols-2 items-center">
      <div>
        <h1 class="serif text-4xl md:text-5xl font-semibold leading-tight">Corre, respira y regenera.</h1>
        <p class="mt-4 text-lg md:text-xl">Experiencias con causa en Santa Rosa: trail, cultura y cocina local. Reserva y siembra árboles con cada visita.</p>
        <div class="mt-8 flex gap-3">
          <a href="#paquetes" class="inline-flex items-center justify-center rounded-xl bg-[var(--bosque)] px-5 py-3 text-white">Explorar paquetes</a>
          <a href="#reservar" class="inline-flex items-center justify-center rounded-xl border border-[var(--bosque)] px-5 py-3">Reservar ahora</a>
        </div>
        <div class="mt-6 flex gap-4 text-sm opacity-80">
          <span>🌱 Reforestación real</span><span>•</span><span>🧭 Guías locales</span><span>•</span><span>↺ Reserva flexible</span>
        </div>
      </div>
      <img src="assets/images/hero.jpg" alt="Bosque de Santa Rosa" class="rounded-3xl shadow-lg w-full object-cover h-72 md:h-[420px]"/>
    </section>
  </header>

  <!-- Paquetes (tabs simples sin JS: radios + CSS) -->
  <section id="paquetes" class="mx-auto max-w-6xl px-6 py-16">
    <h2 class="serif text-3xl md:text-4xl font-semibold">Paquetes</h2>
    <p class="mt-2 opacity-80">Elige tu experiencia. Todas contribuyen a la reforestación y a la economía local.</p>

    <div class="mt-8">
      <div class="flex flex-wrap gap-2">
        <button class="tab active" data-tab="ecosystems">Ecosystems</button>
        <button class="tab" data-tab="ecopass">EcoPass</button>
        <button class="tab" data-tab="running">Running Club</button>
        <button class="tab" data-tab="ruta">Ruta Verde</button>
        <button class="tab" data-tab="sendero">Sendero & Sabor</button>
      </div>

      <!-- Contenedores por categoría -->
      <div class="tab-panels mt-6 space-y-6">
        <div class="panel" id="panel-ecosystems">
          <!-- Card ejemplo -->
          <article class="rounded-3xl bg-white p-6 shadow-sm ring-1 ring-black/5">
            <div class="flex items-baseline justify-between gap-4">
              <h3 class="serif text-2xl">Eco Básico</h3>
              <p class="text-lg font-semibold">$1,350 MXN</p>
            </div>
            <ul class="mt-3 list-disc pl-5 space-y-1">
              <li>Hike guiado</li>
              <li>Snack</li>
              <li>Adopción de 1 árbol</li>
            </ul>
            <a href="https://buy.stripe.com/your-payment-link" class="mt-5 inline-flex rounded-xl bg-[var(--bosque)] px-4 py-2 text-white">Reservar</a>
          </article>
          <!-- Duplicar cards para cada paquete... -->
        </div>

        <div class="panel hidden" id="panel-ecopass">...</div>
        <div class="panel hidden" id="panel-running">...</div>
        <div class="panel hidden" id="panel-ruta">...</div>
        <div class="panel hidden" id="panel-sendero">...</div>
      </div>
    </div>
  </section>

  <!-- Impacto -->
  <section class="bg-[var(--salvia)] py-14">
    <div class="mx-auto max-w-6xl px-6 grid gap-6 md:grid-cols-3 text-center">
      <div><div class="serif text-4xl">1,250+</div><div class="opacity-80">Árboles apadrinados</div></div>
      <div><div class="serif text-4xl">50+</div><div class="opacity-80">Empleos locales</div></div>
      <div><div class="serif text-4xl">80%</div><div class="opacity-80">Compras a productores</div></div>
    </div>
  </section>

  <!-- Formulario (Google Forms embed) -->
  <section id="reservar" class="mx-auto max-w-3xl px-6 py-16">
    <h2 class="serif text-3xl md:text-4xl font-semibold">Reserva / Solicita info</h2>
    <p class="mt-2 opacity-80">Déjanos tus datos y el paquete de interés.</p>
    <div class="mt-6 aspect-video w-full overflow-hidden rounded-2xl shadow">
      <!-- Reemplaza la URL del form -->
      <iframe src="https://docs.google.com/forms/d/e/FORM_ID/viewform?embedded=true" width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0">Cargando…</iframe>
    </div>
  </section>

  <!-- FAQ (detalles/summary nativo) -->
  <section class="mx-auto max-w-3xl px-6 pb-16">
    <h2 class="serif text-3xl md:text-4xl font-semibold">Preguntas frecuentes</h2>
    <details class="mt-6 rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5"><summary class="cursor-pointer font-semibold">¿Qué nivel físico necesito?</summary><p class="mt-2 opacity-80">Nivel principiante a intermedio. Indicamos desnivel y duración por ruta.</p></details>
    <details class="mt-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5"><summary class="cursor-pointer font-semibold">¿Qué incluye el shuttle?</summary><p class="mt-2 opacity-80">Transporte redondo desde Santa Fe en horario fijo.</p></details>
    <details class="mt-3 rounded-xl bg-white p-4 shadow-sm ring-1 ring-black/5"><summary class="cursor-pointer font-semibold">¿Qué pasa si llueve?</summary><p class="mt-2 opacity-80">Reprogramamos o ofrecemos crédito. Seguridad primero.</p></details>
  </section>

  <!-- Mapa (embed) -->
  <section class="bg-white py-12">
    <div class="mx-auto max-w-6xl px-6 grid gap-6 md:grid-cols-2 items-center">
      <div>
        <h2 class="serif text-3xl md:text-4xl font-semibold">¿Dónde?</h2>
        <p class="mt-2 opacity-80">A 30–40 min de Santa Fe. Punto de reunión para shuttles: <strong>XYZ</strong>.</p>
      </div>
      <div class="aspect-video w-full overflow-hidden rounded-2xl shadow">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!..." width="100%" height="100%" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>
    </div>
  </section>

  <footer class="mx-auto max-w-6xl px-6 py-10 text-sm opacity-80">
    <p>Precios orientativos IVA incluido; pueden variar por temporada y disponibilidad.</p>
    <p class="mt-1">© Santa Rosa</p>
  </footer>

  <script>
    // Tabs simples
    const tabs = document.querySelectorAll('.tab');
    const panels = {
      ecosystems: document.getElementById('panel-ecosystems'),
      ecopass: document.getElementById('panel-ecopass'),
      running: document.getElementById('panel-running'),
      ruta: document.getElementById('panel-ruta'),
      sendero: document.getElementById('panel-sendero'),
    };
    tabs.forEach(btn=>btn.addEventListener('click',()=>{
      tabs.forEach(b=>b.classList.remove('active'));
      btn.classList.add('active');
      const key = btn.dataset.tab;
      Object.values(panels).forEach(p=>p.classList.add('hidden'));
      panels[key]?.classList.remove('hidden');
    }));
  </script>
  <style>
    .tab{padding:.5rem 1rem;border-radius:.75rem;border:1px solid var(--bosque);opacity:.8}
    .tab.active{background:var(--bosque);color:#fff;opacity:1}
  </style>
</body>
</html>

Cómo embeber Google Forms
	1.	Crea el formulario → “Enviar” → icono <> Insertar HTML.
	2.	Copia el <iframe> y reemplaza FORM_ID en la sección Reserva.

Cómo usar Stripe Payment Links
	1.	Crea el Payment Link por paquete en Stripe.
	2.	Coloca la URL en el href del botón “Reservar”.
	3.	Para tracking simple, añade utms (?utm_source=landing&utm_campaign=sr_packages).

Cómo publicar en GitHub Pages
	1.	Crea repo → sube index.html (y assets).
	2.	Settings → Pages → Source: Deploy from a branch → main → /root.
	3.	Espera el build. Para dominio propio: agrega CNAME con tu dominio y configura DNS.

Accesibilidad mínima
	•	Contraste ≥ 4.5:1, alt en imágenes, summary/details para acordeones, foco visible.

Roadmap de evolución
	•	v1 (hoy): HTML/CSS + embeds (esto).
	•	v2: JSON de paquetes + render dinámico con JS para evitar duplicación.
	•	v3: Migrar a SSG (Eleventy) o Next.js cuando el equipo esté listo.