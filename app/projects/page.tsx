"use client"

import { useState } from "react"
import Link from "next/link"
import PageTransition from "@/components/page-transition"
import Image from "next/image"
import { ExternalLink, ArrowLeft } from "lucide-react"
import { FaGithub } from "react-icons/fa"
import FadeIn from "@/components/fade-in"
import { CategoryCombobox } from "@/components/ui/category-combobox"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Road Defect Indexing System",
      description: "An automated road defect indexing system using machine learning for detection, classification, and prediction.",
      github: "https://github.com/rvnztolentino/road-defect-indexing",
      preview: "https://github.com/rvnztolentino/road-defect-indexing/releases",
      category: "AI/ML",
      slug: "road-defect-indexing-system",
    },
    {
      id: 2,
      title: "Personal Website",
      description: "A portfolio and personal website designed to highlight my skills, experiences, and achievements.",
      github: "https://github.com/rvnztolentino/rvnztolentino",
      preview: "https://rvnztolentino.vercel.app/",
      category: "Web Apps",
      slug: "personal-website",
    },
    {
      id: 3,
      title: "Camlin Arts & Crafts",
      description: "A website for Camlin Arts & Crafts, featuring range of products like magnetic bookmarks, stickers, keychains, and various designs.",
      github: "https://github.com/rvnztolentino/camlin",
      preview: "https://camlin.vercel.app/",
      category: "Web Apps",
      slug: "camlin-arts-and-crafts",
    },
    {
      id: 4,
      title: "NitroClicker",
      description: "An open-source project featuring a console-based autoclicker designed for efficiency and customization.",
      github: "https://github.com/rvnztolentino/nitroclicker",
      preview: "https://github.com/rvnztolentino/nitroclicker/releases",
      category: "Desktop Apps",
      slug: "nitroclicker",
    },
    {
      id: 5,
      title: "JL Pong",
      description: "A 2-player classic Pong game project utilizing OpenGL for 2D rendering.",
      github: "https://github.com/rvnztolentino/JLPong",
      preview: "https://github.com/rvnztolentino/JLPong/releases",
      category: "Games",
      slug: "jl-pong",
    },
  ]

  const categories = ["All Projects", ...Array.from(new Set(projects.map(p => p.category)))]

  const [selectedCategory, setSelectedCategory] = useState("All Projects")
  const [activeProject, setActiveProject] = useState<number | null>(null)

  // Toggle project overlay on mobile
  const handleToggle = (id: number) => {
    if (activeProject === id) {
      setActiveProject(null)
    } else {
      setActiveProject(id)
    }
  }

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === "All Projects"
    ? projects
    : projects.filter(p => p.category === selectedCategory)

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-16 px-8 md:px-16 max-w-6xl mx-auto">
        <Link
          href="/"
          className="text-black/50 inline-flex items-center gap-2 hover:bg-black/10 rounded-md px-2 py-1 mb-6 transition-colors"
        >
          <ArrowLeft size={16} /> Back to home
        </Link>
        <h1 className="text-4xl font-bold mb-6">Projects</h1>

        {/* Category selector */}
        <FadeIn delay={50} direction="up">
          <div className="mb-8">
            {/* Mobile category view */}
            <div className="block md:hidden">
              <CategoryCombobox
                options={categories.map(c => ({ label: c, value: c }))}
                value={selectedCategory}
                onChange={setSelectedCategory}
                placeholder="Select category"
                className="w-full max-w-xs"
              />
            </div>

            {/* Desktop category view */}
            <div className="hidden md:flex flex-wrap gap-3">
              {categories.map(category => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-4 py-1 rounded-full border transition-colors text-sm
                    ${selectedCategory === category
                      ? "bg-black/90 text-white border-black"
                      : "bg-white text-black/75 border-gray-300 hover:bg-black/10"}
                  `}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={100} direction="up">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <div key={project.id} className="border border-gray-200 rounded-lg overflow-hidden group">
                
                {/* Project Image */}
                <div 
                  className="h-48 bg-gray-100 relative cursor-pointer md:cursor-default"
                  onClick={() => handleToggle(project.id)}
                >
                  <div className="flex items-center justify-center h-full">
                    <Image
                      src={`/images/projects/${project.slug}.jpg`}
                      alt={project.title}
                      width={500}
                      height={500}
                      className="object-cover w-full h-full grayscale transition-transform duration-300 transform"
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
