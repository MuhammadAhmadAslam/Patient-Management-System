import Image from "next/image";
import React from "react";
import Hero from "../../public/Images/hero.png";
function HeroSection() {
  return (
    <div className="min-h-[80vh]">
      <section className="container flex justify-start items-center mx-auto flex-wrap">
        <div className="w-[100%] md:w-[60%] px-5">
          <h1 className="font-bold text-2xl md:text-7xl xl:text-8xl mt-[100px] text-[#207DFF]">Your Partner In</h1>
          <h1 className="font-bold text-2xl md:text-7xl xl:text-8xl text-[#F87171]">Health <span className="text-[#207DFF]">And Wellness</span></h1>
          <p className="text-sm mt-6">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti
            perspiciatis, dolorem quo quaerat maxime placeat fuga eaque
            reiciendis amet odit? Quisquam dolorum eius eum, consectetur
            incidunt distinctio eos illum voluptates.
          </p>
          <button className="bg-[#207DFF] px-3 text-white rounded-sm py-3 mt-8">Make An Appoinment</button>
        </div>
      </section>
    </div>
  );
}

export default HeroSection;
