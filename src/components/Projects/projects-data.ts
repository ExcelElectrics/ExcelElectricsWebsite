/**
 * Project write-ups for /projects. Copy is taken from Excel Electrics' own case study
 * documents (lightly adapted for the web) — keep it in sync with those PDFs.
 */

export type ProjectImage = {
  src: string;
  alt: string;
  caption?: string;
};

export type ProjectStat = {
  value: string;
  label: string;
};

export type ProjectStep = {
  title: string;
  body: string;
};

export type ProjectBeforeAfter = {
  caption: string;
  before: ProjectImage;
  after: ProjectImage;
};

export type ProjectData = {
  slug: string;
  /** Short name used on cards and breadcrumbs. */
  name: string;
  /** Service line shown as the hero eyebrow / card tag. */
  category: string;
  /** "Residential", "Commercial" etc. — shown as a small tag. */
  sector: string;
  location: string;
  year: string;
  title: string;
  summary: string;
  metaTitle: string;
  metaDescription: string;
  heroImage: ProjectImage;
  cardImage: ProjectImage;
  facts: { label: string; value: string }[];
  overview: string[];
  stats: ProjectStat[];
  highlight?: { heading: string; body: string[] };
  steps: ProjectStep[];
  gallery: ProjectImage[];
  beforeAfter?: ProjectBeforeAfter[];
  /** Related service landing page. */
  service: { label: string; href: string };
  /** Gated PDF download (served from /public/case-studies). */
  pdf?: { href: string; filename: string };
};

const P = "/ExcelElectrics/photos";

export const projects: ProjectData[] = [
  {
    slug: "st-marylebone-almshouses",
    name: "St Marylebone Almshouses",
    category: "Access control & electric gates",
    sector: "Residential",
    location: "St John's Wood, London NW8",
    year: "2026",
    title: "Secure, modern access for a St John's Wood almshouse founded in 1836",
    summary:
      "Paxton Net2 access control, new electric gates and security systems for St Marylebone Almshouses, delivered by Excel Electrics for Woodnut Construction.",
    metaTitle: "St Marylebone Almshouses: Access Control & Electric Gates",
    metaDescription:
      "Paxton Net2 access control, Cat5e cabling, video door entry and new electric gates for St Marylebone Almshouses in St John's Wood, delivered by Excel Electrics.",
    heroImage: {
      src: `${P}/projects/almshouses/entrance-gates.webp`,
      alt: "Entrance gates at St Marylebone Almshouses, 80 St John's Wood Terrace",
    },
    cardImage: {
      src: `${P}/access-video-entry-monitor.webp`,
      alt: "Excel Electrics engineer fitting a video door entry monitor in a resident's home",
    },
    facts: [
      { label: "Client", value: "Woodnut Construction & St Marylebone Almshouses" },
      { label: "Delivered by", value: "Excel Electrics" },
      { label: "Works", value: "Access control, electric gates & security systems" },
      { label: "Delivered", value: "2026 · St John's Wood Terrace, NW8" },
    ],
    overview: [
      "Excel Electrics secured the access control, electric gates and security systems package for St Marylebone Almshouses in St John's Wood, working for Woodnut Construction and the almshouse charity. The brief was simple: give residents and staff secure, easy access without disturbing a quiet, well-kept community.",
      "Our engineers ran new Cat5e cabling through the loft spaces, dropped containment down the external walls from a scissor lift, and installed Paxton Net2 control units linked to the main pedestrian and vehicle gates. The entrance was completed with new electronically controlled electric gates, commissioned and handed over ready for everyday use.",
    ],
    stats: [
      { value: "Net2", label: "Paxton access control" },
      { value: "Cat5e", label: "New cabling through the lofts" },
      { value: "2", label: "Gates automated: pedestrian & vehicle" },
    ],
    highlight: {
      heading: "1836: almshouses, a tradition of care",
      body: [
        "Almshouses are among Britain's oldest forms of charitable housing, founded by parishes, guilds and benefactors to house the elderly and those in need, and still home to tens of thousands of residents today.",
        "St Marylebone Almshouses was founded in 1836 with a £500 bequest from Count Simon Woronzow, the former Russian ambassador who retired to St John's Wood. Its first residents arrived in 1837; the original building was replaced in 1965 by today's neo-Georgian home at 80 St John's Wood Terrace. Nearly two centuries on, our work helps keep that community secure.",
      ],
    },
    steps: [
      {
        title: "Cabling",
        body: "New Cat5e cabling was run through the loft spaces, keeping the network out of sight and avoiding disruption to residents' homes and the communal areas below.",
      },
      {
        title: "Containment",
        body: "Drop-down containment was fixed to the external walls from a scissor lift, carrying the cabling neatly from the lofts to the gate and door positions at ground level.",
      },
      {
        title: "Access control",
        body: "Paxton Net2 control units were installed and linked to the main pedestrian and vehicle gates, with readers and entry panels at the points residents and visitors use every day.",
      },
      {
        title: "Electric gates",
        body: "New electronically controlled electric gates were installed at the entrance, tied into the Net2 system, then commissioned and handed over with the security systems ready for use.",
      },
    ],
    gallery: [
      { src: `${P}/projects/almshouses/net2-control-unit.webp`, alt: "Engineer terminating a Paxton Net2 control unit", caption: "Paxton Net2 control unit" },
      { src: `${P}/projects/almshouses/pulling-cable-to-gates.webp`, alt: "Engineer pulling new cable through to the gate positions", caption: "Cabling to the gate positions" },
      { src: `${P}/projects/almshouses/labelling-cables.webp`, alt: "Engineer labelling new cables before termination", caption: "Every cable labelled" },
      { src: `${P}/projects/almshouses/exit-button.webp`, alt: "Fitting a press-to-exit button on a brick gate pier", caption: "Press-to-exit at the gate" },
      { src: `${P}/projects/almshouses/gate-reader.webp`, alt: "Fitting an access reader beside the pedestrian gate", caption: "Reader at the gate position" },
      { src: `${P}/projects/almshouses/cable-to-handset.webp`, alt: "Running new cable to a resident's door entry handset", caption: "New cable to each flat" },
      { src: `${P}/projects/almshouses/levelling-monitor-backplate.webp`, alt: "Levelling the backplate for a new video entry monitor", caption: "Levelled and fixed" },
      { src: `${P}/projects/almshouses/fitting-video-monitor.webp`, alt: "Fitting a new video door entry monitor in a resident's home", caption: "Video entry monitor in a resident's home" },
    ],
    service: { label: "Access & security", href: "/services/access-security" },
    pdf: {
      href: "/case-studies/excel-electrics-st-marylebone-almshouses-case-study.pdf",
      filename: "Excel Electrics - St Marylebone Almshouses case study.pdf",
    },
  },
  {
    slug: "bp-forecourt-ipswich",
    name: "BP forecourt, Ipswich",
    category: "Fault finding & repair",
    sector: "Commercial",
    location: "Ipswich, Suffolk",
    year: "2026",
    title: "Lights back on, pumps back in business: fast fault finding at a BP forecourt",
    summary:
      "Investigation, repair, test and commission of a forecourt lighting fault at a BP fuel station in Ipswich, delivered swiftly to keep the pumps and shop trading.",
    metaTitle: "BP Forecourt Ipswich: Lighting Fault Finding & Repair",
    metaDescription:
      "Excel Electrics traced and repaired a forecourt canopy lighting fault at a BP fuel station in Ipswich by scissor lift, keeping the pumps and shop trading.",
    heroImage: {
      src: `${P}/projects/bp-ipswich/forecourt-canopy-scissor-lift.webp`,
      alt: "Excel Electrics engineer on a scissor lift at a BP forecourt canopy in Ipswich",
    },
    cardImage: {
      src: `${P}/projects/bp-ipswich/forecourt-canopy-scissor-lift.webp`,
      alt: "Excel Electrics engineer on a scissor lift at a BP forecourt canopy in Ipswich",
    },
    facts: [
      { label: "Client", value: "BP garage franchise (direct)" },
      { label: "Delivered by", value: "Excel Electrics" },
      { label: "Works", value: "Electrical fault investigation, repair, test & commission" },
      { label: "Delivered", value: "2026 · BP forecourt, Ipswich" },
    ],
    overview: [
      "Excel Electrics was called in directly by a BP garage franchise in Ipswich when the forecourt canopy lights stopped working. On a fuel station, lighting isn't just a convenience: without it the pumps and shop can't trade safely after dark, so every hour counts.",
      "Our engineers attended promptly, accessed the canopy roof by scissor lift and traced the fault through the forecourt lighting circuits. Once identified, the fault was rectified, the installation tested and the lighting commissioned back into service, all carried out as swiftly as possible to keep operational losses to a minimum for the pumps and shop.",
    ],
    stats: [
      { value: "Find", label: "Fault traced on the canopy circuits" },
      { value: "Fix", label: "Rectified by scissor lift access" },
      { value: "Test", label: "Tested & commissioned back live" },
    ],
    highlight: {
      heading: "Every hour counts",
      body: [
        "A forecourt without canopy lighting can't trade safely once the light goes. For a franchise, that's lost fuel sales, lost shop sales and customers heading elsewhere for every hour the lights stay off. Our job was to find the fault and fix it properly, but to do it fast, with the site open around us.",
      ],
    },
    steps: [
      {
        title: "Rapid response",
        body: "The franchise came to us directly with a forecourt in the dark. We prioritised the call and had an engineer on site quickly, with a scissor lift arranged for canopy access.",
      },
      {
        title: "Investigate",
        body: "Working from the lift, our engineer traced the lighting circuits across the canopy and isolated the cause of the failure, rather than guessing at a quick fix.",
      },
      {
        title: "Rectify",
        body: "The fault was repaired at source, with the forecourt kept trading around the work area so the pumps and shop could carry on serving customers.",
      },
      {
        title: "Test & commission",
        body: "The repaired circuits were tested and the forecourt lighting commissioned back into service, leaving the site fully lit and safe to trade after dark.",
      },
    ],
    gallery: [],
    service: { label: "Electrical work", href: "/services/electrical-work" },
    pdf: {
      href: "/case-studies/excel-electrics-bp-forecourt-ipswich-case-study.pdf",
      filename: "Excel Electrics - BP forecourt Ipswich case study.pdf",
    },
  },
  {
    slug: "emirates-stadium",
    name: "Emirates Stadium",
    category: "Fire door alarm interlinking",
    sector: "Commercial",
    location: "Holloway, London N5",
    year: "2025 – 2026",
    title: "Alarm-interlinked fire doorsets at the home of Arsenal FC",
    summary:
      "A multi-phase fire door replacement programme at the Emirates Stadium for CBRE, with every electronic device interlinked to the fire alarm by Excel Electrics.",
    metaTitle: "Emirates Stadium: Fire Door Alarm Interlinking",
    metaDescription:
      "Excel Electrics installed maglocks, hold-open devices and strike plates on new fire doorsets at the Emirates Stadium and interlinked every device with the fire alarm.",
    heroImage: {
      src: `${P}/projects/emirates/emirates-stadium.webp`,
      alt: "The Emirates Stadium, home of Arsenal FC, in Holloway, London",
    },
    cardImage: {
      src: `${P}/projects/emirates/emirates-stadium.webp`,
      alt: "The Emirates Stadium, home of Arsenal FC, in Holloway, London",
    },
    facts: [
      { label: "Client", value: "CBRE & Emirates Stadium" },
      { label: "Delivered by", value: "Excel Fire Ltd with Excel Electrics" },
      { label: "Works", value: "Fire doorsets with maglocks, hold-opens & alarm interlink" },
      { label: "Delivered", value: "2025 – 2026 · Emirates Stadium, N5" },
    ],
    overview: [
      "Excel Fire Ltd was appointed to the fire door replacement programme at the Emirates Stadium, the home of Arsenal FC, delivered over multiple phases for CBRE and the stadium. Every doorset in scope was surveyed first, and the replacement scope built in line with the stadium's fire strategy.",
      "The existing doorsets were replaced with Metador certified metal fire doorsets. Working alongside the fire door teams, Excel Electrics installed and commissioned the electronic devices (maglocks, hold-open devices and strike plates) and interlinked every one with the stadium's fire alarm system, so each door releases and closes exactly as the fire strategy requires.",
    ],
    stats: [
      { value: "Multi", label: "Phase replacement programme" },
      { value: "100%", label: "Devices alarm-interlinked" },
      { value: "60,000+", label: "Seat stadium in continuous use" },
    ],
    steps: [
      {
        title: "Survey & scope",
        body: "Every doorset in scope was surveyed for measurements and specification, and the replacement scope built in line with the stadium's fire strategy before anything was ordered.",
      },
      {
        title: "Phased delivery",
        body: "The programme was split into phases and sequenced around the stadium's match and event calendar, so replacement works never compromised a live operational day.",
      },
      {
        title: "Doorset installation",
        body: "Existing doorsets were replaced with Metador certified metal fire doorsets, with new closers, vision panels and ironmongery to specification.",
      },
      {
        title: "Alarm interlink",
        body: "Excel Electrics installed maglocks, hold-open devices and strike plates on the new doorsets and interlinked every device with the fire alarm system, then commissioned the lot.",
      },
    ],
    gallery: [],
    beforeAfter: [
      {
        caption: "Concourse exit E2: glazed double doorset",
        before: { src: `${P}/projects/emirates/doorset-1-before.webp`, alt: "Concourse exit E2 doorset before replacement" },
        after: { src: `${P}/projects/emirates/doorset-1-after.webp`, alt: "Concourse exit E2 with new certified metal fire doorset" },
      },
      {
        caption: "Back-of-house store: keypad access and overhead closers",
        before: { src: `${P}/projects/emirates/doorset-2-before.webp`, alt: "Back-of-house store doorset before replacement" },
        after: { src: `${P}/projects/emirates/doorset-2-after.webp`, alt: "Back-of-house store with new doorset, keypad access and closers" },
      },
      {
        caption: "External plant access: solid metal doorset",
        before: { src: `${P}/projects/emirates/doorset-3-before.webp`, alt: "External plant access doorset before replacement" },
        after: { src: `${P}/projects/emirates/doorset-3-after.webp`, alt: "External plant access with new solid metal fire doorset" },
      },
    ],
    service: { label: "Fire safety", href: "/services/fire-safety" },
  },
];

export function getProjectBySlug(slug: string): ProjectData | undefined {
  return projects.find((project) => project.slug === slug);
}
