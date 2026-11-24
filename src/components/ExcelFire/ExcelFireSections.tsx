import Image from "next/image";
import Link from "next/link";
import { ElectricsSection } from "@/components/Electrics/ElectricsSection";
import { primaryBtnClass, secondaryBtnClass } from "@/components/Electrics/ServiceLanding/serviceLandingShared";
import { RevealBlock } from "@/components/Electrics/ServiceLanding/useRevealInView";

export const EXCEL_FIRE_URL = "https://excelfireltd.com";
export const EXCEL_FIRE_PHONE_LABEL = "0203 302 9558";
export const EXCEL_FIRE_PHONE_TEL = "tel:+442033029558";

const eyebrowClass = "text-[11px] font-semibold uppercase tracking-[0.18em] text-[#905bf4] md:text-xs";
const h2Class = "text-foreground mt-2 text-2xl font-semibold tracking-tight md:text-3xl";
const bodyClass = "text-muted text-sm leading-relaxed md:text-base";

const FIRE_SERVICES = [
  { name: "Fire door installation", blurb: "Certified fire door sets for flats, communal areas and commercial buildings, fitted to BS 8214." },
  { name: "Fire door inspections", blurb: "Clear inspection reports with photos and QR tagging, so you know exactly what needs fixing." },
  { name: "Fire door maintenance", blurb: "Adjusting, repairing and replacing ironmongery so existing doors keep doing their job." },
  { name: "Fire stopping", blurb: "Sealing the gaps around pipes and cables so fire and smoke can't spread between rooms or floors." },
  { name: "Fire stopping inspections", blurb: "Independent checks of compartmentation, with photo evidence of anything that needs putting right." },
  { name: "Active fire systems", blurb: "Fire alarms and detection, specified, installed and maintained alongside our electricians." },
];

function ExternalArrow() {
  return (
    <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
      ↗
    </span>
  );
}

export function ExcelFireIntro() {
  return (
    <ElectricsSection>
      <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
        <RevealBlock variant="fade-up" className="relative aspect-[4/3] overflow-hidden rounded-md lg:aspect-auto lg:min-h-[420px]">
          <Image
            src="/ExcelElectrics/photos/projects/emirates/doorset-2-after.webp"
            alt="A newly installed fire door set at the Emirates Stadium"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </RevealBlock>

        <RevealBlock variant="fade-up">
          <p className={eyebrowClass}>In plain English</p>
          <h2 className={h2Class}>The fire safety team behind Excel Electrics</h2>
          <p className={`${bodyClass} mt-4`}>
            Excel Electrics is part of Excel Fire Ltd. Excel Fire looks after the fire safety of buildings: fire doors, fire
            stopping and inspections for landlords, housing providers, schools and commercial sites.
          </p>
          <p className={`${bodyClass} mt-3`}>
            Same company, same standards. If you own or manage a building and need fire safety work as well as electrics,
            you only need one phone call.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={EXCEL_FIRE_URL} target="_blank" rel="noopener noreferrer" className={primaryBtnClass}>
              Visit Excel Fire <ExternalArrow />
            </a>
            <a href={EXCEL_FIRE_PHONE_TEL} className={secondaryBtnClass}>
              Call {EXCEL_FIRE_PHONE_LABEL}
            </a>
          </div>
        </RevealBlock>
      </div>
    </ElectricsSection>
  );
}

export function ExcelFireServices() {
  return (
    <ElectricsSection>
      <RevealBlock variant="fade-up" className="mx-auto max-w-3xl text-center">
        <p className={eyebrowClass}>What Excel Fire does</p>
        <h2 className={h2Class}>Fire safety for flats, blocks and businesses</h2>
        <p className={`${bodyClass} mx-auto mt-3 max-w-2xl`}>
          Mostly for building owners, landlords and managing agents. Independently certified and fully documented.
        </p>
      </RevealBlock>

      <ul className="mx-auto mt-10 grid max-w-6xl grid-cols-1 gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
        {FIRE_SERVICES.map((service, index) => (
          <RevealBlock key={service.name} as="li" variant="fade-up" className="min-w-0 border-t border-[var(--border)] pt-5">
            <p className="font-mono text-xs font-semibold text-[#905bf4]">{String(index + 1).padStart(2, "0")}</p>
            <h3 className="text-foreground mt-2 text-base font-semibold">{service.name}</h3>
            <p className="text-muted mt-1.5 text-sm leading-relaxed">{service.blurb}</p>
          </RevealBlock>
        ))}
      </ul>

      <div className="mt-10 flex justify-center">
        <a
          href={EXCEL_FIRE_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-1.5 text-sm font-semibold text-[#905bf4] transition-colors hover:text-[#4b378c]"
        >
          See all Excel Fire services <ExternalArrow />
        </a>
      </div>
    </ElectricsSection>
  );
}

export function ExcelFireWireAndFire() {
  return (
    <ElectricsSection>
      <RevealBlock variant="fade-up" className="mx-auto grid max-w-7xl items-center gap-8 lg:grid-cols-2 lg:gap-12">
        <div className="lg:order-2">
          <Link href="/projects/emirates-stadium" className="relative block aspect-[16/10] overflow-hidden rounded-md">
            <Image
              src="/ExcelElectrics/photos/projects/emirates/emirates-stadium.webp"
              alt="The Emirates Stadium, where Excel Fire and Excel Electrics worked together on fire doors and alarm interlinks"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </Link>
        </div>
        <div>
          <p className={eyebrowClass}>Wire &amp; fire</p>
          <h2 className={h2Class}>Fire doors and the electrics that control them</h2>
          <p className={`${bodyClass} mt-3 max-w-xl`}>
            Modern fire doors rarely work alone. Maglocks, hold-open devices, door entry and the fire alarm all have to talk
            to each other. With Excel Fire and Excel Electrics under one roof, there are no gaps between trades.
          </p>
          <ul className="mt-5 space-y-2">
            {[
              "Fire alarm interlinks for hold-open devices and maglocks",
              "Access control on fire doors and communal entrances",
              "Fire alarms and emergency lighting alongside door programmes",
            ].map((item) => (
              <li key={item} className="text-foreground flex gap-2 text-sm leading-snug md:text-[15px]">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#905bf4]" aria-hidden />
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <Link
            href="/projects/emirates-stadium"
            className="mt-6 inline-flex text-sm font-semibold text-[#905bf4] transition-colors hover:text-[#4b378c]"
          >
            See the Emirates Stadium project
          </Link>
        </div>
      </RevealBlock>
    </ElectricsSection>
  );
}
