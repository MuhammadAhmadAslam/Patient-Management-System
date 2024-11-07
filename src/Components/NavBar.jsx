// "use client";
// import React, { useState } from "react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import Link from "next/link";
// import Header from "./Header";
// import HeroSection from "./HeroSection";
// import "../app/globals.css";
// import { Button } from "./ui/button";
// const Navbar = ({isHeroSectionVisible }) => {
//   const [sidebarVisible, setSidebarVisible] = useState(false);

//   const toggleSidebar = () => {
//     setSidebarVisible((prev) => !prev);
//   };

//   const isLogin = true;

//   return (
//     <section>
//       <Header />
//       <nav className="bg-fixed bg-no-repeat bg-[url(https://preview.colorlib.com/theme/mediplus/images/bg_3.jpg.webp)] bg-cover bg-center">
//         <div className="bg-[#E3E3E3]">
//           <main className="container mx-auto">
//             <div className="max-w-7xl mx-5">
//               <div className="flex justify-between items-center h-16">
//                 {/* Left side - Logo */}
//                 <div className="flex-shrink-0">
//                   <Link href={"/"}>
//                     <img
//                       style={{
//                         width: "50px",
//                         height: "50px",
//                         borderRadius: "50%",
//                       }}
//                       src="https://cdn.vectorstock.com/i/1000v/68/21/creative-medical-logo-and-healthcare-concept-vector-46176821.jpg"
//                     />
//                   </Link>
//                 </div>

//                 {/* Right side - Menu for large screens */}
//                 <div className="hidden md:flex space-x-5 md:justify-center md:items-center">
//                   <Link href={"/"} className="nav-item text-[black] text-sm">
//                     Home
//                   </Link>
//                   <Link
//                     href={"/doctors"}
//                     className="nav-item text-[black] text-sm"
//                   >
//                     Doctors
//                   </Link>
//                   <Link
//                     href={"/contact"}
//                     className="nav-item text-[black] text-sm"
//                   >
//                     About Us
//                   </Link>
//                   <Link
//                     href={"/contact"}
//                     className="nav-item text-[black] text-sm"
//                   >
//                     Contact Us
//                   </Link>
//                   <div>
//                     {isLogin ? (
//                       <Link
//                         href={"/login"}
//                         className="bg-[#207DFF] text-white px-4 py-2 rounded text-sm"
//                       >
//                         Book An Appointment
//                       </Link>
//                     ) : (
//                       <Link
//                         href={"/login"}
//                         className="bg-[#207DFF] text-white px-4 py-2 rounded text-sm"
//                       >
//                         Login
//                       </Link>
//                     )}
//                   </div>
//                 </div>

//                 {/* Hamburger Menu for small/medium screens */}
//                 <div className="md:hidden flex items-center">
//                   {sidebarVisible ? (
//                     <FaTimes
//                       className="text-2xl cursor-pointer"
//                       onClick={toggleSidebar}
//                     />
//                   ) : (
//                     <FaBars
//                       className="text-2xl cursor-pointer"
//                       onClick={toggleSidebar}
//                     />
//                   )}
//                 </div>
//               </div>
//             </div>

//             {/* Sidebar for mobile menu */}
//             <div
//               className={`fixed inset-y-0 right-0 transform ${
//                 sidebarVisible ? "translate-x-0" : "translate-x-full"
//               } transition-transform duration-300 ease-in-out w-64 bg-white shadow-lg p-5 z-20`}
//             >
//               <div className="flex justify-between items-center mb-4">
//                 <h2 className="text-[#black] text-xs font-bold">
//                   Patient Management System
//                 </h2>
//                 <FaTimes
//                   className="text-2xl cursor-pointer text-[#6CA0D1]"
//                   onClick={toggleSidebar}
//                 />
//               </div>
//               <Link
//                 href={"/"}
//                 className="nav-item text-[#6CA0D1] block mb-3"
//                 onClick={toggleSidebar}
//               >
//                 Home
//               </Link>
//               <Link
//                 href={"/about"}
//                 className="nav-item text-[#000] block mb-3"
//                 onClick={toggleSidebar}
//               >
//                 About
//               </Link>
//               <Link
//                 href={"/contact"}
//                 className="nav-item text-[#000] block mb-3"
//                 onClick={toggleSidebar}
//               >
//                 Contact Us
//               </Link>
//             </div>

//             {/* Overlay for sidebar */}
//             {sidebarVisible && (
//               <div
//                 className="fixed inset-0 bg-black opacity-50 z-10"
//                 onClick={toggleSidebar}
//               />
//             )}
//           </main>
//         </div>

//         {isHeroSectionVisible && (<HeroSection />)}
//       </nav>
//     </section>
//   );
// };

// export default Navbar;

"use client";
import { useState } from "react";
import Link from "next/link";
import { FaCircleUser } from "react-icons/fa6";
import Image from "next/image";
// import { Button, Sheet, SheetTrigger, SheetContent, DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from 'shadcn';
import { FaUser, FaBars, FaSearch, FaTimes, FaCalendar } from "react-icons/fa";
import { Button } from "./ui/button";
import { Sheet, SheetTrigger, SheetContent } from "./ui/sheet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
} from "./ui/dropdown-menu";
import Header from "./Header";
import { SlLogout } from "react-icons/sl";
import HeroSection from "./HeroSection";
import { auth, signOut } from "auth";
import LogoutDropDown from "./LogoutDropDown";
export default function Navbar({ isHeroSectionVisible, isLogin }) {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const handleSidebarToggle = () => {
    setSidebarVisible(!sidebarVisible);
  };


  return (
    <section className="relative">
      <Header />
      <nav className="bg-fixed bg-no-repeat bg-[url(https://preview.colorlib.com/theme/mediplus/images/bg_3.jpg.webp)] bg-cover bg-center">
        <div className="bg-[#E3E3E3]/90 backdrop-blur-sm">
          <main className="container mx-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex justify-between items-center h-16">
                {/* Left side - Logo */}
                <div className="flex-shrink-0">
                  <Link href="/">
                    <Image
                      src="https://img.freepik.com/free-vector/realistic-world-health-day-illustration-with-planet-stethoscope_23-2148864737.jpg"
                      alt="Logo"
                      width={50}
                      height={50}
                      className="rounded-full"
                    />
                  </Link>
                </div>

                {/* Right side - Menu for large screens */}
                <div className="hidden md:flex items-center space-x-4">
                  <Link href="/" className="nav-item text-black text-sm hover:text-[#207DFF] transition-colors">Home</Link>
                  <Link href="/doctors" className="nav-item text-black text-sm hover:text-[#207DFF] transition-colors">Doctors</Link>
                  <Link href="/about" className="nav-item text-black text-sm hover:text-[#207DFF] transition-colors">About Us</Link>
                  <Link href="/contact" className="nav-item text-black text-sm hover:text-[#207DFF] transition-colors">Contact Us</Link>

                  {/* Book Appointment and Search Icon */}
                  <div className="flex items-center space-x-4">
                    {isLogin ? (
                      <Button asChild className="bg-[#207DFF] hover:bg-[#1a6ad4] text-white">
                        <Link href="/doctors">Book An Appointment</Link>
                      </Button>
                    ) : (
                      <Link href="/login" className="bg-[#207DFF] hover:bg-[#1a6ad4] rounded-lg px-6 py-1 text-white">Login</Link>
                    )}
                  </div>

                  {/* User Icon and Dropdown */}
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <FaUser className="h-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Link href="/account" className="flex justify-center items-center gap-3"><FaCircleUser />My Account</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/doctors" className="flex justify-center items-center gap-3"><FaCalendar />My Appointments</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <LogoutDropDown />
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>

                {/* Hamburger Menu for small/medium screens */}
                <div className="md:hidden flex items-center">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <FaUser className="h-5 w-5" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Link href="/account" className="flex justify-center items-center gap-3"><FaCircleUser />My Account</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Link href="/doctors" className="flex justify-center items-center gap-3"><FaCalendar />My Appointments</Link>
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                       <LogoutDropDown />
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>

                  {/* Sheet (side drawer) for mobile menu */}
                  <Sheet open={sidebarVisible} onOpenChange={handleSidebarToggle}>
                    <SheetTrigger asChild>
                      <Button variant="ghost" size="icon">
                        <FaBars className="h-5 w-5" />
                      </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className="w-64 bg-white shadow-lg p-5">
                      <div className="flex justify-between items-center mb-4">
                        <h2 className="text-black text-sm font-bold">Patient Management System</h2>
                      </div>
                      <div className="space-y-3">
                        <Link href="/" className="nav-item text-[#6CA0D1] block" onClick={handleSidebarToggle}>Home</Link>
                        <Link href="/doctors" className="nav-item text-black block" onClick={handleSidebarToggle}>Doctors</Link>
                        <Link href="/about" className="nav-item text-black block" onClick={handleSidebarToggle}>About Us</Link>
                        <Link href="/contact" className="nav-item text-black block" onClick={handleSidebarToggle}>Contact Us</Link>
                        {isLogin ? (
                          <>
                            <Link href="/account" className="nav-item text-black block" onClick={handleSidebarToggle}>My Account</Link>
                            <Link href="/doctors" className="nav-item text-black block" onClick={handleSidebarToggle}>My Appointments</Link>
                            <form action={async () => { await signOut() }}>
                              <button>Logout</button>
                            </form>
                          </>
                        ) : (
                          <Link href="/login" className="nav-item text-black block" onClick={handleSidebarToggle}>Login</Link>
                        )}
                      </div>
                    </SheetContent>
                  </Sheet>
                </div>
              </div>
            </div>
          </main>
        </div>
        {isHeroSectionVisible && <HeroSection />}
      </nav >
    </section >

  );
}
