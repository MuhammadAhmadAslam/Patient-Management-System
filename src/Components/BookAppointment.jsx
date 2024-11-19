"use client";
import React, { useState } from "react";
import { Calendar } from "./ui/calendar";
import { PostAppointments } from "@/actions/appointments";

const AppointmentBooking = ({userSession , doctorID , availableDays}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  // Define today's date
  const today = new Date();
  // Define the maximum date (15 days from today)
  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 15);

  // Function to check if the selected date is valid
  const isDateAllowed = (date) => {
    const dayName = date.toLocaleDateString("en-US", { weekday: "long" });
    return availableDays.includes(dayName); // Check if the selected day is in the availableDays array
  };

  // Handle booking button click
  const handleBookAppointment = async () => {
    if (!selectedDate) {
      setMessage("Please select a date before booking.");
      return;
    }
    // Check if the selected date is valid
    if (!isDateAllowed(selectedDate)) {
      setMessage("The selected date is not available for appointments.");
      return;
    }

    setLoading(true);
    setMessage("");

    // Simulate API call for booking
    // let obj = {
    //   status: "Pending",
    //   request: doctorID,
    //   user: userSession._id,
    //   timeStamp: new Date().toLocaleDateString(),
    // } 

    let response = await PostAppointments("Pending" , doctorID , userSession._id)
    console.log(response , "response in bookappoiintments.js");
    
  };

  return (
    <div className="rounded-lg bg-blue-50 p-6">
      <h2 className="text-2xl font-semibold text-gray-900">
        Book an Appointment
      </h2>
      <div className="mt-4 flex items-center justify-center">
        <Calendar
          mode="single"
          className="rounded-md border"
          fromDate={today} // Disable dates before today
          toDate={maxDate} // Disable dates after 15 days from today
          onSelect={(date) => {
            setSelectedDate(date);
            setMessage(""); // Clear any previous message
          }}
        />
      </div>
      {selectedDate && (
        <div className="mt-4 text-center text-gray-700">
          Selected Date: {selectedDate.toLocaleDateString()}
        </div>
      )}
      {message && (
        <div
          className={`mt-4 text-center ${
            message.includes("successfully") ? "text-green-500" : "text-red-500"
          }`}
        >
          {message}
        </div>
      )}
      <div className="mt-6 flex justify-center">
        <button
          onClick={handleBookAppointment}
          disabled={loading}
          className={`w-full rounded-md px-4 py-3 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${
            loading
              ? "bg-gray-400"
              : "bg-[#F87171] hover:bg-red-500 focus:ring-red-500"
          }`}
        >
          {loading ? "Booking..." : "Book Appointment"}
        </button>
      </div>
    </div>
  );
};

export default AppointmentBooking;
