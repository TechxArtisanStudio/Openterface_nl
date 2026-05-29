import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

/**
 * KVM-GO marketing payload — cloned from Mini-KVM template (Phase 1D).
 * Sourced from docs/products/kvmgo/ (index, features, reviews, use-cases).
 */
export const kvmgoProduct: Product = {
  slug: 'kvm-go',
  title: "Openterface KVM-GO-serie",
  slogan: "Ultra-compacte KVM die aan je sleutelhanger past",
  subtitle: "Voor kritieke tech-momenten — Aansluiten. Beheren. Onderweg.",
  status: 'pre-order',
  description:
    "De KVM-over-USB-oplossing van de volgende generatie met ingebouwde videoconnectoren (HDMI, DisplayPort of VGA). Ultra-compact, ter grootte van een sleutelhanger, en gebouwd voor snelle IT-operaties in datacenters en serverruimtes.",
  seoDescription:
    "Beheer headless computers met Openterface KVM-GO. Ingebouwde HDMI/DP/VGA, sleutelhangerformaat, 4K KVM-over-USB voor IT-professionals.",
  keywords:
    "KVM-GO, KVM over USB, ultra-compacte KVM, sleutelhanger-KVM, 4K KVM, headless beheer",
  heroImage: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
  heroImages: [
    'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
    'https://assets.openterface.com/images/cover/kvm-go-triple-2.webp',
  ],
  buyLabel: "Pre-order NU",
  buyHref: siteConfig.links.kvmgoPurchase,
  funding: { amount: "$101,548", date: "Gefinancierd op 30 december 2025", backers: "478" },
  painPoints: [
    "Traditionele KVM-apparatuur is omvangrijk en vereist aparte videokabels",
    "Noodtoegang tot servers op locatie vereist een zakformaat tool",
    "Headless probleemoplossing zonder netwerktoegang is traag",
  ],
  solutions: [
    "Ingebouwde videoconnectoren elimineren extra kabels",
    "Sleutelhangerformaat altijd binnen handbereik",
    "KVM-over-USB — geen netwerk of stuurprogramma's vereist op het doelapparaat",
  ],
  hwFeatures: [
    { title: "Ingebouwde video", description: "HDMI-, DisplayPort- of VGA-modellen — geen losse kabels." },
    { title: "Sleutelhangerformaat", description: "Kleinste KVM-over-USB in het Openterface-assortiment." },
    { title: "4K-ondersteuning", description: "Hoge-resolutie capture voor moderne beeldschermen." },
  ],
  swFeatures: [
    { title: "Openterface Qt-app", description: "Platformonafhankelijke hostbesturing voor Windows, macOS en Linux." },
    { title: "MicroSD-schakelaar", description: "Schakelbare opslag voor draagbare OS-images en tools." },
    { title: "Open source-stack", description: "Community-gedreven firmware en hostapplicaties." },
  ],
  specs: [
    { label: "Video", value: "HDMI / DP / VGA (afhankelijk van model)" },
    { label: "Resolutie", value: "Tot 4K" },
    { label: "Verbinding", value: "USB-C KVM-over-USB" },
  ],
  useCases: [
    "Datacenter-inspecties",
    "Headless apparaatconfiguratie",
    "IT op locatie en homelab-redding",
  ],
  useCaseCards: [
    {
      title: 'Data center & server rooms',
      description: 'Replace rolling crash carts with a keychain KVM that plugs straight in.',
      href: docsPath('/products/kvmgo/use-cases/'),
    },
    {
      title: 'EDC field toolkit',
      description: 'Always in your bag — built-in connector means one less cable to forget.',
      href: docsPath('/products/kvmgo/use-cases/'),
    },
    {
      title: 'Headless homelab rescue',
      description: 'Configure NAS, SBC, and lab nodes without a spare monitor.',
    },
    {
      title: 'Legacy VGA systems',
      description: 'VGA model targets older racks and industrial gear (in development).',
      href: docsPath('/products/kvmgo/features/'),
    },
    {
      title: 'BIOS & firmware access',
      description: 'Boot menus and recovery screens with no network dependency.',
      href: docsPath('/products/kvmgo/features/'),
    },
    {
      title: 'MicroSD OS installs',
      description: 'Switchable storage for imaging and portable recovery tools.',
      href: docsPath('/products/kvmgo/microsd-switch/'),
    },
  ],
  useCasesDocsHref: docsPath('/products/kvmgo/use-cases/'),
  specsDocsHref: docsPath('/products/kvmgo/features/'),
  docsOverviewHref: docsPath('/products/kvmgo/'),
  videoProductSlug: 'kvm-go',
  videoSectionTitle: 'Community reviews & demos',
  socialProofTitle: 'What press & early users say',
  socialProof: [
    {
      quote:
        'Small enough to fit on a keychain, Openterface KVM-GO is a tiny, open-source hardware KVM-over-USB gadget with HDMI, DisplayPort, or VGA connectors.',
      author: 'Jean-Luc Aufranc — CNX Software',
      href: 'https://www.cnx-software.com/2026/01/05/openterface-kvm-go-an-ultra-compact-kvm-over-usb-solution-with-hdmi-dp-or-vga-video-input/',
    },
    {
      quote:
        "Openterface's KVM-GO is a pocket-sized, open source tool for hardware-level access to headless computers.",
      author: 'Hackster News',
      href: 'https://www.hackster.io/news/a-kvm-that-fits-on-your-keychain-e2adb39f7a2b',
    },
    {
      quote:
        'Following the nearly half-million dollar crowdfunding success of the Mini-KVM, Openterface is back with the KVM-GO — a tiny KVM that reduces cable clutter.',
      author: 'Notebookcheck',
      href: 'https://www.notebookcheck.net/KVM-GO-Openterface-is-back-with-a-more-compact-and-refined-KVM.1196402.0.html',
    },
    {
      quote:
        'Keychain-friendly KVM-over-USB gadget comes in a smaller form factor but with upgraded 4K60-capable internals.',
      author: 'Hackster News',
      href: 'https://www.hackster.io/news/techxartisan-is-back-with-a-smaller-yet-more-powerful-openterface-the-openterface-kvm-go-26174b2d11c0',
    },
  ],
  latestNewsHref: 'https://news.openterface.com/',
  latestNewsTitle: 'Latest KVM-GO updates',
  latestNewsSubtitle: 'Production milestones, app releases, and community news.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "Functies", href: docsPath("/product/kvm-go/features/") },
    { label: "Snelle start (Beta)", href: docsPath("/product/kvm-go/beta-quick-start/") },
    { label: "Verbindingsinstructies", href: docsPath("/product/kvm-go/how-to-connect/") },
    { label: "Veelgestelde vragen", href: docsPath("/product/kvm-go/faq/") },
    { label: "Download de app", href: docsPath("/app/overview/") },
  ],
  legacyBase: "/products/kvm-go/",
};
