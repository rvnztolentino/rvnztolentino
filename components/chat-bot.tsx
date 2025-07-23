"use client"

import type React from "react"

import { useState, useRef, useEffect } from "react"
import { Send } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"

type Message = {
  id: string
  content: string
  sender: "user" | "bot"
  timestamp: Date
}

const initialMessages: Message[] = [
  {
    id: "1",
    content: "Hey! I'm Mr. Kuro, Renz's AI assistant. How can I help you today?",
    sender: "bot",
    timestamp: new Date(),
  },
]

const formatTextWithLinks = (text: string) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g
  const parts = text.split(urlRegex)
  
  return parts.map((part, index) => {
    if (urlRegex.test(part)) {
      return (
        <a
          key={`link-${index}`}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 underline hover:text-blue-800"
        >
          {part}
        </a>
      )
    } else {
      return <span key={`text-${index}`}>{part}</span>
    }
  })
}

export default function ChatBot() {
  const [isMinimized, setIsMinimized] = useState(true)
  const [messages, setMessages] = useState<Message[]>(initialMessages)
  const [input, setInput] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [isMobileView, setIsMobileView] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  // Auto scroll to bottom when messages change or when chat is opened
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isMinimized])

  const handleSendMessage = async () => {
    if (!input.trim() || isLoading) return

    // Add user message
    const userMessage: Message = {
      id: Date.now().toString(),
      content: input,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInput("")
    setIsLoading(true)

    try {
      // Send message to Gemini API
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          messages: [...messages, userMessage],
        }),
      })

      if (!response.ok) {
        throw new Error(`Failed to get response: ${response.status}`)
      }

      const data = await response.json()

      // Add bot response
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: data.response || "I'm having trouble understanding. Could you try again?",
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      console.error("Error sending message:", error)

      // Add error message
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        content: "I'm having trouble connecting right now. Please try again later.",
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  // Check if device is mobile
  useEffect(() => {
    const checkMobile = () => {
      if (typeof window === "undefined") {
        setIsMobileView(false)
      } else {
        const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        setIsMobileView(isMobile)
      }
    }
    
    checkMobile()
    
    // Listen for resize events to handle orientation changes
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  // Auto-maximize popover after 2 seconds on desktop
  useEffect(() => {
    if (!isMobileView) {
      const timer = setTimeout(() => {
        setIsMinimized(false)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [isMobileView])

  return (
    <div
      className={`fixed bottom-6 right-6 bg-white border border-gray-200 rounded-md shadow-lg z-40 flex flex-col transition-all duration-300 ease-out
        ${isMinimized ? "h-16 w-38" : "h-[450px] w-80 sm:w-96"}
        opacity-100 translate-y-0`}
    >
      {/* Chat Header */}
      <div
        className="flex items-center justify-between p-3 border-b border-gray-200 rounded-md hover:bg-black/5 cursor-pointer"  
        onClick={() => setIsMinimized((prev) => !prev)}
        title={isMinimized ? "Open chat" : "Minimize chat"}
      >
        <div className="flex items-center space-x-3 overflow-hidden">
          <Avatar className="h-8 w-8 flex-shrink-0 bg-gray-300 text-[#121212]">
            <AvatarFallback>K</AvatarFallback>
          </Avatar>
          <div className="truncate">
            <h3 className="text-black/95 font-medium text-sm truncate">Kuro</h3>
            <p className="text-gray-600 text-xs truncate">AI Assistant</p>
          </div>
        </div>
      </div>

      {/* Chat Messages */}
      {!isMinimized && (
        <div className="flex-1 overflow-y-auto p-3 space-y-4">
          {messages.map((message) => (
            <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
              {message.sender === "bot" && (
                <Avatar className="h-8 w-8 mr-2 bg-gray-300 text-[#121212] flex-shrink-0">
                  <AvatarFallback>K</AvatarFallback>
                </Avatar>
              )}
              <div
                className={`max-w-[80%] p-3 rounded-md ${
                  message.sender === "user" ? "bg-black/95 text-white" : "bg-black/10 text-black"
                }`}
              >
                {/* Use the formatTextWithLinks function for bot messages */}
                <div className="text-sm">
                  {message.sender === "bot" 
                    ? formatTextWithLinks(message.content)
                    : message.content
                  }
                </div>
                <p className="text-xs opacity-70 mt-1">
                  {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                </p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <Avatar className="h-8 w-8 mr-2 bg-gray-300 text-[#121212] flex-shrink-0">
                <AvatarFallback>K</AvatarFallback>
              </Avatar>
              <div className="bg-black/10 text-gray-300 p-3 rounded-md">
                <div className="flex space-x-1">
                  <div
                    className="w-2 h-2 bg-black/95 rounded-full animate-bounce"
                    style={{ animationDelay: "0ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-black/95 rounded-full animate-bounce"
                    style={{ animationDelay: "150ms" }}
                  ></div>
                  <div
                    className="w-2 h-2 bg-black/95 rounded-full animate-bounce"
                    style={{ animationDelay: "300ms" }}
                  ></div>
                </div>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      )}

      {/* Chat Input */}
      {!isMinimized && (
        <div className="p-3 border-t border-gray-200 flex">
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            disabled={isLoading}
            className="flex-1 bg-white text-black/95 focus-visible:ring-gray-50/30 text-base"
          />
          <Button
            onClick={handleSendMessage}
            disabled={isLoading || !input.trim()}
            className="ml-2 bg-white hover:bg-black/95 text-black/95 hover:text-white border border-gray-200 disabled:opacity-50 disabled:cursor-not-allowed"
            size="icon"
          >
            <Send size={16} />
          </Button>
        </div>
      )}
    </div>
  )
}