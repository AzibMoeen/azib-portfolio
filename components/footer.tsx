import Link from "next/link"
import { Github, Linkedin, Mail } from "lucide-react"

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100 dark:bg-gray-900 dark:border-gray-800">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <Link href="/" className="text-xl font-bold text-primary-500 transition-colors hover:text-primary-600">
              Azib Moeen
            </Link>
            <p className="text-gray-600 mt-2 dark:text-gray-400">Building modern web experiences</p>
          </div>

          <div className="flex space-x-4">
            <Link
              href="https://github.com/AzibMoeen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-500 transition-colors dark:text-gray-400 dark:hover:text-primary-400"
              aria-label="GitHub"
            >
              <Github size={20} />
            </Link>
            <Link
              href="https://linkedin.com/in/azib-moeen"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-primary-500 transition-colors dark:text-gray-400 dark:hover:text-primary-400"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </Link>
            <Link
              href="mailto:azibmaher771@gmail.com"
              className="text-gray-600 hover:text-primary-500 transition-colors dark:text-gray-400 dark:hover:text-primary-400"
              aria-label="Email"
            >
              <Mail size={20} />
            </Link>
          </div>
        </div>
        <div className="mt-8 pt-4 border-t border-gray-200 text-center text-gray-500 text-sm dark:border-gray-800 dark:text-gray-400">
          © {new Date().getFullYear()} Azib Moeen. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

export default Footer
