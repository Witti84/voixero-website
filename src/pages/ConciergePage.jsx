import React from "react";
import { motion } from "framer-motion";
import Button from "../components/shared/Button";
import Card from "../components/shared/Card";
import Icon from "../components/shared/Icon";
import Highlight from "../components/shared/Highlight";
import ConfiguratorCTA from "../components/shared/ConfiguratorCTA";

const fadeUp = {
  initial: { opacity: 0, y: 28 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.65, ease: "easeOut" },
  viewport: { once: true, amount: 0.25 },
};

export default function ConciergePage() {
  return (
    <>
      <section className="relative overflow-hidden bg-[#070b1c] px-6 pb-24 pt-48 text-white md:pt-40">
        <div className="absolute right-0 top-20 h-[520px] w-[520px] rounded-full bg-cyan-300/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl gap-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <p className="mb-5 text-cyan-300">
              Voixero Concierge
            </p>

            <h1 className="text-5xl font-light leading-tight md:text-7xl">
              Ihre Website bekommt einen{" "}
              <Highlight>
                persönlichen KI-Berater.
              </Highlight>
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-white/75 md:text-2xl">
              Concierge versteht, was Ihre Besucher suchen,
              begleitet sie in Echtzeit durch Ihre Website und
              führt sie gezielt zur passenden Information, zum
              Produkt oder zum Abschluss.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <Button
                href="https://calendly.com/voixero_demo/30min"
                className="px-7 py-5"
              >
                Concierge kennenlernen
                <Icon
                  name="arrow"
                  size="text-2xl"
                  className="ml-2"
                />
              </Button>

              <Button
                href="#concierge-demo"
                variant="outline"
                className="px-7 py-5"
              >
                Live erleben
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="rounded-[2rem] border border-cyan-300/20 bg-white/[0.035] p-7 shadow-2xl shadow-cyan-950/30"
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="text-sm text-white/45">
                  Live Website
                </p>

                <p className="font-semibold text-white">
                  Ihr Unternehmen
                </p>
              </div>

              <div className="rounded-full bg-emerald-400/15 px-3 py-2 text-sm text-emerald-200">
                Concierge online
              </div>
            </div>

            <div className="rounded-2xl border border-cyan-300/10 bg-black/20 p-6">
              <p className="text-sm text-white/45">
                Besucher
              </p>

              <p className="mt-2 text-lg text-white">
                „Welches Produkt passt zu meinem Unternehmen?“
              </p>
            </div>

            <motion.div
              className="mt-4 rounded-2xl border border-cyan-300/20 bg-cyan-300/10 p-6"
              animate={{
                boxShadow: [
                  "0 0 0px rgba(28,173,198,0)",
                  "0 0 35px rgba(28,173,198,0.18)",
                  "0 0 0px rgba(28,173,198,0)",
                ],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >
              <p className="text-sm text-cyan-300">
                Voixero Concierge
              </p>

              <p className="mt-2 text-lg leading-relaxed text-white/80">
                „Gerne. Ich stelle Ihnen zwei kurze Fragen und
                führe Sie danach direkt zur passenden Lösung.“
              </p>
            </motion.div>

            <div className="mt-4 rounded-2xl border border-cyan-300/20 bg-white/[0.04] p-5">
              <div className="mb-3 flex items-center gap-3">
                <Icon
                  name="target"
                  size="text-xl"
                  className="text-cyan-300"
                />

                <span className="font-semibold text-cyan-200">
                  Nächster Schritt erkannt
                </span>
              </div>

              <div className="rounded-xl border border-cyan-300/40 bg-cyan-300/10 px-4 py-3 text-center text-cyan-100">
                Passende Lösung anzeigen →
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section
        id="concierge-demo"
        className="bg-[#080d22] px-6 py-24 text-white"
      >
        <div className="mx-auto max-w-7xl">
          <motion.div
            {...fadeUp}
            className="max-w-4xl"
          >
            <p className="mb-3 text-cyan-300">
              Mehr als ein Chatbot
            </p>

            <h2 className="text-4xl font-light leading-tight md:text-6xl">
              Nicht nur antworten.{" "}
              <Highlight>
                Aktiv zum Ziel führen.
              </Highlight>
            </h2>

            <p className="mt-6 text-xl leading-relaxed text-white/70">
              Klassische Chatbots erklären, wo etwas zu finden
              ist. Concierge begleitet den Besucher durch den
              digitalen Prozess und unterstützt ihn genau dort,
              wo Hilfe benötigt wird.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            <Card className="p-7">
              <Icon
                name="brain"
                className="mb-6 h-14 w-14 rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-300"
              />

              <h3 className="text-2xl font-semibold text-white">
                Versteht die Absicht
              </h3>

              <p className="mt-4 leading-relaxed text-white/65">
                Concierge erkennt, was der Besucher tatsächlich
                erreichen möchte – unabhängig davon, wie die
                Frage formuliert wird.
              </p>
            </Card>

            <Card className="p-7">
              <Icon
                name="target"
                className="mb-6 h-14 w-14 rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-300"
              />

              <h3 className="text-2xl font-semibold text-white">
                Führt aktiv
              </h3>

              <p className="mt-4 leading-relaxed text-white/65">
                Inhalte, Buttons, Formulare und nächste Schritte
                werden kontextbezogen erklärt und gezielt
                hervorgehoben.
              </p>
            </Card>

            <Card className="p-7">
              <Icon
                name="line"
                className="mb-6 h-14 w-14 rounded-2xl border border-cyan-300/25 bg-cyan-300/10 text-cyan-300"
              />

              <h3 className="text-2xl font-semibold text-white">
                Erhöht Abschlüsse
              </h3>

              <p className="mt-4 leading-relaxed text-white/65">
                Weniger Suchen, weniger Abbrüche und ein deutlich
                einfacherer Weg vom ersten Interesse bis zum
                erfolgreichen Abschluss.
              </p>
            </Card>
          </div>
        </div>
      </section>

      <ConfiguratorCTA context="concierge" />
    </>
  );
}