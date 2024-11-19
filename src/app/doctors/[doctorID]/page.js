import Image from "next/image";
import { Star, Phone, Mail, MapPin, Clock } from "lucide-react";
import Navbar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import {Calendar} from "../../../Components/ui/calendar"
import WebPageLayout from "@/Components/WebPageLayout";
import { getSingleDoctor } from "@/actions/getDoctors";
import AppointmentBooking from "@/Components/BookAppointment";
import { auth } from "auth";
export default async function DoctorDetailPage({ params }) {
 
  async function getSingleDoctor(doctorID) {
    try {
      const res = await fetch(`${process.env.BASE_URL}api/requests/${doctorID}`, {
        cache: "no-cache",
      });
  
      // Check if the response is successful
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
  
      const data = await res.json();
      return data;
    } catch (error) {
      console.error("Error fetching doctor details:", error);
      return null; 
    }
  }

  let session = await auth()
  console.log(session , "session in page.js/[doctorId]");
  
  

  console.log(params, "params of doctor id");
  let doctor = await getSingleDoctor(params.doctorID);

  console.log(await  doctor, "doctor agaya page.js [doctorsId] mae");
  
  return (
    <WebPageLayout isheroSectionVisible={false}>
    {/* Hero Section */}
    <section className="bg-white shadow-sm">
      <div className="container mx-auto px-4 py-8 sm:py-12 sm:px-6 lg:px-8">
        <div className="flex flex-wrap md:flex-nowrap md:items-center md:justify-start">
          <div className="flex-shrink-0">
            <Image
              src={doctor.image || "/placeholder.png"}
              alt="Doctor's profile"
              width={200}
              height={200}
              className="h-32 w-32 rounded-full object-cover shadow-lg md:h-40 md:w-40"
            />
          </div>
          <div className="mt-4 md:mt-0 md:ml-6">
            <h1 className="text-2xl sm:text-3xl font-bold text-[#207DFF]">
              {doctor.name}
            </h1>
            <p className="mt-1 text-lg sm:text-xl text-gray-600">
              {doctor.speciality}
            </p>
            <div className="mt-2 flex items-center">
              <div className="flex text-[#F87171]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-sm text-gray-600">4.9</span>
            </div>
            <p className="mt-1 text-sm text-gray-600">Expericnce :  {doctor.experience} Years</p>
          </div>
        </div>
      </div>
    </section>
  
    {/* Doctor Bio and Details */}
    <section className="py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 grid-cols-1 md:grid-cols-2">
          {/* Doctor Bio */}
          <div>
            <h2 className="text-2xl font-semibold text-gray-900">
              About Dr. {doctor.firstName}
            </h2>
            <p className="mt-4 text-gray-600">{doctor.bio}</p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-[#207DFF]" />
                <span className="ml-2 text-gray-600">{doctor.phone}</span>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-[#207DFF]" />
                <span className="ml-2 text-gray-600">{doctor.email}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-[#207DFF]" />
                <span className="ml-2 text-gray-600">My Clinic</span>
              </div>
            </div>
          </div>
  
          {/* Appointment Booking Section */}
         <AppointmentBooking doctorID={params.doctorID} availableDays={doctor.daysAvailable} userSession={session}/>
        </div>
      </div>
    </section>
  
    {/* Patient Reviews Section */}
    <section className="bg-white py-12">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-semibold text-gray-900">Patient Reviews</h2>
        <div className="mt-6 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {/* Example Review Card */}
          <div className="rounded-lg border p-4 shadow-sm">
            <div className="flex items-center">
              <div className="flex text-[#F87171]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-current" />
                ))}
              </div>
              <span className="ml-2 text-sm font-medium text-gray-600">5</span>
            </div>
            <p className="mt-2 text-sm text-gray-600">
              Great experience with the doctor!
            </p>
            <p className="mt-2 text-sm font-medium text-gray-900">- John Doe</p>
          </div>
        </div>
      </div>
    </section>
  
    {/* CTA Button (Fixed at Bottom) */}
    <div className="fixed bottom-0 left-0 right-0 bg-white p-4 shadow-md md:hidden">
      <button className="w-full rounded-md bg-[#F87171] px-4 py-3 text-sm font-medium text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
        Book Appointment
      </button>
    </div>
  </WebPageLayout>
  
  );
}
