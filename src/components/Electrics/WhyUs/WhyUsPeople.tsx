import Image from "next/image";
import { ElectricsSection } from "@/components/Electrics/ElectricsSection";

const PHOTOS = [
  {
    src: "/ExcelElectrics/photos/team-excel-electrics-engineer.webp",
    alt: "Excel Electrics engineer in branded workwear on site",
    caption: "Our own engineers, in uniform",
  },
  {
    src: "/ExcelElectrics/photos/team-crimping-network-cable.webp",
    alt: "Close-up of an engineer crimping a network cable connector",
    caption: "Care over every connection",
  },
  {
    src: "/ExcelElectrics/photos/team-excel-electrics-van-tailgate.webp",
    alt: "Excel Electrics Wire & Fire branding on the back of a company van",
    caption: "Look out for the van",
  },
];

/** Why Us: real photos of the team at work. */
export function WhyUsPeople() {
  return (
    <ElectricsSection>
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#905bf4] md:text-xs">On the job</p>
        <h2 className="text-foreground mt-2 text-2xl font-semibold tracking-tight md:text-3xl">The people who turn up</h2>
      </div>
      <ul className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-3">
        {PHOTOS.map((photo) => (
          <li key={photo.src} className="min-w-0">
            <figure>
              <div className="relative aspect-[16/10] overflow-hidden rounded-md">
                <Image src={photo.src} alt={photo.alt} fill sizes="(max-width: 640px) 100vw, 33vw" className="object-cover" />
              </div>
              <figcaption className="text-muted mt-2 text-sm">{photo.caption}</figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </ElectricsSection>
  );
}
