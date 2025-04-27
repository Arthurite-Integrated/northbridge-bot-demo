import Image from "next/image"

export default function StatsSection() {
  return (
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative">
          <div className="text-[200px] font-bold text-blue-500 leading-none flex items-center">
            <span>3</span>
            <span>0</span>
          </div>
          <h2 className="text-3xl font-bold mb-4">Years Of Experience</h2>
          <p className="text-gray-600 mb-8">
            Northbridge Energy have rich experience both in the energy and Oil sector.
          </p>
          <a
            href="#contacts"
            className="border-2 border-black hover:bg-black hover:text-white transition-colors px-8 py-3 font-medium inline-block"
          >
            GET IN TOUCH
          </a>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="border-l border-t p-6">
            <div className="text-6xl font-bold mb-2">1k</div>
            <div className="text-gray-500 text-sm">OIL CONTRACTS COMPLETED</div>
          </div>

          <div className="border-l border-t p-6">
            <div className="text-6xl font-bold mb-2">40</div>
            <div className="text-gray-500 text-sm">CONSULTANTANCY SERVICES RENDERED</div>
          </div>

          <div className="border-l border-t p-6">
            <div className="text-6xl font-bold mb-2">12</div>
            <div className="text-gray-500 text-sm">AWARDS WON</div>
          </div>

          <div className="border-l border-t p-6">
            <div className="text-6xl font-bold mb-2">600</div>
            <div className="text-gray-500 text-sm">EMPLOYEES</div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12">
        <div className="h-40 relative rounded overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-26%20at%2022.14.36-Te83VFu8BMBzzvlKbMxScsfLJSItwi.png"
            alt="Energy facility"
            fill
            className="object-cover opacity-70 hover:opacity-100 transition-opacity"
            style={{ objectPosition: "0% 75%" }}
          />
        </div>
        <div className="h-40 relative rounded overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-26%20at%2022.14.36-Te83VFu8BMBzzvlKbMxScsfLJSItwi.png"
            alt="Drilling facility"
            fill
            className="object-cover opacity-70 hover:opacity-100 transition-opacity"
            style={{ objectPosition: "33% 75%" }}
          />
        </div>
        <div className="h-40 relative rounded overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-26%20at%2022.14.36-Te83VFu8BMBzzvlKbMxScsfLJSItwi.png"
            alt="Downstream services"
            fill
            className="object-cover opacity-70 hover:opacity-100 transition-opacity"
            style={{ objectPosition: "66% 75%" }}
          />
        </div>
        <div className="h-40 relative rounded overflow-hidden">
          <Image
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-04-26%20at%2022.14.36-Te83VFu8BMBzzvlKbMxScsfLJSItwi.png"
            alt="Oil barrels"
            fill
            className="object-cover opacity-70 hover:opacity-100 transition-opacity"
            style={{ objectPosition: "100% 75%" }}
          />
        </div>
      </div>
    </div>
  )
}
