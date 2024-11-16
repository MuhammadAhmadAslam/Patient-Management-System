// import Navbar from "@/Components/NavBar";
// import Image from "next/image";
// import React from "react";
// import { Button } from "@/Components/ui/button";
// import DoctorPageDrDisplay from "@/Components/DoctorPageDrDisplay";
// import Footer from "@/Components/Footer";
// import WebPageLayout from "@/Components/WebPageLayout";
// import { getDoctors } from "@/actions/getDoctors";
// import { auth } from "auth";
// async function DoctorsPage() {
//   // let doctors = [
//   //   {
//   //     name: "Dr. Lloyd Wilson",
//   //     specialty: "NEUROLOGIST",
//   //     image: "https://preview.colorlib.com/theme/mediplus/images/doc-1.jpg",
//   //   },
//   //   {
//   //     name: "Dr. Rachel Parker",
//   //     specialty: "OPHTHALMOLOGIST",
//   //     image: "https://preview.colorlib.com/theme/mediplus/images/doc-2.jpg",
//   //   },
//   //   {
//   //     name: "Dr. Ian Smith",
//   //     specialty: "DENTIST",
//   //     image: "https://preview.colorlib.com/theme/mediplus/images/doc-3.jpg",
//   //   },
//   //   {
//   //     name: "Dr. Alicia Henderson",
//   //     specialty: "PEDIATRICIAN",
//   //     image: "https://preview.colorlib.com/theme/mediplus/images/doc-4.jpg",
//   //   },
//   //   {
//   //     name: "Dr. Lloyd Wilson",
//   //     specialty: "NEUROLOGIST",
//   //     image: "https://preview.colorlib.com/theme/mediplus/images/doc-1.jpg",
//   //   },
//   //   {
//   //     name: "Dr. Rachel Parker",
//   //     specialty: "OPHTHALMOLOGIST",
//   //     image: "https://preview.colorlib.com/theme/mediplus/images/doc-2.jpg",
//   //   },
//   //   {
//   //     name: "Dr. Ian Smith",
//   //     specialty: "DENTIST",
//   //     image: "https://preview.colorlib.com/theme/mediplus/images/doc-3.jpg",
//   //   },
//   //   {
//   //     name: "Dr. Alicia Henderson",
//   //     specialty: "PEDIATRICIAN",
//   //     image: "https://preview.colorlib.com/theme/mediplus/images/doc-4.jpg",
//   //   },
//   // ];
  
//    async function getDoctor() {
//     let res = await fetch(`${process.env.BASE_URL}api/doctor`, {
//         cache: "no-cache",
//     })
//     res = res.json()
//     return res
// }
//   let doctors = await getDoctor()
//   let session = await auth()
//   return (
//     <div>

//     {/* <Navbar isHeroSectionVisible={false} /> */}
//       <section className="min-h-[35vh] flex justify-center items-center relative bg-[url(https://preview.colorlib.com/theme/mediplus/images/bg_1.jpg)] object-cover bg-center  bg-fixed">
//         <div className="absolute bg-[#0000002c] inset-0"></div>
//         <div className="flex justify-center items-center h-full flex-col container mx-auto">
//           <h1 className="text-center font-bold text-5xl">Our Doctors</h1>
//           <p className="px-4 md:px-24 text-center mt-3 text-md">
       
//           </p>
//         </div>
//       </section>

//       <DoctorPageDrDisplay doctors={doctors} session={session} />
//     {/* <Footer /> */}
//     </div>
//   );
// }

// export default DoctorsPage;


import Navbar from "@/Components/NavBar";
import DoctorPageDrDisplay from "@/Components/DoctorPageDrDisplay";
import Footer from "@/Components/Footer";
import { auth } from "auth";



export default async function DoctorsPage() {
  async function fetchDoctors() {
    const res = await fetch(`${process.env.BASE_URL}api/requests?status=Approved`, {
      cache: "no-cache",
    });
  
    if (!res.ok) {
      throw new Error("Failed to fetch doctors");
    }
  
    return res.json();
  }


  try {
    const doctors = await fetchDoctors();
    const session = await auth(); // Ensure `auth` works properly and is imported

    return (
      <div>
        <Navbar isHeroSectionVisible={false} session={session} />
        {/* Hero Section */}
        <section className="min-h-[35vh] flex justify-center items-center relative bg-[url(https://preview.colorlib.com/theme/mediplus/images/bg_1.jpg)] object-cover bg-center bg-fixed">
          <div className="absolute bg-[#0000002c] inset-0"></div>
          <div className="flex justify-center items-center h-full flex-col container mx-auto">
            <h1 className="text-center font-bold text-5xl">Our Doctors</h1>
          </div>
        </section>

        {/* Doctor Display */}
        <DoctorPageDrDisplay doctors={doctors.requests} session={session} />

        {/* Footer */}
        <Footer />
      </div>
    );
  } catch (error) {
    console.error(error);

    return (
      <div>
        <h1 className="text-center text-2xl text-red-500 mt-10">
          Failed to load data
        </h1>
      </div>
    );
  }
}
