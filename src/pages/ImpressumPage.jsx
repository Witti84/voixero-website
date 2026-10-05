import React from "react";

export default function ImpressumPage() {
  return (
    <section className="min-h-screen bg-[#070b1c] px-6 py-40 text-white">
      <div className="mx-auto max-w-4xl">
        <p className="mb-4 text-cyan-300">
          Rechtliches
        </p>

        <h1 className="text-5xl font-light md:text-7xl">
          Impressum
        </h1>

        <div className="mt-14 space-y-10 rounded-[2rem] border border-cyan-300/15 bg-white/[0.035] p-8 shadow-2xl shadow-cyan-950/20 md:p-10">
          <div>
            <h2 className="mb-4 text-2xl font-semibold text-cyan-200">
              Anbieter
            </h2>

            <div className="space-y-2 text-lg text-white/75">
              <p>
                Voixero ist eine Marke der Thom &amp; Co. GmbH
              </p>
              <p>Scherzingerstrasse 16</p>
              <p>8598 Bottighofen</p>
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
                  href="mailto:info@voixero.ai"
                  className="text-cyan-300 hover:underline"
                >
                  info@voixero.ai
                </a>
              </p>

              <p>
                Telefon:{" "}
                <a
                  href="tel:+41445860525"
                  className="text-cyan-300 hover:underline"
                >
                  +41 44 586 05 25
                </a>
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-cyan-200">
              Vertretungsberechtigte Person
            </h2>

            <p className="text-lg text-white/75">
              Carolin Thom, Geschäftsführerin
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-cyan-200">
              Unternehmensinformationen
            </h2>

            <div className="space-y-2 text-lg text-white/75">
              <p>
                Eingetragene Firma: Thom &amp; Co. GmbH
              </p>

              <p>
                UID / MWST: CHE-273.347.179
              </p>
            </div>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-cyan-200">
              Haftung
            </h2>

            <p className="leading-relaxed text-white/65">
              Die Inhalte dieser Website werden mit Sorgfalt
              erstellt und laufend weiterentwickelt. Eine Gewähr
              für Vollständigkeit, Richtigkeit und Aktualität
              sämtlicher Inhalte kann jedoch nicht übernommen
              werden.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-cyan-200">
              Externe Links
            </h2>

            <p className="leading-relaxed text-white/65">
              Diese Website kann Links zu externen Websites
              enthalten. Für Inhalte und Datenschutzpraktiken
              externer Anbieter sind die jeweiligen Betreiber
              verantwortlich.
            </p>
          </div>

          <div>
            <h2 className="mb-4 text-2xl font-semibold text-cyan-200">
              Urheberrecht
            </h2>

            <p className="leading-relaxed text-white/65">
              Inhalte, Texte, Grafiken, Marken und sonstige
              Bestandteile dieser Website dürfen ohne vorherige
              Zustimmung der jeweiligen Rechteinhaber nicht
              vervielfältigt oder anderweitig verwendet werden.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}