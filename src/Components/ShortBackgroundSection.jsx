import React from 'react'

function ShortBackgroundSection() {
  return (
       <section className="bg-[#1b0606]">
       <div className="relative h-[520px] mb-5 bg-[url('https://preview.colorlib.com/theme/mediplus/images/bg_2.jpg')] bg-cover bg-[center bottom] bg-fixed">
         {/* Overlay for dim effect */}
         <div className="absolute inset-0 bg-black opacity-50"></div>
         
         {/* Content */}
         <div className="relative flex flex-col items-center justify-center h-full text-center text-white px-4">
           <h1 className="text-4xl font-bold mb-2">Your Health is Our Priority</h1>
           <p className="text-lg mb-6">We can manage your dream building. A small river named Duden flows by their place</p>
           
           <button className="px-6 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition">
             Search Doctors
           </button>
         </div>
       </div>
     </section>
     
     
  )
}

export default ShortBackgroundSection