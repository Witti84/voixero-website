import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import overviewImage from "./assets/voixero-overview.png";
import benefitsImage from "./assets/voixero-benefits.png";
import cogniaDemoAudio from "./assets/SusiVs.KIM.mpeg";
import cogniaHeroImage from "./assets/cognia-human-ai.png";
import seoGeoImage from "./assets/seo-geo-evolution.png";

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
  {
  title: "75% Kostenersparnis\n100% Service-Excellence",
  icon: "bot",
  text: "KI automatisiert wiederkehrende Anfragen – Menschen liefern Qualität, Empathie und echte Kundenbindung."
},
  {
  title: "Signifikant sichtbarer\nin AI-Suchergebnissen",
  icon: "globe",
  text: "Werden Sie häufiger empfohlen in ChatGPT, Gemini, Perplexity und modernen AI-Systemen."
},
{
  title: "Customer & Market\nIntelligence",
  icon: "users",
  text: "Verstehen Sie Kunden, Wettbewerb und Marktstimmung in Echtzeit."
},
{
  title: "Brand &\nSentiment Intelligence",
  icon: "spark",
  text: "Erkennen Sie, wie Ihre Marke, Produkte und Services im Markt wahrgenommen werden."
},
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
      price: "ab CHF 590",
      period: "/ Monat",
      description: "Für Unternehmen, die KI-Telefonie strukturiert testen und erste Prozesse automatisieren möchten.",
      features: ["1 KI-Agent", "bis 500 Gespräche / Monat", "Basis-Wissensdatenbank", "Standard-Reporting", "E-Mail Support"],
      cta: "Beratung vereinbaren"
    },
    {
      name: "Cognia Growth",
      price: "ab CHF 1'490",
      period: "/ Monat",
      description: "Für wachsende Teams mit mehreren Use Cases, höherem Volumen und CRM-Anbindung.",
      features: ["bis 3 KI-Agenten", "bis 2'500 Gespräche / Monat", "CRM-/Helpdesk-Integration", "Mehrsprachigkeit", "Qualitäts-Dashboard", "Priority Support"],
      cta: "Beratung vereinbaren",
      highlighted: true
    },
    {
      name: "Cognia Enterprise",
      price: "Individuell",
      period: "",
      description: "Für komplexe Service-Organisationen mit individuellen Workflows, SLA und Integrationen.",
      features: ["unlimitierte Agenten möglich", "individuelle Gesprächsvolumen", "Custom Integrationen", "SLA & Governance", "Workshops & Enablement","Persönlicher Consultant / SPOC"],
      cta: "Beratung vereinbaren"
    }
  ],
  convert: [
    {
      name: "Convert Start",
      price: "ab CHF 690",
      period: "/ Monat",
      description: "Für Websites und kleinere Shops, die ihre KI-Sichtbarkeit professionell aufbauen wollen.",
      features: ["GEO Visibility Score", "bis 50 Seiten / Produkte", "Prompt Monitoring", "Basis-Empfehlungen", "Monatliches Reporting"],
      cta: "90 Tage kostenfreie Demo"
    },
    {
      name: "Convert Growth",
      price: "ab CHF 1'490",
      period: "/ Monat",
      description: "Für etablierte Shops und KMU mit Wettbewerbstracking und kontinuierlicher Optimierung.",
      features: ["bis 500 Seiten / Produkte", "Competitor Intelligence", "Sentiment Monitoring", "Autopilot mit Freigabe", "Priorisierte KI-Empfehlungen", "Priority Support"],
      cta: "90 Tage kostenfreie Demo",
      highlighted: true
    },
    {
      name: "Convert Enterprise",
      price: "Individuell",
      period: "",
      description: "Für grössere Shops, Portale und Multi-Brand Setups mit hoher Komplexität.",
      features: ["Custom Seiten-/Produktvolumen", "Multi-Brand Monitoring", "API-/Shop-Anbindungen", "Custom Dashboards", "Strategische GEO-Beratung"],
      cta: "Persönliche Beratung"
    }
  ]
};

function runSmokeTests() {
  console.assert(heroCards.length === 4, "Hero should contain four core cards.");
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
            <a onClick={closeMenu} href="#/impressum" className="rounded-xl border border-cyan-300/10 bg-white/[0.03] px-4 py-3 hover:text-cyan-300"
>
  Impressum
</a>
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
    <div className="relative mx-auto flex h-[520px] w-full max-w-[720px] items-center justify-center">
      <motion.div className="absolute h-72 w-72 rounded-full bg-cyan-300/20 blur-3xl" animate={{ scale: [1, 1.22, 1], opacity: [0.45, 0.85, 0.45] }} transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }} />
      <motion.div className="absolute h-80 w-80 rounded-full border border-cyan-300/20" animate={{ rotate: 360 }} transition={{ duration: 22, repeat: Infinity, ease: "linear" }} />
      <motion.div className="absolute h-64 w-64 rounded-full border border-violet-300/20" animate={{ rotate: -360 }} transition={{ duration: 16, repeat: Infinity, ease: "linear" }} />
      <motion.div className="relative h-52 w-52 rounded-full bg-[radial-gradient(circle_at_35%_25%,#85ffff_0%,#1CADC6_24%,#10172f_58%,#070b1c_100%)] shadow-2xl shadow-cyan-400/30" animate={{ y: [-10, 12, -10], rotate: [0, 6, 0], scale: [1, 1.04, 1] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} />
      {heroCards.map((item, i) => {
const positions = [
  "left-0 top-4 z-20",
  "right-0 top-14 z-20",
  "left-12 bottom-6 z-20",
  "right-10 bottom-0 z-10",
  "left-[420px] top-[270px] z-30",
];
        return (
          <motion.div key={item.title} className={`absolute ${positions[i]} w-52 rounded-2xl border border-cyan-300/20 bg-[#070b1c]/75 p-4 shadow-xl shadow-cyan-950/40 backdrop-blur-xl`} initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: [0, -8, 0] }} transition={{ opacity: { delay: 0.4 + i * 0.18 }, y: { duration: 4 + i, repeat: Infinity, ease: "easeInOut" } }}>
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
    <section className="relative overflow-hidden bg-[#070b1c] px-6 pb-10 pt-40 text-white md:pt-36">
      <AnimatedParticles />
      <div className="absolute right-0 top-20 h-[520px] w-[520px] rounded-full bg-cyan-300/10 blur-3xl" />
<div className={`relative mx-auto grid items-start gap-8 ${title ? "max-w-7xl lg:grid-cols-[0.9fr_1.1fr]" : "max-w-[92rem]"}`}>
        {title && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-3xl"
          >
            <p className="mb-5 text-cyan-300">{label}</p>

            <h1 className="text-5xl font-light leading-tight md:text-7xl">
              {title}
            </h1>

            {text && (
              <p className="mt-8 text-2xl leading-relaxed text-white/75">
                {text}
              </p>
            )}

            {(primary || secondary) && (
              <div className="mt-10 flex flex-wrap gap-4">
                {primary && (
                  <Button href={calendlyLink} className="px-7 py-5">
                    {primary}
                    <Icon name="arrow" size="text-2xl" className="ml-2" />
                  </Button>
                )}

                {secondary && (
                  <Button href="#/preise" variant="outline" className="px-7 py-5">
                    {secondary}
                  </Button>
                )}
              </div>
            )}
          </motion.div>
        )}

        <div className={title ? "mt-16 lg:mt-0" : "w-full"}>
          {visual}
        </div>
      </div>
    </section>
  );
}
function CogniaPage() {
  return (
    <>
      <ProductHero
        label="Voixero Cognia"
        title={null}
        text=""
        primary=""
        secondary=""
        visual={<CogniaVisual />}
      />

      <CogniaAudioDemo />
            <section className="bg-[#080d22] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeUp} className="mb-14">
            <p className="mb-3 text-cyan-300">Warum Cognia</p>
            <h2 className="text-4xl font-light md:text-6xl">
              Der einfachste Weg zu <Highlight>KI-Kundendienst</Highlight> in Echtzeit.
            </h2>
            <p className="mt-7 max-w-3xl text-xl leading-relaxed text-white/70">
            Cognia automatisiert Kundenkontakte in Echtzeit, entlastet Service-Teams
            und integriert sich nahtlos in bestehende Prozesse. Wiederkehrende Anfragen
            werden effizient durch KI bearbeitet — Menschen übernehmen komplexe,
            emotionale und entscheidende Interaktionen.
            </p>
          </motion.div>

          <div className="grid gap-4 md:grid-cols-3">
            {cogniaFeatures.map(([title, text, icon], idx) => (
              <Card key={title} className="p-6">
                <div className="flex gap-5">
                  <Icon
                    name={icon}
                    className="h-14 w-14 shrink-0 rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-300"
                  />
                  <div>
                    <div className="mb-2 text-xl font-bold text-cyan-200">
                      {idx + 1}. {title}
                    </div>
                    <p className="text-white/65">{text}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <PricingSection
        product="cognia"
        title="Cognia Preise"
        subtitle="Skalierbar nach Gesprächsvolumen, Integrationen und gewünschtem Automatisierungsgrad."
      />
    </>
  );
}
function CogniaVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.9 }}
      className="relative mx-auto w-full overflow-hidden rounded-[2rem]"
    >
      <img
        src={cogniaHeroImage}
        alt="Voixero Cognia"
        className="w-full object-cover"
      />

      <div className="absolute inset-x-0 bottom-10 flex justify-center gap-4">
        <Button href={calendlyLink} className="px-8 py-5">
          Cognia Demo buchen
          <Icon name="arrow" size="text-2xl" className="ml-2" />
        </Button>

        <Button href="#/preise" variant="outline" className="px-8 py-5">
          Preise ansehen
        </Button>
      </div>
    </motion.div>
  );
}
function CogniaAudioDemo() {
  return (
    <section className="relative overflow-hidden bg-[#070b1c] px-6 py-28 text-white">
      <div className="relative mx-auto max-w-7xl rounded-[2rem] border border-cyan-300/25 bg-cyan-300/10 p-8 shadow-[0_0_120px_rgba(28,173,198,0.24)] md:p-12">
        <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-cyan-200">Live Audio Demo</p>

            <h2 className="text-4xl font-light leading-tight md:text-6xl">
              Hören Sie den Unterschied:
              <br />
              <Highlight>Susi V1</Highlight> vs. <Highlight>Kim V2</Highlight>
            </h2>

            <p className="mt-6 text-xl leading-relaxed text-white/75">
              Die neue Cognia Voice Engine klingt natürlicher, versteht schneller
              und führt Gespräche deutlich dynamischer.
            </p>
          </div>

          <div className="rounded-[1.5rem] border border-cyan-300/20 bg-[#070b1c]/80 p-6 shadow-2xl">
            <p className="text-cyan-300">Cognia Voice AI</p>
            <h3 className="mt-2 text-3xl font-light text-white">
              Susi V1 vs. Kim V2
            </h3>

            <audio controls className="mt-6 w-full">
              <source src={cogniaDemoAudio} type="audio/mpeg" />
              Ihr Browser unterstützt kein Audio.
            </audio>
            <div className="mt-6 flex h-14 items-end justify-center gap-1.5 rounded-2xl border border-cyan-300/10 bg-black/20 px-5 py-4">
            {[18, 34, 24, 46, 28, 52, 22, 42, 30, 48, 26, 38, 20, 44].map(
            (height, index) => (
            <motion.div
        key={index}
        animate={{
          height: [`${height}%`, `${height + 28}%`, `${height}%`],
          opacity: [0.45, 1, 0.45],
        }}
        transition={{
          duration: 0.9 + index * 0.05,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="w-1.5 rounded-full bg-cyan-300 shadow-[0_0_14px_rgba(34,211,238,0.65)]"
      />
    )
  )}
</div>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-cyan-300/10 bg-black/25 p-5">
              <p className="mb-2 text-cyan-300">Susi V1</p>

              <p className="text-sm leading-relaxed text-white/60">
                Erste Generation unserer KI-Engine mit Fokus auf grundlegende
                Dialogführung und Prozessautomatisierung.
              </p>
            </div>

            <div className="rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-5">
              <p className="mb-2 text-cyan-100">Kim V2</p>

              <p className="text-sm leading-relaxed text-white/80">
                Neue Generation mit natürlicherer Sprachführung,
                schnellerem Verständnis, dynamischer Gesprächslogik
                und deutlich höherer Gesprächsqualität.
              </p>
            </div>
          </div>
            <div className="mt-8">
              <Button href={calendlyLink} className="w-full py-5">
                KI-Telefonie live testen <Icon name="arrow" size="text-2xl" className="ml-2" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
function ConvertLoop() {
  const loopSteps = [
    ["DISCOVER", "Prompts & Suchintentionen automatisch erkennen"],
    ["MONITOR", "KI-Systeme kontinuierlich überwachen"],
    ["UNDERSTAND", "Sichtbarkeit, Ranking und Wettbewerber verstehen"],
    ["DIAGNOSE", "Content-, Schema- und Intent-Lücken identifizieren"],
    ["GENERATE", "Markenkonforme Optimierungen generieren"],
    ["APPLY", "Fixes anwenden – optional, kontrolliert und reversibel"],
    ["MEASURE", "Wirkung messen und Veränderungen zuordnen"],
    ["LEARN", "Muster erkennen und kontinuierlich besser werden"],
  ];

  return (
    <section className="relative overflow-hidden bg-[#070b1c] px-6 py-28 text-white">
      <div className="absolute left-1/2 top-10 h-[600px] w-[600px] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />

      <div className="relative mx-auto max-w-7xl">
        <motion.div {...fadeUp} className="mx-auto mb-20 max-w-4xl text-center">
          <p className="mb-3 text-cyan-300">Der Convert Loop</p>

          <h2 className="text-4xl font-light leading-tight md:text-6xl">
            Ein geschlossener Prozess für{" "}
            <Highlight>autonome KI-Sichtbarkeit</Highlight>.
          </h2>

          <p className="mx-auto mt-7 max-w-3xl text-xl leading-relaxed text-white/70">
            Convert arbeitet kontinuierlich: Es erkennt neue Suchintentionen,
            überwacht KI-Systeme, diagnostiziert Schwachstellen, generiert
            Optimierungen und lernt aus jeder Veränderung.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="absolute left-6 top-0 hidden h-full w-px bg-cyan-300/20 md:block"
            initial={{ scaleY: 0 }}
            whileInView={{ scaleY: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            viewport={{ once: true }}
            style={{ transformOrigin: "top" }}
          />

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {loopSteps.map(([title, text], index) => (
              <motion.div
                key={title}
                {...fadeUp}
                transition={{ delay: index * 0.06 }}
                className="group relative overflow-hidden rounded-[2rem] border border-cyan-300/15 bg-white/[0.035] p-6 backdrop-blur-xl transition hover:border-cyan-300/35 hover:bg-cyan-300/5"
              >
                <motion.div
                  className="absolute inset-x-0 top-0 h-px bg-cyan-300/70"
                  animate={{ opacity: [0.15, 1, 0.15] }}
                  transition={{
                    duration: 2.2,
                    repeat: Infinity,
                    delay: index * 0.18,
                  }}
                />

                <div className="mb-6 flex items-center justify-between">
                  <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-bold text-cyan-200">
                    0{index + 1}
                  </span>

                  <span className="text-cyan-300/60">↻</span>
                </div>

                <h3 className="text-2xl font-semibold tracking-wide text-white">
                  {title}
                </h3>

                <p className="mt-4 text-base leading-relaxed text-white/62">
                  {text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
function ConvertPage() {
  return (
    <>
      <ProductHero
        label="Voixero Convert"
      title={
  <>
    Autonome <Highlight>KI-Sichtbarkeit</Highlight>
    <br />
    für die nächste Generation der Suche.
  </>
    }
      text="Convert entdeckt, überwacht, analysiert und optimiert Ihre Sichtbarkeit in modernen KI-Systemen — vollständig autonom."        primary="KI-Sichtbarkeit analysieren"
        secondary="Convert entdecken"
        visual={<ConvertVisual />}
      />
      <section className="bg-[#0B1020] px-6 py-28">
  <div className="mx-auto max-w-7xl">
    <motion.div
      {...fadeUp}
      className="mb-14 text-center"
    >
      <p className="mb-3 text-cyan-300">
        The Shift to AI Search
      </p>

      <h2 className="text-4xl font-light text-white md:text-6xl">
        Von klassischer SEO
        <Highlight>
          {" "}
          zu autonomer AI-Sichtbarkeit
        </Highlight>.
      </h2>

      <p className="mx-auto mt-7 max-w-3xl text-xl leading-relaxed text-white/70">
        Klassische Suchmaschinenoptimierung reicht nicht mehr aus.
        Moderne KI-Systeme bewerten semantische Relevanz,
        Vertrauenssignale und Recommendation Intelligence.
      </p>
    </motion.div>

    <img
      src={seoGeoImage}
      alt="SEO zu GEO Transformation"
      className="mx-auto w-full max-w-7xl rounded-[2rem]"
    />
  </div>
</section>
    <ConvertLoop />
      <section className="bg-[#111025] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeUp} className="mb-14">
            <p className="mb-3 text-cyan-300">Autonomous AI Infrastructure</p>

            <h2 className="text-4xl font-light md:text-6xl">
              Wie Convert
              <Highlight> autonome KI-Sichtbarkeit steuert </Highlight>.
            </h2>
          </motion.div>

          <div className="grid gap-8">
            {convertBlocks.map((block) => (
              <motion.div
                {...fadeUp}
                key={block.title}
                className="grid gap-10 rounded-[2rem] border border-cyan-300/15 bg-white/[0.035] p-7 backdrop-blur-xl lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
              >
                <div>
                  <Icon
                    name={block.icon}
                    className="mb-5 h-14 w-14 rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-300 shadow-[0_0_35px_rgba(28,173,198,0.25)]"
                  />

                  <h3 className="mb-6 text-4xl font-light leading-tight">
                    <div className="mb-6 flex flex-wrap items-center gap-3">
                    <div className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-200">
                    Autonomous Capability
                    </div>
  <div className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-emerald-300">
    Confidence 94%
  </div>
</div>
                    <Highlight>{block.title}</Highlight>
                  </h3>

                  <ul className="space-y-4 text-xl text-white/75">
                    {block.items.map((item) => (
                      <li key={item} className="flex gap-3">
                        <Icon
                          name="check"
                          size="text-xl"
                          className="mt-1 shrink-0 text-cyan-300"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="relative">
                  <div className="absolute inset-0 rounded-[2rem] bg-cyan-300/10 blur-3xl" />

                  <ConvertDashboard type={block.dashboardType} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0B1020] px-6 py-28 text-white">
        <div className="absolute left-1/2 top-0 h-[500px] w-[500px] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="relative mx-auto max-w-7xl">
          <motion.div {...fadeUp} className="mb-20 max-w-4xl">
            <p className="mb-3 text-cyan-100">AI Recommendation Infrastructure</p>

            <h2 className="text-4xl font-light md:text-6xl">
            Wie moderne KI-Systeme
            <Highlight> Empfehlungen erzeugen</Highlight>.
            </h2>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/70">
              Convert analysiert, wie moderne KI-Systeme Inhalte,
              Vertrauenssignale und semantische Relevanz bewerten —
              und optimiert Ihre digitale Präsenz für AI-generierte
              Empfehlungen in ChatGPT, Gemini, Claude und Perplexity.
            </p>
          </motion.div>

          <div className="relative grid gap-6 md:grid-cols-5">
            <div className="pointer-events-none absolute left-0 right-0 top-1/2 hidden -translate-y-1/2 md:block">
            <div className="mx-auto h-px w-[92%] bg-gradient-to-r from-transparent via-cyan-300/30 to-transparent" />

            <motion.div
    animate={{
      x: ["-10%", "110%"],
      opacity: [0, 1, 0],
    }}
    transition={{
      duration: 4,
      repeat: Infinity,
      ease: "linear",
    }}
    className="absolute top-1/2 h-2 w-24 -translate-y-1/2 rounded-full bg-cyan-300/40 blur-xl"
  />
</div>
            {[
              "User Prompt",
              "LLM Retrieval",
              "Trust Signals",
              "Source Validation",
              "AI Recommendation",
            ].map((step, index) => (
              <motion.div
                key={step}
                {...fadeUp}
                transition={{ delay: index * 0.08 }}
                className="group relative overflow-hidden rounded-[2rem] border border-cyan-300/10 bg-white/[0.04] p-7 backdrop-blur-xl"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-300/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl border border-cyan-300/20 bg-cyan-300/10 text-lg text-cyan-300">
                  0{index + 1}
                </div>
                <div className="mt-4 flex items-center gap-2">
  <motion.div
  animate={{
    opacity: [0.4, 1, 0.4],
    scale: [1, 1.2, 1],
  }}
  transition={{
    duration: 2.2,
    repeat: Infinity,
    delay: index * 0.3,
  }}
  className={`h-2 w-2 rounded-full ${
    [
      "bg-cyan-300",
      "bg-violet-400",
      "bg-emerald-400",
      "bg-amber-300",
      "bg-cyan-200",
    ][index]
  }`}
/>

  <span className="text-[11px] uppercase tracking-[0.18em] text-emerald-300/80">
    {
  [
    "Intent Active",
    "Retrieval Running",
    "Trust Verified",
    "Sources Validated",
    "Recommendation Live",
  ][index]
}
  </span>
</div>
                <h3 className="text-xl font-medium">{step}</h3>
                <p className="mt-3 text-sm leading-relaxed text-white/45">
  {
    [
      "Intent erkannt und semantisch analysiert",
      "Kontextquellen und Relevanzdaten aktiviert",
      "Vertrauenssignale und Autorität bewertet",
      "Quellen validiert und Recommendation-Qualität geprüft",
      "AI-generierte Empfehlung dynamisch erstellt",
    ][index]
  }
</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PricingSection
        product="convert"
        title="Convert Plattform"
        subtitle="Für Unternehmen, die ihre Sichtbarkeit in modernen KI-Systemen autonom analysieren, steuern und optimieren möchten."
      />
    </>
  );
}
function CountUp({ target, duration = 1.8 }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = target / (duration * 60);

    const timer = setInterval(() => {
      start += increment;

      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / 60);

    return () => clearInterval(timer);
  }, [target, duration]);

  return <>{count}</>;
}
function AIRecommendationFeed() {
  const steps = [
    ["User Prompt erkannt", "Beste KI-Telefonie Schweiz"],
    ["Semantic Match", "Relevanz der Inhalte wird geprüft"],
    ["Authority Validation", "Trust-Signale werden bewertet"],
    ["Ranking Update", "VOIXERO steigt auf Position #2"],
    ["AI Recommendation", "Marke wird als passende Lösung empfohlen"],
  ];

  return (
    <div className="mt-5 rounded-3xl border border-cyan-300/10 bg-white/[0.035] p-5">
      <div className="mb-4 flex items-center justify-between">
        <p className="text-sm text-cyan-300">Autonomous Recommendation Engine</p>
        <motion.span
          animate={{ opacity: [0.35, 1, 0.35] }}
          transition={{ duration: 1.8, repeat: Infinity }}
          className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs text-cyan-200"
        >
          processing
        </motion.span>
      </div>

      <div className="space-y-3">
        {steps.map(([title, text], index) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, x: -18 }}
            animate={{ opacity: [0.45, 1, 0.45], x: 0 }}
            transition={{
              duration: 2.8,
              repeat: Infinity,
              delay: index * 0.45,
              ease: "easeInOut",
            }}
            className="flex items-center gap-4 rounded-2xl border border-cyan-300/10 bg-black/20 px-4 py-3"
          >
            <span className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-cyan-300/30 bg-cyan-300/10 text-xs font-bold text-cyan-200">
              {index + 1}
            </span>

            <div>
              <p className="text-sm font-semibold text-white">{title}</p>
              <p className="text-xs text-white/45">{text}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
function RecommendationGraph() {
  const points = [
    { label: "Baseline", value: 28 },
    { label: "Discover", value: 42 },
    { label: "Optimize", value: 58 },
    { label: "Measure", value: 71 },
    { label: "Recommend", value: 86 },
  ];

  return (
    <div className="mt-5 rounded-3xl border border-cyan-300/10 bg-white/[0.035] p-5">
      <div className="mb-5 flex items-center justify-between">
        <p className="text-sm text-cyan-300">Recommendation Probability</p>
        <motion.span
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 2.2, repeat: Infinity }}
          className="rounded-full bg-cyan-300/10 px-3 py-1 text-xs text-cyan-200"
        >
          learning
        </motion.span>
      </div>

      <div className="relative h-40 overflow-hidden rounded-2xl border border-cyan-300/10 bg-black/20 p-4">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.04)_1px,transparent_1px)] bg-[size:42px_42px]" />

        <svg viewBox="0 0 420 130" className="relative h-full w-full">
          <motion.polyline
            points="20,100 110,82 200,60 290,42 400,22"
            fill="none"
            stroke="rgba(34,211,238,0.85)"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0, opacity: 0 }}
            whileInView={{ pathLength: 1, opacity: 1 }}
            transition={{ duration: 1.8, ease: "easeOut" }}
            viewport={{ once: true }}
          />

          {points.map((point, index) => {
            const x = [20, 110, 200, 290, 400][index];
            const y = [100, 82, 60, 42, 22][index];

            return (
              <motion.g
                key={point.label}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.35 + index * 0.14 }}
                viewport={{ once: true }}
              >
                <circle
                  cx={x}
                  cy={y}
                  r="6"
                  fill="#1CADC6"
                />
                <text
                  x={x}
                  y={y - 12}
                  textAnchor="middle"
                  className="fill-white/70 text-[10px]"
                >
                  {point.value}%
                </text>
              </motion.g>
            );
          })}
        </svg>
      </div>

      <div className="mt-4 grid grid-cols-5 gap-2 text-[10px] text-white/45">
        {points.map((point) => (
          <span key={point.label} className="text-center">
            {point.label}
          </span>
        ))}
      </div>
    </div>
  );
}
function ConvertVisual() {
  const models = [
    ["ChatGPT", 72],
    ["Gemini", 64],
    ["Perplexity", 81],
    ["Claude", 59],
  ];

  const promptSets = [
    [
      ["KI Customer Experience Plattform", 2],
      ["Automatisierte Kundenservice Lösung", 3],
      ["Conversational AI Infrastruktur", 4],
    ],
    [
      ["AI Visibility für Unternehmen", 1],
      ["Autonome GEO Optimierung", 3],
      ["KI Empfehlungssystem DACH", 5],
    ],
    [
      ["Enterprise AI Voice Platform", 2],
      ["KI-Sichtbarkeit im E-Commerce", 4],
      ["AI Recommendation Visibility", 3],
    ],
  ];

  const [activePromptSet, setActivePromptSet] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left - rect.width / 2) / 25;
    const y = (e.clientY - rect.top - rect.height / 2) / 25;
    setMousePosition({ x, y });
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePromptSet((current) => (current + 1) % promptSets.length);
    }, 4500);

    return () => clearInterval(interval);
  }, [promptSets.length]);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96, y: 20 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: 0,
        rotateX: -mousePosition.y * 0.12,
        rotateY: mousePosition.x * 0.12,
      }}
      transition={{ duration: 0.9, ease: "easeOut" }}
      onMouseMove={handleMouseMove}
      style={{ transformStyle: "preserve-3d" }}
      className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-[#080d22] p-5 shadow-[0_0_100px_rgba(28,173,198,0.22)] mt-8 lg:mt-14"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(28,173,198,0.22),transparent_34%),radial-gradient(circle_at_80%_70%,rgba(124,58,237,0.18),transparent_36%)]" />

      <motion.div
        className="absolute left-0 right-0 top-0 h-px bg-cyan-300/70 shadow-[0_0_24px_rgba(34,211,238,0.9)]"
        animate={{ y: [0, 620, 0], opacity: [0.2, 1, 0.2] }}
        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative rounded-[1.5rem] border border-cyan-300/15 bg-black/25 p-5 backdrop-blur-xl">
        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm text-cyan-300">Autonomous Visibility Engine</p>
            <h3 className="mt-1 text-2xl font-light text-white">VOIXERO Convert</h3><motion.div
  animate={{
    opacity: [0.55, 1, 0.55],
    boxShadow: [
      "0 0 0 rgba(34,211,238,0)",
      "0 0 24px rgba(34,211,238,.35)",
      "0 0 0 rgba(34,211,238,0)",
    ],
  }}
  transition={{
    duration: 2.8,
    repeat: Infinity,
  }}
  className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.18em] text-cyan-200"
>
  Optimizing
</motion.div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            {["AUTONOM", "REAL-TIME LOOP", "SELF-OPTIMIZING"].map((badge, index) => (
              <motion.div
                key={badge}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: [0.65, 1, 0.65], y: 0 }}
                transition={{ duration: 2.6, repeat: Infinity, delay: index * 0.35 }}
                className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-semibold tracking-[0.18em] text-cyan-100 backdrop-blur-xl shadow-[0_0_24px_rgba(34,211,238,0.12)]"
              >
                {badge}
              </motion.div>
            ))}
          </div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-cyan-300/10 bg-white/[0.04] p-5">
            <p className="mb-4 text-sm text-white/55">KI Visibility Score</p>

            <div className="flex items-end gap-2">
              <motion.span className="text-6xl font-bold text-cyan-300">
                <CountUp target={78} />
              </motion.span>
              <span className="pb-2 text-xl text-white/50">/100</span>
            </div>

            <div className="mt-5 h-3 overflow-hidden rounded-full bg-white/10">
              <motion.div
                initial={{ width: "0%" }}
                animate={{ width: "78%" }}
                transition={{ duration: 1.4, delay: 0.3, ease: "easeOut" }}
                className="h-full rounded-full bg-cyan-300 shadow-[0_0_22px_rgba(34,211,238,.8)]"
              />
            </div>

            <div className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <div className="rounded-2xl border border-cyan-300/10 bg-black/20 p-3">
                <p className="text-white/45">Top 5 Presence</p>
                <p className="mt-1 text-xl font-bold text-white">68%</p>
              </div>
              <div className="rounded-2xl border border-cyan-300/10 bg-black/20 p-3">
                <p className="text-white/45">Share of Voice</p>
                <p className="mt-1 text-xl font-bold text-white">42%</p>
              </div>
            </div>
          </div>

          <div className="space-y-4">
            {models.map(([name, value], index) => (
              <motion.div
                key={name}
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2 + index * 0.12 }}
                className="rounded-2xl border border-cyan-300/10 bg-white/[0.04] p-4"
              >
                <div className="mb-2 flex justify-between text-sm">
                  <span className="text-white/75">{name}</span>
                  <span className="font-bold text-cyan-300">{value}%</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-white/10">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${value}%` }}
                    transition={{ duration: 1.1, delay: 0.35 + index * 0.12 }}
                    className="h-full rounded-full bg-cyan-300"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <div className="mt-5 rounded-3xl border border-cyan-300/10 bg-white/[0.035] p-5">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-sm text-cyan-300">Prompt Intelligence</p>
            <p className="text-xs text-white/40">Ranking Feed</p>
          </div>

          <div className="space-y-3">
            {promptSets[activePromptSet].map(([prompt, rank], index) => (
              <motion.div
                key={`${prompt}-${activePromptSet}`}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.12 }}
                className="flex items-center justify-between rounded-2xl border border-cyan-300/10 bg-black/20 px-4 py-3"
              >
                <span className="text-sm text-white/70">“{prompt}”</span>
                <span className="rounded-full bg-cyan-300/10 px-3 py-1 text-sm font-bold text-cyan-200">
                  #{rank}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        <AIRecommendationFeed />
        <RecommendationGraph />
      </div>
    </motion.div>
  );
}
function ConvertDashboard({ type }) {
return (
  <div className="rounded-3xl border border-cyan-300/10 bg-[radial-gradient(circle_at_top_left,#162235,#0b1220_60%)] p-6 text-white shadow-[0_0_60px_rgba(34,211,238,0.05)] backdrop-blur-xl">
    <div className="mb-5 flex items-center justify-between border-b pb-4">
      <div className="font-bold text-white/80">
        VOIXERO Convert
      </div>

      <div className="rounded-full bg-cyan-50 px-3 py-1 text-sm text-cyan-500">
        {type}
      </div>
    </div>

    <div className="grid gap-4 md:grid-cols-3">
      <div className="rounded-2xl border p-4">
        <Icon name="gauge" className="mb-3 text-cyan-600" />

        <div className="text-3xl font-bold">
          78
        </div>

        <p className="text-sm text-slate-500">
          Visibility Score
        </p>
      </div>

      <div className="rounded-2xl border p-4">
        <Icon name="line" className="mb-3 text-cyan-600" />

        <div className="text-3xl font-bold">
          #3.2
        </div>

        <p className="text-sm text-slate-500">
          Ø Position
        </p>
      </div>

      <div className="rounded-2xl border p-4">
        <Icon name="spark" className="mb-3 text-cyan-600" />

        <div className="text-3xl font-bold">
          88
        </div>

        <p className="text-sm text-slate-500">
          Sentiment
        </p>
      </div>
    </div>

    <div className="mt-5 rounded-2xl border border-cyan-300/10 bg-black/20 p-4">
      <div className="mb-2 flex items-center justify-between">
        <p className="text-sm font-semibold text-cyan-800">
          Recommendation Probability
        </p>

        <motion.span
          animate={{ opacity: [0.55, 1, 0.55] }}
          transition={{ duration: 2.2, repeat: Infinity }}
          className="text-sm font-bold text-cyan-500"
        >
          +12%
        </motion.span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-cyan-100">
        <motion.div
          initial={{ width: "0%" }}
          animate={{ width: "86%" }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full rounded-full bg-cyan-400"
        />
      </div>
    </div>

    <div className="mt-5 h-32 rounded-2xl border border-cyan-300/10 bg-black/20 p-4">
      <div className="relative h-full overflow-hidden rounded-xl border border-cyan-300/10 bg-[#08111f]/90">
  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(34,211,238,0.14),transparent_38%)]" />

  <motion.div
    animate={{
      x: ["-10%", "10%", "-10%"],
      opacity: [0.35, 0.7, 0.35],
    }}
    transition={{
      duration: 7,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute inset-0 bg-[linear-gradient(110deg,transparent_20%,rgba(34,211,238,0.12),transparent_80%)]"
  />

  <svg
    viewBox="0 0 500 140"
    className="absolute inset-0 h-full w-full"
  >
    <motion.path
      d="M0 110 C80 90 140 95 220 72 C300 48 360 62 500 24"
      fill="none"
      stroke="rgba(34,211,238,0.85)"
      strokeWidth="3"
      strokeLinecap="round"
      initial={{ pathLength: 0, opacity: 0 }}
      animate={{ pathLength: 1, opacity: 1 }}
      transition={{
        duration: 2.5,
        ease: "easeOut",
      }}
    />

    {[90, 180, 310, 430].map((x, index) => (
      <motion.circle
        key={x}
        cx={x}
        cy={[92, 78, 58, 36][index]}
        r="5"
        fill="#22d3ee"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5],
        }}
        transition={{
          duration: 2.8,
          repeat: Infinity,
          delay: index * 0.35,
        }}
      />
    ))}
  </svg>

  <div className="absolute bottom-2 left-3 right-3 flex items-center justify-between text-[10px] uppercase tracking-[0.18em] text-cyan-100/55">
    <span>Semantic Flow Active</span>
    <span>Recommendation Learning</span>
  </div>
</div>
    </div>
  </div>
);
}

function PricingPage() {
  return <><section className="bg-[#070b1c] px-6 pb-10 pt-40 text-white"><div className="mx-auto max-w-5xl text-center"><p className="mb-4 text-cyan-300">Preise</p><h1 className="text-5xl font-light md:text-7xl">Transparente Pakete. <Highlight>Skalierbar</Highlight> nach Bedarf.</h1><p className="mx-auto mt-7 max-w-3xl text-xl text-white/70">Die Preise sind als Startpunkte gedacht. Finale Angebote hängen von Volumen, Integrationen, Sprachen und Betriebsmodell ab.</p></div></section><PricingSection product="cognia" title="Voixero Cognia" subtitle="KI-Telefonie und Kundendienst-Automatisierung." /><PricingSection product="convert" title="Voixero Convert" subtitle="GEO, KI-Sichtbarkeit und Conversion-Optimierung." /></>;
}

function PricingSection({ product, title, subtitle }) {
  return (
    <section className="bg-[#080d22] px-6 py-20 text-white">
      <div className="mx-auto max-w-7xl">

        <motion.div {...fadeUp} className="mb-10">
          <p className="mb-3 text-cyan-300">
            {subtitle}
          </p>

          <h2 className="text-4xl font-light md:text-6xl">
            {title}
          </h2>
        </motion.div>

        <div className="grid gap-6 lg:grid-cols-3">
          {pricing[product].map((tier) => (
            <PricingCard
              key={tier.name}
              tier={tier}
            />
          ))}
        </div>

        <p className="mt-8 text-center text-sm leading-relaxed text-white/45">
         Alle Preise exkl. MwSt. Kosten für Telefonie, SIP-Trunks und Gesprächsvolumen sind nicht enthalten.
        <br />
        Individuelle Integrationen, Setup-Aufwände und Sonderentwicklungen können separat offeriert werden.
        </p>

      </div>
    </section>
  );
}
function PricingCard({ tier }) {
  return (
    <Card
      className={`relative flex h-full flex-col p-7 ${
        tier.highlighted
          ? "border-cyan-300/50 bg-cyan-300/10 shadow-2xl shadow-cyan-950/30"
          : ""
      }`}
    >
{tier.highlighted && (
  <>
    <div className="absolute right-5 top-5 rounded-full bg-cyan-300 px-3 py-1 text-sm font-bold text-slate-950">
      Empfohlen
    </div>

    <div className="absolute left-5 top-5 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-1 text-[11px] font-bold uppercase tracking-[0.18em] text-cyan-200 backdrop-blur-xl shadow-[0_0_22px_rgba(34,211,238,0.18)]">
      Setup bis 30.09. kostenlos
    </div>
  </>
)}

<h3 className={`text-3xl font-light text-white ${tier.highlighted ? "pt-10" : ""}`}>
  {tier.name}
</h3>
      <div className="mt-5 flex items-end gap-2">
        <span className="text-4xl font-bold text-cyan-300">
          {tier.price}
        </span>

        <span className="pb-1 text-white/50">
          {tier.period}
        </span>
      </div>

      <p className="mt-5 min-h-[88px] text-white/65">
        {tier.description}
      </p>

      <ul className="mt-7 space-y-3">
        {tier.features.map((feature) => (
          <li
            key={feature}
            className="flex gap-3 text-white/75"
          >
            <Icon
              name="check"
              size="text-lg"
              className="mt-1 text-cyan-300"
            />

            {feature}
          </li>
        ))}
      </ul>

      <div className="mt-auto pt-8">
        <Button
          href={calendlyLink}
          className="w-full py-4"
        >
          {tier.cta}
        </Button>
      </div>
    </Card>
  );
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

function ImpressumPage() {
  return (
    <section className="min-h-screen bg-[#070b1c] px-6 py-40 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-cyan-300">Rechtliches</p>

        <h1 className="text-5xl font-light md:text-7xl">Impressum</h1>

        <div className="mt-14 space-y-10 rounded-[2rem] border border-cyan-300/15 bg-white/[0.035] p-10 shadow-2xl shadow-cyan-950/20">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-cyan-200">
              Anbieter
            </h2>
            <div className="space-y-2 text-lg text-white/75">
              <p>Thom &amp; Co. GmbH</p>
              <p>Scherzingerstrasse 16</p>
              <p>9598 Bottighofen</p>
              <p>Schweiz</p>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-cyan-200">
              Kontakt
            </h2>
            <div className="space-y-2 text-lg text-white/75">
              <p>
                E-Mail:{" "}
                <a
                  href="mailto:thomas.wittkopf@voixero.com"
                  className="text-cyan-300 hover:underline"
                >
                  thomas.wittkopf@voixero.com
                </a>
              </p>
              <p>
                Telefon:{" "}
                <a href="tel:+41445155670" className="text-cyan-300 hover:underline">
                  +41 44 515 56 70
                </a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-cyan-200">
              Vertretungsberechtigte Personen
            </h2>
            <div className="space-y-2 text-lg text-white/75">
              <p>Jürgen Thom</p>
              <p>Thomas Wittkopf</p>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-cyan-200">
              Unternehmensinformationen
            </h2>
            <div className="space-y-2 text-lg text-white/75">
              <p>UID / MWST: CHE-273.347.179</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return <footer className="border-t border-cyan-300/10 bg-[#050817] px-6 py-10 text-white/55"><div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between"><Logo /><div className="flex flex-wrap gap-5"><a href="#/cognia" className="hover:text-cyan-300">Cognia</a><a href="#/convert" className="hover:text-cyan-300">Convert</a><a href="#/impressum" className="transition hover:text-cyan-300">
  Impressum
</a><a href="#/preise" className="hover:text-cyan-300">Preise</a><a href="#/kontakt" className="hover:text-cyan-300">Kontakt</a><a href="#/datenschutz" className="hover:text-cyan-300">
  Datenschutz
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
  function DatenschutzPage() {
  return (
    <section className="min-h-screen bg-[#070b1c] px-6 py-40 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-cyan-300">Rechtliches</p>
        <h1 className="text-5xl font-light md:text-7xl">Datenschutz</h1>

        <div className="mt-14 space-y-10 rounded-[2rem] border border-cyan-300/15 bg-white/[0.035] p-10 shadow-2xl shadow-cyan-950/20">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-cyan-200">Verantwortliche Stelle</h2>
            <p className="text-lg text-white/75">
              Thom &amp; Co. GmbH, Scherzingerstrasse 16, 9598 Bottighofen, Schweiz.
              Kontakt: <a href="mailto:thomas.wittkopf@voixero.com" className="text-cyan-300 hover:underline">thomas.wittkopf@voixero.com</a>
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-cyan-200">Bearbeitung personenbezogener Daten</h2>
            <p className="text-lg leading-relaxed text-white/75">
              Wir bearbeiten personenbezogene Daten, soweit dies zur Bereitstellung unserer Website,
              zur Kontaktaufnahme, zur Terminvereinbarung, zur Analyse der Nutzung sowie zur Verbesserung
              unserer Angebote erforderlich ist.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-cyan-200">Hosting</h2>
            <p className="text-lg leading-relaxed text-white/75">
              Unsere Website wird über Vercel bereitgestellt. Dabei können technische Zugriffsdaten wie IP-Adresse,
              Zeitpunkt des Zugriffs, Browserinformationen und Systeminformationen verarbeitet werden.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-cyan-200">Terminvereinbarung mit Calendly</h2>
            <p className="text-lg leading-relaxed text-white/75">
              Für die Buchung von Terminen nutzen wir Calendly. Wenn Sie einen Termin buchen, werden die von Ihnen
              eingegebenen Daten wie Name, E-Mail-Adresse, Terminzeit und weitere Angaben durch Calendly verarbeitet.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-cyan-200">Google Analytics</h2>
            <p className="text-lg leading-relaxed text-white/75">
              Wir nutzen Google Analytics, um die Nutzung unserer Website statistisch auszuwerten und unser Angebot
              zu verbessern. Dabei können Informationen über Ihr Nutzungsverhalten, technische Daten und Geräteinformationen
              verarbeitet werden. Sofern erforderlich, erfolgt die Nutzung auf Basis Ihrer Einwilligung.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-cyan-200">Cookies und ähnliche Technologien</h2>
            <p className="text-lg leading-relaxed text-white/75">
              Unsere Website kann technisch notwendige Cookies sowie Analyse- oder Drittanbieter-Technologien verwenden.
              Sie können Cookies in den Einstellungen Ihres Browsers einschränken oder löschen.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-cyan-200">Ihre Rechte</h2>
            <p className="text-lg leading-relaxed text-white/75">
              Sie können Auskunft, Berichtigung, Löschung oder Einschränkung der Bearbeitung Ihrer personenbezogenen
              Daten verlangen. Zudem können Sie einer Bearbeitung widersprechen oder eine erteilte Einwilligung widerrufen.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-cyan-200">Kontakt Datenschutz</h2>
            <p className="text-lg text-white/75">
              Bei Fragen zum Datenschutz kontaktieren Sie uns unter{" "}
              <a href="mailto:thomas.wittkopf@voixero.com" className="text-cyan-300 hover:underline">
                thomas.wittkopf@voixero.com
              </a>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
export default function App() {
  const route = useHashRoute();

  let Page = Home;

  if (route === "/cognia") Page = CogniaPage;
  if (route === "/convert") Page = ConvertPage;
  if (route === "/preise") Page = PricingPage;
  if (route === "/kontakt") Page = ContactPage;
  if (route === "/impressum") Page = ImpressumPage;
  if (route === "/datenschutz") Page = DatenschutzPage;

  return (
    <main className="min-h-screen bg-[#070b1c] font-sans">
      <Nav />
      <Page />
      <Footer />
    </main>
  );
}