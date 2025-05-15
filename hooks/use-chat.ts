"use client"

import { useChat as useAIChat } from "ai/react"
import type { Message } from "ai"

interface UseChatProps {
  api: string
  initialMessages?: Message[]
}

export function useChat({ api, initialMessages = [] }: UseChatProps) {
  const { messages, input, handleInputChange, handleSubmit, isLoading, error } = useAIChat({
    api,
    initialMessages,
  })

  return {
    messages,
    input,
    handleInputChange,
    handleSubmit,
    isLoading,
    error,
  }
}
