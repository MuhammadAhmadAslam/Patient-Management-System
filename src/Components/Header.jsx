import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
function Header() {
  return (
    <header className="h-[50px] bg-[#699BF7] flex justify-center items-center">
    <main className="container mx-auto flex justify-end items-center">
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
