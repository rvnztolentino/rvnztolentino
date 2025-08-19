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
    { src: "/title/renztolentino_jp.svg", alt: "レンツ トレンティーノ" }
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
            <p className="text-md text-black/55 mb-8 max-w-xs md:max-w-lg mx-auto font-normal">
              Full-Stack Developer · Cloud Engineer
            </p>
          </div>
        </FadeIn>

        {/* CTA Button */}
        <FadeIn delay={100} direction="up">
          <div className="flex flex-wrap gap-4">
            <Link href="/about">
              <Button variant="outline" className="rounded-full px-12 md:py-4 h-auto flex items-center text-black/75 border-black/75 hover:bg-black/75 hover:text-white transition-colors">
                About
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="rounded-full px-8 md:py-4 h-auto gap-2 flex items-center bg-black/75 border border-black/75 text-white hover:bg-white hover:text-black/75 transition-colors">
                Contact
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </FadeIn>

        {/* <FadeIn delay={200}>
          <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center justify-items-center">
              {[
                '/logos/github.svg',
                '/logos/next.svg',
                '/logos/tensorflow.svg',
                '/logos/docker-logo-blue.svg',
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
        </FadeIn> */}

        {/* Services Section */}
        <FadeIn delay={100}>
          <section className="pt-8 md:pt-24 pb-0 md:pb-4 px-4 sm:px-6 lg:px-8 max-w-screen-xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8 text-left">
              <FadeIn delay={0} direction="up">
                <Image
                  src="/images/test.jpg"
                  alt="Test Image"
                  width={1780}
                  height={1080}
                  className="hidden md:block w-full h-auto mt-8 rounded-lg shadow-lg"
                />
              </FadeIn>
              <FadeIn delay={50} direction="up">
                <Image
                  src="/images/test.jpg"
                  alt="Test Image"
                  width={1780}
                  height={1080}
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </FadeIn>
              <FadeIn delay={100} direction="up">
                <Image
                  src="/images/test.jpg"
                  alt="Test Image"
                  width={1780}
                  height={1080}
                  className="hidden md:block w-full h-auto mt-8 rounded-lg shadow-lg"
                />
              </FadeIn>
            </div>
          </section>
        </FadeIn>

        {/* CTA Button */}
        <FadeIn delay={100} direction="up">
          <div className="pb-16 flex flex-col items-center space-y-2">
            <h1 className="text-3xl md:text-4xl font-bold leading-tight">My Projects</h1>
            <p className="text-md text-black/55 mb-4 max-w-xs md:max-w-[700px] mx-auto font-normal">
              These are projects I’ve built from the ground up, using different tools, languages, and frameworks to create practical solutions.
            </p>
            <Link href="/contact">
              <Button variant="outline" className="rounded-full px-12 md:py-4 h-auto gap-2 flex items-center text-black/75 border-black/75 hover:bg-black/75 hover:text-white transition-colors">
                View Projects
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </FadeIn>

        <div className="pt-24 pb-16 md:pt-6 px-8 md:px-2 text-left">
        <h1 className="text-3xl md:text-4xl font-bold mb-4 text-center">Contact</h1>
        <FadeIn delay={50} direction="up">
        <p className="text-black/55 mb-8 font-normal text-center">
          I&apos;ll only respond to those proposals that are a good match for my schedule and interests. Thank you!
        </p>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <FadeIn delay={100} direction="up">
            <div>
              <h2 className="text-2xl font-bold mb-4">Send a message</h2>
              {/* Tally Form Embed */}
              <iframe
                src="https://tally.so/embed/wz44pg?alignLeft=1&hideTitle=1&transparentBackground=1&dynamicHeight=1"
                width="100%"
                height="280"
                frameBorder="0"
                title="Contact Form"
                className=""
              ></iframe>
            </div>
          </FadeIn>

          <FadeIn delay={150} direction="up">
          <div>
            <h2 className="text-2xl font-bold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div>
                <h3 className="text-lg font-medium mb-1">Location</h3>
                <p className="text-black/60">
                  Quezon City, Metro Manila, Philippines
                </p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-1">Email</h3>
                <p className="text-black/60">rvnztolentino@outlook.com</p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-1">Phone</h3>
                <p className="text-black/60">+63 906 069 6544</p>
              </div>

              <div>
                <h3 className="text-lg font-medium mb-1">LinkedIn</h3>
                <Link href="https://linkedin.com/in/rvnztolentino" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline transition-colors duration-200">
                  https://linkedin.com/in/rvnztolentino
                </Link>
              </div>
            </div>
          </div>
          </FadeIn>
        </div>
      </div>

      </div>
    </PageTransition>
  )
}