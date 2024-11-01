"use client"
import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import Link from "next/link";
import Header from "./Header";
import HeroSection from "./HeroSection";
import "../app/globals.css";
const Navbar = () => {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSidebar = () => {
    setSidebarVisible((prev) => !prev);
  };

  return (
    <section >
    <Header />
    <nav className="bg-fixed bg-no-repeat bg-[url(https://preview.colorlib.com/theme/mediplus/images/bg_3.jpg.webp)] bg-cover bg-center" >
    <div className="bg-[#E3E3E3]">

  <main className="container mx-auto">
      <div className="max-w-7xl mx-auto ">
        <div className="flex justify-between items-center h-16">
          {/* Left side - Logo */}
          <div className="flex-shrink-0">
            <Link href={'/'}>
              <h1 className="text-sm lg:text-2xl xl:text-2xl md:text-md font-normal text-black">
                Patient Management System
              </h1>
            </Link>
          </div>

          {/* Right side - Menu for large screens */}
          <div className="hidden md:flex space-x-8">
            <Link href={"/"} className="nav-item text-[black] text-md">
              Home
            </Link>
            <Link href={"/about"} className="nav-item text-[black] text-md">
              About
            </Link>
            <Link href={"/contact"} className="nav-item text-[black] text-md">
              Contact Us
            </Link>
            <Link href={"/contact"} className="nav-item text-[black] text-md">
              Contact Us
            </Link>
          </div>

          {/* Hamburger Menu for small/medium screens */}
          <div className="md:hidden flex items-center">
            {sidebarVisible ? (
              <FaTimes
                className="text-2xl cursor-pointer"
                onClick={toggleSidebar}
              />
            ) : (
              <FaBars
                className="text-2xl cursor-pointer"
                onClick={toggleSidebar}
              />
            )}
          </div>
        </div>
      </div>

      {/* Sidebar for mobile menu */}
      <div
        className={`fixed inset-y-0 right-0 transform ${
          sidebarVisible ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out w-64 bg-white shadow-lg p-5 z-20`}
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-[#black] text-xs font-bold">Patient Management System</h2>
          <FaTimes
            className="text-2xl cursor-pointer text-[#6CA0D1]"
            onClick={toggleSidebar}
          />
        </div>
        <Link href={"/"} className="nav-item text-[#6CA0D1] block mb-3" onClick={toggleSidebar}>
          Home
        </Link>
        <Link href={"/about"} className="nav-item text-[#000] block mb-3" onClick={toggleSidebar}>
          About
        </Link>
        <Link href={"/contact"} className="nav-item text-[#000] block mb-3" onClick={toggleSidebar}>
          Contact Us
        </Link>
      </div>

      {/* Overlay for sidebar */}
      {sidebarVisible && (
        <div
          className="fixed inset-0 bg-black opacity-50 z-10"
          onClick={toggleSidebar}
        />
      )}
  </main>
  </div>

  <HeroSection />
    </nav>

    </section>
  );
};

export default Navbar;
