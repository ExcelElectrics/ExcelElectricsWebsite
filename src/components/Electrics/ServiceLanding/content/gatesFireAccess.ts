import type {
  ServiceFaqItem,
  ServiceFeatureBlock,
  ServiceOptionRow,
  ServiceProcessStep,
  ServiceTrustPoint,
} from "@/components/Electrics/ServiceLanding/serviceLandingShared";
import { SERVICE_AREAS_SHORT } from "@/components/Electrics/ServiceLanding/serviceLandingShared";

export const gatesLanding = {
  path: "/services/gates-garage-bollards",
  service: "garage-doors-electric-gates" as const,
  meta: {
    title: "Electric Gates, Garage Doors & Bollards",
    description:
      "Electric gates, automatic garage doors and rising bollards across Essex, Hertfordshire, Suffolk, Cambridgeshire and London. Force tested, certified installs and repairs.",
  },
  hero: {
    eyebrow: "Gates · Garage doors · Bollards",
    title: "Electric gates, garage doors",
    titleAccent: "and rising bollards",
    lead: "New installations, automation of gates you already have, and repairs to systems someone else fitted. Across Essex, Hertfordshire, Suffolk, Cambridgeshire and London.",
    ticks: [
      "Swing gates, sliding gates, garage doors and automatic bollards",
      "We can automate your existing gates - no need to replace them",
      "Force tested and certified, not just wired up and left",
      "Repairs and servicing on most makes, whoever installed them",
    ],
    imageSrc: "/ExcelElectrics/services/gates/gates-hero.webp",
    imageAlt: "Automated electric swing gates on a residential driveway",
    primaryCtaLabel: "Book a site survey",
    formHref: "/contact?service=garage-doors-electric-gates#enquiry-form",
  },
  trust: [
    "Force tested & certified",
    "Fully qualified & insured",
    "Friendly, tidy & respectful",
    SERVICE_AREAS_SHORT,
  ] satisfies ServiceTrustPoint[],
  products: {
    title: "Three ways to control who gets on your drive",
    lead: "New installs, automation of gates you already have, and repairs on systems someone else fitted.",
    blocks: [
      {
        title: "Electric gates",
        items: [
          "Swing and sliding gates, new or automated in place",
          "Timber, metal and composite leaf sets",
          "Intercom, keypad, fob and app control",
          "Safety edges, photocells and manual release",
        ],
      },
      {
        title: "Automatic garage doors",
        items: [
          "Sectional, roller and up-and-over doors",
          "Motorising an existing door in good condition",
          "Remote, keypad and smartphone operation",
          "Obstruction detection and auto-reverse",
        ],
      },
      {
        title: "Automatic bollards",
        items: [
          "Rising bollards for shared drives and forecourts",
          "Fixed and removable security posts",
          "Fob, keypad or number plate recognition",
          "Repairs and servicing on most makes",
        ],
      },
      {
        title: "Repairs and safety",
        items: [
          "Fault finding on motors, boards and safety devices",
          "Force testing and annual safety checks",
          "Bringing skipped safety kit up to standard",
          "Work on systems we did not originally install",
        ],
      },
    ] satisfies ServiceFeatureBlock[],
    imageSrc: "/ExcelElectrics/services/gates/field-gate.webp",
    imageAlt: "Automated field and driveway gate installation by Excel Electrics",
  },
  feasibility: {
    eyebrow: "Before we quote",
    title: "Can my existing gates be automated?",
    lead: "Usually yes, and it is often cheaper than replacing them. We check four things before quoting so a tired gate does not become an expensive problem.",
    rows: [
      {
        option: "Posts and hinges",
        meaning: "Whether the posts can take the extra load and the gates still hang square.",
        note: "Repair or replace",
      },
      {
        option: "Gate weight and width",
        meaning: "Determines the motor type. A heavy timber pair needs a different unit to a light metal one.",
        note: "Different motor",
      },
      {
        option: "Ground level and fall",
        meaning: "A sloping drive can rule out some swing arrangements and point to sliding instead.",
        note: "Change type",
      },
      {
        option: "Power at the gateway",
        meaning: "Whether there is a supply nearby or we need to run armoured cable from the house.",
        note: "New supply",
      },
    ] satisfies ServiceOptionRow[],
    columnLabels: ["Check", "What we're looking for", "If it fails"] as [string, string, string],
  },
  process: {
    title: "Survey to handover, in four steps",
    steps: [
      {
        title: "Send a photo",
        body: "A picture of the gateway, garage or entrance and a rough width is usually enough for us to tell you what's realistic and what it'll cost.",
      },
      {
        title: "Site survey",
        body: "We measure, check the posts, ground fall and power, and risk assess the opening. You get a written fixed-price quote with the safety devices itemised.",
      },
      {
        title: "Installation",
        body: "Groundworks and cabling first where needed, then motors, safety devices and controls. Most domestic installs are one to three days.",
      },
      {
        title: "Test, certify, hand over",
        body: "Force testing, safety device checks, declaration of conformity and a walk-through of the manual release and controls before we leave.",
      },
    ] satisfies ServiceProcessStep[],
  },
  faqs: [
    {
      question: "Can you automate the gates I already have?",
      answer:
        "Usually yes, and it is often cheaper than replacing them. The gates need to be sound, hang square and sit on posts that can take the load. We check that on survey and say so if automating them is a bad idea.",
    },
    {
      question: "Swing or sliding - which is right for my driveway?",
      answer:
        "Swing suits level drives with room to open inwards. Sliding suits narrow openings, slopes, or drives where you cannot lose the swing space. We tell you which your opening allows.",
    },
    {
      question: "What happens if the power goes off?",
      answer:
        "Every system we fit has a manual release so you are never shut in or out. We show you how to use it before we leave, and battery back-up is available if you want the gate to keep working through a cut.",
    },
    {
      question: "Do automatic gates have to be safety tested?",
      answer:
        "Yes. A powered gate is machinery. It must be risk assessed, fitted with the right safety devices, force tested and issued with a declaration of conformity. If a quote skips that, ask why.",
    },
    {
      question: "Will you repair a system another company installed?",
      answer:
        "Yes. Most of our repair work is on other people's installs. We fault find, replace motors and boards, and bring safety devices up to standard where they were skipped.",
    },
    {
      question: "How long does an installation take?",
      answer:
        "A garage door operator is often half a day. Automating existing gates is typically one to two days. A new gate set with groundworks and access control can take longer. We give the timeline with the quote.",
    },
  ] satisfies ServiceFaqItem[],
  closing: {
    title: "Book a site survey",
    lead: "Send a photo of the gateway or garage with your postcode and we'll tell you what's possible before anyone visits.",
    primaryLabel: "Book my survey",
    formHref: "/contact?service=garage-doors-electric-gates#enquiry-form",
  },
};

export const fireLanding = {
  path: "/services/fire-safety",
  service: "fire-safety" as const,
  meta: {
    title: "Home Fire Safety & Smoke Alarms",
    description:
      "Smoke alarms, heat detectors and home fire alarm systems across Essex, Suffolk, Cambridgeshire, Hertfordshire and London. The fire half of Wire & Fire.",
  },
  hero: {
    eyebrow: "Fire safety",
    title: "Home fire safety,",
    titleAccent: "done properly",
    lead: "Mains-linked smoke and heat detection, home fire alarm systems, and upgrades that meet current standards. Part of Wire & Fire - electrics and fire safety from the same team.",
    ticks: [
      "Smoke alarm installation and upgrades",
      "Heat detectors for kitchens and garages",
      "Fire alarm systems for homes",
      "Replacing old or faulty alarms",
    ],
    imageSrc: "/ExcelElectrics/services/fire/fire-hero.webp",
    imageAlt: "Qualified Excel Electrics engineer carrying out electrical and safety work",
    primaryCtaLabel: "Get a quote",
    formHref: "/contact?service=fire-safety#enquiry-form",
  },
  trust: [
    "Fully qualified & insured",
    "Friendly, tidy and respectful",
    "Clear, honest pricing",
    SERVICE_AREAS_SHORT,
  ] satisfies ServiceTrustPoint[],
  features: {
    title: "Practical fire safety for your home",
    lead: "Whether you're upgrading tired battery alarms or specifying a full linked system, we keep the approach tidy, clear and compliant.",
    blocks: [
      {
        title: "Smoke alarm installation & upgrades",
        items: [
          "Mains-powered alarms with battery backup",
          "Interlinked systems so one detects and all sound",
          "Replacing outdated battery-only units",
        ],
      },
      {
        title: "Heat detectors",
        items: [
          "Suitable for kitchens and garages where smoke alarms false-alarm",
          "Linked into the same system as your smoke detectors",
        ],
      },
      {
        title: "Home fire alarm systems",
        items: [
          "Systems sized for houses and flats",
          "Clear zoning and indication where needed",
          "Handover so you know how to test and maintain",
        ],
      },
      {
        title: "Standards and peace of mind",
        items: [
          "Advice on current domestic safety expectations",
          "Combined visits with electrical work where it makes sense",
        ],
      },
    ] satisfies ServiceFeatureBlock[],
    imageSrc: "/ExcelElectrics/services/fire/home-safety.webp",
    imageAlt: "Well-lit modern home interior",
  },
  explainer: {
    eyebrow: "In plain English",
    title: "Smoke, heat or a full linked system?",
    lead: "Most homes need a clear mix of detectors rather than one product type everywhere. Here is how we usually decide.",
    rows: [
      {
        option: "Mains smoke alarms",
        meaning: "Hard-wired with battery backup. The reliable long-term option for landings, bedrooms and living spaces.",
        note: "Most homes",
      },
      {
        option: "Heat detectors",
        meaning: "Better in kitchens and garages where cooking steam or dust would keep setting smoke alarms off.",
        note: "Kitchens",
      },
      {
        option: "Interlinked systems",
        meaning: "One detector sounds and the rest follow, so you hear the warning wherever you are in the house.",
        note: "Family homes",
      },
      {
        option: "Full home fire alarm",
        meaning: "A panel-based system with clear zoning, suited to larger houses or properties that need more indication.",
        note: "Larger homes",
      },
    ] satisfies ServiceOptionRow[],
    columnLabels: ["Option", "What it means for you", "Typical"] as [string, string, string],
  },
  process: {
    title: "Enquiry to handover, in four steps",
    steps: [
      {
        title: "Tell us the property",
        body: "House or flat, how many floors, and whether you already have mains alarms. Photos of existing detectors help.",
      },
      {
        title: "We recommend and price",
        body: "A clear proposal for smoke, heat and any control equipment, with a fixed price before we book.",
      },
      {
        title: "We install and test",
        body: "Dust sheets down, tidy cable runs, and a full system test before we leave.",
      },
      {
        title: "We hand over",
        body: "We show you how to test weekly, what the indicators mean, and when to call us back.",
      },
    ] satisfies ServiceProcessStep[],
  },
  faqs: [
    {
      question: "Do I need mains-powered smoke alarms?",
      answer:
        "For most homes, mains-powered alarms with battery backup are the reliable long-term option. Battery-only units are easy to forget until they chirp at 3am. We'll advise what fits your property.",
    },
    {
      question: "Should kitchens have smoke or heat detectors?",
      answer:
        "Heat detectors are usually better in kitchens and garages because cooking and dust set smoke alarms off. We design the mix so you get protection without constant false alarms.",
    },
    {
      question: "Can you upgrade alarms during other electrical work?",
      answer:
        "Yes. That's often the cleanest approach - new circuits, consumer unit work and fire detection in one visit. Mention it when you enquire.",
    },
    {
      question: "Will you replace a system another firm fitted?",
      answer:
        "Yes. We assess what's there, what's still compliant, and what needs replacing rather than starting from scratch for the sake of it.",
    },
  ] satisfies ServiceFaqItem[],
  closing: {
    title: "Get a quote for fire safety",
    lead: "Tell us about the property and what you need. We'll come back with a clear price, usually the same day.",
    primaryLabel: "Get a quote",
    formHref: "/contact?service=fire-safety#enquiry-form",
  },
};

export const accessLanding = {
  path: "/services/access-security",
  service: "access-security" as const,
  meta: {
    title: "Access Control & Door Entry",
    description:
      "Door entry systems, keypads, fobs and access control for homes and flats across Essex, Suffolk, Cambridgeshire, Hertfordshire and London.",
  },
  hero: {
    eyebrow: "Access & security",
    title: "Door entry and access control",
    titleAccent: "for homes and flats",
    lead: "Intercoms, keypads, fobs and access systems that are tidy, reliable and easy to live with - for single homes through to shared drives and small blocks.",
    ticks: [
      "Door entry systems (intercoms, keypads and fobs)",
      "Access control for homes and flats",
      "Repairs and upgrades to existing systems",
      "Clear pricing agreed before we start",
    ],
    imageSrc: "/ExcelElectrics/services/access/access-hero.webp",
    imageAlt: "Access control keypad installation by Excel Electrics",
    primaryCtaLabel: "Get a quote",
    formHref: "/contact?service=access-security#enquiry-form",
  },
  trust: [
    "Fully qualified & insured",
    "Friendly, tidy and respectful",
    "Clear, honest pricing",
    SERVICE_AREAS_SHORT,
  ] satisfies ServiceTrustPoint[],
  features: {
    title: "Access that works every day",
    lead: "The best systems are the ones people actually use without thinking about them. We design for that.",
    blocks: [
      {
        title: "Door entry systems",
        items: [
          "Audio and video intercoms",
          "Keypads and fob readers",
          "Handsets indoors or mobile apps where suitable",
        ],
      },
      {
        title: "Access control",
        items: [
          "Systems for homes, flats and shared entrances",
          "Individual fob management so lost keys can be cancelled",
          "Integration with gates and garage doors where needed",
        ],
      },
      {
        title: "Repairs and upgrades",
        items: [
          "Fault finding on existing entry systems",
          "Replacing failed readers, handsets and controllers",
          "Bringing older installs up to a clearer setup",
        ],
      },
      {
        title: "Shared drives and flats",
        items: [
          "Multi-user fob systems with a clear handover",
          "Visitor entry that works when residents are out",
          "Neat cable routes suited to communal areas",
        ],
      },
    ] satisfies ServiceFeatureBlock[],
    imageSrc: "/ExcelElectrics/services/access/intercom-gate.webp",
    imageAlt: "Gate entrance with intercom and access control",
  },
  explainer: {
    eyebrow: "In plain English",
    title: "Audio, video or fob control?",
    lead: "Most entrances need a simple mix rather than every option at once. Here is how we usually decide.",
    rows: [
      {
        option: "Audio intercom",
        meaning: "Talk to visitors at the door or gate and release the lock from indoors. Clear and cost-effective.",
        note: "Most homes",
      },
      {
        option: "Video intercom",
        meaning: "See who is outside before you open up. Useful for street-facing doors and shared entrances.",
        note: "Front doors",
      },
      {
        option: "Keypad or fob",
        meaning: "Residents get in without a physical key. Lost fobs can be cancelled without rekeying everyone.",
        note: "Flats / shared",
      },
      {
        option: "Gate integration",
        meaning: "Entry and access control wired into an existing gate or garage motor where the kit allows it.",
        note: "Driveways",
      },
    ] satisfies ServiceOptionRow[],
    columnLabels: ["Option", "What it means for you", "Typical"] as [string, string, string],
  },
  process: {
    title: "Enquiry to handover, in four steps",
    steps: [
      {
        title: "Describe the entrance",
        body: "Photos of the door, gate or lobby and how residents or visitors get in today help us quote accurately.",
      },
      {
        title: "We survey and propose",
        body: "We check cabling, power and mounting, then give you a fixed price with the hardware itemised.",
      },
      {
        title: "We install and programme",
        body: "Readers, handsets and controllers fitted neatly, with fobs or codes set up for the people who need them.",
      },
      {
        title: "We hand over",
        body: "A simple walk-through so you know how to let visitors in, cancel a lost fob, and call us if something fails.",
      },
    ] satisfies ServiceProcessStep[],
  },
  faqs: [
    {
      question: "Can you work with an existing gate or door motor?",
      answer:
        "Often yes. We integrate new entry and access control with equipment that's already there, or flag it if the motor or lock needs upgrading first.",
    },
    {
      question: "Is this only for houses?",
      answer:
        "No. We also fit systems for flats and shared drives where multiple people need controlled access without sharing one physical key.",
    },
    {
      question: "Will you repair a system another company installed?",
      answer:
        "Yes. Fault finding and upgrades on other people's installs is a regular part of the work.",
    },
    {
      question: "Can this be done with electric gates in one project?",
      answer:
        "Yes. Access control and gate automation often belong together. Ask for both and we'll scope one join-up rather than two disconnected jobs.",
    },
  ] satisfies ServiceFaqItem[],
  closing: {
    title: "Get a quote for access control",
    lead: "Tell us about the entrance and how people get in today. We'll come back with a clear price, usually the same day.",
    primaryLabel: "Get a quote",
    formHref: "/contact?service=access-security#enquiry-form",
  },
};
