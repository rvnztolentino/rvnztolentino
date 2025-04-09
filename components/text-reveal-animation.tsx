'use client'

import { useState, useEffect, useRef } from 'react'

interface TextRevealAnimationProps {
  texts: string[]
  interval?: number
  className?: string
}

export default function TextRevealAnimation({ 
  texts, 
  interval = 2000,
  className = "" 
}: TextRevealAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [displayText, setDisplayText] = useState(texts[0])
  const containerRef = useRef<HTMLDivElement>(null)
  
  useEffect(() => {
    const timer = setInterval(() => {
      setIsAnimating(true)
      
      // After the reveal animation completes, change the text
      setTimeout(() => {
        setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length)
        setDisplayText(texts[(currentTextIndex + 1) % texts.length])
        setIsAnimating(false)
      }, 500) // This should match the CSS animation duration
    }, interval)

    return () => clearInterval(timer)
  }, [currentTextIndex, interval, texts])

  return (
    <div className={`relative overflow-hidden ${className}`} ref={containerRef}>
      <div 
        className={`transition-transform duration-500 ${isAnimating ? 'translate-x-full' : 'translate-x-0'}`}
      >
        {displayText}
      </div>
      <div 
        className={`absolute top-0 left-0 w-full h-full bg-white transform transition-transform duration-500 origin-left ${isAnimating ? 'scale-x-0' : 'scale-x-100'}`}
        style={{ transformOrigin: 'right' }}
      />
    </div>
  )
}
