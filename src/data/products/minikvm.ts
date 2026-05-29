import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * Mini-KVM marketing payload — reference template for Phase 1D–1G.
 * Sourced from docs/products/minikvm/ (index, features, reviews).
 */
export const minikvmProduct: Product = {
  slug: 'minikvm',
  title: "Openterface Mini-KVM",
  slogan: "Maak van je laptop een KVM-console",
  subtitle: "Vereenvoudig je tech-leven.",
  status: 'shipping',
  description:
    "Een plug-and-play KVM-over-USB-oplossing. Bedien een nabijgelegen headless computer vanaf je laptop via USB en HDMI — geen extra randapparatuur of netwerk vereist.",
  seoDescription:
    "Openterface Mini-KVM: plug-and-play KVM-over-USB met HDMI. Bedien headless computers vanaf je laptop zonder netwerk.",
  keywords:
    "Mini-KVM, KVM over USB, headless beheer, HDMI KVM, plug-and-play KVM",
  heroImage: 'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
  heroImages: [
    'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
    'https://assets.openterface.com/images/cover/mini-kvm.webp',
  ],
  buyLabel: "Bestel NU",
  buyHref: siteConfig.links.minikvmPurchase,
  funding: { amount: "$505,471", date: "Gefinancierd op 13 juni 2024", backers: "3,775" },
  painPoints: [
    "Het sjouwen met een monitor en toetsenbord voor elke serverfix is onpraktisch",
    "Netwerk-KVM vereist configuratie en connectiviteit",
    "IT-professionals hebben dagelijks een betrouwbare zak-KVM nodig",
  ],
  solutions: [
    "Gebruik je bestaande laptop als KVM-console",
    "HDMI-capture + USB HID in één compact apparaat",
    "Bewezen door meer dan 5.000 communityleden sinds 2024",
  ],
  hwFeatures: [
    { title: "HDMI-capture", description: "Volledige video van doelapparaat naar je hostlaptop." },
    { title: "USB-schakelaar", description: "Schakel USB-apparaten tussen host en doelapparaat." },
    { title: "Uitbreidingspinnen", description: "Opties voor hardware-hacking en aangepaste integratie." },
  ],
  swFeatures: [
    { title: "Qt / macOS / Android-apps", description: "Native apps voor elk groot hostplatform." },
    { title: "Open source", description: "Volledig open hardware- en software-ecosysteem." },
    { title: "Actieve community", description: "Discord, GitHub en regelmatige firmware-updates." },
  ],
  specs: [
    { label: "Video-invoer", value: "HDMI" },
    { label: "USB", value: "USB-C met schakelbare poort" },
    { label: "Status", value: "Verzending — Crowd Supply" },
  ],
  useCases: [
    "Homelab-beheer",
    "Side-by-side besturing voor ontwikkelaarswerkstations",
    "IT-werkbank probleemoplossing",
  ],
  useCaseCards: [
    {
      title: 'Data center & server rooms',
      description: 'Replace rolling crash carts with the laptop you already carry.',
      href: docsPath('/minikvm/reviews/'),
    },
    {
      title: 'Homelab & SBC setup',
      description: 'Configure headless Raspberry Pi, NAS, and lab nodes from one laptop.',
    },
    {
      title: 'BIOS & firmware access',
      description: 'Reach boot menus and recovery screens with no network KVM required.',
      href: docsPath('/minikvm/features/'),
    },
    {
      title: 'Developer bench',
      description: 'Side-by-side host/target control without a second monitor.',
    },
    {
      title: 'Kiosk & embedded systems',
      description: 'Field configuration for displays, signage, and appliances.',
    },
    {
      title: 'MSP field toolkit',
      description: 'Quick headless access on customer sites — fast, offline-capable, pocket-sized.',
      href: docsPath('/minikvm/reviews/'),
    },
  ],
  useCasesDocsHref: docsPath('/minikvm/'),
  specsDocsHref: docsPath('/minikvm/features/'),
  docsOverviewHref: docsPath('/minikvm/'),
  videoProductSlug: 'minikvm',
  videoSectionTitle: 'Community reviews & demos',
  socialProofTitle: 'What reviewers & testers say',
  socialProof: [
    {
      quote:
        'Promises to be a low cost, feature packed way to use a laptop as a monitor, keyboard and mouse for accessing servers and other computers.',
      author: 'Cameron Gray — YouTube review',
      href: 'https://www.youtube.com/watch?v=xAEQpWyfY-c',
    },
    {
      quote:
        'A simple gadget concept that has a permanent home on my test bench, turning my laptop into my display, keyboard, and mouse.',
      author: "apalrd's adventures",
      href: 'https://www.youtube.com/watch?v=ZZ5P6MnBcHw',
    },
    {
      quote:
        'Plug-and-play and network-independent KVM-over-USB that establishes a direct HDMI and USB connection between host and target.',
      author: 'Jean-Luc Aufranc — CNX Software',
      href: 'https://www.cnx-software.com/2024/05/09/openterface-mini-kvm-affordable-kvm-over-usb-device/',
    },
    {
      quote:
        "In datacenters it's cool that this totally replaces a crash cart using the laptop you'd already have with you!",
      author: 'samw — tinytoolk.it',
      href: 'https://tinytoolk.it/tools/openterface-kvm/',
    },
    {
      quote:
        'Latency is definitely better than using VNC… Overall a very solid device, it has been a very worthy addition to my daily carry toolkit.',
      author: '65Diamond — r/msp',
      href: 'https://www.reddit.com/r/msp/comments/1j2dlde/comment/mju6uru/',
    },
    {
      quote:
        'An extremely useful tool… The hardware is more than solid and the toolbox also contains all the accessories you need.',
      author: 'Florian Bernd — beta tester',
      href: 'https://blog.flobernd.de/2024/06/openterface-beta-test/',
    },
  ],
  latestNewsHref: 'https://news.openterface.com/',
  latestNewsTitle: 'Latest Mini-KVM updates',
  latestNewsSubtitle: 'Firmware releases, app updates, and community news.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "Functies", href: docsPath("/product/minikvm/features/") },
    { label: "USB-schakelaar", href: docsPath("/product/minikvm/usb-switch/") },
    { label: "Technische ondersteuning", href: docsPath("/product/minikvm/support/") },
    { label: "Veelgestelde vragen", href: docsPath("/product/minikvm/faq/") },
    { label: "Download de app", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/minikvm/",
};
