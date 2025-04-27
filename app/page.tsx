import Image from "next/image"
import Header from "@/components/header"
import ProjectGrid from "@/components/project-grid"
// import StatsSection from "@/components/stats-section"
import ServiceCards from "@/components/service-cards"
import { Share2 } from "lucide-react"
import Background from '@/public/background.png'
import Offers from '@/public/offers.png'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <Header />

      {/* Home/Hero Section */}
      <section id="home" className="relative">
        <div className="relative h-[600px] w-full">
          <Image
            src={Background}
            alt="Renewable energy landscape with wind turbines, dam and solar panels"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>

        <div className="absolute inset-0 flex items-center justify-center">
          <div className="container mx-auto px-4 text-center md:text-left md:pl-20 max-w-4xl">
            <h1 className="mb-6 text-5xl font-bold text-white">Civil Construction Services</h1>
            <p className="mb-8 text-lg text-white max-w-2xl">
              Northbridge Energy Limited has a lot to play in Engineering construction services including offshore and
              onshore major construction. We have executed some civil works which includes road and house construction,
              construction and rehabilitation of hospitals, schools and other civil services. As an indegineous oil and
              gas compant we have done some major construction in both offshore and onshore to support some IOCs in
              their Upstream services. We have the man power to deliver and have an impressive list of experience
              professionals.
            </p>
            <a
              href="#contacts"
              className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded inline-block"
            >
              GET IN TOUCH
            </a>
          </div>
        </div>

        {/* Share Button */}
        <button className="absolute right-4 top-4 rounded-full bg-white p-2 text-gray-700 shadow-md">
          <Share2 size={24} />
        </button>
      </section>

      {/* CTA */}
      <section className="mt-8 bg-blue-500 py-8">
        <div className="container mx-auto px-4 flex justify-center">
          <a href="#services" className="text-white text-xl font-medium">
            Explore Our Products
          </a>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <Image
                src={Offers}
                alt="Northbridge Energy Services Diagram"
                width={600}
                height={600}
                className="w-full h-auto"
              />
            </div>
            <div>
              <ServiceCards />
            </div>
          </div>
        </div>
      </section>


      {/* Projects Section */}
      <section id="projects" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Our Projects</h2>

          <div className="flex justify-center mb-10 space-x-8 border-b pb-4 overflow-x-auto">
            <button className="text-blue-500 font-medium pb-2 border-b-2 border-blue-500 whitespace-nowrap">ALL</button>
            <button className="text-gray-500 hover:text-blue-500 font-medium pb-2 border-b-2 border-transparent hover:border-blue-500 whitespace-nowrap">
              AVIATION & ENERGY
            </button>
            <button className="text-gray-500 hover:text-blue-500 font-medium pb-2 border-b-2 border-transparent hover:border-blue-500 whitespace-nowrap">
              INFRASTRUCTURE
            </button>
            <button className="text-gray-500 hover:text-blue-500 font-medium pb-2 border-b-2 border-transparent hover:border-blue-500 whitespace-nowrap">
              MAINTENANCE
            </button>
            <button className="text-gray-500 hover:text-blue-500 font-medium pb-2 border-b-2 border-transparent hover:border-blue-500 whitespace-nowrap">
              TRADING
            </button>
          </div>

          <ProjectGrid />
        </div>
      </section>

      {/* Stats Section */}
      <section id="stats" className="py-16 bg-white">
        {/* <StatsSection /> */}
      </section>
      

      {/* News Section */}
      <section id="news" className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Latest News</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* News items would go here */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Company Expansion</h3>
              <p className="text-gray-600 mb-4">Northbridge Energy expands operations to new regions...</p>
              <a href="#" className="text-blue-500 font-medium">
                Read More
              </a>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">New Partnership</h3>
              <p className="text-gray-600 mb-4">Strategic partnership announced with leading technology provider...</p>
              <a href="#" className="text-blue-500 font-medium">
                Read More
              </a>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-bold mb-2">Industry Award</h3>
              <p className="text-gray-600 mb-4">Northbridge Energy receives recognition for sustainable practices...</p>
              <a href="#" className="text-blue-500 font-medium">
                Read More
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contacts" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12 text-center">Contact Us</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Get In Touch</h3>
              <p className="text-gray-600 mb-6">
                Have questions or want to learn more about our services? Contact us today.
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <div className="bg-blue-500 p-2 rounded-full text-white mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path
                        fillRule="evenodd"
                        d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Address</h4>
                    <p className="text-gray-600">123 Energy Street, Lagos, Nigeria</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500 p-2 rounded-full text-white mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Phone</h4>
                    <p className="text-gray-600">+234 123 456 7890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-500 p-2 rounded-full text-white mr-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                      <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                      <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Email</h4>
                    <p className="text-gray-600">info@northbridgeenergy.com</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <form className="bg-white p-6 rounded-lg shadow-sm">
                <div className="mb-4">
                  <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-2 px-6 rounded-md w-full"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </main>
  )
}
