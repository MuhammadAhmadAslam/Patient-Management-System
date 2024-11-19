import PatientAppointments from "@/Components/PatientAppointments";
import WebPageLayout from "@/Components/WebPageLayout";

export default async function MyAppointments(){
       return(
              <WebPageLayout>
                     <PatientAppointments />
              </WebPageLayout>
       )
} 