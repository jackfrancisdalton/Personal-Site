"use client"
import Grid from "@/components/Grid"
import GridCard from "@/components/GridCard"
import { useRouter } from "next/navigation"

const projects = [
    {
        slug: "gitwit",
        name: "GitWit",
        description: "Description of project one.",
        image: "/images/project1.jpg",
    },
    {
        slug: "monzo-dashboard",
        name: "Monzo Dashboard",
        description: "Description of project two.",
        image: "/images/project2.jpg",
    },
    {
        slug: "CSI (Clip Search Investigator)",
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
