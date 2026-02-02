import React, { useState, useEffect, useRef } from 'react';
import { ArrowLeft, Send } from 'lucide-react';
import { GoogleGenAI, Chat } from "@google/genai";
import { RATE_LIMIT_MAX, RATE_LIMIT_WINDOW_MS, AI_SYSTEM_PROMPT } from '../constants';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

interface AIChatProps {
  onClose: () => void;
}

interface Message {
  role: 'user' | 'model';
  text: string;
}

const AIChat: React.FC<AIChatProps> = ({ onClose }) => {

  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: "hey i'm kei, how can i help you today?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [chatSession, setChatSession] = useState<Chat | null>(null);
  const [messageTimestamps, setMessageTimestamps] = useState<number[]>(() => {
    try {
      const stored = localStorage.getItem('chat_timestamps');
      return stored ? JSON.parse(stored) : [];
    } catch {
      return [];
    }
  });

  const [isRateLimited, setIsRateLimited] = useState(false);
  const [rateLimitResetTime, setRateLimitResetTime] = useState<number | null>(null);
  const [timeRemaining, setTimeRemaining] = useState<string>('');

  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  // Initialize Gemini Chat
  useEffect(() => {
    try {
      if (process.env.API_KEY) {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        const chat = ai.chats.create({
          model: 'gemini-2.5-flash',
          config: {
            systemInstruction: AI_SYSTEM_PROMPT,
          },
        });
        setChatSession(chat);
      } else {
        console.warn("API Key not found");
        setMessages(prev => [...prev, { role: 'model', text: "config error: api key missing." }]);
      }
    } catch (error) {
      console.error("Failed to init chat", error);
    }
  }, []);

  // Check rate limit on mount and interval
  useEffect(() => {
    const checkRateLimit = () => {
      const now = Date.now();
      const windowStart = now - RATE_LIMIT_WINDOW_MS;
      const recentMessages = messageTimestamps.filter(t => t > windowStart);

      if (recentMessages.length >= RATE_LIMIT_MAX) {
        setIsRateLimited(true);
        // Find when the limit resets (earliest message + window)
        const oldestMessageInWindow = Math.min(...recentMessages);
        const resetTime = oldestMessageInWindow + RATE_LIMIT_WINDOW_MS;
        setRateLimitResetTime(resetTime);

        const remaining = resetTime - now;
        if (remaining > 0) {
          const minutes = Math.floor(remaining / 60000);
          const seconds = Math.floor((remaining % 60000) / 1000);
          setTimeRemaining(`${minutes}m ${seconds}s`);
        } else {
          setIsRateLimited(false);
          setRateLimitResetTime(null);
        }
      } else {
        setIsRateLimited(false);
        setRateLimitResetTime(null);
      }
    };

    checkRateLimit();
    const interval = setInterval(checkRateLimit, 1000);
    return () => clearInterval(interval);
  }, [messageTimestamps]);

  // Scroll to bottom on new message
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Focus input on mount
  useEffect(() => {
    const timer = setTimeout(() => {
      inputRef.current?.focus();
    }, 500); // Wait for animation
    return () => clearTimeout(timer);
  }, []);

  const handleSend = async () => {
    if (!input.trim() || !chatSession || isLoading) return;

    // Rate Limiting Check
    const now = Date.now();
    const windowStart = now - RATE_LIMIT_WINDOW_MS;
    const recentMessages = messageTimestamps.filter(t => t > windowStart);

    if (recentMessages.length >= RATE_LIMIT_MAX) {
      // Logic handled by useEffect, but double check here
      return;
    }

    const newTimestamps = [...recentMessages, now];
    setMessageTimestamps(newTimestamps);
    localStorage.setItem('chat_timestamps', JSON.stringify(newTimestamps));

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await chatSession.sendMessage({ message: userMsg });
      const text = response.text || "...";
      setMessages(prev => [...prev, { role: 'model', text: text }]);
    } catch (error) {
      console.error("Chat error", error);
      setMessages(prev => [...prev, { role: 'model', text: "connection error. try again." }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-[#1A1A1A] flex flex-col animate-in slide-in-from-bottom-full duration-500 ease-in-out">
      {/* Header */}
      <div className="flex items-center justify-between px-8 py-6 md:px-12 border-b border-white/5 bg-[#1A1A1A]/90 backdrop-blur-sm z-10">
        <button
          onClick={onClose}
          className="group flex items-center gap-2 text-sm font-light tracking-[0.2em] text-white hover:text-gray-400 transition-colors uppercase"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Home
        </button>
        <div className="text-sm font-bold tracking-widest text-white/20 uppercase">
          Kei / AI Assistant
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-8 md:p-12">
        <div className="max-w-4xl mx-auto flex flex-col gap-6 min-h-full">
          <div className="flex-1" /> {/* Spacer to push messages down initially */}

          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex flex-col max-w-2xl ${msg.role === 'user' ? 'self-end items-end' : 'self-start items-start'} animate-in fade-in slide-in-from-bottom-2 duration-300`}
            >
              <span className="text-[10px] uppercase tracking-widest text-white/30 mb-2">
                {msg.role === 'user' ? 'You' : 'Kei'}
              </span>
              <div className={`text-lg md:text-xl font-light leading-relaxed prose prose-invert prose-p:my-0 prose-store:text-white ${msg.role === 'user' ? 'text-gray-400 text-right' : 'text-white'}`}>
                {msg.role === 'model' ? (
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      a: ({ node, ...props }) => (
                        <a {...props} target="_blank" rel="noopener noreferrer" className="text-white underline underline-offset-4 decoration-white/30 hover:decoration-white transition-all" />
                      )
                    }}
                  >
                    {msg.text}
                  </ReactMarkdown>
                ) : (
                  msg.text
                )}
              </div>
            </div>
          ))}

          {isLoading && (
            <div className="self-start animate-pulse text-white/50 text-sm tracking-widest uppercase">
              Thinking...
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input Area */}
      <div className="p-8 md:p-12 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto relative flex items-center border-b border-white/20 focus-within:border-white transition-colors duration-300">
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Type a message..."
            className="w-full bg-transparent py-4 text-lg md:text-xl font-light text-white placeholder-white/20 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
            disabled={isLoading || isRateLimited}
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || isLoading || isRateLimited}
            className="ml-4 text-white/50 hover:text-white disabled:opacity-30 transition-colors"
          >
            <Send size={20} />
          </button>
        </div>
        {isRateLimited && (
          <div className="max-w-4xl mx-auto mt-2 text-red-400 text-xs tracking-widest uppercase">
            Rate limit reached. Try again in {timeRemaining}
          </div>
        )}
      </div>
    </div>
  );
};

export default AIChat;