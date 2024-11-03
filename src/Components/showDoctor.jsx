import { ChevronRight } from 'lucide-react'
import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
function ShowDoctor({doctor}) {
  return (
       <div
       key={doctor.id}
       className="flex items-center gap-3 p-4 bg-white border border-[#207DFF] rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-50 hover:shadow-md group"
     >
       {/* Doctor Profile Picture */}
       <div className="relative h-16 w-16 rounded-full overflow-hidden mr-4">
         <Image
           src={doctor.image}
           alt={`Dr. ${doctor.name}`}
           layout="fill"
           objectFit="cover"
         />
       </div>

       {/* Doctor Info */}
       <div className="flex-grow">
         <h2 className="text-[#207DFF] font-semibold text-lg">
           {doctor.name}
         </h2>
         <p className="text-gray-700">{doctor.specialty}</p>
       </div>

       {/* View Details Button */}
       <div className="flex-shrink-0 ml-auto">
         <Link  href={`/doctors/${doctor.id}`} className="bg-[#F87171] text-white text-xs px-3 py-1 rounded-full flex items-center transition-all duration-300 ease-in-out group-hover:bg-[#e05252]">
           View Details
           <ChevronRight className="w-3 h-3 ml-1" />
         </Link>
       </div>
     </div>
  )
}

export default ShowDoctor