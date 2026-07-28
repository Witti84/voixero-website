import React from "react";
import Button from "./Button";

const content = {
  convert: {
    eyebrow: "Voixero kombinieren",
    title: "Convert mit Concierge oder Cognia verbinden.",
    text: "Stellen Sie Ihre individuelle Voixero-Lösung zusammen. Kombinieren Sie KI-Sichtbarkeit, digitale Kundenberatung und KI-Telefonie und sehen Sie Preise sowie mögliche Bundle-Vorteile direkt.",
    button: "Lösung konfigurieren",
  },

  concierge: {
    eyebrow: "Die komplette Customer Journey",
    title: "Concierge ist erst der Anfang.",
    text: "Kombinieren Sie Ihre digitale Kundenberatung mit Convert für mehr KI-Sichtbarkeit und Cognia für automatisierte Kundenkontakte.",
    button: "Voixero Lösung konfigurieren",
  },

  cognia: {
    eyebrow: "Ihre individuelle KI-Lösung",
    title: "Cognia mit Convert und Concierge kombinieren.",
    text: "Stellen Sie Ihre komplette Voixero-Lösung selbst zusammen und sehen Sie monatliche Kosten, Setup und mögliche Bundle-Vorteile direkt.",
    button: "Konfiguration starten",
  },

  pricing: {
    eyebrow: "Voixero Konfigurator",
    title: "Nicht sicher, welches Paket zu Ihnen passt?",
    text: "Kombinieren Sie Convert, Concierge und Cognia und lassen Sie sich Ihre individuelle Voixero-Konfiguration direkt berechnen.",
    button: "Zum Konfigurator",
  },

  roi: {
    eyebrow: "Nächster Schritt",
    title: "Das Potenzial überzeugt? Stellen Sie jetzt Ihre Lösung zusammen.",
    text: "Wählen Sie die passenden Voixero-Produkte und Pakete und sehen Sie Ihre individuelle Preisstruktur direkt im Konfigurator.",
    button: "Voixero konfigurieren",
  },

  default: {
    eyebrow: "Voixero Konfigurator",
    title: "Stellen Sie Ihre individuelle Voixero-Lösung zusammen.",
    text: "Kombinieren Sie Convert, Concierge und Cognia und sehen Sie Ihre individuelle Konfiguration und Preise direkt.",
    button: "Konfiguration starten",
  },
};

export default function ConfiguratorCTA({
  context = "default",
}) {
  const item =
    content[context] || content.default;

  return (
    <section className="bg-[#070b1c] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-white/[0.035] px-7 py-12 md:px-12 md:py-16">
          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-cyan-300/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1fr_auto] lg:items-center">
            <div className="max-w-4xl">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                {item.eyebrow}
              </p>

              <h2 className="mt-4 text-3xl font-light leading-tight md:text-5xl">
                {item.title}
              </h2>

              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-white/55">
                {item.text}
              </p>
            </div>

            <div className="lg:text-right">
              <Button
                href="#/konfigurator"
                className="px-8 py-5"
              >
                {item.button}
              </Button>

              <p className="mt-3 text-xs text-white/30">
                Preise direkt und unverbindlich berechnen
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}