// import PatientAppointments from "@/Components/PatientAppointments";
// import WebPageLayout from "@/Components/WebPageLayout";
// import { AppointmentModal } from "@/lib/Modals/AppointmentModal";
// import { auth } from "auth";

// export default async function MyAppointments() {
//   let session;
//   try {
//     let fetchSession = await auth();
//     session = fetchSession;
//   } catch (e) {
//     console.log(e, "error agyaa");
//   }

//   console.log("session agayua", session);

//   // Populate the "user" field, not "Users"
//   let findAppointments = await AppointmentModal.find({ user: session.user._id }).populate("user");

//   console.log(findAppointments, "find appointments");

//   return (
//     <WebPageLayout>
//       <PatientAppointments session={session} />
//     </WebPageLayout>
//   );
// }


import PatientAppointments from "@/Components/PatientAppointments";
import PatientAppointmentSideBar from "@/Components/PatientAppointmentSideBar";
import WebPageLayout from "@/Components/WebPageLayout";
import { AppointmentModal } from "@/lib/Modals/AppointmentModal";
import { auth } from "auth";

export default async function MyAppointments() {
  let session;
  try {
    let fetchSession = await auth();
    session = fetchSession;
  } catch (e) {
    console.log(e, "error agyaa");
  }
  console.log("session agayua", session);

  // Fetch appointments and populate the 'request' and 'user' fields
  let findAppointments = await AppointmentModal.find({ user: session.user._id })
    .populate("request" , "appointmentEnd appointmentStart firstName ")  // Populate the 'request' field
    .populate("user" , "email , lastName , firstName").lean()    // Populate the 'user' field (if needed)

  console.log(findAppointments, "find appointments");

  return (
    <WebPageLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-black">My Appointments</h1>
        <div className="flex flex-col md:flex-row gap-8">
          <PatientAppointmentSideBar />
          <PatientAppointments session={session} appointments={findAppointments} />
        </div>
      </div>
    </WebPageLayout>
  );
}
