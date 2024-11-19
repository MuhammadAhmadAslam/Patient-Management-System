import connectDB from "@/lib/DataBase/connectDB";
import { AppointmentModal } from "@/lib/Modals/AppointmentModal";

export async function GET(req){
       await connectDB()
       let appointment = await AppointmentModal.find()
       console.log( await appointment , "appointments");
       return Response.json(appointment)
}


export async function POST(req){
       await connectDB()
       try{
             let appointment = await req.json()
             let newAppointment = await new AppointmentModal({...appointment})
             newAppointment = await newAppointment.save()
             return Response.json(newAppointment)
       } catch(e){
             console.error("Error in POST request:", e)
             return Response.json({ error: true })
       }
}