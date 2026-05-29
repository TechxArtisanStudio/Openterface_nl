import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * KeyMod marketing payload — Phase 1E flat landing at /keymod/.
 * Sourced from docs/products/keymod/ (index, features, use-cases).
 */
export const keymodProduct: Product = {
  slug: 'keymod',
  title: "Openterface KeyMod-serie",
  slogan: "Maak van je telefoon een slim toetsenbord",
  subtitle: "Programmeerbare toetsenbord- en muismogelijkheden voor tech, professionals en gaming.",
  status: 'pre-launch',
  description:
    "Een compacte, programmeerbare USB + Bluetooth HID-emulator die je telefoon omtovert tot een draagbaar toetsenbord- en trackpadconsole. Gebouwd op de bewezen HID-kern van Openterface Mini-KVM — plug & play, 100% open source.",
  seoDescription:
    "De KeyMod-serie maakt van je telefoon een draagbaar toetsenbord en trackpad. USB + Bluetooth HID-emulator, open source, perfect voor kiosken en workflow-snelkoppelingen.",
  keywords:
    "KeyMod, HID-emulator, telefoontoetsenbord, Bluetooth-toetsenbord, USB-toetsenbord, open source",
  heroImage: 'https://assets2.openterface.com/images/keymod/2in1.webp',
  heroImages: [
    'https://assets2.openterface.com/images/keymod/2in1.webp',
    'https://assets2.openterface.com/images/keymod/keymod.webp',
    'https://assets2.openterface.com/images/keymod/feature.webp',
  ],
  buyLabel: "Ondersteun NU",
  buyHref: siteConfig.links.keymodCrowdsupply,
  painPoints: [
    "Het meenemen van een volledig toetsenbord voor kiosk- of tv-installaties is onpraktisch",
    "Workflow-snelkoppelingen vereisen programmeerbare macro's onderweg",
    "Veel HID-tools zijn closed-source met beperkte aanpassingsmogelijkheden",
  ],
  solutions: [
    "Gebruik je telefoon als draagbaar toetsenbord en trackpad",
    "USB en Bluetooth HID in één compact apparaat",
    "100% open source met ondersteuning voor de Openterface-app",
  ],
  hwFeatures: [
    { title: "Compacte vormfactor", description: "Past in je zak voor werk op locatie en reizen." },
    { title: "USB + Bluetooth", description: "Dubbele connectiviteit voor maximale apparaatcompatibiliteit." },
    { title: "Open hardware", description: "Transparant ontwerp gebouwd op de bewezen Openterface HID-kern." },
  ],
  swFeatures: [
    { title: "KeyMod-app", description: "Configureer macro's, layouts en gamepadprofielen vanaf je telefoon." },
    { title: "Platformonafhankelijk", description: "Werkt met Android, iPadOS en desktophosts via Openterface-apps." },
    { title: "Open source", description: "Volledige stack beschikbaar op GitHub voor community-bijdragen." },
  ],
  specs: [
    { label: "Connectiviteit", value: "USB-C + Bluetooth LE" },
    { label: "HID-modi", value: "Toetsenbord, muis, gamepad" },
    { label: "Licentie", value: "Open source hardware & software" },
  ],
  useCases: [
    "Smart-tv- en kiosk-invoer",
    "Mobiele workflow-macro's",
    "Gaming- en toegankelijkheidsopstellingen",
  ],
  useCaseCards: [
    {
      title: 'Outdoor display computers',
      description: 'Configure and troubleshoot outdoor PCs without carrying a keyboard.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'LED signage players',
      description: 'On-site updates to signage controllers — phone as full keyboard.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Kiosks',
      description: 'Debug, configure, or maintain kiosks with immediate HID access.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Smart TVs & set-top boxes',
      description: 'Full keyboard and trackpad when the remote is not enough.',
    },
    {
      title: 'Quick workflow shortcuts',
      description: 'Developers and IT staff — occasional input without extra gear.',
      href: docsPath('/keymod/use-cases/'),
    },
    {
      title: 'Portable & plug-and-play',
      description: 'Your phone is always with you; KeyMod stays compact in your bag.',
    },
  ],
  useCasesDocsHref: docsPath('/keymod/use-cases/'),
  specsDocsHref: docsPath('/keymod/features/'),
  docsOverviewHref: docsPath('/keymod/'),
  videoProductSlug: 'keymod',
  videoSectionTitle: 'Community reviews & demos',
  latestNewsHref: 'https://news.openterface.com/',
  latestNewsTitle: 'Latest KeyMod updates',
  latestNewsSubtitle: 'Beta releases, app updates, and pre-launch news.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "Functies", href: docsPath("/product/keymod/features/") },
    { label: "Inhoud van de verpakking", href: docsPath("/product/keymod/whats-in-the-box/") },
    { label: "Verbindingsinstructies", href: docsPath("/product/keymod/how-to-connect/") },
    { label: "Veelgestelde vragen", href: docsPath("/product/keymod/faq/") },
    { label: "Download de KeyMod-app", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/keymod/",
};
