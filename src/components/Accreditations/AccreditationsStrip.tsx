import Image from "next/image";
import { ElectricsSection } from "@/components/Electrics/ElectricsSection";
import { ACCREDITATIONS, NICEIC_SCOPES } from "@/components/Accreditations/accreditations";

type AccreditationsStripProps = {
  /** "full" adds what each accreditation means; "logos" is a compact row. */
  variant?: "full" | "logos";
  eyebrow?: string;
  title?: string;
  lead?: string;
  majorSeam?: boolean;
};

function LogoTile({ src, width, height, alt }: { src: string; width: number; height: number; alt: string }) {
  return (
    <div className="flex h-24 items-center justify-center rounded-md bg-white px-4 py-3 ring-1 ring-slate-200/80">
      <Image src={src} alt={alt} width={width} height={height} sizes="180px" className="h-full w-auto max-w-full object-contain" />
    </div>
  );
}

export function AccreditationsStrip({
  variant = "full",
  eyebrow = "Accredited & checked",
  title = "Qualified, certified and independently audited",
  lead = "You don't have to take our word for it. These bodies check our work, our people and our paperwork.",
  majorSeam = false,
}: AccreditationsStripProps) {
  return (
    <ElectricsSection majorSeam={majorSeam}>
      <div className="mx-auto max-w-3xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#905bf4] md:text-xs">{eyebrow}</p>
        <h2 className="text-foreground mt-2 text-2xl font-semibold tracking-tight md:text-3xl">{title}</h2>
        {lead ? <p className="text-muted mx-auto mt-3 max-w-2xl text-sm leading-relaxed md:text-base">{lead}</p> : null}
      </div>

      {variant === "logos" ? (
        <ul className="mx-auto mt-10 grid max-w-4xl grid-cols-2 gap-4 sm:grid-cols-4">
          {ACCREDITATIONS.map((item) => (
            <li key={item.name}>
              <LogoTile {...item.logo} />
            </li>
          ))}
        </ul>
      ) : (
        <>
          <ul className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {ACCREDITATIONS.map((item) => (
              <li key={item.name} className="min-w-0">
                <LogoTile {...item.logo} />
                <h3 className="text-foreground mt-4 text-base font-semibold">{item.name}</h3>
                <p className="mt-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#905bf4]">{item.covers}</p>
                <p className="text-muted mt-2 text-sm leading-relaxed">{item.detail}</p>
              </li>
            ))}
          </ul>

          <div className="mx-auto mt-10 max-w-5xl border-t border-[var(--border)] pt-8">
            <p className="text-foreground text-center text-sm font-semibold">Our NICEIC certification covers</p>
            <dl className="mt-5 grid grid-cols-1 gap-x-10 gap-y-5 text-center sm:grid-cols-3">
              {NICEIC_SCOPES.map((scope) => (
                <div key={scope.number} className="min-w-0">
                  <dt className="text-foreground text-sm font-medium leading-snug">{scope.name}</dt>
                  <dd className="text-muted mt-1 text-sm leading-snug">{scope.covers}</dd>
                  <dd className="mt-1 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#905bf4]">
                    {scope.number}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </>
      )}
    </ElectricsSection>
  );
}
