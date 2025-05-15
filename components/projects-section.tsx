"use client"

import { useInView } from "react-intersection-observer"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Github, ExternalLink } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "LawBotics - AI Legal Document Analyzer",
    description:
      "Analyze contracts, detect red flags, chat with contracts using vector embeddings, and generate legal drafts.",
    image: "/lawbotics.jpeg?height=400&width=600",
    technologies: ["React", "Node.js", "MongoDB", "Langchain", "Vector Embeddings"],
    demoLink: "https://law-botics.vercel.app/",
    githubLink: "https://github.com/Nainee99/LawBotics",
  },
  {
    id: 2,
    title: "Fin Wallet - Personal Finance Manager",
    description: "Built for budgeting, tracking expenses, and financial goals.",
    image: "/Finwallet.jpeg?height=400&width=600",
    technologies: ["Next.js", "Express.js", "MongoDB", "Chart.js", "Tailwind CSS"],
    demoLink: "https://finwallet-one.vercel.app",
    githubLink: "https://github.com/AzibMoeen/WalletX",
  },
  {
    id: 3,
    title: "AzStore - Storage-Drive",
    description: "A cloud storage solution for files and documents.",
    image: "image.png/?height=400&width=600",
    technologies: ["React", "Node.js", "Express.js", "MongoDB", "Redux"],
    demoLink: "https://az-store.vercel.app/sign-in",
    githubLink: "https://github.com/AzibMoeen/Storage",
  },
  {
    id: 4,
    title: "Esparda- Ecommerce Platform",
    description: "A full-stack e-commerce platform with user authentication, product management, and payment integration.",
    image: "/placeholder.svg?height=400&width=600",
    technologies: ["Next.js", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
    demoLink: "https://esparda.vercel.app",
    githubLink: "https://github.com/AzibMoeen/Storage",
  },

]

const ProjectCard = ({ project, index, inView }: { project: (typeof projects)[0]; index: number; inView: boolean }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden transition-all duration-700 hover:shadow-lg max-w-md mx-auto w-full ${
        inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="relative h-48 w-full">
        <Image src={project.image || "/placeholder.svg"} alt={project.title} fill className="object-cover" />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{project.title}</h3>
        <p className="text-gray-600 dark:text-gray-300 mb-4">{project.description}</p>
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.map((tech) => (
            <span
              key={tech}
              className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary-100 text-primary-700 dark:bg-primary-900/30 dark:text-primary-300"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="flex gap-3">
          <Button
            asChild
            variant="outline"
            size="sm"
            className="border-primary-500 text-primary-500 hover:bg-primary-50 dark:border-primary-400 dark:text-primary-400 dark:hover:bg-gray-700"
          >
            <Link href={project.githubLink} target="_blank" rel="noopener noreferrer">
              <Github size={16} className="mr-2" />
              GitHub
            </Link>
          </Button>
          <Button asChild size="sm" className="bg-primary-500 hover:bg-primary-600">
            <Link href={project.demoLink} target="_blank" rel="noopener noreferrer">
              <ExternalLink size={16} className="mr-2" />
              Live Demo
            </Link>
          </Button>
        </div>
      </div>
    </div>
  )
}

const ProjectsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="projects" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 max-w-6xl" ref={ref}>
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white relative pb-4 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          My Projects
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary-500"></span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} inView={inView} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProjectsSection
