import { ChevronRight } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import Link from 'next/link';

function ShowDoctor({ doctor }) {
  return (
    <div
      key={doctor.id}
      className="flex items-center gap-4 p-4 bg-white border border-[#207DFF] rounded-lg transition-all duration-300 ease-in-out hover:bg-gray-50 hover:shadow-md group"
    >
      {/* Doctor Profile Picture */}
      <div className="relative h-16 w-16 rounded-full overflow-hidden">
        <Image
          src={doctor.image || '/placeholder.png'} // Placeholder for missing images
          alt={`Dr. ${doctor.firstName}`}
          fill
          style={{ objectFit: 'cover' }}
        />
      </div>

      {/* Doctor Info */}
      <div className="flex-grow">
        <h2 className="text-[#207DFF] font-semibold text-lg truncate">
          {doctor.firstName}
        </h2>
        <p className="text-gray-700 truncate">{doctor.speciality}</p>
      </div>

      {/* View Details Button */}
      <div className="ml-auto">
        <Link
          href={`/doctors/${doctor._id}`}
          className="bg-[#F87171] text-white text-xs px-3 py-1 rounded-full flex items-center transition-all duration-300 ease-in-out group-hover:bg-[#e05252]"
        >
          View Details
          <ChevronRight className="w-3 h-3 ml-1" />
        </Link>
      </div>
    </div>
  );
}

export default ShowDoctor;
