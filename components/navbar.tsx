"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Menu, X } from 'lucide-react'
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { TypeAnimation } from 'react-type-animation';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  // Handle scroll effect with more granular control
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Calculate opacity based on scroll position (0 to 50px)
  const calculateOpacity = () => {
    if (isMenuOpen) return 1 // Always solid when menu is open
    const maxScroll = 100
    return Math.min(scrollY / maxScroll, 0.9) // Max opacity of 0.9
  }

  // Scroll to top when pathname changes
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
        <div className="text-xl font-bold tracking-wider -ml-12" style={{ width: "150px", textAlign: "center" }}>
          <TypeAnimation
            sequence={[
              'Renz', 
              2000,
              'レンツ',
              2000,
              '任茲',
              2000,
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            style={{ display: 'inline-block' }}
          />
        </div>

        {/* Desktop Navigation - moved to the left with bigger gap */}
        <div className="hidden lg:flex items-center ml-36 space-x-16">
          <Link href="/" className="text-sm tracking-wider text-muted-foreground hover:text-black">
            Home
          </Link>
          <Link href="/about" className="text-sm tracking-wider text-muted-foreground hover:text-black">
            About
          </Link>
          <Link href="/projects" className="text-sm tracking-wider text-muted-foreground hover:text-black">
            Projects
          </Link>
          <Link href="/blog" className="text-sm tracking-wider text-muted-foreground hover:text-black">
            Blog
          </Link>
          <Link href="/store" className="text-sm tracking-wider text-muted-foreground hover:text-black">
            Store
          </Link>
          <Link href="/contact" className="text-sm tracking-wider text-muted-foreground hover:text-black">
            Contact
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="lg:hidden ml-auto" onClick={toggleMenu}>
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation with animation */}
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
                href="/projects"
                className="text-sm uppercase tracking-wider hover:text-muted-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Projects
              </Link>
              <Link
                href="/blog"
                className="text-sm uppercase tracking-wider hover:text-muted-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Blog
              </Link>
              <Link
                href="/store"
                className="text-sm uppercase tracking-wider hover:text-muted-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Store
              </Link>
              <Link
                href="/contact"
                className="text-sm uppercase tracking-wider hover:text-muted-foreground"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}