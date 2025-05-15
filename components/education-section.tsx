"use client"

import { useInView } from "react-intersection-observer"
import { GraduationCap, Calendar } from "lucide-react"

const EducationSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="education" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4" ref={ref}>
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white relative pb-4 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Education
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary-500"></span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <div
            className={`bg-white dark:bg-gray-900 rounded-xl shadow-md p-8 transition-all duration-700 ${
              inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
          >
            <div className="flex items-center mb-4">
              <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
                <GraduationCap className="text-primary-500 dark:text-primary-400" size={24} />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">B.S. Information Technology</h3>
                <p className="text-gray-600 dark:text-gray-400">Punjab University</p>
              </div>
            </div>

            <div className="ml-16">
              <div className="flex items-center text-gray-500 dark:text-gray-400 mb-4">
                <Calendar size={16} className="mr-2" />
                <span>Graduating in 2025</span>
              </div>

              <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4 mb-4">
                <p className="font-medium text-gray-700 dark:text-gray-300">
                  CGPA: <span className="text-primary-500 dark:text-primary-400">3.12</span>
                </p>
              </div>

              <p className="text-gray-600 dark:text-gray-400">
                Studying Information Technology with a focus on web development and software engineering. Gained
                hands-on experience with modern web technologies and best practices.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EducationSection
