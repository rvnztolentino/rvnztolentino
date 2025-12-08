import Link from "next/link"
import PageTransition from "@/components/page-transition"
import FadeIn from "@/components/fade-in"
import { ArrowLeft } from "lucide-react"

export default async function Files() {

  // Placeholder data for abandonware projects
  const files = [
    {
      id: 1,
      title: "File 1",
      link: "https://drive.google.com/",
    },
    {
      id: 2,
      title: "File 2",
      link: "https://drive.google.com/",
    },
    {
      id: 3,
      title: "File 3",
      link: "https://drive.google.com/",
    },
  ]

  return (
    <PageTransition>
      <div className="min-h-screen pt-24 pb-4 px-8 md:px-16 max-w-5xl mx-auto">
        <Link href="/" className="text-black/50 inline-flex items-center gap-2 hover:bg-black/10 rounded-md px-2 py-1 mb-6 transition-colors">
          <ArrowLeft size={16} /> Back to home
        </Link>
        <h1 className="text-4xl font-bold mb-6">Files</h1>
        <FadeIn delay={50} direction="up">
          <div className="space-y-0">
            {files.map((file) => (
              <article key={file.id} className="border-t border-b border-gray-200 py-6">
                <div className="grid items-start md:grid-cols-2">
                  <div className="pr-4">
                      <p className="font-bold text-black/90 md:mb-1 inline-flex group-hover:bg-black/10 rounded-md px-2 py-1 transition-colors">{file.title}</p>
                  </div>
                  <div className="pl-2 md:pl-0 mt-3 md:mt-0">
                    <a href={file.link} className="group block" target="_blank" rel="noopener noreferrer">
                      <p className="text-black/75 text-md hover-underline">{file.link}</p>
                    </a>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </FadeIn>
      </div>
    </PageTransition>
  )
}