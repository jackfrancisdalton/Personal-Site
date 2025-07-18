"use client"
import Grid from "@/components/Grid"
import GridCard from "@/components/GridCard"
import { useRouter } from "next/navigation"
import { PROJECTS } from "../data/projects-content"

export default function ProjectsPage() {
  const router = useRouter()

  return (
    <section>
      <h1 className="text-2xl font-bold mb-6 text-white">Software Projects</h1>
      <Grid>
        {PROJECTS.map((project) => (
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
