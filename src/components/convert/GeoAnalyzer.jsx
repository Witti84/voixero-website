import React, { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../shared/Button";
import Icon from "../shared/Icon";
import Highlight from "../shared/Highlight";

const analysisSteps = [
  "Website wird analysiert",
  "Markensignale werden geprüft",
  "ChatGPT-Sichtbarkeit wird ausgewertet",
  "Gemini wird geprüft",
  "Perplexity wird verglichen",
  "Wettbewerbsumfeld wird erkannt",
  "GEO-Score wird berechnet",
];

const optimizationItems = [
  "Strukturierte Inhalte",
  "AI Citations",
  "FAQ-Struktur",
  "Entitäten & Themencluster",
  "Schema.org Markup",
  "Prompt Visibility",
  "Knowledge Signals",
  "Content Authority",
];

function hashString(value) {
  let hash = 0;

  for (let i = 0; i < value.length; i += 1) {
    hash = (hash << 5) - hash + value.charCodeAt(i);
    hash |= 0;
  }

  return Math.abs(hash);
}

function normalizeUrl(value) {
  return value
    .trim()
    .toLowerCase()
    .replace(/^https?:\/\//, "")
    .replace(/^www\./, "")
    .replace(/\/$/, "");
}

function createResult(url) {
  const normalized = normalizeUrl(url);
  const seed = hashString(normalized);

  const score = 5 + (seed % 49);

  const structuredContent = Math.min(
    78,
    Math.max(12, score + 8 + (seed % 17))
  );

  const brandAuthority = Math.min(
    71,
    Math.max(10, score - 3 + ((seed >> 2) % 23))
  );

  const aiMentions = Math.min(
    64,
    Math.max(6, score - 8 + ((seed >> 4) % 18))
  );

  const technicalBasis = Math.min(
    86,
    Math.max(28, score + 22 + ((seed >> 3) % 21))
  );

  const competitorOffsets = [
    34,
    22,
    12,
    -5,
    -12,
  ];

  const competitors = competitorOffsets.map((offset, index) => {
    const variation = ((seed >> index) % 7) - 3;

    return {
      id: index + 1,
      score: Math.max(
        8,
        Math.min(86, score + offset + variation)
      ),
    };
  });

  const targetScore = Math.min(
    79,
    Math.max(score + 20, score + 31 + (seed % 11))
  );

  const potentialCount = 6 + (seed % 3);

  return {
    score,
    targetScore,
    potentialCount,
    metrics: [
      {
        label: "KI-Sichtbarkeit",
        value: aiMentions,
      },
      {
        label: "Strukturierte Inhalte",
        value: structuredContent,
      },
      {
        label: "Markenautorität",
        value: brandAuthority,
      },
      {
        label: "Technische Basis",
        value: technicalBasis,
      },
    ],
    competitors,
  };
}

function ScoreBar({ label, value }) {
  return (
    <div>
      <div className="mb-2 flex items-center justify-between gap-4">
        <span className="text-sm text-white/60">
          {label}
        </span>

        <span className="text-sm font-semibold text-cyan-200">
          {value}
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: `${value}%` }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="h-full rounded-full bg-cyan-300"
        />
      </div>
    </div>
  );
}

function CompetitorRow({
  position,
  score,
  ownWebsite = false,
}) {
  return (
    <div
      className={`grid grid-cols-[36px_1fr_auto] items-center gap-4 rounded-2xl border px-4 py-4 ${
        ownWebsite
          ? "border-cyan-300/40 bg-cyan-300/10"
          : "border-white/10 bg-white/[0.025]"
      }`}
    >
      <div
        className={`text-sm font-semibold ${
          ownWebsite
            ? "text-cyan-300"
            : "text-white/35"
        }`}
      >
        #{position}
      </div>

      <div className="flex items-center gap-3">
        {ownWebsite ? (
          <>
            <div className="flex h-9 w-9 items-center justify-center rounded-xl border border-cyan-300/30 bg-cyan-300/10 text-cyan-200">
              V
            </div>

            <div>
              <div className="font-semibold text-white">
                Ihre Website
              </div>

              <div className="text-xs text-white/40">
                analysierte Domain
              </div>
            </div>
          </>
        ) : (
          <>
            <div className="h-9 w-9 rounded-xl bg-gradient-to-br from-white/25 to-white/5 blur-[3px]" />

            <div>
              <div className="select-none font-semibold text-white/45 blur-[5px]">
                Example Company
              </div>

              <div className="mt-1 h-2 w-24 rounded bg-white/10 blur-[2px]" />
            </div>
          </>
        )}
      </div>

      <div
        className={`text-xl font-bold ${
          ownWebsite
            ? "text-cyan-300"
            : "text-white/70"
        }`}
      >
        {score}
      </div>
    </div>
  );
}

export default function GeoAnalyzer() {
  const [url, setUrl] = useState("");
  const [analysisUrl, setAnalysisUrl] = useState("");
  const [status, setStatus] = useState("idle");
  const [stepIndex, setStepIndex] = useState(0);

  const result = useMemo(() => {
    if (!analysisUrl) {
      return null;
    }

    return createResult(analysisUrl);
  }, [analysisUrl]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const cleanUrl = normalizeUrl(url);

    if (!cleanUrl || !cleanUrl.includes(".")) {
      return;
    }

    setAnalysisUrl(cleanUrl);
    setStatus("analyzing");
    setStepIndex(0);

    analysisSteps.forEach((_, index) => {
      window.setTimeout(() => {
        setStepIndex(index);
      }, index * 650);
    });

    window.setTimeout(() => {
      setStatus("result");
    }, analysisSteps.length * 650 + 400);
  };

  const rankingRows = useMemo(() => {
    if (!result) {
      return [];
    }

    return [
      ...result.competitors.map((competitor) => ({
        ...competitor,
        ownWebsite: false,
      })),
      {
        id: "own",
        score: result.score,
        ownWebsite: true,
      },
    ]
      .sort((a, b) => b.score - a.score)
      .map((entry, index) => ({
        ...entry,
        position: index + 1,
      }));
  }, [result]);

  return (
    <section className="bg-[#070b1c] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.65,
            ease: "easeOut",
          }}
          viewport={{
            once: true,
            amount: 0.25,
          }}
          className="mx-auto max-w-4xl text-center"
        >
          <p className="mb-3 text-cyan-300">
            Interaktive GEO-Analyse
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-6xl">
            Wie sichtbar ist Ihre Marke in{" "}
            <Highlight>KI-Suchsystemen?</Highlight>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-white/65">
            Geben Sie Ihre Website ein und erleben Sie eine
            interaktive Vorschau Ihres möglichen AI Visibility
            Scores.
          </p>
        </motion.div>

        <div className="mx-auto mt-14 max-w-5xl">
          <div className="overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-white/[0.035] shadow-2xl shadow-cyan-950/30">
            <div className="border-b border-white/10 p-6 md:p-8">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 md:flex-row"
              >
                <div className="relative flex-1">
                  <Icon
                    name="globe"
                    size="text-xl"
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-cyan-300"
                  />

                  <input
                    type="text"
                    value={url}
                    onChange={(event) =>
                      setUrl(event.target.value)
                    }
                    placeholder="https://ihre-website.ch"
                    className="w-full rounded-xl border border-cyan-300/20 bg-black/20 py-4 pl-12 pr-4 text-lg text-white outline-none transition placeholder:text-white/30 focus:border-cyan-300/55 focus:bg-black/30"
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "analyzing"}
                  className="inline-flex min-w-[220px] items-center justify-center rounded-xl bg-cyan-300 px-6 py-4 text-base font-semibold text-slate-950 shadow-lg shadow-cyan-950/30 transition hover:bg-cyan-200 disabled:cursor-wait disabled:opacity-60 md:text-lg"
                >
                  {status === "analyzing"
                    ? "Analyse läuft …"
                    : "GEO-Analyse starten"}
                </button>
              </form>
            </div>

            <AnimatePresence mode="wait">
              {status === "idle" && (
                <motion.div
                  key="idle"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="p-8 md:p-12"
                >
                  <div className="grid gap-4 md:grid-cols-3">
                    <div className="rounded-2xl border border-white/10 bg-black/15 p-6">
                      <Icon
                        name="gauge"
                        className="mb-5 text-cyan-300"
                      />

                      <h3 className="text-lg font-semibold">
                        AI Visibility
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-white/50">
                        Simulation Ihrer Sichtbarkeit in
                        generativen Suchsystemen.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/15 p-6">
                      <Icon
                        name="target"
                        className="mb-5 text-cyan-300"
                      />

                      <h3 className="text-lg font-semibold">
                        Wettbewerb
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-white/50">
                        Vergleich Ihres Scores mit einem
                        simulierten Marktumfeld.
                      </p>
                    </div>

                    <div className="rounded-2xl border border-white/10 bg-black/15 p-6">
                      <Icon
                        name="spark"
                        className="mb-5 text-cyan-300"
                      />

                      <h3 className="text-lg font-semibold">
                        Potenzial
                      </h3>

                      <p className="mt-2 text-sm leading-relaxed text-white/50">
                        Identifikation möglicher
                        Optimierungsfelder für GEO.
                      </p>
                    </div>
                  </div>
                </motion.div>
              )}

              {status === "analyzing" && (
                <motion.div
                  key="analyzing"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="relative overflow-hidden p-8 md:p-12"
                >
                  <motion.div
                    animate={{
                      y: ["-20%", "520%"],
                    }}
                    transition={{
                      duration: 2.2,
                      repeat: Infinity,
                      ease: "linear",
                    }}
                    className="pointer-events-none absolute left-0 right-0 top-0 h-px bg-cyan-300 shadow-[0_0_25px_rgba(28,173,198,0.9)]"
                  />

                  <div className="mx-auto max-w-3xl">
                    <div className="mb-8 flex items-center justify-between">
                      <div>
                        <p className="text-sm text-white/40">
                          Analyse
                        </p>

                        <p className="mt-1 font-semibold text-cyan-200">
                          {analysisUrl}
                        </p>
                      </div>

                      <motion.div
                        animate={{ rotate: 360 }}
                        transition={{
                          duration: 1.1,
                          repeat: Infinity,
                          ease: "linear",
                        }}
                        className="h-9 w-9 rounded-full border-2 border-cyan-300/20 border-t-cyan-300"
                      />
                    </div>

                    <div className="space-y-3">
                      {analysisSteps.map((step, index) => {
                        const completed =
                          index < stepIndex;

                        const active =
                          index === stepIndex;

                        return (
                          <motion.div
                            key={step}
                            animate={{
                              opacity:
                                completed || active
                                  ? 1
                                  : 0.3,
                            }}
                            className={`flex items-center gap-4 rounded-xl border px-4 py-4 ${
                              active
                                ? "border-cyan-300/35 bg-cyan-300/10"
                                : "border-white/10 bg-white/[0.02]"
                            }`}
                          >
                            <div
                              className={`flex h-8 w-8 items-center justify-center rounded-full ${
                                completed
                                  ? "bg-emerald-400/15 text-emerald-300"
                                  : active
                                  ? "bg-cyan-300/15 text-cyan-300"
                                  : "bg-white/5 text-white/20"
                              }`}
                            >
                              {completed
                                ? "✓"
                                : active
                                ? "•"
                                : ""}
                            </div>

                            <span className="text-white/75">
                              {step}
                            </span>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                </motion.div>
              )}

              {status === "result" && result && (
                <motion.div
                  key="result"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 md:p-10"
                >
                  <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr]">
                    <div className="space-y-6">
                      <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/[0.06] p-7 text-center">
                        <p className="text-sm uppercase tracking-[0.18em] text-white/45">
                          AI Visibility Score
                        </p>

                        <div className="mt-5 flex items-end justify-center gap-2">
                          <motion.span
                            initial={{ opacity: 0, scale: 0.7 }}
                            animate={{
                              opacity: 1,
                              scale: 1,
                            }}
                            transition={{
                              duration: 0.55,
                            }}
                            className="text-7xl font-light text-cyan-300 md:text-8xl"
                          >
                            {result.score}
                          </motion.span>

                          <span className="mb-3 text-xl text-white/35">
                            / 100
                          </span>
                        </div>

                        <p className="mx-auto mt-4 max-w-xs text-sm leading-relaxed text-white/55">
                          Ihre Website weist aktuell deutliches
                          Potenzial für höhere Sichtbarkeit in
                          KI-generierten Antworten auf.
                        </p>
                      </div>

                      <div className="rounded-[2rem] border border-white/10 bg-black/15 p-6">
                        <p className="mb-5 font-semibold text-white">
                          Teilbewertung
                        </p>

                        <div className="space-y-5">
                          {result.metrics.map((metric) => (
                            <ScoreBar
                              key={metric.label}
                              label={metric.label}
                              value={metric.value}
                            />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      <div className="rounded-[2rem] border border-white/10 bg-black/15 p-6">
                        <div className="mb-6 flex items-end justify-between gap-4">
                          <div>
                            <p className="text-sm text-cyan-300">
                              Wettbewerbsvergleich
                            </p>

                            <h3 className="mt-1 text-2xl font-light">
                              Ihr AI Visibility Ranking
                            </h3>
                          </div>

                          <div className="text-right">
                            <p className="text-xs text-white/35">
                              Marktvergleich
                            </p>

                            <p className="text-lg font-semibold text-white/70">
                              6 Anbieter
                            </p>
                          </div>
                        </div>

                        <div className="space-y-3">
                          {rankingRows.map((entry) => (
                            <CompetitorRow
                              key={entry.id}
                              position={entry.position}
                              score={entry.score}
                              ownWebsite={
                                entry.ownWebsite
                              }
                            />
                          ))}
                        </div>

                        <p className="mt-4 text-xs leading-relaxed text-white/35">
                          Wettbewerber werden in dieser
                          Vorschau anonymisiert dargestellt.
                        </p>
                      </div>

                      <div className="rounded-[2rem] border border-cyan-300/20 bg-cyan-300/[0.06] p-6">
                        <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
                          <div>
                            <p className="text-sm text-cyan-300">
                              Optimierungspotenzial
                            </p>

                            <h3 className="mt-2 text-2xl font-light">
                              {result.potentialCount} Potenziale
                              erkannt
                            </h3>
                          </div>

                          <div className="flex items-center gap-3 text-3xl">
                            <span className="text-white/45">
                              {result.score}
                            </span>

                            <span className="text-cyan-300">
                              →
                            </span>

                            <span className="font-semibold text-cyan-300">
                              {result.targetScore}
                            </span>
                          </div>
                        </div>

                        <div className="mt-6 grid gap-3 sm:grid-cols-2">
                          {optimizationItems
                            .slice(
                              0,
                              result.potentialCount
                            )
                            .map((item) => (
                              <div
                                key={item}
                                className="flex items-center gap-3 rounded-xl border border-white/10 bg-black/10 px-4 py-3 text-sm text-white/65"
                              >
                                <Icon
                                  name="check"
                                  size="text-base"
                                  className="text-cyan-300"
                                />

                                {item}
                              </div>
                            ))}
                        </div>

                        <div className="mt-7">
                          <Button
                            href="#/kontakt"
                            className="w-full py-4"
                          >
                            Vollständige GEO-Analyse anfordern
                            <Icon
                              name="arrow"
                              size="text-xl"
                              className="ml-2"
                            />
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>

                  <p className="mx-auto mt-7 max-w-3xl text-center text-xs leading-relaxed text-white/30">
                    Diese interaktive Vorschau simuliert eine
                    GEO-Auswertung und stellt keine vollständige
                    technische Analyse oder tatsächliche
                    Wettbewerbsbewertung dar.
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </section>
  );
}