"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from 'lucide-react'
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate opacity based on scroll position (0 to 50px)
  const calculateOpacity = () => {
    if (isMenuOpen) return 1 // Full opacity when menu is open
    const maxScroll = 100
    return Math.min(scrollY / maxScroll, 0.9)
  }

  useEffect(() => {
    window.scrollTo(0, 0)
    setIsMenuOpen(false)
  }, [pathname])

  // Dynamic styles based on scroll
  const navbarStyle = {
    backgroundColor: `rgba(255, 255, 255, ${calculateOpacity()})`,
    backdropFilter: scrollY > 10 ? 'blur(10px)' : 'none',
    boxShadow: scrollY > 50 ? '0 1px 2px 0 rgba(0, 0, 0, 0.05)' : 'none',
  }

  return (
    <nav 
      className="fixed top-0 left-0 right-0 z-50 py-6 lg:py-8 px-8 lg:px-24 transition-all duration-300"
      style={navbarStyle}
    >
      <div className="flex items-center">
        <div className="text-md tracking-widest font-semibold ml-2">
          <Link href="/" className="">
            <Image
              src="/logos/logo.svg"
              alt="RENZ"
              width={100}
              height={100}
              className="w-auto h-8"
            />
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center space-x-12 text-sm text-black/60 tracking-wider ml-auto">
          <Link href="/about" className="hover:text-black">
            about
          </Link>
          <Link href="/blog" className="hover:text-black">
            blog
          </Link>
          <a 
            href="https://drive.google.com/file/d/1AAY68uA8QFq6LNyK_zhUQf2D4APoHFy5/view?usp=sharing"
            target="_blank" rel="noopener noreferrer" 
            className="hover:text-black"
          >
            resume
          </a>
          <Link href="/projects" className="hover:text-black">
            projects
          </Link>
          <Link href="/contact" className="hover:text-black">
            contact
          </Link>
          <a 
            href="https://linktr.ee/rvnztolentino"
            target="_blank" rel="noopener noreferrer" 
            className="hover:text-black"
          >
            linktree
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden ml-auto" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-background"
          >
            <div className="flex flex-col space-y-4 py-6">
              <Link
                href="/"
                className="text-sm uppercase tracking-wider hover:text-muted-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/about"
                className="text-sm uppercase tracking-wider hover:text-muted-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/blog"
                className="text-sm uppercase tracking-wider hover:text-muted-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <a
                href="https://drive.google.com/file/d/1AAY68uA8QFq6LNyK_zhUQf2D4APoHFy5/view?usp=sharing"
                target="_blank" rel="noopener noreferrer"
                className="text-sm uppercase tracking-wider hover:text-muted-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Resume
              </a>
              <Link
                href="/projects"
                className="text-sm uppercase tracking-wider hover:text-muted-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/contact"
                className="text-sm uppercase tracking-wider hover:text-muted-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <a
                href="https://linktr.ee/rvnztolentino"
                target="_blank" rel="noopener noreferrer"
                className="text-sm uppercase tracking-wider hover:text-muted-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Linktree
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}