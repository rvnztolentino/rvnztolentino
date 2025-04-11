"use client"

import Link from "next/link"
import Image from "next/image"
import PageTransition from "@/components/page-transition"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import FadeIn from "@/components/fade-in"
import { useState, useEffect } from "react"

export default function Home() {
  const [currentNameIndex, setCurrentNameIndex] = useState(0);
  const [fadeState, setFadeState] = useState("fade-in");

  const names = [
    { src: "/title/renztolentino_en.svg", alt: "Renz Tolentino" },
    { src: "/title/renztolentino_jp.svg", alt: "レンツ トレンティーノ" },
    { src: "/title/renztolentino_cn.svg", alt: "任茲 托倫蒂諾" },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setFadeState("fade-out");
      setTimeout(() => {
        setCurrentNameIndex((prevIndex) => (prevIndex + 1) % names.length);
        setFadeState("fade-in");
      }, 1000);
      
    }, 3000);
    
    return () => clearInterval(interval);
  }, [names.length]);

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col items-center pt-24 md:pt-[150px] px-4 
      justify-center lg:justify-start text-center">
        {/* Profile picture with status */}
        <div className="relative mb-12">
          <div className="w-32 h-32 rounded-full border-4 border-white shadow-lg overflow-hidden">
            <Image
              src="/images/renz.jpg"
              alt="Profile"
              width={128}
              height={128}
              className="object-cover"
            />
          </div>

          {/* Status badge */}
          <div className="absolute -right-12 top-4 bg-white px-3 py-1 rounded-full shadow-md text-xs flex items-center">
            <span>yo, i&apos;m renz</span>
            <span className="ml-1">👋</span>
          </div>
        </div>

        {/* Main content */}
        <FadeIn delay={50} direction="up">
          <div className="text-center max-w-2xl mb-8">
          <h1 className="text-3xl md:text-5xl font-bold leading-tight">
            <span 
              className={`text-black transition-opacity duration-1000 ${fadeState === "fade-in" ? "opacity-100" : "opacity-0"}`}
              style={{ display: 'inline-block' }}
            >
              <Image
                src={names[currentNameIndex].src}
                alt={names[currentNameIndex].alt}
                width={432}
                height={68}
                className="rounded-lg"
              />
            </span>
          </h1>
            <p className="text-md text-gray-600 mb-8 max-w-xs md:max-w-lg mx-auto">
              Renz is a junior undergraduate computer science student, a software engineer, and an aspiring AI engineer with a passion for innovation and technology.
            </p>
          </div>
        </FadeIn>

        {/* CTA Button */}
        <FadeIn delay={100} direction="up">
          <div className="flex flex-wrap gap-4">
            <Link href="/about">
              <Button variant="outline" className="rounded-full px-8 md:py-4 h-auto flex items-center text-black/95 border-black/95 hover:bg-black/95 hover:text-white transition-colors">
                About Me
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="rounded-full px-8 md:py-4 h-auto gap-2 flex items-center bg-black/95 text-white hover:bg-black/60">
                Contact
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {[
                '/logos/github.svg',
                '/logos/next.svg',
                '/logos/netcore.svg',
                '/logos/tensorflow.svg',
              ].map((src, i) => (
                <div key={i}>
                  <Image
                    src={src}
                    height={50}
                    width={150}
                    alt={`Logo ${i + 1}`}
                    className="h-12 w-36 object-contain hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </div>
          </section>
        </FadeIn>

        {/* Services Section */}
        <FadeIn delay={100}>
          <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <FadeIn delay={0} direction="up">
                <div className="bg-black/95 p-8 rounded-sm">
                  <h3 className="text-xl font-medium mb-4 text-white">PROJECTS</h3>
                  <p className="text-white/70 mb-6">
                    These are the projects I’ve worked on, built from the ground up, using different tools, languages, and frameworks to create practical solutions.
                  </p>
                  <Link href="/about" className="text-white text-sm flex items-center gap-2 hover:underline">
                    MORE <ArrowRight size={14} />
                  </Link>
                </div>
              </FadeIn>
              <FadeIn delay={50} direction="up">
                <div className="bg-black/95 p-8 rounded-sm">
                  <h3 className="text-xl font-medium mb-4 text-white">BLOG</h3>
                  <p className="text-white/70 mb-6">
                  This is where I share what I’ve learned, write about tools and techniques I’ve used, and explore topics that interest me in tech.
                  </p>
                  <Link href="/blog" className="text-white text-sm flex items-center gap-2 hover:underline">
                    MORE <ArrowRight size={14} />
                  </Link>
                </div>
              </FadeIn>
              <FadeIn delay={100} direction="up">
                <div className="bg-black/95 p-8 rounded-sm">
                  <h3 className="text-xl font-medium mb-4 text-white">STORE</h3>
                  <p className="text-white/70 mb-6">
                    A collection of tools, templates, and products I’ve designed and developed, made available for anyone to use or purchase with ease.
                  </p>
                  <Link href="/store" className="text-white text-sm flex items-center gap-2 hover:underline">
                    MORE <ArrowRight size={14} />
                  </Link>
                </div>
              </FadeIn>
            </div>
          </section>
        </FadeIn>
      </div>
    </PageTransition>
  )
}