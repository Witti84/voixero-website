import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import convertImage from "./assets/voixero-convert.png";
import overviewImage from "./assets/voixero-overview.png";

const calendlyLink = "https://calendly.com/voixero/demo";

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

const heroCards = [
  {
    title: "KI Kundendienst",
    icon: "bot",
    text: "Automatisiert bis zu 75% der Anfragen – schnell, konsistent und 24/7."
  },
  {
    title: "Mensch im Mittelpunkt",
    icon: "users",
    text: "KI erledigt das Wiederkehrende. Menschen lösen das Wichtige."
  },
  {
    title: "GEO Optimierung",
    icon: "globe",
    text: "Mehr Sichtbarkeit in ChatGPT, Google AI, Perplexity & Co."
  }
];

const positioningPoints = [
  "reibungslose Integration",
  "optimale Performance",
  "maximale Automatisierung",
  "höhere Sichtbarkeit",
  "mehr Abschlüsse"
];

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
    items: [
      "Schnellkorrekturen mit KI-Empfehlung",
      "Automatische KI-Analyse des Wettbewerbs",
      "KI-Assistent immer an Ihrer Seite",
      "KI-Insights zu Inhalten & Produkten, die Kunden aktuell suchen"
    ]
  },
  {
    title: "Echtzeit Monitoring",
    icon: "monitor",
    dashboardType: "Monitor",
    items: [
      "Alle Informationen auf einen Blick",
      "Entwicklung relevanter KPI-Werte",
      "KI-Analyse der Sentiment-Werte",
      "Social Media Auswertung der Communities"
    ]
  },
  {
    title: "Autopilot-Assistent",
    icon: "zap",
    dashboardType: "Autopilot",
    items: [
      "Optimierungen durch die KI-Engine",
      "Vollautomatisch oder mit Freigabe",
      "Empfehlungen direkt umsetzen",
      "Minimaler Aufwand – maximaler Erfolg"
    ]
  }
];

const pricing = {
  cognia: [
    {
      name: "Cognia Start",
      price: "ab CHF 890",
      period: "/ Monat",
      description:
        "Für Unternehmen, die KI-Telefonie strukturiert testen und erste Prozesse automatisieren möchten.",
      features: [
        "1 KI-Agent",
        "bis 500 Gespräche / Monat",
        "Basis-Wissensdatenbank",
        "Standard-Reporting",
        "E-Mail Support"
      ],
      cta: "Demo anfragen"
    },
    {
      name: "Cognia Growth",
      price: "ab CHF 1'890",
      period: "/ Monat",
      description:
        "Für wachsende Teams mit mehreren Use Cases, höherem Volumen und CRM-Anbindung.",
      features: [
        "bis 3 KI-Agenten",
        "bis 2'500 Gespräche / Monat",
        "CRM-/Helpdesk-Integration",
        "Mehrsprachigkeit",
        "Qualitäts-Dashboard",
        "Priority Support"
      ],
      cta: "Beratung buchen",
      highlighted: true
    },
    {
      name: "Cognia Enterprise",
      price: "Individuell",
      period: "",
      description:
        "Für komplexe Service-Organisationen mit individuellen Workflows, SLA und Integrationen.",
      features: [
        "unlimitierte Agenten möglich",
        "individuelle Gesprächsvolumen",
        "Custom Integrationen",
        "SLA & Governance",
        "Workshops & Enablement"
      ],
      cta: "Angebot erhalten"
    }
  ],

  convert: [
    {
      name: "Convert Start",
      price: "ab CHF 690",
      period: "/ Monat",
      description:
        "Für Websites und kleinere Shops, die ihre KI-Sichtbarkeit professionell aufbauen wollen.",
      features: [
        "GEO Visibility Score",
        "bis 50 Seiten / Produkte",
        "Prompt Monitoring",
        "Basis-Empfehlungen",
        "Monatliches Reporting"
      ],
      cta: "90 Tage Demo"
    },
    {
      name: "Convert Growth",
      price: "ab CHF 1'490",
      period: "/ Monat",
      description:
        "Für etablierte Shops und KMU mit Wettbewerbstracking und kontinuierlicher Optimierung.",
      features: [
        "bis 500 Seiten / Produkte",
        "Competitor Intelligence",
        "Sentiment Monitoring",
        "Autopilot mit Freigabe",
        "Priorisierte KI-Empfehlungen",
        "Priority Support"
      ],
      cta: "Demo starten",
      highlighted: true
    },
    {
      name: "Convert Enterprise",
      price: "Individuell",
      period: "",
      description:
        "Für grössere Shops, Portale und Multi-Brand Setups mit hoher Komplexität.",
      features: [
        "Custom Seiten-/Produktvolumen",
        "Multi-Brand Monitoring",
        "API-/Shop-Anbindungen",
        "Custom Dashboards",
        "Strategische GEO-Beratung"
      ],
      cta: "Angebot erhalten"
    }
  ]
};

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

function Button({
  children,
  variant = "solid",
  className = "",
  href = "#/kontakt"
}) {
  const base =
    "inline-flex items-center justify-center rounded-xl px-6 py-4 text-base md:text-lg font-semibold transition duration-200";

  const styles =
    variant === "outline"
      ? "border border-cyan-300/35 bg-transparent text-cyan-100 hover:bg-cyan-300/10"
      : "bg-cyan-300 text-slate-950 shadow-lg shadow-cyan-950/30 hover:bg-cyan-200";

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
  return (
    <div
      className={`rounded-3xl border border-cyan-300/15 bg-white/[0.035] ${className}`}
    >
      {children}
    </div>
  );
}

function Logo() {
  return (
    <div className="select-none text-2xl font-light tracking-[0.32em] text-cyan-300 md:text-4xl">
      VOIXERO
    </div>
  );
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
          <a href="#/" className="font-semibold text-cyan-300">
            Startseite
          </a>

          <a
            href="#/cognia"
            className="transition hover:text-cyan-300"
          >
            Cognia
          </a>

          <a
            href="#/convert"
            className="transition hover:text-cyan-300"
          >
            Convert
          </a>

          <a
            href="#/preise"
            className="transition hover:text-cyan-300"
          >
            Preise
          </a>
        </nav>

        <div className="hidden md:block">
          <Button
            href={calendlyLink}
            className="px-5 py-3 text-sm md:text-base"
          >
            Live Demo buchen
          </Button>
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
            <a
              onClick={closeMenu}
              href="#/"
              className="rounded-xl border border-cyan-300/10 bg-white/[0.03] px-4 py-3 text-cyan-300"
            >
              Startseite
            </a>

            <a
              onClick={closeMenu}
              href="#/cognia"
              className="rounded-xl border border-cyan-300/10 bg-white/[0.03] px-4 py-3 hover:text-cyan-300"
            >
              Cognia
            </a>

            <a
              onClick={closeMenu}
              href="#/convert"
              className="rounded-xl border border-cyan-300/10 bg-white/[0.03] px-4 py-3 hover:text-cyan-300"
            >
              Convert
            </a>

            <a
              onClick={closeMenu}
              href="#/preise"
              className="rounded-xl border border-cyan-300/10 bg-white/[0.03] px-4 py-3 hover:text-cyan-300"
            >
              Preise
            </a>

            <Button
              href={calendlyLink}
              className="mt-2 w-full py-4"
            >
              Live Demo buchen
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  );
}

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: "easeOut" },
  viewport: { once: true, amount: 0.25 }
};

function Highlight({ children }) {
  return <span className="font-bold text-cyan-300">{children}</span>;
}

function AnimatedParticles() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {Array.from({ length: 26 }).map((_, i) => (
        <motion.span
          key={i}
          className="absolute h-1 w-1 rounded-full bg-cyan-300/60"
          style={{
            left: `${(i * 37) % 100}%`,
            top: `${(i * 53) % 100}%`
          }}
          animate={{
            y: [-20, 22, -20],
            opacity: [0.15, 0.8, 0.15],
            scale: [1, 1.8, 1]
          }}
          transition={{
            duration: 3 + (i % 7) * 0.45,
            repeat: Infinity,
            delay: i * 0.11,
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}
function Home() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-[#070b1c] px-6 pt-36 text-white">
        <AnimatedParticles />

        <div className="relative mx-auto grid min-h-[calc(100vh-9rem)] max-w-7xl items-center gap-14 py-16 lg:grid-cols-2">
          <div>
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100"
            >
              <Icon name="spark" size="text-lg" />
              Die Zukunft ist jetzt
            </motion.div>

            <h1 className="max-w-3xl text-5xl font-light leading-tight md:text-7xl">
              Die <Highlight>Zukunft</Highlight> der perfekten Symbiose zwischen{" "}
              <Highlight>Mensch</Highlight> und <Highlight>KI</Highlight>
            </h1>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                href={calendlyLink}
                className="px-7 py-5"
              >
                Termin vereinbaren
              </Button>

              <Button
                href="#/convert"
                variant="outline"
                className="px-7 py-5"
              >
                Unsere Lösungen
              </Button>
            </div>
          </div>

          <div className="relative">
            <img
              src={overviewImage}
              alt="Voixero Übersicht"
              className="w-full rounded-3xl object-cover shadow-[0_0_80px_rgba(28,173,198,0.25)]"
            />
          </div>
        </div>
      </section>
    </>
  );
}

function ConvertPage() {
  return (
    <section className="relative overflow-hidden bg-[#070b1c] px-6 pb-20 pt-40 text-white">
      <AnimatedParticles />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-5 text-cyan-300">Voixero Convert</p>

            <h1 className="text-5xl font-light leading-tight md:text-7xl">
              Aus SEO wird <Highlight>GEO</Highlight>.
            </h1>

            <p className="mt-8 text-2xl leading-relaxed text-white/75">
              Convert optimiert die KI-Sichtbarkeit Ihrer Website oder Ihres
              Webshops für ChatGPT, Google AI, Perplexity & Co.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                href={calendlyLink}
                className="px-7 py-5"
              >
                90 Tage Demo starten
              </Button>

              <Button
                href="#/preise"
                variant="outline"
                className="px-7 py-5"
              >
                Preise ansehen
              </Button>
            </div>
          </div>

          <div>
            <img
              src={convertImage}
              alt="Voixero Convert"
              className="w-full rounded-3xl object-cover shadow-[0_0_80px_rgba(28,173,198,0.25)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
function CogniaPage() {
  return (
    <section className="relative overflow-hidden bg-[#070b1c] px-6 pb-20 pt-40 text-white">
      <AnimatedParticles />

      <div className="mx-auto max-w-7xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="mb-5 text-cyan-300">Voixero Cognia</p>

            <h1 className="text-5xl font-light leading-tight md:text-7xl">
              KI-Telefonie für modernen <Highlight>Kundendienst</Highlight>.
            </h1>

            <p className="mt-8 text-2xl leading-relaxed text-white/75">
              Cognia automatisiert Kundenkontakte, beantwortet Anfragen,
              erstellt Tickets und unterstützt Ihr Team 24/7.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button href={calendlyLink} className="px-7 py-5">
                Live Demo buchen
              </Button>

              <Button
                href="#/preise"
                variant="outline"
                className="px-7 py-5"
              >
                Preise ansehen
              </Button>
            </div>
          </div>

          <div>
            <img
              src={overviewImage}
              alt="Voixero Cognia"
              className="w-full rounded-3xl object-cover shadow-[0_0_80px_rgba(28,173,198,0.25)]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
function useHashRoute() {
  const getRoute = () =>
    window.location.hash.replace("#", "") || "/";

  const [route, setRoute] = useState(getRoute());

  useEffect(() => {
    const onHashChange = () => {
      setRoute(getRoute());
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    };

    window.addEventListener("hashchange", onHashChange);

    return () =>
      window.removeEventListener(
        "hashchange",
        onHashChange
      );
  }, []);

  return route;
}

export default function App() {
  const route = useHashRoute();

  let Page = Home;

  if (route === "/convert") {
    Page = ConvertPage;
  }

  if (route === "/cognia") {
    Page = CogniaPage;
  }

  return (
    <main className="min-h-screen bg-[#070b1c] font-sans">
      <Nav />
      <Page />
    </main>
  );
}