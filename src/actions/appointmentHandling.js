"use server"
import connectDB from "@/lib/DataBase/connectDB";
import { AppointmentModal } from "@/lib/Modals/AppointmentModal";

export async function AdminAppointmentHandling(id , status){
       await connectDB()
       console.log(id , "id");
       console.log(status , "status");     
       let appointment = await AppointmentModal.findOneAndUpdate({_id : id}, {status: status})
       appointment = await appointment.save()
       return Response.json(appointment)
}

export const fetchAppointmentsAndSession = async () => {
       let session;
       try {
           // Fetch session using the auth method
           session = await auth();
       } catch (e) {
           console.log(e, "Error fetching session");
           session = null; // Gracefully handle session fetch error
       }
   
       // Fetch appointments and populate the necessary fields from the database
       const appointments = await AppointmentModal.find()
           .populate("request", "appointmentEnd appointmentStart firstName") // Populate 'request' field
           .populate("user", "email lastName firstName") // Populate 'user' field
           .lean(); // Ensure we get plain JavaScript objects (no Mongoose documents)
   
       // Return the data that will be used in the component
       return { session, appointments };
   };