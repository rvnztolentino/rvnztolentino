import PageTransition from "@/components/page-transition"
import { Github, ExternalLink } from "lucide-react"
import FadeIn from "@/components/fade-in"

export default function Projects() {
  const projects = [
    {
      id: 1,
      title: "Summer Collection 2023",
      description: "Our latest summer collection featuring lightweight fabrics and bold colors.",
      github: "https://github.com/username/summer-collection",
      preview: "https://example.com/summer-collection",
    },
    {
      id: 2,
      title: "Sustainable Fashion Initiative",
      description: "A project focused on creating eco-friendly fashion using recycled materials.",
      github: "https://github.com/username/sustainable-fashion",
      preview: "https://example.com/sustainable-fashion",
    },
    {
      id: 3,
      title: "Artist Collaboration Series",
      description: "Limited edition pieces created in collaboration with contemporary artists.",
      github: "https://github.com/username/artist-collab",
      preview: "https://example.com/artist-collab",
    },
    {
      id: 4,
      title: "Fashion Tech Innovation",
      description: "Exploring the intersection of technology and fashion with smart fabrics.",
      github: "https://github.com/username/fashion-tech",
      preview: "https://example.com/fashion-tech",
    },
  ]

  return (
    <PageTransition>
      <div className="min-h-screen pt-28 pb-4 px-8 md:px-16 max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8">Projects</h1>
        <div className="w-8 h-1 bg-black mb-6"></div>
        <FadeIn delay={50} direction="up">
        <p className="text-gray-600 mb-8">Highlighting my personal and collaborative projects, and experiments.</p>
        </FadeIn>

        <FadeIn delay={100} direction="up">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="border border-gray-200 rounded-lg overflow-hidden group">
              {/* Project Image with Hover Buttons */}
              <div className="h-48 bg-gray-100 relative">
                <div className="flex items-center justify-center h-full">
                  <span className="text-gray-400">Project Image</span>
                </div>

                {/* Hover Buttons */}
                <div className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <Github className="h-5 w-5" />
                    <span className="sr-only">GitHub</span>
                  </a>
                  <a
                    href={project.preview}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 bg-white rounded-full hover:bg-gray-100 transition-colors"
                  >
                    <ExternalLink className="h-5 w-5" />
                    <span className="sr-only">Preview</span>
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
