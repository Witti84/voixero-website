import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import overviewImage from "./assets/voixero-overview.png";
import benefitsImage from "./assets/voixero-benefits.png";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import Button from "./components/shared/Button";
import Card from "./components/shared/Card";
import Icon from "./components/shared/Icon";
import Logo from "./components/shared/Logo";
import Highlight from "./components/shared/Highlight";
import ConciergePage from "./pages/ConciergePage";
import GeoAnalyzer from "./components/convert/GeoAnalyzer";
import { pricing } from "./data/pricing";
import ProductConfigurator from "./components/pricing/ProductConfigurator";
import ROIPage from "./pages/ROIPage";
import GEOAnalysisPage from "./pages/GEOAnalysisPage";
import ConfiguratorPage from "./pages/ConfiguratorPage";
import ConfiguratorCTA from "./components/shared/ConfiguratorCTA";
import ImpressumPage from "./pages/ImpressumPage";
import DatenschutzPage from "./pages/DatenschutzPage";
import SolutionsPage from "./pages/SolutionsPage";
import convertVideo from "./assets/voixero-convert-video.mp4";
import cogniaDemoAudio from "./assets/SusiVs.KIM.mpeg";

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
function runSmokeTests() {
  console.assert(
    heroCards.length === 3,
    "Hero should contain three core cards."
  );

  console.assert(
    positioningPoints.includes("mehr Abschlüsse"),
    "Positioning points should include sales outcome."
  );

  console.assert(
    cogniaFeatures.length === 9,
    "Cognia should contain nine feature cards."
  );

  console.assert(
    convertBlocks.length === 3,
    "Convert should contain three product sections."
  );

  console.assert(
    pricing.cognia.length === 4,
    "Cognia should contain four pricing tiers."
  );

  console.assert(
    pricing.convert.length === 4,
    "Convert should contain four pricing tiers."
  );

  console.assert(
    pricing.concierge.length === 4,
    "Concierge should contain four pricing tiers."
  );
}

runSmokeTests();






const fadeUp = { initial: { opacity: 0, y: 28 }, whileInView: { opacity: 1, y: 0 }, transition: { duration: 0.65, ease: "easeOut" }, viewport: { once: true, amount: 0.25 } };

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
      <section
        id="home"
        className="relative min-h-screen overflow-hidden bg-[#070b1c] px-6 pt-44 text-white md:pt-36"
      >
        <AnimatedParticles />

        <motion.div
          className="absolute left-1/2 top-1/4 h-[620px] w-[620px] -translate-x-1/2 rounded-full bg-cyan-300/10 blur-3xl"
          animate={{
            scale: [1, 1.12, 1],
            x: [-20, 20, -20],
          }}
          transition={{
            duration: 9,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="relative mx-auto grid min-h-[calc(100vh-9rem)] max-w-7xl items-center gap-14 py-16 lg:grid-cols-[0.95fr_1.05fr]">
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/25 bg-cyan-300/10 px-4 py-2 text-sm text-cyan-100"
              animate={{
                boxShadow: [
                  "0 0 0px rgba(28,173,198,0)",
                  "0 0 28px rgba(28,173,198,.28)",
                  "0 0 0px rgba(28,173,198,0)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <Icon name="spark" size="text-lg" />
              Die Zukunft ist jetzt
            </motion.div>

            <h1 className="max-w-3xl text-5xl font-light leading-tight md:text-7xl">
              Die <Highlight>Zukunft</Highlight> der perfekten
              Symbiose zwischen <Highlight>Mensch</Highlight> und{" "}
              <Highlight>KI</Highlight>
            </h1>

            <motion.div
              className="mt-8 h-1 rounded-full bg-gradient-to-r from-cyan-300 to-transparent"
              initial={{ width: 0, opacity: 0 }}
              animate={{ width: 220, opacity: 1 }}
              transition={{ delay: 0.45, duration: 0.9 }}
            />

            <div className="mt-10 space-y-4 text-xl text-white/80 md:text-2xl">
              <p>
                <Highlight>optimiert</Highlight> und automatisiert
                durch KI
              </p>

              <p>
                <Highlight>perfektioniert</Highlight> und
                koordiniert durch Menschen
              </p>

              <p>
                <Highlight>maximiert</Highlight> Sichtbarkeit Ihrer
                Produkte und Dienstleistungen
              </p>
            </div>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                href="https://calendly.com/voixero_demo/30min"
                className="px-7 py-5"
              >
                Jetzt Termin vereinbaren
                <Icon
                  name="arrow"
                  size="text-2xl"
                  className="ml-2"
                />
              </Button>

              <Button
                href="#/loesungen"
                variant="outline"
                className="px-7 py-5"
              >
                Unsere Lösungen
              </Button>
            </div>
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
  return (
    <section className="bg-[#070b1c] px-6 py-24 text-white">
      <div className="mx-auto grid max-w-7xl gap-8 md:grid-cols-2 lg:grid-cols-3">
        <ProductCard
          title="Voixero Convert"
          subtitle="GEO-Optimierung für Websites und Webshops"
          text="Macht Ihre Produkte und Dienstleistungen sichtbar in KI-Antworten und verwandelt neuen KI-Traffic in Umsatz."
          href="#/convert"
          icon="globe"
        />

        <ProductCard
          title="Voixero Concierge"
          subtitle="KI-Beratung und Navigation für Ihre Website"
          text="Versteht die Absicht Ihrer Besucher, begleitet sie aktiv durch Ihre Website und führt sie gezielt zur passenden Information, zum Produkt oder zum Abschluss."
          href="#/concierge"
          icon="target"
        />

        <ProductCard
          title="Voixero Cognia"
          subtitle="KI-Telefonlösung für Service, Support und Vertrieb"
          text="Automatisiert Kundenkontakte in Echtzeit, integriert sich in bestehende Systeme und entlastet Teams ohne Qualitätsverlust."
          href="#/cognia"
          icon="phone"
        />
      </div>
    </section>
  );
}

function ProductCard({ title, subtitle, text, href, icon }) {
  return <motion.a {...fadeUp} href={href} className="group rounded-[2rem] border border-cyan-300/15 bg-white/[0.035] p-8 shadow-2xl shadow-cyan-950/20 transition hover:border-cyan-300/40 hover:bg-cyan-300/5"><Icon name={icon} className="mb-8 h-16 w-16 rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-300" /><p className="mb-3 text-cyan-300">{subtitle}</p><h3 className="text-4xl font-light text-white">{title}</h3><p className="mt-5 text-xl leading-relaxed text-white/65">{text}</p><div className="mt-8 text-lg font-bold text-cyan-200">Mehr erfahren <span className="transition group-hover:translate-x-2 inline-block">→</span></div></motion.a>;
}

function ProductHero({
  label,
  title,
  text,
  primary,
  secondary,
  visual,
  primaryHref = "https://calendly.com/voixero_demo/30min",
  secondaryHref = "#/preise",
}) {
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
          <p className="mb-5 text-cyan-300">
            {label}
          </p>

          <h1 className="text-5xl font-light leading-tight md:text-7xl">
            {title}
          </h1>

          <p className="mt-8 text-2xl leading-relaxed text-white/75">
            {text}
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button
              href={primaryHref}
              className="px-7 py-5"
            >
              {primary}
              <Icon
                name="arrow"
                size="text-2xl"
                className="ml-2"
              />
            </Button>

            <Button
              href={secondaryHref}
              variant="outline"
              className="px-7 py-5"
            >
              {secondary}
            </Button>
          </div>
        </motion.div>

{visual && (
  <div className="mt-16">
    {visual}
  </div>
)}
      </div>
    </section>
  );
}

function CogniaPage() {
  return (
    <>
<ProductHero
  label="Voixero Cognia"
  title={
    <>
      KI-Telefonie, die{" "}
      <Highlight>Service</Highlight>{" "}
      skalierbar macht.
    </>
  }
  text="Cognia nimmt Anrufe entgegen, versteht Anliegen, beantwortet Fragen, erstellt Tickets und übergibt komplexe Fälle an Menschen – zuverlässig, mehrsprachig und rund um die Uhr."
  primary="Live mit Moni sprechen"
  primaryHref="tel:+41445155278"
  secondary="Preise ansehen"
  secondaryHref="#/preise"
/>
      <CogniaAudioComparison />

      <PricingSection
        product="cognia"
        title="Cognia Preise"
        subtitle="Skalierbar nach Gesprächsvolumen, Integrationen und gewünschtem Automatisierungsgrad."
      />

      <ConfiguratorCTA context="cognia" />
    </>
  );
}


function CogniaAudioComparison() {
  const audioRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);

  const waveformBars = [
    30, 48, 72, 88, 60, 96, 76, 52, 82, 92, 64, 42, 70, 86, 58,
    74, 50, 36, 62, 78, 54, 40, 66, 48, 32,
  ];

  const togglePlayback = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    try {
      if (audio.paused) {
        await audio.play();
      } else {
        audio.pause();
      }
    } catch (error) {
      console.error("Audio konnte nicht abgespielt werden:", error);
    }
  };

  const handleTimeUpdate = () => {
    if (audioRef.current) {
      setCurrentTime(audioRef.current.currentTime);
    }
  };

  const handleLoadedMetadata = () => {
    const audio = audioRef.current;
    if (!audio) return;
    setDuration(Number.isFinite(audio.duration) ? audio.duration : 0);
  };

  const handleSeek = (event) => {
    const audio = audioRef.current;
    const newTime = Number(event.target.value);
    if (!audio) return;

    audio.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleEnded = () => {
    setIsPlaying(false);
    setCurrentTime(0);
    if (audioRef.current) {
      audioRef.current.currentTime = 0;
    }
  };

  const formatTime = (seconds) => {
    if (!Number.isFinite(seconds)) return "0:00";

    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60)
      .toString()
      .padStart(2, "0");

    return `${minutes}:${remainingSeconds}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <section className="bg-[#070b1c] px-6 py-24 text-white">
      <motion.div
        {...fadeUp}
        className="mx-auto max-w-7xl overflow-hidden rounded-[2.5rem] border border-cyan-300/20 bg-gradient-to-br from-[#101b35] via-[#0b1328] to-[#070b1c] px-7 py-10 shadow-[0_30px_100px_rgba(0,0,0,0.35)] md:px-12 md:py-14"
      >
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.35fr_0.8fr] lg:items-center">
          <div className="text-left">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/35">
              Ausgangspunkt
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-white">Susi</h3>
            <p className="mt-1 text-sm font-semibold text-cyan-300">
              KI Generation 1
            </p>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-white/50">
              Strukturierte Dialoge und solide Spracherkennung als Basis der ersten
              Cognia-Generation.
            </p>
            <div className="mt-6 inline-flex rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-xs text-white/45">
              Erste Voice-Generation
            </div>
          </div>

          <div>
            <div className="mb-6 flex items-center justify-center gap-4">
              <div className="h-px w-10 bg-cyan-300/25" />
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-cyan-300">
                Cognia Voice Engine
              </p>
              <div className="h-px w-10 bg-cyan-300/25" />
            </div>

            <div className="rounded-[2rem] border border-cyan-300/15 bg-black/20 p-6 backdrop-blur-sm md:p-8">
              <button
                type="button"
                onClick={togglePlayback}
className="group flex min-h-[150px] w-full items-center justify-center rounded-[1.5rem] border border-cyan-300/10 bg-[#0b1328]/70 px-6 transition duration-300 hover:border-cyan-300/30 hover:bg-cyan-300/[0.035]"
                aria-label={isPlaying ? "Audio pausieren" : "Audio abspielen"}
              >
<span className="mr-6 flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-cyan-300/35 bg-cyan-300/[0.08] text-cyan-300 shadow-[0_0_30px_rgba(34,211,238,0.12)] transition duration-300 group-hover:scale-105 group-hover:border-cyan-300/60 group-hover:bg-cyan-300/[0.14]">
  {isPlaying ? (
    <span className="flex items-center gap-1.5">
      <span className="h-5 w-1.5 rounded-full bg-cyan-300" />
      <span className="h-5 w-1.5 rounded-full bg-cyan-300" />
    </span>
  ) : (
    <span className="ml-1 block h-0 w-0 border-y-[9px] border-l-[14px] border-y-transparent border-l-cyan-300" />
  )}
</span>

                <span className="flex h-24 flex-1 items-center justify-center gap-[5px]">
                  {waveformBars.map((height, index) => {
                    const active =
                      (index / waveformBars.length) * 100 <= progress;

                    return (
                      <span
                        key={`${height}-${index}`}
                        className={`block w-[5px] rounded-full transition-all duration-300 ${
                          active ? "bg-cyan-300" : "bg-cyan-300/25"
                        } ${isPlaying ? "animate-pulse" : ""}`}
                        style={{
                          height: `${height}%`,
                          animationDelay: `${index * 45}ms`,
                        }}
                      />
                    );
                  })}
                </span>
              </button>

              <div className="mt-6">
                <input
                  type="range"
                  min="0"
                  max={duration || 0}
                  step="0.1"
                  value={currentTime}
                  onChange={handleSeek}
                  className="h-1.5 w-full cursor-pointer appearance-none rounded-full bg-white/10 accent-cyan-300"
                  aria-label="Position im Audiobeispiel"
                />

                <div className="mt-3 flex items-center justify-between text-xs text-white/35">
                  <span>{formatTime(currentTime)}</span>
                  <span>Direkter Generationenvergleich</span>
                  <span>{formatTime(duration)}</span>
                </div>
              </div>

              <audio
                ref={audioRef}
                preload="metadata"
                onPlay={() => setIsPlaying(true)}
                onPause={() => setIsPlaying(false)}
                onEnded={handleEnded}
                onTimeUpdate={handleTimeUpdate}
                onLoadedMetadata={handleLoadedMetadata}
              >
                <source src={cogniaDemoAudio} type="audio/mpeg" />
                Ihr Browser unterstützt die Audiowiedergabe nicht.
              </audio>
            </div>
          </div>

          <div className="text-left lg:text-right">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Ergebnis
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-white">KIM</h3>
            <p className="mt-1 text-sm font-semibold text-cyan-300">
              KI Generation 2
            </p>
            <p className="mt-5 ml-auto max-w-xs text-sm leading-relaxed text-white/50">
              Präziseres Verständnis, schnellere Reaktionen und deutlich natürlichere,
              flüssigere Gespräche.
            </p>
            <div className="mt-6 inline-flex rounded-full border border-cyan-300/20 bg-cyan-300/[0.07] px-4 py-2 text-xs text-cyan-200">
              Weiterentwickelte Voice Engine
            </div>
          </div>
        </div>

        <div className="my-12 h-px bg-gradient-to-r from-transparent via-cyan-300/20 to-transparent" />

        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Hören Sie den Unterschied
          </p>
          <h2 className="mt-5 text-4xl font-light leading-tight text-white md:text-5xl lg:text-6xl">
            KIM klingt nicht wie ein klassischer Voicebot.
          </h2>
          <p className="mt-4 text-3xl font-semibold leading-tight text-cyan-300 md:text-4xl lg:text-5xl">
            KIM klingt wie die nächste Generation KI-Telefonie.
          </p>
          <p className="mx-auto mt-7 max-w-2xl text-base leading-relaxed text-white/45">
            Erleben Sie den direkten Vergleich zwischen Susi, unserer ersten
            KI-Generation, und KIM, der weiterentwickelten Cognia Voice Engine.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <span className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-white/55">
              Natürlichere Sprache
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-white/55">
              Präziseres Verständnis
            </span>
            <span className="rounded-full border border-white/10 bg-white/[0.035] px-4 py-2 text-sm text-white/55">
              Schnellere Reaktionen
            </span>
          </div>
        </div>
      </motion.div>
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
            Aus SEO wird <Highlight>GEO</Highlight>.
          </>
        }
        text="Convert optimiert die KI-Sichtbarkeit Ihrer Website oder Ihres Webshops für ChatGPT, Google AI, Perplexity & Co. – damit Ihre Marke gefunden, verstanden und empfohlen wird."
        primary="GEO-Analyse starten"
        primaryHref="#/geo-analyse"
        secondary="Preise ansehen"
        secondaryHref="#/preise"
        visual={<ConvertVisual />}
      />

      <GeoAnalyzer />

      <section className="bg-[#111025] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <motion.div {...fadeUp} className="mb-14">
            <p className="mb-3 text-cyan-300">
              Convert Module
            </p>

            <h2 className="text-4xl font-light md:text-6xl">
              Von Sichtbarkeit zu{" "}
              <Highlight>mehr Umsatz</Highlight>.
            </h2>
          </motion.div>

          <div className="grid gap-8">
            {convertBlocks.map((block) => (
              <motion.div
                {...fadeUp}
                key={block.title}
                className="grid gap-10 rounded-[2rem] border border-cyan-300/15 bg-white/[0.035] p-7 lg:grid-cols-[0.9fr_1.1fr] lg:items-center"
              >
                <div>
                  <Icon
                    name={block.icon}
                    className="mb-5 h-14 w-14 rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-300"
                  />

                  <h3 className="mb-6 text-4xl font-light">
                    <Highlight>
                      {block.title}
                    </Highlight>
                  </h3>

                  <ul className="space-y-4 text-xl text-white/75">
                    {block.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3"
                      >
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

                <ConvertDashboard
                  type={block.dashboardType}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <PricingSection
        product="convert"
        title="Convert Preise"
        subtitle="Für Websites, Shops und Unternehmen, die in KI-Antworten sichtbar werden wollen."
      />
      <ConfiguratorCTA context="convert" />
    </>
  );
}


function ConvertVisual() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8 }}
      className="relative overflow-hidden rounded-3xl border border-cyan-300/20 bg-[#070b1c] p-3 shadow-2xl shadow-cyan-950/30"
    >
      <video
        controls
        preload="metadata"
        playsInline
        className="w-full rounded-2xl bg-[#070b1c] object-cover shadow-[0_0_80px_rgba(28,173,198,0.25)]"
      >
        <source
          src={convertVideo}
          type="video/mp4"
        />

        Ihr Browser unterstützt die Videowiedergabe nicht.
      </video>
    </motion.div>
  );
}

function ConvertDashboard({ type }) {
  return <div className="rounded-3xl bg-white p-6 text-slate-900 shadow-2xl"><div className="mb-5 flex items-center justify-between border-b pb-4"><div className="font-bold text-slate-800">VOIXERO Convert</div><div className="rounded-full bg-cyan-50 px-3 py-1 text-sm text-cyan-700">{type}</div></div><div className="grid gap-4 md:grid-cols-3"><div className="rounded-2xl border p-4"><Icon name="gauge" className="mb-3 text-cyan-600" /><div className="text-3xl font-bold">78</div><p className="text-sm text-slate-500">Visibility Score</p></div><div className="rounded-2xl border p-4"><Icon name="line" className="mb-3 text-cyan-600" /><div className="text-3xl font-bold">#3.2</div><p className="text-sm text-slate-500">Ø Position</p></div><div className="rounded-2xl border p-4"><Icon name="spark" className="mb-3 text-cyan-600" /><div className="text-3xl font-bold">88</div><p className="text-sm text-slate-500">Sentiment</p></div></div><div className="mt-5 h-32 rounded-2xl border bg-gradient-to-br from-cyan-50 to-white p-4"><div className="h-full rounded-xl border border-cyan-100 bg-[linear-gradient(110deg,transparent_20%,rgba(28,173,198,.16),transparent_80%)]" /></div></div>;
}

function PricingPage() {
  const [configProduct, setConfigProduct] =
    useState("convert");

  const openConfigurator = (product) => {
    setConfigProduct(product);

    window.setTimeout(() => {
      const element =
        document.getElementById(
          "produktkonfigurator"
        );

      if (element) {
        element.scrollIntoView({
          behavior: "smooth",
          block: "start",
        });
      }
    }, 50);
  };

  return (
    <>
      <section className="bg-[#070b1c] px-6 pb-10 pt-40 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-cyan-300">
            Preise
          </p>

          <h1 className="text-5xl font-light md:text-7xl">
            Transparente Pakete.{" "}
            <Highlight>
              Skalierbar
            </Highlight>{" "}
            nach Bedarf.
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-xl leading-relaxed text-white/70">
            Wählen Sie den passenden Einstieg
            für Ihre Anforderungen. Volumen,
            Integrationen und Zusatzleistungen
            können individuell konfiguriert
            werden.
          </p>
        </div>
      </section>

      <PricingSection
        product="convert"
        title="Voixero Convert"
        subtitle="GEO, KI-Sichtbarkeit und kontinuierliche Optimierung."
        onConfigure={openConfigurator}
      />

      <PricingSection
        product="concierge"
        title="Voixero Concierge"
        subtitle="Digitale KI-Beratung, Navigation und Customer Journey Automation."
        onConfigure={openConfigurator}
      />

      <PricingSection
        product="cognia"
        title="Voixero Cognia"
        subtitle="KI-Telefonie und automatisierte Kundenkommunikation."
        onConfigure={openConfigurator}
      />

      <ProductConfigurator
        product={configProduct}
        onProductChange={
          setConfigProduct
        }
      />
      <ConfiguratorCTA context="pricing" />
    </>
  );
}

function PricingSection({
  product,
  title,
  subtitle,
  onConfigure,
}) {
  return (
    <section className="bg-[#080d22] px-6 py-20 text-white">
      <div className="mx-auto max-w-[1500px]">
        <motion.div
          {...fadeUp}
          className="mb-10"
        >
          <p className="mb-3 text-cyan-300">
            {subtitle}
          </p>

          <h2 className="text-4xl font-light md:text-6xl">
            {title}
          </h2>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {pricing[product].map(
            (tier) => (
              <PricingCard
                key={
                  tier.id ||
                  tier.name
                }
                tier={tier}
                product={product}
                onConfigure={
                  onConfigure
                }
              />
            )
          )}
        </div>

        <p className="mt-8 text-sm leading-relaxed text-white/45">
          Alle Preise exkl. MwSt.
          Setup, Mehrvolumen,
          Zusatzoptionen, Integrationen und
          Sonderentwicklungen können separat
          verrechnet werden.
        </p>
      </div>
    </section>
  );
}

function PricingCard({
  tier,
  product,
  onConfigure,
}) {
  const packageName = tier.name
    .replace("Convert ", "")
    .replace("Concierge ", "")
    .replace("Cognia ", "");

  const isCustom =
    tier.monthlyPrice === null;

  const formatCHF = (
    value,
    decimals = 0
  ) => {
    if (
      value === null ||
      value === undefined
    ) {
      return "Individuell";
    }

    return `CHF ${Number(
      value
    ).toLocaleString("de-CH", {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    })}`;
  };

  const formatNumber = (value) =>
    Math.round(
      Number(value || 0)
    ).toLocaleString("de-CH");

  const handleConfigure = () => {
    if (onConfigure) {
      onConfigure(product);
      return;
    }

    window.location.hash =
      "/preise";
  };

  return (
    <Card
      className={`relative flex h-full flex-col p-7 ${
        tier.highlighted
          ? "border-cyan-300/50 bg-cyan-300/10 shadow-2xl shadow-cyan-950/30"
          : ""
      }`}
    >
      {tier.highlighted && (
        <div className="absolute right-5 top-5 rounded-full bg-cyan-300 px-3 py-1 text-xs font-bold text-slate-950">
          Empfohlen
        </div>
      )}

      <h3 className="min-h-[44px] pr-20 text-3xl font-light text-white">
        {packageName}
      </h3>

      <div className="mt-5 flex min-h-[58px] items-end gap-2">
        <span className="text-4xl font-bold text-cyan-300">
          {tier.price}
        </span>

        {tier.period && (
          <span className="pb-1 text-white/50">
            {tier.period}
          </span>
        )}
      </div>

      <p className="mt-5 min-h-[105px] leading-relaxed text-white/65">
        {tier.description}
      </p>

      <ul className="mt-7 flex-1 space-y-3">
        {tier.features.map(
          (feature) => (
            <li
              key={feature}
              className="flex gap-3 leading-relaxed text-white/75"
            >
              <Icon
                name="check"
                size="text-lg"
                className="mt-1 shrink-0 text-cyan-300"
              />

              <span>
                {feature}
              </span>
            </li>
          )
        )}
      </ul>

      <div className="mt-7 border-t border-white/10 pt-5 text-sm">
        {tier.includedMinutes &&
          typeof tier.includedMinutes ===
            "number" && (
            <div className="mb-2 flex justify-between gap-4">
              <span className="text-white/40">
                Inklusiv
              </span>

              <span className="text-right text-white/70">
                {formatNumber(
                  tier.includedMinutes
                )}{" "}
                Min.
              </span>
            </div>
          )}

        {tier.overagePerMinute &&
          typeof tier.overagePerMinute ===
            "number" && (
            <div className="mb-2 flex justify-between gap-4">
              <span className="text-white/40">
                Mehrverbrauch
              </span>

              <span className="text-right text-white/70">
                {formatCHF(
                  tier.overagePerMinute,
                  2
                )}{" "}
                / Min.
              </span>
            </div>
          )}

        {tier.annualDiscount &&
          typeof tier.annualDiscount ===
            "number" && (
            <div className="mb-2 flex justify-between gap-4">
              <span className="text-white/40">
                Jahreszahlung
              </span>

              <span className="text-right text-cyan-200">
                −
                {Math.round(
                  tier.annualDiscount *
                    100
                )}{" "}
                %
              </span>
            </div>
          )}

        <div className="flex justify-between gap-4">
          <span className="text-white/40">
            Setup einmalig
          </span>

          <span className="text-right text-white/70">
            {typeof tier.setupFee ===
            "number"
              ? formatCHF(
                  tier.setupFee
                )
              : "Individuell"}
          </span>
        </div>
      </div>

      <div className="mt-7">
        {isCustom ? (
          <Button
            href="https://calendly.com/voixero_demo/30min"
            className="w-full py-4"
          >
            Enterprise anfragen
          </Button>
        ) : (
          <button
            type="button"
            onClick={handleConfigure}
            className="inline-flex w-full items-center justify-center rounded-xl bg-cyan-300 px-6 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-950/30 transition duration-200 hover:bg-cyan-200 md:text-lg"
          >
            Paket konfigurieren
          </button>
        )}
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

if (route === "/convert") Page = ConvertPage;
if (route === "/concierge") Page = ConciergePage;
if (route === "/cognia") Page = CogniaPage;
if (route === "/preise") Page = PricingPage;
if (route === "/konfigurator") Page = ConfiguratorPage;
if (route === "/roi") Page = ROIPage;
if (route === "/geo-analyse") Page = GEOAnalysisPage;
if (route === "/kontakt") Page = ContactPage;
if (route === "/impressum") Page = ImpressumPage;
if (route === "/datenschutz") Page = DatenschutzPage;
if (route === "/loesungen") Page = SolutionsPage;

  return (
    <main className="min-h-screen bg-[#070b1c] font-sans">
      <Header />
      <Page />
      <Footer />
    </main>
  );
}