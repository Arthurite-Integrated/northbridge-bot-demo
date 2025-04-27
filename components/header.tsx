"use client"

import { useState, useEffect, MouseEvent } from "react"
import Image from "next/image"
import { Share2 } from "lucide-react"
import Logo from '@/public/logo.png'

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState("home")

  const links = [
    { name: "Home", href: "#home", id: "home" },
    { name: "Services", href: "#services", id: "services" },
    { name: "Projects", href: "#projects", id: "projects" },
    { name: "Team", href: "#team", id: "team" },
    { name: "News", href: "#news", id: "news" },
    { name: "Contacts", href: "#contacts", id: "contacts" },
  ]

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100 // Add offset for better UX

      // Get all sections and determine which one is currently in view
      const sections = links.map((link) => {
        const element = document.getElementById(link.id)
        if (!element) return { id: link.id, position: 0 }

        return {
          id: link.id,
          position: element.offsetTop,
          height: element.offsetHeight,
        }
      })

      // Find the current active section based on scroll position
      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i]
        if (scrollPosition >= section.position) {
          setActiveSection(section.id)
          break
        }
      }
    }

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll)

    // Initial check
    handleScroll()

    // Clean up
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  // Smooth scroll function
  const scrollToSection = (e: any, href: string) => {
    e.preventDefault()
    const targetId = href.replace("#", "")
    const element = document.getElementById(targetId)

    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80, // Offset for header
        behavior: "smooth",
      })

      // Close mobile menu after clicking
      setIsMobileMenuOpen(false)
    }
  }

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <a href="#home">
            <Image src={Logo} alt="Northbridge Energy Limited" width={200} height={60} className="h-auto" />
          </a>
          <button
            className="md:hidden rounded-md p-2 text-gray-700 hover:bg-gray-100"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        <div className={`md:flex flex-col md:flex-row md:items-center ${isMobileMenuOpen ? "block" : "hidden"}`}>
          <nav className="md:mr-6">
            <ul className="flex flex-col md:flex-row md:space-x-8">
              {links.map((link) => (
                <li key={link.id}>
                  <a
                    href={link.href}
                    onClick={(e) => scrollToSection(e, link.href)}
                    className={`block py-2 text-sm font-medium ${
                      activeSection === link.id
                        ? "text-blue-500 border-b-2 border-blue-500"
                        : "text-gray-700 hover:text-blue-500"
                    }`}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-4">
            <a
              href="#services"
              onClick={(e) => scrollToSection(e, "#services")}
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-md px-6 py-2 text-center"
            >
              Explore Our Products
            </a>
            <button className="p-2 rounded-full bg-white border border-gray-200 text-gray-700 hover:bg-gray-100">
              <Share2 size={20} />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}
