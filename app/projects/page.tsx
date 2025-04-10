"use client"

import { useState } from "react"
import Link from "next/link"
import PageTransition from "@/components/page-transition"
import Image from "next/image"
import { ExternalLink, ArrowLeft } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import FadeIn from "@/components/fade-in"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Road Defect Indexing System",
      description: "An automated road defect indexing system using machine learning for detection, classification, and prediction.",
      github: "https://github.com/rvnztolentino/road-defect-indexing",
      preview: "/",
    },
    {
      id: 2,
      title: "Portfolio Website",
      description: "A portfolio and personal website designed to highlight my skills, experiences, and achievements.",
      github: "https://github.com/rvnztolentino/rvnztolentino",
      preview: "https://rvnztolentino.vercel.app/",
    },
    {
      id: 3,
      title: "Camlin Arts & Crafts",
      description: "A website for Camlin Arts & Crafts, featuring range of products like magnetic bookmarks, stickers, keychains, and various designs.",
      github: "https://github.com/rvnztolentino/camlin-vanilla",
      preview: "https://camlin-arts-crafts.vercel.app/",
    },
    {
      id: 4,
      title: "NitroClicker",
      description: "An open-source project featuring a console-based autoclicker designed for efficiency and customization.",
      github: "https://github.com/rvnztolentino/nitroclicker",
      preview: "https://github.com/rvnztolentino/nitroclicker/releases",
    },
    {
      id: 5,
      title: "JL Pong",
      description: "A 2-player classic Pong game project utilizing OpenGL for 2D rendering.",
      github: "https://github.com/rvnztolentino/JLPong",
      preview: "https://github.com/rvnztolentino/JLPong/releases",
    },
  ]

  const [activeProject, setActiveProject] = useState<number | null>(null)
  const handleToggle = (id: number) => {
    if (activeProject === id) {
      setActiveProject(null) // close if same card tapped again
    } else {
      setActiveProject(id)
    }
  }

  return (
    <PageTransition>
      <div className="min-h-screen pt-28 pb-4 px-8 md:px-16 max-w-6xl mx-auto">
        <Link href="/" className="text-black/50 flex items-center gap-2 hover:underline mb-6">
          <ArrowLeft size={16} /> Back to home
        </Link>
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <div className="w-8 h-1 bg-black mb-6"></div>

        <FadeIn delay={50} direction="up">
          <p className="text-gray-600 mb-8">
            Highlighting my personal and collaborative projects, and experiments.
          </p>
        </FadeIn>

        <FadeIn delay={100} direction="up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div key={project.id} className="border border-gray-200 rounded-lg overflow-hidden group">
                
                {/* Project Image */}
                <div 
                  className="h-48 bg-gray-100 relative cursor-pointer md:cursor-default"
                  onClick={() => handleToggle(project.id)}
                >
                  <div className="flex items-center justify-center h-full">
                    {/* <span className="text-gray-400">Project Image</span> */}
                    <Image
                      src={`/projects/project_${project.id}.jpg`}
                      alt={project.title}
                      width={432}
                      height={432}
                      className="object-cover w-full h-full transition-transform duration-300 transform"
                    />
                  </div>

                  {/* Overlay */}
                  <div className={`
                    absolute inset-0 bg-black/60 flex items-center justify-center gap-4
                    transition-opacity duration-300
                    ${activeProject === project.id ? 'opacity-100' : 'opacity-0'} 
                    md:opacity-0 md:group-hover:opacity-100
                  `}>
                    <a href={project.github} target="_blank" rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <FaGithub className="h-5 w-5" />
                    </a>
                    <a href={project.preview} target="_blank" rel="noopener noreferrer"
                      className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h2 className="text-xl font-bold mb-2">{project.title}</h2>
                  <p className="text-gray-600">{project.description}</p>
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </div>
    </PageTransition>
  )
}
