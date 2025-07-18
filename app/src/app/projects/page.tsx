"use client"
import Grid from "@/components/Grid"
import GridCard from "@/components/GridCard"
import { useRouter } from "next/navigation"

const projects = [
    {
        slug: "project-1",
        name: "Project One",
        description: "Description of project one.",
        image: "/images/project1.jpg",
    },
    {
        slug: "project-2",
        name: "Project Two",
        description: "Description of project two.",
        image: "/images/project2.jpg",
    },
    {
        slug: "project-3",
        name: "Project Three",
        description: "Description of project three.",
        image: "/images/project3.jpg",
    },
];

export default function ProjectsPage() {
  const router = useRouter()

  return (
    <section>
      <h1 className="text-2xl font-bold mb-6 text-white">Software Projects</h1>
      <Grid>
        {projects.map((project) => (
          <GridCard
            key={project.slug}
            image={project.image}
            title={project.name}
            description={project.description}
            onClick={() => router.push(`/projects/${project.slug}`)}
          />
        ))}
      </Grid>
    </section>
  )
}
