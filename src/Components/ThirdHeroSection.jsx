import { Stethoscope } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import "../app/globals.css"
export default function ThirdHeroSection() {
  const specialties = [
    { name: "Neurology", active: false },
    { name: "Opthalmology", active: false },
    { name: "Nuclear Magnetic", active: false },
    { name: "Surgical", active: true },
    { name: "Cardiology", active: false },
    { name: "X-ray", active: false },
    { name: "Dental", active: false },
    { name: "Traumatology", active: false },
    { name: "Cardiology", active: false },
  ]

  return (
       <div className="container mx-auto px-4 py-12">
       <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
         {specialties.map((specialty, index) => (
           <Card
             key={index}
             className="group bg-white hover:bg-blue-500 transition duration-300"
           >
             <CardContent className="p-6 text-center">
               <div className="flex justify-center mb-4">
                 <Stethoscope
                   className="w-8 h-8 text-blue-500 group-hover:text-white"
                 />
               </div>
               <h3 className="text-xl font-semibold mb-3 text-gray-800 group-hover:text-white">
                 {specialty.name}
               </h3>
               <p className="text-sm text-gray-500 group-hover:text-blue-100">
                 Far far away, behind the word mountains
               </p>
             </CardContent>
           </Card>
         ))}
       </div>
     </div>     
  )
}