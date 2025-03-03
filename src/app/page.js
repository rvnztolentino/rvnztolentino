"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import ProductGrid from "./components/ProductCard"
import BlogGrid from "./components/BlogCard"
import ProjectGrid from "./components/ProjectCard"

export default function Home() {
  // Auto-scroll to top once page is opened
      const scrollToTop = () => {
          window.scrollTo({ top: 0, behavior: "smooth" });
      }
  
      useEffect(() => {
          scrollToTop();
      }, []);

  return (
    <div className="min-h-screen flex justify-center pb-16"> {/* DEFAULT SETTING */}
      <div className="w-full px-4 md:px-16"> {/* DEFAULT SETTING */}
        <main className="flex flex-col space-y-5 py-8 font-noto-sans"> {/* DEFAULT SETTING */}
          <Image src="/icons/cube.svg" width={70} height={70} alt="svg" /> {/* DEFAULT SETTING */}
          <h1 className="text-4xl text-dark-gray">Renz Tolentino</h1> {/* DEFAULT SETTING */}
          <p className="border-b border-light-gray-2"></p> {/* DEFAULT SETTING */}

          {/* Intro */}
          <p className="text-md text-dark-gray">
            i&apos;m currently in the process of building and refining this space, deciding on the best content to
            showcase. updates are on the way, stay tuned! 👋
          </p>
          <Image src="/thumbnail/jdm.jpg" width={750} height={250} alt="img" className="rounded-lg shadow-md" />

          <p className="border-b border-light-gray-2 pt-4"></p>
          
          <Tabs defaultValue="store" className="w-full">
            <TabsContent value="store">
              <div className="text-md text-dark-gray space-y-2 mb-4">
                  <p className="text-xl">Digital products</p>
                  <p>Showcasing my products, offerings, and digital creations.<br></br></p>
              </div>
            </TabsContent>

            <TabsContent value="projects">
              <div className="text-md text-dark-gray space-y-2 mb-4">
                  <p className="text-xl">Completed tasks</p>
                  <p>Highlighting my personal and collaborative projects, and experiments.</p>
              </div>
            </TabsContent>

            <TabsContent value="blog">
              <div className="text- text-dark-gray space-y-2 mb-4">
                  <p className="text-xl">Blog posts</p>
                  <p>Documenting my guides, tutorials, personal experiences, and reflections.</p>
              </div>
            </TabsContent>

            <TabsList className="mb-2">
              <TabsTrigger value="store">Store</TabsTrigger>
              <TabsTrigger value="projects">Projects</TabsTrigger>
              <TabsTrigger value="blog">Blog</TabsTrigger>
            </TabsList>

            <TabsContent value="store">
              <ProductGrid />
            </TabsContent>

            <TabsContent value="projects">
              <ProjectGrid />
            </TabsContent>

            <TabsContent value="blog">
              <BlogGrid />
            </TabsContent>
          </Tabs>
        </main>
      </div>
    </div>
  )
}

