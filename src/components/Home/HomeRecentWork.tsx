"use client";

import Link from "next/link";
import { ElectricsSection } from "@/components/Electrics/ElectricsSection";
import { RevealBlock } from "@/components/Electrics/ServiceLanding/useRevealInView";
import { ProjectCard } from "@/components/Projects/ProjectCard";
import { projects } from "@/components/Projects/projects-data";

/** Home page: a selection of projects, styled like the other home sections. */
export function HomeRecentWork() {
  return (
    <ElectricsSection id="recent-work">
      <RevealBlock variant="fade-up" className="mx-auto max-w-4xl text-center">
        <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-[#905bf4] md:text-xs">Our projects</p>
        <h2 className="text-foreground mt-2 text-2xl font-semibold tracking-tight md:text-3xl">
          A selection of our recent work
        </h2>
        <p className="text-muted mx-auto mt-3 max-w-4xl text-sm leading-relaxed md:text-base">
          From residents&apos; front doors to busy forecourts, every job gets the same tidy, professional approach.
        </p>
      </RevealBlock>

      <ul className="mx-auto mt-10 grid max-w-7xl grid-cols-1 gap-10 md:mt-12 md:grid-cols-3 md:gap-8">
        {projects.map((project, index) => (
          <RevealBlock key={project.slug} as="li" variant="fade-up">
            <ProjectCard project={project} index={index} />
          </RevealBlock>
        ))}
      </ul>

      <div className="mt-10 flex justify-center md:mt-12">
        <RevealBlock variant="rise">
          <Link
            href="/projects"
            className="inline-flex items-center justify-center rounded-md bg-[#905bf4] px-6 py-3 text-sm font-semibold text-white shadow-[0_12px_24px_-14px_rgba(75,1,184,0.92)] transition hover:bg-[#905bf4] hover:text-white motion-safe:hover:-translate-y-1 motion-safe:active:translate-y-0"
          >
            View all projects
          </Link>
        </RevealBlock>
      </div>
    </ElectricsSection>
  );
}
