import { getSession } from "@/actions/SignOut";
import PatientAppointments from "@/Components/PatientAppointments";
import PatientAppointmentSideBar from "@/Components/PatientAppointmentSideBar";
import WebPageLayout from "@/Components/WebPageLayout";
import { AppointmentModal } from "@/lib/Modals/AppointmentModal";
import { auth } from "auth";

export default async function MyAppointments() {
 
  let session = await getSession()

  // Fetch appointments and populate the 'request' and 'user' fields
  let findAppointments = await AppointmentModal.find({ user: session?.user?._id })
    .populate("request", "appointmentEnd appointmentStart firstName ")  // Populate the 'request' field
    .populate("user", "email , lastName , firstName").lean()    // Populate the 'user' field (if needed)

  console.log(findAppointments, "find appointments");

  return (
    <WebPageLayout>
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-black">My Appointments</h1>
        {
          findAppointments.length === 0 ? (
            <div className="flex justify-center items-center h-[60vh]">
              <p className="text-gray-600 text-lg">
                You have no appointments scheduled.
              </p>
            </div>
          ) : (
            <div className="flex flex-col md:flex-row gap-8">
              <PatientAppointmentSideBar session={session} appointments={findAppointments} />
              <PatientAppointments session={session} appointments={findAppointments} />
            </div>
          )
        }
      </div>
    </WebPageLayout>
  );
}
