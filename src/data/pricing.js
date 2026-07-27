import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import Button from "../shared/Button";
import { pricing } from "../../data/pricing";

const productLabels = {
  convert: "Convert",
  concierge: "Concierge",
  cognia: "Cognia",
};

const voiceOptions = {
  standard: {
    label: "Standard Voice",
    surcharge: 0,
  },
  premium: {
    label: "Premium Voice",
    surcharge: 0.05,
  },
  gold: {
    label: "Gold Voice",
    surcharge: 0.06,
  },
};

function formatCHF(value, decimals = 0) {
  if (value === null || value === undefined) {
    return "Individuell";
  }

  return `CHF ${Number(value).toLocaleString("de-CH", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}`;
}

function formatNumber(value) {
  return Math.round(Number(value || 0)).toLocaleString("de-CH");
}

function getTierKey(tier) {
  return tier.id.split("-").pop();
}

function NumberField({
  label,
  value,
  onChange,
  min = 0,
  max,
  suffix,
  step = 1,
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-white/70">
        {label}
      </span>

      <div className="flex overflow-hidden rounded-xl border border-cyan-300/15 bg-black/20 focus-within:border-cyan-300/50">
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(event) => onChange(Number(event.target.value))}
          className="min-w-0 flex-1 bg-transparent px-4 py-4 text-lg text-white outline-none"
        />

        {suffix && (
          <div className="flex items-center border-l border-white/10 px-4 text-sm text-white/45">
            {suffix}
          </div>
        )}
      </div>
    </label>
  );
}

function Toggle({ label, checked, onChange, description }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`flex w-full items-center justify-between gap-4 rounded-xl border p-4 text-left transition ${
        checked
          ? "border-cyan-300/40 bg-cyan-300/10"
          : "border-white/10 bg-white/[0.025]"
      }`}
    >
      <div>
        <div className="font-semibold text-white">{label}</div>

        {description && (
          <div className="mt-1 text-sm text-white/45">
            {description}
          </div>
        )}
      </div>

      <div
        className={`relative h-7 w-12 shrink-0 rounded-full transition ${
          checked ? "bg-cyan-300" : "bg-white/15"
        }`}
      >
        <div
          className={`absolute top-1 h-5 w-5 rounded-full bg-white transition ${
            checked ? "left-6" : "left-1"
          }`}
        />
      </div>
    </button>
  );
}

function ResultRow({ label, value, highlight = false }) {
  return (
    <div className="flex items-center justify-between gap-5 border-b border-white/10 py-3 last:border-b-0">
      <span className="text-white/50">{label}</span>

      <span
        className={`text-right font-semibold ${
          highlight ? "text-cyan-300" : "text-white"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

function VoiceSelector({ value, onChange }) {
  return (
    <div>
      <span className="mb-3 block text-sm font-semibold text-white/70">
        Sprachqualität
      </span>

      <div className="grid gap-3 sm:grid-cols-3">
        {Object.entries(voiceOptions).map(([key, option]) => {
          const active = value === key;

          return (
            <button
              key={key}
              type="button"
              onClick={() => onChange(key)}
              className={`rounded-xl border p-4 text-left transition ${
                active
                  ? "border-cyan-300 bg-cyan-300/10"
                  : "border-white/10 bg-white/[0.025] hover:border-cyan-300/30"
              }`}
            >
              <div
                className={`font-semibold ${
                  active ? "text-cyan-200" : "text-white"
                }`}
              >
                {option.label}
              </div>

              <div className="mt-2 text-sm text-white/45">
                {option.surcharge === 0
                  ? "inklusive"
                  : `+ ${formatCHF(option.surcharge, 2)} / Min.`}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function calculateAdjustedIncludedMinutes(tier, voiceType) {
  if (!tier.includedMinutes || !tier.monthlyPrice) {
    return null;
  }

  const baseRate =
    Number(tier.monthlyPrice) / Number(tier.includedMinutes);

  const voiceSurcharge =
    voiceOptions[voiceType]?.surcharge || 0;

  return (
    Number(tier.monthlyPrice) /
    (baseRate + voiceSurcharge)
  );
}

export default function ProductConfigurator({
  product = "convert",
  onProductChange,
}) {
  const [activeProduct, setActiveProduct] = useState(product);

  useEffect(() => {
    setActiveProduct(product);
  }, [product]);

  const changeProduct = (nextProduct) => {
    setActiveProduct(nextProduct);

    if (onProductChange) {
      onProductChange(nextProduct);
    }
  };

  // Convert
  const [autopilotPerDay, setAutopilotPerDay] = useState(5);
  const [scheduledReports, setScheduledReports] = useState(false);
  const [multiStore, setMultiStore] = useState(false);
  const [whiteLabel, setWhiteLabel] = useState(false);
  const [sso, setSso] = useState(false);
  const [annualPayment, setAnnualPayment] = useState(false);

  // Cognia / Concierge
  const [callsPerMonth, setCallsPerMonth] = useState(1500);
  const [averageDuration, setAverageDuration] = useState(4);
  const [concurrentCalls, setConcurrentCalls] = useState(3);
  const [voiceType, setVoiceType] = useState("standard");

  // Zusatzoptionen
  const [videoAvatarMinutes, setVideoAvatarMinutes] = useState(0);
  const [phoneValidations, setPhoneValidations] = useState(0);
  const [emailValidations, setEmailValidations] = useState(0);
  const [aiTrainingSessions, setAiTrainingSessions] = useState(0);

  const monthlyMinutes =
    Math.max(0, callsPerMonth) *
    Math.max(0, averageDuration);

  const convertResult = useMemo(() => {
    let tierKey = "starter";

    if (whiteLabel || sso || autopilotPerDay > 50) {
      tierKey = "enterprise";
    } else if (
      scheduledReports ||
      multiStore ||
      autopilotPerDay > 10
    ) {
      tierKey = "business";
    } else if (autopilotPerDay > 3) {
      tierKey = "professional";
    }

    const tier = pricing.convert.find(
      (item) => getTierKey(item) === tierKey
    );

    if (!tier) {
      return null;
    }

    const discount = annualPayment
      ? tier.annualDiscount || 0
      : 0;

    const monthlyPrice = tier.monthlyPrice || 0;
    const effectiveMonthly = monthlyPrice * (1 - discount);
    const annualPrice = effectiveMonthly * 12;
    const annualSavings = monthlyPrice * 12 - annualPrice;

    return {
      tier,
      monthlyPrice,
      effectiveMonthly,
      annualPrice,
      annualSavings,
      discount,
    };
  }, [
    autopilotPerDay,
    scheduledReports,
    multiStore,
    whiteLabel,
    sso,
    annualPayment,
  ]);

  const conversationResult = useMemo(() => {
    if (
      activeProduct !== "cognia" &&
      activeProduct !== "concierge"
    ) {
      return null;
    }

    const productPricing = pricing[activeProduct];

    const standardTiers = productPricing.filter(
      (tier) => tier.monthlyPrice !== null
    );

    const calculations = standardTiers.map((tier) => {
      const adjustedIncludedMinutes =
        calculateAdjustedIncludedMinutes(tier, voiceType);

      const overageMinutes = Math.max(
        0,
        monthlyMinutes - adjustedIncludedMinutes
      );

      const voiceSurcharge =
        voiceOptions[voiceType]?.surcharge || 0;

      const effectiveOverageRate =
        Number(tier.overagePerMinute || 0) +
        voiceSurcharge;

      const overageCost =
        overageMinutes * effectiveOverageRate;

      let additionalLines = 0;
      let additionalLinesCost = 0;

      if (activeProduct === "cognia") {
        additionalLines = Math.max(
          0,
          concurrentCalls - Number(tier.concurrentCalls || 0)
        );

        additionalLinesCost =
          additionalLines *
          Number(tier.additionalConcurrentLine || 0);
      }

      const videoAvatarCost =
        videoAvatarMinutes *
        Number(tier.videoAvatarPerMinute || 0);

      const phoneValidationCost =
        phoneValidations *
        Number(tier.phoneValidation || 0);

      const emailValidationCost =
        emailValidations *
        Number(tier.emailValidation || 0);

      const trainingCost =
        aiTrainingSessions *
        Number(tier.aiTrainingSession || 0);

      const optionsCost =
        videoAvatarCost +
        phoneValidationCost +
        emailValidationCost +
        trainingCost;

      const monthlyTotal =
        Number(tier.monthlyPrice) +
        overageCost +
        additionalLinesCost +
        optionsCost;

      return {
        tier,
        adjustedIncludedMinutes,
        overageMinutes,
        overageCost,
        effectiveOverageRate,
        additionalLines,
        additionalLinesCost,
        optionsCost,
        monthlyTotal,
      };
    });

    calculations.sort(
      (a, b) => a.monthlyTotal - b.monthlyTotal
    );

    return {
      ...calculations[0],
      custom: false,
    };
  }, [
    activeProduct,
    monthlyMinutes,
    concurrentCalls,
    voiceType,
    videoAvatarMinutes,
    phoneValidations,
    emailValidations,
    aiTrainingSessions,
  ]);

  const result =
    activeProduct === "convert"
      ? convertResult
      : conversationResult;

  return (
    <section
      id="produktkonfigurator"
      className="bg-[#070b1c] px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-cyan-300">
            Produktkonfigurator
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-6xl">
            Finden Sie das passende{" "}
            <span className="font-bold text-cyan-300">
              Voixero Paket.
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-white/65">
            Geben Sie einige Eckwerte ein. Wir berechnen daraus
            Ihr voraussichtliches Volumen und das wirtschaftlich
            passende Paket.
          </p>
        </div>

        <div className="mx-auto mt-12 flex max-w-3xl flex-wrap justify-center gap-3">
          {["convert", "concierge", "cognia"].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => changeProduct(item)}
              className={`rounded-xl border px-6 py-3 font-semibold transition ${
                activeProduct === item
                  ? "border-cyan-300 bg-cyan-300 text-slate-950"
                  : "border-cyan-300/20 bg-white/[0.03] text-white/65 hover:border-cyan-300/50 hover:text-cyan-200"
              }`}
            >
              {productLabels[item]}
            </button>
          ))}
        </div>

        <div className="mt-12 grid overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-white/[0.035] shadow-2xl shadow-cyan-950/30 lg:grid-cols-2">
          <div className="p-7 md:p-10">
            <p className="text-sm uppercase tracking-[0.18em] text-white/35">
              Ihre Anforderungen
            </p>

            <h3 className="mt-3 text-3xl font-light">
              Voixero {productLabels[activeProduct]}
            </h3>

            {activeProduct === "convert" && (
              <div className="mt-8 space-y-5">
                <NumberField
                  label="Autopilot-Korrekturen pro Tag"
                  value={autopilotPerDay}
                  onChange={setAutopilotPerDay}
                  min={0}
                  max={200}
                />

                <Toggle
                  label="Geplante Berichte"
                  checked={scheduledReports}
                  onChange={setScheduledReports}
                />

                <Toggle
                  label="Multi-Store"
                  checked={multiStore}
                  onChange={setMultiStore}
                />

                <Toggle
                  label="White-Label Reports"
                  checked={whiteLabel}
                  onChange={setWhiteLabel}
                />

                <Toggle
                  label="SSO / SAML"
                  checked={sso}
                  onChange={setSso}
                />

                <Toggle
                  label="Jährliche Zahlung"
                  checked={annualPayment}
                  onChange={setAnnualPayment}
                />
              </div>
            )}

            {(activeProduct === "cognia" ||
              activeProduct === "concierge") && (
              <div className="mt-8 space-y-5">
                <NumberField
                  label={
                    activeProduct === "cognia"
                      ? "Anrufe pro Monat"
                      : "Beratungen pro Monat"
                  }
                  value={callsPerMonth}
                  onChange={setCallsPerMonth}
                  min={0}
                />

                <NumberField
                  label="Ø Dauer pro Gespräch"
                  value={averageDuration}
                  onChange={setAverageDuration}
                  min={0.5}
                  step={0.5}
                  suffix="Min."
                />

                {activeProduct === "cognia" && (
                  <NumberField
                    label="Wie viele Anrufe sollen gleichzeitig angenommen werden?"
                    value={concurrentCalls}
                    onChange={setConcurrentCalls}
                    min={1}
                  />
                )}

                <div className="rounded-xl border border-cyan-300/15 bg-cyan-300/[0.05] p-5">
                  <div className="text-sm text-white/45">
                    Berechnetes Volumen
                  </div>

                  <div className="mt-2 text-3xl font-semibold text-cyan-300">
                    {formatNumber(monthlyMinutes)} Min.
                  </div>

                  <div className="mt-1 text-sm text-white/40">
                    pro Monat
                  </div>
                </div>

                <VoiceSelector
                  value={voiceType}
                  onChange={setVoiceType}
                />

                <details className="rounded-2xl border border-white/10 bg-black/15 p-5">
                  <summary className="cursor-pointer font-semibold text-cyan-200">
                    Zusatzoptionen konfigurieren
                  </summary>

                  <div className="mt-6 grid gap-5 sm:grid-cols-2">
                    <NumberField
                      label="Video Avatar Minuten"
                      value={videoAvatarMinutes}
                      onChange={setVideoAvatarMinutes}
                      min={0}
                    />

                    <NumberField
                      label="Phone Validations"
                      value={phoneValidations}
                      onChange={setPhoneValidations}
                      min={0}
                    />

                    <NumberField
                      label="E-Mail Validations"
                      value={emailValidations}
                      onChange={setEmailValidations}
                      min={0}
                    />

                    <NumberField
                      label="KI-trainiert-KI Sessions"
                      value={aiTrainingSessions}
                      onChange={setAiTrainingSessions}
                      min={0}
                    />
                  </div>
                </details>
              </div>
            )}
          </div>

          <motion.div
            key={`${activeProduct}-${result?.tier?.id || "none"}-${voiceType}`}
            initial={{ opacity: 0, x: 15 }}
            animate={{ opacity: 1, x: 0 }}
            className="bg-[#050817] p-7 md:p-10"
          >
            <p className="text-sm uppercase tracking-[0.18em] text-cyan-300">
              Unsere Empfehlung
            </p>

            {result?.tier && activeProduct !== "convert" && (
              <>
                <h3 className="mt-4 text-4xl font-light">
                  {result.tier.name}
                </h3>

                <div className="mt-8">
                  <div className="text-sm text-white/40">
                    Geschätzte monatliche Kosten
                  </div>

                  <div className="mt-2 text-5xl font-bold text-cyan-300">
                    {formatCHF(result.monthlyTotal)}
                  </div>

                  <div className="mt-1 text-white/40">
                    / Monat
                  </div>
                </div>

                <div className="mt-8 border-t border-white/10">
                  <ResultRow
                    label="Anrufe / Beratungen"
                    value={formatNumber(callsPerMonth)}
                  />

                  <ResultRow
                    label="Ø Gesprächsdauer"
                    value={`${averageDuration} Min.`}
                  />

                  <ResultRow
                    label="Berechnetes Volumen"
                    value={`${formatNumber(monthlyMinutes)} Min.`}
                  />

                  <ResultRow
                    label="Voice"
                    value={voiceOptions[voiceType].label}
                  />

                  <ResultRow
                    label="Inklusivminuten"
                    value={`${formatNumber(
                      result.adjustedIncludedMinutes
                    )} Min.`}
                    highlight={voiceType !== "standard"}
                  />

                  <ResultRow
                    label="Paketpreis"
                    value={formatCHF(result.tier.monthlyPrice)}
                  />

                  {result.overageMinutes > 0 && (
                    <ResultRow
                      label={`${formatNumber(
                        result.overageMinutes
                      )} zusätzliche Min.`}
                      value={formatCHF(result.overageCost, 2)}
                    />
                  )}

                  {activeProduct === "cognia" &&
                    result.additionalLines > 0 && (
                      <ResultRow
                        label={`${result.additionalLines} zusätzliche Leitung(en)`}
                        value={formatCHF(
                          result.additionalLinesCost
                        )}
                      />
                    )}

                  {result.optionsCost > 0 && (
                    <ResultRow
                      label="Zusatzoptionen"
                      value={formatCHF(result.optionsCost, 2)}
                    />
                  )}

                  <ResultRow
                    label="Setup einmalig"
                    value={formatCHF(result.tier.setupFee)}
                  />

                  <ResultRow
                    label="Gesamt / Monat"
                    value={formatCHF(result.monthlyTotal)}
                    highlight
                  />
                </div>

                <div className="mt-10">
                  <Button
                    href="#/kontakt"
                    className="w-full"
                  >
                    Konfiguration besprechen
                  </Button>
                </div>
              </>
            )}

            {result?.tier && activeProduct === "convert" && (
              <>
                <h3 className="mt-4 text-4xl font-light">
                  {result.tier.name}
                </h3>

                <div className="mt-8 text-5xl font-bold text-cyan-300">
                  {formatCHF(result.effectiveMonthly)}
                </div>

                <div className="mt-1 text-white/40">
                  / Monat
                </div>

                <div className="mt-8 border-t border-white/10">
                  <ResultRow
                    label="Listenpreis"
                    value={`${formatCHF(
                      result.monthlyPrice
                    )} / Monat`}
                  />

                  <ResultRow
                    label="Setup einmalig"
                    value={formatCHF(result.tier.setupFee)}
                  />

                  {annualPayment && (
                    <>
                      <ResultRow
                        label="Jahresrabatt"
                        value={`${Math.round(
                          result.discount * 100
                        )} %`}
                        highlight
                      />

                      <ResultRow
                        label="Jahrespreis"
                        value={formatCHF(result.annualPrice)}
                      />
                    </>
                  )}
                </div>

                <div className="mt-10">
                  <Button href="#/kontakt" className="w-full">
                    Konfiguration besprechen
                  </Button>
                </div>
              </>
            )}

            <p className="mt-8 text-xs leading-relaxed text-white/30">
              Die Berechnung dient als Orientierung und ersetzt
              kein individuelles Angebot. Alle Preise exkl. MwSt.
              Externe Telefonie-, Provider- und Integrationskosten
              können zusätzlich anfallen.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}