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
      <div className="min-h-screen flex flex-col items-center px-4 justify-center text-center">
        {/* Profile picture with status */}
        <div className="relative mb-12">
          <div className="w-32 h-32 rounded-full shadow-lg overflow-hidden">
            <Image
              src="/images/renz.png"
              alt="Profile"
              width={128}
              height={128}
              className="object-cover"
            />
          </div>

          {/* Status badge 
          <div className="absolute -right-12 top-4 bg-white px-3 py-1 rounded-full shadow-md text-xs flex items-center">
            <span>yo, i&apos;m renz</span>
            <span className="ml-1">👋</span>
          </div> */}
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
              Software Engineer · Digital Creator
            </p>
          </div>
        </FadeIn>

        {/* CTA Button */}
        <FadeIn delay={100} direction="up">
          <div className="flex flex-wrap gap-4">
            <Link href="/about">
              <Button variant="outline" className="rounded-full px-12 md:py-4 h-auto flex items-center text-black/75 border-black/75 hover:bg-black/90 hover:text-white transition-colors">
                About
              </Button>
            </Link>
            <Link href="/contact">
              <Button className="rounded-full px-8 md:py-4 h-auto gap-2 flex items-center bg-black/90 border border-black/75 text-white hover:bg-white hover:text-black/75 transition-colors">
                Contact
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </FadeIn>
      </div>
    </PageTransition>
  )
}