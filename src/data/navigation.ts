import { docsPath, newsPath, siteConfig } from '../config/site';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: 'Producten',
    href: '#',
    children: [
      { label: 'KeyMod Series', href: '/products/keymod/' },
      { label: 'KVM-GO Series', href: '/products/kvm-go/' },
      { label: 'Mini-KVM', href: '/products/minikvm/' },
      { label: 'uConsole KVM Extension', href: '/products/uconsole-kvm-extension/' },
      { label: 'Accessoires', href: '/products/accessories/' },
    ],
  },
  { label: "Video's", href: '/videos/' },
  { label: 'Use cases', href: '/use-cases/' },
  { label: 'Over ons', href: '/about/' },
  { label: 'Documentatie', href: docsPath(), external: true },
  { label: 'Nieuws', href: newsPath(), external: true },
  { label: 'Shop', href: siteConfig.links.shop, external: true },
];
