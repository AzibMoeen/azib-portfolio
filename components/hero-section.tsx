"use client"

import { useEffect, useRef } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowDown, Download } from "lucide-react"
import TypingAnimation from "./typing-animation"

const HeroSection = () => {
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const title = titleRef.current
    const subtitle = subtitleRef.current
    const cta = ctaRef.current

    if (title) {
      title.style.opacity = "0"
      title.style.transform = "translateY(20px)"
      setTimeout(() => {
        title.style.transition = "opacity 0.8s ease, transform 0.8s ease"
        title.style.opacity = "1"
        title.style.transform = "translateY(0)"
      }, 100)
    }

    if (subtitle) {
      subtitle.style.opacity = "0"
      subtitle.style.transform = "translateY(20px)"
      setTimeout(() => {
        subtitle.style.transition = "opacity 0.8s ease, transform 0.8s ease"
        subtitle.style.opacity = "1"
        subtitle.style.transform = "translateY(0)"
      }, 300)
    }

    if (cta) {
      cta.style.opacity = "0"
      cta.style.transform = "translateY(20px)"
      setTimeout(() => {
        cta.style.transition = "opacity 0.8s ease, transform 0.8s ease"
        cta.style.opacity = "1"
        cta.style.transform = "translateY(0)"
      }, 500)
    }
  }, [])

  const typingTexts = [
    "MERN Stack Developer",
    "React Enthusiast",
    "Next.js Developer",
    "UI/UX Designer",
    "Full Stack Developer",
  ]

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary-50 to-white dark:from-gray-900 dark:to-gray-800 pt-16"
    >
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-primary-100 dark:bg-primary-900/20 rounded-full opacity-50 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-primary-100 dark:bg-primary-900/20 rounded-full opacity-50 blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 py-16 z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 ref={titleRef} className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
            Hi, I'm <span className="text-primary-500 dark:text-primary-400">Azib Moeen</span>
          </h1>
          <p ref={subtitleRef} className="text-xl md:text-2xl font-medium text-gray-700 dark:text-gray-300 mb-8 h-8">
            <TypingAnimation texts={typingTexts} typingSpeed={80} deletingSpeed={40} delayBetweenTexts={2000} />
          </p>
          <p className="text-lg text-gray-600 dark:text-gray-400 mb-10 max-w-2xl mx-auto">
            I specialize in building fast, responsive, and intelligent web applications using modern tools like React,
            Next.js, and MongoDB.
          </p>
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-primary-500 hover:bg-primary-600 text-white rounded-full px-8">
              <Link href="#projects">View My Work</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-500 text-primary-500 hover:bg-primary-50 dark:text-primary-400 dark:border-primary-400 dark:hover:bg-gray-800 rounded-full px-8"
            >
              <Link href="#contact">Get In Touch</Link>
            </Button>
            <Button
              asChild
              variant="outline"
              size="lg"
              className="border-primary-500 text-primary-500 hover:bg-primary-50 dark:text-primary-400 dark:border-primary-400 dark:hover:bg-gray-800 rounded-full px-8"
            >
              <a href="/Resume.pdf" download="Azib_Moeen_Resume.pdf">
                <Download size={18} className="mr-2" />
                Download Resume
              </a>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Link href="#about" aria-label="Scroll down">
          <ArrowDown className="text-primary-500 dark:text-primary-400" size={24} />
        </Link>
      </div>
    </section>
  )
}

export default HeroSection
