import { Phone, Headphones, HardHat } from "lucide-react"

export default function ServiceCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
        <div className="mb-4">
          <HardHat className="h-12 w-12" />
        </div>
        <h3 className="text-lg font-bold mb-2">What We Offer</h3>
        <div className="w-24 h-1 bg-blue-500 mb-8"></div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-medium py-3 px-8 rounded">
                VIEW ALL SERVICES
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
        <div className="mb-4">
          <Phone className="h-12 w-12" />
        </div>
        <h3 className="text-lg font-bold mb-2">OIL AND GAS SECTOR</h3>
        <p className="text-gray-600">Leading the way in sustainable energy solutions.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
        <div className="mb-4">
          <Headphones className="h-12 w-12" />
        </div>
        <h3 className="text-lg font-bold mb-2">CUTTING-EDGE SOLUTIONS</h3>
        <p className="text-gray-600">Innovative approaches for modern energy needs.</p>
      </div>

      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col items-center text-center">
        <div className="mb-4">
          <HardHat className="h-12 w-12" />
        </div>
        <h3 className="text-lg font-bold mb-2">TECHNICAL CONSULTANCY</h3>
        <p className="text-gray-600">Expert advice for your energy projects.</p>
      </div>

      
    </div>
  )
}
