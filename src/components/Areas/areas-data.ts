import type { ServiceFaqItem } from "@/components/Electrics/ServiceLanding/serviceLandingShared";
import { SERVICE_NAV_LINKS } from "@/components/Navigation/serviceNavLinks";

export type LocationPageData = {
  slug: string;
  county: string;
  towns: string[];
  heroImage: string;
  heroImageAlt: string;
  heroDescription: string;
  metaTitle: string;
  metaDescription: string;
  intro: string[];
  faqs: ServiceFaqItem[];
};

/** Services shown on each county page for internal linking. */
export const LOCATION_SERVICE_LINKS = SERVICE_NAV_LINKS;

/**
 * Single source of truth for /areas, the full areas accordion,
 * sitemap entries and /areas/[area] pages.
 */
export const locations: LocationPageData[] = [
  {
    slug: "essex",
    county: "Essex",
    towns: [
      "Chelmsford",
      "Colchester",
      "Braintree",
      "Harlow",
      "Basildon",
      "Brentwood",
      "Epping",
      "Southend-on-Sea",
      "Rayne",
      "Great Dunmow",
      "Billericay",
      "Witham",
      "Clacton-on-Sea",
      "Grays",
      "Maldon",
      "Saffron Walden",
    ],
    heroImage: "/ExcelElectrics/services/electrical/electrical-hero.webp",
    heroImageAlt: "Excel Electrics electrical installation work in Essex",
    heroDescription:
      "Domestic electrical work, EV charging, fire safety, access systems, gates and garage doors across Essex, from Chelmsford and Colchester to Harlow, Basildon and the coast.",
    metaTitle: "Electrician in Essex",
    metaDescription:
      "Qualified electricians across Essex including Chelmsford, Colchester, Harlow, Basildon, Brentwood and Southend-on-Sea. Fixed pricing, tidy work, certified installs.",
    intro: [
      "Essex is one of Excel Electrics' core coverage areas. We work across market towns such as Chelmsford and Colchester, commuter hubs like Harlow, Brentwood and Billericay, and coastal towns including Southend-on-Sea and Clacton-on-Sea.",
      "Whether you need a socket repaired in Rayne, an EV charger on a Chelmsford driveway, smoke alarms in a Colchester flat or electric gates in Epping, we price the job clearly before we start and leave the site tidy.",
    ],
    faqs: [
      {
        question: "Do you cover the whole of Essex?",
        answer:
          "Yes. We cover Essex in full, including Chelmsford, Colchester, Harlow, Basildon, Southend-on-Sea, Brentwood, Braintree, Billericay, Epping, Great Dunmow, Rayne and the surrounding villages. If you are unsure about your postcode, get in touch and we will confirm.",
      },
      {
        question: "Can you give a fixed price for work in Essex?",
        answer:
          "Yes. Once we understand the job we give you a fixed price before anything is booked. Straightforward jobs are often priced from photos or a short call; larger installs get a site survey.",
      },
      {
        question: "Do you handle Part P notification and certificates in Essex?",
        answer:
          "Where the work needs it, yes. We test, certify and notify as required so you have the paperwork for insurers, solicitors or letting agents.",
      },
    ],
  },
  {
    slug: "suffolk",
    county: "Suffolk",
    towns: [
      "Ipswich",
      "Bury St Edmunds",
      "Sudbury",
      "Haverhill",
      "Newmarket",
      "Felixstowe",
      "Lowestoft",
      "Stowmarket",
      "Woodbridge",
      "Mildenhall",
    ],
    heroImage: "/ExcelElectrics/services/ev/ev-hero.webp",
    heroImageAlt: "Home EV charger installation by Excel Electrics in Suffolk",
    heroDescription:
      "Electrical installs, EV charging, fire safety and access work across Suffolk, including Ipswich, Bury St Edmunds, Sudbury, Haverhill and Newmarket.",
    metaTitle: "Electrician in Suffolk",
    metaDescription:
      "Excel Electrics covers Suffolk including Ipswich, Bury St Edmunds, Sudbury, Haverhill, Newmarket and Felixstowe. Clear pricing and certified domestic electrical work.",
    intro: [
      "Suffolk mixes historic centres such as Bury St Edmunds and Woodbridge with port and coastal towns like Felixstowe and Lowestoft, plus busy market towns including Sudbury, Stowmarket and Haverhill.",
      "We regularly fit EV chargers on rural and suburban drives, upgrade consumer units in older Suffolk housing stock, and install linked smoke and heat detection for homes that need current fire safety standards.",
    ],
    faqs: [
      {
        question: "Which Suffolk towns do you cover?",
        answer:
          "We cover Ipswich, Bury St Edmunds, Sudbury, Haverhill, Newmarket, Felixstowe, Lowestoft, Stowmarket, Woodbridge, Mildenhall and surrounding villages. Call or message if your town is not listed.",
      },
      {
        question: "Do you travel to rural Suffolk addresses?",
        answer:
          "Yes. Rural and village properties are a normal part of our Suffolk work. We will confirm travel and timing when we quote.",
      },
      {
        question: "Can you combine electrical and fire safety work in one visit?",
        answer:
          "Often yes. Mention both when you enquire and we will scope one tidy visit where it makes sense.",
      },
    ],
  },
  {
    slug: "cambridgeshire",
    county: "Cambridgeshire",
    towns: [
      "Cambridge",
      "Peterborough",
      "Huntingdon",
      "St Neots",
      "Ely",
      "Wisbech",
      "March",
      "St Ives",
      "Whittlesey",
      "Chatteris",
    ],
    heroImage: "/ExcelElectrics/services/fire/fire-hero.webp",
    heroImageAlt: "Excel Electrics engineer carrying out home safety work in Cambridgeshire",
    heroDescription:
      "Domestic electrics, fire safety, EV charging and access systems across Cambridgeshire, from Cambridge and Ely to Peterborough, Huntingdon and St Neots.",
    metaTitle: "Electrician in Cambridgeshire",
    metaDescription:
      "Excel Electrics covers Cambridgeshire including Cambridge, Peterborough, Huntingdon, St Neots, Ely and Wisbech. Fixed prices and certified installs.",
    intro: [
      "Cambridgeshire spans the university city of Cambridge, cathedral and fen towns such as Ely and Wisbech, and larger centres including Peterborough, Huntingdon and St Neots.",
      "From consumer unit upgrades in period housing to EV chargers on new estates and mains-linked smoke alarms in family homes, we keep the same clear pricing and tidy approach across the county.",
    ],
    faqs: [
      {
        question: "Do you cover Cambridge and the surrounding villages?",
        answer:
          "Yes. Cambridge, the surrounding villages and towns such as Ely, Huntingdon, St Ives and St Neots are all within our Cambridgeshire coverage.",
      },
      {
        question: "Can you install an EV charger in Cambridgeshire?",
        answer:
          "Yes. We install domestic and commercial EV chargers, handle DNO notification where required, and give a fixed price before we book.",
      },
      {
        question: "How do I get a quote for Cambridgeshire?",
        answer:
          "Use the contact page with your postcode and a short description of the job. Photos of the fuse box or parking spot help us price faster.",
      },
    ],
  },
  {
    slug: "hertfordshire",
    county: "Hertfordshire",
    towns: [
      "St Albans",
      "Watford",
      "Hemel Hempstead",
      "Stevenage",
      "Bishop's Stortford",
      "Hertford",
      "Hatfield",
      "Bovingdon",
      "Hitchin",
      "Welwyn Garden City",
      "Harpenden",
      "Borehamwood",
      "Cheshunt",
      "Rickmansworth",
    ],
    heroImage: "/ExcelElectrics/services/gates/gates-hero.webp",
    heroImageAlt: "Automated electric gates installed by Excel Electrics in Hertfordshire",
    heroDescription:
      "Electrical work, gates, garage doors, access control and EV charging across Hertfordshire, including St Albans, Watford, Stevenage, Hertford and Bishop's Stortford.",
    metaTitle: "Electrician in Hertfordshire",
    metaDescription:
      "Excel Electrics covers Hertfordshire including St Albans, Watford, Hemel Hempstead, Stevenage, Hertford and Bishop's Stortford. Clear pricing and certified work.",
    intro: [
      "Hertfordshire combines cathedral and market towns such as St Albans and Hertford with well-established commuter towns including Watford, Stevenage, Hemel Hempstead and Bishop's Stortford.",
      "Older housing stock in places like St Albans and Harpenden often needs careful consumer unit and circuit upgrades, while newer estates around Stevenage and Welwyn Garden City are frequent sites for EV chargers, access systems and garage door automation.",
    ],
    faqs: [
      {
        question: "Which Hertfordshire towns do you cover?",
        answer:
          "We cover St Albans, Watford, Hemel Hempstead, Stevenage, Bishop's Stortford, Hertford, Hatfield, Hitchin, Welwyn Garden City, Harpenden, Borehamwood, Cheshunt, Rickmansworth, Bovingdon and surrounding areas.",
      },
      {
        question: "Do you automate existing gates in Hertfordshire?",
        answer:
          "Yes. We can automate gates you already have where the posts, ground and structure are suitable, and we force test and certify the finished install.",
      },
      {
        question: "Are you insured and qualified for work in Hertfordshire?",
        answer:
          "Yes. We are fully qualified and insured, and we certify and notify work where the regulations require it.",
      },
    ],
  },
  {
    slug: "london",
    county: "London",
    towns: [
      "Westminster",
      "Camden",
      "Islington",
      "Southwark",
      "Lambeth",
      "City of London",
      "Chelsea",
      "Kensington",
      "Hackney",
      "Tower Hamlets",
      "Holborn",
      "Shoreditch",
      "Clerkenwell",
      "Finsbury",
    ],
    heroImage: "/ExcelElectrics/services/access/access-hero.webp",
    heroImageAlt: "Access control and electrical work by Excel Electrics in London",
    heroDescription:
      "Domestic electrical work, access systems, fire safety and EV charging across central London boroughs including Westminster, Camden, Islington, Southwark and the City.",
    metaTitle: "Electrician in Central London",
    metaDescription:
      "Excel Electrics covers central London including Westminster, Camden, Islington, Southwark, Lambeth, Hackney and the City. Fixed pricing and tidy certified work.",
    intro: [
      "Central London work needs careful planning around access, listed buildings and shared services. We regularly handle flats, mews houses and small commercial premises across Westminster, Camden, Islington, Southwark and neighbouring boroughs.",
      "Typical jobs include consumer unit upgrades, lighting and socket work, door entry and access control for shared entrances, and EV charging where off-street parking allows a compliant install.",
    ],
    faqs: [
      {
        question: "Which parts of London do you cover?",
        answer:
          "We cover central London boroughs including Westminster, Camden, Islington, Southwark, Lambeth, Hackney, Tower Hamlets, Kensington and Chelsea, and the City of London, plus Greater London more widely.",
      },
      {
        question: "Can you work in flats and mansion blocks?",
        answer:
          "Yes. We are used to managing building access, landlord requirements and shared risers. Tell us about the property when you enquire.",
      },
      {
        question: "Do you provide Electrical Installation Certificates in London?",
        answer:
          "Yes. New installs, additions and alterations that need an EIC are tested and certified, with paperwork emailed over when the job is complete.",
      },
    ],
  },
  {
    slug: "greater-london",
    county: "Greater London",
    towns: [
      "Barnet",
      "Enfield",
      "Croydon",
      "Harrow",
      "Hillingdon",
      "Bromley",
      "Newham",
      "Ealing",
      "Haringey",
      "Waltham Forest",
      "Redbridge",
      "Havering",
      "Bexley",
      "Greenwich",
      "Lewisham",
      "Brent",
      "Hounslow",
      "Richmond upon Thames",
      "Kingston upon Thames",
      "Merton",
      "Sutton",
      "Wandsworth",
      "Hammersmith and Fulham",
    ],
    heroImage: "/ExcelElectrics/Excel Home Hero.webp",
    heroImageAlt: "Excel Electrics covering homes across Greater London",
    heroDescription:
      "Friendly, local electrical support across Greater London boroughs, from Barnet and Enfield to Croydon, Harrow, Bromley, Newham and beyond.",
    metaTitle: "Electrician in Greater London",
    metaDescription:
      "Excel Electrics covers Greater London including Barnet, Enfield, Croydon, Harrow, Hillingdon, Bromley, Newham and Ealing. Clear pricing and certified domestic work.",
    intro: [
      "Greater London coverage means the outer boroughs as well as central London. We work across north, east, south and west London for homeowners who want a tidy, clear-priced electrician rather than a revolving door of subcontractors.",
      "Typical work includes everyday electrics, EICRs, fire safety upgrades, EV charging on driveways, and access or gate automation for houses and small blocks.",
    ],
    faqs: [
      {
        question: "Do you cover my Greater London borough?",
        answer:
          "We cover boroughs including Barnet, Enfield, Croydon, Harrow, Hillingdon, Bromley, Newham, Ealing, Haringey, Waltham Forest, Redbridge, Havering and many others. If yours is not listed, ask and we will confirm.",
      },
      {
        question: "Is travel charged separately in Greater London?",
        answer:
          "Pricing is given as a fixed job price so you know the number before we book. Any travel implications for outlying addresses are included in that quote.",
      },
      {
        question: "Can you help with landlord EICRs in Greater London?",
        answer:
          "Yes. We carry out EICR reports for landlords and managing agents, with clear coding and practical advice on what needs fixing.",
      },
    ],
  },
];

export function getLocationBySlug(slug: string): LocationPageData | undefined {
  return locations.find((location) => location.slug === slug);
}
