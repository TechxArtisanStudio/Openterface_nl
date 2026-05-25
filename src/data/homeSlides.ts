import { siteConfig } from '../config/site';

export interface HomeSlide {
  id: number;
  category: string;
  headline: string;
  description: string;
  image: string;
  imageAlt: string;
  images?: string[];
  primaryCta?: {
    label: string;
    href: string;
    external?: boolean;
    analyticsEvent?: string;
    analyticsProduct?: string;
  };
  secondaryCta?: { label: string; href: string; external?: boolean };
  funding?: { amount: string; date: string; backers: string };
  progressSmall: string;
  progressLarge: string;
}

export const homeSlides: HomeSlide[] = [
  {
    id: 1,
    category: 'KeyMod Series',
    headline: 'Maak van je smartphone een mini-toetsenbord',
    description:
      'Een compacte USB + Bluetooth HID-emulator die je smartphone omzet in een draagbaar toetsenbord en trackpad. Plug-and-play, 100% open source. Ideaal voor kiosken, Smart TV en snelle workflow-shortcuts.',
    image: 'https://assets2.openterface.com/images/keymod/2in1.webp',
    imageAlt: 'Openterface KeyMod Series',
    images: [
      'https://assets2.openterface.com/images/keymod/2in1.webp',
      'https://assets2.openterface.com/images/keymod/keymod.webp',
      'https://assets2.openterface.com/images/keymod/feature.webp',
    ],
    primaryCta: { label: 'Steun nu', href: siteConfig.links.keymodCrowdsupply, external: true, analyticsEvent: 'crowdsupply_click', analyticsProduct: 'keymod' },
    secondaryCta: { label: 'Bekijk product', href: '/products/keymod/' },
    progressSmall: 'KeyMod Series',
    progressLarge: 'Smartphone als mini-toetsenbord',
  },
  {
    id: 2,
    category: 'KVM-GO Series',
    headline: 'De ultracompacte KVM voor aan je sleutelhanger',
    description:
      'Ontworpen om altijd bij je te zijn en je te redden op cruciale momenten. KVM-over-USB van de volgende generatie voor snelle IT-interventies ter plaatse.',
    image: 'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
    imageAlt: 'KVM-GO Series',
    images: [
      'https://assets.openterface.com/images/cover/kvm-go-triple.webp',
      'https://assets.openterface.com/images/cover/kvm-go-triple-2.webp',
    ],
    primaryCta: { label: 'Pre-order', href: siteConfig.links.kvmgoPurchase, external: true, analyticsEvent: 'crowdsupply_click', analyticsProduct: 'kvm-go' },
    secondaryCta: { label: 'Bekijk product', href: '/products/kvm-go/' },
    funding: { amount: '$101,548', date: 'Funded on Dec 30, 2025', backers: '478' },
    progressSmall: 'KVM-GO Series',
    progressLarge: 'KVM aan je sleutelhanger',
  },
  {
    id: 3,
    category: 'Mini-KVM Series',
    headline: 'De compacte KVM-oplossing voor professionals',
    description:
      'Een compacte, feature-rijke open-source KVM-over-USB-oplossing die je IT-werk bij dagelijkse taken en troubleshooting vereenvoudigt.',
    image: 'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
    imageAlt: 'Openterface Mini-KVM',
    images: [
      'https://assets.openterface.com/images/cover/mini-kvm-toolkit.webp',
      'https://assets.openterface.com/images/cover/mini-kvm.webp',
    ],
    primaryCta: { label: 'Bestel nu', href: siteConfig.links.minikvmPurchase, external: true, analyticsEvent: 'crowdsupply_click', analyticsProduct: 'minikvm' },
    secondaryCta: { label: 'Bekijk product', href: '/products/minikvm/' },
    funding: { amount: '$505,471', date: 'Funded on Jun 13, 2024', backers: '3,775' },
    progressSmall: 'Mini-KVM Series',
    progressLarge: 'KVM voor professionals',
  },
  {
    id: 4,
    category: 'TxA Shop',
    headline: 'Maak je setup compleet met premium accessoires',
    description:
      'Essentiële accessoires: video-adapters, snelle kabels en opslagoplossingen. Verbeter je Openterface-ervaring met professionele gear.',
    image: 'https://assets.openterface.com/images/cover.webp',
    imageAlt: 'TxA Shop Accessories',
    primaryCta: { label: 'Shop nu', href: siteConfig.links.shop, external: true, analyticsEvent: 'shop_click', analyticsProduct: 'accessories' },
    secondaryCta: { label: 'Accessoires', href: '/products/accessories/' },
    progressSmall: 'TxA Shop',
    progressLarge: 'Premium accessoires',
  },
];

export const homeSeo = {
  title: 'Openterface | Ultracompacte KVM-oplossingen voor IT-professionals',
  description:
    'Openterface — ultracompacte KVM-over-USB-oplossingen: KVM-GO Series (sleutelhangerformaat), Mini-KVM Series en uConsole KVM Extension.',
  keywords:
    'KVM-over-USB, KVM switch, portable KVM, USB KVM, headless server management, KVM-GO, Mini-KVM, KeyMod',
};
