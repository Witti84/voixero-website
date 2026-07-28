import React from "react";
import VoixeroConfigurator from "../components/configurator/VoixeroConfigurator";

export default function ConfiguratorPage() {
  return (
    <>
      <section className="bg-[#070b1c] px-6 pb-10 pt-32 text-white md:pt-40">
        <div className="mx-auto max-w-[1500px]">
          <p className="text-sm font-semibold uppercase tracking-[0.18em] text-cyan-300">
            Voixero Konfigurator
          </p>

          <h1 className="mt-4 max-w-5xl text-4xl font-light leading-tight md:text-6xl">
            Stellen Sie Ihre individuelle{" "}
            <span className="font-semibold text-cyan-300">
              Voixero Lösung
            </span>{" "}
            zusammen.
          </h1>

          <p className="mt-6 max-w-3xl text-lg leading-relaxed text-white/55">
            Kombinieren Sie Convert, Concierge und Cognia und
            sehen Sie Ihre monatlichen Kosten und Setup-Kosten
            direkt in der Live-Berechnung.
          </p>
        </div>
      </section>

      <VoixeroConfigurator />
    </>
  );
}