"use client";
import React, { useState } from "react";
import { Calendar } from "./ui/calendar";
import { PostAppointments } from "@/actions/appointments";
import Swal from "sweetalert2";

const AppointmentBooking = ({ userSession, doctorID, availableDays, appointmentEnd, appointmentStart }) => {
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
    if (!isDateAllowed(selectedDate)) {
      setMessage("The selected date is not available for appointments.");
      return;
    }

    setLoading(true);
    setMessage("");

    try {
      const response = await PostAppointments(
        "Pending",
        doctorID,
        userSession.user._id,
        selectedDate.toLocaleDateString()
      );

      if (response.error) {
        setMessage(response.msg);
        Swal.fire({
          title: "No Cheating!",
          text: "You Have Already Booked An Appointment For This Day",
          icon: "question"
        });
      } else {
        setMessage(response.msg);
        Swal.fire({
          title: "Good job!",
          text: "The Appointment Booked SuccessFully",
          icon: "success"
        });
      }
    } catch (error) {
      setMessage("An error occurred while booking the appointment. Please try again.");
      Swal.fire({
        title: "The Internet?",
        text: "That thing is still around?",
        icon: "question"
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-lg bg-blue-50 p-6">
      <h2 className="text-2xl font-semibold text-gray-900">Book an Appointment</h2>
      <div className="mt-4 flex items-center justify-center flex-col">
        <Calendar
          mode="single"
          className="rounded-md border"
          fromDate={today}
          toDate={maxDate}
          onSelect={(date) => {
            setSelectedDate(date);
            setMessage(""); // Clear any previous message
          }}
        />
        <h1 className="mt-3 mb-2 text-center font-bold text-xl">Appointment Time</h1>
        <div className="flex justify-center items-center gap-3">
          <button className="bg-gray-700 text-white px-2 py-2">
            {appointmentStart}
          </button>
          <div className="text-center text-4xl text-black">
            {"-"}
          </div>
          <button className="bg-gray-700 text-white px-2 py-2">
            {appointmentEnd}
          </button>
        </div>

        <div className="mt-4">
          <h3 className="text-lg text-gray-700 text-center">Doctor{"'"}s Available Days:</h3>
          <div className="flex justify-center items-center gap-2 mt-2">
            {availableDays.map((day, index) => (
              <span
                key={index}
                className="bg-gray-700 text-white px-4 py-2 rounded-md"
              >
                {day}
              </span>
            ))}
          </div>
        </div>



      </div>
      {selectedDate && (
        <div className="mt-4 text-center text-gray-700">
          Selected Date: {selectedDate.toLocaleDateString()}
        </div>
      )}
      {message && (
        <div
          className={`mt-4 text-center ${message.includes("successfully") ? "text-green-500" : "text-red-500"
            }`}
        >
          {message}
        </div>
      )}
      <div className="mt-6 flex justify-center">
        <button
          onClick={handleBookAppointment}
          disabled={loading}
          className={`w-full rounded-md px-4 py-3 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${loading
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
