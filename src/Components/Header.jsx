"use client";
import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { IoCall } from "react-icons/io5";
import { IoMdMail } from "react-icons/io";


 function Header() {

  
  

  return (
    <header className="h-[50px] bg-[#207DFF] flex justify-center items-center">
    <main className="container mx-auto flex justify-end md:justify-between items-center">
    <div className="md:flex justify-center items-center gap-4 hidden">
              <p className="flex justify-center items-center gap-2 text-white font-medium text-[12px]"><IoCall className="text-white text-sm md:text-sm cursor-pointer" /> 0426845474</p>
              <p className="flex justify-center items-center gap-2 text-white font-medium text-[12px]"><IoMdMail className="text-white text-sm md:text-sm cursor-pointer" /> youremail@gmail.com</p>
      </div>

        <div id="rightSide" className="flex justify-center items-center gap-2">
          <div className=" px-3 flex justify-center items-center">
            <FaFacebook className="text-white text-xl md:text-2xl cursor-pointer" />
          </div>
          <div className="border-l-2 px-3 flex justify-center items-center border-white">
            <FaLinkedin className="text-white text-xl md:text-2xl cursor-pointer" />
          </div>
          <div className="border-l-2 px-3 flex justify-center items-center border-white">
            <FaInstagram className="text-white text-xl md:text-2xl cursor-pointer" />
          </div>
      </div>
   
    </main>
    </header>
  );
}

export default Header;
