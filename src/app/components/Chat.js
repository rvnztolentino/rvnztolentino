"use client"

import { useState, useRef, useEffect } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Input } from "@/components/ui/input"
import { Send, MessageSquare, X } from "lucide-react" // Added X icon
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { GoogleGenerativeAI } from "@google/generative-ai";

const genAI = new GoogleGenerativeAI("AIzaSyCKGPuLJGfrMDXdmNjWLYR6eRzfX6Ah4zU")
const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: `Instruction:
        You're name is Keiji and you are an AI Assistant for Renz's personal site. You are designed to help or answer user's questions about the site.
        You're answers should be limited to the site's content, the information i provide, and should not provide any personal information about Renz.
        You can also provide some information about the site's content and features.
        Note that every page is located at the Navigation bar.
        The site is under development and is constantly being updated. More content will be added soon.

        Here are the site information:
        Including the projects, blog posts, projects, about page, store (digital products and things i sell), and other information which can be accessed on the
        Navigation bar (On Desktop it's located at the left side of the site. On Mobile view there's a hamburger menu at top that opens the navigation).
        Renz's resume is currently not available for download on this site, it will be available on the about page (I will update this soon).
        To contact Renz, you can tell the user to send a message on the contact page which is on the Navigation bar as well.
        Or they could contact me on rvnztolentino@outlook.com
        To access Renz's social, you can tell the user to open the linktree link on the Navigation bar which is where Renz's socials are located.
        Shorten your messages as well.

        Here are some personal details you can provide about Renz (only if they ask, don't use this for anything else):
        His Nickname: Renz
        His Name: Renz Tolentino (Note: this is not his full name)
        His pronouns/gender: he/him (male), straight
        His Ethnicity/Citizenship: Filipino
        His Location: Philippines
        His personality: Introvert, ADHD, Smart sometimes Stupid, Lonely (Only has few friends)
        His looks: Handsome
        His height: 175cm
        His relationship status: Single
        His birth year: 2004 (answer this if they ask about his age)
        His MBTI: INFP
        His occupation: Junior Undergraduate Computer Science Student attending in FEU Institute of Technology
        His interests: Learning new technologies, exploring algorithms and data structures, building creative projects,
        staying updated with industry trends, collaborating with others on technical challenges, gaming, music, watching movies, playing the guitar,
        photography, video editing, and more.
        His skills: Creativity, design, computer literacy

        FAQ (if they ask):
        Where is Renz from - Philippines
        Is Renz a skilled/good programmer - Renz is not skilled or completely proficient yet, but working hard to improve and deepen his understanding.
        Is Renz handsome - Yes, he is more handsome in person

        Credit:
        Website design was inspired by reysu
      `,
})

const ChatMessage = ({ message, isUser }) => (
  <div className={`flex gap-2 mb-4 ${isUser ? "flex-row-reverse" : ""}`}>
    <Avatar>
      {isUser ? (
        <>
          <AvatarImage src="https://static.vecteezy.com/system/resources/previews/009/292/244/non_2x/default-avatar-icon-of-social-media-user-vector.jpg" />
          <AvatarFallback>U</AvatarFallback>
        </>
      ) : (
        <>
          <AvatarImage src="https://avatars.fastly.steamstatic.com/8db289a63fe60fc2c6b1f79f50f5cbb2d450c766_full.jpg" />
          <AvatarFallback>K</AvatarFallback>
        </>
      )}
    </Avatar>
    <div className={`max-w-[80%] ${isUser ? "text-right" : ""}`}>
      <div className="text-sm font-semibold mb-1">{isUser ? "You" : "Keiji"}</div>
      <div className={`rounded-lg p-3 ${isUser ? "bg-black text-white" : "bg-light-gray-2 text-black"}`}>{message}</div>
    </div>
  </div>
)

const Chat = () => {
  const [messages, setMessages] = useState([
    { text: "Hey! I'm Keiji, Renz's AI assistant. How can I help you today?", isUser: false },
  ])
  const [inputText, setInputText] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [open, setOpen] = useState(false)
  const messagesEndRef = useRef(null)
  const messageTimestamps = useRef([])
  const messageContainerRef = useRef(null)

  // Check if device is mobile
  const isMobile = useRef(false)
  useEffect(() => {
    if (typeof window === "undefined") {
      isMobile.current = false
    } else {
      isMobile.current = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
    }
  }, [])

  // Auto-open popover after 3 seconds on desktop
  useEffect(() => {
    if (!isMobile.current) {
      const timer = setTimeout(() => {
        setOpen(true)
      }, 2000)

      return () => clearTimeout(timer)
    }
  }, [])

  // Auto-scroll to bottom every new chat
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages])

  const generateResponse = async (userMessage) => {
    try {
      const result = await model.generateContent(userMessage)
      const response = await result.response
      const text = response.text()
      return text
    } catch (error) {
      console.error("Error generating response:", error)
      return "I'm temporarily unavailable. Please try again later."
    }
  }

  const handleSend = async () => {
    if (inputText.trim()) {
      setMessages((prev) => [...prev, { text: inputText, isUser: true }])
      const userMessage = inputText
      setInputText("")
      setIsLoading(true)

      const response = await generateResponse(userMessage)

      setMessages((prev) => [
        ...prev,
        {
          text: response,
          isUser: false,
        },
      ])

      setIsLoading(false)
    }
  }

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSend()
    }
  }

  return (
    <div className="fixed bottom-4 right-4 font-noto-sans">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger>
          <div className="flex justify-center items-center rounded-full bg-black text-white hover:bg-white hover:text-black hover:border shadow-lg transition-all duration-300 ease-in-out text-sm w-14 h-14">
            <MessageSquare />
          </div>
        </PopoverTrigger>
        <PopoverContent className="xs:w-80 lg:w-96 h-[500px] relative">
          {" "}
          {/* Added relative positioning */}
          {/* Close button */}
          <button
            onClick={() => setOpen(false)}
            className="absolute top-2 right-2 p-4 rounded-full hover:bg-gray-100 transition-colors"
          >
            <X className="" />
          </button>
          <div className="flex space-x-2 mb-4 border-b border-light-gray-2 pb-2">
            <Avatar>
              <AvatarImage src="https://avatars.fastly.steamstatic.com/8db289a63fe60fc2c6b1f79f50f5cbb2d450c766_full.jpg" />
              <AvatarFallback>K</AvatarFallback>
            </Avatar>
            <div className="flex flex-col">
              <p className="font-bold">Keiji</p>
              <p className="text-sm">AI Assistant</p>
            </div>
          </div>
          <div ref={messageContainerRef} className="h-[340px] overflow-y-auto mb-4 space-y-4 text-sm">
            {messages.map((message, index) => (
              <ChatMessage key={index} message={message.text} isUser={message.isUser} />
            ))}
            {isLoading && (
              <div className="flex justify-center">
                <div className="animate-pulse text-gray-400">Keiji is typing...</div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
          <div className="flex space-x-2">
            <Input
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1"
              disabled={isLoading}
            />
            <button
              onClick={handleSend}
              className="p-2 rounded-full bg-black text-white hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed"
              disabled={isLoading}
            >
              <Send className="w-4 h-4" />
            </button>
          </div>
        </PopoverContent>
      </Popover>
    </div>
  )
}

export default Chat

