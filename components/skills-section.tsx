"use client"

import { useInView } from "react-intersection-observer"

const skills = [
  { name: "React.js", level: 90 },
  { name: "Next.js", level: 85 },
  { name: "Node.js", level: 80 },
  { name: "Express.js", level: 85 },
  { name: "MongoDB", level: 75 },
  { name: "Appwrite", level: 70 },
  { name: "Tailwind CSS", level: 90 },
  { name: "JavaScript (ES6+)", level: 85 },
  { name: "Git & GitHub", level: 80 },
  { name: "REST APIs", level: 85 },
  { name: "AI Tools (Langchain, Vector Embeddings)", level: 65 },
]

const SkillBar = ({ skill, index, inView }: { skill: (typeof skills)[0]; index: number; inView: boolean }) => {
  return (
    <div
      className={`mb-6 transition-all duration-700 ${
        inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className="flex justify-between mb-1">
        <span className="text-base font-medium text-gray-700 dark:text-gray-300">{skill.name}</span>
        <span className="text-sm font-medium text-gray-500 dark:text-gray-400">{skill.level}%</span>
      </div>
      <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
        <div
          className="bg-primary-500 h-2.5 rounded-full transition-all duration-1000 ease-out"
          style={{
            width: inView ? `${skill.level}%` : "0%",
            transitionDelay: `${index * 100 + 300}ms`,
          }}
        ></div>
      </div>
    </div>
  )
}

const SkillsSection = () => {
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4" ref={ref}>
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white relative pb-4 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          My Skills
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary-500"></span>
        </h2>

        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12">
            {skills.slice(0, Math.ceil(skills.length / 2)).map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index} inView={inView} />
            ))}
            {skills.slice(Math.ceil(skills.length / 2)).map((skill, index) => (
              <SkillBar key={skill.name} skill={skill} index={index + Math.ceil(skills.length / 2)} inView={inView} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
