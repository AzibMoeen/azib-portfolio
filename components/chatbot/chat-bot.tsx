"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { MessageCircle, X, Minimize2, Maximize2, Send } from "lucide-react"
import { ChatMessage } from "./chat-message"
import { cn } from "@/lib/utils"
import { useChat } from "ai/react"

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const { messages, input, handleInputChange, handleSubmit, isLoading } = useChat({
    api: "/api/chat",
    initialMessages: [
      {
        id: "welcome",
        role: "assistant",
        content:
          "Hi there! 👋 I'm Azib's AI assistant. How can I help you today? You can ask me about Azib's projects, skills, education, or anything else on the portfolio.",
      },
    ],
  })

  // Scroll to bottom when new messages are added
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const toggleChat = () => {
    setIsOpen(!isOpen)
    if (isMinimized) setIsMinimized(false)
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  return (
    <>
      {/* Chat button */}
      <Button
        onClick={toggleChat}
        className="fixed bottom-6 right-6 z-40 h-14 w-14 rounded-full bg-primary-500 p-0 text-white shadow-lg hover:bg-primary-600"
        aria-label={isOpen ? "Close chat" : "Open chat"}
      >
        {isOpen ? <X size={24} /> : <MessageCircle size={24} />}
      </Button>

      {/* Chat window */}
      {isOpen && (
        <div
          className={cn(
            "fixed right-6 z-30 flex w-80 flex-col overflow-hidden rounded-lg bg-white shadow-xl transition-all duration-300 dark:bg-gray-900 sm:w-96",
            isMinimized ? "bottom-24 h-14" : "bottom-24 h-[30rem] max-h-[calc(100vh-8rem)]",
          )}
        >
          {/* Chat header */}
          <div className="flex items-center justify-between bg-primary-500 p-3 text-white">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-white/20 p-1">
                <MessageCircle size={24} />
              </div>
              <div>
                <h3 className="font-medium">Azib's AI Assistant</h3>
              </div>
            </div>
            <div className="flex gap-1">
              <Button
                onClick={toggleMinimize}
                variant="ghost"
                size="icon"
                className="h-8 w-8 rounded-full text-white hover:bg-white/20"
                aria-label={isMinimized ? "Maximize chat" : "Minimize chat"}
              >
                {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
              </Button>
            </div>
          </div>

          {/* Chat body - only shown when not minimized */}
          {!isMinimized && (
            <>
              <div className="flex-1 overflow-y-auto p-2">
                {messages.map((msg) => (
                  <ChatMessage
                    key={msg.id}
                    message={msg.content}
                    isBot={msg.role === "assistant"}
                    timestamp={new Date()}
                  />
                ))}
                {isLoading && (
                  <div className="flex w-full justify-start gap-2 p-2">
                    <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary-100 text-primary-500 dark:bg-primary-900/30 dark:text-primary-400">
                      <span className="text-xs font-medium">A</span>
                    </div>
                    <div className="max-w-[80%] rounded-lg bg-gray-100 px-3 py-2 text-sm dark:bg-gray-800">
                      <div className="flex gap-1">
                        <span className="animate-bounce">•</span>
                        <span className="animate-bounce" style={{ animationDelay: "0.2s" }}>
                          •
                        </span>
                        <span className="animate-bounce" style={{ animationDelay: "0.4s" }}>
                          •
                        </span>
                      </div>
                    </div>
                  </div>
                )}
                <div ref={messagesEndRef} />
              </div>

              {/* Chat input */}
              <form onSubmit={handleSubmit} className="flex w-full items-center gap-2 p-2">
                <input
                  value={input}
                  onChange={handleInputChange}
                  placeholder="Ask me anything..."
                  className="flex-1 rounded-md border border-gray-300 px-3 py-2 dark:border-gray-700 dark:bg-gray-800 dark:text-white"
                  disabled={isLoading}
                />
                <Button
                  type="submit"
                  size="icon"
                  disabled={!input.trim() || isLoading}
                  className="h-10 w-10 rounded-full bg-primary-500 p-2 text-white hover:bg-primary-600"
                >
                  <Send size={18} />
                  <span className="sr-only">Send message</span>
                </Button>
              </form>
            </>
          )}
        </div>
      )}
    </>
  )
}
