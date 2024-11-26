export const dynamic = 'force-dynamic';
import Image from "next/image";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/Components/ui/tabs";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import { Badge } from "@/Components/ui/badge";
import { Edit, Plus } from "lucide-react";
import WebPageLayout from "@/Components/WebPageLayout";
import { auth } from "auth";
import { redirect } from "next/dist/server/api-utils";

export async function getServerSideProps(context) {
  try {
    const session = await auth();
    if (!session) {
      return {
        redirect: {
          destination: "/",
          permanent: false,
        },
      };
    }
    return {
      props: { session }, // Pass session data to the component
    };
  } catch (error) {
    console.error("Error fetching session:", error);
    return {
      props: { session: null }, // Handle the error gracefully
    };
  }
}
export default async function ProfilePage() {

  return (
    <WebPageLayout isHeroSectionVisible={false}>
      <div className="min-h-screen bg-[#E1E1E1] p-4 sm:p-8">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-6">
            {/* Header Section */}
            <div className="flex flex-col sm:flex-row items-center mb-6 space-y-4 sm:space-y-0">
              <div className="relative w-24 h-24 sm:mr-6">
                <Image
                  src={session?.user?.image}
                  alt={session?.user?.name}
                  width={96}
                  height={96}
                  className="rounded-full border-4 border-[#207DFF]"
                />
              </div>
              <div className="text-center sm:text-left">
                <h1 className="text-2xl font-bold text-black">
                  {session?.user?.name}
                </h1>
                <p className="text-[#878787] break-all">{session?.user?.email}</p>
              </div>
            </div>

            {/* Tabs */}
            <Tabs defaultValue="profile" className="w-full">
              <TabsList className="grid w-full grid-cols-2 mb-4">
                <TabsTrigger value="profile" className="text-sm sm:text-base">
                  Profile
                </TabsTrigger>
                <TabsTrigger
                  value="appointments"
                  className="text-sm sm:text-base"
                >
                  My Appointments
                </TabsTrigger>
              </TabsList>
              <TabsContent value="profile">
                <Card>
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle>User Information</CardTitle>
                    <Button variant="outline" size="sm">
                      <Edit className="w-4 h-4 mr-2" />
                      Edit Profile
                    </Button>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-2">
                      <p>
                        <strong>Name:</strong> {session?.user?.name}
                      </p>
                      <p>
                        <strong>Email:</strong> {session?.user?.email}
                      </p>
                      <p>
                        <strong>Phone:</strong> {session?.user?.phoneNumber ? session?.user?.phoneNumber : "N/A"}
                      </p>
                      <p>
                        <strong>Address:</strong> {session?.user?.address ? session?.user?.address : "N/A"}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="appointments">
                <Card>
                  <CardHeader>
                    <CardTitle>Your Appointments</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      { session?.user?.appointments ? appointments?.map((appointment, index) => (
                        <div
                          key={index}
                          className="flex flex-col sm:flex-row items-start sm:items-center justify-between p-4 border rounded-lg space-y-2 sm:space-y-0"
                        >
                          <div>
                            <p className="text-[#207DFF] font-semibold">
                              {appointment.date}
                            </p>
                            <p className="text-sm text-gray-600">
                              {appointment.time}
                            </p>
                          </div>
                          <div className="sm:text-right">
                            <p className="font-medium">{appointment.doctor}</p>
                            <p className="text-sm text-gray-600">
                              {appointment.specialty}
                            </p>
                          </div>
                          <Badge
                            variant={
                              appointment.status === "Confirmed"
                                ? "default"
                                : "secondary"
                            }
                            className="mt-2 sm:mt-0"
                          >
                            {appointment.status}
                          </Badge>
                        </div>
                      )) : (
                            <div className="flex justify-center items-center">
                            <h1 className="text-center font-bold mx-5 my-3">No Appointments Data</h1>
                            </div>
                      )}
                    </div>
                    <Button className="w-full mt-4">
                      <Plus className="w-4 h-4 mr-2" />
                      Add New Appointment
                    </Button>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>
      </div>
    </WebPageLayout>
  );
}
