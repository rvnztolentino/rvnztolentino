"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { cn } from "@/lib/utils"

interface FadeInProps {
  children: React.ReactNode
  className?: string
  delay?: number // delay in ms
  duration?: number // duration in ms
  direction?: "up" | "down" | "left" | "right" | "none"
  distance?: number // distance in px
}

export default function FadeIn({
  children,
  className,
  delay = 0,
  duration = 500,
  direction = "up",
  distance = 20,
}: FadeInProps) {
  const [isVisible, setIsVisible] = useState(false)

  // Calculate transform based on direction
  const getTransform = () => {
    if (!isVisible) {
      switch (direction) {
        case "up":
          return `translateY(${distance}px)`
        case "down":
          return `translateY(-${distance}px)`
        case "left":
          return `translateX(${distance}px)`
        case "right":
          return `translateX(-${distance}px)`
        default:
          return "none"
      }
    }
    return "none"
  }

  useEffect(() => {
    // Trigger the animation immediately after the component mounts
    const timeout = setTimeout(() => {
      setIsVisible(true)
    }, delay)

    return () => clearTimeout(timeout)
  }, [delay])

  return (
    <div
      className={cn(className)}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: getTransform(),
        transition: `opacity ${duration}ms ease-out ${delay}ms, transform ${duration}ms ease-out ${delay}ms`,
        willChange: "opacity, transform",
      }}
    >
      {children}
    </div>
  )
}