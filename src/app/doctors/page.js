import Navbar from "@/Components/NavBar";
import Image from "next/image";
import React from "react";
import { Button } from "@/Components/ui/button";
import DoctorPageDrDisplay from "@/Components/DoctorPageDrDisplay";
import Footer from "@/Components/Footer";
import WebPageLayout from "@/Components/WebPageLayout";
function DoctorsPage() {
  let doctors = [
    {
      name: "Dr. Lloyd Wilson",
      specialty: "NEUROLOGIST",
      image: "https://preview.colorlib.com/theme/mediplus/images/doc-1.jpg",
    },
    {
      name: "Dr. Rachel Parker",
      specialty: "OPHTHALMOLOGIST",
      image: "https://preview.colorlib.com/theme/mediplus/images/doc-2.jpg",
    },
    {
      name: "Dr. Ian Smith",
      specialty: "DENTIST",
      image: "https://preview.colorlib.com/theme/mediplus/images/doc-3.jpg",
    },
    {
      name: "Dr. Alicia Henderson",
      specialty: "PEDIATRICIAN",
      image: "https://preview.colorlib.com/theme/mediplus/images/doc-4.jpg",
    },
    {
      name: "Dr. Lloyd Wilson",
      specialty: "NEUROLOGIST",
      image: "https://preview.colorlib.com/theme/mediplus/images/doc-1.jpg",
    },
    {
      name: "Dr. Rachel Parker",
      specialty: "OPHTHALMOLOGIST",
      image: "https://preview.colorlib.com/theme/mediplus/images/doc-2.jpg",
    },
    {
      name: "Dr. Ian Smith",
      specialty: "DENTIST",
      image: "https://preview.colorlib.com/theme/mediplus/images/doc-3.jpg",
    },
    {
      name: "Dr. Alicia Henderson",
      specialty: "PEDIATRICIAN",
      image: "https://preview.colorlib.com/theme/mediplus/images/doc-4.jpg",
    },
  ];
  return (
    <WebPageLayout isHeroSectionVisible={false} >
      <section className="min-h-[35vh] flex justify-center items-center relative bg-[url(https://preview.colorlib.com/theme/mediplus/images/bg_1.jpg)] object-cover bg-center  bg-fixed">
        <div className="absolute bg-[#0000002c] inset-0"></div>
        <div className="flex justify-center items-center h-full flex-col container mx-auto">
          <h1 className="text-center font-bold text-5xl">Our Doctors</h1>
          <p className="px-4 md:px-24 text-center mt-3 text-md">
            At our clinic, we believe in a personalized approach to care. Our
            dedicated team of doctors combines expertise with compassion,
            ensuring you receive the highest quality of care tailored to your
            unique needs. Your health journey is our priority, and we are here to
            support you every step of the way—because you deserve more than just
            treatment; you deserve care that feels like family.
          </p>
        </div>
      </section>

      <DoctorPageDrDisplay />
    </WebPageLayout>
  );
}

export default DoctorsPage;
