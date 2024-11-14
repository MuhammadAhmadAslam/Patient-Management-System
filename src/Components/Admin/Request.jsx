"use client";
import React, { useState, useEffect } from 'react';
import { Eye } from 'lucide-react';
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

function Request() {
  // State to store pending doctors
  const [pendingDoctors, setPendingDoctors] = useState([]);
  const [selectedDoctor, setSelectedDoctor] = useState(null);
  const [filter, setFilter] = useState("All"); // State to manage selected filter

  // Fetch pending doctor requests data on component mount
  useEffect(() => {
    const fetchPendingDoctors = async () => {
      try {
        const response = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}api/requests`);
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const data = await response.json();
        setPendingDoctors(data);
      } catch (error) {
        console.error('Error fetching pending doctors:', error);
      }
    };

    fetchPendingDoctors();
  }, []);

  // Function to filter the list of doctors based on selected filter
  const filteredDoctors = pendingDoctors.filter((doctor) => {
    if (filter === "All") return true;
    if (filter === "Pending") return doctor.Status === "Pending";
    if (filter === "Approved") return doctor.Status === "Approved";
    if (filter === "Rejected") return doctor.Status === "Rejected";
    return true;
  });

  return (
    <div className="space-y-6">
      {/* Filter Buttons */}
      <div className="flex items-center justify-between">
        <h1 className="text-3xl font-bold">Doctor Requests</h1>
        <div className="space-x-4">
          <Button
            className={`${filter === "All" ? "bg-[#207DFF]" : "bg-transparent text-[#207DFF]"} hover:bg-[bg-[#207DFF]]`}
            onClick={() => setFilter("All")}
          >
            All
          </Button>
          <Button
            className={`${filter === "Pending" ? "bg-[#207DFF]" : "bg-transparent text-[#207DFF]"} hover:bg-[bg-[#207DFF]]`}
            onClick={() => setFilter("Pending")}
          >
            Pending
          </Button>
          <Button
            className={`${filter === "Approved" ? "bg-[#207DFF]" : "bg-transparent text-[#207DFF]"} hover:bg-[bg-[#207DFF]]`}
            onClick={() => setFilter("Approved")}
          >
            Approved
          </Button>
          <Button
            className={`${filter === "Rejected" ? "bg-[#207DFF]" : "bg-transparent text-[#207DFF]"} hover:bg-[bg-[#207DFF]]`}
            onClick={() => setFilter("Rejected")}
          >
            Rejected
          </Button>
        </div>
      </div>

      {/* Badge with Pending Count */}
      <div className="flex items-center justify-between">
        <Badge variant="secondary" className="text-lg px-3 py-1">
          {filteredDoctors.length} {filter} Requests
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
              {filteredDoctors.map((doctor) => (
                <TableRow key={doctor.id}>
                  <TableCell className="font-medium">{doctor.firstName}</TableCell>
                  <TableCell>{doctor.speciality}</TableCell>
                  <TableCell>{doctor.gender}</TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={
                        doctor.status === "Pending"
                          ? "bg-[#FAA0A0] text-white"
                          : doctor.status === "Approved"
                          ? "bg-[#4CAF50] text-white"
                          : "bg-[#FF6347] text-white"
                      }
                    >
                      {doctor.status}
                    </Badge>
                  </TableCell>
                  <TableCell>
                    <Sheet>
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
                            Review and approve or reject the doctor's application.
                          </SheetDescription>
                        </SheetHeader>
                        {selectedDoctor && (
                          <div className="space-y-4 mt-4">
                            <p>
                              <strong>Name:</strong> {selectedDoctor.firstName} {selectedDoctor.lastName}
                            </p>
                            <p>
                              <strong>Specialty:</strong> {selectedDoctor.speciality}
                            </p>
                            <p>
                              <strong>Gender:</strong> {selectedDoctor.gender}
                            </p>
                            <p>
                              <strong>Status:</strong> {selectedDoctor.status}
                            </p>
                          </div>
                        )}
                      </SheetContent>
                    </Sheet>
                  </TableCell>
                </TableRow>
              ))}
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
