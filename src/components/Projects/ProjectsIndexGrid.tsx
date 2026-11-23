"use client";

import Image from "next/image";
import Link from "next/link";
import { ElectricsSection } from "@/components/Electrics/ElectricsSection";
import { RevealBlock } from "@/components/Electrics/ServiceLanding/useRevealInView";
import { projects } from "@/components/Projects/projects-data";

/** /projects list — mirrors the alternating rows on /services. */
export function ProjectsIndexGrid() {
  return (
    <ElectricsSection majorSeam>
      <RevealBlock variant="fade-up" className="mx-auto max-w-3xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#905bf4] md:text-xs">
          Recent projects
        </p>
        <h2 className="text-foreground mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
          The same care, whatever the size
        </h2>
        <p className="text-muted mx-auto mt-3 max-w-2xl text-sm leading-relaxed md:text-base">
          Open any project to see how we approached it, with photos from site.
        </p>
      </RevealBlock>

      <ul className="mx-auto mt-12 max-w-7xl space-y-12 md:space-y-14">
        {projects.map((project, index) => {
          const imageFirst = index % 2 === 0;
          const href = `/projects/${project.slug}`;
          return (
            <RevealBlock
              key={project.slug}
              as="li"
              variant="fade-up"
              className="grid items-center gap-8 lg:grid-cols-2 lg:gap-12"
            >
              <Link
                href={href}
                className={`relative aspect-[16/10] overflow-hidden rounded-md ${imageFirst ? "lg:order-1" : "lg:order-2"}`}
              >
                <Image
                  src={project.cardImage.src}
                  alt={project.cardImage.alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </Link>

              <div className={imageFirst ? "lg:order-2" : "lg:order-1"}>
                <p className="font-mono text-[11px] font-semibold tabular-nums text-[#905bf4]">
                  {String(index + 1).padStart(2, "0")}
                </p>
                <h3 className="text-foreground mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
                  <Link href={href} className="transition-colors hover:text-[#905bf4]">
                    {project.name}
                  </Link>
                </h3>
                <p className="text-muted mt-1 text-sm font-medium">
                  {project.category} · {project.location} · {project.year}
                </p>
                <p className="text-muted mt-3 max-w-xl text-sm leading-relaxed md:text-base">{project.summary}</p>
                <Link
                  href={href}
                  className="mt-5 inline-flex text-sm font-semibold text-[#905bf4] transition-colors hover:text-[#4b378c]"
                >
                  View the full project
                </Link>
              </div>
            </RevealBlock>
          );
        })}
      </ul>
    </ElectricsSection>
  );
}
