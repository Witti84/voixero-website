import React from "react";
import { motion } from "framer-motion";

const trialBenefits = [
  {
    number: "01",
    title: "KI-Sichtbarkeit verstehen",
    text: "Erkennen Sie, wie sichtbar Ihr Unternehmen in generativen Suchsystemen ist und bei welchen Themen Ihre Marke bereits berücksichtigt wird.",
  },
  {
    number: "02",
    title: "Wettbewerber vergleichen",
    text: "Sehen Sie, welche Wettbewerber häufiger genannt werden, wie gross der Abstand ist und wo konkrete Potenziale für Ihre Marke liegen.",
  },
  {
    number: "03",
    title: "Optimierungspotenziale erkennen",
    text: "Convert zeigt auf, welche Inhalte, Strukturen und Informationen fehlen, damit KI-Systeme Ihr Unternehmen besser verstehen können.",
  },
  {
    number: "04",
    title: "Fortschritt messbar machen",
    text: "Verfolgen Sie während des Trials, wie sich Ihre Sichtbarkeit entwickelt und welche Massnahmen Wirkung zeigen.",
  },
];

const trialSteps = [
  {
    month: "Monat 1",
    title: "Analyse & Ausgangslage",
    text: "Wir erfassen Ihre Marke, relevante Themen und Wettbewerber und schaffen eine klare Ausgangsbasis für Ihre KI-Sichtbarkeit.",
  },
  {
    month: "Monat 2",
    title: "Optimierung & Entwicklung",
    text: "Die wichtigsten Potenziale werden priorisiert. Sie sehen, wo Inhalte und Strukturen verbessert werden können und wie sich Ihre Position entwickelt.",
  },
  {
    month: "Monat 3",
    title: "Ergebnis & Entscheidung",
    text: "Nach drei Monaten erhalten Sie eine belastbare Grundlage, um den Nutzen von GEO und Convert für Ihr Unternehmen zu bewerten.",
  },
];

const faqItems = [
  {
    question: "Gibt es eine automatische Verlängerung?",
    answer:
      "Nein. Der Trial endet nach drei Monaten. Es gibt keine automatische Verlängerung und keine langfristige Vertragsbindung.",
  },
  {
    question: "Für wen eignet sich der Trial?",
    answer:
      "Der Trial eignet sich für Unternehmen, die verstehen möchten, wie sichtbar ihre Marke, Produkte oder Dienstleistungen in KI-Systemen sind und wo Wettbewerber heute besser positioniert sind.",
  },
  {
    question: "Was passiert nach den drei Monaten?",
    answer:
      "Sie entscheiden selbst, ob und in welcher Form Sie Convert danach weiter nutzen möchten. Der Trial verpflichtet Sie zu keiner Fortsetzung.",
  },
];

export default function ConvertTrialPage() {
  const scrollToTrial = () => {
    document
      .getElementById("trial")
      ?.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen overflow-hidden bg-[#070B1C] text-white">
      {/* HERO */}
      <section className="relative px-6 pb-24 pt-32 md:pb-32 md:pt-40">
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute left-1/2 top-[-240px] h-[650px] w-[650px] -translate-x-1/2 rounded-full bg-cyan-400/[0.08] blur-[120px]" />
          <div className="absolute right-[-180px] top-[260px] h-[420px] w-[420px] rounded-full bg-blue-500/[0.06] blur-[120px]" />
        </div>

        <div className="relative mx-auto max-w-6xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-7 inline-flex items-center rounded-full border border-cyan-300/20 bg-cyan-300/[0.06] px-4 py-2 text-sm font-medium tracking-wide text-cyan-200">
              VOIXERO CONVERT · 3-MONATS-TRIAL
            </div>

            <h1 className="mx-auto max-w-5xl text-5xl font-light leading-[1.05] tracking-tight md:text-7xl">
              3 Monate.
              <br />
              <span className="text-cyan-300">
                Volle Transparenz über Ihre KI-Sichtbarkeit.
              </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-lg leading-relaxed text-white/65 md:text-xl">
              Finden Sie heraus, wie sichtbar Ihr Unternehmen in KI-Systemen
              ist, welche Wettbewerber häufiger empfohlen werden und welche
              Optimierungen Ihre Position nachhaltig verbessern können.
            </p>

            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <button
                type="button"
                onClick={scrollToTrial}
                className="rounded-full bg-cyan-300 px-8 py-4 font-semibold text-[#07111f] transition duration-300 hover:scale-[1.02] hover:bg-cyan-200"
              >
                3-Monats-Trial starten
              </button>

              <a
                href="#details"
                className="rounded-full border border-white/15 bg-white/[0.04] px-8 py-4 font-medium text-white transition hover:border-cyan-300/30 hover:bg-white/[0.07]"
              >
                Mehr erfahren
              </a>
            </div>

            <div className="mt-8 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-white/45">
              <span>✓ 3 Monate Laufzeit</span>
              <span>✓ Keine automatische Verlängerung</span>
              <span>✓ Keine langfristige Bindung</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROBLEM / CONTEXT */}
      <section id="details" className="px-6 py-24">
        <div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Die Suche verändert sich
            </p>

            <h2 className="text-4xl font-light leading-tight md:text-5xl">
              Gute Google-Sichtbarkeit reicht heute nicht mehr aus.
            </h2>
          </div>

          <div className="space-y-6 text-lg leading-relaxed text-white/60">
            <p>
              Immer mehr Kunden fragen KI-Systeme direkt nach Produkten,
              Anbietern, Lösungen und Empfehlungen.
            </p>

            <p>
              Entscheidend ist deshalb nicht nur, ob Ihre Website gefunden
              wird, sondern ob KI-Systeme Ihr Unternehmen verstehen,
              berücksichtigen und empfehlen.
            </p>

            <p className="text-white/80">
              Genau hier setzt Voixero Convert an.
            </p>
          </div>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Was Sie im Trial erfahren
            </p>

            <h2 className="text-4xl font-light md:text-5xl">
              Von der Vermutung zur messbaren Erkenntnis.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-2">
            {trialBenefits.map((item) => (
              <div
                key={item.number}
                className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-8 transition duration-300 hover:border-cyan-300/25 hover:bg-white/[0.05]"
              >
                <div className="mb-8 text-sm font-semibold text-cyan-300">
                  {item.number}
                </div>

                <h3 className="text-2xl font-semibold text-white">
                  {item.title}
                </h3>

                <p className="mt-4 leading-relaxed text-white/55">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3 MONTHS */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-6xl rounded-[2.5rem] border border-cyan-300/15 bg-gradient-to-br from-cyan-300/[0.07] via-white/[0.025] to-transparent p-8 md:p-12">
          <div className="mb-14 max-w-3xl">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              Der Trial
            </p>

            <h2 className="text-4xl font-light md:text-5xl">
              Drei Monate. Ein klares Ergebnis.
            </h2>
          </div>

          <div className="grid gap-5 md:grid-cols-3">
            {trialSteps.map((step) => (
              <div
                key={step.month}
                className="rounded-[1.75rem] border border-white/10 bg-[#0B1328]/75 p-7"
              >
                <div className="text-sm font-semibold uppercase tracking-widest text-cyan-300">
                  {step.month}
                </div>

                <h3 className="mt-5 text-xl font-semibold text-white">
                  {step.title}
                </h3>

                <p className="mt-4 text-sm leading-relaxed text-white/55">
                  {step.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PRICE */}
      <section id="trial" className="px-6 py-24">
        <div className="mx-auto max-w-5xl">
          <div className="overflow-hidden rounded-[2.5rem] border border-cyan-300/25 bg-white/[0.035] shadow-[0_0_100px_rgba(61,211,226,0.08)]">
            <div className="grid lg:grid-cols-[1.15fr_0.85fr]">
              <div className="p-8 md:p-12">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
                  Convert Business Trial
                </p>

                <h2 className="mt-5 text-4xl font-light md:text-5xl">
                  Testen statt langfristig binden.
                </h2>

                <p className="mt-6 max-w-xl leading-relaxed text-white/60">
                  Sie erhalten drei Monate Zeit, um Convert im realen Einsatz
                  kennenzulernen und den Nutzen von GEO für Ihr Unternehmen zu
                  bewerten.
                </p>

                <div className="mt-8 space-y-3 text-sm text-white/65">
                  <p>✓ Convert Business für 3 Monate</p>
                  <p>✓ Einrichtung und Startkonfiguration</p>
                  <p>✓ KI-Sichtbarkeitsanalyse</p>
                  <p>✓ Wettbewerbsvergleich</p>
                  <p>✓ Optimierungsempfehlungen</p>
                  <p>✓ Keine automatische Verlängerung</p>
                </div>
              </div>

              <div className="flex flex-col justify-between border-t border-white/10 bg-[#0B1328]/80 p-8 md:p-12 lg:border-l lg:border-t-0">
                <div>
                  <div className="text-sm text-white/45">
                    Komplettpreis für 3 Monate
                  </div>

                  <div className="mt-3 flex items-end gap-3">
                    <span className="text-5xl font-light text-white md:text-6xl">
                      CHF 448
                    </span>
                  </div>

                  <div className="mt-3 text-sm text-white/40">
                    zzgl. MwSt.
                  </div>

                  <div className="mt-8 border-t border-white/10 pt-6 text-sm leading-relaxed text-white/50">
                    CHF 349 Trial
                    <br />
                    + CHF 99 Setup
                  </div>
                </div>

                <a
                  href="mailto:info@voixero.ai?subject=Convert%203-Monats-Trial"
                  className="mt-10 inline-flex w-full items-center justify-center rounded-full bg-cyan-300 px-6 py-4 font-semibold text-[#07111f] transition duration-300 hover:scale-[1.02] hover:bg-cyan-200"
                >
                  Trial anfragen
                </a>

                <p className="mt-4 text-center text-xs text-white/35">
                  Keine automatische Verlängerung.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-6 py-24">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
              FAQ
            </p>

            <h2 className="text-4xl font-light md:text-5xl">
              Häufige Fragen
            </h2>
          </div>

          <div className="space-y-4">
            {faqItems.map((item) => (
              <div
                key={item.question}
                className="rounded-[1.5rem] border border-white/10 bg-white/[0.03] p-7"
              >
                <h3 className="text-lg font-semibold text-white">
                  {item.question}
                </h3>

                <p className="mt-3 leading-relaxed text-white/55">
                  {item.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="px-6 pb-32 pt-16">
        <div className="mx-auto max-w-5xl rounded-[2.5rem] border border-cyan-300/20 bg-cyan-300/[0.06] px-8 py-16 text-center md:px-14">
          <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300">
            Voixero Convert
          </p>

          <h2 className="mx-auto mt-5 max-w-3xl text-4xl font-light leading-tight md:text-5xl">
            Finden Sie heraus, wie sichtbar Ihre Marke in der KI-Suche wirklich
            ist.
          </h2>

          <p className="mx-auto mt-6 max-w-2xl leading-relaxed text-white/55">
            Drei Monate reichen aus, um aus Vermutungen belastbare Erkenntnisse
            zu machen.
          </p>

          <a
            href="mailto:info@voixero.ai?subject=Convert%203-Monats-Trial"
            className="mt-9 inline-flex rounded-full bg-cyan-300 px-9 py-4 font-semibold text-[#07111f] transition hover:scale-[1.02] hover:bg-cyan-200"
          >
            3-Monats-Trial starten
          </a>
        </div>
      </section>
    </div>
  );
}