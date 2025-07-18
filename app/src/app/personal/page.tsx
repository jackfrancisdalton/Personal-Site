"use client"
import Grid from "@/components/Grid"
import GridCard from "@/components/GridCard"
import { useRouter } from "next/navigation"

const projects = [
    {
        slug: "Home Automation System",
        name: "home-automation",
        description: "Description of project one.",
        image: "/images/project1.jpg",
    },
    {
        slug: "Pallet Table DIY",
        name: "pallet-table",
        description: "Description of project two.",
        image: "/images/project2.jpg",
    },
    {
        slug: "Balcony DIY",
        name: "balcony-diy",
        description: "Description of project three.",
        image: "/images/project3.jpg",
    },
    {
        slug: "Music Projects",
        name: "balcony-diy",
        description: "Description of project three.",
        image: "/images/project3.jpg",
    },
    {
        slug: "French Certifications",
        name: "frech-certiciations",
        description: "Description of project three.",
        image: "/images/project3.jpg",
    },
];

export default function PersonalPage() {
  const router = useRouter()

  return (
    <section>
      <h1 className="text-2xl font-bold mb-6 text-white">Personal Projects</h1>
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
