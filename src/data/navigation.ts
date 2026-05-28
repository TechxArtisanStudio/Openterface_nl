import { docsPath, newsPath, siteConfig } from '../config/site';

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
  children?: NavItem[];
}

export const mainNav: NavItem[] = [
  {
    label: "Producten",
    href: '/products/',
    children: [
      { label: "Alle producten", href: '/products/' },
      { label: 'KeyMod Series', href: '/keymod/' },
      { label: 'KVM-GO Series', href: '/kvmgo/' },
      { label: 'Mini-KVM', href: '/minikvm/' },
      { label: 'uConsole KVM Extension', href: '/kvmext/' },
      { label: "Accessoires", href: '/accessories/' },
    ],
  },
  {
    label: "Apps",
    href: '/app/',
    children: [
      { label: "Alle apps", href: '/app/' },
      { label: "KVM-besturing", href: '/kvm/' },
      { label: 'KeyCmd', href: '/keycmd/' },
    ],
  },
  { label: "Media", href: '/videos/' },
  { label: "Over ons", href: '/about/' },
  { label: "Documentatie", href: docsPath(), external: true },
  { label: "Nieuws", href: newsPath(), external: true },
  { label: "Shop", href: siteConfig.links.shop, external: true },
];
