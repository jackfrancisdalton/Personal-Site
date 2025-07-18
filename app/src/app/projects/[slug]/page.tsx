"use client";
import { PROJECTS } from "@/app/data/projects-content";
import DetailsLayout from "@/components/DetailsLayout";
import { SoftwareProject } from "@/types/ContentTypes";
import Link from "next/link";

type Props = { params: { slug: string } };

export default function ProjectDetailsPage({ params }: Props) {
  const project: SoftwareProject | undefined = PROJECTS.find(
    (proj) => proj.slug === params.slug
  );

  if (!project)
    return (
      <div className="text-white text-center p-12">
        Project not found.
        <div className="mt-4">
          <Link href="/projects" className="underline text-blue-200">
            ← All projects
          </Link>
        </div>
      </div>
    );

  return (
    <DetailsLayout
      backHref="/projects"
      image={project.image}
      imageAlt={project.name}
      imageLayoutId={`project-image-${project.slug}`}
      title={project.name}
    >
      <section className="text-white/90 text-lg mb-4">{project.description}</section>
      <div className="flex gap-4 mt-6">
        {project.externalLinks?.map((link) => (
          <a
            key={link.url}
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-4 py-2 bg-blue-700/80 hover:bg-blue-800/80 rounded-xl text-white font-medium transition"
          >
            {link.label}
          </a>
        ))}
      </div>
    </DetailsLayout>
  );
}
