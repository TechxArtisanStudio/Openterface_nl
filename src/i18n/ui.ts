export interface MarketingUi {
  docLinkBanner: {
    aboutMessage: string;
    homeMessage: string;
    productMessage: string;
    linkLabel: string;
  };
  homeSubscribe: {
    kicker: string;
    heading: string;
    description: string;
    benefitCrowdfunding: string;
    benefitGuides: string;
    benefitUnsubscribe: string;
    submitLabel: string;
    namePlaceholder: string;
    emailPlaceholder: string;
    footnote: string;
  };
  siteFooter: {
    tagline: string;
    productsHeading: string;
    keymodSeries: string;
    kvmGoSeries: string;
    miniKvm: string;
    accessories: string;
    resourcesHeading: string;
    videos: string;
    faqs: string;
    apps: string;
    support: string;
    newsletterTitle: string;
    newsletterDescription: string;
    newsletterSubmit: string;
    newsletterNamePlaceholder: string;
    newsletterEmailPlaceholder: string;
    newsletterFootnote: string;
    copyright: string;
    privacy: string;
    terms: string;
  };
  productLanding: {
    downloadApp: string;
    backers: string;
    theProblem: string;
    theSolution: string;
    hwSoftwareTitle: string;
    hwSoftwareSubtitle: string;
    hardware: string;
    software: string;
    swFallback: string;
    keySpecs: string;
    useCases: string;
    documentation: string;
    ctaTitle: string;
    ctaSubtitle: string;
  };
}

export const ui: MarketingUi = {
  "docLinkBanner": {
    "aboutMessage": "Productgidsen, FAQ’s, tutorials en app-downloads staan op docs.openterface.com.",
    "homeMessage": "Tutorials, FAQ’s, app-downloads en productgidsen staan op docs.openterface.com.",
    "linkLabel": "Documentatie openen ↗",
    "productMessage": "Gedetailleerde specs, setupgidsen en FAQ’s staan op docs.openterface.com."
  },
  "homeSubscribe": {
    "kicker": "Blijf op de hoogte",
    "heading": "Ontvang als eerste KVM-GO-, KeyMod- & Mini-KVM-updates",
    "description": "Productlanceringen, firmware en praktische IT-tips — maximaal één keer per maand. Geen spam, alleen nuttig nieuws van het Openterface-team.",
    "benefitCrowdfunding": "Vroege toegang tot crowdfunding en pre-orderperiodes",
    "benefitGuides": "Setupgidsen en app-releasenotes",
    "benefitUnsubscribe": "Op elk moment uitschrijven met één klik",
    "submitLabel": "Updates abonneren",
    "namePlaceholder": "Naam (optioneel)",
    "emailPlaceholder": "E-mailadres *",
    "footnote": "Maximaal één e-mail per maand. Op elk moment uitschrijven. Vragen: info@openterface.com"
  },
  "siteFooter": {
    "tagline": "Ultracompacte KVM-over-USB-oplossingen voor IT-professionals.",
    "productsHeading": "Producten",
    "keymodSeries": "KeyMod-serie",
    "kvmGoSeries": "KVM-GO-serie",
    "miniKvm": "Mini-KVM",
    "accessories": "Accessoires",
    "resourcesHeading": "Bronnen",
    "videos": "Video's",
    "faqs": "FAQ",
    "apps": "Apps",
    "support": "Support",
    "newsletterTitle": "Nieuwsbrief",
    "newsletterDescription": "Maandelijkse updates over producten, firmware en KVM-tips.",
    "newsletterSubmit": "Abonneren",
    "newsletterNamePlaceholder": "Naam",
    "newsletterEmailPlaceholder": "E-mail *",
    "newsletterFootnote": "Op elk moment uitschrijven.",
    "copyright": "Openterface. Open-source KVM-over-USB.",
    "privacy": "Privacy",
    "terms": "Voorwaarden",
    "newsletterLink": "Newsletter"
  },
  "productLanding": {
    "downloadApp": "App downloaden",
    "backers": "Backers",
    "theProblem": "Het probleem",
    "theSolution": "De oplossing",
    "hwSoftwareTitle": "Hardware + software",
    "hwSoftwareSubtitle": "Openterface-producten werken het best met onze open-source host-apps.",
    "hardware": "Hardware",
    "software": "Software",
    "swFallback": "Zie TxA Shop voor details over compatibiliteit van accessoires.",
    "keySpecs": "Belangrijkste specs",
    "useCases": "Use-cases",
    "documentation": "Documentatie",
    "ctaTitle": "Klaar om te beginnen?",
    "ctaSubtitle": "Bestel hardware en download de Openterface-app voor jouw platform."
  },
  "productSubscribe": {
    "kicker": "Stay in the loop",
    "heading": "Get {product} launch & firmware updates",
    "description": "Be first to know about pre-orders, firmware releases, and setup tips for this product — at most one email per month.",
    "benefitCrowdfunding": "Early access to crowdfunding and pre-order windows",
    "benefitGuides": "Setup guides and app release notes",
    "benefitUnsubscribe": "Unsubscribe anytime with one click",
    "submitLabel": "Subscribe for updates",
    "namePlaceholder": "Name (optional)",
    "emailPlaceholder": "Email address *",
    "footnote": "At most one email per month. Unsubscribe anytime."
  }
};
