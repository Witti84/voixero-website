import React from "react";
import ROICalculator from "../components/roi/ROICalculator";
import ConfiguratorCTA from "../components/shared/ConfiguratorCTA";

export default function ROIPage() {
  return (
    <>
      <section className="bg-[#070b1c] px-6 pb-10 pt-40 text-white">
        <div className="mx-auto max-w-5xl text-center">
          <p className="mb-4 text-cyan-300">
            Voixero ROI
          </p>

          <h1 className="text-5xl font-light leading-tight md:text-7xl">
            KI muss sich{" "}
            <span className="font-bold text-cyan-300">
              rechnen.
            </span>
          </h1>

          <p className="mx-auto mt-7 max-w-3xl text-xl leading-relaxed text-white/70">
            Berechnen Sie Ihr individuelles
            Einspar-, Umsatz- und
            Automatisierungspotenzial mit
            Voixero.
          </p>
        </div>
      </section>

      <ROICalculator />
      <ConfiguratorCTA context="roi" />
    </>
  );
}