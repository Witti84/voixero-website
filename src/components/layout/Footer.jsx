import React from "react";
import Logo from "../shared/Logo";

export default function Footer() {
  return (
    <footer className="border-t border-cyan-300/10 bg-[#050817] px-6 py-10 text-white/55">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <Logo />

        <div className="flex flex-wrap gap-5">
          <a
            href="#/convert"
            className="transition hover:text-cyan-300"
          >
            Convert
          </a>

          <a
            href="#/concierge"
            className="transition hover:text-cyan-300"
          >
            Concierge
          </a>

          <a
            href="#/cognia"
            className="transition hover:text-cyan-300"
          >
            Cognia
          </a>

          <a
            href="#/preise"
            className="transition hover:text-cyan-300"
          >
            Preise
          </a>

          <a
            href="#/kontakt"
            className="transition hover:text-cyan-300"
          >
            Kontakt
          </a>

          <a
            href="#/impressum"
            className="transition hover:text-cyan-300"
          >
            Impressum
          </a>
          <a
  href="#/datenschutz"
  className="transition hover:text-cyan-300"
>
  Datenschutz
</a>
        </div>

        <div>© Voixero · Die Zukunft ist jetzt</div>
      </div>
    </footer>
  );
}