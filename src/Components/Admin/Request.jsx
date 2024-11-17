"use client";
import React, { useState, useEffect } from "react";
import { Eye } from "lucide-react";
import { Badge } from "@/Components/ui/badge";
import { Button } from "@/Components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/Components/ui/card";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/Components/ui/table";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
  SheetTrigger,
} from "@/Components/ui/sheet";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { getRequest } from "@/actions/Requests";
import { handleApprove, handleReject } from "@/actions/ApproveRequest";

function Request({ status, requests, isLoading }) {
  // State to store pending doctors
  const [pendingDoctors, setPendingDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [filter, setFilter] = useState("All"); // State to manage selected filter
  console.log(requests, "doctor requests for map in component");

  let searchParams = useSearchParams();
  const pathname = usePathname()
  const { replace } = useRouter()

  useEffect(() => {

    let params = new URLSearchParams();
    if (filter) {
      params.set("status", filter)
    } else {
      params.delete("status")
    }
    console.log(filter, "filter");

    console.log(params, "params");
    replace(`${pathname}?${params.toString()}`);
    getRequest(filter);
  }, [filter]);
  // Fetch pending doctor requests data on component mount

  console.log(requests, "request in request component");

  const [isSheetOpen, setIsSheetOpen] = useState(false);

  return (
    <div className="space-y-6">
      {/* Filter Buttons */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Doctor Requests</h1>
        <div className="space-x-4">
          <Button
            className={`${filter === "All"
                ? "bg-[#207DFF]"
                : "bg-transparent text-[#207DFF]"
              } hover:bg-[bg-[#207DFF]]`}
            onClick={() => setFilter("All")}
          >
            All
          </Button>
          <Button
            className={`${filter === "Pending"
                ? "bg-[#207DFF]"
                : "bg-transparent text-[#207DFF]"
              } hover:bg-[bg-[#207DFF]]`}
            onClick={() => setFilter("Pending")}
          >
            Pending
          </Button>
          <Button
            className={`${filter === "Approved"
                ? "bg-[#207DFF]"
                : "bg-transparent text-[#207DFF]"
              } hover:bg-[bg-[#207DFF]]`}
            onClick={() => setFilter("Approved")}
          >
            Approved
          </Button>
          <Button
            className={`${filter === "Rejected"
                ? "bg-[#207DFF]"
                : "bg-transparent text-[#207DFF]"
              } hover:bg-[bg-[#207DFF]]`}
            onClick={() => setFilter("Rejected")}
          >
            Rejected
          </Button>
        </div>
      </div>

      {/* Badge with Pending Count */}
      <div className="flex items-center justify-between">
        <Badge variant="secondary" className="text-lg px-3 py-1">
          Requests
        </Badge>
      </div>

      {/* Table with Filtered Doctors */}
      <Card className="bg-white">
        <CardHeader>
          <CardTitle>Doctor Requests</CardTitle>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Name</TableHead>
                <TableHead>Specialty</TableHead>
                <TableHead>Gender</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Action</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {requests ? requests.map((doctor) => (
                <TableRow key={doctor.id}>
                  <TableCell className="font-medium">
                    {doctor.firstName}
                  </TableCell>
                  <TableCell>{doctor.speciality}</TableCell>
                  <TableCell>{doctor.gender}</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={
                        doctor.Status === "Pending"
                          ? "bg-[#FAA0A0] text-white"
                          : doctor.Status === "Approved"
                            ? "bg-[#4CAF50] text-white"
                            : "bg-[#FF6347] text-white"
                      }
                    >
                      {doctor.Status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
                      <SheetTrigger asChild>
                        <Button
                          variant="outline"
                          size="sm"
                          className="flex items-center gap-2"
                          onClick={() => setSelectedDoctor(doctor)}
                        >
                          <Eye className="h-4 w-4" />
                          View Details
                        </Button>
                      </SheetTrigger>
                      <SheetContent side="right" className="max-w-md">
                        <SheetHeader>
                          <SheetTitle>Doctor Request Details</SheetTitle>
                          <SheetDescription>
                            Review the doctors application and decide whether to approve or reject.
                          </SheetDescription>
                        </SheetHeader>

                        {selectedDoctor && (
                          <div className="space-y-6 mt-6">
                            {/* Doctor Info */}
                            <div className="border border-gray-200 rounded-lg p-4 shadow-md">
                              <h2 className="text-lg font-semibold text-gray-800">
                                Personal Information
                              </h2>
                              <div className="mt-2 space-y-2">
                                <p>
                                  <strong className="text-gray-600">Name:</strong>{" "}
                                  {selectedDoctor.firstName} {selectedDoctor.lastName}
                                </p>
                                <p>
                                  <strong className="text-gray-600">Email:</strong>{" "}
                                  {selectedDoctor.email}
                                </p>
                                <p>
                                  <strong className="text-gray-600">Phone:</strong>{" "}
                                  {selectedDoctor.phone}
                                </p>
                                <p>
                                  <strong className="text-gray-600">Gender:</strong>{" "}
                                  {selectedDoctor.gender}
                                </p>
                                <p>
                                  <strong className="text-gray-600">Address:</strong>{" "}
                                  {selectedDoctor.address}
                                </p>
                              </div>
                            </div>

                            {/* Professional Info */}
                            <div className="border border-gray-200 rounded-lg p-4 shadow-md">
                              <h2 className="text-lg font-semibold text-gray-800">
                                Professional Information
                              </h2>
                              <div className="mt-2 space-y-2">
                                <p>
                                  <strong className="text-gray-600">Specialty:</strong>{" "}
                                  {selectedDoctor.specialty}
                                </p>
                                <p>
                                  <strong className="text-gray-600">Experience:</strong>{" "}
                                  {selectedDoctor.experience} years
                                </p>
                                <p>
                                  <strong className="text-gray-600">Bio:</strong>{" "}
                                  {selectedDoctor.bio}
                                </p>
                              </div>
                            </div>

                            {/* Appointment Info */}
                            <div className="border border-gray-200 rounded-lg p-4 shadow-md">
                              <h2 className="text-lg font-semibold text-gray-800">
                                Appointment Details
                              </h2>
                              <div className="mt-2 space-y-2">
                                <p>
                                  <strong className="text-gray-600">Start Time:</strong>{" "}
                                  {selectedDoctor.appointmentStart}
                                </p>
                                <p>
                                  <strong className="text-gray-600">End Time:</strong>{" "}
                                  {selectedDoctor.appointmentEnd}
                                </p>
                                <p>
                                  <strong className="text-gray-600">Days Available:</strong>{" "}
                                  {selectedDoctor.daysAvailable.length > 0
                                    ? selectedDoctor.daysAvailable.join(", ")
                                    : "Not specified"}
                                </p>
                              </div>
                            </div>

                            {/* Request Status */}
                            <div className="flex items-center justify-between mt-4">
                              <Badge
                                variant="secondary"
                                className={`${selectedDoctor.Status === "Pending"
                                    ? "bg-yellow-500 text-white"
                                    : selectedDoctor.Status === "Approved"
                                      ? "bg-green-500 text-white"
                                      : "bg-red-500 text-white"
                                  } px-4 py-2 text-sm rounded-full`}
                              >
                                {selectedDoctor.Status}
                              </Badge>
                  
                            </div>
                            {
                              selectedDoctor.Status === "Pending" && (
                                <div className="flex items-center justify-between mt-4">
                                  <Button
                                  className="w-full mr-2"
                                    variant="outline"
                                    onClick={() => { 
                                      setIsSheetOpen(false); 
                                      handleApprove(selectedDoctor)
                                    }
                                    }
                                  >
                                    Approve
                                  </Button>
                                  <Button
                                  className="w-full mr-2"
                                    variant="destructive"
                                    onClick={() => { 
                                      setIsSheetOpen(false); 
                                      handleReject(selectedDoctor)
                                    }
                                    }
                                  >
                                    Reject
                                  </Button>
                                </div>
                              )
                            }
                          </div>
                         
                        )}
                      </SheetContent>
                    </Sheet>

                  </TableCell>
                </TableRow>
              )
              
              )
                :
                <h1>No Request To Show</h1>
              }
            </TableBody>
          </Table>
        </CardContent>
      </Card>
    </div>
  );
}

// export async function getServerSideProps() {
//   try {
//     // Fetch pending doctor requests data from the API
//     const res = await fetch(`${process.env.BASE_URL}api/requests`);
//     const data = await res.json();

//     return {
//       props: {
//         pendingDoctors: data, // Passing fetched doctors list to the page
//       },
//     };
//   } catch (error) {
//     console.error('Error fetching pending doctors:', error);
//     return {
//       props: {
//         pendingDoctors: [],
//       },
//     };
//   }
// }

export default Request;
