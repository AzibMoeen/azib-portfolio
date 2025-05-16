"use client";

import { useEffect, useState } from "react";

const sections = [
  { id: "home", name: "Home" },
  { id: "about", name: "About" },
  { id: "projects", name: "Projects" },
  { id: "skills", name: "Skills" },
  { id: "education", name: "Education" },
  { id: "blog", name: "Blog" },
  { id: "contact", name: "Contact" },
];

export default function SectionTracker() {
  const [activeSection, setActiveSection] = useState("home");

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.6, // Higher threshold for more accurate detection
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(
      observerCallback,
      observerOptions
    );

    // Observe all sections
    sections.forEach(({ id }) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => {
      sections.forEach(({ id }) => {
        const element = document.getElementById(id);
        if (element) {
          observer.unobserve(element);
        }
      });
    };
  }, []);

  return (
    <div className="fixed left-6 top-1/2 z-50 hidden -translate-y-1/2 transform flex-col gap-4 md:flex">
      {sections.map((section) => (
        <a
          key={section.id}
          href={`#${section.id}`}
          className={`group flex items-center gap-2 transition-all duration-300 ${
            activeSection === section.id
              ? "text-primary-500"
              : "text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
          }`}
        >
          <div
            className={`h-3 w-3 rounded-full transition-all duration-300 ${
              activeSection === section.id
                ? "bg-primary-500"
                : "bg-gray-300 group-hover:bg-gray-400 dark:bg-gray-600 dark:group-hover:bg-gray-500"
            }`}
          ></div>
          <span
            className={`text-sm font-medium opacity-0 transition-all duration-300 group-hover:opacity-100 ${
              activeSection === section.id ? "opacity-100" : ""
            }`}
          >
            {section.name}
          </span>
        </a>
      ))}
    </div>
  );
}
