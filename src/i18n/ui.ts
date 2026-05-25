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
  }
};
