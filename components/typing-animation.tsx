"use client"

import { useState, useEffect } from "react"

interface TypingAnimationProps {
  texts: string[]
  typingSpeed?: number
  deletingSpeed?: number
  delayBetweenTexts?: number
}

export default function TypingAnimation({
  texts,
  typingSpeed = 100,
  deletingSpeed = 50,
  delayBetweenTexts = 1500,
}: TypingAnimationProps) {
  const [displayText, setDisplayText] = useState("")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isTyping, setIsTyping] = useState(true)
  const [isPaused, setIsPaused] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    if (isPaused) {
      timeout = setTimeout(() => {
        setIsPaused(false)
        setIsTyping(false)
      }, delayBetweenTexts)
      return () => clearTimeout(timeout)
    }

    const currentText = texts[currentIndex]

    if (isTyping) {
      if (displayText.length < currentText.length) {
        timeout = setTimeout(() => {
          setDisplayText(currentText.substring(0, displayText.length + 1))
        }, typingSpeed)
      } else {
        setIsPaused(true)
      }
    } else {
      if (displayText.length > 0) {
        timeout = setTimeout(() => {
          setDisplayText(displayText.substring(0, displayText.length - 1))
        }, deletingSpeed)
      } else {
        setIsTyping(true)
        setCurrentIndex((currentIndex + 1) % texts.length)
      }
    }

    return () => clearTimeout(timeout)
  }, [displayText, currentIndex, isTyping, isPaused, texts, typingSpeed, deletingSpeed, delayBetweenTexts])

  return (
    <span className="relative">
      {displayText}
      <span className="absolute -right-1 top-0 h-full w-[2px] animate-blink bg-primary-500 dark:bg-primary-400"></span>
    </span>
  )
}
