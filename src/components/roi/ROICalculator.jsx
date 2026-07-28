import React, { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Button from "../shared/Button";
import { pricing } from "../../data/pricing";

const EMPLOYER_COST_FACTOR = 1.25;

const productLabels = {
  convert: "Convert",
  concierge: "Concierge",
  cognia: "Cognia",
};

function formatCHF(value, decimals = 0) {
  if (value === null || value === undefined || Number.isNaN(value)) {
    return "–";
  }

  const negative = Number(value) < 0;
  const absoluteValue = Math.abs(Number(value));

  return `${negative ? "− " : ""}CHF ${absoluteValue.toLocaleString(
    "de-CH",
    {
      minimumFractionDigits: decimals,
      maximumFractionDigits: decimals,
    }
  )}`;
}

function formatNumber(value, decimals = 0) {
  return Number(value || 0).toLocaleString("de-CH", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  });
}

function formatPercent(value) {
  if (!Number.isFinite(value)) {
    return "–";
  }

  return `${value >= 0 ? "+" : "−"}${Math.abs(value).toLocaleString(
    "de-CH",
    {
      maximumFractionDigits: 0,
    }
  )} %`;
}

function getVoiceSurcharge(tier, voiceType) {
  if (voiceType === "premium") {
    return Number(tier.premiumVoicePerMinute || 0);
  }

  if (voiceType === "gold") {
    return Number(tier.goldVoicePerMinute || 0);
  }

  return 0;
}

function getAdjustedIncludedMinutes(tier, voiceType) {
  if (!tier.monthlyPrice || !tier.includedMinutes) {
    return 0;
  }

  const baseRate =
    Number(tier.monthlyPrice) / Number(tier.includedMinutes);

  const voiceSurcharge = getVoiceSurcharge(tier, voiceType);

  return (
    Number(tier.monthlyPrice) /
    (baseRate + voiceSurcharge)
  );
}
function getTierKey(tier) {
  return tier.id.split("-").pop();
}

const agentCapacity = {
  cognia: {
    starter: 2,
    professional: 5,
    business: 10,
  },

  concierge: {
    starter: 2,
    professional: 5,
    business: 10,
  },
};
function estimateConversationProduct(
  product,
  monthlyMinutes,
  concurrentCalls = 0,
  voiceType = "standard",
  requiredAgents = 1
) {
  const tiers = pricing[product].filter(
    (tier) => tier.monthlyPrice !== null
  );

  const eligibleTiers = tiers.filter((tier) => {
    const tierKey = getTierKey(tier);

    const capacity =
      agentCapacity[product]?.[tierKey];

    if (!capacity) {
      return true;
    }

    return requiredAgents <= capacity;
  });

  const tiersToCalculate =
    eligibleTiers.length > 0
      ? eligibleTiers
      : tiers;

  const estimates = tiersToCalculate.map((tier) => {
    const includedMinutes =
      getAdjustedIncludedMinutes(
        tier,
        voiceType
      );

    const overageMinutes = Math.max(
      0,
      monthlyMinutes - includedMinutes
    );

    const voiceSurcharge =
      getVoiceSurcharge(
        tier,
        voiceType
      );

    const overageRate =
      Number(
        tier.overagePerMinute || 0
      ) + voiceSurcharge;

    const overageCost =
      overageMinutes * overageRate;

    let additionalLines = 0;
    let additionalLinesCost = 0;

    if (product === "cognia") {
      additionalLines = Math.max(
        0,
        concurrentCalls -
          Number(
            tier.concurrentCalls || 0
          )
      );

      additionalLinesCost =
        additionalLines *
        Number(
          tier.additionalConcurrentLine ||
            0
        );
    }

    const monthlyTotal =
      Number(tier.monthlyPrice) +
      overageCost +
      additionalLinesCost;

    return {
      tier,
      includedMinutes,
      overageMinutes,
      overageRate,
      overageCost,
      additionalLines,
      additionalLinesCost,
      monthlyTotal,
    };
  });

  estimates.sort(
    (a, b) =>
      a.monthlyTotal -
      b.monthlyTotal
  );

  return estimates[0];
}

function NumberField({
  label,
  value,
  onChange,
  min = 0,
  max,
  step = 1,
  suffix,
  help,
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-white/75">
        {label}
      </span>

      {help && (
        <span className="mb-2 block text-xs leading-relaxed text-white/35">
          {help}
        </span>
      )}

      <div className="flex overflow-hidden rounded-xl border border-cyan-300/15 bg-black/20 focus-within:border-cyan-300/50">
        <input
          type="number"
          value={value}
          min={min}
          max={max}
          step={step}
          onChange={(event) =>
            onChange(Number(event.target.value))
          }
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

function SelectField({
  label,
  value,
  onChange,
  children,
}) {
  return (
    <label className="block">
      <span className="mb-2 block text-sm font-semibold text-white/75">
        {label}
      </span>

      <select
        value={value}
        onChange={(event) =>
          onChange(event.target.value)
        }
        className="w-full rounded-xl border border-cyan-300/15 bg-[#0b1124] px-4 py-4 text-lg text-white outline-none focus:border-cyan-300/50"
      >
        {children}
      </select>
    </label>
  );
}

function ResultRow({
  label,
  value,
  highlight = false,
}) {
  return (
    <div className="flex items-center justify-between gap-5 border-b border-white/10 py-3 last:border-b-0">
      <span className="text-white/45">
        {label}
      </span>

      <span
        className={`text-right font-semibold ${
          highlight
            ? "text-cyan-300"
            : "text-white"
        }`}
      >
        {value}
      </span>
    </div>
  );
}

function Metric({
  label,
  value,
  description,
  highlight = false,
}) {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-5">
      <div className="text-sm text-white/40">
        {label}
      </div>

      <div
        className={`mt-2 text-2xl font-semibold ${
          highlight
            ? "text-cyan-300"
            : "text-white"
        }`}
      >
        {value}
      </div>

      {description && (
        <div className="mt-2 text-xs leading-relaxed text-white/35">
          {description}
        </div>
      )}
    </div>
  );
}

function CogniaROI() {
  const [callsPerMonth, setCallsPerMonth] =
    useState(2000);

  const [averageDuration, setAverageDuration] =
    useState(4);

  const [employees, setEmployees] =
    useState(3);

  const [grossSalary, setGrossSalary] =
    useState(5500);

  const [automationRate, setAutomationRate] =
    useState(75);

  const [concurrentCalls, setConcurrentCalls] =
    useState(3);

  const [voiceType, setVoiceType] =
    useState("standard");

  const result = useMemo(() => {
    const monthlyMinutes =
      callsPerMonth * averageDuration;

    const monthlyHours =
      monthlyMinutes / 60;

    const employerCostPerEmployee =
      grossSalary * EMPLOYER_COST_FACTOR;

    const annualCostPerEmployee =
      employerCostPerEmployee * 12;

    const annualTeamCost =
      employees * annualCostPerEmployee;

    const automatablePersonnelCost =
      annualTeamCost *
      (automationRate / 100);

    const remainingHumanCost =
      annualTeamCost *
      (1 - automationRate / 100);

    const savedHours =
      monthlyHours *
      12 *
      (automationRate / 100);

    const cognia =
      estimateConversationProduct(
        "cognia",
        monthlyMinutes,
        concurrentCalls,
        voiceType,
        employees
      );

    const annualCogniaRecurring =
      cognia.monthlyTotal * 12;

    const setupFee =
      Number(cognia.tier.setupFee || 0);

    const firstYearCogniaCost =
      annualCogniaRecurring +
      setupFee;

    const firstYearTargetCost =
      remainingHumanCost +
      firstYearCogniaCost;

    const yearTwoTargetCost =
      remainingHumanCost +
      annualCogniaRecurring;

    const firstYearSavings =
      annualTeamCost -
      firstYearTargetCost;

    const yearTwoSavings =
      annualTeamCost -
      yearTwoTargetCost;

    const savingsRate =
      annualTeamCost > 0
        ? (firstYearSavings /
            annualTeamCost) *
          100
        : 0;

    const firstYearROI =
      firstYearCogniaCost > 0
        ? (firstYearSavings /
            firstYearCogniaCost) *
          100
        : 0;

    const monthlyAutomatableValue =
      automatablePersonnelCost / 12;

    const monthlyNetBenefit =
      monthlyAutomatableValue -
      cognia.monthlyTotal;

    const paybackMonths =
      monthlyNetBenefit > 0
        ? setupFee /
          monthlyNetBenefit
        : null;

    return {
      monthlyMinutes,
      monthlyHours,
      annualCostPerEmployee,
      annualTeamCost,
      automatablePersonnelCost,
      remainingHumanCost,
      savedHours,
      cognia,
      annualCogniaRecurring,
      setupFee,
      firstYearCogniaCost,
      firstYearTargetCost,
      yearTwoTargetCost,
      firstYearSavings,
      yearTwoSavings,
      savingsRate,
      firstYearROI,
      paybackMonths,
    };
  }, [
    callsPerMonth,
    averageDuration,
    employees,
    grossSalary,
    automationRate,
    concurrentCalls,
    voiceType,
  ]);

  return (
    <div className="grid overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-white/[0.035] lg:grid-cols-2">
      <div className="p-7 md:p-10">
        <p className="text-sm uppercase tracking-[0.18em] text-white/35">
          Ihre Annahmen
        </p>

        <h3 className="mt-3 text-3xl font-light">
          Cognia ROI
        </h3>

        <div className="mt-8 space-y-5">
          <NumberField
            label="Anrufe pro Monat"
            value={callsPerMonth}
            onChange={setCallsPerMonth}
            min={0}
          />

          <NumberField
            label="Ø Gesprächsdauer"
            value={averageDuration}
            onChange={setAverageDuration}
            min={0.5}
            step={0.5}
            suffix="Min."
          />

          <NumberField
            label="Mitarbeitende im Telefondienst"
            value={employees}
            onChange={setEmployees}
            min={1}
          />

          <NumberField
            label="Bruttolohn pro Mitarbeitenden"
            value={grossSalary}
            onChange={setGrossSalary}
            min={0}
            suffix="CHF"
            help="Arbeitgeberkosten werden mit Faktor 1,25 berücksichtigt."
          />

          <NumberField
            label="Automatisierungsquote"
            value={automationRate}
            onChange={setAutomationRate}
            min={0}
            max={100}
            suffix="%"
          />

          <NumberField
            label="Gleichzeitige Anrufe"
            value={concurrentCalls}
            onChange={setConcurrentCalls}
            min={1}
          />

          <SelectField
            label="Sprachqualität"
            value={voiceType}
            onChange={setVoiceType}
          >
            <option value="standard">
              Standard Voice
            </option>

            <option value="premium">
              Premium Voice
            </option>

            <option value="gold">
              Gold Voice
            </option>
          </SelectField>
        </div>
      </div>

      <div className="bg-[#050817] p-7 md:p-10">
        <p className="text-sm uppercase tracking-[0.18em] text-cyan-300">
          Kostenvergleich
        </p>

        <h3 className="mt-3 text-3xl font-light text-white">
          Mitarbeitende vs. KI
        </h3>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.025] p-6">
            <div className="text-sm text-white/40">
              {employees} Mitarbeitende
            </div>

            <div className="mt-3 text-3xl font-semibold text-white">
              {formatCHF(
                result.annualTeamCost
              )}
            </div>

            <div className="mt-2 text-sm text-white/35">
              Personalkosten / Jahr
            </div>

            <div className="mt-4 text-xs text-white/30">
              inkl. Arbeitgeberkosten
            </div>
          </div>

          <div className="rounded-2xl border border-cyan-300/30 bg-cyan-300/[0.06] p-6">
            <div className="text-sm text-cyan-200">
              {employees} KI-Agenten
            </div>

            <div className="mt-3 text-3xl font-semibold text-cyan-300">
              {formatCHF(
                result.firstYearCogniaCost
              )}
            </div>

            <div className="mt-2 text-sm text-white/45">
              Cognia / 1. Jahr
            </div>

            <div className="mt-4 text-xs text-white/35">
              {result.cognia.tier.name}
              {" · "}
              inkl. Setup
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-cyan-300/30 bg-cyan-300/10 p-7">
          <div className="text-sm uppercase tracking-[0.16em] text-cyan-200">
            Reale Einsparung bei{" "}
            {automationRate} % Automation
          </div>

          <div className="mt-3 text-5xl font-light text-cyan-300 md:text-6xl">
            {formatCHF(
              result.firstYearSavings
            )}
          </div>

          <div className="mt-3 text-white/50">
            Einsparung im ersten Jahr
            inklusive Setup.
          </div>

          <div className="mt-5 flex flex-wrap gap-x-8 gap-y-2 text-sm">
            <div>
              <span className="text-white/40">
                Kostensenkung:
              </span>{" "}
              <span className="font-semibold text-cyan-200">
                {formatNumber(
                  result.savingsRate
                )}
                %
              </span>
            </div>

            <div>
              <span className="text-white/40">
                ab Jahr 2:
              </span>{" "}
              <span className="font-semibold text-cyan-200">
                {formatCHF(
                  result.yearTwoSavings
                )}
              </span>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10">
          <ResultRow
            label="Personalkosten heute"
            value={formatCHF(
              result.annualTeamCost
            )}
          />

          <ResultRow
            label={`Automatisierbarer Anteil (${automationRate} %)`}
            value={formatCHF(
              result.automatablePersonnelCost
            )}
          />

          <ResultRow
            label="Verbleibender menschlicher Aufwand"
            value={formatCHF(
              result.remainingHumanCost
            )}
          />

          <ResultRow
            label="Cognia Paket"
            value={
              result.cognia.tier.name
            }
            highlight
          />

          <ResultRow
            label="Cognia / Monat"
            value={formatCHF(
              result.cognia.monthlyTotal
            )}
          />

          <ResultRow
            label="Cognia / Jahr"
            value={formatCHF(
              result.annualCogniaRecurring
            )}
          />

          <ResultRow
            label="Setup einmalig"
            value={formatCHF(
              result.setupFee
            )}
          />

          <ResultRow
            label="Gesamtkosten neues Modell Jahr 1"
            value={formatCHF(
              result.firstYearTargetCost
            )}
          />

          <ResultRow
            label="Ersparnis Jahr 1"
            value={formatCHF(
              result.firstYearSavings
            )}
            highlight
          />
        </div>

        <div className="mt-8 grid gap-4 sm:grid-cols-3">
          <Metric
            label="ROI Jahr 1"
            value={formatPercent(
              result.firstYearROI
            )}
          />

          <Metric
            label="Eingesparte Stunden"
            value={`${formatNumber(
              result.savedHours
            )} Std.`}
          />

          <Metric
            label="Amortisation"
            value={
              result.paybackMonths
                ? `${formatNumber(
                    result.paybackMonths,
                    1
                  )} Monate`
                : "–"
            }
          />
        </div>

        <div className="mt-9">
          <Button
            href="#/kontakt"
            className="w-full"
          >
            Persönliche ROI-Analyse anfordern
          </Button>
        </div>
      </div>
    </div>
  );
}

function ConciergeROI() {
  const [visitors, setVisitors] =
    useState(20000);

  const [consultationShare, setConsultationShare] =
    useState(10);

  const [averageDuration, setAverageDuration] =
    useState(3);

  const [currentConversion, setCurrentConversion] =
    useState(2);

  const [conversionUplift, setConversionUplift] =
    useState(0.4);

  const [averageValue, setAverageValue] =
    useState(500);

  const [voiceType, setVoiceType] =
    useState("standard");

  const result = useMemo(() => {
    const consultations =
      visitors *
      (consultationShare / 100);

    const monthlyMinutes =
      consultations *
      averageDuration;

    const currentConversions =
      visitors *
      (currentConversion / 100);

    const futureConversion =
      Math.min(
        100,
        currentConversion +
          conversionUplift
      );

    const futureConversions =
      visitors *
      (futureConversion / 100);

    const additionalConversions =
      Math.max(
        0,
        futureConversions -
          currentConversions
      );

    const additionalRevenue =
      additionalConversions *
      averageValue;

    const concierge =
      estimateConversationProduct(
        "concierge",
        monthlyMinutes,
        0,
        voiceType
      );

    const annualCost =
      concierge.monthlyTotal * 12 +
      Number(
        concierge.tier.setupFee || 0
      );

    const annualAdditionalRevenue =
      additionalRevenue * 12;

    const annualNet =
      annualAdditionalRevenue -
      annualCost;

    const roi =
      annualCost > 0
        ? (annualNet / annualCost) *
          100
        : 0;

    return {
      consultations,
      monthlyMinutes,
      currentConversions,
      futureConversions,
      additionalConversions,
      additionalRevenue,
      concierge,
      annualCost,
      annualAdditionalRevenue,
      annualNet,
      roi,
    };
  }, [
    visitors,
    consultationShare,
    averageDuration,
    currentConversion,
    conversionUplift,
    averageValue,
    voiceType,
  ]);

  return (
    <div className="grid overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-white/[0.035] lg:grid-cols-2">
      <div className="p-7 md:p-10">
        <p className="text-sm uppercase tracking-[0.18em] text-white/35">
          Ihre Annahmen
        </p>

        <h3 className="mt-3 text-3xl font-light">
          Concierge ROI
        </h3>

        <div className="mt-8 space-y-5">
          <NumberField
            label="Website-Besucher pro Monat"
            value={visitors}
            onChange={setVisitors}
            min={0}
          />

          <NumberField
            label="Besucher mit Beratungsbedarf"
            value={consultationShare}
            onChange={setConsultationShare}
            min={0}
            max={100}
            suffix="%"
          />

          <NumberField
            label="Ø Beratungsdauer"
            value={averageDuration}
            onChange={setAverageDuration}
            min={0.5}
            step={0.5}
            suffix="Min."
          />

          <NumberField
            label="Aktuelle Conversion Rate"
            value={currentConversion}
            onChange={setCurrentConversion}
            min={0}
            max={100}
            step={0.1}
            suffix="%"
          />

          <NumberField
            label="Angenommene Verbesserung"
            value={conversionUplift}
            onChange={setConversionUplift}
            min={0}
            step={0.1}
            suffix="%-Pkt."
          />

          <NumberField
            label="Ø Wert pro Abschluss"
            value={averageValue}
            onChange={setAverageValue}
            min={0}
            suffix="CHF"
          />

          <SelectField
            label="Voice"
            value={voiceType}
            onChange={setVoiceType}
          >
            <option value="standard">
              Standard
            </option>

            <option value="premium">
              Premium
            </option>

            <option value="gold">
              Gold
            </option>
          </SelectField>
        </div>
      </div>

      <div className="bg-[#050817] p-7 md:p-10">
        <p className="text-sm uppercase tracking-[0.18em] text-cyan-300">
          Potenzial pro Jahr
        </p>

        <div className="mt-5 text-5xl font-light text-cyan-300 md:text-6xl">
          {formatCHF(result.annualNet)}
        </div>

        <p className="mt-3 text-white/45">
          Geschätzter zusätzlicher
          Netto-Umsatz nach Concierge-Kosten.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Metric
            label="Zusätzliche Abschlüsse / Monat"
            value={formatNumber(
              result.additionalConversions
            )}
          />

          <Metric
            label="Mehrumsatz / Monat"
            value={formatCHF(
              result.additionalRevenue
            )}
            highlight
          />

          <Metric
            label="ROI Jahr 1"
            value={formatPercent(
              result.roi
            )}
          />

          <Metric
            label="Beratungen / Monat"
            value={formatNumber(
              result.consultations
            )}
          />
        </div>

        <div className="mt-8 border-t border-white/10">
          <ResultRow
            label="Conversation-Minuten"
            value={`${formatNumber(
              result.monthlyMinutes
            )} / Monat`}
          />

          <ResultRow
            label="Empfohlenes Paket"
            value={
              result.concierge.tier.name
            }
            highlight
          />

          <ResultRow
            label="Concierge / Monat"
            value={formatCHF(
              result.concierge.monthlyTotal
            )}
          />

          <ResultRow
            label="Setup einmalig"
            value={formatCHF(
              result.concierge.tier.setupFee
            )}
          />

          <ResultRow
            label="Zusatzumsatz / Jahr"
            value={formatCHF(
              result.annualAdditionalRevenue
            )}
          />

          <ResultRow
            label="Kosten Jahr 1"
            value={formatCHF(
              result.annualCost
            )}
          />
        </div>

        <div className="mt-9">
          <Button
            href="#/kontakt"
            className="w-full"
          >
            Concierge Potenzial besprechen
          </Button>
        </div>
      </div>
    </div>
  );
}


const convertPackageImpact = {
  starter: {
    leadFactor: 1.0,
    closeRateUplift: 0,
    label: "Basis",
    explanation:
      "Basis-Szenario mit dem kleinsten Funktions- und Optimierungsumfang.",
  },
  professional: {
    leadFactor: 1.4,
    closeRateUplift: 1,
    label: "+40 % Reichweitenpotenzial",
    explanation:
      "Mehr Prompt-Läufe und häufigere Optimierungen erhöhen im Modell Reichweite und Abschlusswahrscheinlichkeit.",
  },
  business: {
    leadFactor: 1.9,
    closeRateUplift: 2,
    label: "+90 % Reichweitenpotenzial",
    explanation:
      "Grösserer Optimierungsumfang, mehr Autopilot-Korrekturen und Reporting erhöhen im Modell das nutzbare GEO-Potenzial.",
  },
  enterprise: {
    leadFactor: 2.6,
    closeRateUplift: 3,
    label: "+160 % Reichweitenpotenzial",
    explanation:
      "Der höchste Funktionsumfang wird im Modell mit der grössten Reichweite und dem stärksten Conversion-Hebel berücksichtigt.",
  },
};

function ConvertROI() {
  const [currentLeads, setCurrentLeads] =
    useState(40);

  const [additionalLeads, setAdditionalLeads] =
    useState(10);

  const [closeRate, setCloseRate] =
    useState(20);

  const [averageValue, setAverageValue] =
    useState(2500);

  const [tierId, setTierId] =
    useState("convert-professional");

  const [annualPayment, setAnnualPayment] =
    useState(false);

  const result = useMemo(() => {
    const tier =
      pricing.convert.find(
        (item) => item.id === tierId
      ) || pricing.convert[1];

    const tierKey = getTierKey(tier);

    const impact =
      convertPackageImpact[tierKey] ||
      convertPackageImpact.starter;

    const discount =
      annualPayment
        ? Number(
            tier.annualDiscount || 0
          )
        : 0;

    const effectiveMonthly =
      Number(tier.monthlyPrice) *
      (1 - discount);

    const annualCost =
      effectiveMonthly * 12 +
      Number(tier.setupFee || 0);

    /*
     * Der Besucher gibt ein konservatives
     * Basis-Potenzial zusätzlicher AI-Search-Leads an.
     *
     * Höhere Convert-Pakete erhöhen dieses Potenzial
     * im Modell aufgrund des grösseren Funktions-,
     * Prompt- und Optimierungsumfangs.
     */
    const effectiveAdditionalLeads =
      additionalLeads *
      impact.leadFactor;

    /*
     * Zusätzlich wird ein moderater
     * Conversion-Hebel je Paket modelliert.
     *
     * Wichtig: Das ist eine Modellannahme,
     * keine Erfolgsgarantie.
     */
    const effectiveCloseRate =
      Math.min(
        100,
        closeRate +
          impact.closeRateUplift
      );

    const currentRevenue =
      currentLeads *
      (closeRate / 100) *
      averageValue;

    const additionalRevenue =
      effectiveAdditionalLeads *
      (effectiveCloseRate / 100) *
      averageValue;

    const annualAdditionalRevenue =
      additionalRevenue * 12;

    const annualNet =
      annualAdditionalRevenue -
      annualCost;

    const roi =
      annualCost > 0
        ? (annualNet / annualCost) *
          100
        : 0;

    /*
     * Vergleich mit Starter:
     * Zeigt nicht nur den prozentualen ROI,
     * sondern welchen zusätzlichen absoluten
     * Netto-Mehrwert das grössere Paket im
     * Szenario erzeugt.
     */
    const starterTier =
      pricing.convert.find(
        (item) =>
          getTierKey(item) ===
          "starter"
      ) || pricing.convert[0];

    const starterImpact =
      convertPackageImpact.starter;

    const starterDiscount =
      annualPayment
        ? Number(
            starterTier.annualDiscount ||
              0
          )
        : 0;

    const starterMonthly =
      Number(
        starterTier.monthlyPrice || 0
      ) *
      (1 - starterDiscount);

    const starterAnnualCost =
      starterMonthly * 12 +
      Number(
        starterTier.setupFee || 0
      );

    const starterAdditionalRevenue =
      additionalLeads *
      starterImpact.leadFactor *
      ((closeRate +
        starterImpact.closeRateUplift) /
        100) *
      averageValue;

    const starterAnnualNet =
      starterAdditionalRevenue *
        12 -
      starterAnnualCost;

    const additionalNetVsStarter =
      annualNet -
      starterAnnualNet;

    return {
      tier,
      tierKey,
      impact,
      discount,
      effectiveMonthly,
      annualCost,
      currentRevenue,
      effectiveAdditionalLeads,
      effectiveCloseRate,
      additionalRevenue,
      annualAdditionalRevenue,
      annualNet,
      roi,
      additionalNetVsStarter,
    };
  }, [
    currentLeads,
    additionalLeads,
    closeRate,
    averageValue,
    tierId,
    annualPayment,
  ]);

  return (
    <div className="grid overflow-hidden rounded-[2rem] border border-cyan-300/20 bg-white/[0.035] lg:grid-cols-2">
      <div className="p-7 md:p-10">
        <p className="text-sm uppercase tracking-[0.18em] text-white/35">
          Ihre Annahmen
        </p>

        <h3 className="mt-3 text-3xl font-light">
          Convert ROI
        </h3>

        <div className="mt-8 space-y-5">
          <NumberField
            label="Qualifizierte Leads pro Monat"
            value={currentLeads}
            onChange={setCurrentLeads}
            min={0}
          />

          <NumberField
            label="Basis-Potenzial zusätzliche Leads durch AI Search"
            value={additionalLeads}
            onChange={setAdditionalLeads}
            min={0}
            help="Konservative Ausgangsannahme. Der gewählte Convert-Funktionsumfang beeinflusst das tatsächlich modellierte Potenzial."
          />

          <NumberField
            label="Aktuelle Abschlussquote"
            value={closeRate}
            onChange={setCloseRate}
            min={0}
            max={100}
            suffix="%"
          />

          <NumberField
            label="Ø Auftragswert"
            value={averageValue}
            onChange={setAverageValue}
            min={0}
            suffix="CHF"
          />

          <SelectField
            label="Convert Paket"
            value={tierId}
            onChange={setTierId}
          >
            {pricing.convert.map((tier) => (
              <option
                key={tier.id}
                value={tier.id}
              >
                {tier.name}
              </option>
            ))}
          </SelectField>

          <div className="rounded-xl border border-cyan-300/15 bg-cyan-300/[0.05] p-4">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-sm text-white/45">
                Modellierter Paket-Effekt
              </span>

              <span className="font-semibold text-cyan-300">
                {result.impact.label}
              </span>
            </div>

            <p className="mt-2 text-xs leading-relaxed text-white/35">
              {result.impact.explanation}
            </p>
          </div>

          <SelectField
            label="Abrechnung"
            value={
              annualPayment
                ? "annual"
                : "monthly"
            }
            onChange={(value) =>
              setAnnualPayment(
                value === "annual"
              )
            }
          >
            <option value="monthly">
              monatlich
            </option>

            <option value="annual">
              jährlich mit Rabatt
            </option>
          </SelectField>
        </div>
      </div>

      <div className="bg-[#050817] p-7 md:p-10">
        <p className="text-sm uppercase tracking-[0.18em] text-cyan-300">
          Netto-Umsatzpotenzial
        </p>

        <div className="mt-5 text-5xl font-light text-cyan-300 md:text-6xl">
          {formatCHF(result.annualNet)}
        </div>

        <p className="mt-3 text-white/45">
          Geschätzter zusätzlicher
          Netto-Umsatz im ersten Jahr
          nach Convert-Kosten.
        </p>

        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <Metric
            label="Mehrumsatz / Monat"
            value={formatCHF(
              result.additionalRevenue
            )}
            highlight
          />

          <Metric
            label="ROI Jahr 1"
            value={formatPercent(
              result.roi
            )}
          />

          <Metric
            label="Modellierte zusätzliche Leads"
            value={`+${formatNumber(
              result.effectiveAdditionalLeads,
              1
            )} / Monat`}
          />

          <Metric
            label="Modellierte Abschlussquote"
            value={`${formatNumber(
              result.effectiveCloseRate,
              1
            )} %`}
          />
        </div>

        {result.tierKey !==
          "starter" && (
          <div className="mt-4 rounded-2xl border border-cyan-300/20 bg-cyan-300/[0.06] p-5">
            <div className="text-sm text-white/40">
              Zusätzlicher Netto-Mehrwert
              gegenüber Starter
            </div>

            <div className="mt-2 text-2xl font-semibold text-cyan-300">
              +
              {formatCHF(
                Math.max(
                  0,
                  result.additionalNetVsStarter
                )
              )}
            </div>

            <div className="mt-2 text-xs leading-relaxed text-white/35">
              Modellrechnung im ersten Jahr
              bei identischen
              Ausgangsannahmen.
            </div>
          </div>
        )}

        <div className="mt-8 border-t border-white/10">
          <ResultRow
            label="Gewähltes Paket"
            value={result.tier.name}
            highlight
          />

          <ResultRow
            label="Paket-Effekt auf Lead-Potenzial"
            value={`× ${formatNumber(
              result.impact.leadFactor,
              2
            )}`}
          />

          <ResultRow
            label="Conversion-Hebel"
            value={`+${formatNumber(
              result.impact
                .closeRateUplift,
              1
            )} %-Pkt.`}
          />

          <ResultRow
            label="Convert / Monat"
            value={formatCHF(
              result.effectiveMonthly
            )}
          />

          <ResultRow
            label="Setup einmalig"
            value={formatCHF(
              result.tier.setupFee
            )}
          />

          {annualPayment && (
            <ResultRow
              label="Jahresrabatt"
              value={`${Math.round(
                result.discount * 100
              )} %`}
            />
          )}

          <ResultRow
            label="Mehrumsatz / Jahr"
            value={formatCHF(
              result.annualAdditionalRevenue
            )}
          />

          <ResultRow
            label="Kosten Jahr 1"
            value={formatCHF(
              result.annualCost
            )}
          />
        </div>

        <p className="mt-5 text-xs leading-relaxed text-white/30">
          Die Paket-Effekte auf Reichweite
          und Abschlussquote sind
          transparente Modellannahmen auf
          Basis des unterschiedlichen
          Funktions- und
          Optimierungsumfangs. Sie stellen
          keine Garantie für Leads,
          Rankings oder Abschlüsse dar.
        </p>

<div className="mt-9">
  <Button
    href="#/geo-analyse"
    className="w-full"
  >
    GEO-Simulation starten
  </Button>
</div>
      </div>
    </div>
  );
}

export default function ROICalculator() {
  const [product, setProduct] =
    useState("cognia");

  return (
    <section className="bg-[#070b1c] px-6 py-24 text-white">
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-4xl text-center">
          <p className="mb-3 text-cyan-300">
            ROI Rechner
          </p>

          <h2 className="text-4xl font-light leading-tight md:text-6xl">
            Welches Potenzial steckt in{" "}
            <span className="font-bold text-cyan-300">
              Ihrem Unternehmen?
            </span>
          </h2>

          <p className="mx-auto mt-6 max-w-3xl text-xl leading-relaxed text-white/65">
            Berechnen Sie mit wenigen
            Kennzahlen das wirtschaftliche
            Potenzial von Voixero.
          </p>
        </div>

        <div className="mx-auto mt-12 flex flex-wrap justify-center gap-3">
          {[
            "convert",
            "concierge",
            "cognia",
          ].map((item) => (
            <button
              key={item}
              type="button"
              onClick={() =>
                setProduct(item)
              }
              className={`rounded-xl border px-7 py-3 font-semibold transition ${
                product === item
                  ? "border-cyan-300 bg-cyan-300 text-slate-950"
                  : "border-cyan-300/20 bg-white/[0.03] text-white/65 hover:border-cyan-300/50 hover:text-cyan-200"
              }`}
            >
              {productLabels[item]}
            </button>
          ))}
        </div>

        <motion.div
          key={product}
          initial={{
            opacity: 0,
            y: 15,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.25,
          }}
          className="mt-12"
        >
          {product === "convert" && (
            <ConvertROI />
          )}

          {product === "concierge" && (
            <ConciergeROI />
          )}

          {product === "cognia" && (
            <CogniaROI />
          )}
        </motion.div>

        <p className="mx-auto mt-7 max-w-4xl text-center text-xs leading-relaxed text-white/30">
          Die dargestellten Ergebnisse sind
          Modellrechnungen auf Basis der von
          Ihnen eingegebenen Annahmen. Sie
          stellen keine Garantie für
          Einsparungen, Mehrumsatz oder
          Conversion-Steigerungen dar.
        </p>
      </div>
    </section>
  );
}