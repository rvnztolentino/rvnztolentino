import Image from "next/image"
import Link from "next/link"
import PageTransition from "@/components/page-transition"
import FadeIn from "@/components/fade-in"
import SkillProficiency from "@/components/skill-proficiency"
import ToolsTechnologies from "@/components/tools-technologies"
import { ArrowLeft } from "lucide-react"

export default function About() {
  const descriptions = [
    {
      id: 0,
      text: `I'm part of a research team developing a road defect indexing system using a 
      hybrid machine learning approach. My work involves building the detection pipeline 
      with YOLOv10 and creating an interactive map to display defect locations.`,
    }
  ]

  const skills = [
    { name: "Full-Stack Development", percent: 80 },
    { name: "Machine Learning", percent: 45 },
    { name: "Software Development", percent: 75 },
    { name: "Computer Vision", percent: 40 },
    { name: "Deployment & Version Control", percent: 60 },
  ]

  const tools = [
    "Python",
    "Next.js",
    "TypeScript",
    "C++",
    "GitHub",
  ]

  return (
    <PageTransition>
      <div className="min-h-screen pt-28 px-8 md:px-16 max-w-5xl mx-auto">
      <Link href="/" className="text-black/50 flex items-center gap-2 hover:underline mb-6">
        <ArrowLeft size={16} /> Back to home
      </Link>
      <div className="md:flex md:items-start md:space-x-12 pb-16 md:-mb-6">
        <div className="md:w-1/2">
          <h1 className="text-4xl font-bold mb-4">About</h1>
          <FadeIn delay={50} direction="up">
          <p className="text-black/60 mb-6">
            Hey, I’m Renz.
          </p>
          </FadeIn>
          <FadeIn delay={100} direction="up">
          <p className="text-black/60 mb-6">
            I&apos;m currently a junior computer science undergraduate and software engineer.
          </p>
          </FadeIn>
          <FadeIn delay={150} direction="up">
          <p className="text-black/60 mb-6 justify">
            {descriptions[0].text}
          </p>
          </FadeIn>
        </div>
        <FadeIn delay={150} direction="up">
        <div className="aspect-square">
          <Image
            src="/images/aboutme.jpg"
            alt="image"
            width={432}
            height={432}
            className="object-cover w-[350px] h-[350px] rounded-md shadow-lg"
          />
        </div>
        </FadeIn>
      </div>

        {/* Skills Section */}
        <FadeIn delay={200} direction="up">
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-2">
              Skills & <span className="italic">Expertise</span>
            </h2>

            <p className="text-black/60 mb-8">
              With years of experience in development, I&apos;ve honed my skills to deliver exceptional digital
              experiences.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <SkillProficiency skills={skills} />
              <ToolsTechnologies tools={tools} />
            </div>
          </div>
        </FadeIn>
      </div>
    </PageTransition>
  )
}
