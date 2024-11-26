// import PatientAppointments from "@/Components/PatientAppointments";
// import PatientAppointmentSideBar from "@/Components/PatientAppointmentSideBar";
// import { AppointmentModal } from "@/lib/Modals/AppointmentModal";
// import { auth } from "auth";

// export default async function AdminAppointments() {

//        let session;
//        try {
//          let fetchSession = await auth();
//          session = fetchSession;
//        } catch (e) {
//          console.log(e, "error agyaa");
//        }
//        console.log("session agayua", session);
     
//        // Fetch appointments and populate the 'request' and 'user' fields
//        let findAppointments = await AppointmentModal.find()
//          .populate("request" , "appointmentEnd appointmentStart firstName ")  // Populate the 'request' field
//          .populate("user" , "email , lastName , firstName").lean()    // Populate the 'user' field (if needed)
     
//        console.log(findAppointments, "find appointments");


//   return (
//     <div>
//       <h1>Admin Appointments</h1>
//       <div className="flex flex-col md:flex-row gap-8">
//         <PatientAppointmentSideBar />
//         <PatientAppointments
//           session={session}
//           appointments={findAppointments}
//           isAdmin={true}
//         />
//       </div>
//     </div>
//   );
// }

import PatientAppointments from "@/Components/PatientAppointments";
import PatientAppointmentSideBar from "@/Components/PatientAppointmentSideBar";
import { AppointmentModal } from "@/lib/Modals/AppointmentModal";
import { auth } from "auth";

// This function will run on the server side during the request and fetch necessary data
export async function getServerSideProps() {
    let session;
    try {
        let fetchSession = await auth();
        session = fetchSession;
    } catch (e) {
        console.log(e, "Error fetching session");
        session = null;  // Handle error scenario gracefully
    }

    // Fetch appointments and populate related fields
    let findAppointments = await AppointmentModal.find()
        .populate("request", "appointmentEnd appointmentStart firstName") // Populate 'request' field
        .populate("user", "email lastName firstName") // Populate 'user' field
        .lean(); // Make sure to return a plain JavaScript object

    // Return fetched data as props to be used in the page component
    return {
        props: {
            session,
            appointments: findAppointments || [], // Handle the case where there are no appointments
        },
    };
}

// Page component that receives props from `getServerSideProps`
export default function AdminAppointments({ session, appointments }) {
    return (
        <div>
            <h1>Admin Appointments</h1>
            <div className="flex flex-col md:flex-row gap-8">
                <PatientAppointmentSideBar />
                <PatientAppointments
                    session={session}
                    appointments={appointments}
                    isAdmin={true}
                />
            </div>
        </div>
    );
}
