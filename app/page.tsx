import HeroSection from "@/components/hero-section"
import AboutSection from "@/components/about-section"
import ProjectsSection from "@/components/projects-section"
import SkillsSection from "@/components/skills-section"
import EducationSection from "@/components/education-section"
import ContactSection from "@/components/contact-section"
import ScrollProgress from "@/components/scroll-progress"
import SectionTracker from "@/components/section-tracker"

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <EducationSection />
      <ContactSection />
      <ScrollProgress />
      <SectionTracker />
    </>
  )
}
