import Image from "next/image";
import Link from "next/link";
import type { ProjectData } from "@/components/Projects/projects-data";

type ProjectCardProps = {
  project: ProjectData;
  index: number;
  sizes?: string;
};

/** Same pieces as the services index rows: rounded image, mono number, title, muted copy, text link. */
export function ProjectCard({ project, index, sizes = "(max-width: 768px) 100vw, 33vw" }: ProjectCardProps) {
  const href = `/projects/${project.slug}`;
  return (
    <div className="flex h-full min-w-0 flex-col">
      <Link href={href} className="relative block aspect-[16/10] overflow-hidden rounded-md">
        <Image src={project.cardImage.src} alt={project.cardImage.alt} fill sizes={sizes} className="object-cover" />
      </Link>
      <p className="mt-5 font-mono text-[11px] font-semibold tabular-nums text-[#905bf4]">
        {String(index + 1).padStart(2, "0")}
      </p>
      <h3 className="text-foreground mt-2 text-xl font-semibold tracking-tight">
        <Link href={href} className="transition-colors hover:text-[#905bf4]">
          {project.name}
        </Link>
      </h3>
      <p className="text-muted mt-1 text-xs font-medium">
        {project.category} · {project.location}
      </p>
      <p className="text-muted mt-3 text-sm leading-relaxed">{project.summary}</p>
      <Link
        href={href}
        className="mt-4 inline-flex text-sm font-semibold text-[#905bf4] transition-colors hover:text-[#4b378c]"
      >
        View the project
      </Link>
    </div>
  );
}
