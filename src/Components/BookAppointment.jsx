// "use client"
// import React, { useState } from "react";
// import { Calendar } from "./ui/calendar";


// const AppointmentBooking = ({doctorID , daysAvailable}) => {
//     const [selectedDate, setSelectedDate] = useState(null);
//     const [loading, setLoading] = useState(false);
//     const [message, setMessage] = useState("");

//     // Define today's date
//     const today = new Date();

//     // Define the maximum date (15 days from today)
//     const maxDate = new Date();
//     maxDate.setDate(today.getDate() + 15);

//     // Doctor's available days (mock example)
//     // const doctorAvailableDays = [
//     //     new Date(2024, 10, 20), // Nov 20, 2024
//     //     new Date(2024, 10, 22), // Nov 22, 2024
//     //     new Date(2024, 10, 25), // Nov 25, 2024
//     // ];

//     // Handle booking button click
//     const handleBookAppointment = async () => {
//         if (!selectedDate) {
//             setMessage("Please select a date before booking.");
//             return;
//         }

//         console.log(selectedDate, "selectedDate");

//         setLoading(true);
//         setMessage("");

//         try {
//             const response = await fetch("/api/book-appointment", {
//                 method: "POST",
//                 headers: {
//                     "Content-Type": "application/json",
//                 },
//                 body: JSON.stringify({ date: selectedDate }),
//             });

//             if (!response.ok) {
//                 throw new Error("Failed to book the appointment.");
//             }

//             setMessage("Appointment booked successfully!");
//         } catch (error) {
//             setMessage(error.message || "An error occurred while booking.");
//         } finally {
//             setLoading(false);
//         }
//     };

//     // Check if a date is available
//     const isDateAvailable = (date) =>
//         daysAvailable.some(
//             (availableDate) =>
//                 availableDate.toDateString() === date.toDateString()
//         );

//     return (
//         <div className="rounded-lg bg-blue-50 p-6">
//             <h2 className="text-2xl font-semibold text-gray-900">
//                 Book an Appointment
//             </h2>
//             <div className="mt-4 flex items-center justify-center">
//                 <Calendar
//                     mode="single"
//                     className="rounded-md border"
//                     fromDate={today} // Disable dates before today
//                     toDate={maxDate} // Disable dates after 15 days from today
//                     onSelect={(date) => {
//                         if (isDateAvailable(date)) {
//                             setSelectedDate(date);
//                             setMessage(""); // Clear any previous error message
//                         } else {
//                             setSelectedDate(null);
//                             setMessage("This date is unavailable. Please select another.");
//                         }
//                     }}
//                     // Disable unavailable dates
//                     disabled={(date) => !isDateAvailable(date)}
//                 />
//             </div>
//             {selectedDate && (
//                 <div className="mt-4 text-center text-gray-700">
//                     Selected Date: {selectedDate.toLocaleDateString()}
//                 </div>
//             )}
//             {message && (
//                 <div
//                     className={`mt-4 text-center ${message.includes("successfully") ? "text-green-500" : "text-red-500"
//                         }`}
//                 >
//                     {message}
//                 </div>
//             )}
//             <div className="mt-6 flex justify-center">
//                 <button
//                     onClick={handleBookAppointment}
//                     disabled={loading || !selectedDate}
//                     className={`w-full rounded-md px-4 py-3 text-sm font-medium text-white focus:outline-none focus:ring-2 focus:ring-offset-2 ${loading || !selectedDate
//                             ? "bg-gray-400"
//                             : "bg-[#F87171] hover:bg-red-500 focus:ring-red-500"
//                         }`}
//                 >
//                     {loading ? "Booking..." : "Book Appointment"}
//                 </button>
//             </div>
//         </div>
//     );
// };

// export default AppointmentBooking;



"use client";
import React, { useState } from "react";
import { Calendar } from "./ui/calendar";

const AppointmentBooking = () => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Define today's date
  const today = new Date();

  // Define the maximum date (15 days from today)
  const maxDate = new Date();
  maxDate.setDate(today.getDate() + 15);

  // Doctor's available days (dynamic array)
  const availableDays = ["Monday", "Wednesday", "Friday"]; // Example array

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
    setTimeout(() => {
      setLoading(false);
      setMessage("Appointment booked successfully!");
    }, 1000);
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
