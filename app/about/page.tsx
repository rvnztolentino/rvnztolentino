import Image from "next/image"
import Link from "next/link"
import PageTransition from "@/components/page-transition"
import FadeIn from "@/components/fade-in"
import { ArrowLeft } from "lucide-react"

export default function About() {
  const descriptions = [
    {
      id: 0,
      text: `Renz is part of a research team developing a Comprehensive Road Defect Indexing System 
      that utilizes a hybrid machine learning approach. His contributions focus on creating an automated 
      pipeline for detecting, classifying, and predicting road defects. Using YOLOv10 for object 
      detection and advanced machine learning techniques, he also developed the mapping system, which 
      lets users view the locations of road defects on an interactive map.`,
    }
  ]

  return (
    <PageTransition>
      <div className="min-h-screen pt-28 px-8 md:px-16 max-w-5xl mx-auto">
      <Link href="/" className="text-black/50 flex items-center gap-2 hover:underline mb-6">
        <ArrowLeft size={16} /> Back to home
      </Link>
      <div className="md:flex md:items-start md:space-x-12 pb-16 md:pb-8">
        <div className="md:w-1/2 text-justify">
          <h1 className="text-4xl font-bold mb-8">About</h1>
          <div className="w-8 h-1 bg-black mb-6"></div>
          <FadeIn delay={50} direction="up">
          <p className="text-gray-600 mb-6">
            Renz is a junior undergraduate in computer science, a software engineer, and an 
            aspiring AI engineer passionate about technology and innovation. 
          </p>
          </FadeIn>
          <FadeIn delay={100} direction="up">
          <p className="text-gray-600 mb-6 justify">
            {descriptions[0].text}
          </p>
          <p className="text-gray-600 mb-12">
            {/*descriptions[1].text*/}
          </p>
          </FadeIn>
        </div>
        <FadeIn delay={150} direction="up">
        <div className="aspect-[4/5] mt-4">
          <Image
            src="/images/aboutme.jpg"
            alt="image"
            width={432}
            height={540}
            className="object-cover w-[400px] h-[500px] rounded-lg shadow-lg"
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

            <p className="text-gray-600 mb-12">
              With years of experience in web design and development, I&apos;ve honed my skills to deliver exceptional digital
              experiences.
            </p>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Skill Proficiency */}
              <div>
                <h3 className="text-xl font-bold mb-6">Skill Proficiency</h3>

                <div className="space-y-6">
                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Web Design</span>
                      <span>95%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full">
                      <div className="h-2 bg-black rounded-full" style={{ width: "95%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Frontend Development</span>
                      <span>90%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full">
                      <div className="h-2 bg-black rounded-full" style={{ width: "90%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span>Backend Development</span>
                      <span>85%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full">
                      <div className="h-2 bg-black rounded-full" style={{ width: "85%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span>UI/UX Design</span>
                      <span>88%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full">
                      <div className="h-2 bg-black rounded-full" style={{ width: "88%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span>SEO Optimization</span>
                      <span>80%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full">
                      <div className="h-2 bg-black rounded-full" style={{ width: "80%" }}></div>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between mb-2">
                      <span>E-commerce Development</span>
                      <span>92%</span>
                    </div>
                    <div className="h-2 w-full bg-gray-200 rounded-full">
                      <div className="h-2 bg-black rounded-full" style={{ width: "92%" }}></div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Tools & Technologies */}
              <div>
                <h3 className="text-xl font-bold mb-6">Tools & Technologies</h3>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-lg border border-gray-200">HTML5 & CSS3</div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">TypeScript</div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">React & Next.js</div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">Node.js</div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">Figma & Adobe XD</div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">Tailwind CSS</div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">WordPress</div>
                  <div className="bg-white p-4 rounded-lg border border-gray-200">Shopify</div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </PageTransition>
  )
}
