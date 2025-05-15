"use client"

import { useEffect, useState } from "react"
import { ArrowUp } from "lucide-react"

export default function ScrollProgress() {
  const [scrollPercentage, setScrollPercentage] = useState(0)
  const [showBackToTop, setShowBackToTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY
      const docHeight = document.documentElement.scrollHeight - window.innerHeight
      const scrollPercent = (scrollTop / docHeight) * 100
      setScrollPercentage(Math.round(scrollPercent))
      setShowBackToTop(scrollTop > 500)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  // Calculate the circle's circumference and the offset based on scroll percentage
  const radius = 18
  const circumference = 2 * Math.PI * radius
  const offset = circumference - (scrollPercentage / 100) * circumference

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-end gap-4">
      {showBackToTop && (
        <button
          onClick={scrollToTop}
          className="flex h-10 w-10 items-center justify-center rounded-full bg-primary-500 text-white shadow-lg transition-all hover:bg-primary-600"
          aria-label="Back to top"
        >
          <ArrowUp size={20} />
        </button>
      )}
      <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-white/90 shadow-lg backdrop-blur-sm dark:bg-gray-800/90">
        <svg className="h-12 w-12 -rotate-90 transform" viewBox="0 0 50 50">
          {/* Background circle */}
          <circle
            cx="25"
            cy="25"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            className="text-gray-200 dark:text-gray-700"
          />
          {/* Progress circle */}
          <circle
            cx="25"
            cy="25"
            r={radius}
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeDasharray={circumference}
            strokeDashoffset={offset}
            strokeLinecap="round"
            className="text-primary-500 transition-all duration-300"
          />
        </svg>
        <span className="absolute text-xs font-medium text-gray-800 dark:text-gray-200">{scrollPercentage}%</span>
      </div>
    </div>
  )
}
