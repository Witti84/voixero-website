import React from "react";
import Button from "../components/shared/Button";

const journeySteps = [
  {
    number: "01",
    product: "Voixero Convert",
    metric: "Sichtbarkeit",
    title: "Häufiger gefunden werden.",
    text: "Convert optimiert Ihre digitale Präsenz für KI-Systeme wie ChatGPT, Google AI, Perplexity & Co. und hilft dabei, Ihre Produkte und Dienstleistungen dort sichtbar zu machen, wo Kunden heute suchen.",
    result: "Mehr Sichtbarkeit",
    href: "#/convert",
  },
  {
    number: "02",
    product: "Mehr relevante Besucher",
    metric: "Traffic",
    title: "Aus Sichtbarkeit wird Reichweite.",
    text: "Wer in klassischen und KI-basierten Suchsystemen besser sichtbar ist, schafft zusätzliches Potenzial für qualifizierte Besucher auf der eigenen Website.",
    result: "Mehr Besucherpotenzial",
  },
  {
    number: "03",
    product: "Voixero Concierge",
    metric: "Conversion",
    title: "Aus Besuchern werden Kunden.",
    text: "Concierge versteht die Absicht Ihrer Website-Besucher, begleitet sie aktiv durch Ihre Inhalte und führt sie gezielt zum passenden Produkt, zur Anfrage oder zum Abschluss.",
    result: "Mehr Conversion-Potenzial",
    href: "#/concierge",
  },
  {
    number: "04",
    product: "Voixero Cognia",
    metric: "Customer Service",
    title: "Kundenservice ohne Öffnungszeiten.",
    text: "Cognia übernimmt telefonische Kundenkontakte in Service, Support und Vertrieb – rund um die Uhr, skalierbar und in bis zu 30 Sprachen.",
    result: "24/7 Kundenservice",
    href: "#/cognia",
  },
];

export default function SolutionsPage() {
  return (
    <>
      {/* HERO */}
      <section className="bg-[#070b1c] px-6 pb-20 pt-40 text-white">
        <div className="mx-auto max-w-7xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Voixero End-to-End
          </p>

          <h1 className="mx-auto mt-5 max-w-6xl text-5xl font-light leading-tight md:text-7xl">
            Von der ersten Suche
            <br />
            <span className="font-semibold text-cyan-300">
              bis zum perfekten Kundenservice.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-lg leading-relaxed text-white/60 md:text-xl">
            Voixero verbindet KI-Sichtbarkeit, Website-Conversion
            und automatisierte Kundenkommunikation zu einer
            durchgängigen Customer Journey.
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <Button href="#/konfigurator">
              End-to-End Lösung konfigurieren
            </Button>

            <Button
              href="https://calendly.com/voixero_demo/30min"
              variant="secondary"
            >
              Lösung besprechen
            </Button>
          </div>
        </div>
      </section>

      {/* END TO END FLOW */}
      <section className="bg-[#070b1c] px-6 pb-28 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="mb-12 text-center">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Eine durchgängige Customer Journey
            </p>

            <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-light leading-tight md:text-5xl">
              Jeder Schritt verstärkt
              <span className="font-semibold text-cyan-300">
                {" "}
                den nächsten.
              </span>
            </h2>
          </div>

          <div className="space-y-5">
            {journeySteps.map((step, index) => (
              <React.Fragment key={step.number}>
                <JourneyStep {...step} />

                {index < journeySteps.length - 1 && (
                  <JourneyConnector />
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* SIMPLE VALUE CHAIN */}
      <section className="bg-[#070b1c] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="rounded-[2.25rem] border border-cyan-300/15 bg-white/[0.035] p-8 md:p-12">
            <div className="text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Der Voixero Effekt
              </p>

              <h2 className="mt-4 text-4xl font-light md:text-5xl">
                Mehr aus jedem
                <span className="font-semibold text-cyan-300">
                  {" "}
                  Kundenkontakt.
                </span>
              </h2>
            </div>

            <div className="mt-14 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
              <ValueCard
                number="01"
                title="Gefunden werden"
                text="Convert erhöht die Sichtbarkeit Ihrer Angebote in einer zunehmend KI-geprägten Suche."
              />

              <ValueCard
                number="02"
                title="Besucher gewinnen"
                text="Mehr digitale Sichtbarkeit schafft zusätzliches Potenzial für relevante Besucher und neue Interessenten."
              />

              <ValueCard
                number="03"
                title="Mehr konvertieren"
                text="Concierge begleitet Besucher aktiv und reduziert Reibung auf dem Weg zur Anfrage oder zum Abschluss."
              />

              <ValueCard
                number="04"
                title="Optimal betreuen"
                text="Cognia führt die Customer Journey mit intelligentem telefonischem Service rund um die Uhr weiter."
              />
            </div>
          </div>
        </div>
      </section>

      {/* PRODUCTS */}
      <section className="bg-[#070b1c] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
              Drei Produkte. Ein Ziel.
            </p>

            <h2 className="mt-4 text-4xl font-light leading-tight md:text-5xl">
              Die gesamte digitale Customer Journey
              <span className="block font-semibold text-cyan-300">
                intelligent weiterentwickeln.
              </span>
            </h2>
          </div>

          <div className="mt-14 grid gap-6 lg:grid-cols-3">
            <ProductCard
              number="01"
              name="Convert"
              label="Acquire"
              title="Sichtbarkeit schaffen."
              text="Mit GEO-Optimierung, KI-Monitoring und automatisierten Empfehlungen macht Convert Ihre Website fit für die neue Generation der Suche."
              points={[
                "Sichtbarkeit in KI-Systemen messen",
                "GEO-Potenziale erkennen",
                "Inhalte kontinuierlich optimieren",
              ]}
              href="#/convert"
              button="Convert entdecken"
            />

            <ProductCard
              number="02"
              name="Concierge"
              label="Convert"
              title="Besucher aktiv begleiten."
              text="Concierge macht aus einer statischen Website einen intelligenten digitalen Berater, der Besucher versteht und zum nächsten Schritt führt."
              points={[
                "Besucherabsicht verstehen",
                "Aktiv durch die Website führen",
                "Conversion-Hürden reduzieren",
              ]}
              href="#/concierge"
              button="Concierge entdecken"
            />

            <ProductCard
              number="03"
              name="Cognia"
              label="Serve"
              title="Kunden jederzeit betreuen."
              text="Cognia automatisiert telefonische Kundenkontakte und ermöglicht skalierbaren Service, Support und Vertrieb ohne klassische Öffnungszeiten."
              points={[
                "24/7 erreichbar",
                "Bis zu 30 Sprachen",
                "Service, Support und Vertrieb",
              ]}
              href="#/cognia"
              button="Cognia entdecken"
            />
          </div>
        </div>
      </section>

      {/* BUNDLE */}
      <section className="bg-[#070b1c] px-6 py-24 text-white">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2.25rem] border border-cyan-300/20 bg-gradient-to-br from-cyan-300/[0.09] via-white/[0.035] to-transparent p-8 md:p-12">
            <div className="grid gap-12 lg:grid-cols-[1fr_1fr] lg:items-center">
              <div>
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
                  Voixero Bundle
                </p>

                <h2 className="mt-4 text-4xl font-light leading-tight md:text-5xl">
                  Nicht drei Insellösungen.
                  <span className="block font-semibold text-cyan-300">
                    Ein End-to-End System.
                  </span>
                </h2>

                <p className="mt-6 max-w-xl text-lg leading-relaxed text-white/60">
                  Die Stärke entsteht im Zusammenspiel:
                  Convert bringt Sichtbarkeit, Concierge nutzt
                  den gewonnenen Traffic optimal und Cognia
                  führt den Kundenkontakt anschliessend
                  konsequent weiter.
                </p>

                <p className="mt-5 max-w-xl leading-relaxed text-white/45">
                  Sie können mit einem einzelnen Produkt starten
                  und Ihre Lösung schrittweise zu einer
                  durchgängigen Voixero Customer Journey
                  erweitern.
                </p>
              </div>

              <div className="space-y-4">
                <BundleStep
                  label="ACQUIRE"
                  title="Convert"
                  text="Mehr Sichtbarkeit und mehr Potenzial für qualifizierte Besucher."
                />

                <div className="pl-6 text-2xl text-cyan-300/40">
                  ↓
                </div>

                <BundleStep
                  label="CONVERT"
                  title="Concierge"
                  text="Besucher intelligent beraten und zum nächsten Schritt führen."
                />

                <div className="pl-6 text-2xl text-cyan-300/40">
                  ↓
                </div>

                <BundleStep
                  label="SERVE"
                  title="Cognia"
                  text="Kunden rund um die Uhr telefonisch betreuen – in bis zu 30 Sprachen."
                />
              </div>
            </div>

            <div className="mt-12 flex flex-wrap gap-4 border-t border-white/10 pt-8">
              <Button href="#/konfigurator">
                End-to-End Lösung konfigurieren
              </Button>

              <Button
                href="https://calendly.com/voixero_demo/30min"
                variant="secondary"
              >
                Potenzial besprechen
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-[#070b1c] px-6 pb-28 pt-12 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Von Sichtbarkeit bis Service
          </p>

          <h2 className="mt-4 text-4xl font-light leading-tight md:text-6xl">
            Eine Customer Journey.
            <span className="block font-semibold text-cyan-300">
              Ein KI-Ökosystem.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-relaxed text-white/55">
            Stellen Sie die Voixero Produkte zusammen, die für
            Ihre Customer Journey den grössten Hebel bieten.
          </p>

          <div className="mt-9 flex flex-wrap justify-center gap-4">
            <Button href="#/konfigurator">
              Voixero konfigurieren
            </Button>

            <Button
              href="https://calendly.com/voixero_demo/30min"
              variant="secondary"
            >
              Termin vereinbaren
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}

function JourneyStep({
  number,
  product,
  metric,
  title,
  text,
  result,
  href,
}) {
  return (
    <div className="rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 md:p-9">
      <div className="grid gap-8 md:grid-cols-[90px_1fr_220px] md:items-center">
        <div>
          <div className="text-sm font-semibold text-cyan-300">
            {number}
          </div>

          <div className="mt-2 text-xs uppercase tracking-[0.15em] text-white/30">
            {metric}
          </div>
        </div>

        <div>
          <div className="text-sm font-semibold text-cyan-300">
            {product}
          </div>

          <h3 className="mt-2 text-2xl font-semibold text-white md:text-3xl">
            {title}
          </h3>

          <p className="mt-4 max-w-3xl leading-relaxed text-white/50">
            {text}
          </p>

          {href && (
            <a
              href={href}
              className="mt-5 inline-block text-sm font-semibold text-cyan-300 transition hover:text-cyan-200"
            >
              Produkt kennenlernen →
            </a>
          )}
        </div>

        <div className="rounded-2xl border border-cyan-300/15 bg-cyan-300/[0.06] p-5 text-center">
          <div className="text-xs uppercase tracking-[0.14em] text-white/35">
            Ergebnis
          </div>

          <div className="mt-2 font-semibold text-cyan-300">
            {result}
          </div>
        </div>
      </div>
    </div>
  );
}

function JourneyConnector() {
  return (
    <div className="flex h-12 items-center justify-center">
      <div className="flex h-10 w-10 items-center justify-center rounded-full border border-cyan-300/15 bg-cyan-300/[0.05] text-xl text-cyan-300">
        ↓
      </div>
    </div>
  );
}

function ValueCard({
  number,
  title,
  text,
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#070b1c]/55 p-6">
      <div className="text-xs font-semibold text-cyan-300">
        {number}
      </div>

      <h3 className="mt-5 text-xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-3 text-sm leading-relaxed text-white/45">
        {text}
      </p>
    </div>
  );
}

function ProductCard({
  number,
  name,
  label,
  title,
  text,
  points,
  href,
  button,
}) {
  return (
    <article className="flex h-full flex-col rounded-[2rem] border border-white/10 bg-white/[0.035] p-7 transition hover:border-cyan-300/30 hover:bg-white/[0.05] md:p-8">
      <div className="flex items-center justify-between">
        <span className="text-sm font-semibold text-cyan-300">
          {number}
        </span>

        <span className="rounded-full border border-cyan-300/15 bg-cyan-300/[0.06] px-3 py-1 text-xs uppercase tracking-[0.12em] text-cyan-200">
          {label}
        </span>
      </div>

      <h3 className="mt-8 text-3xl font-semibold text-white">
        {name}
      </h3>

      <p className="mt-2 text-xl text-cyan-300">
        {title}
      </p>

      <p className="mt-6 leading-relaxed text-white/50">
        {text}
      </p>

      <div className="mt-7 space-y-3">
        {points.map((point) => (
          <div
            key={point}
            className="flex gap-3 text-sm text-white/55"
          >
            <span className="text-cyan-300">
              ✓
            </span>
            <span>{point}</span>
          </div>
        ))}
      </div>

      <div className="mt-8 flex-1" />

      <Button
        href={href}
        variant="secondary"
        className="w-full"
      >
        {button}
      </Button>
    </article>
  );
}

function BundleStep({
  label,
  title,
  text,
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-[#070b1c]/60 p-6">
      <p className="text-xs font-semibold uppercase tracking-[0.16em] text-cyan-300">
        {label}
      </p>

      <h3 className="mt-2 text-2xl font-semibold text-white">
        {title}
      </h3>

      <p className="mt-2 text-sm leading-relaxed text-white/45">
        {text}
      </p>
    </div>
  );
}