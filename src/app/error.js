
"use client"
export default function CustomErrorPage() {
       return (
         <div className="min-h-screen flex flex-col items-center justify-center bg-[#E1E1E1] text-center px-4">
           <div className="max-w-lg mx-auto">
             <h1 className="text-6xl font-bold text-[#207DFF] mb-4">404</h1>
             <p className="text-2xl font-semibold text-black mb-6">
               Oops! Page Not Found
             </p>
             <p className="text-lg text-black mb-8">
               It seems you have reached an unknown destination. Lets get you back on track!
             </p>
     
             {/* CTA Buttons */}
             <div className="flex space-x-4">
               <a href="/" className="bg-[#207DFF] text-white px-6 py-2 rounded-lg hover:bg-[#1a6ad4] transition">
                 Go Home
               </a>
               <a href="/contact" className="bg-[#F87171] text-white px-6 py-2 rounded-lg hover:bg-[#e55e5e] transition">
                 Contact Support
               </a>
             </div>
     
             {/* Optional Links */}
             <div className="mt-8">
               <a href="/doctors" className="text-black hover:text-[#207DFF] transition">
                 Back to Doctors
               </a>
               <span className="mx-2 text-gray-400">|</span>
               <a href="/faq" className="text-black hover:text-[#207DFF] transition">
                 View FAQs
               </a>
             </div>
           </div>
         </div>
       );
     }
     