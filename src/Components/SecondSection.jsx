import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function SecondSection() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="relative h-[600px] w-full">
          <Image
            src="https://preview.colorlib.com/theme/mediplus/images/about.jpg"
            alt="Doctor with patient"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
            We Are{" "}
            <span className="text-blue-500">Mediplus</span>{" "}
            A Medical Clinic
          </h1>
          <p className="text-lg text-gray-600">
            A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country, in which roasted parts of sentences fly into your mouth. It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-8"
            >
              Make an appointment
            </Button>
            <Button
              size="lg"
              variant="secondary"
              className="bg-red-400 hover:bg-red-500 text-white rounded-full px-8"
            >
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}