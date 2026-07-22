import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import convertImage from "./assets/seo-geo-evolution.png";
import overviewImage from "./assets/voixero-overview.png";
import benefitsImage from "./assets/voixero-benefits.png";

const icons = {
  arrow: "→",
  bot: "◎",
  brain: "✦",
  phone: "☎",
  spark: "✧",
  globe: "◌",
  users: "◉",
  gauge: "◒",
  check: "✓",
  line: "⌁",
  zap: "⚡",
  message: "▱",
  monitor: "▤",
  settings: "⚙",
  shield: "▣",
  target: "◎",
  cloud: "☁"
};
const calendlyLink = "https://calendly.com/voixero_demo/30min";
const heroCards = [
  { title: "KI Kundendienst", icon: "bot", text: "Automatisiert bis zu 75% der Anfragen – schnell, konsistent und 24/7." },
  { title: "Mensch im Mittelpunkt", icon: "users", text: "KI erledigt das Wiederkehrende. Menschen lösen das Wichtige." },
  { title: "GEO Optimierung", icon: "globe", text: "Mehr Sichtbarkeit in ChatGPT, Google AI, Perplexity & Co." }
];

const positioningPoints = ["reibungslose Integration", "optimale Performance", "maximale Automatisierung", "höhere Sichtbarkeit", "mehr Abschlüsse"];

const cogniaFeatures = [
  ["24/7 verfügbar", "Keine Schichten. Keine Ausfälle. Immer da.", "phone"],
  ["Sofort skalierbar", "Von 100 auf 10.000 Anrufe ohne Training.", "gauge"],
  ["Mensch + KI", "KI macht das Einfache. Menschen das Wichtige.", "users"],
  ["Alle Kanäle", "Telefon, Mail, Chat, WhatsApp und Social Media.", "message"],
  ["30 Sprachen", "Ihre Kunden sprechen nicht alle Deutsch. Cognia schon.", "globe"],
  ["Lernt kontinuierlich", "Jeder Anruf macht Cognia besser.", "brain"],
  ["GenAI ready-to-use", "Produktiv in Tagen, nicht Monaten.", "spark"],
  ["Multi-Agents", "Vertrieb, Support, Buchhaltung – eine Plattform.", "bot"],
  ["Nahtlose Integration", "Ihre Systeme bleiben. Cognia passt sich an.", "settings"]
];

const convertBlocks = [
  {
    title: "KI-Scoring immer im Fokus",
    icon: "gauge",
    dashboardType: "AI Visibility",
    items: ["Schnellkorrekturen mit KI-Empfehlung", "Automatische KI-Analyse des Wettbewerbs", "KI-Assistent immer an Ihrer Seite", "KI-Insights zu Inhalten & Produkten, die Kunden aktuell suchen"]
  },
  {
    title: "Echtzeit Monitoring",
    icon: "monitor",
    dashboardType: "Monitor",
    items: ["Alle Informationen auf einen Blick", "Entwicklung relevanter KPI-Werte", "KI-Analyse der Sentiment-Werte", "Social Media Auswertung der Communities"]
  },
  {
    title: "Autopilot-Assistent",
    icon: "zap",
    dashboardType: "Autopilot",
    items: ["Optimierungen durch die KI-Engine", "Vollautomatisch oder mit Freigabe", "Empfehlungen direkt umsetzen", "Minimaler Aufwand – maximaler Erfolg"]
  }
];

const pricing = {
  cognia: [
    {
      name: "Cognia Start",
      price: "ab CHF 890",
      period: "/ Monat",
      description: "Für Unternehmen, die KI-Telefonie strukturiert testen und erste Prozesse automatisieren möchten.",
      features: ["1 KI-Agent", "bis 500 Gespräche / Monat", "Basis-Wissensdatenbank", "Standard-Reporting", "E-Mail Support"],
      cta: "Demo anfragen"
    },
    {
      name: "Cognia Growth",
      price: "ab CHF 1'890",
      period: "/ Monat",
      description: "Für wachsende Teams mit mehreren Use Cases, höherem Volumen und CRM-Anbindung.",
      features: ["bis 3 KI-Agenten", "bis 2'500 Gespräche / Monat", "CRM-/Helpdesk-Integration", "Mehrsprachigkeit", "Qualitäts-Dashboard", "Priority Support"],
      cta: "Beratung buchen",
      highlighted: true
    },
    {
      name: "Cognia Enterprise",
      price: "Individuell",
      period: "",
      description: "Für komplexe Service-Organisationen mit individuellen Workflows, SLA und Integrationen.",
      features: ["unlimitierte Agenten möglich", "individuelle Gesprächsvolumen", "Custom Integrationen", "SLA & Governance", "Workshops & Enablement"],
      cta: "Angebot erhalten"
    }
  ],
  convert: [
    {
      name: "Convert Start",
      price: "ab CHF 690",
      period: "/ Monat",
      description: "Für Websites und kleinere Shops, die ihre KI-Sichtbarkeit professionell aufbauen wollen.",
      features: ["GEO Visibility Score", "bis 50 Seiten / Produkte", "Prompt Monitoring", "Basis-Empfehlungen", "Monatliches Reporting"],
      cta: "90 Tage Demo"
    },
    {
      name: "Convert Growth",
      price: "ab CHF 1'490",
      period: "/ Monat",
      description: "Für etablierte Shops und KMU mit Wettbewerbstracking und kontinuierlicher Optimierung.",
      features: ["bis 500 Seiten / Produkte", "Competitor Intelligence", "Sentiment Monitoring", "Autopilot mit Freigabe", "Priorisierte KI-Empfehlungen", "Priority Support"],
      cta: "Demo starten",
      highlighted: true
    },
    {
      name: "Convert Enterprise",
      price: "Individuell",
      period: "",
      description: "Für grössere Shops, Portale und Multi-Brand Setups mit hoher Komplexität.",
      features: ["Custom Seiten-/Produktvolumen", "Multi-Brand Monitoring", "API-/Shop-Anbindungen", "Custom Dashboards", "Strategische GEO-Beratung"],
      cta: "Angebot erhalten"
    }
  ]
};

function runSmokeTests() {
  console.assert(heroCards.length === 3, "Hero should contain three core cards.");
  console.assert(positioningPoints.includes("mehr Abschlüsse"), "Positioning points should include sales outcome.");
  console.assert(cogniaFeatures.length === 9, "Cognia should contain nine feature cards.");
  console.assert(convertBlocks.length === 3, "Convert should contain three product sections.");
  console.assert(pricing.cognia.length === 3, "Cognia should contain three pricing tiers.");
  console.assert(pricing.convert.length === 3, "Convert should contain three pricing tiers.");
}
runSmokeTests();

function Icon({ name, className = "", size = "text-3xl" }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-flex items-center justify-center font-light leading-none ${size} ${className}`}
    >
      {icons[name] || icons.spark}
    </span>
  );
}

function Button({ children, variant = "solid", className = "", href = "#/kontakt" }) {
  const base = "inline-flex items-center justify-center rounded-xl px-6 py-4 text-base md:text-lg font-semibold transition duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-200 focus:ring-offset-2 focus:ring-offset-[#070b1c]";
  const styles = variant === "outline" ? "border border-cyan-300/35 bg-transparent text-cyan-100 hover:bg-cyan-300/10" : "bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-950/30 hover:bg-cyan-200";
  const isExternal = href.startsWith("http");

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      className={`${base} ${styles} ${className}`}
    >
      {children}
    </a>
  );
}

function Card({ children, className = "" }) {
  return <div className={`rounded-3xl border border-cyan-300/15 bg-white/[0.035] ${className}`}>{children}</div>;
}

function Logo() {
  return <div className="select-none text-2xl font-light tracking-[0.32em] text-cyan-300 md:text-4xl">VOIXERO</div>;
}

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-cyan-300/10 bg-[#070b1c]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a href="#/" aria-label="Voixero Startseite" onClick={closeMenu}>
          <Logo />
        </a>

        <nav className="hidden items-center gap-10 text-lg text-white/75 md:flex">
          <a href="#/" className="font-semibold text-cyan-300">Startseite</a>
          <a href="#/cognia" className="transition hover:text-cyan-300">Cognia</a>
          <a href="#/convert" className="transition hover:text-cyan-300">Convert</a>
          <a href="#/preise" className="transition hover:text-cyan-300">Preise</a>
        </nav>

        <div className="hidden md:block">
          <Button href={calendlyLink} className="px-5 py-3 text-sm md:text-base"> Termin vereinbaren</Button>
        </div>

        <button
          type="button"
          aria-label="Menü öffnen"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-2xl text-cyan-200 md:hidden"
        >
          {isOpen ? "×" : "☰"}
        </button>
      </div>

      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="border-t border-cyan-300/10 bg-[#070b1c] px-6 py-6 shadow-2xl shadow-cyan-950/30 md:hidden"
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-4 text-lg text-white/80">
            <a onClick={closeMenu} href="#/" className="rounded-xl border border-cyan-300/10 bg-white/[0.03] px-4 py-3 text-cyan-300">Startseite</a>
            <a onClick={closeMenu} href="#/cognia" className="rounded-xl border border-cyan-300/10 bg-white/[0.03] px-4 py-3 hover:text-cyan-300">Cognia</a>
            <a onClick={closeMenu} href="#/convert" className="rounded-xl border border-cyan-300/10 bg-white/[0.03] px-4 py-3 hover:text-cyan-300">Convert</a>
            <a onClick={closeMenu} href="#/preise" className="rounded-xl border border-cyan-300/10 bg-white/[0.03] px-4 py-3 hover:text-cyan-300">Preise</a>
            <Button href={calendlyLink} className="mt-2 w-full py-4" onClick={closeMenu}>Termin vereinbaren</Button>
          </nav>
        </motion.div>
      )}
    </header>
  );
}

const fadeUp = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.65, ease: "easeOut" }, viewport: { once: true, amount: 0.25 } };
function Highlight({ children }) { return <span className="font-bold text-cyan-300">{children}</span>; }

function AnimatedOrb() {
  return (
    <div className="relative mx-auto flex h-[420px] w-full max-w-[560px] items-center justify-center">
      <motion.div className="absolute h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" animate={{ scale: [1, 1.22, 1], opacity: [0.45, 0.85, 0.45] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute h-80 w-80 rounded-full border border-cyan-300/20" animate={{ rotate: 360 }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }} />
      <motion.div className="absolute h-64 w-64 rounded-full border border-violet-300/20" animate={{ rotate: -360 }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }} />
      <motion.div className="relative h-52 w-52 rounded-full bg-[radial-gradient(circle_at_35%_25%,#85ffff_0%,#1CADC6_24%,#10172f_58%,#070b1c_100%)] shadow-2xl shadow-cyan-400/30" animate={{ y: [-10, 12, -10], rotate: [0, 6, 0], scale: [1, 1.04, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
      {heroCards.map((item, i) => {
        const positions = ["left-0 top-8", "right-0 top-24", "left-10 bottom-4"];
        return (
          <motion.div key={item.title} className={`absolute ${positions[i]} w-56 rounded-2xl border border-cyan-300/20 bg-[#070b1c]/75 p-4 shadow-xl shadow-cyan-950/40 backdrop-blur-xl`} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: [0, -8, 0] }} transition={{ opacity: { delay: 0.4 + i * 0.18 }, y: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" } }}>
            <div className="mb-2 flex items-center gap-3 text-cyan-200"><Icon name={item.icon} size="text-2xl" /><span className="font-bold">{item.title}</span></div>
            <p className="text-sm leading-relaxed text-white/65">{item.text}</p>
          </motion.div>
        );
      })}
    </div>
  );
}

function AnimatedParticles() {
  return <div className="pointer-events-none absolute inset-0 overflow-hidden">{Array.from({ length: 26 }).map((_, i) => <motion.span key={i} className="absolute h-1 w-1 rounded-full bg-cyan-300/60" style={{ left: `${(i * 37) % 100}%`, top: `${(i * 53) % 100}%` }} animate={{ y: [-20, 22, -20], opacity: [0.15, 0.8, 0.15], scale: [1, 1.8, 1] }} transition={{ duration: 3 + (i % 7) * 0.45, repeat: Infinity, delay: i * 0.11, ease: "easeInOut" }} />)}</div>;
}

function Home() {
  return (
    <>
      <section id="home" className="relative min-h-screen overflow-hidden bg-[#070b1c] px-6 pt-44 text-white md:pt-36">
        <AnimatedParticles />
        <motion.div className="absolute left-1/2 top-1/4 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" animate={{ scale: [1, 1.12, 1], x: [-20, 20, -20] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} />
        <div className="relative mx-auto grid min-h-[calc(100vh-9rem)] max-w-7xl items-center gap-14 py-16 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <motion.div className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100" animate={{ boxShadow: ["0 0 0px rgba(28,173,198,0)", "0 0 28px rgba(28,173,198,.28)", "0 0 0px rgba(28,173,198,0)"] }} transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}><Icon name="spark" size="text-lg" /> Die Zukunft ist jetzt</motion.div>
            <h1 className="max-w-3xl text-5xl font-light leading-tight md:text-7xl">Die <Highlight>Zukunft</Highlight> der perfekten Symbiose zwischen <Highlight>Mensch</Highlight> und <Highlight>KI</Highlight></h1>
            <motion.div className="mt-8 h-1 rounded-full bg-gradient-to-r from-cyan-300 to-transparent" initial={{ width: 0, opacity: 0 }} animate={{ width: 220, opacity: 1 }} transition={{ delay: 0.45, duration: 0.9 }} />
            <div className="mt-10 space-y-4 text-xl text-white/80 md:text-2xl"><p><Highlight>optimiert</Highlight> und automatisiert durch KI</p><p><Highlight>perfektioniert</Highlight> und koordiniert durch Menschen</p><p><Highlight>maximiert</Highlight> Sichtbarkeit Ihrer Produkte und Dienstleistungen</p></div>
            <div className="mt-10 flex flex-wrap gap-4"><Button href="#/kontakt" className="px-7 py-5">Jetzt Termin vereinbaren <Icon name="arrow" size="text-2xl" className="ml-2" /></Button><Button href="#/cognia" variant="outline" className="px-7 py-5">Unsere Lösungen</Button></div>
          </motion.div>
          <AnimatedOrb />
        </div>
      </section>
      <OverviewSection />
      <Positioning />
      <SolutionTeaser />
    </>
  );
}

function OverviewSection() {
  return (
    <section className="bg-[#070b1c] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl text-center">
        <motion.div {...fadeUp}>
          <p className="mb-3 text-cyan-300">Voixero Plattform</p>
          <h2 className="text-4xl font-light leading-tight md:text-6xl">
            Eine Plattform für <Highlight>Service</Highlight>, <Highlight>Automatisierung</Highlight> und <Highlight>GEO</Highlight>.
          </h2>
          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-white/70">
            Cognia automatisiert Kundenkontakte. Menschen sichern Qualität. Convert macht Produkte und Dienstleistungen in KI-Antworten sichtbar.
          </p>
        </motion.div>
        <div className="mt-14 overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-white/[0.035] p-3 shadow-[0_0_100px_rgba(28,173,198,0.22)]">
          <img
            src={overviewImage}
            alt="Voixero Plattform Übersicht"
            className="w-full rounded-[1.5rem] object-cover"
          />
        </div>
      </div>
    </section>
  );
}

function Positioning() {
  return (
    <section className="bg-[#070b1c] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <img
          src={benefitsImage}
          alt="Voixero Vorteile"
          className="w-full rounded-3xl border border-cyan-300/10 shadow-[0_0_80px_rgba(34,211,238,0.12)]"
        />
      </div>
    </section>
  );
}
function SolutionTeaser() {
  return <section className="bg-[#070b1c] px-6 py-24 text-white"><div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2"><ProductCard title="Voixero Cognia" subtitle="KI-Telefonlösung für Service, Support und Vertrieb" text="Automatisiert Kundenkontakte in Echtzeit, integriert sich in bestehende Systeme und entlastet Teams ohne Qualitätsverlust." href="#/cognia" icon="phone" /><ProductCard title="Voixero Convert" subtitle="GEO-Optimierung für Websites und Webshops" text="Macht Ihre Produkte und Dienstleistungen sichtbar in KI-Antworten und verwandelt neuen KI-Traffic in Umsatz." href="#/convert" icon="globe" /></div></section>;
}

function ProductCard({ title, subtitle, text, href, icon }) {
  return <motion.a {...fadeUp} href={href} className="group rounded-[2rem] border border-cyan-300/15 bg-white/[0.035] p-8 shadow-2xl shadow-cyan-950/20 transition hover:border-cyan-300/40 hover:bg-cyan-300/5"><Icon name={icon} className="mb-8 h-16 w-16 rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-300" /><p className="mb-3 text-cyan-300">{subtitle}</p><h3 className="text-4xl font-light text-white">{title}</h3><p className="mt-5 text-xl leading-relaxed text-white/65">{text}</p><div className="mt-8 text-lg font-bold text-cyan-200">Mehr erfahren <span className="transition group-hover:translate-x-2 inline-block">→</span></div></motion.a>;
}

function ProductHero({ label, title, text, primary, secondary, visual }) {
  return (
    <section className="relative overflow-hidden bg-[#070b1c] px-6 pb-20 pt-48 text-white md:pt-40">
      <AnimatedParticles />
      <div className="absolute right-0 top-20 h-[520px] w-[520px] rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="max-w-3xl"
        >
          <p className="mb-5 text-cyan-300">{label}</p>
          <h1 className="text-5xl font-light leading-tight md:text-7xl">{title}</h1>
          <p className="mt-8 text-2xl leading-relaxed text-white/75">{text}</p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href="#/kontakt" className="px-7 py-5">
              {primary} <Icon name="arrow" size="text-2xl" className="ml-2" />
            </Button>
            <Button href="#/preise" variant="outline" className="px-7 py-5">
              {secondary}
            </Button>
          </div>
        </motion.div>

        <div className="mt-16">
          {visual}
        </div>
      </div>
    </section>
  );
}

function CogniaPage() {
  return <><ProductHero label="Voixero Cognia" title={<>KI-Telefonie, die <Highlight>Service</Highlight> skalierbar macht.</>} text="Cognia nimmt Anrufe entgegen, versteht Anliegen, beantwortet Fragen, erstellt Tickets und übergibt komplexe Fälle an Menschen – zuverlässig, mehrsprachig und rund um die Uhr." primary="Cognia Demo buchen" secondary="Preise ansehen" visual={<CogniaVisual />} /><section className="bg-[#080d22] px-6 py-24 text-white"><div className="mx-auto max-w-7xl"><motion.div {...fadeUp} className="mb-14"><p className="mb-3 text-cyan-300">Warum Cognia</p><h2 className="text-4xl font-light md:text-6xl">Der einfachste Weg zu <Highlight>KI-Kundendienst</Highlight> in Echtzeit.</h2></motion.div><div className="grid gap-4 md:grid-cols-3">{cogniaFeatures.map(([title, text, icon], idx) => <Card key={title} className="p-6"><div className="flex gap-5"><Icon name={icon} className="h-14 w-14 shrink-0 rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-300" /><div><div className="mb-2 text-xl font-bold text-cyan-200">{idx + 1}. {title}</div><p className="text-white/65">{text}</p></div></div></Card>)}</div></div></section><PricingSection product="cognia" title="Cognia Preise" subtitle="Skalierbar nach Gesprächsvolumen, Integrationen und gewünschtem Automatisierungsgrad." /></>;
}

function CogniaVisual() {
  return <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8 }} className="rounded-[2rem] border border-cyan-300/20 bg-white/[0.035] p-7 shadow-2xl shadow-cyan-950/30"><div className="mb-6 inline-flex rounded-lg bg-emerald-400/15 px-3 py-2 text-sm text-emerald-200">System bereit</div><div className="grid grid-cols-2 gap-4 md:grid-cols-3">{["98% Verständnis", "1.2 Sek. Antwort", "24/7 verfügbar", "100% KI Gespräche", "92% Erfolgsquote", "4.8/5 Bewertung"].map((metric) => <div className="rounded-2xl border border-cyan-300/10 bg-black/20 p-5 text-center text-white/75" key={metric}>{metric}</div>)}</div><div className="mt-6 rounded-2xl border border-cyan-300/10 bg-cyan-300/10 p-5"><p className="text-cyan-100">Live Call Simulation</p><p className="mt-2 text-white/65">„Guten Tag, ich helfe Ihnen gerne. Geht es um eine Bestellung, eine Rechnung oder eine technische Frage?“</p></div></motion.div>;
}

function ConvertPage() {
  return <><ProductHero label="Voixero Convert" title={<>Aus SEO wird <Highlight>GEO</Highlight>.</>} text="Convert optimiert die KI-Sichtbarkeit Ihrer Website oder Ihres Webshops für ChatGPT, Google AI, Perplexity & Co. – damit Ihre Marke gefunden, verstanden und empfohlen wird." primary="90 Tage Demo starten" secondary="Preise ansehen" visual={<ConvertVisual />} /><section className="bg-[#111025] px-6 py-24 text-white"><div className="mx-auto max-w-7xl"><motion.div {...fadeUp} className="mb-14"><p className="mb-3 text-cyan-300">Convert Module</p><h2 className="text-4xl font-light md:text-6xl">Von Sichtbarkeit zu <Highlight>mehr Umsatz</Highlight>.</h2></motion.div><div className="grid gap-8">{convertBlocks.map((block) => <motion.div {...fadeUp} key={block.title} className="grid gap-10 rounded-[2rem] border border-cyan-300/15 bg-white/[0.035] p-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"><div><Icon name={block.icon} className="mb-5 h-14 w-14 rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-300" /><h3 className="mb-6 text-4xl font-light"><Highlight>{block.title}</Highlight></h3><ul className="space-y-4 text-xl text-white/75">{block.items.map((item) => <li key={item} className="flex gap-3"><Icon name="check" size="text-xl" className="mt-1 shrink-0 text-cyan-300" />{item}</li>)}</ul></div><ConvertDashboard type={block.dashboardType} /></motion.div>)}</div></div></section><PricingSection product="convert" title="Convert Preise" subtitle="Für Websites, Shops und Unternehmen, die in KI-Antworten sichtbar werden wollen." /></>;
}

function ConvertVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-3xl border border-cyan-300/20 bg-[#070b1c] p-3 shadow-2xl shadow-cyan-950/30"
    >
      <img
        src={convertImage}
        alt="Voixero Convert"
        className="w-full rounded-2xl object-cover shadow-[0_0_80px_rgba(28,173,198,0.25)]"
      />
    </motion.div>
  );
}

function ConvertDashboard({ type }) {
  return <div className="rounded-3xl bg-white p-6 text-slate-900 shadow-2xl"><div className="mb-5 flex items-center justify-between border-b pb-4"><div className="font-bold text-slate-800">VOIXERO Convert</div><div className="rounded-full bg-cyan-50 px-3 py-1 text-sm text-cyan-700">{type}</div></div><div className="grid gap-4 md:grid-cols-3"><div className="rounded-2xl border p-4"><Icon name="gauge" className="mb-3 text-cyan-600" /><div className="text-3xl font-bold">78</div><p className="text-sm text-slate-500">Visibility Score</p></div><div className="rounded-2xl border p-4"><Icon name="line" className="mb-3 text-cyan-600" /><div className="text-3xl font-bold">#3.2</div><p className="text-sm text-slate-500">Ø Position</p></div><div className="rounded-2xl border p-4"><Icon name="spark" className="mb-3 text-cyan-600" /><div className="text-3xl font-bold">88</div><p className="text-sm text-slate-500">Sentiment</p></div></div><div className="mt-5 h-32 rounded-2xl border bg-gradient-to-br from-cyan-50 to-white p-4"><div className="h-full rounded-xl border border-cyan-100 bg-[linear-gradient(110deg,transparent_20%,rgba(28,173,198,.16),transparent_80%)]" /></div></div>;
}

function PricingPage() {
  return <><section className="bg-[#070b1c] px-6 pb-10 pt-40 text-white"><div className="mx-auto max-w-5xl text-center"><p className="mb-4 text-cyan-300">Preise</p><h1 className="text-5xl font-light md:text-7xl">Transparente Pakete. <Highlight>Skalierbar</Highlight> nach Bedarf.</h1><p className="mx-auto mt-7 max-w-3xl text-xl text-white/70">Die Preise sind als Startpunkte gedacht. Finale Angebote hängen von Volumen, Integrationen, Sprachen und Betriebsmodell ab.</p></div></section><PricingSection product="cognia" title="Voixero Cognia" subtitle="KI-Telefonie und Kundendienst-Automatisierung." /><PricingSection product="convert" title="Voixero Convert" subtitle="GEO, KI-Sichtbarkeit und Conversion-Optimierung." /></>;
}

function PricingSection({ product, title, subtitle }) {
  return <section className="bg-[#080d22] px-6 py-20 text-white"><div className="mx-auto max-w-7xl"><motion.div {...fadeUp} className="mb-10"><p className="mb-3 text-cyan-300">{subtitle}</p><h2 className="text-4xl font-light md:text-6xl">{title}</h2></motion.div><div className="grid gap-6 lg:grid-cols-3">{pricing[product].map((tier) => <PricingCard key={tier.name} tier={tier} />)}</div><p className="mt-8 text-sm text-white/45">Alle Preise exkl. MwSt. und vorbehaltlich finaler Leistungsdefinition. Setup, Integrationen oder Sonderentwicklungen können separat offeriert werden.</p></div></section>;
}

function PricingCard({ tier }) {
  return <Card className={`relative p-7 ${tier.highlighted ? "border-cyan-300/50 bg-cyan-300/10 shadow-2xl shadow-cyan-950/30" : ""}`}>{tier.highlighted && <div className="absolute right-5 top-5 rounded-full bg-cyan-300 px-3 py-1 text-sm font-bold text-slate-950">Empfohlen</div>}<h3 className="text-3xl font-light text-white">{tier.name}</h3><div className="mt-5 flex items-end gap-2"><span className="text-4xl font-bold text-cyan-300">{tier.price}</span><span className="pb-1 text-white/50">{tier.period}</span></div><p className="mt-5 min-h-[88px] text-white/65">{tier.description}</p><ul className="mt-7 space-y-3">{tier.features.map((feature) => <li key={feature} className="flex gap-3 text-white/75"><Icon name="check" size="text-lg" className="mt-1 text-cyan-300" />{feature}</li>)}</ul><Button href="#/kontakt" className="mt-8 w-full py-4">{tier.cta}</Button></Card>;
}

function ContactPage() {
  return (
    <section id="kontakt" className="min-h-screen bg-[#070b1c] px-6 py-40 text-white">
      <motion.div {...fadeUp} className="mx-auto max-w-4xl text-center">
        <Logo />

        <h1 className="mt-10 text-5xl font-light md:text-7xl">
          Bereit für den nächsten Schritt?
        </h1>

        <p className="mx-auto mt-7 max-w-2xl text-xl text-white/70">
          Buchen Sie eine Demo für Cognia oder Convert. Wir prüfen gemeinsam Potenzial,
          Use Cases, Integrationen und den passenden Einstieg.
        </p>

        <div className="mt-10 rounded-[2rem] border border-cyan-300/15 bg-white/[0.035] p-10 text-left shadow-2xl shadow-cyan-950/20">
          <p className="text-cyan-300">Strategiegespräch</p>

          <h3 className="mt-6 text-3xl font-light text-white md:text-4xl">
            Gemeinsam prüfen wir Ihr KI-Potenzial.
          </h3>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/70">
            In einem unverbindlichen Gespräch analysieren wir Ihre aktuellen Prozesse,
            mögliche Automatisierungen, GEO-Potenziale und sinnvolle KI-Integrationen
            für Service, Vertrieb und Sichtbarkeit.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button href={calendlyLink} className="px-8 py-5">
              Live Demo buchen <Icon name="arrow" size="text-2xl" className="ml-2" />
            </Button>

            <Button
              href="mailto:thomas.wittkopf@voixero.com"
              variant="outline"
              className="px-8 py-5"
            >
              Kontakt per E-Mail
            </Button>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function Footer() {
  return <footer className="border-t border-cyan-300/10 bg-[#050817] px-6 py-10 text-white/55"><div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between"><Logo /><div className="flex flex-wrap gap-5"><a href="#/cognia" className="hover:text-cyan-300">Cognia</a><a href="#/convert" className="hover:text-cyan-300">Convert</a><a href="#/preise" className="hover:text-cyan-300">Preise</a><a href="#/kontakt" className="hover:text-cyan-300">Kontakt</a><a href="#/impressum" className="transition hover:text-cyan-300">
  Impressum
</a></div><div>© Voixero · Die Zukunft ist jetzt</div></div></footer>;
}


function useHashRoute() {
  const getRoute = () => window.location.hash.replace("#", "") || "/";
  const [route, setRoute] = useState(getRoute());
  useEffect(() => {
    const onHashChange = () => { setRoute(getRoute()); window.scrollTo({ top: 0, behavior: "smooth" }); };
    window.addEventListener("hashchange", onHashChange);
    return () => window.removeEventListener("hashchange", onHashChange);
  }, []);
  return route;
}

export default function App() {
  const route = useHashRoute();
  let Page = Home;
  if (route === "/cognia") Page = CogniaPage;
  if (route === "/convert") Page = ConvertPage;
  if (route === "/preise") Page = PricingPage;
  if (route === "/kontakt") Page = ContactPage;
  return <main className="min-h-screen bg-[#070b1c] font-sans"><Nav /><Page /><Footer /></main>;
}