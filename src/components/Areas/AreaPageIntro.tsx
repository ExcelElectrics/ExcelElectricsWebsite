import { ElectricsSection } from "@/components/Electrics/ElectricsSection";

type LocationPageIntroProps = {
  county: string;
  paragraphs: string[];
};

export function AreaPageIntro({ county, paragraphs }: LocationPageIntroProps) {
  return (
    <ElectricsSection>
      <div className="mx-auto max-w-5xl">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#905bf4] md:text-xs">
          In this area
        </p>
        <h2 className="text-foreground mt-2 max-w-3xl text-2xl font-semibold tracking-tight md:text-3xl">
          Local electricians you can call on in {county}
        </h2>
        <div className="mt-6 space-y-4 md:columns-2 md:gap-10 md:space-y-0 [&_p]:mb-4 [&_p]:break-inside-avoid">
          {paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 48)} className="text-muted text-sm leading-relaxed md:text-[15px] md:leading-7">
              {paragraph}
            </p>
          ))}
        </div>
      </div>
    </ElectricsSection>
  );
}
