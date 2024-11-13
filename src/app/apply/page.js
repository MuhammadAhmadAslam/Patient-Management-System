import { User, Stethoscope, Calendar } from "lucide-react";
import WebPageLayout from "@/Components/WebPageLayout";
import { redirect } from "next/navigation";

import DoctorApplicationForm from "@/Components/DocotrApplyForm";
import Navbar from "@/Components/NavBar";
import Footer from "@/Components/Footer";
import { auth } from "auth";
import { RequestModal } from "@/lib/Modals/RequestModal";
export const dynamic = "force-dynamic";

export default async function DoctorApplicationsForm() {
  let session;
  try {
    session = await auth();
    console.log(session, "session in DOCTOR APPLY FORM");
    if (!session) {
      redirect("/");
    }
  } catch (error) {
    console.error("Error fetching session:", error);
  }

  let checking = await RequestModal.findOne({ email: session.user.email });
  return (
    <WebPageLayout isHeroSectionVisible={false}>
      <div className="min-h-screen bg-[#F5F5F5]">
        <div className="w-full bg-[#207DFF] bg-opacity-90 py-8 px-4 sm:px-6 lg:px-8 bg-[url('/healthcare-bg.jpg')] bg-cover bg-center">
          <h1 className="text-4xl font-bold text-center text-white">
            Doctor Application Form
          </h1>
        </div>

        <main className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg border border-[#207DFF] overflow-hidden">
            <div className="p-8">
              {checking && checking.Status === "Pending" && (
                <div className="text-center text-xl font-bold text-red-600">
                  Your request is still pending approval.
                </div>
              )}
              {checking && checking.Status === "Rejected" && (
                <div className="text-center text-xl font-bold text-red-600">
                  Your request has been rejected.
                </div>
              )}
              {checking && checking.Status === "Approved" && (
                <div className="text-center text-xl font-bold text-green-600">
                  Your request has been approved. You can now book an
                  appointment.
                </div>
              )}
              {!checking && <DoctorApplicationForm session={session} />}
            </div>
          </div>
        </main>
      </div>
    </WebPageLayout>
  );
}
