import type {
  ServiceFaqItem,
  ServiceFeatureBlock,
  ServiceOptionRow,
  ServiceProcessStep,
  ServiceTrustPoint,
} from "@/components/Electrics/ServiceLanding/serviceLandingShared";
import { SERVICE_AREAS_SHORT } from "@/components/Electrics/ServiceLanding/serviceLandingShared";

export const evLanding = {
  path: "/services/ev-charging",
  service: "ev-charging" as const,
  meta: {
    title: "EV Charger Installation",
    description:
      "Domestic and commercial EV charger installation across Essex, Suffolk, Cambridgeshire, Hertfordshire and London. Fixed pricing, DNO notification handled.",
  },
  hero: {
    eyebrow: "Home EV charging",
    title: "EV charger installation,",
    titleAccent: "domestic & commercial",
    lead: "Professionally installed EV charging from Excel Electrics. Safe, compliant and future-ready installs with leading manufacturers, so you can cut running costs and charge overnight on a cheap tariff.",
    ticks: [
      "Home and workplace EV charger installation",
      "Repairs, upgrades and second-point installs",
      "Load checks and DNO notification handled",
      "Fixed pricing before we book the date",
    ],
    imageSrc: "/ExcelElectrics/services/ev/ev-hero.webp",
    imageAlt: "Home EV charger installed on a driveway wall",
    primaryCtaLabel: "Get my fixed price",
    formHref: "/contact?service=ev-charging#enquiry-form",
  },
  trust: [
    "Fully qualified & insured",
    "Friendly, tidy and respectful",
    "Fixed, honest pricing",
    SERVICE_AREAS_SHORT,
  ] satisfies ServiceTrustPoint[],
  features: {
    title: "Home and workplace EV charging, done properly",
    lead: "Whether you are fitting your first charger or sorting one that has stopped playing nicely, we keep pricing clear and the finish tidy.",
    blocks: [
      {
        title: "New home installations",
        items: [
          "7kW smart chargers for most driveways and garages",
          "Tethered or untethered units to suit the parking spot",
          "Cable runs along walls, fences or buried where needed",
          "App setup and overnight tariff advice before we leave",
        ],
      },
      {
        title: "Supply and load checks",
        items: [
          "Consumer unit capacity and spare ways",
          "Earthing arrangement and bonding",
          "Load management on older or busy supplies",
          "DNO notification handled where required",
        ],
      },
      {
        title: "Commercial and workplace",
        items: [
          "Single and multi-point staff or yard installs",
          "Clear labelling and handover for everyday users",
          "Paperwork suited to landlords and facilities teams",
        ],
      },
      {
        title: "Repairs and upgrades",
        items: [
          "Fault finding on existing chargepoints",
          "Replacing failed units with a smart charger",
          "Relocating after a driveway or extension change",
          "Adding a second charger for a two-car household",
        ],
      },
    ] satisfies ServiceFeatureBlock[],
    imageSrc: "/ExcelElectrics/services/ev/ev-install.webp",
    imageAlt: "Engineer installing a home EV charger",
  },
  options: {
    eyebrow: "In plain English",
    title: "7kW, tethered or untethered",
    lead: "Most homes want a 7kW smart charger that fills the car overnight on a cheap tariff. Here is the short version of the decisions.",
    rows: [
      {
        option: "7kW single-phase",
        meaning: "The standard home charger. Roughly 25-30 miles of range an hour, and a full charge overnight for almost every car.",
        note: "Most homes",
      },
      {
        option: "22kW three-phase",
        meaning: "Only worth it if you already have three-phase and the car can accept AC above 7kW. Most cannot.",
        note: "Rare",
      },
      {
        option: "Tethered",
        meaning: "Cable permanently attached. Quicker day to day, slightly bulkier on the wall.",
        note: "Driveways",
      },
      {
        option: "Untethered",
        meaning: "A socket for your own cable. Tidier look, works with any car, cable lives in the boot.",
        note: "Front walls",
      },
    ] satisfies ServiceOptionRow[],
    columnLabels: ["Option", "What it means for you", "Typical"] as [string, string, string],
  },
  process: {
    title: "Enquiry to charging, in four steps",
    steps: [
      {
        title: "Send us the details",
        body: "Send a message or call. A photo of your fuse box and where the car parks is usually enough to price it.",
      },
      {
        title: "We survey and quote",
        body: "Photo review, video call or a visit if needed. You get a fixed price with everything itemised, no \"subject to survey\" small print.",
      },
      {
        title: "We book a date and notify the DNO",
        body: "We handle the network operator paperwork. You pick a slot that suits you.",
      },
      {
        title: "Install, test, hand over",
        body: "Three to four hours for most homes. We test, certify, set the app up on your phone and show you how to charge on a cheap overnight rate.",
      },
    ] satisfies ServiceProcessStep[],
  },
  faqs: [
    {
      question: "How long does the installation take?",
      answer:
        "Most straightforward installs take three to four hours in a single visit. A long cable run, a consumer unit change or a supply to a detached garage can make it a full day - we tell you which when we quote.",
    },
    {
      question: "How much does it cost to install an EV charger?",
      answer:
        "It depends on the charger, cable distance and whether the fuse board or earthing needs work. We give a fixed price before anything is booked, and that is the price you pay.",
    },
    {
      question: "Will my fuse box cope?",
      answer:
        "Not always, and it is the most common reason a simple install is not simple. We check the board, main fuse and earthing before quoting, and tell you up front if something needs upgrading.",
    },
    {
      question: "Do I need planning permission?",
      answer:
        "For a wall-mounted charger at a normal house, no. Listed buildings, conservation areas and cross-pavement channels are the exceptions - we flag it if your property is one of them.",
    },
    {
      question: "Can you fit a charger I have already bought?",
      answer:
        "Yes, as long as it is a current, compliant unit. We confirm it suits your supply before we book the date.",
    },
    {
      question: "What if the car parks a long way from the house?",
      answer:
        "Very common. We run armoured cable along a wall or fence, or trench it across a driveway or lawn, and price the cable run properly rather than guessing.",
    },
  ] satisfies ServiceFaqItem[],
  closing: {
    title: "Get a fixed price for your EV charger",
    lead: "Tell us your postcode and where the car parks. We'll come back with a real number, usually the same day.",
    primaryLabel: "Get my fixed price",
    formHref: "/contact?service=ev-charging#enquiry-form",
  },
};

export const electricalLanding = {
  path: "/services/electrical-work",
  service: "electrical-work" as const,
  meta: {
    title: "Domestic Electrical Work",
    description:
      "Fault finding, sockets, lighting, consumer units, EICRs and rewires across Essex, Suffolk, Cambridgeshire, Hertfordshire and London. Clear pricing, certified work.",
  },
  hero: {
    eyebrow: "Domestic electrical work",
    title: "Domestic electrical work,",
    titleAccent: "done properly",
    lead: "From a socket that's stopped working to a full rewire. Priced before we start, certified when we finish, and tidy while we're in your home.",
    ticks: [
      "Fault finding, repairs, sockets, lighting and fuse boards",
      "EICR reports for landlords, sellers and peace of mind",
      "Clear pricing agreed up front",
      "No job too small, and we turn up when we say we will",
    ],
    imageSrc: "/ExcelElectrics/services/electrical/electrical-hero.webp",
    imageAlt: "Modern home lighting and electrical installation",
    primaryCtaLabel: "Get a price",
    formHref: "/contact?service=electrical-work#enquiry-form",
  },
  trust: [
    "Fully qualified & insured",
    "Certified & notified work",
    "No job too small",
    SERVICE_AREAS_SHORT,
  ] satisfies ServiceTrustPoint[],
  features: {
    title: "Everyday electrical work",
    lead: "Most of what we're called out for falls into one of these. If yours isn't listed, ask - it's almost certainly something we cover.",
    blocks: [
      {
        title: "Fault finding & repairs",
        intro: "Breakers that keep tripping, dead sockets, flickering lights, burning smells. We trace it to the actual cause rather than swapping parts and hoping.",
        items: [],
      },
      {
        title: "Sockets, lights & upgrades",
        intro: "Extra sockets, USB points, downlights, outside lights, extractor fans, cooker and shower circuits, garden and garage supplies.",
        items: [],
      },
      {
        title: "Consumer unit replacement",
        intro: "Modern boards with RCBO protection on every circuit, so one fault doesn't take the whole house out. Full test and certification included.",
        items: [],
      },
      {
        title: "EICR reports",
        intro: "The formal inspection of your fixed wiring. Required for rented homes in England every five years, and worth having before you buy or sell.",
        items: [],
      },
      {
        title: "EICs and Minor Works",
        intro: "Electrical Installation Certificates for new installs, additions and alterations - the paperwork your solicitor, insurer or letting agent asks for.",
        items: [],
      },
      {
        title: "Rewires & part rewires",
        intro: "Full and partial rewires with a proper plan, a written schedule and realistic dates. Often staged room by room so you can stay in the house.",
        items: [],
      },
    ] satisfies ServiceFeatureBlock[],
    imageSrc: "/ExcelElectrics/services/electrical/consumer-unit.webp",
    imageAlt: "Excel Electrics engineer working on a consumer unit",
  },
  codes: {
    title: "EICRs, and what the codes mean",
    lead: "Most people first meet an EICR because a letting agent or a buyer's solicitor asked for one. Here's what comes back on it.",
    rows: [
      { option: "C1", meaning: "Danger present. Risk of injury right now - we make it safe before we leave.", note: "Unsatisfactory" },
      { option: "C2", meaning: "Potentially dangerous. Not live-hazardous today, but it needs putting right.", note: "Unsatisfactory" },
      { option: "C3", meaning: "Improvement recommended. Doesn't fail the report, but worth doing.", note: "Satisfactory" },
      { option: "FI", meaning: "Further investigation needed before a verdict can be given.", note: "Unsatisfactory" },
    ] satisfies ServiceOptionRow[],
    columnLabels: ["Code", "What it means", "Result"] as [string, string, string],
  },
  process: {
    title: "Enquiry to certificate, in four steps",
    steps: [
      {
        title: "Tell us what's happening",
        body: "A line or two via the contact page, or a call. Photos help for anything visible: a fuse box, a scorched socket, the room you want the lights in.",
      },
      {
        title: "We price it",
        body: "Small jobs get a price over the phone or by email. Anything bigger gets a visit and a written quote with the work itemised.",
      },
      {
        title: "We do the work",
        body: "Dust sheets down, a tidy job, and everything put back. If we find something unexpected we stop and tell you before spending your money.",
      },
      {
        title: "Test, certify, notify",
        body: "Full testing, your certificate emailed over, and Part P notification handled where the work needs it.",
      },
    ] satisfies ServiceProcessStep[],
  },
  faqs: [
    {
      question: "Will you take on small jobs?",
      answer:
        "Yes. One socket, a light that keeps tripping, a faulty extractor fan - that's normal work for us, and we price it the same way as anything else. No job too small.",
    },
    {
      question: "What is an EICR and how often do I need one?",
      answer:
        "An Electrical Installation Condition Report is a formal inspection and test of your fixed wiring. Rented homes in England need a satisfactory report at least every five years. Owner-occupied homes are advised to have one every ten years, or when you buy.",
    },
    {
      question: "Do I need a new fuse box?",
      answer:
        "Not automatically, and we won't tell you that you do unless it's true. The usual reasons are no RCD protection, damage, overloading, or simply no spare ways left for a new circuit. We inspect first and give you the honest answer.",
    },
    {
      question: "Why does my breaker keep tripping?",
      answer:
        "Usually a faulty appliance, water where it shouldn't be, or a damaged cable. Occasionally it's a nuisance trip from too many circuits sharing one RCD. Proper fault finding tells you which - guesswork just costs you two visits.",
    },
    {
      question: "Does my electrical work need to be notified?",
      answer:
        "New circuits, consumer unit replacements and some bathroom work do, under Part P of the Building Regulations. Replacing a socket or light fitting like for like generally doesn't. We deal with the notification where it applies.",
    },
    {
      question: "How much does an electrician cost?",
      answer:
        "We quote for the job rather than running an open-ended hourly meter, so you know the number before we start. Larger works are quoted in writing after we've seen the property.",
    },
    {
      question: "How long does a rewire take?",
      answer:
        "A typical three-bed house is usually one to two weeks depending on access and how much can be reused. We can often stage it room by room so you're not moving out.",
    },
    {
      question: "Can you help with smoke alarms and fire safety too?",
      answer:
        "Yes. Mains-linked smoke and heat detection is a big part of what we do - it's the \"fire\" half of Wire & Fire. Mention it when you enquire and we'll cover both in one visit.",
    },
  ] satisfies ServiceFaqItem[],
  closing: {
    title: "Get a price for your job",
    lead: "Tell us what's happening and your postcode. We'll come back with a price or a couple of questions, usually the same day.",
    primaryLabel: "Get my price",
    formHref: "/contact?service=electrical-work#enquiry-form",
  },
};
