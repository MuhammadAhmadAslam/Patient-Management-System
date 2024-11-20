"use client";
import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import ShowDoctor from "./showDoctor";
import { getDoctors } from "@/actions/getDoctors";
import { useEffect, useState } from "react";
import Loader from "./Loader";
export default function PremiumDoctorsSection() {
  // const doctors = [
  //   {
  //     id: 1,
  //     name: "Dr. John Smith",
  //     specialty: "Cardiologist",
  //     image: "https://preview.colorlib.com/theme/mediplus/images/bg_2.jpg.webp",
  //     fees: 150,
  //     hospital: "Heart Care Hospital",
  //     days: ["Monday", "Wednesday", "Friday"],
  //     appointmentTime: ["09:00 AM", "01:00 PM", "03:00 PM"],
  //     bio: "Dr. Smith has over 15 years of experience in treating heart diseases and is known for his patient-centric approach.",
  //     phone: "+1234567890",
  //     email: "john.smith@example.com",
  //     experience: "15 years",
  //     reviews: [
  //       { rating: 5, comment: "Excellent doctor! Highly recommend." },
  //       { rating: 4, comment: "Very attentive and knowledgeable." },
  //     ],
  //   },
  //   {
  //     id: 2,
  //     name: "Dr. Emily Johnson",
  //     specialty: "Dermatologist",
  //     image: "https://preview.colorlib.com/theme/mediplus/images/bg_2.jpg.webp",
  //     fees: 100,
  //     hospital: "Skin Health Clinic",
  //     days: ["Tuesday", "Thursday", "Saturday"],
  //     appointmentTime: ["10:00 AM", "02:00 PM", "04:00 PM"],
  //     bio: "Dr. Johnson specializes in treating skin conditions and provides personalized care for her patients.",
  //     phone: "+1234567891",
  //     email: "emily.johnson@example.com",
  //     experience: "10 years",
  //     reviews: [
  //       { rating: 4, comment: "Great results! Very satisfied." },
  //       { rating: 5, comment: "Best dermatologist I have visited." },
  //     ],
  //   },
  //   {
  //     id: 3,
  //     name: "Dr. Michael Brown",
  //     specialty: "Orthopedic Surgeon",
  //     image: "https://preview.colorlib.com/theme/mediplus/images/bg_2.jpg.webp",
  //     fees: 200,
  //     hospital: "Bone and Joint Center",
  //     days: ["Monday", "Thursday"],
  //     appointmentTime: ["11:00 AM", "03:00 PM"],
  //     bio: "Dr. Brown is an expert in orthopedic surgeries with a focus on sports injuries and rehabilitation.",
  //     phone: "+1234567892",
  //     email: "michael.brown@example.com",
  //     experience: "12 years",
  //     reviews: [
  //       { rating: 5, comment: "Amazing surgeon! Changed my life." },
  //       { rating: 4, comment: "Professional and skilled." },
  //     ],
  //   },
  //   {
  //     id: 4,
  //     name: "Dr. Sarah Wilson",
  //     specialty: "Pediatrician",
  //     image: "https://preview.colorlib.com/theme/mediplus/images/bg_2.jpg.webp",
  //     fees: 120,
  //     hospital: "Children's Health Hospital",
  //     days: ["Monday", "Wednesday", "Friday"],
  //     appointmentTime: ["08:00 AM", "01:00 PM"],
  //     bio: "Dr. Wilson is dedicated to providing the best healthcare for children, focusing on preventative measures.",
  //     phone: "+1234567893",
  //     email: "sarah.wilson@example.com",
  //     experience: "8 years",
  //     reviews: [
  //       { rating: 5, comment: "Fantastic with kids! Highly recommend." },
  //       { rating: 5, comment: "Always takes the time to listen." },
  //     ],
  //   },
  //   {
  //     id: 5,
  //     name: "Dr. David Taylor",
  //     specialty: "Neurologist",
  //     image: "https://preview.colorlib.com/theme/mediplus/images/bg_2.jpg.webp",
  //     fees: 180,
  //     hospital: "Brain Health Institute",
  //     days: ["Tuesday", "Thursday"],
  //     appointmentTime: ["09:00 AM", "02:00 PM"],
  //     bio: "Dr. Taylor specializes in neurological disorders and is committed to improving the quality of life for his patients.",
  //     phone: "+1234567894",
  //     email: "david.taylor@example.com",
  //     experience: "20 years",
  //     reviews: [
  //       { rating: 5, comment: "Incredibly knowledgeable." },
  //       { rating: 4, comment: "Takes time to explain everything." },
  //     ],
  //   },
  //   {
  //     id: 6,
  //     name: "Dr. Jessica Lee",
  //     specialty: "Gastroenterologist",
  //     image: "https://preview.colorlib.com/theme/mediplus/images/bg_2.jpg.webp",
  //     fees: 160,
  //     hospital: "Digestive Health Center",
  //     days: ["Monday", "Wednesday", "Friday"],
  //     appointmentTime: ["10:00 AM", "01:00 PM"],
  //     bio: "Dr. Lee has extensive experience in diagnosing and treating digestive disorders.",
  //     phone: "+1234567895",
  //     email: "jessica.lee@example.com",
  //     experience: "10 years",
  //     reviews: [
  //       { rating: 4, comment: "Great care and attention to detail." },
  //       { rating: 5, comment: "Helped me a lot with my condition." },
  //     ],
  //   },
  //   {
  //     id: 7,
  //     name: "Dr. James Miller",
  //     specialty: "Endocrinologist",
  //     image: "https://preview.colorlib.com/theme/mediplus/images/bg_2.jpg.webp",
  //     fees: 150,
  //     hospital: "Hormone Health Clinic",
  //     days: ["Tuesday", "Thursday"],
  //     appointmentTime: ["09:00 AM", "03:00 PM"],
  //     bio: "Dr. Miller specializes in hormonal disorders and metabolic diseases.",
  //     phone: "+1234567896",
  //     email: "james.miller@example.com",
  //     experience: "15 years",
  //     reviews: [
  //       { rating: 5, comment: "Life-changing doctor!" },
  //       { rating: 4, comment: "Very understanding and supportive." },
  //     ],
  //   },
  //   {
  //     id: 8,
  //     name: "Dr. Laura Martinez",
  //     specialty: "Ophthalmologist",
  //     image: "https://preview.colorlib.com/theme/mediplus/images/bg_2.jpg.webp",
  //     fees: 130,
  //     hospital: "Vision Care Center",
  //     days: ["Monday", "Friday"],
  //     appointmentTime: ["10:00 AM", "02:00 PM"],
  //     bio: "Dr. Martinez focuses on eye care and offers advanced treatments for various eye conditions.",
  //     phone: "+1234567897",
  //     email: "laura.martinez@example.com",
  //     experience: "12 years",
  //     reviews: [
  //       { rating: 5, comment: "Best eye doctor ever!" },
  //       { rating: 4, comment: "Very thorough and friendly." },
  //     ],
  //   },
  //   {
  //     id: 9,
  //     name: "Dr. Robert Wilson",
  //     specialty: "Psychiatrist",
  //     image: "https://preview.colorlib.com/theme/mediplus/images/bg_2.jpg.webp",
  //     fees: 200,
  //     hospital: "Mental Health Clinic",
  //     days: ["Tuesday", "Thursday", "Saturday"],
  //     appointmentTime: ["09:00 AM", "01:00 PM"],
  //     bio: "Dr. Wilson specializes in mental health and is dedicated to providing compassionate care.",
  //     phone: "+1234567898",
  //     email: "robert.wilson@example.com",
  //     experience: "18 years",
  //     reviews: [
  //       { rating: 5, comment: "Amazing support during tough times." },
  //       { rating: 4, comment: "Listens and cares genuinely." },
  //     ],
  //   },
  //   {
  //     id: 10,
  //     name: "Dr. Alice Brown",
  //     specialty: "Obstetrician/Gynecologist",
  //     image: "https://preview.colorlib.com/theme/mediplus/images/bg_2.jpg.webp",
  //     fees: 180,
  //     hospital: "Women’s Health Center",
  //     days: ["Monday", "Wednesday", "Friday"],
  //     appointmentTime: ["08:00 AM", "02:00 PM"],
  //     bio: "Dr. Brown provides comprehensive care for women throughout their life stages.",
  //     phone: "+1234567899",
  //     email: "alice.brown@example.com",
  //     experience: "14 years",
  //     reviews: [
  //       { rating: 5, comment: "Very supportive and understanding." },
  //       { rating: 4, comment: "Highly skilled and professional." },
  //     ],
  //   },
  // ];

  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const response = await getDoctors()
        console.log(response , "response ok hae");
        setDoctors(response);
      } catch (error) {
        console.error("Error fetching doctors:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);


  console.log(doctors , "doctors");
  console.log(loading , "loading");
  console.log(error , "error");
  
  

  return (
    <div className="container mx-auto px-4 py-16">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Our Qualified Doctors</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Separated they live in. A small river named Duden flows by their place
          and supplies it with the necessary regelialia. It is a paradisematic
          country
        </p>
      </div>

      {
  loading ? (
    <div className="flex items-center justify-center h-[30vh] bg-white">
      <Loader />
    </div>
  ) : error ? (
    <div className="text-center text-red-500">{error}</div>
  ) : (
    <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
      {doctors?.requests?.map((doctor, index) => (
        <ShowDoctor key={index} doctor={doctor} />
      ))}
    </div>
  )
}


      <div className="flex justify-center items-center mt-20">
        <Link href={`/doctors`}>
          <Button className="bg-[#207DFF] px-3 py-3 hover:bg-[#F87171]">
            View All Doctors
          </Button>
        </Link>
      </div>
    </div>
  );
}
