"use client"
import Image from "next/image"
import { useInView } from "react-intersection-observer"

const AboutSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <h2
            className={`text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white relative pb-4 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            About Me
            <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary-500"></span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-10">
            <div
              className={`md:w-1/3 transition-all duration-700 delay-300 ${
                inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <div className="relative w-64 h-64 mx-auto rounded-full overflow-hidden border-4 border-primary-100 dark:border-primary-900">
                <Image src="/MyImage.jpg?height=256&width=256" alt="Azib Moeen" fill className="object-cover" />
              </div>
            </div>

            <div
              className={`md:w-2/3 transition-all duration-700 delay-500 ${
                inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                I'm an Information Technology student from Punjab University, graduating in 2025 with a CGPA of 3.12.
                I've been working with the MERN stack since my 5th semester and have hands-on experience building
                scalable, full-stack applications.
              </p>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed">
                I'm passionate about clean code, smart UI/UX, and continuous learning. My goal is to create web
                applications that not only look great but also provide exceptional user experiences through thoughtful
                design and efficient implementation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection
