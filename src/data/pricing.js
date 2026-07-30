export const pricing = {
  convert: [
    {
      id: "convert-starter",
      name: "Convert Starter",

      monthlyPrice: 99,
      price: "CHF 99",
      period: "/ Monat",

      setupFee: 349,
      annualDiscount: 0.05,

      description:
        "Der Einstieg in professionelles GEO-Monitoring und die Optimierung Ihrer KI-Sichtbarkeit.",

      features: [
        "Sichtbarkeit über alle 5 Engines",
        "10 Scans & 5 Prompts pro Tag",
        "Bis zu 3 Autopilot-Korrekturen pro Tag",
        "Anwenden oder zurückrollen, immer kostenlos",
      ],

      contract: {
        pilot: "1 Monat / kostenfrei",
        afterPilot: "12 Monate",
        automaticRenewal: "keine",
        reminder: "90 Tage vor Vertragsablauf",
      },

      payment: {
        setup: "mit Unterschrift des Vertrags / 7 Tage",
        package: "monatlich im Voraus / jährlich mit Rabatt",
      },

      cta: "GEO-Analyse anfordern",
    },

    {
      id: "convert-professional",
      name: "Convert Professional",

      monthlyPrice: 249,
      price: "CHF 249",
      period: "/ Monat",

      setupFee: 499,
      annualDiscount: 0.1,

      description:
        "Für Unternehmen mit regelmässigem Prompt-Monitoring und erweitertem Autopilot.",

      features: [
        "Sichtbarkeit über alle 5 Engines",
        "1'000 Prompt-Läufe pro Monat",
        "Keine täglichen Nutzungslimits",
        "10 Autopilot-Korrekturen pro Tag",
      ],

      contract: {
        pilot: "1 Monat / kostenfrei",
        afterPilot: "12 Monate",
        automaticRenewal: "keine",
        reminder: "90 Tage vor Vertragsablauf",
      },

      payment: {
        setup: "mit Unterschrift des Vertrags / 7 Tage",
        package: "monatlich im Voraus / jährlich mit Rabatt",
      },

      cta: "GEO-Analyse anfordern",
      highlighted: true,
    },

    {
      id: "convert-business",
      name: "Convert Business",

      monthlyPrice: 499,
      price: "CHF 499",
      period: "/ Monat",

      setupFee: 999,
      annualDiscount: 0.1,

      description:
        "Für Unternehmen mit höherem Optimierungsbedarf, mehreren Stores und erweitertem Reporting.",

      features: [
        "Sichtbarkeit über alle 5 Engines",
        "1'000 Prompt-Läufe pro Monat",
        "Keine täglichen Nutzungslimits",
        "50 Autopilot-Korrekturen pro Tag",
        "Geplante Berichte, kostenlos inklusive",
        "Multi-Store-fähig",
        "Priorisierter Support",
      ],

      contract: {
        pilot: "1 Monat / kostenfrei",
        afterPilot: "12 Monate",
        automaticRenewal: "keine",
        reminder: "90 Tage vor Vertragsablauf",
      },

      payment: {
        setup: "mit Unterschrift des Vertrags / 7 Tage",
        package: "monatlich im Voraus / jährlich mit Rabatt",
      },

      cta: "Beratung anfragen",
    },

    {
      id: "convert-enterprise",
      name: "Convert Enterprise",

      monthlyPrice: 899,
      price: "CHF 899",
      period: "/ Monat",

      setupFee: 1499,
      annualDiscount: 0.15,

      description:
        "Für anspruchsvolle Multi-Brand- und Enterprise-Umgebungen mit erweiterten Governance-Anforderungen.",

      features: [
        "Sichtbarkeit über alle 5 Engines",
        "1'000 Prompt-Läufe pro Monat",
        "Keine täglichen Nutzungslimits",
        "200 Autopilot-Korrekturen pro Tag",
        "White-Label-Kundenberichte",
        "Multi-Store-fähig",
        "Priorisierter Support",
        "SSO / SAML + dedizierter Manager",
        "Individuelle Verträge & SLA",
      ],

      contract: {
        pilot: "1 Monat / kostenfrei",
        afterPilot: "12 Monate",
        automaticRenewal: "keine",
        reminder: "90 Tage vor Vertragsablauf",
      },

      payment: {
        setup: "mit Unterschrift des Vertrags / 7 Tage",
        package: "monatlich im Voraus / jährlich mit Rabatt",
      },

      cta: "Enterprise anfragen",
    },
  ],

  concierge: [
    {
      id: "concierge-starter",
      name: "Concierge Starter",

      monthlyPrice: 949,
      price: "CHF 949",
      period: "/ Monat",

      includedMinutes: 9490,
      setupFee: 3499,

      overagePerMinute: 0.13,
      premiumVoicePerMinute: 0.05,
      goldVoicePerMinute: 0.06,
      videoAvatarPerMinute: 0.15,
      phoneValidation: 0.02,
      emailValidation: 0.02,
      aiTrainingSession: 249,

      description:
        "Für den Einstieg in KI-gestützte digitale Beratung und automatisierte Customer Journeys.",

      features: [
        "Bis zu 9'490 Inklusivminuten",
        "Digital Conversations 24h",
        "Parallele Beratungen unlimitiert",
        "2 KI-Agenten / Assistenten",
        "Standard Voices inklusive",
        "Premium Voices optional",
        "10 parallele Workflows",
        "10 Trainingsszenarien pro KI-trainiert-KI Session",
        "Omnichannel-Budget",
      ],

      contract: {
        pilot: "3 Monate",
        afterPilot: "12 Monate",
        automaticRenewal: "keine",
        reminder: "90 Tage vor Vertragsablauf",
      },

      cta: "Concierge kennenlernen",
    },

    {
      id: "concierge-professional",
      name: "Concierge Professional",

      monthlyPrice: 3495,
      price: "CHF 3'495",
      period: "/ Monat",

      includedMinutes: 38833.333333333336,
      setupFee: 7499,

      overagePerMinute: 0.12,
      premiumVoicePerMinute: 0.05,
      goldVoicePerMinute: 0.06,
      videoAvatarPerMinute: 0.12,
      phoneValidation: 0.02,
      emailValidation: 0.02,
      aiTrainingSession: 449,

      description:
        "Für Unternehmen mit mehreren digitalen Beratungsprozessen und höherem Gesprächsvolumen.",

      features: [
        "Bis zu ca. 38'833 Inklusivminuten",
        "Digital Conversations 24h",
        "Parallele Beratungen unlimitiert",
        "5 KI-Agenten / Assistenten",
        "Standard Voices inklusive",
        "Premium Voices optional",
        "20 parallele Workflows",
        "30 Trainingsszenarien pro KI-trainiert-KI Session",
        "Omnichannel-Budget",
      ],

      contract: {
        pilot: "3 Monate",
        afterPilot: "12 Monate",
        automaticRenewal: "keine",
        reminder: "90 Tage vor Vertragsablauf",
      },

      cta: "Beratung buchen",
      highlighted: true,
    },

    {
      id: "concierge-business",
      name: "Concierge Business",

      monthlyPrice: 7499,
      price: "CHF 7'499",
      period: "/ Monat",

      includedMinutes: 93737.5,
      setupFee: 9999,

      overagePerMinute: 0.11,
      premiumVoicePerMinute: 0.05,
      goldVoicePerMinute: 0.06,
      videoAvatarPerMinute: 0.13,
      phoneValidation: 0.02,
      emailValidation: 0.02,
      aiTrainingSession: 649,

      description:
        "Für umfangreiche digitale Beratungs- und Automatisierungsprozesse mit mehreren KI-Agenten.",

      features: [
        "Bis zu ca. 93'738 Inklusivminuten",
        "Digital Conversations 24h",
        "Parallele Beratungen unlimitiert",
        "10 KI-Agenten / Assistenten",
        "Standard Voices inklusive",
        "Premium Voices optional",
        "50 parallele Workflows",
        "50 Trainingsszenarien pro KI-trainiert-KI Session",
        "Omnichannel-Budget",
      ],

      contract: {
        pilot: "3 Monate",
        afterPilot: "12 Monate",
        automaticRenewal: "keine",
        reminder: "90 Tage vor Vertragsablauf",
      },

      cta: "Business anfragen",
    },

    {
      id: "concierge-enterprise",
      name: "Concierge Enterprise",

      monthlyPrice: null,
      price: "Nach Bedarf",
      period: "",

      includedMinutes: null,
      setupFee: null,

      overagePerMinute: null,
      premiumVoicePerMinute: null,
      goldVoicePerMinute: null,
      videoAvatarPerMinute: null,
      phoneValidation: null,
      emailValidation: null,
      aiTrainingSession: 0,

      description:
        "Für individuelle Enterprise-Szenarien mit massgeschneidertem Volumen und skalierbaren Prozessen.",

      features: [
        "Individuelle Inklusivminuten",
        "Digital Conversations 24h",
        "Parallele Beratungen unlimitiert",
        "KI-Agenten / Assistenten unlimitiert",
        "Standard Voices inklusive",
        "Premium Voices optional",
        "70 parallele Workflows",
        "100 Trainingsszenarien pro KI-trainiert-KI Session",
        "KI trainiert KI kostenfrei",
        "Omnichannel-Budget",
      ],

      contract: {
        pilot: "3 Monate",
        afterPilot: "12 Monate",
        automaticRenewal: "keine",
        reminder: "90 Tage vor Vertragsablauf",
      },

      cta: "Enterprise anfragen",
    },
  ],

  cognia: [
    {
      id: "cognia-starter",
      name: "Cognia Starter",

      monthlyPrice: 949,
      price: "CHF 949",
      period: "/ Monat",

      includedMinutes: 6500,
      setupFee: 3499,

      overagePerMinute: 0.19,
      premiumVoicePerMinute: 0.05,
      goldVoicePerMinute: 0.06,
      videoAvatarPerMinute: 0.15,
      phoneValidation: 0.02,
      emailValidation: 0.02,
      aiTrainingSession: 249,

      concurrentCalls: 3,
      additionalConcurrentLine: 20,

      description:
        "Für den Einstieg in professionelle KI-Telefonie und automatisierte Kundenkommunikation.",

      features: [
        "Bis zu ca. 6'500 Inklusivminuten",
        "Telefonie Inbound & Outbound",
        "3 parallele Telefonleitungen",
        "2 KI-Agenten / Assistenten",
        "Standard Voices inklusive",
        "Premium Voices optional",
        "10 parallele Workflows",
        "10 Trainingsszenarien pro KI-trainiert-KI Session",
        "Omnichannel-Budget",
      ],

      contract: {
        pilot: "1 Monat / kostenfrei",
        afterPilot: "12 Monate",
        automaticRenewal: "keine",
        reminder: "90 Tage vor Vertragsablauf",
      },

      cta: "Cognia kennenlernen",
    },

    {
      id: "cognia-professional",
      name: "Cognia Professional",

      monthlyPrice: 3495,
      price: "CHF 3'495",
      period: "/ Monat",

      includedMinutes: 25000,
      setupFee: 7499,

      overagePerMinute: 0.18,
      premiumVoicePerMinute: 0.05,
      goldVoicePerMinute: 0.06,
      videoAvatarPerMinute: 0.12,
      phoneValidation: 0.02,
      emailValidation: 0.02,
      aiTrainingSession: 449,

      concurrentCalls: 8,
      additionalConcurrentLine: 20,

      description:
        "Für Unternehmen mit höherem Gesprächsvolumen, mehreren KI-Agenten und parallelen Workflows.",

      features: [
        "Bis zu ca. 25'000 Inklusivminuten",
        "Telefonie Inbound & Outbound",
        "8 parallele Telefonleitungen",
        "5 KI-Agenten / Assistenten",
        "Standard Voices inklusive",
        "Premium Voices optional",
        "20 parallele Workflows",
        "30 Trainingsszenarien pro KI-trainiert-KI Session",
        "Omnichannel-Budget",
      ],

      contract: {
        pilot: "1 Monat / kostenfrei",
        afterPilot: "12 Monate",
        automaticRenewal: "keine",
        reminder: "90 Tage vor Vertragsablauf",
      },

      cta: "Beratung buchen",
      highlighted: true,
    },

    {
      id: "cognia-business",
      name: "Cognia Business",

      monthlyPrice: 7499,
      price: "CHF 7'499",
      period: "/ Monat",

      includedMinutes: 58000,
      setupFee: 9999,

      overagePerMinute: 0.17,
      premiumVoicePerMinute: 0.05,
      goldVoicePerMinute: 0.06,
      videoAvatarPerMinute: 0.13,
      phoneValidation: 0.02,
      emailValidation: 0.02,
      aiTrainingSession: 649,

      concurrentCalls: 20,
      additionalConcurrentLine: 20,

      description:
        "Für grössere Service- und Vertriebsorganisationen mit umfangreicher KI-Telefonie.",

      features: [
        "Bis zu ca. 58'000 Inklusivminuten",
        "Telefonie Inbound & Outbound",
        "20 parallele Telefonleitungen",
        "10 KI-Agenten / Assistenten",
        "Standard Voices inklusive",
        "Premium Voices optional",
        "50 parallele Workflows",
        "50 Trainingsszenarien pro KI-trainiert-KI Session",
        "Omnichannel-Budget",
      ],

      contract: {
        pilot: "1 Monat / kostenfrei",
        afterPilot: "12 Monate",
        automaticRenewal: "keine",
        reminder: "90 Tage vor Vertragsablauf",
      },

      cta: "Business anfragen",
    },

    {
      id: "cognia-enterprise",
      name: "Cognia Enterprise",

      monthlyPrice: null,
      price: "Nach Bedarf",
      period: "",

      includedMinutes: null,
      setupFee: null,

      overagePerMinute: null,
      premiumVoicePerMinute: null,
      goldVoicePerMinute: null,
      videoAvatarPerMinute: null,
      phoneValidation: null,
      emailValidation: null,
      aiTrainingSession: 0,

      concurrentCalls: null,
      additionalConcurrentLine: 15,

      description:
        "Für individuelle Enterprise-Setups mit unbegrenzten KI-Agenten und skalierbarer Telefonie.",

      features: [
        "Individuelle Inklusivminuten",
        "Telefonie Inbound & Outbound",
        "Parallele Telefonleitungen unbegrenzt",
        "KI-Agenten / Assistenten unlimitiert",
        "Standard Voices inklusive",
        "Premium Voices optional",
        "70 parallele Workflows",
        "100 Trainingsszenarien pro KI-trainiert-KI Session",
        "KI trainiert KI kostenfrei",
        "Omnichannel-Budget",
      ],

      contract: {
        pilot: "1 Monat / kostenfrei",
        afterPilot: "12 Monate",
        automaticRenewal: "keine",
        reminder: "90 Tage vor Vertragsablauf",
      },

      cta: "Enterprise anfragen",
    },
  ],
};

export const serviceRates = {
  concierge: {
    apiIntegrationPerHour: 125,
    changesOutsideSetupPerHour: 125,
  },

  cognia: {
    apiIntegrationPerHour: 125,
    changesOutsideSetupPerHour: 125,
  },
};

export function getProductPricing(product) {
  return pricing[product] || [];
}

export function getPricingTier(product, tierId) {
  return getProductPricing(product).find(
    (tier) => tier.id === tierId
  );
}