// "use client";
// import React, { useState } from "react";

// const PatientAppointments = ({currentPatientAppointments}) => {
//   const [appointments, setAppointments] = useState([
//     {
//       id: 1,
//       doctorName: "Dr. Jane Doe",
//       specialty: "Cardiologist",
//       date: "2024-11-20",
//       time: "10:00 AM",
//       status: "Pending",
//     },
//     {
//       id: 2,
//       doctorName: "Dr. John Smith",
//       specialty: "Dermatologist",
//       date: "2024-11-18",
//       time: "2:00 PM",
//       status: "Accepted",
//     },
//     {
//       id: 3,
//       doctorName: "Dr. Emily Clark",
//       specialty: "Pediatrician",
//       date: "2024-11-15",
//       time: "11:00 AM",
//       status: "Cancelled",
//     },
//   ]);

//   const [filter, setFilter] = useState("all");
//   const [search, setSearch] = useState("");

//   const handleFilterChange = (e) => {
//     setFilter(e.target.value);
//   };

//   const handleSearchChange = (e) => {
//     setSearch(e.target.value.toLowerCase());
//   };

//   const filteredAppointments = currentPatientAppointments.filter((appointment) => {
//     const matchesFilter =
//       filter === "all" || appointment.status.toLowerCase() === filter;
//     const matchesSearch =
//       appointment.doctorName.toLowerCase().includes(search) ||
//       appointment.specialty.toLowerCase().includes(search);
//     return matchesFilter && matchesSearch;
//   });

//   return (
//     <div className="bg-[#E1E1E1] min-h-screen p-6">
//       {/* Header */}
//       <div className="header text-center py-4 bg-white shadow-md rounded-lg mb-6">
//         <h1 className="text-3xl pb-4 font-bold text-[#207DFF]">My Appointments</h1>
//         <p className="text-gray-500 ">
//           Track and manage all your appointments here.
//         </p>
//       </div>

//       {/* Filter Bar */}
//       <div className="filter-bar bg-white p-4 rounded-lg shadow-md flex flex-wrap gap-4 items-center justify-between mb-6">
//         <input
//           type="text"
//           placeholder="Search by Doctor or Specialty"
//           value={search}
//           onChange={handleSearchChange}
//           className="border border-gray-300 rounded-lg p-2 flex-1"
//         />
//         <select
//           value={filter}
//           onChange={handleFilterChange}
//           className="border border-gray-300 rounded-lg p-2"
//         >
//           <option value="all">All Status</option>
//           <option value="pending">Pending</option>
//           <option value="accepted">Accepted</option>
//           <option value="cancelled">Cancelled</option>
//         </select>
//       </div>

//       {/* Appointment Cards */}
//       <div className="appointment-list grid gap-4">
//         {filteredAppointments.length > 0 ? (
//           filteredAppointments.map((appointment) => (
//             <div
//               key={appointment.id}
//               className="appointment-card bg-white shadow-md p-4 rounded-lg flex justify-between  flex-col"
//             >
//               <div className="info space-y-2 flex justify-start flex-col">
//                 <h2 className="text-lg font-bold text-black">
//                   {appointment.doctorName}
//                 </h2>
//                 <p className="text-gray-600">{appointment.specialty}</p>
//                 <p className="text-[#207DFF]">
//                   {appointment.date}, {appointment.time}
//                 </p>
//                 <span
//                   className={`badge px-2 w-[120px] text-center py-1 rounded-full text-white ${
//                     appointment.status === "Pending"
//                       ? "bg-yellow-400"
//                       : appointment.status === "Accepted"
//                       ? "bg-green-500"
//                       : "bg-[#F87171]"
//                   }`}
//                 >
//                   {appointment.status}
//                 </span>
//               </div>
//               <div className="actions flex space-x-4 justify-end flex-wrap mt-6 gap-2">
//                 <button className="bg-[#F87171] text-white px-4 py-2 rounded-lg hover:bg-red-500">
//                   Get Prescription
//                 </button>
//                 {appointment.status === "Pending" && (
//                   <button className="border border-black text-black px-4 py-2 rounded-lg hover:bg-gray-200">
//                     Cancel Appointment
//                   </button>
//                 )}
//               </div>
//             </div>
//           ))
//         ) : (
//           <p className="text-center text-gray-500">
//             No appointments found for your selected filters.
//           </p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default PatientAppointments;
"use client"

import React, { useState } from "react";

const PatientAppointments = ({ currentPatientAppointments }) => {

  return (
    <>
    <h1>My Appointments</h1>
    <ul>
      {
        currentPatientAppointments.map((appointment) => (
          <li key={appointment.id}>
              {appointment.request.firstName}
          </li>
        ))
      }
    </ul>
    </>
  );
};

export default PatientAppointments;
