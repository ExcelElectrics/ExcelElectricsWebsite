import { ElectricsSection } from "@/components/Electrics/ElectricsSection";

type LocationPageTownsProps = {
  county: string;
  towns: string[];
};

export function AreaPageTowns({ county, towns }: LocationPageTownsProps) {
  return (
    <ElectricsSection muted>
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#905bf4] md:text-xs">
            Towns & areas
          </p>
          <h2 className="text-foreground mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
            Towns we cover in {county}
          </h2>
          <p className="text-muted mx-auto mt-3 max-w-2xl text-sm leading-relaxed md:text-base">
            Our electricians attend homes across {county}, including the places listed below. If your
            town is not shown, get in touch and we will confirm coverage for your postcode.
          </p>
        </div>

        <ul className="mt-10 grid grid-cols-2 gap-x-4 gap-y-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-8">
          {towns.map((town) => (
            <li
              key={town}
              className="flex items-center gap-2 border-t border-[#4b378c]/30 pt-3 text-sm font-semibold text-foreground"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-[#905bf4]" aria-hidden />
              {town}
            </li>
          ))}
        </ul>
      </div>
    </ElectricsSection>
  );
}
