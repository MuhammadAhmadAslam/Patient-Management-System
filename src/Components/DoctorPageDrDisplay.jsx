"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "./ui/button";
import SearchInput from "./SerachBar";
import Link from "next/link";

function DoctorPageDrDisplay() {
       const doctors = [
              {
                id: 1,
                name: "Dr. Emily Carter",
                specialty: "Cardiologist",
                image: "https://randomuser.me/api/portraits/women/68.jpg",
                fees: "$200",
                hospital: "City Heart Center",
                days: "Monday, Wednesday, Friday",
                appointmentTime: "10:00 AM - 2:00 PM",
              },
              {
                id: 2,
                name: "Dr. Michael Thompson",
                specialty: "Dermatologist",
                image: "https://randomuser.me/api/portraits/men/75.jpg",
                fees: "$150",
                hospital: "Skin Care Clinic",
                days: "Tuesday, Thursday",
                appointmentTime: "1:00 PM - 5:00 PM",
              },
              {
                id: 3,
                name: "Dr. Sarah Johnson",
                specialty: "Pediatrician",
                image: "https://randomuser.me/api/portraits/women/85.jpg",
                fees: "$180",
                hospital: "Children's Hospital",
                days: "Monday - Friday",
                appointmentTime: "9:00 AM - 3:00 PM",
              },
              {
                id: 4,
                name: "Dr. James Anderson",
                specialty: "Orthopedic Surgeon",
                image: "https://randomuser.me/api/portraits/men/52.jpg",
                fees: "$250",
                hospital: "Ortho Care Center",
                days: "Wednesday, Saturday",
                appointmentTime: "11:00 AM - 4:00 PM",
              },
              {
                id: 5,
                name: "Dr. Amanda Lewis",
                specialty: "Ophthalmologist",
                image: "https://randomuser.me/api/portraits/women/90.jpg",
                fees: "$170",
                hospital: "Eye Vision Clinic",
                days: "Monday, Thursday",
                appointmentTime: "2:00 PM - 6:00 PM",
              },
              {
                id: 6,
                name: "Dr. David Brown",
                specialty: "Neurologist",
                image: "https://randomuser.me/api/portraits/men/34.jpg",
                fees: "$300",
                hospital: "Brain Health Center",
                days: "Tuesday, Thursday, Saturday",
                appointmentTime: "10:00 AM - 1:00 PM",
              },
              {
                id: 7,
                name: "Dr. Lisa White",
                specialty: "Gynecologist",
                image: "https://randomuser.me/api/portraits/women/71.jpg",
                fees: "$190",
                hospital: "Women Health Clinic",
                days: "Monday - Wednesday",
                appointmentTime: "9:00 AM - 1:00 PM",
              },
              {
                id: 8,
                name: "Dr. Robert Harris",
                specialty: "General Physician",
                image: "https://randomuser.me/api/portraits/men/64.jpg",
                fees: "$120",
                hospital: "City Health Clinic",
                days: "Tuesday - Friday",
                appointmentTime: "10:00 AM - 3:00 PM",
              },
              {
                id: 9,
                name: "Dr. Karen Walker",
                specialty: "Psychiatrist",
                image: "https://randomuser.me/api/portraits/women/29.jpg",
                fees: "$220",
                hospital: "Mind Care Clinic",
                days: "Wednesday, Saturday",
                appointmentTime: "12:00 PM - 5:00 PM",
              },
              {
                id: 10,
                name: "Dr. John Taylor",
                specialty: "ENT Specialist",
                image: "https://randomuser.me/api/portraits/men/77.jpg",
                fees: "$160",
                hospital: "Ear, Nose & Throat Center",
                days: "Monday, Thursday",
                appointmentTime: "11:00 AM - 3:00 PM",
              },
              {
                id: 11,
                name: "Dr. Susan Miller",
                specialty: "Pulmonologist",
                image: "https://randomuser.me/api/portraits/women/12.jpg",
                fees: "$250",
                hospital: "Lung Care Hospital",
                days: "Tuesday, Friday",
                appointmentTime: "10:00 AM - 2:00 PM",
              },
              {
                id: 12,
                name: "Dr. Anthony Scott",
                specialty: "Endocrinologist",
                image: "https://randomuser.me/api/portraits/men/65.jpg",
                fees: "$230",
                hospital: "Diabetes & Hormone Clinic",
                days: "Monday, Thursday",
                appointmentTime: "1:00 PM - 4:00 PM",
              },
              {
                id: 13,
                name: "Dr. Megan Green",
                specialty: "Gastroenterologist",
                image: "https://randomuser.me/api/portraits/women/56.jpg",
                fees: "$260",
                hospital: "Digestive Health Center",
                days: "Wednesday, Saturday",
                appointmentTime: "10:00 AM - 2:00 PM",
              },
              {
                id: 14,
                name: "Dr. Daniel Adams",
                specialty: "Oncologist",
                image: "https://randomuser.me/api/portraits/men/38.jpg",
                fees: "$300",
                hospital: "Cancer Care Hospital",
                days: "Monday, Friday",
                appointmentTime: "9:00 AM - 1:00 PM",
              },
              {
                id: 15,
                name: "Dr. Jessica Hall",
                specialty: "Rheumatologist",
                image: "https://randomuser.me/api/portraits/women/46.jpg",
                fees: "$210",
                hospital: "Joint Care Clinic",
                days: "Tuesday, Thursday",
                appointmentTime: "11:00 AM - 3:00 PM",
              },
              {
                id: 16,
                name: "Dr. Brian Martinez",
                specialty: "Urologist",
                image: "https://randomuser.me/api/portraits/men/83.jpg",
                fees: "$180",
                hospital: "Kidney Care Center",
                days: "Wednesday, Saturday",
                appointmentTime: "2:00 PM - 6:00 PM",
              },
              {
                id: 17,
                name: "Dr. Linda Lee",
                specialty: "Nephrologist",
                image: "https://randomuser.me/api/portraits/women/36.jpg",
                fees: "$270",
                hospital: "Renal Health Center",
                days: "Monday - Friday",
                appointmentTime: "10:00 AM - 3:00 PM",
              },
              {
                id: 18,
                name: "Dr. Kevin Robinson",
                specialty: "Hematologist",
                image: "https://randomuser.me/api/portraits/men/32.jpg",
                fees: "$280",
                hospital: "Blood Care Clinic",
                days: "Tuesday, Friday",
                appointmentTime: "1:00 PM - 5:00 PM",
              },
              {
                id: 19,
                name: "Dr. Rebecca Moore",
                specialty: "Allergist",
                image: "https://randomuser.me/api/portraits/women/25.jpg",
                fees: "$150",
                hospital: "Allergy Care Center",
                days: "Thursday, Saturday",
                appointmentTime: "11:00 AM - 4:00 PM",
              },
              {
                id: 20,
                name: "Dr. Charles Evans",
                specialty: "Anesthesiologist",
                image: "https://randomuser.me/api/portraits/men/57.jpg",
                fees: "$250",
                hospital: "Anesthesia Care Clinic",
                days: "Monday, Wednesday, Friday",
                appointmentTime: "9:00 AM - 12:00 PM",
              },
            ];
            
  const filteredDoctorsCategory = [
    ...new Set(doctors.map((doctor) => doctor.specialty)),
  ];

  return (
    <>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between gap-6 p-4 lg:p-8">
        <h1 className="text-2xl font-bold text-gray-800 text-center lg:text-left">
          All Doctors Available Here
        </h1>
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <select
            name="doctors"
            className="border border-gray-300 rounded-lg px-4 py-2 w-full sm:w-auto focus:outline-none focus:border-blue-500 transition"
          >
            {filteredDoctorsCategory.map((category, index) => (
              <option key={index} value={category}>
                {category}
              </option>
            ))}
          </select>
          <SearchInput />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-12 container mx-auto">
        {doctors.map((doctor, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center border border-[#207DFF] pb-3 rounded-xl"
          >
            <div className="relative w-full h-[200px] mb-6">
              <Image
                src={doctor.image}
                alt={doctor.name}
                fill
                className="object-cover rounded-lg"
              />
            </div>
            <h3 className="text-xl font-semibold mb-2">{doctor.name}</h3>
            <p className="text-blue-500 text-sm font-medium tracking-wider mb-4">
              {doctor.specialty}
            </p>
            <Link href="/doctors/2">
              <Button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full px-4">
                See Details About Doctor
              </Button>
            </Link>
          </div>
        ))}
      </div>
    </>
  );
}

export default DoctorPageDrDisplay;
