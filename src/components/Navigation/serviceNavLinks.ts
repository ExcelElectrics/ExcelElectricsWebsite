/** Shared service catalogue for nav, homepage, /services index and area pages. */

export type ServiceNavItem = {
  label: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  blurb: string;
};

export const SERVICE_NAV_LINKS = [
  {
    label: "Electrical work",
    href: "/services/electrical-work",
    imageSrc: "/ExcelElectrics/photos/electrical-loft-cable-run.webp",
    imageAlt: "Domestic electrical work in a home",
    blurb: "Fault finding, sockets, lighting, consumer units, EICRs and rewires.",
  },
  {
    label: "Fire safety",
    href: "/services/fire-safety",
    imageSrc: "/ExcelElectrics/services/fire/fire-hero.webp",
    imageAlt: "Home fire safety and smoke alarm installation",
    blurb: "Smoke alarms, heat detectors and linked home fire alarm systems.",
  },
  {
    label: "Access & security",
    href: "/services/access-security",
    imageSrc: "/ExcelElectrics/photos/access-video-entry-monitor.webp",
    imageAlt: "Home access control and door entry systems",
    blurb: "Intercoms, keypads, fobs and access control for homes and flats.",
  },
  {
    label: "Gates, garage doors & bollards",
    href: "/services/gates-garage-bollards",
    imageSrc: "/ExcelElectrics/photos/gates-engineer-at-gate-pier.webp",
    imageAlt: "Electric gates and automated garage doors",
    blurb: "Electric gates, garage doors and rising bollards, new or repaired.",
  },
  {
    label: "EV charging",
    href: "/services/ev-charging",
    imageSrc: "/ExcelElectrics/services/ev/ev-hero.webp",
    imageAlt: "Home EV charger installation",
    blurb: "Home EV charger installs, repairs, upgrades and load advice.",
  },
] as const satisfies readonly ServiceNavItem[];

/** "Why us" dropdown: about pages, including the link across to Excel Fire. */
export const ABOUT_NAV_LINKS: ServiceNavItem[] = [
  {
    label: "Why choose us",
    href: "/why-us",
    imageSrc: "/ExcelElectrics/photos/why-us-levelling-back-box.webp",
    imageAlt: "Excel Electrics engineer levelling a back box",
    blurb: "Who we are, how we work and the people who turn up.",
  },
  {
    label: "Excel Fire",
    href: "/excel-fire",
    imageSrc: "/ExcelElectrics/photos/projects/emirates/emirates-stadium.webp",
    imageAlt: "The Emirates Stadium, an Excel Fire project",
    blurb: "Our fire safety side: fire doors, fire stopping and inspections.",
  },
];
