"use client"

import type React from "react"
import { useState } from "react"
import { useInView } from "react-intersection-observer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Github, Linkedin, Mail, Send, AlertCircle } from "lucide-react"
import { sendEmail } from "@/app/actions/send-email"

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formResponse, setFormResponse] = useState<{
    success?: boolean
    message?: string
    errors?: Record<string, string[]>
  } | null>(null)

  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setFormResponse(null)

    try {
      const formDataToSend = new FormData()
      formDataToSend.append("name", formData.name)
      formDataToSend.append("email", formData.email)
      formDataToSend.append("message", formData.message)

      const response = await sendEmail(formDataToSend)
      setFormResponse(response)

      if (response.success) {
        setFormData({ name: "", email: "", message: "" })
      }
    } catch (error) {
      setFormResponse({
        success: false,
        message: "An unexpected error occurred. Please try again.",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4" ref={ref}>
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white relative pb-4 transition-all duration-700 ${
            inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Get In Touch
          <span className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-primary-500"></span>
        </h2>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div
              className={`transition-all duration-700 delay-300 ${
                inView ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"
              }`}
            >
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">Contact Information</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Feel free to reach out to me for collaboration, job opportunities, or just to say hello!
              </p>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
                    <Mail className="text-primary-500 dark:text-primary-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">Email</h4>
                    <a
                      href="mailto:contact@example.com"
                      className="text-gray-900 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    >
                      azibmaher771@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
                    <Github className="text-primary-500 dark:text-primary-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">GitHub</h4>
                    <a
                      href="https://github.com/AzibMoeen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    >
                      github.com/AzibMoeen
                    </a>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-primary-100 dark:bg-primary-900/30 p-3 rounded-full mr-4">
                    <Linkedin className="text-primary-500 dark:text-primary-400" size={20} />
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-gray-500 dark:text-gray-400">LinkedIn</h4>
                    <a
                      href="https://linkedin.com/in/azib-moeen"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-900 dark:text-white hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                    >
                      linkedin.com/in/azib-moeen
                    </a>
                  </div>
                </div>
              </div>
            </div>

            <div
              className={`transition-all duration-700 delay-500 ${
                inView ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"
              }`}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full dark:bg-gray-800 dark:border-gray-700"
                    placeholder="Your name"
                  />
                  {formResponse?.errors?.name && (
                    <p className="mt-1 text-sm text-red-500">{formResponse.errors.name[0]}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full dark:bg-gray-800 dark:border-gray-700"
                    placeholder="Your email"
                  />
                  {formResponse?.errors?.email && (
                    <p className="mt-1 text-sm text-red-500">{formResponse.errors.email[0]}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="w-full min-h-[120px] dark:bg-gray-800 dark:border-gray-700"
                    placeholder="Your message"
                  />
                  {formResponse?.errors?.message && (
                    <p className="mt-1 text-sm text-red-500">{formResponse.errors.message[0]}</p>
                  )}
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white"
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={16} className="mr-2" />
                      Send Message
                    </>
                  )}
                </Button>

                {formResponse && (
                  <div
                    className={`p-3 rounded-md text-center ${
                      formResponse.success
                        ? "bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300"
                        : "bg-red-50 dark:bg-red-900/30 text-red-700 dark:text-red-300"
                    }`}
                  >
                    <div className="flex items-center justify-center gap-2">
                      {!formResponse.success && <AlertCircle size={16} />}
                      {formResponse.message}
                    </div>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
