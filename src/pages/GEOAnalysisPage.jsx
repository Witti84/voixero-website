import React from "react";
import GeoAnalyzer from "../components/convert/GeoAnalyzer";
import Button from "../components/shared/Button";

export default function GEOAnalysisPage() {
  return (
    <>
      <div className="bg-[#070b1c] pt-24 md:pt-28">
        <GeoAnalyzer />
      </div>

      <section className="bg-[#070b1c] px-6 pb-24 pt-8 text-white">
        <div className="mx-auto max-w-4xl rounded-[2rem] border border-cyan-300/15 bg-white/[0.035] p-8 text-center md:p-12">
          <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-300">
            Nächster Schritt
          </p>

          <h2 className="mt-4 text-3xl font-light md:text-4xl">
            Aus der Simulation wird eine echte GEO-Analyse.
          </h2>

          <p className="mx-auto mt-5 max-w-2xl leading-relaxed text-white/55">
            Voixero Convert analysiert Ihre tatsächliche
            Sichtbarkeit in KI-Systemen und zeigt konkret,
            wo Ihre Website optimiert werden kann.
          </p>

          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Button href="#/convert">
              Convert kennenlernen
            </Button>

            <Button
              href="#/kontakt"
              variant="secondary"
            >
              GEO-Potenzial besprechen
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}