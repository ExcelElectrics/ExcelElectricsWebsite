import Link from "next/link";
import { ElectricsSection } from "@/components/Electrics/ElectricsSection";
import { LOCATION_SERVICE_LINKS } from "@/components/Areas/areas-data";

type LocationPageServicesProps = {
  county: string;
};

export function AreaPageServices({ county }: LocationPageServicesProps) {
  return (
    <ElectricsSection>
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#905bf4] md:text-xs">
            What we do here
          </p>
          <h2 className="text-foreground mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
            Our services in {county}
          </h2>
          <p className="text-muted mx-auto mt-3 max-w-2xl text-sm leading-relaxed md:text-base">
            Every service below is available throughout {county}, with the same fixed-price approach
            and tidy finish. Pick a line of work for the full detail, or send one enquiry and we will
            advise what fits.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-5 lg:gap-5">
          {LOCATION_SERVICE_LINKS.map((service) => (
            <li key={service.href} className="flex h-full flex-col border-t border-[#4b378c]/30 pt-4 text-left">
              <h3 className="text-foreground text-[15px] font-semibold leading-snug tracking-tight md:text-base">
                {service.label}
              </h3>
              <p className="text-muted mt-2 flex-1 text-sm leading-relaxed">{service.blurb}</p>
              <Link
                href={service.href}
                className="mt-3 inline-flex text-sm font-semibold text-[#905bf4] transition-colors hover:text-[#4b378c]"
              >
                View full detail
              </Link>
            </li>
          ))}
        </ul>

        <div className="mt-10 flex justify-center">
          <Link
            href="/services"
            className="text-sm font-semibold text-[#905bf4] transition-colors hover:text-[#4b378c]"
          >
            View all services
          </Link>
        </div>
      </div>
    </ElectricsSection>
  );
}
