/** Accreditations relevant to electrical work. Fire door / fire stopping schemes stay on the Excel Fire site. */
export type Accreditation = {
  name: string;
  logo: { src: string; width: number; height: number; alt: string };
  covers: string;
  detail: string;
};

export const NICEIC_SCOPES = [
  { name: "Approved Contractor Scheme", number: "AC200816", covers: "Electrical installation work to BS 7671" },
  { name: "Domestic Installer Scheme", number: "D200842", covers: "Self-certifying home electrical work (Part P)" },
  { name: "Periodic Inspection in the Rented Sector", number: "RS200662", covers: "Landlord electrical safety inspections (EICRs)" },
] as const;

export const ACCREDITATIONS: Accreditation[] = [
  {
    name: "NICEIC",
    logo: { src: "/ExcelElectrics/accreditations/niceic.webp", width: 1660, height: 802, alt: "NICEIC Approved Contractor" },
    covers: "Electrical work & inspections",
    detail:
      "Assessed every year on the safety and quality of our electrical work, including fire alarms and detection. We can self-certify home electrical work, so you get your Building Regulations certificate without extra hassle.",
  },
  {
    name: "CHAS",
    logo: { src: "/ExcelElectrics/accreditations/chas.webp", width: 290, height: 149, alt: "CHAS accredited contractor" },
    covers: "Health and safety (SSIP)",
    detail: "Our health and safety policies and track record are independently checked to the standard councils and housing providers ask for.",
  },
  {
    name: "Constructionline Gold",
    logo: {
      src: "/ExcelElectrics/accreditations/constructionline-gold.webp",
      width: 500,
      height: 230,
      alt: "Constructionline Gold Member",
    },
    covers: "Prequalification",
    detail: "Enhanced checks on how we run the business, so landlords and managing agents can take us on without months of paperwork.",
  },
  {
    name: "SMAS Worksafe",
    logo: { src: "/ExcelElectrics/accreditations/smas-worksafe.webp", width: 300, height: 105, alt: "SMAS Worksafe certified" },
    covers: "Health and safety (SSIP)",
    detail: "Our safe working arrangements meet the SSIP core criteria recognised across the building industry.",
  },
];
