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
//     .populate("request" , "appointmentEnd appointmentStart firstName")  // Populate the 'request' field
//     .populate("user" , "email , lastName , firstName");    // Populate the 'user' field (if needed)

  console.log(findAppointments, "find appointments");

  return (
    <WebPageLayout>
      <PatientAppointments session={session} currentPatientAppointments={findAppointments}/>
    </WebPageLayout>
  );
}
