import Image from "next/image"
import { Plus } from "lucide-react"
import Background from '@/public/background.png'
import Downstream from '@/public/downstream.png'
import Aviation from '@/public/aviation.png'
import Energy from '@/public/energy.png'
import Offshore from '@/public/offshore.png'
import Pipeline from '@/public/pipeline.png'

export default function ProjectGrid() {
  const projects = [
    {
      id: 1,
      title: "Railway Transportation",
      image: Downstream,
      category: "INFRASTRUCTURE",
    },
    {
      id: 2,
      title: "Aviation Services",
      image: Aviation,
      category: "AVIATION & ENERGY",
      description:
        "Our aviation services projects are dedicated to providing comprehensive solutions that enhance safety, efficiency, and performance in the aviation industry.",
    },
    {
      id: 3,
      title: "Oil Refinery",
      image: Energy,
      category: "ENERGY",
    },
    {
      id: 4,
      title: "Offshore Platform",
      image: Offshore,
      category: "OIL & GAS",
    },
    {
      id: 5,
      title: "Industrial Facility",
      image: Pipeline,
      category: "INFRASTRUCTURE",
    },
    {
      id: 6,
      title: "Renewable Energy",
      image: Background,
      category: "ENERGY",
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {projects.map((project) => (
        <div key={project.id} className="relative group overflow-hidden rounded-lg shadow-md">
          <div className="relative h-64 w-full">
            {project.id === 1 && (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                style={{ objectPosition: "0% 25%" }}
              />
            )}
            {project.id === 2 && (
              <div className="relative h-full w-full bg-blue-900">
                <div className="absolute inset-0 flex flex-col justify-center items-center p-6 bg-white/90 z-10">
                  <div className="rounded-full bg-white p-2 mb-4 border border-blue-200">
                    <Plus className="h-6 w-6 text-blue-500" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-500 mb-2">Aviation Services</h3>
                  <p className="text-sm text-center text-gray-700">
                    Our aviation services projects are dedicated to providing comprehensive solutions that enhance
                    safety, efficiency, and performance in the aviation industry.
                  </p>
                </div>
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover"
                  style={{ objectPosition: "50% 25%" }}
                />
              </div>
            )}
            {project.id === 3 && (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                style={{ objectPosition: "100% 25%" }}
              />
            )}
            {project.id === 4 && (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                style={{ objectPosition: "0% 75%" }}
              />
            )}
            {project.id === 5 && (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                style={{ objectPosition: "50% 75%" }}
              />
            )}
            {project.id === 6 && (
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover"
                style={{ objectPosition: "100% 75%" }}
              />
            )}
          </div>

          {project.id !== 2 && (
            <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <button className="bg-white p-3 rounded-full">
                <Plus className="h-6 w-6 text-blue-500" />
              </button>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
