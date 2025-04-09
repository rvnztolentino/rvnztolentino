'use client'

import { useState, useEffect } from 'react'

interface SlideRevealTextProps {
  texts: string[]
  interval?: number
  className?: string
}

export default function SlideRevealText({ 
  texts, 
  interval = 3000,
  className = "" 
}: SlideRevealTextProps) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [animationState, setAnimationState] = useState<'idle' | 'sliding' | 'complete'>('idle')
  
  useEffect(() => {
    const timer = setInterval(() => {
      // Start animation
      setAnimationState('sliding')
      
      // After animation completes, update text and reset animation
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % texts.length)
        setAnimationState('complete')
        
        // Reset animation state after a brief delay
        setTimeout(() => {
          setAnimationState('idle')
        }, 100)
      }, 600) // Match with CSS transition duration
    }, interval)

    return () => clearInterval(timer)
  }, [interval, texts.length])

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Text container */}
      <div className="relative">
        {/* Current text */}
        <span className="inline-block">
          {texts[currentIndex]}
        </span>
        
        {/* Sliding overlay - reveals text from left to right */}
        <div 
          className={`absolute inset-0 bg-white transform transition-transform duration-600 ease-in-out ${
            animationState === 'sliding' ? 'translate-x-full' : 'translate-x-0'
          }`}
          style={{ transformOrigin: 'left' }}
        />
      </div>
    </div>
  )
}
