import { docsPath, siteConfig } from '../../config/site';
import type { Product } from '../products';

const KVMEXT_SHOP =
  'https://shop.techxartisan.com/products/openterface-kvm-ext-for-uconsole';

/**
 * KVM Extension (uConsole) marketing payload — Phase 1F flat landing at /kvmext/.
 * Sourced from docs/products/kvmext/ (index, features).
 */
export const kvmextProduct: Product = {
  slug: 'uconsole-kvm-extension',
  title: "uConsole KVM-uitbreiding",
  slogan: "KVM-kracht voor je uConsole",
  subtitle: "Maak van de draagbare uConsole een volwaardige KVM-terminal.",
  status: 'oshwa',
  description:
    "Een hardware-uitbreiding die KVM-over-USB-mogelijkheden toevoegt aan de Clockwork uConsole. Perfect voor draagbaar IT-werk met ingebouwd toetsenbord en beeldscherm.",
  seoDescription:
    "De uConsole KVM-uitbreiding voegt KVM-over-USB toe aan de draagbare Clockwork uConsole-computer.",
  keywords:
    "uConsole, KVM-uitbreiding, draagbare KVM, Clockwork uConsole",
  heroImage:
    'https://assets.openterface.com/images/uconsole-kvm-extension/uconsole-kvm-extension-1.webp',
  heroImages: [
    'https://assets.openterface.com/images/uconsole-kvm-extension/uconsole-kvm-extension-1.webp',
    'https://assets.openterface.com/images/product/openterface-kvm-uconsole-extension.webp',
  ],
  buyLabel: "Meer informatie",
  buyHref: KVMEXT_SHOP,
  painPoints: [
    "Draagbare consoles missen geïntegreerde KVM voor headless doelen",
    "Technici op locatie willen één apparaat voor alles",
  ],
  solutions: [
    "Uitbreidingskaart in native uConsole-vormfactor",
    "Volledige Openterface KVM-stack op een zakformaat apparaat",
  ],
  hwFeatures: [
    { title: "Native voor uConsole", description: "Speciaal ontworpen voor de Clockwork uConsole." },
    { title: "Compacte printplaat", description: "Wordt geïnstalleerd in de uConsole-behuizing." },
  ],
  swFeatures: [
    { title: "Openterface-apps", description: "Dezelfde betrouwbare software als Mini-KVM en KVM-GO." },
    { title: "Installatiegidsen", description: "Stapsgewijze documentatie voor hardware- en software-installatie." },
  ],
  specs: [
    { label: "Compatibiliteit", value: "Clockwork uConsole" },
    { label: "Certificering", value: "OSHWA-gecertificeerd" },
  ],
  useCases: [
    "Draagbaar datacenter-hulpmiddel",
    "Maker & homelab onderweg",
  ],
  useCaseCards: [
    {
      title: 'Portable datacenter tool',
      description: 'Walk racks with your uConsole — one device for display, keyboard, and KVM.',
      href: docsPath('/products/kvmext/'),
    },
    {
      title: 'Maker & homelab on the go',
      description: 'Configure headless SBCs, NAS nodes, and lab gear from a pocketable console.',
      href: docsPath('/products/kvmext/features/'),
    },
    {
      title: 'Field IT & MSP visits',
      description: 'BIOS access and quick fixes without hauling a crash cart.',
    },
    {
      title: 'Network-free troubleshooting',
      description: 'When the target has no IP — HDMI + HID still works.',
      href: docsPath('/products/kvmext/connect-to-target/'),
    },
  ],
  useCasesDocsHref: docsPath('/products/kvmext/'),
  specsDocsHref: docsPath('/products/kvmext/features/'),
  docsOverviewHref: docsPath('/products/kvmext/'),
  videoProductSlug: 'uconsole-kvm-extension',
  videoSectionTitle: 'Installation & community demos',
  latestNewsHref: `${siteConfig.links.news}/products/kvmext/2025-08-28-oshwa-certification/`,
  latestNewsTitle: 'OSHWA certification achieved',
  latestNewsSubtitle: 'Official Open Source Hardware Association certification for the uConsole KVM Extension.',
  latestNewsLabel: 'Read on Openterface News →',
  docLinks: [
    { label: "Hardware-installatie", href: docsPath("/product/uconsole-kvm-extension/hardware-installation/") },
    { label: "Software-installatie", href: docsPath("/product/uconsole-kvm-extension/software-setup/") },
    { label: "Verbindingsinstructies", href: docsPath("/product/uconsole-kvm-extension/connect-to-target/") },
    { label: "Veelgestelde vragen", href: docsPath("/product/uconsole-kvm-extension/faq/") },
  ],
  legacyBase: "/products/uconsole-kvm-extension/",
};
