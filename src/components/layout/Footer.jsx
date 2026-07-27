import React from "react";
import Logo from "../shared/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-cyan-300/10 bg-[#050817] px-6 py-10 text-white/55">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <Logo />

        <div className="flex flex-wrap gap-5">
          <a href="#/cognia" className="hover:text-cyan-300">
            Cognia
          </a>

          <a href="#/convert" className="hover:text-cyan-300">
            Convert
          </a>

          <a href="#/preise" className="hover:text-cyan-300">
            Preise
          </a>

          <a href="#/kontakt" className="hover:text-cyan-300">
            Kontakt
          </a>

          <a
            href="#/impressum"
            className="transition hover:text-cyan-300"
          >
            Impressum
          </a>
        </div>

        <div>© Voixero · Die Zukunft ist jetzt</div>
      </div>
    </footer>
  );
}