import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function PremiumDoctorsSection() {
  const doctors = [
    {
      name: "Dr. Lloyd Wilson",
      specialty: "NEUROLOGIST",
      image: "https://preview.colorlib.com/theme/mediplus/images/doc-1.jpg",
    },
    {
      name: "Dr. Rachel Parker",
      specialty: "OPHTHALMOLOGIST",
      image: "https://preview.colorlib.com/theme/mediplus/images/doc-2.jpg",
    },
    {
      name: "Dr. Ian Smith",
      specialty: "DENTIST",
      image: "https://preview.colorlib.com/theme/mediplus/images/doc-3.jpg",
    },
    {
      name: "Dr. Alicia Henderson",
      specialty: "PEDIATRICIAN",
      image: "https://preview.colorlib.com/theme/mediplus/images/doc-4.jpg",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Our Qualified Doctors</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Separated they live in. A small river named Duden flows by their place and supplies it with the necessary regelialia. It is a paradisematic country
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {doctors.map((doctor, index) => (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="relative w-full h-[200px] mb-6">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
            <p className="text-blue-500 text-sm font-medium tracking-wider mb-4">
              {doctor.specialty}
            </p>
            <Button
              className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4"
            >
              See Details About Doctor
            </Button>
          </div>
        ))}
      </div>
    </div>
  )
}