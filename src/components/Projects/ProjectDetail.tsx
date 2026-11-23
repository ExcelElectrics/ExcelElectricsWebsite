import Image from "next/image";
import { ElectricsSection } from "@/components/Electrics/ElectricsSection";
import { ServiceClosingCta } from "@/components/Electrics/ServiceLanding/ServiceClosingCta";
import { ServiceProcess } from "@/components/Electrics/ServiceLanding/ServiceProcess";
import { CaseStudyDownload } from "@/components/Projects/CaseStudyDownload";
import { ProjectCard } from "@/components/Projects/ProjectCard";
import type { ProjectData } from "@/components/Projects/projects-data";

const eyebrowClass = "text-[11px] font-semibold uppercase tracking-[0.18em] text-[#905bf4] md:text-xs";
const h2Class = "text-foreground mt-2 text-2xl font-semibold tracking-tight md:text-3xl";
const bodyClass = "text-muted text-sm leading-relaxed md:text-[15px] md:leading-7";

function SectionHeader({ eyebrow, title, lead }: { eyebrow: string; title: string; lead?: string }) {
  return (
    <div className="mx-auto max-w-3xl text-center">
      <p className={eyebrowClass}>{eyebrow}</p>
      <h2 className={h2Class}>{title}</h2>
      {lead ? <p className="text-muted mx-auto mt-3 max-w-2xl text-sm leading-relaxed md:text-base">{lead}</p> : null}
    </div>
  );
}

export function ProjectOverview({ project }: { project: ProjectData }) {
  return (
    <ElectricsSection>
      <SectionHeader eyebrow="Project overview" title="What we did" />

      <div className="mx-auto mt-8 max-w-5xl space-y-4 md:columns-2 md:gap-10 md:space-y-0 [&_p]:mb-4 [&_p]:break-inside-avoid">
        {project.overview.map((paragraph) => (
          <p key={paragraph.slice(0, 40)} className={bodyClass}>
            {paragraph}
          </p>
        ))}
      </div>

      <dl className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-x-10 gap-y-5 border-t border-[var(--border)] pt-8 sm:grid-cols-2 lg:grid-cols-4">
        {project.facts.map((fact) => (
          <div key={fact.label} className="min-w-0">
            <dt className="font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#905bf4]">{fact.label}</dt>
            <dd className="text-foreground mt-1 text-sm font-medium leading-snug">{fact.value}</dd>
          </div>
        ))}
      </dl>

      <ul className="mx-auto mt-8 grid max-w-5xl grid-cols-1 gap-6 border-t border-[var(--border)] pt-8 text-center sm:grid-cols-3">
        {project.stats.map((stat) => (
          <li key={stat.label}>
            <p className="text-3xl font-semibold tracking-tight text-[#905bf4] md:text-4xl">{stat.value}</p>
            <p className="text-muted mt-1 text-sm">{stat.label}</p>
          </li>
        ))}
      </ul>
    </ElectricsSection>
  );
}

export function ProjectSteps({ project }: { project: ProjectData }) {
  return (
    <>
      <ServiceProcess eyebrow="How we delivered it" title="Step by step" steps={project.steps} />
      {project.highlight ? (
        <ElectricsSection>
          <SectionHeader eyebrow="Background" title={project.highlight.heading} />
          <div className="mx-auto mt-8 max-w-5xl space-y-4 md:columns-2 md:gap-10 md:space-y-0 [&_p]:mb-4 [&_p]:break-inside-avoid">
            {project.highlight.body.map((paragraph) => (
              <p key={paragraph.slice(0, 40)} className={bodyClass}>
                {paragraph}
              </p>
            ))}
          </div>
        </ElectricsSection>
      ) : null}
    </>
  );
}

export function ProjectGallery({ project }: { project: ProjectData }) {
  const hasGallery = project.gallery.length > 0;
  const hasBeforeAfter = Boolean(project.beforeAfter?.length);
  if (!hasGallery && !hasBeforeAfter) return null;

  return (
    <ElectricsSection>
      <SectionHeader
        eyebrow={hasBeforeAfter ? "Before & after" : "On site"}
        title={hasBeforeAfter ? "The doorsets, before and after" : "Photos from the job"}
      />

      {hasGallery ? (
        <ul className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {project.gallery.map((image) => (
            <li key={image.src} className="min-w-0">
              <figure>
                <div className="relative aspect-[16/10] overflow-hidden rounded-md">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                {image.caption ? <figcaption className="text-muted mt-2 text-sm">{image.caption}</figcaption> : null}
              </figure>
            </li>
          ))}
        </ul>
      ) : null}

      {hasBeforeAfter ? (
        <ul className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-8 md:grid-cols-3">
          {project.beforeAfter!.map((pair) => (
            <li key={pair.caption} className="min-w-0">
              <figure>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { label: "Before", image: pair.before },
                    { label: "After", image: pair.after },
                  ].map(({ label, image }) => (
                    <div key={label}>
                      <div className="relative aspect-[4/5] overflow-hidden rounded-md">
                        <Image src={image.src} alt={image.alt} fill sizes="(max-width: 768px) 50vw, 17vw" className="object-cover" />
                      </div>
                      <p className="mt-1.5 font-mono text-[11px] font-semibold uppercase tracking-[0.14em] text-[#905bf4]">
                        {label}
                      </p>
                    </div>
                  ))}
                </div>
                <figcaption className="text-muted mt-2 text-sm">{pair.caption}</figcaption>
              </figure>
            </li>
          ))}
        </ul>
      ) : null}
    </ElectricsSection>
  );
}

export function ProjectClosing({ project, others }: { project: ProjectData; others: ProjectData[] }) {
  return (
    <>
      {project.pdf ? (
        <ElectricsSection>
          <CaseStudyDownload projectName={project.name} pdfHref={project.pdf.href} pdfFilename={project.pdf.filename} />
        </ElectricsSection>
      ) : null}

      {others.length ? (
        <ElectricsSection>
          <SectionHeader eyebrow="More projects" title="Other recent work" />
          <ul className="mx-auto mt-10 grid max-w-5xl grid-cols-1 gap-10 md:grid-cols-2 md:gap-8">
            {others.map((other, index) => (
              <li key={other.slug}>
                <ProjectCard project={other} index={index} sizes="(max-width: 768px) 100vw, 50vw" />
              </li>
            ))}
          </ul>
        </ElectricsSection>
      ) : null}

      <ServiceClosingCta
        title="Got a job you'd like a hand with?"
        lead="Big or small, just tell us what's going on and your postcode. We'll come back with friendly advice and a clear, fixed price, usually the same day."
        primaryLabel="Tell us about your job"
        formHref="/contact#enquiry-form"
        majorSeam
      />
    </>
  );
}
