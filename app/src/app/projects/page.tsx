"use client"
import Grid from "@/components/Grid"
import GridCard from "@/components/GridCard"
import { useRouter } from "next/navigation"
import { projects } from "../data/projects"

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
