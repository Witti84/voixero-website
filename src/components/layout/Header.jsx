import React, { useState } from "react";
import { motion } from "framer-motion";
import Logo from "../shared/Logo";
import Button from "../shared/Button";

const calendlyLink = "https://calendly.com/voixero_demo/30min";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-cyan-300/10 bg-[#070b1c]/90 backdrop-blur-xl">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-5">
        <a
          href="#/"
          aria-label="Voixero Startseite"
          onClick={closeMenu}
        >
          <Logo />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-10 text-lg text-white/75 md:flex">
          <a
            href="#/"
            className="font-semibold text-cyan-300"
          >
            Startseite
          </a>

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
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button
            href={calendlyLink}
            className="px-5 py-3 text-sm md:text-base"
          >
            Termin vereinbaren
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
          className="flex h-11 w-11 items-center justify-center rounded-xl border border-cyan-300/25 bg-cyan-300/10 text-2xl text-cyan-200 md:hidden"
        >
          {isOpen ? "×" : "☰"}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
          className="border-t border-cyan-300/10 bg-[#070b1c] px-6 py-6 shadow-2xl shadow-cyan-950/30 md:hidden"
        >
          <nav className="mx-auto flex max-w-7xl flex-col gap-4 text-lg text-white/80">
            <a
              onClick={closeMenu}
              href="#/"
              className="rounded-xl border border-cyan-300/10 bg-white/[0.03] px-4 py-3 text-cyan-300"
            >
              Startseite
            </a>

            <a
              onClick={closeMenu}
              href="#/convert"
              className="rounded-xl border border-cyan-300/10 bg-white/[0.03] px-4 py-3 hover:text-cyan-300"
            >
              Convert
            </a>

            <a
              onClick={closeMenu}
              href="#/concierge"
              className="rounded-xl border border-cyan-300/10 bg-white/[0.03] px-4 py-3 hover:text-cyan-300"
            >
              Concierge
            </a>

            <a
              onClick={closeMenu}
              href="#/cognia"
              className="rounded-xl border border-cyan-300/10 bg-white/[0.03] px-4 py-3 hover:text-cyan-300"
            >
              Cognia
            </a>

            <a
              onClick={closeMenu}
              href="#/preise"
              className="rounded-xl border border-cyan-300/10 bg-white/[0.03] px-4 py-3 hover:text-cyan-300"
            >
              Preise
            </a>

            <Button
              href={calendlyLink}
              className="mt-2 w-full py-4"
              onClick={closeMenu}
            >
              Termin vereinbaren
            </Button>
          </nav>
        </motion.div>
      )}
    </header>
  );
}