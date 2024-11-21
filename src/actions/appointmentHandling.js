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