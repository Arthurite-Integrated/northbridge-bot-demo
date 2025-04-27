"use client"

import Link from "next/link"
import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export default function MainNavigation() {
  const [activeLink, setActiveLink] = useState("home")

  const links = [
    { name: "Home", href: "/", id: "home" },
    { name: "Services", href: "/services", id: "services" },
    { name: "Projects", href: "/projects", id: "projects" },
    { name: "Team", href: "/team", id: "team" },
    { name: "News", href: "/news", id: "news" },
    { name: "Contacts", href: "/contacts", id: "contacts" },
  ]

  return (
    <nav className="flex items-center">
      {/* Mobile Navigation */}
      <div className="md:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon">
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="mt-8 flex flex-col space-y-4">
              {links.map((link) => (
                <Link
                  key={link.id}
                  href={link.href}
                  className="text-lg font-medium"
                  onClick={() => setActiveLink(link.id)}
                >
                  {link.name}
                </Link>
              ))}
              <Link href="/products" className="mt-4 rounded bg-blue-600 px-4 py-2 text-center text-white">
                Explore Our Products
              </Link>
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:block">
        <div className="flex items-center space-x-8">
          {links.map((link) => (
            <Link
              key={link.id}
              href={link.href}
              className={`border-b-2 pb-1 text-sm font-medium transition-colors ${
                activeLink === link.id
                  ? "border-blue-600 text-blue-600"
                  : "border-transparent text-gray-700 hover:text-blue-600"
              }`}
              onClick={() => setActiveLink(link.id)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
