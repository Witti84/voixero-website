import React, { useMemo, useState } from "react";
import Button from "../shared/Button";
import { pricing } from "../../data/pricing";

const BUNDLE_DISCOUNT = 0.2;
const BUNDLE_MONTHS = 24;

const productConfig = {
  convert: {
    number: "Produkt 1",
    name: "Convert",
    subtitle: "KI-Sichtbarkeit und GEO-Optimierung",
  },
  concierge: {
    number: "Produkt 2",
    name: "Concierge",
    subtitle: "Digitale Kundenbegleitung und Co-Browsing",
  },
  cognia: {
    number: "Produkt 3",
    name: "Cognia",
    subtitle: "KI-Telefonie für Service, Support und Vertrieb",
  },
};

const customerSegments = [
  {
    id: "standard",
    label: "Standard",
    description: "Reguläre Konditionen ohne automatischen Bundle-Vorteil.",
  },
  {
    id: "startup",
    label: "Start-up",
    description:
      "20 % Bundle-Vorteil für die ersten 24 Monate bei mindestens zwei ausgewählten Produkten.",
  },
  {
    id: "kmu",
    label: "KMU",
    description:
      "20 % Bundle-Vorteil für die ersten 24 Monate bei mindestens zwei ausgewählten Produkten.",
  },
];

function formatCHF(value, decimals = 0) {
  if (
    value === null ||
    value === undefined ||
    Number.isNaN(Number(value))
  ) {
    return "Individuell";
  }

  return `CHF ${Number(value).toLocaleString("de-CH", {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  })}`;
}

function formatNumber(value) {
  return Number(value || 0).toLocaleString("de-CH", {
    maximumFractionDigits: 0,
  });
}

function getTierLabel(tier) {
  if (!tier?.name) {
    return "";
  }

  return tier.name
    .replace("Convert ", "")
    .replace("Concierge ", "")
    .replace("Cognia ", "");
}

function ProductCard({ tier, selected, onSelect, product }) {
  const tierLabel = getTierLabel(tier);
  const isEnterprise =
    tier.monthlyPrice === null || tier.monthlyPrice === undefined;

  return (
    <button
      type="button"
      onClick={onSelect}
      className={`relative flex h-full w-full flex-col rounded-2xl border p-5 text-left transition ${
        selected
          ? "border-cyan-300 bg-cyan-300/[0.08]"
          : "border-white/10 bg-white/[0.025] hover:border-cyan-300/35 hover:bg-white/[0.04]"
      }`}
    >
      <div className="flex items-start justify-between gap-4">
        <div>
          <h4 className="text-lg font-semibold text-white">{tierLabel}</h4>

          <div className="mt-4">
            {isEnterprise ? (
              <>
                <div className="text-xl font-semibold text-white">Individuell</div>
                <div className="mt-1 text-xs text-white/35">Preis auf Anfrage</div>
              </>
            ) : (
              <>
                <div className="text-2xl font-semibold text-white">
                  {formatCHF(tier.monthlyPrice)}
                </div>
                <div className="mt-1 text-xs text-white/35">pro Monat</div>
              </>
            )}
          </div>
        </div>

        <div
          className={`mt-1 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border ${
            selected ? "border-cyan-300 bg-cyan-300" : "border-white/25"
          }`}
        >
          {selected && <div className="h-2 w-2 rounded-full bg-[#070b1c]" />}
        </div>
      </div>

      <div className="mt-4 text-xs text-white/40">
        Setup: {tier.setupFee === null || tier.setupFee === undefined ? "Individuell" : formatCHF(tier.setupFee)}
      </div>

      {tier.includedMinutes && (
        <div className="mt-4 rounded-lg bg-white/[0.05] px-3 py-2 text-xs text-white/55">
          {formatNumber(tier.includedMinutes)} Inklusivminuten
        </div>
      )}

      {product === "convert" && tier.features?.length > 0 && (
        <div className="mt-4 rounded-lg bg-white/[0.05] px-3 py-2 text-xs text-white/55">
          {tier.features[0]}
        </div>
      )}

      <div className="mt-5 space-y-2">
        {(tier.features || []).slice(0, 3).map((feature) => (
          <div key={feature} className="flex gap-2 text-xs leading-relaxed text-white/50">
            <span className="text-cyan-300">✓</span>
            <span>{feature}</span>
          </div>
        ))}
      </div>
    </button>
  );
}

function ProductSection({ product, selectedTierId, onSelect }) {
  const config = productConfig[product];
  const tiers = pricing[product] || [];

  return (
    <section className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 md:p-8">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
            {config.number}
          </p>
          <h3 className="mt-2 text-2xl font-semibold text-white">{config.name}</h3>
          <p className="mt-1 text-sm text-white/45">{config.subtitle}</p>
        </div>

        {selectedTierId && (
          <button
            type="button"
            onClick={() => onSelect(null)}
            className="rounded-lg border border-white/10 px-3 py-2 text-xs text-white/45 transition hover:border-white/25 hover:text-white"
          >
            Auswahl entfernen
          </button>
        )}
      </div>

      <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-4">
        {tiers.map((tier) => (
          <ProductCard
            key={tier.id}
            tier={tier}
            product={product}
            selected={selectedTierId === tier.id}
            onSelect={() => onSelect(tier.id)}
          />
        ))}
      </div>
    </section>
  );
}

function SummaryRow({ label, value, highlight = false }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/10 py-3 last:border-b-0">
      <span className="text-sm text-white/45">{label}</span>
      <span className={`text-right font-semibold ${highlight ? "text-cyan-300" : "text-white"}`}>
        {value}
      </span>
    </div>
  );
}

export default function VoixeroConfigurator() {
  const [customerSegment, setCustomerSegment] = useState("standard");

  const [selection, setSelection] = useState({
    convert: null,
    concierge: null,
    cognia: null,
  });

  const selectedProducts = useMemo(() => {
    return Object.entries(selection)
      .map(([product, tierId]) => {
        if (!tierId) return null;

        const tier = pricing[product]?.find((item) => item.id === tierId);
        if (!tier) return null;

        return {
          product,
          tier,
          config: productConfig[product],
        };
      })
      .filter(Boolean);
  }, [selection]);

  const totals = useMemo(() => {
    const knownProducts = selectedProducts.filter(
      (item) => item.tier.monthlyPrice !== null && item.tier.monthlyPrice !== undefined
    );

    const hasIndividualPricing = selectedProducts.some(
      (item) => item.tier.monthlyPrice === null || item.tier.monthlyPrice === undefined
    );

    const monthlyListPrice = knownProducts.reduce(
      (sum, item) => sum + Number(item.tier.monthlyPrice || 0),
      0
    );

    const setupListPrice = knownProducts.reduce(
      (sum, item) => sum + Number(item.tier.setupFee || 0),
      0
    );

    const bundleEligible =
      (customerSegment === "startup" || customerSegment === "kmu") &&
      selectedProducts.length >= 2;

    const monthlyDiscount = bundleEligible
      ? monthlyListPrice * BUNDLE_DISCOUNT
      : 0;

    const monthlyFirst24 = monthlyListPrice - monthlyDiscount;
    const monthlyFrom25 = monthlyListPrice;
    const savings24Months = monthlyDiscount * BUNDLE_MONTHS;

    return {
      monthlyListPrice,
      setupListPrice,
      hasIndividualPricing,
      bundleEligible,
      monthlyDiscount,
      monthlyFirst24,
      monthlyFrom25,
      savings24Months,
    };
  }, [selectedProducts, customerSegment]);

  const activeSegment =
    customerSegments.find((segment) => segment.id === customerSegment) ||
    customerSegments[0];

  const updateSelection = (product, tierId) => {
    setSelection((current) => ({
      ...current,
      [product]: tierId,
    }));
  };

  return (
    <section className="bg-[#070b1c] px-6 pb-28 pt-10 text-white">
      <div className="mx-auto max-w-[1500px]">
        <div className="grid gap-6 xl:grid-cols-[minmax(0,1fr)_330px]">
          <div className="space-y-6">
            <section className="rounded-[1.75rem] border border-white/10 bg-white/[0.035] p-6 md:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">
                Schritt 1
              </p>

              <div className="mt-2 flex flex-wrap items-start justify-between gap-6">
                <div className="max-w-3xl">
                  <h2 className="text-2xl font-semibold">Ihre Lösung zusammenstellen</h2>

                  <p className="mt-3 text-sm leading-relaxed text-white/45">
                    Wählen Sie zuerst Ihr Kundensegment und anschliessend die Produkte und Pakete,
                    die zu Ihrem Unternehmen passen.
                  </p>

                  <div className="mt-6">
                    <div className="text-xs font-semibold uppercase tracking-[0.14em] text-white/40">
                      Kundensegment
                    </div>

                    <div className="mt-3 flex flex-wrap gap-2">
                      {customerSegments.map((segment) => (
                        <button
                          key={segment.id}
                          type="button"
                          onClick={() => setCustomerSegment(segment.id)}
                          className={`rounded-xl border px-5 py-3 text-sm font-semibold transition ${
                            customerSegment === segment.id
                              ? "border-cyan-300 bg-cyan-300 text-[#070b1c]"
                              : "border-white/10 bg-white/[0.03] text-white/60 hover:border-cyan-300/40 hover:text-white"
                          }`}
                        >
                          {segment.label}
                        </button>
                      ))}
                    </div>

                    <p className="mt-3 max-w-3xl text-xs leading-relaxed text-white/35">
                      {activeSegment.description}
                    </p>
                  </div>
                </div>

                <div className="rounded-xl border border-cyan-300/20 bg-cyan-300/[0.05] px-4 py-3">
                  <div className="text-xs text-white/35">Gewählte Produkte</div>
                  <div className="mt-1 text-xl font-semibold text-cyan-300">
                    {selectedProducts.length}
                  </div>
                </div>
              </div>

              {(customerSegment === "startup" || customerSegment === "kmu") && (
                <div
                  className={`mt-6 rounded-xl border p-4 ${
                    totals.bundleEligible
                      ? "border-emerald-300/20 bg-emerald-300/[0.06]"
                      : "border-white/10 bg-white/[0.025]"
                  }`}
                >
                  <div
                    className={`text-sm font-semibold ${
                      totals.bundleEligible ? "text-emerald-300" : "text-white/55"
                    }`}
                  >
                    {totals.bundleEligible ? "Bundle-Vorteil aktiv" : "Bundle noch nicht aktiv"}
                  </div>

                  <p className="mt-2 text-xs leading-relaxed text-white/35">
                    {totals.bundleEligible
                      ? "20 % Preisvorteil auf die monatlichen Gebühren für die ersten 24 Monate."
                      : "Wählen Sie mindestens zwei Produkte, um den 20-%-Bundle-Vorteil für die ersten 24 Monate zu aktivieren."}
                  </p>
                </div>
              )}
            </section>

            <ProductSection
              product="convert"
              selectedTierId={selection.convert}
              onSelect={(tierId) => updateSelection("convert", tierId)}
            />

            <ProductSection
              product="concierge"
              selectedTierId={selection.concierge}
              onSelect={(tierId) => updateSelection("concierge", tierId)}
            />

            <ProductSection
              product="cognia"
              selectedTierId={selection.cognia}
              onSelect={(tierId) => updateSelection("cognia", tierId)}
            />
          </div>

          <div>
            <div className="sticky top-28 rounded-[1.75rem] border border-cyan-300/15 bg-[#0b0b1d] p-6">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-cyan-300">Live</p>
              <h3 className="mt-1 text-2xl font-semibold">Ihre Konfiguration</h3>

              <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.025] px-4 py-3">
                <div className="text-xs text-white/35">Kundensegment</div>
                <div className="mt-1 font-semibold text-white">{activeSegment.label}</div>
              </div>

              {selectedProducts.length === 0 ? (
                <div className="mt-4 rounded-xl border border-white/10 bg-white/[0.035] p-4">
                  <div className="font-semibold text-white/55">Noch keine Produkte ausgewählt</div>
                  <p className="mt-2 text-xs leading-relaxed text-white/35">
                    Wählen Sie links mindestens ein Voixero Produkt aus.
                  </p>
                </div>
              ) : (
                <div className="mt-4 space-y-3">
                  {selectedProducts.map(({ product, tier, config }) => (
                    <div key={product} className="rounded-xl border border-white/10 bg-white/[0.03] p-4">
                      <div className="flex items-center justify-between gap-4">
                        <div>
                          <div className="text-sm font-semibold text-white">{config.name}</div>
                          <div className="mt-1 text-xs text-white/35">{getTierLabel(tier)}</div>
                        </div>

                        <div className="text-right">
                          <div className="font-semibold text-cyan-300">
                            {tier.monthlyPrice === null ? "Individuell" : formatCHF(tier.monthlyPrice)}
                          </div>
                          {tier.monthlyPrice !== null && (
                            <div className="text-[10px] text-white/30">/ Monat</div>
                          )}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}

              <div className="mt-6 border-t border-white/10 pt-2">
                <SummaryRow label="Produkte" value={selectedProducts.length} />

                <SummaryRow
                  label="Listenpreis / Monat"
                  value={
                    totals.hasIndividualPricing
                      ? `${formatCHF(totals.monthlyListPrice)} + individuell`
                      : formatCHF(totals.monthlyListPrice)
                  }
                />

                {totals.bundleEligible && (
                  <SummaryRow
                    label="Bundle-Vorteil / Monat"
                    value={`− ${formatCHF(totals.monthlyDiscount)}`}
                    highlight
                  />
                )}

                <SummaryRow
                  label={totals.bundleEligible ? "Monat 1–24" : "Monatlich"}
                  value={
                    totals.hasIndividualPricing
                      ? `${formatCHF(
                          totals.bundleEligible
                            ? totals.monthlyFirst24
                            : totals.monthlyListPrice
                        )} + individuell`
                      : formatCHF(
                          totals.bundleEligible
                            ? totals.monthlyFirst24
                            : totals.monthlyListPrice
                        )
                  }
                  highlight
                />

                {totals.bundleEligible && (
                  <SummaryRow
                    label="ab Monat 25"
                    value={
                      totals.hasIndividualPricing
                        ? `${formatCHF(totals.monthlyFrom25)} + individuell`
                        : formatCHF(totals.monthlyFrom25)
                    }
                  />
                )}

                <SummaryRow
                  label="Setup gesamt"
                  value={
                    totals.hasIndividualPricing
                      ? `${formatCHF(totals.setupListPrice)} + individuell`
                      : formatCHF(totals.setupListPrice)
                  }
                />
              </div>

              {totals.bundleEligible && (
                <div className="mt-6 rounded-xl border border-cyan-300/20 bg-cyan-300/[0.06] p-4">
                  <div className="text-xs text-white/40">Gesamtersparnis</div>
                  <div className="mt-2 text-2xl font-semibold text-cyan-300">
                    {formatCHF(totals.savings24Months)}
                  </div>
                  <div className="mt-1 text-xs text-white/30">über die ersten 24 Monate</div>
                </div>
              )}

              {selectedProducts.length > 0 && (
                <>
                  <div className="mt-6 rounded-xl border border-cyan-300/15 bg-cyan-300/[0.05] p-4">
                    <div className="text-xs text-white/40">Ihre Auswahl</div>
                    <div className="mt-2 text-sm leading-relaxed text-white/65">
                      {selectedProducts
                        .map(({ config, tier }) => `${config.name} ${getTierLabel(tier)}`)
                        .join(" + ")}
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button href="#/kontakt" className="w-full">
                      Konfiguration anfragen
                    </Button>
                  </div>

                  <div className="mt-3">
                    <Button href="#/roi" variant="outline" className="w-full">
                      ROI berechnen
                    </Button>
                  </div>
                </>
              )}

              <p className="mt-5 text-xs leading-relaxed text-white/25">
                Der Bundle-Vorteil gilt in dieser Version auf die monatlichen Gebühren.
                Setup-Kosten werden unverändert ausgewiesen. Individuelle Leistungen und
                Zusatzoptionen können zusätzliche Kosten verursachen.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
